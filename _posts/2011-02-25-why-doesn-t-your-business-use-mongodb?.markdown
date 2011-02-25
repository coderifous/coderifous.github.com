---
layout: post
title: "Why doesn't your business use MongoDB?"
meta: "Slides from the DC MongoDB Users Group meetup."
published: true
tags:
- mongodb
---

[Nathen Harvey](http://twitter.com/#!/nathenharvey) invited me to speak at the [Washington DC MongoDB Users Group](http://www.meetup.com/Washington-DC-MongoDB-Users-Group/) this month, and the purpose of the talk was to raise the question: "Why doesn't your business use MongoDB?"

A few people asked me to post slides from the talk, but they would've been difficult to derive meaning from without the accompanying talk and discussion, so I added sticky notes to the slides to help with narration.  I also added a post-meetup notes slide with a few links.

<div style="text-align:center">
  <a href="/downloads/FebMongoUserGroupPresentation.pdf" style="text-align:center">
    <img src="/images/pdf_icon.png" style="width:96px;height:96px;" title="Why isn't your business using MongoDB?" alt="Presentation Slides" /><br/>Download</a>
</div>

## MongoDB 1.8rc0!

As fortune would have it, 10gen pushed out the release candidate for [MongoDB 1.8](http://www.mongodb.org/display/DOCS/1.8+Release+Notes) on the same day as the meetup, so we all got to hug and cry (happy tears) as a group.  The big news here is that MongoDB can now employ write-ahead journaling.

<div style="text-align:center;margin-bottom:1em">
  <img src="/images/maxdurability.png" title="Still a few more uses before it's tired." alt="Maximum Durability" />
</div>

That's great news for the single-server durability hold-outs, as they may now comfortably proceed with their full embrace of MongoDB.
