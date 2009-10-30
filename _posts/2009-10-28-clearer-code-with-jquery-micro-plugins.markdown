---
layout: post
title: "Clearer code with jQuery micro-plugins"
meta: "Make your javascript clearer and easier to maintain by tweaking a common pattern."
tags:
- jQuery
- javascript
---

Most non-trivial javascript applications need to do some work after the document
loads.  jQuery makes it easy to hook into that event, and lots of people use it
like this:

{% highlight javascript %}
  $(document).ready(function(){
    // application code... ALL of it

    var term = searchParameter();
    if (term) $("#search_form input[type=text]").val(term).addClass("focus")

    // .. 200 lines later ...
    // ah, here's the code you need to tweak
  });
{% endhighlight %}

Maybe this is OK for really small apps, but when you've got a few hundred lines
of javascript milling around in there, you'll eventually start to feel the pain.
You'll try things like punctuating sections of code with comments, [which we all
know is bad](http://google.com?q=comments+are+code+smell), or breaking your
`$(document).ready()` calls up into a several `$(document).ready()` calls, one after the other.
_Gross_.

One way to get high-level comprehension of our code is to break the unrelated
sections out into their own functions, and then call those functions from the
setup block.

{% highlight javascript %}
  $(document).ready(function(){
    initializeSearchForm();
    initializeRowPointer();
    initializeThumbnailSizeSlider();
    initializeQueueStatuses();
    // and so on...
  });

  function initializeSearchForm() {
    var term = searchParameter();
    if (term) $("#search_form input[type=text]").val(term).addClass("focus");
  };

  // and all the other functions...
{% endhighlight %}

Now our setup block gives us a bird's eye view of what's going
on when the page loads, and we can easily jump to those function definitions to
see what's going on and make changes.  That's better, and it's how I've been
doing it for a while, but using a pattern that [Ryan](http://twitter.com/rmm5t)
came up with, we can make this code reveal more about what it's doing and make
it easier to maintain by embracing some jQuery-ness.

## Bring in the micro-plugins

{% highlight javascript %}
  $(document).ready(function(){
    $("#search input[type=text]").searchForm();
    $("#orders").selectableRows();
    $("#slider").thumbnailSizeSlider("td.picture img");
    $("#queue_statuses .status").queueStatus();
    // and so on...
  });

  // micro-plugin
  $.fn.searchForm = function() {
    var term = searchParameter();
    if (term) this.val(term).addClass("focus");
    return this;
  };

  // and all the other micro-plugins...
{% endhighlight %}

By rewriting our functions as jQuery plugins, we enjoy several advantages
over the former approach:

- We moved the selector up into the setup block where we can easily see and
	change it.  This gives us a better idea of what our code is doing, all
	from the comfort of our bird's eye view.
- It's a jQuery plugin!  Any other developer that's familiar with jQuery, but
	new to your code, will immediately appreciate the assumptions he can make
	about your implementation.
- It's a jQuery plugin!  It's very easy to reuse, even if you don't plan on it.

If you've never written a jQuery plugin before, this should really
highlight how _simple_ it is.  There aren't any framework hoops to jump through.
You just slap a function on `jQuery.fn` and access the wrapped set via `this`.
It's the simplicity of jQuery's plugin system that makes the micro-plugin
possible.

## What is this tomfoolery!? That's just a plugin!

Yea, so let's clear up the distinction between a plugin and a micro-plugin. The
difference is the author's intent when writing the code.  Regular jQuery plugins
are written with reuse and sharing as a primary goal.
Micro-plugins are created solely because they make your application code clearer
and easier to maintain, and without any intent to ever reuse or share the code.

If you find yourself reusing a micro-plugin across projects, and it becomes
something generally useful, then you can document it, share it, and call
it a real plugin.
