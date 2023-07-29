---
layout: post
title: Plaintext is Beautiful
date: 2023-07-18T09:27:00Z
tags: [webdev, text editor, development, gopher]
---

Alternative title: Why does this website look so different?

You might notice that the site looks a lot different than it did before.<br> If
you're new, this is how it looked:

![A view of how the website previously looked](https://cdn.discordapp.com/attachments/838048982873538572/1134865644014280856/image.png)

For a lot of people, this may have been a lot more of a pleasing design than the
current one. Shit, I still think that design has its merits, but it did have to
change. I will explain why this was the case, and also why I went for this
current design (which I hope isn't too bad!).

### Performance issues

So, Chromium-based browsers offer a feature in their dev panel called
[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/). In effect,
this is a tool that enables a developer to assess the quality of their website
based on some important metrics (a11y, performance) and some not so important
ones (like the dreaded SEO). I don't like using Google-related tools very much,
but out of curiosity I did decide to check how my site was doing.

Accessibility and (_shudder_) SEO were great, but to my surprise, the
performance score was a disastrous 54 out of 100. To make matters worse,
Lighthouse had calculated that my home page took on average **7 seconds** to
load!

This is really bad, especially since it was literally just a couple of pictures
and some text, so I checked what its recommendations were and followed them. I
managed to get the score up to around 70 or 80, but still the website felt
really sluggish.

It was at this point that I came to the realisation that my efforts to optimise
the site in its current form were pointless, as the whole design was very
bloated (with lots of images everywhere).

Thankfully, I had come across some new communities at the time which helped
provide inspiration for a new design!

### Smolnet, gopher and tildes

If you've read my previous posts, you'll know that I am a member of SDF, a
public access Unix system. If you haven't, [do it now](/2023/07/11/enter-the-fediverse)!!!

<!-- TODO: finish this article !-->