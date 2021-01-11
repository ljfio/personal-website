---
title: Self-Hosted GitHub Actions Runner in Docker
description: How to run your CI/CD pipeline from GitHub using Docker
publishedAt: 2021-01-11 21:27:00
published: true
---

Continuous Integration / Continuous Deployment (CI/CD) is an approach to building and testing software continuously while deploying any successful builds of the software to a live production environment when appropriate. This is a solution applied in modern software development to increase developer velocity.

GitHub, the popular code hosting platform, offers the Actions CI/CD solution to software projects hosted on the platform.
Actions are broken into workflows that perform various steps to testing and build a piece of software.

The time to execute the workflow (in minutes) is calculated and billed to the organisation.

When using Actions in private repositories, this is deducted from an allocation of free minutes each month.
Depending on the plan you have, determines how many free minutes you have of private build time.
The platform provides unlimited minutes for running workflows on public repositories.

Since GitHub only offers unlimited free minutes for running workflows for open source projects, what happens when you run out of the allocated amount for closed source projects?

The answer is that organisations (with a valid credit card associated) would be billed a rate per minute of build time.

What if there was another "free" way to run workflows on private repositories.

## Introducing Self-Hosted Runners

Self-hosted runners allow you to run workflows just like on GitHub's platform in any environment of your choosing. This can allow you to setup a server farm of Windows, Linux or macOS machines to build your projects without paying GitHub for additional build time.

You can setup a runner to run workflows in the following ways:
- Repository
- Organisation
- Enterprise

Since you have control over the environment you can deploy a runner onto any machine of your choosing. For demonstrating this I have chosen to deploy this to an Ubuntu 18.04 machine.

N.B. These commands will change as new versions of the runner are released, ensure you follow the instructions defined under the settings section of an organisation or repository when adding a new Actions runner.

### Download Runner Software

Find a directory to download the Actions runner software into and run the following commands. This will download and extract the latest runner for you to use.

```
mkdir actions-runner && cd actions-runner

curl -O -L https://github.com/actions/runner/releases/download/v2.275.1/actions-runner-linux-x64-2.275.1.tar.gz

tar xzf ./actions-runner-linux-x64-2.275.1.tar.gz
```

### Authenticating a Runner Instance

A runner instance is required to be registered with GitHub and can be done but running the `config.sh` script with the appropriate URL and token generated under the settings of the organisation or repository.

```
./config.sh --url https://github.com/organisation --token ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

### Running and Using a Runner

To run the runner, invoke the `run.sh` script. This will connect to GitHub and await for jobs to run.

```
./run.sh
```

The workflow in the repository that you wish to use the newly created self-hosted runner must be updated to target the `self-hosted` label.

```
runs-on: self-hosted
```

To target a specific operating system or architecture, you can qualify your requirements by entering in the appropriate labels.

```
runs-on: [self-hosted, linux, ARM64]
```

## Setup Docker to Host a Runner

Using containers isn't just jumping on the latest trend, it can offer us security and simplicity.

In having the runner process in a containerised process can ensure that rogue code in our projects do not expose secrets or interfere with other processes.

Multiple runners can be setup for organisations you are part of, allowing concurrent running of workflows utilising just one physical (or virtual) machine.

Outlined below is a `Dockerfile` which builds and image with the GitHub Actions runner ready to spin up and accept workflows.

```docker
# base image
FROM ubuntu:18.04

# set the github runner version
ARG RUNNER_VERSION="2.275.1"

# update the base packages and add a non-sudo user
RUN apt-get update -y && apt-get upgrade -y && useradd -m docker

# install curl to download
RUN apt-get install -y curl

# cd into the user directory
RUN cd /home/docker && mkdir actions-runner && cd actions-runner

# download and unzip the github actions runner
RUN curl -O -L https://github.com/actions/runner/releases/download/v${RUNNER_VERSION}/actions-runner-linux-x64-${RUNNER_VERSION}.tar.gz \
    && tar xzf ./actions-runner-linux-x64-${RUNNER_VERSION}.tar.gz

# install some additional dependencies
RUN chown -R docker ~docker && /home/docker/actions-runner/bin/installdependencies.sh

# copy over the start.sh script
COPY start.sh start.sh

# make the script executable
RUN chmod +x start.sh

# since the config and run script for actions are not allowed to be run by root,
# set the user to "docker" so all subsequent commands are run as the docker user
USER docker

# set the entrypoint to the start.sh script
ENTRYPOINT ["./start.sh"]
```

The contents of `start.sh` uses the `config.sh` script seen previously to register a runner in an organisation using environment variables we set when running our Docker container.

```bash
#!/bin/bash

ORGANIZATION=$ORGANIZATION
REG_TOKEN=$REG_TOKEN

cd /home/docker/actions-runner

./config.sh --url https://github.com/${ORGANIZATION} --token ${REG_TOKEN}

cleanup() {
    echo "Removing runner..."
    ./config.sh remove --unattended --token ${REG_TOKEN}
}

trap 'cleanup; exit 130' INT
trap 'cleanup; exit 143' TERM

./run.sh & wait $!
```

## Creating a Runner Instance Using Docker

Once the container has been built, you can run the runner using the `docker run` command.

Ensure that the `ORGANIZATION` and `REG_TOKEN` environment variables are defined for the organisation you are setting up a self-hosted runner in.

```
docker run \
    --detach \
    --env ORGANIZATION=organisation \
    --env REG_TOKEN=ABCDEFGHIJKLMNOPQRSTUVWXYZ \
    --restart unless-stopped \
    --name github-runner-for-organisation \
    github-actions-runner
```