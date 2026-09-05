---
title: '"The End of Software Engineers"'
description: The demise that truly hasn't arrived, yet...
published: 2026-09-05T15:46:00+01:00
tags: ['ai', 'software']
---

It has been a while since I have sat down to gather my thoughts about what it is to be a Software Engineer, especially as advancements within the last year alone have been incredibly visible.

Too often do I feel I have been told by leaders in the AI space that Large Language Models (LLMs) are becoming so good that they have the capability to replace Software Engineers.
Yet here I am, still fulfilling the role, converting business requirements into functional software.

My own personal role has shifted from writing code to making technical decisions that shape the direction of the solutions we build, influencing clients and teams to build scalable forward thinking systems.
Where being able to use generative AI to produce proof-of-concept (POC) work in record time has helped to demonstrate an approach to solving problems with limited procrastination on how best to showcase my thinking.

In speaking to friends and colleagues (and I can include myself in this), the reason we are in this industry is the joy of solving puzzles, taking pride in being able to write the syntax that takes the input and produces the correct output.
Delegating this to a machine to solve the puzzles removes the dopamine achieved through delayed gratification seeing the fruits of our labour. I have the feeling we are all fatigued and dissatisfied with this shift.

## It's Stochastic, not Deterministic

I can only describe this move to AI assisted coding as an adjustable lever on a slot machine, where depending on the prompt you enter the wheel spins to deliver you closer to achieving a working program.

As time has progressed, that element of gambling becomes more likely to hit jackpot on the first try: all thanks to being able to absorb more context about the challenge you face with bigger token windows, agentic approaches to fanning-out breaking down the challenge into multiple smaller steps, and using more and refined Mixture of Experts (MoE) training data to shape more powerful models for coders to use.

I would caveat that what looks like a win still depends on how clear that finish line is defined, and if you had to repeat the same process how likely are you to walk the same path and achieve the same result?

This is why I think that while specifications (through approaches like [Spec-Driven Development][sdd]) is partially the direction we are headed for the abstraction between computers and humans building software, it is not the entire solution.
Being able to deterministically validate the criteria has been met through adopting [Behaviour-Driven Development][bdd] automated testing, mapping natural language to interactions in your system, moves that needle closer.

Using newer and better models should theoretically achieve better results, but much like runners who fall into a similar paradox - buying a new and "better" pair of shoes to reduce the time it takes to travel a mile isn't where the real improvements happen - it's a just a better tool to take you from A-to-B.

Consistent practice, technique and fuelling your run appropriately is the only real way to achieve this.
For AI coding it's familiarity with how to guide the problem solving, producing clearer objectives and boundaries for how the model implements.

Before AI I would often describe writing code as finding the right sequence of syntax, it was always repeatable and ripe to be disrupted by machines who are incredible at repeating patterns.

While we can apply many different patterns and approaches to write software it doesn't always solve the root of the problem.
Rearchitecting solutions, exploring alternative approaches, adopting new business processes, and ultimately guiding people towards and through the change is where the biggest impacts can be seen.

## What's Next?

There are now multiple benchmarks for how well these models solve "real-world software problems" and with each release it drives closer to what is considered 100% - but 100% of what?
Does 100% mean all current problems can be delivered by AI?
What about future problems we've never even encountered?
Will we ever reach 100%?

The commoditisation of software entered a new phase with software-factories being able to pump out solutions with a swarm of agents working on a production line 24/7.
The interface still requiring a human in the loop to guide and validate the end result. My opinion [from 3 years ago][unseen-prompts] has not changed, we are no further forward from having machines predict and invoke themselves to solve problems.

Where does this leave people entering the industry fresh? It's now easier than ever to become a software engineer with the assistance AI provides, but understanding what is produced and solving the edge cases where AI cannot fix is becoming harder.
A barrier lowered, yet still visible to separate candidates who "get it" and those who don't.

What I also hope for is universal access to intelligence, something small enough to run on our own computers, not subject to export restrictions when the hot-air producing politicians in power decides to halt access.

For me being a good Software Engineer was always more than turning requirements into syntax; it is thinking critically, solving problems, challenging assumptions, identifying risks, understanding dependencies, architecting for the future, articulating outcomes and desired states acutely to everyone involved.

[sdd]: https://github.github.com/spec-kit/concepts/sdd.html
[bdd]: https://cucumber.io/docs/bdd/
[unseen-prompts]: beware-the-unseen-problems-with-ai#the-unseen-prompts