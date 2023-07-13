---
layout: post
title: Enter The Fediverse
date: 2023-07-11T16:56:14.690Z
tags: [fediverse, tech, mastodon, lemmy, reddit]
--- 

If you haven't heard, Reddit is in [a bit of a pickle](https://www.nbcnews.com/tech/tech-news/reddit-protest-blackout-ceo-steve-huffman-moderators-rcna89544). In short, they have changed their API pricing in such a way as to effectively make it impossible for 3rd party apps to continue, presumably in order to improve that sweet ad revenue (a move probably inspired by [Twitter's](https://www.engadget.com/twitter-shut-off-its-free-api-and-its-breaking-a-lot-of-apps-222011637.html)). In any case, the lack of Reddit for a few days (and my general dissatisfaction with the platform at that time) led me to explore alternatives, which led me to [Lemmy](https://join-lemmy.org), a finding which would cause me to dive much deeper into a much wider thing - the Fediverse. This article will explore this process and how I've found it so far.

### Lemmy

As I said, the first thing that I'd found for this was Lemmy. Lemmy is, according to its own website:

> "a selfhosted social link aggregation and discussion platform. It is completely free and open, and not controlled by any company. This means that there is no advertising, tracking, or secret algorithms. Content is organized into communities, so it is easy to subscribe to topics that you are interested in, and ignore others. Voting is used to bring the most interesting items to the top."

Sounds cool, and most importantly, very similar to Reddit UX-wise, so I went and made an account.

I should probably explain something out of the gate - there isn't one "Lemmy" website. That's the whole point of the Fediverse. Instead, there are many "instances" of Lemmy, all of which are "federated", that is to say, they are all interconnected. From my instance, I can make a post on another instance, which a user from yet another instance can comment on. This way, there is no central authority for the whole site. It's like crypto, but without the enormous range of scams and profiteering.

Anyway, the instance that I decided to start with was [lemmy.blahaj.zone](https://lemmy.blahaj.zone). I was told that the instance you start with doesn't really matter, so I chose this one on somewhat silly grounds - I own a Blahaj myself.

It worked pretty well to begin with, as from my perspective it seemed to be working just like Reddit; I could make posts, join communities, and so on. However, I quickly noticed that choosing an instance wasn't going to be as simple for me as I had anticipated, due to my own pickiness and the particulars of federation.

### How federation works (a crude explanation)

Obviously, it would be wildly inefficient if every server shared everything that happened on it with every server. As a result, federation on ActivityPub (the protocol that Lemmy, Mastodon, and more - including the dreaded Meta Threads - use as their base) works like this:

1. a user on server A requests a post/user/community on server B by using the search function
2. server B provides what they requested and creates a federated link between it and server A
3. any future activity on the post/user/community is sent to server A for anyone to see

This is probably an oversimplification, and it doesn't work 100% of the time (particularly when federating between servers running different software), but from my observations this is basically how it works.

This is also where my issue with the instance I'd chosen came up. There was nothing inherently wrong with the instance or its admins, and in fact it was a lovely instance, but several of the communities that I was interested in (such as the Modded Minecraft or RetroWeb ones) had not yet federated properly. This is no fault of the instance's, and once I had searched for them myself, any new activity would be visible to me. But I am an impatient moron, and I wanted to see what the existing activity was, and besides I began to notice that not all comments on posts were being federated to me (such that going to the home instance of the post showed more comments than I could see or respond to on my own instance), and this bothered me for some reason, so I decided that I would begin to look for another instance.

> Side note: This issue is probably fixed now as the instance has grown some since the time of this experience.

Conveniently, it became apparent to me on that same day that the [SDF network](https://sdf.org), a lovely network of Internet services, including a public Unix shell, had recently set up a Lemmy server. I had been a member of SDF for a couple of weeks, and had been using their IRC and bulletin board during that time, so I figured I would set up an account there - and besides, I checked in advance, and the federation seemed to be more to my liking - so now I've been using [lemmy.sdf.org](https://lemmy.sdf.org) as my home instance and it's been great - my username is `@mounderfod@lemmy.sdf.org` if you're curious.

### Mastodon

Of course, if you're familiar with the Fediverse (or have read the article up to this point), you know that Lemmy is not the only Fediverse service that exists. Next for me was a replacement for Twitter, which I'd ditched on the day it was bought by Elon Musk (a fact which turned out to be excellent foresight on my part, but realistically I was going to delete my account anyway, so it wasn't exactly a stroke of genius).

This one was a little easier, since I discovered that SDF [also had a Mastodon instance](https://mastodon.sdf.org). I have to say that in recent times I've found myself using Mastodon a lot more than Lemmy; there's more users so there's more content for me to access, and the lack of algorithm is really refreshing because it allows me to build my feed with only the content (and people) that I want to see.

If you'd like to follow me on Mastodon my account is `@mounderfod@mastodon.sdf.org`.

### Other services and conclusion

By this point I was fully immersed in the Fediverse, and quickly set up **Pixelfed** to replace Instagram and **Funkwhale** to store my personal music collection. I also intend to set up this website with **IndieWeb**, which is basically federation for blogs.

At the start of this article, I explained that this all started because of Reddit's API changes. But the truth is, I was starting to become disillusioned with the mainstream social media networks long before this, with the constant algorithms, ragebait and promotion of far-right content putting a drain on my own energy. I was perhaps longing for freedom to control what I put my attention on. If this sounds like you, then I would strongly recommend that you at least try the Fediverse networks - in any case, it's much easier to delete your account with them than with e.g. Facebook if you don't like it!

I hope this article was of at least some interest to you, and thank you for making it this far :D
