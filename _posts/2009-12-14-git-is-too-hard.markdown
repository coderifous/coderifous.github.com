---
layout: post
title: "\"Git is just too hard\""
meta: "A warning sign that you might suck."
tags:
- git
---

!["Git FFUU"](/images/git-ffuu.png "Don't let this happen to you.")

Here's the sentiment that's been delivered to me on several occasions by people that don't know any better:

> "Git is too hard, and Subversion is good enough."

It kills me when I hear this.  This is the verbal equivalent of wearing a hat with "Idiot" bejeweled on the front using neon Lite-Brite pegs.  There's a 99% chance that the person saying this has either never used git, or has used it once on someone else's project and they spent zero effort trying to understand it.

## Fact #1: Basic Git usage is easy

Let's dispense with the _"Git is too hard"_ complaint.  As I write this, [Github's home page](http://github.com) says that they have 155,000 coders using their service. Even if a significant portion of that number is virtual/duplicate accounts, or people signed up to Github despite loathing Git, you still have a huge mass of developers that apparently don't think Git is too hard.  That's just counting Git users on Github.  If they can figure Git out, you probably can too.

That's my argumentum ad numerum: _one hundred thousand developers can't be wrong!_  But I don't like it when people use logical fallacies on me, so I won't use them on you.

How might we objectively prove that Git is, in fact, not "too hard" when compared to Subversion?  Cold hard concrete example, I guess.

Go look at the [Git-SVN Crash Course](http://git.or.cz/course/svn.html), where you'll see examples of equivalent commands in Subversion and Git.  In many cases, the commands are nearly identical.  Consider the typical workflow:

### Using Subversion:

{% highlight bash %}
  # get the code
  svn checkout http://whatever
  # ... make some changes, then commit them ...
  svn commit
{% endhighlight %}

### Using Git:

{% highlight bash %}
  # get the code
  git clone git://whatever
  # ... make some changes, then commit them ...
  git commit -a
  # optionally share your commits
  git push
{% endhighlight %}

That's the basic retrieve-edit-commit cycle that you do in either Subversion or Git 90% of the time.  Your first hint that something is different is with the `git push` command.  At this point your crappy instincts are taking over and you are thinking to yourself:

> "See?  That proves my point!  I don't have to type that extra command with
> Subversion, therefore I am right and I'm going to get a cookie for myself.
> _Nom nom nom_. I am smart. S-M-R-T. Smart."

Stop it, you're embarrassing yourself (again).  One of the key features of Git is that you can do things to commits before you share them.  That concept probably makes no sense to you, which _should_ be a clue to you that you _might_ be missing out on something powerful.  And those powerful features of Git are the ones that you don't have to understand right away.  The stash, the index, rebasing, forking and adding different remotes - these are all things that you don't need to understand on your first day.  You can do your basic Subversion-style work flow easily with Git, and learn the advanced stuff as you go; just like everything else you've ever learned.

## Fact #2: Once you understand Git, Subversion is obsolete

Subversion is only "good enough" until you learn Git.  It's true.  I can't think of any situation where I'd choose to use Subversion over Git.  Git can do everything Subversion can do (and better), but not vice versa.  Working with Subversion feels utterly primitive after using Git, and I'm definitely not the only one that thinks so.  In fact, [git-svn](http://www.kernel.org/pub/software/scm/git/docs/git-svn.html) was created so that Git users _stuck_ on a project using Subversion wouldn't have to live without the glorious features that Git provides.

Git is a better tool for the job, and a craftsman should use the best tools available.

[Make the switch](http://github.com/jcoglan/svn2git).

## Resources

After you've decided to release your death grip on the past, you'll have questions.  Here's some resources that I've found to be most helpful:

* [http://gitready.com](http://gitready.com) - a great cookbook style reference.  Consult it early and often.  This is my favorite Git resource.
* [The Git Community Book](http://book.git-scm.com/)
* [Why Git is better than Subversion](http://whygitisbetterthanx.com).
* [git_remote_branch ruby gem](http://github.com/webmat/git_remote_branch) - it gives you a command line utility that takes care of managing remote branches.
* [git with github](http://github.com/blog/564-hub-git-with-github) - a command line script which adds GitHub knowledge to a few git subcommands.
