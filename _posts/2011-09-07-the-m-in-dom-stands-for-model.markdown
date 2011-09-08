---
layout: post
title: "The M in DOM stands for Model"
meta: "A response to Ken Collins' post about encapsulation and jQuery."
published: true
---

This is a response to a post by my friend [Ken
Collins](http://twitter.com/#!/metaskills): ["How Do You Encapsulate
Your
Javascript"](http://metaskills.net/2011/09/06/how-do-you-encapsulate-your-javascript/).

I agree 100% with Ken that poorly organized code, code that litters on the
global namespace, and code written such that it can't be reused is a sign of
amateurness.  However, I disagree that jQuery plays a role in leading developers
astray regarding good software design principles.

Part of Ken's criticism is that jQuery doesn't sheperd new developers "into
learning some sort of way to encapsulate their object behavior." Why should it?
jQuery isn't relevant to the problem space of modeling domain objects.
Javascript, the language, provides those facilitates.  You can model complicated
behavior all day and night using nothing more than core Javascript.  Even
so, most developers find the core facilities of Javascript too foreign, or too
basic for building their applications.  Thankfully, plenty of
[great](http://documentcloud.github.com/backbone/)
[libraries](http://batmanjs.org/)/[frameworks](http://knockoutjs.com/) have been
invented to address that need.

jQuery is a library for working with the DOM and normalizing all the annoying
variations across browser specific APIs.  The way I like to think of it is: Your
web application always has at least one model: the Document.  Like any other
object, it has state (e.g. the node tree, document properties) and behavior
(e.g. adding and removing nodes).  jQuery provides the interface through which
you work with that object.  jQuery is _not_ a library for helping you model other
parts of your application.

With that in mind, I think writing a class that gives you another model on top
of the DOM, just so you can ape classical OO in Javascript, is a smell.  As an
illustration, I'll rewrite Ken's example using the [jQuery plugin
approach](/2009/10/28/clearer-code-with-jquery-micro-plugins.html).

{% highlight coffeescript %}
  $.fn.flash = (content = null, htmlClass = "notice") ->

    flashElement = this.find("div.flash")
      .html(content)
      .removeClass("notice alert")
      .addClass(htmlClass)

    $.mobile.silentScroll(0) if content?
    flashElement.toggle(content?)
{% endhighlight %}

With the `$.fn.flash` plugin defined, we can use it to set the flash on any page:

{% highlight coffeescript %}
  $(currentPage).flash("OMG it worked!!! <3 <3 <3") # sets and shows flash notice
  $(currentPage).flash("Broken. (._.)", "alert")    # sets and shows flash alert
  $(currentPage).flash()                            # clears and hides flash
{% endhighlight %}

I believe it has feature parity with Ken's example and is just as reusable, but
has the advantage of being idiomatic jQuery that's simpler and has fewer
dependencies.

To explain the phenomenon that so much Javascript is written so poorly by so
many, I hold the (relatively uncontroversial) theory that: most developers write
Javascript without actually learning it.  Heck, I myself didn't actually read my
first Javascript book until after I had already spent a few years barely
grokking the occasional Javascript snippet and making things barely work by
sheer coincidence.

On the flip side: I've seen well functioning, non-trivial, and well tested
Javascript applications where the primary unit of reuse was the jQuery plugin,
and encapsulation was had via closures.

The classical OO approach is not the only game in town for good software design.
Don't forget that the DOM is already a model that has its own state and
behavior, and jQuery plugins are your best bet for creating reusable code with
naturally occurring encapsulation via scoped variables and closures.
