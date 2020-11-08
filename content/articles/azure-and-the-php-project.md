---
title: Azure and the PHP Project
description: Using PHP in Microsoft's cloud is a pain in the...
publishedAt: 2016-12-04 15:51:00
published: true
---

A little bit of an introduction to this post: as part of Web Application Development coursework we were tasked to create a website using PHP and Azure.
Azure was selected as modern web application development is more likely to involve a cloud element.
Being aware of cloud technologies and how to use them could be deemed valuable by a prospective employer.
This is just a brief outline of Azure's shortcomings, how I got started and the issues I had to overcome.

## Setup

As a student, Azure offers free plans on it's App Service for getting website projects off of the ground.
To obtain this specific subscription you must activate it through the Imagine portal on a Microsoft account (not a work or school account).
We used the basic App Service and configured it to run PHP 7.0. I'll cover 7.0 in another post but the benefits we could see were stricter data typing and better performance.

## GitHub Deployments

If you are a student and you have not signed up to GitHub's Education pack and free Micro account offering, get over there ASAP!
Since this was a group coursework task we were able to collaborate on the website using GitHub and to push the latest versions live to Azure through the GitHub integration.

## Tiny Database

Since we were tasked with using PHP, the logical choice for storing our data was in a MySQL database.
ClearDB offers a MySQL database within the cloud with only required information to setup was a desired database name.
One catch with this was the size limitation: how much data we could store was only 20 megabytes. I have FLAC files on my laptop that are larger than this.
Looking back it was offered to us within an App Service instance to setup _MySQL in App_.
This allows us to utilise the local disk of an App Service instance (1 GB per App, but 1 GB per Plan), which is many times larger than the free ClearDB instance.

## Using Composer

Our choice of framework was Slim which required us to install via Composer.
Since our code on GitHub stored the `composer.json` but not the vendor folder, we needed to run composer to install the dependencies.
Luckily an [extension][2] was created for this very purpose on Azure (just search for "Composer" under the App Service Extensions).

The downside of using this extension and deploying from GitHub was that it would not update the dependencies correctly.
Installing new required packages and updating correctly had to be carried out through the _console_.
Utilising the awful attempt at providing _console_ / _command line_ access to the server, which did not allow copy and paste.

``` bash
cd D:\home\site\repository
composer update
```

Running the re-deployment command would transfer the files over to the `D:\home\site\wwwroot`.

You could also remove the composer files within the repository directory to achieve the same results.

``` bash
cd D:\home\site\repository
rm composer.lock
rm -r vendor
```

## Guzzle and HTTPS

For our project we required to use Guzzle to communicate with an external REST API.
In this day and age, visiting websites over HTTPS is preferred, however Azure's App Service was not configured to verify certificate chain of trust.

There are a few steps required to get HTTPS working correctly under Guzzle:

1. Create two directories `ini` and `ca` under the `D:\home\site` directory
2. Download an up-to-date copy of the trusted CA root certificates from CURL
3. Create a PHP.INI file to load in the certificate
4. Set the `PHP_INI_SCAN_DIR` Application Setting to be `D:\home\site\ini`


``` bash
cd D:\home\site
mkdir ca
mkdir ini
cd ca
curl https://curl.haxx.se/ca/cacert.pem -o cacert.pem
cd ..\ini
echo curl.cainfo=D:\home\site\ca\cacert.pem > extensions.ini
```

[2]: https://github.com/SyntaxC4-MSFT/ComposerExtension
