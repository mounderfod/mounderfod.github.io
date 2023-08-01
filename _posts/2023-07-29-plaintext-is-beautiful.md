---
layout: post
title: Plaintext is Beautiful
date: 2023-07-29T13:38:00Z
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
load! This is really bad, especially since it was literally just a couple of pictures
and some text, so I checked what its recommendations were and followed them. I
managed to get the score up to around 70 or 80, but still the website felt
really sluggish. It was at this point that I came to the realisation that my efforts to optimise
the site in its current form were pointless, as the whole design was very
bloated (with lots of images everywhere).

Thankfully, I had come across some new communities at the time which helped
provide inspiration for a new design!

### Smolnet, gopher and tildes

If you've read my previous posts, you'll know that I am a member of SDF, a
public access Unix system. If you haven't, [do it now](/2023/07/11/enter-the-fediverse)!!!

Anyway, I discovered since then that SDF is not alone in this space of public Unix systems,
and in fact there is an entire federation of these systems (known as "tildes") called the
[tildeverse](https://tildeverse.org). All of these provide simple web hosting as well as
IRC, Usenet and some other useful things. Members of the tilde run services such as a
PBX telephone network, a zine and a Mastodon instance. It seemed that most of these tildes 
provided a wider range of free services than SDF (which
requires you to fork out a verification fee in order to do anything - which is totally
fair, but not something I want to pay when I can get it free elsewhere). As a result, I picked
a tilde ([tilde.institute](https://tilde.institute) - because it sounds fancy to be a part of an
institute) and started to get set up with the various services provided.

It was at this point that I discovered the [Gopher protocol](https://en.wikipedia.org/wiki/Gopher_(protocol)),
because it was a service provided by the institute. Basically, before the current HTTP(S) and WWW protocols
existed, Gopher was a simple protocol that existed for sharing plaintext documents over TCP networks.
Instead of HTML, Gopher has a `gophermap` format to define special pages with links, but most files are served
as simple `.txt` files. The protocol predated (and was largely replaced by) the WWW, possibly because
opportunities to monetise Gopher were much fewer and further between than the main Web, but it has seen
a resurgence in the 21st century among nerds and anti-capitalists alike, which when combined with users
of the newer Gemini and Spartan protocols make the Smolnet, an independent, minimal Web.
As someone who is both, this appealed to me greatly, and I quickly downloaded 
[a browser capable of using the protocol](https://gmi.skyjake.fi/lagrange/) and started browsing. I 
explored the gopherholes of fellow SDF members, fellow tilde members, and just random people via the 
Floodgap directory and search. 

I set up my own gopher hole via the institute and copied over some content
from my regular website (save the blog which was a bit too image-heavy for the protocol). It was as I was
copying these things over that I realised - why don't I apply these principles to my main website? I was
having performance issues on my website, and gopherholes were loading way faster on my device that HTTP
websites ever did, so why can't I make *my* website work like that? I quickly went over to GitHub, tossed out 
my CSS file and gave the website this terminal-esque look. I hope you enjoy the new layout!

That doesn't mean I've abandoned the smolnet - check my gopherhole out at <br> `gopher://tilde.institute/~mounderfod`!
