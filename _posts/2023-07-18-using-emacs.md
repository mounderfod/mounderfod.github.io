---
layout: post
title: Using Emacs
date: 2023-07-18T09:27:00Z
tags: [webdev, ide, emacs, text editor, development]
---

This post is being written in [Emacs](https://www.gnu.org/software/emacs/) :)

### What?

Emacs is, according to its own website:

> "An extensible, customizable, free/libre text editor — and more."

Basically, it's one of the oldest text editors to exist, is (technically) entirely keyboard-based, and manages to combine simplicity with power. In short, it's great and I'm going to talk about it now.

### Why?

Why am I using Emacs? Well, there's a few reasons:

- I'd heard of it before and it sounded cool
- It's complex enough that it would present an interesting learning curve, but not so difficult as to discourage me
- It's useful for editing posts and HTML like this
- It ships with Tetris built in (need I say more?)

### How?

I went to the website and downloaded it.
My laptop currently uses Windows, and Emacs is made by GNU so as expected I was berated for my choice of OS:

> "To improve the use of proprietary systems is a misguided goal. Our aim, rather, is to eliminate them."

But I wasn't going to concern myself with GNU's plans for world domination; that's a problem for another day. The install was fairly simple, like any other application, and upon running the program I am greeted with a pleasant menu screen:

![The Emacs welcome page](https://cdn.discordapp.com/attachments/838048982873538572/1130779711820267570/image.png)

Now it was time for me to learn how to use Emacs.
Emacs is primarily keyboard-based, as it was developed at a time where not all computers had GUIs at all, let alone mice to interact with them. As such, and also due to its age, it has its own set of keybinding patterns which are overall very different to that of most applications. For example, saving a file in MS Word is `Ctrl-S`, while in Emacs it is `C-x C-s`, which means `Ctrl-x` followed by `Ctrl-S`. You'll notice that in this example, two keybindings need to be pressed to perform one action. This is very common in Emacs, as there are lots of commands and not many keys, and there are even some commands that don't have keybindings and must be invoked by pressing `M-x` (`M` meaning `Alt`) and then typing the command name out.

This was all a bit complex for me to understand at first, but I quickly got the hang of it (as I had done with the more standard keybinding patterns that existed elsewhere in the computing world).

### Customising Emacs

Now that I had gotten the grips of Emacs' basic usage, I needed to tailor it to my own needs.
My plan was to use Emacs for editing Markdown posts (such as this one) or HTML files, and my website is hosted on GitHub, so I needed something to cover both bases.

For the latter, there was already Emacs' `VersionControl`, but this was a generic version control tool and wasn't tailored to the specifics of Git. Therefore, I did some googling and came across [Magit](https://magit.vc). A few more googles educated me in how to add the package repository it was in and how to then install the package (`M-x package-install RET magit RET`), and I was quickly able to clone, commit, and push to the website repository. Perfect!

Now I needed to improve my Markdown editing experience. `.md` files are text, and so I could edit them as normal in Emacs, but then I wouldn't be able to enjoy things such as syntax highlighting and easy access to various formatting options without typing them out manually. Again, a quick google found [markdown-mode](https://github.com/jrblevin/markdown-mode), and within moments it was installed. The package adds a major mode to Emacs - Emacs is mode-based, meaning that there are modes of editing which result in different functionality of the editor for different purposes - in this case, the markdown mode (enabled with `M-x markdown-mode`) provides syntax highlighting and commands to automatically paste in the syntax for links, etc.

![Me editing this very post in Emacs with syntax highlighting](https://cdn.discordapp.com/attachments/838048982873538572/1130784754657153024/image.png)

And that was it! I had installed, learned to use, and configured Emacs and could now use it to edit blog posts for this very website (or Gopher phlog, if you're reading it on that mirror).
Next I shall get it set up for developing my Python/Java projects - I'll keep you posted!
