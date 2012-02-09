---
layout: post
title: "The Disciplined Programmer"
meta: "Stop whining! You kids are soft. You lack discipline. -Detective John
Kimble"
published: true
---

When you run across a project that suffers from things like messy code, poor
design, or lack of tests, there are two possibilities: The first is that the
responsible party was so inexperienced that they had no idea they were making
a mess.  It honestly never occurred to them that they were doing a poor job.  The
second possibility is that the responsible party knew they were writing messy
code, they knew they weren't being thoughtful about the design, and despite
knowing all about TDD, they still skipped writing tests.  This second group is
one that I think most developers fall into at some point.

If you've ever explained a messy code base, or terrible test coverage with this
excuse:

> We had no time, we had to get it done ASAP.

then this post is for you.  We've all felt the pressure of "ASAP".  We've all read
[Rework](http://www.amazon.com/gp/product/0307463745/ref=as_li_ss_tl?ie=UTF8&tag=thegarvincom-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0307463745),
which convinced us that "ASAP" is poison.  We know that when _everything is
ASAP_, then _NOTHING_ is.  And we know that when we rush to get things done
ASAP, we inevitably cut corners that hurt us in the long run: We skip writing
tests.  We commit messy code that we're embarrassed by.  We trade moments of
quiet thinking about the problem for frenzied keyboard clacking, as if
words-per-minute could ever make up for a deficit in thoughtful design.  We do
all this despite knowing it's wrong.

## So why do we do it?

I believe it's one of those classic disconnects between what we intuitively feel
versus what intellectually know.  Intuitively, we feel like we're getting things
done faster when we blast through code and don't take the time to TDD.
Intellectually, [we
know](http://research.microsoft.com/en-us/groups/ese/nagappan_tdd.pdf) that TDD
reduces software defects and speeds up development (in the long run), and that thoughtful
design yields cascading benefits that permeate entire systems.

Most programmers probably have the same harmful intuition when stressed.
However, given the same stressful circumstances, some programmers will behave
according to their intuition, and others will behave according to what they know
intellectually.  Why?

## Discipline

It is the unsexiest of programmer attributes.  I think of how many times I've
heard people talk about the exciting elements of programming: solving hard
problems, writing elegant "beautiful" code, being _creative_, automating away
inefficiencies and taming the techno-beast.  These things come up when trying to
convince others that we are passionate about our craft in a job interview, or
explaining why our job doesn't suck to children at Career Day. But how often have
you heard someone talk about methodicalness, or the virtue of embracing
routine, or the necessity of regular and critical reflection? What about the
discipline that is required by all of those things?

The most productive programmers I know comprise their daily routine from a series
of repeatable work flows.  They are methodical.  Even creative tasks are
performed in a methodical manner.  Their routines become habit, and they can
sense when the routine needs adjustment - like a wobbly wheel that's out of
alignment.  In addition to being generally productive, they also tend to produce
clean, thoughtful, tested code.

Discipline is not glamorous. I doubt we'll see "disciplined programmer" supplant
"ninja" or "rock star" in job postings any time soon.  Nonetheless, I'll be
focusing on it more as a deliberate addition to my programmer psyche, and
encouraging it more in others - especially those who shout to others from atop
their heap of disastrous code _"Sorry about this mess, I was in a rush!"_
