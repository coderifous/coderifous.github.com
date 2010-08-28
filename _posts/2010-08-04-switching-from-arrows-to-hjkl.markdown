---
layout: post
title: "Switching From Arrows To hjkl"
meta: "An for exercise kicking the arrow key habit in Vim."
tags:
- vim
---

(Part of the [Tips For Learning Vim](tips-for-learning-vim.html) series.)

Moving your hand off the home row to use the arrow keys is a sin in Vim, but getting used to the `hjkl` keys for movement was a HUGE pain for me.  In fact, I used vim for _years_ without kicking the arrow key habit.  I finally kicked the habit with the help of some focused finger training.

The goal of this exercise is to build new neural pathways so that your brain no longer has to go through the cognitive effort of translating your desire to have the cursor move down by one line into pressing the letter `j` on the keyboard.  You want your brain to optimize for the relationship between your will and your fine motor movements.  In fewer words: you want to build muscle memory.

You might notice that the exercise focuses on training the opposite pairs (up & down, then left & right) instead of all of the directions at once.  This reinforces the behavior where you group you vertical and horizontal movements rather than trying to interleave the two (creating diagonal cursor movements, which will be slower and probably not what you want to do in Vim anyways).

1. Open a file with some text in it and put the cursor somewhere in the middle.
2. Rest your right hand on the home row (index finger on `j`, middle finger on `k`)
3. Now just rapidly alternate between pressing the `j` and `k` keys.

As you press the keys, the cursor will move up and down.  Just stare at it while you press the keys.  Let your brain soak it in.  Try to forget the keys you're pressing, and just feel the shape of your hands on the keys, the way your fingers feel while you make the cursor go up and down.  Sounds goofy, but it should help build muscle memory.

Then repeat the exercise with your index finger on `h` and your ring finger on `l`.  The cursor moves left and right.  Just get your fingers going then stare at the cursor movement while it wiggles back and forth.  Let your brain soak it in.

Then start doing a several key presses on each side: `jjjjkkkkjjjjkkkk`, `hhhhllllhhhhllll` and do that over and over.

The last ingredient is to avoid using the arrow keys while you are coding.  For me, just the act of moving my right hand away from the home row annoyed me enough to remind me that I should instead use `hjkl` keys.

### An approach that didn't work so well for me

I also tried using mnemonics: `hjkl` + "left, down, up, right" = "heft, jown, kup, light".

So if I needed to move the cursor down by 3 lines, I'd decipher in my head that "down" became "jown", which started with a `j`, so I need to press `j` three times.  This was slow, and it sucked, and my friends had endless hours of amusement watching me use my mental decoder ring just to move around my editor.

### Fringe Benefits of using `hjkl`

After you get used to `hjkl` movement, you can enjoy their use in other applications.

* Gmail - Enable shortcut keys, then use `jk` to move the selection arrow up and down your inbox.
* Any browser with a Vim-like plugin - use `hjkl` to scroll around

In Chrome I use the [Vimium extension](https://chrome.google.com/extensions/detail/dbepggeogbaibhgnhhndojpepiihcmeb) which has a few great features.

There are extensions for Safari and Firefox as well.

