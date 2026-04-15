# Study session transcript

**Source:** `GMT20260317-153058_Recording.m4a`
**Detected language:** en (probability 0.91)

Auto-generated with faster-whisper (Whisper **tiny**, CPU). Expect minor errors.

---
**[00:00]** Yeah, I'm just going to find a more good way.
**[00:30]** You
**[01:00]** You
**[01:30]** Yeah.
**[01:38]** It's on me.
**[01:48]** What do you come with in?
**[01:52]** Okay.
**[01:54]** So we do not have any current event or debate today.
**[01:58]** Yeah.
**[02:02]** A little sad actually, but it's also my fault.
**[02:06]** Yes.
**[02:08]** I accidentally didn't have current events today and put them accidentally a month ago when we
**[02:16]** had Monday instruction.
**[02:18]** I meant to cancel that one and not this one.
**[02:20]** So anyway, we won't have any of that today.
**[02:22]** As any current events that we should talk about that you've noticed anything
**[02:26]** up in the news.
**[02:28]** There's been things over the last couple of weeks.
**[02:30]** Some of which I've held out for one of the relevant to our course stuff.
**[02:36]** Yeah, there's been a lot of hacking from Iran.
**[02:40]** He just generally united states.
**[02:42]** Well, there's been hacking that we think is associated with Iran.
**[02:44]** And at least one case where they said it was them.
**[02:48]** So yes, there's definitely stuff increases around military excursions.
**[02:54]** And Iran does have a pretty sizable hacking capability.
**[02:58]** So there's only been one.
**[03:00]** One, I saw that was confirmed.
**[03:02]** I'm not sure.
**[03:04]** Probably a whole bunch of it now.
**[03:06]** So like with the Department of Homeland Security being shut down, how is that effect
**[03:10]** like the cybersecurity and excited?
**[03:12]** Yeah, it's a good question.
**[03:14]** And shut down is a relative term.
**[03:18]** It's shut down in the fact that it doesn't have funding for parts of it.
**[03:22]** But it also, I mean, in the budget bill last year, I mean,
**[03:26]** it's like $40 billion in funding for part of Homeland Security.
**[03:30]** So they have cash.
**[03:32]** They're just choosing not to use it for certain things.
**[03:34]** It does have some impact, but most of the critical stuff is exempt.
**[03:40]** So like even even though Homeland Security is technically not funded right now
**[03:46]** and it shut down, there's still stuff happening.
**[03:50]** The TSA is reduced, TSA officers are not getting paid right now,
**[03:54]** but there's still people go through the airport, right?
**[03:58]** And so most of the cybersecurity stuff usually gets exempted from that.
**[04:02]** The beer, it was the doge stuff earlier in the year.
**[04:08]** There were a bunch of cybersecurity people cut as part of that process.
**[04:11]** So that is hampered things a bit.
**[04:13]** But I don't think the shutdown's really impacted it than that.
**[04:16]** I could be wrong.
**[04:17]** If you see news about that, I'd like to see it.
**[04:19]** So, okay, there they go.
**[04:23]** Okay, all right.
**[04:24]** Today, well, you can decide for yourself.
**[04:26]** The content today is some of my favorite of the semester.
**[04:28]** I really like it.
**[04:29]** Hopefully you did too.
**[04:30]** Let's pick up last time.
**[04:32]** We didn't get, I think in this section to one time paths.
**[04:35]** That looked familiar.
**[04:36]** Okay.
**[04:37]** So we were talking a little bit about breaking the enigma machine
**[04:39]** and all that at the very end of class last time.
**[04:41]** So let's move to this concept of a one time path.
**[04:45]** There is only one perfect encryption out there.
**[04:48]** And as far as we know, it is this.
**[04:51]** Okay.
**[04:52]** One time path is the best encryption out there.
**[04:55]** It's painful.
**[04:57]** Which is why we don't do it as much.
**[04:59]** But you do kind of see it in movies sometimes.
**[05:02]** It's by movies in the Cold War and things.
**[05:04]** And it does get used occasionally.
**[05:06]** So there's a bunch of people who kind of worked on this problem
**[05:09]** and kind of got it to fruition.
**[05:11]** And then ultimately this guy, who you may not have heard of,
**[05:15]** super famous called the Father of Information Theory.
**[05:19]** He's an academic, super smart guy.
**[05:21]** I cite him in some of my dissertation and in some of my research.
**[05:25]** He proved that one time paths are perfect encryption.
**[05:29]** And what that means is that if you take true randomness,
**[05:33]** which we'll talk about in a second,
**[05:35]** if you take true randomness and add it to non-ramping things data,
**[05:40]** then the result is true randomness and unbreakable.
**[05:45]** Here's how it works.
**[05:48]** So you take your message character by character.
**[05:52]** And if you have a pad, do we?
**[05:54]** There we go.
**[05:55]** If you have a pad or some key somewhere,
**[05:57]** I mean usually they put them in pads like this.
**[05:59]** But if you have a key,
**[06:01]** and you take truly random key,
**[06:04]** and character by character add those things together.
**[06:08]** Like you use this with a visionary site, for example,
**[06:11]** with your character and then an S.
**[06:13]** And then your second character and then a Y and so forth.
**[06:16]** If you add those things together,
**[06:18]** and it is truly random,
**[06:20]** then it can't be decrypted unless someone else has the pad.
**[06:24]** There's no crypt analysis that can be performed on randomness,
**[06:29]** with data encrypted to true randomness.
**[06:32]** There's some challenges here.
**[06:35]** Number one, true randomness is actually pretty hard to come by.
**[06:39]** We'll talk about that more in just a sec.
**[06:41]** Second, you can't use anything more.
**[06:44]** You can't use the key more than once,
**[06:45]** which is why these one-time pads got their name
**[06:48]** is because you make a pad that's full of sheets of paper
**[06:51]** that have true randomness or as close to true randomness
**[06:54]** you can get encryption.
**[06:55]** You can encrypt your message and rip off that page
**[06:58]** and burn it or destroy it somehow,
**[07:01]** and then never use it again.
**[07:02]** Because if you start reusing things
**[07:04]** that all of sudden that provides weakness
**[07:06]** and it's not random,
**[07:07]** and so you can correlate messages over time
**[07:09]** and do crypt analysis.
**[07:11]** Next thing is,
**[07:12]** your pad has to be at least as long as your message
**[07:15]** because you're doing character by character encryption.
**[07:19]** And it's the best that exists.
**[07:22]** It's just a little cumbersome.
**[07:24]** You've got to get the pad to the destination,
**[07:26]** sometimes you'll see like,
**[07:27]** coldware spy movies where they're using these
**[07:30]** and they've got to have these dead drops
**[07:32]** where somebody brings in on a plane
**[07:34]** in a suitcase where they've handcuffed it to them
**[07:37]** and they've got these pads sent out to the spies
**[07:39]** and they drop it under a bench or something, right?
**[07:41]** So you've got to get the pads to the sender
**[07:44]** and the receiver and they can use them properly
**[07:47]** and they have to be truly random,
**[07:48]** which is why they're kind of full.
**[07:51]** Now, true randomness,
**[07:55]** pretty hard.
**[07:58]** Okay.
**[08:00]** Better at it, but it's pretty hard.
**[08:02]** How many of you let you play any like D&D
**[08:05]** or dice rolling games?
**[08:07]** A few of them.
**[08:08]** Okay.
**[08:09]** At our table, my kids sometimes
**[08:11]** are really complain about their siblings
**[08:13]** when we play D&D or things
**[08:15]** because their siblings seem to roll very nice
**[08:19]** and the thoughts always seem to be happier
**[08:21]** than they'd like to be.
**[08:23]** You know, it's way more D20's rolled
**[08:25]** and so maybe this isn't a fair die.
**[08:27]** It's a little bit weighted.
**[08:28]** I put it in water and it's a whole thing.
**[08:30]** So, dice are just not truly random,
**[08:34]** unless they are perfectly created in per road.
**[08:38]** That's tricky.
**[08:40]** So how do we get true randomness?
**[08:42]** Well, random.org, which is pretty good
**[08:44]** side actually for getting random numbers,
**[08:46]** partially uses atmospheric noise.
**[08:50]** As far as we understand,
**[08:51]** the weather is a truly chaotic random system
**[08:54]** and so if you get atmospheric noise,
**[08:57]** that's really close to random.
**[08:59]** There's an old side that's now defunct called hot bits,
**[09:02]** but actually used radioactive decay
**[09:04]** with giger counters as part of their random number
**[09:07]** generation.
**[09:09]** Scientists believe that anything that plays
**[09:12]** anything that has radioactive decay,
**[09:14]** you know, an element that dictates
**[09:15]** into some other element,
**[09:16]** that it's predictable how
**[09:19]** the aggregate will decay.
**[09:21]** So everything has a half-life.
**[09:23]** So half of the material will defunct.
**[09:25]** We've let's get in some amount of time,
**[09:26]** and that's predictable.
**[09:27]** But when any little piece of it,
**[09:29]** any atom actually decays,
**[09:31]** that that's, we think, truly random.
**[09:33]** And so these blips on the giger counter
**[09:35]** are supposed to be truly random when they happen.
**[09:39]** We also have cloud flare
**[09:43]** decides to use physical randomness.
**[09:46]** And so they famously use this,
**[09:48]** they didn't call up with the original idea,
**[09:50]** but they're the ones that implemented it.
**[09:52]** Lothelips, and so in their headquarters,
**[09:55]** they have this wall of lava lamps.
**[09:57]** And as far as we know, lava lamps
**[09:59]** are random in the blobs and how they move over,
**[10:02]** and so they've got cameras behind the lava lamps,
**[10:05]** and they take a picture as to whether the blob is there
**[10:08]** or not there at any given time across the lava lamp,
**[10:11]** and they take that wall of lava lamps,
**[10:13]** and they feed that it as a seed
**[10:15]** to their pseudo-random number generator.
**[10:18]** They also, because they got famous for this,
**[10:21]** they started using it in their other offices.
**[10:24]** So here is a double pendulum,
**[10:26]** which is also a random thing in their London offices,
**[10:30]** in their Austin Texas office.
**[10:32]** They have these mobiles of spinning things,
**[10:34]** and they take pictures at any given time of the color there.
**[10:37]** They just recently opened up an office in Lisbon,
**[10:40]** and they used these wave machines,
**[10:42]** that kind of slosh water back and forth,
**[10:44]** and take pictures of them,
**[10:45]** and they use those mostly to be cute
**[10:48]** and for marketing,
**[10:51]** but to try to get true randomness.
**[10:54]** So you take nowadays,
**[10:56]** you take the best randomness you can get,
**[10:58]** and you feed it into an algorithm,
**[11:01]** and use it as a seed,
**[11:02]** or data for that algorithm,
**[11:04]** and then the algorithm makes things hopefully more random.
**[11:07]** So these algorithms are more like cryptographic algorithms
**[11:11]** to encrypt things,
**[11:12]** so we basically take as random as we can,
**[11:15]** and then encrypt it,
**[11:17]** and the output of that is we hope pretty random.
**[11:21]** How many of you have used the random function in a program before?
**[11:26]** Most programming languages have multiple random functions.
**[11:31]** There's the fast ones that most of us use
**[11:34]** when we're learning how to program,
**[11:36]** and then there's the ones that are actually good at randomness,
**[11:40]** and we call those graphically secure,
**[11:42]** pseudorandom number generators, or sea springs,
**[11:45]** and those ones take longer to calculate,
**[11:47]** and have more memory and CPU and intensity,
**[11:51]** and so we don't usually use those as we really need to go to randomness.
**[11:55]** If you just make it a silly game,
**[11:57]** it doesn't really matter if it's really random,
**[11:59]** as long as it's close enough to random.
**[12:01]** Now, in your computer,
**[12:03]** because you don't have access, I don't think,
**[12:05]** to the weather or lava lamps on your computer,
**[12:07]** so how do you actually do this on your computer,
**[12:10]** is you take a good algorithm to encrypt,
**[12:13]** and then you use as good of randomness as you can get on your computer.
**[12:17]** This might be millisecond differences in IO reads,
**[12:21]** meaning like reading our driver from RAM,
**[12:24]** or millisecond differences in the arrival of packets,
**[12:28]** which we think are truly random in some cases,
**[12:31]** and so you take that information and feed it into your good algorithm,
**[12:36]** and feed it to random number generator,
**[12:38]** and then hopefully that's good enough for cryptography.
**[12:41]** Questions on randomness?
**[12:44]** I have a hard problem, actually.
**[12:47]** Okay, moving on.
**[12:49]** And all dead guy Augusta Kerchoff came up with this idea
**[12:53]** that we now call Kerchoff's principle.
**[12:56]** And formally, this is what he said.
**[12:58]** He said, a crypto system, meaning like the cryptography,
**[13:01]** should be secure even if everything about the system,
**[13:05]** except for the key, is public knowledge.
**[13:08]** Now, interpreting what he said,
**[13:11]** we now say that you don't get security through obscurity.
**[13:16]** So our security isn't obscurity.
**[13:19]** So you don't want to hide the algorithm.
**[13:22]** In our modern world, all of our good cryptography and algorithm,
**[13:26]** use, are all public information.
**[13:29]** And in fact, all of the good ones have been through a competition
**[13:34]** for it to become the official algorithm that we kind of go with.
**[13:38]** And during the competition, everything about the algorithm is public,
**[13:41]** and researchers, mathematicians, and other people can pick
**[13:45]** it those algorithms and look for flaws and try to find limitations,
**[13:48]** and then ultimately the best one ends up winning.
**[13:51]** The thing that is kept secret is the key.
**[13:54]** If you've got good algorithm, good secret key, you have good cryptography.
**[14:02]** Now, it leads us to one of our main problems that we had to solve as an industry,
**[14:08]** and as a world, in order to get the internet and other things to work,
**[14:12]** is so far, we talked about encrypting and decrypting.
**[14:16]** So you use a key to encrypt a message, and then the recipient encrypts that message
**[14:21]** with the same key.
**[14:23]** That's symmetric encryption when we're both using the same key.
**[14:26]** Talk about the wrong minute.
**[14:28]** But in our modern world, how many of you have ever
**[14:32]** key physically to some data center of the company you want to do business with?
**[14:39]** Did you go to your bank and say, hey, I need to take a key to my bank
**[14:44]** and then the web server, so that later I could do online checking.
**[14:48]** Of course, we don't do that, okay?
**[14:50]** So we have this problem of how do we send a message online
**[14:55]** to theoretically in public, okay?
**[14:57]** Somebody can wire shark this.
**[14:59]** How do we send a message when we have an exchange to key yet?
**[15:03]** We can't encrypt something, we don't have the keys to encrypt it yet,
**[15:07]** but we need to encrypt something in order to send the key.
**[15:10]** How do we do that?
**[15:11]** It's a big problem, okay?
**[15:13]** Let me just bring a, we'll watch a quick video.
**[15:15]** These are some of the big players in this problem,
**[15:19]** and then a later problem as well.
**[15:23]** In the early 1970s,
**[15:25]** three young computer scientists saw that a revolution
**[15:28]** in the way you communicate would require a revolution
**[15:31]** in the way we keep secrets.
**[15:33]** We need to think about both for paperless scientists.
**[15:36]** And what bothered me was, well, what would you do for a signature?
**[15:40]** Until in 1996, all cryptographic
**[15:43]** or secrecy systems since the time the season of cyber
**[15:47]** were based on a physical exchange of a single secret key
**[15:50]** that unlocked its secret code.
**[15:52]** On the internet, that wasn't possible.
**[15:55]** At the University of California,
**[15:57]** Berkeley in 1997 before,
**[15:59]** an undergraduate student named Ralph Markle,
**[16:02]** envisioned a new way to exchange secrets between computers.
**[16:06]** His professor rejected the idea as a model,
**[16:09]** and a really scientific journal said,
**[16:11]** we didn't make sense.
**[16:13]** I get married, that's really one good idea.
**[16:16]** Yeah, it's been one of the key players from the university.
**[16:19]** Professor Markle was getting a similar reaction
**[16:22]** until the next week, didn't be.
**[16:24]** It was just such a meeting of the minds
**[16:26]** and the sole rights to find someone who didn't think I was crazy.
**[16:29]** Building on Merkel's ideas,
**[16:31]** did he and Helen close their radically new cryptographic methods
**[16:35]** without one or two keys,
**[16:37]** a public key and a client key?
**[16:40]** What else?
**[16:41]** Yeah, so a couple of big players here,
**[16:43]** so this is Whitfield Diffy.
**[16:45]** You saw Martin Helman, who was at Stanford
**[16:48]** and then also Ralph Merkel at Berkeley,
**[16:51]** and we'll talk about Merkel.
**[16:53]** Maybe next time, if we have time,
**[16:56]** so if you've ever done any cryptocurrency
**[16:59]** and dealt with that at all,
**[17:01]** one of the key parts of Bitcoin
**[17:03]** is that it uses a Merkel room
**[17:06]** to do the calculations to make sure
**[17:08]** that it has integrity.
**[17:09]** We'll talk about that later.
**[17:11]** And so Ralph Merkel came up with that
**[17:13]** and there's all of this has implications
**[17:15]** for cryptocurrency and other things.
**[17:17]** This still doesn't solve the key exchange problem.
**[17:19]** So how do we do that?
**[17:22]** Now, whether you like it or not,
**[17:23]** this next video is my favorite video
**[17:25]** that's ever been created on the planet.
**[17:28]** So, pretend to like it, either way.
**[17:30]** How do we solve this in our digital world?
**[17:32]** Let's see how they figured that out.
**[17:39]** Newly in the round of the world,
**[17:40]** we'll find new problems under it.
**[17:42]** At the time, you can find two parties,
**[17:45]** the first hair, a secret man, a number, another little meaning.
**[17:49]** So how do you people will never met
**[17:51]** a green on a secret, shared speed?
**[17:54]** Everybody in E, who is always listening,
**[17:58]** all this will have to be in a problem.
**[18:00]** In the 90s, as I said,
**[18:02]** millions around the world.
**[18:04]** We'll talk more about E later.
**[18:05]** So E is our E's dropper, in this case.
**[18:08]** And in the cybersecurity cryptography world,
**[18:10]** we always use E for our E's dropper.
**[18:14]** You're listening, also a teen economy.
**[18:17]** In the 90s,
**[18:18]** he says,
**[18:19]** we've filled this with an hardened helmet
**[18:21]** and devised an amazing trick for humans.
**[18:24]** First, let's explore how this trick is done using colors.
**[18:28]** Often, Alice involved a rearmory secret
**[18:31]** and holler without E finding it out.
**[18:34]** The trick is based on two of that.
**[18:37]** One, it's easy to mix two colors together
**[18:40]** to make a third solid.
**[18:42]** And two,
**[18:43]** evening mixed color,
**[18:45]** it's hard to reverse this
**[18:47]** in order to find the sets of original colors.
**[18:50]** This, this is the basis for a lot.
**[18:53]** Easy and one direction, part in the reverse direction.
**[18:57]** This is known as a one-way function.
**[19:00]** Now, the solution works as follows.
**[19:03]** First, they agree publicly on a starting color.
**[19:07]** Say, yellow.
**[19:10]** That's Alice involved both randomly select
**[19:13]** rounded colors
**[19:15]** and makes them into the public yellow
**[19:17]** in order to disguise their private colors.
**[19:20]** Now, Alice keeps her private color
**[19:23]** and sends her mixture to Bob
**[19:25]** and Bob keeps his private color
**[19:28]** and sends his mixture to Alice.
**[19:32]** Now, the heart of the trick.
**[19:37]** Alice involved had their private colors
**[19:40]** and the other person's mixture
**[19:42]** and arrived at a shared snorkeling color.
**[19:49]** No, this has to be
**[19:50]** and unable to determine as the exact color.
**[19:53]** Then she means one of their private colors to do so.
**[20:01]** And that's been tricked.
**[20:03]** Now, to do this number,
**[20:05]** we need a numerical procedure,
**[20:08]** we're just easy and one direction
**[20:10]** and hard in the other.
**[20:12]** This brings us to modular arithmetic,
**[20:14]** also known as quadru-nip-nip-nip.
**[20:17]** For example, the 246 mod is well.
**[20:21]** We need to take a global 246 units
**[20:24]** and wrap it around a clock
**[20:26]** 12 units, which is called modgeless.
**[20:29]** And where the group ends is the solution.
**[20:32]** So, we say 46-mind 12 is congruent to 10.
**[20:37]** Easy.
**[20:38]** Now, to make this work,
**[20:40]** we use a crime modulus, such as 17,
**[20:43]** that we find a primitive group of 17.
**[20:46]** In this case, free,
**[20:48]** which has this important property
**[20:50]** that when raised to different exponents,
**[20:52]** the solution distributes uniformly around the clock.
**[20:57]** The free, this known as the jerry.
**[21:00]** If we raise free to any exponents acts,
**[21:04]** then the solution equally likely
**[21:06]** to be any integer between 0 and 17.
**[21:09]** Now, the reverse procedure is hard.
**[21:13]** Say, given 12,
**[21:15]** our next exponent, the free, the be raised to.
**[21:18]** This is called the discrete logarithm property.
**[21:22]** And now, we have our one way function.
**[21:25]** Easy to bring on, the hard to reverse.
**[21:28]** Given 12, we would have to resort to trial and error
**[21:32]** to find matching exponents.
**[21:34]** How far is this?
**[21:36]** Well, with small numbers, it's easy.
**[21:39]** But if we use a prime modulus,
**[21:41]** with this, it lingers at digits long.
**[21:43]** It becomes impractical to solve.
**[21:46]** Even into an access to all computational power on error,
**[21:50]** it could take thousands of years to run through all possibilities.
**[21:53]** So, the strength of a one-way function
**[21:56]** is based on the time needed to reverse it.
**[22:00]** Now, this is our solution.
**[22:02]** First, Alice involved every publicly on a prime modulus
**[22:06]** and a generator.
**[22:07]** In this case, 17 and 3.
**[22:10]** Then, Alice selects a private random number,
**[22:13]** says 15.
**[22:15]** Then, how's the length?
**[22:16]** 3 to the power 15, 9, 17.
**[22:20]** And send this result publicly to Bob.
**[22:24]** Then, Bob selects his private random number,
**[22:28]** say 13.
**[22:29]** And calculates,
**[22:30]** read to the power of his team by 17
**[22:34]** and sends this result publicly to Alice.
**[22:38]** And now, the part of the dream.
**[22:40]** Alice takes Bob's public result
**[22:43]** and raises it to the power of the private number
**[22:46]** to obtain the shared secret, which in this case is kept.
**[22:50]** Bob takes Alice's public result
**[22:54]** and raises it to the power of his private number,
**[22:57]** resulting in the same shared secret.
**[23:00]** Notice they did the same calculate it,
**[23:02]** though it may not look like it at first.
**[23:05]** Consider Alice.
**[23:06]** As 12, she received from Bob,
**[23:08]** was calculated as 3 to the power of their team on 17.
**[23:13]** So, a current population was the same as 3 to the power
**[23:16]** shared team to the power of 15 on 17.
**[23:21]** The 6th year received from Alice
**[23:24]** was calculated as 3 to the power of 15 on 17.
**[23:29]** So, this calculation was the same as 3
**[23:32]** to the power of their team.
**[23:34]** Notice they did the same calculation
**[23:36]** with the exponents in a different order.
**[23:38]** When you put big exponents,
**[23:40]** there is no button change.
**[23:42]** So, they both calculated 3,
**[23:44]** raised to the power of their private numbers.
**[23:47]** That's how it's done.
**[23:57]** That's how it's done.
**[24:00]** That was so.
**[24:03]** Your devices in front of you or in your pockets or bags
**[24:08]** have probably done this algorithm or successors.
**[24:13]** Probably dozens of times on your behalf today.
**[24:16]** So, this is called the Diffy-Helman key exchange
**[24:20]** and is foundational for how the internet works.
**[24:24]** The goal of the Diffy-Helman key exchange
**[24:27]** is to use, I'm going to say this carefully,
**[24:30]** is to use an asymmetric process
**[24:33]** to arrive at a symmetric key.
**[24:37]** So, we're coming to a key that is shared by Alice and Bob
**[24:41]** by having different pieces of information
**[24:44]** that we can do this.
**[24:46]** So, the whole goal is key exchange here.
**[24:48]** I want you to have the experience of doing this.
**[24:51]** So, we're going to spend maybe four minutes or something.
**[24:54]** I want you to get into a pair and do these calculations.
**[24:58]** So, if you, if you, you're going to need to calculate
**[25:03]** the mod function and the exponent function.
**[25:08]** I actually recommend you use a tool called rule from alpha.
**[25:11]** It's a great online calculator.
**[25:13]** If you haven't discovered it before,
**[25:15]** if you want to do rule from alpha, let's say we take some number
**[25:18]** and we raise it to another power.
**[25:20]** We use the carrot symbol, shift six,
**[25:22]** in order to raise it to a power.
**[25:24]** And then if we need to use the mod function,
**[25:26]** we just do MOD, upper or lower case,
**[25:28]** and then choose a number,
**[25:30]** and then that will be our calculations.
**[25:32]** Okay, we need to do five to the seventh mod seven.
**[25:35]** It looks like this and the result is five.
**[25:37]** So, here's what you're going to do in your partner.
**[25:39]** We're going to give you a PNG.
**[25:41]** So, we're going to get the generator and this P value.
**[25:43]** And then you need to choose a value individually,
**[25:46]** both people.
**[25:47]** You need to choose a value that's between one and P minus one.
**[25:50]** So, inclusive endpoints between one and 22.
**[25:55]** Don't tell your partner what it is.
**[25:57]** And then you're going to calculate this value.
**[25:59]** Okay, G5 to the x mod P or 23.
**[26:03]** And you're going to calculate your y value.
**[26:05]** Each person does that.
**[26:07]** And then you exchange your y values.
**[26:09]** Okay, so you get your partners y.
**[26:10]** They get your y.
**[26:11]** And then they're going to calculate.
**[26:14]** And you're going to calculate the shared key by using the y that you've got
**[26:18]** from your partner raised to your private x value that nobody knows.
**[26:22]** Mod P and see if you can put the same shared key.
**[26:25]** So, we'll be like three, maybe four minutes on this,
**[26:28]** and then we'll talk about it.
**[26:29]** Okay.
**[26:30]** Let's go.
**[26:31]** Okay.
**[26:32]** Okay.
**[26:33]** Okay.
**[26:34]** Okay.
**[26:35]** Okay.
**[26:36]** Okay.
**[26:37]** Okay.
**[26:38]** Here.
**[26:39]** Good.
**[26:40]** Okay.
**[26:42]** Okay.
**[26:43]** Okay.
**[26:44]** Okay.
**[26:45]** Okay.
**[26:46]** Let's go.
**[26:47]** My.
**[26:49]** That's.
**[26:50]** Okay.
**[26:51]** Okay.
**[26:52]** Oh, I got my number.
**[26:53]** So.
**[26:54]** Date.
**[26:56]** There.
**[26:57]** I got five.
**[26:58]** I got five.
**[27:00]** That's too late.
**[27:01]** I don't know.
**[27:02]** Oh it has to be great to.
**[27:05]** Yeah, that's it.
**[27:07]** Yeah, we choose.
**[27:10]** Right.
**[27:11]** Right.
**[27:12]** So the one two is chosen.
**[27:14]** X.
**[27:15]** All right.
**[27:16]** I'm sure it's out.
**[27:17]** I'm sure it's out.
**[27:18]** Jared.
**[27:19]** The Nalson.
**[27:20]** We can't.
**[27:21]** We can't.
**[27:22]** We can't.
**[27:23]** We can't.
**[27:24]** I.
**[27:25]** I.
**[27:26]** I.
**[27:27]** So I would be odd.
**[27:28]** There.
**[27:29]** We.
**[27:30]** We can't.
**[27:33]** I.
**[27:34]** I.
**[27:35]** Why.
**[27:36]** I.
**[27:37]** I.
**[27:38]** I.
**[27:40]** I.
**[27:41]** I.
**[27:43]** It's.
**[27:45]** I know.
**[27:46]** I.
**[27:47]** I.
**[27:48]** I.
**[27:49]** I.
**[27:50]** Um.
**[27:51]** Yeah.
**[27:52]** What.
**[27:53]** I.
**[27:54]** I.
**[27:55]** I.
**[27:56]** I.
**[27:57]** I.
**[27:58]** Oh,
**[28:00]** I.
**[28:02]** I.
**[28:03]** I.
**[28:04]** I.
**[28:05]** I.
**[28:06]** I.
**[28:07]** I.
**[28:08]** I.
**[28:09]** I.
**[28:10]** So that's so smart.
**[28:12]** She's so cool.
**[28:13]** So.
**[28:14]** I.
**[28:15]** You said I can.
**[28:16]** I.
**[28:17]** I.
**[28:18]** I.
**[28:19]** I.
**[28:20]** I.
**[28:21]** I.
**[28:22]** I.
**[28:23]** I.
**[28:24]** I.
**[29:55]** people were successful in coming to a share key. It was so working.
**[30:25]** This is the working.
**[30:29]** Okay, so I guess in this scenario, isn't it always going to be a number or no?
**[30:36]** No, it's going to be a low number in this scenario. Normally, we use a lot of new
**[30:39]** hundreds, though it could be in a hundred digit number, four thousands. Yes.
**[30:44]** Something interesting that we didn't notice, I had my secret number. It was 23, the same as the
**[30:49]** module, so it just returns key. Oh, because yeah, so your secret number has to be less than the
**[30:55]** module, so it's going to be, you know, P minus one. Otherwise, otherwise, we do end up
**[31:01]** with problems. Yes, that's true. Yes. Is it like the university's end beginning problem? No.
**[31:09]** So P versus NP is a long and takes to calculate kind of problem. This is a, we just happen to use
**[31:17]** P. Okay. Yes. So you said our computer is kind of doing this like repeatedly. Does it do it in binary?
**[31:27]** Or is it numbers that could be like seven, eight, six and so on? Ultimately, everything's a binary, right?
**[31:33]** But yes, it thinks, I think a good question. Does it, is it actually output it to the server in binary or not?
**[31:41]** I don't actually know how to look. Probably in hexadecimal, that's kind of the normal format for
**[31:46]** the output and cryptography stuff, but I would have to double check in question. So this happens all the time.
**[31:53]** It does have some limitations. The strengths of it are much better than the limitations, such as why we still use the
**[32:00]** Diffy Helman key exchange. But we do have to deal with this for every single partner that we're trying to share information with.
**[32:08]** So every bank or every e-commerce side or social media side or whatever we're using an encrypted
**[32:14]** connection with, we need a different key for each of those. We also have to be really careful because there's this thing called
**[32:22]** Forward secrecy, which we'll maybe talk about later if we have time. But the idea is what if somebody just starts
**[32:30]** snooping on all your encrypted data and then just saves it. In the hopes that your key gets leaked later
**[32:39]** or that the cryptography is found to be flawed and breakable, and then they can decrypt anything that you've said in the past.
**[32:46]** That's a problem. So nowadays we also tend to do a version of this algorithm called the ephemeral algorithm,
**[32:54]** Diffy Helman ephemeral, meaning that we make a new key for every single session so that it changes every time.
**[33:02]** But that also requires us to calculate this every time. There's also no authentication, which is fine.
**[33:07]** But we have to deal with authentication another way and so we'll deal with that in maybe next time.
**[33:12]** I don't know the quite good to authentication today.
**[33:15]** But this has happened all the time.
**[33:18]** The elliptical curve, if you haven't had a different variation.
**[33:24]** And in section one, we got one slide before elliptical curve cryptography. So in section one we'll get to that first thing on Thursday.
**[33:31]** I'm guessing we'll get approximately the same type of place. So yes, Diffy Helman is the, sorry, the elliptical curve Diffy Helman is the elliptic curve version of this algorithm.
**[33:43]** Same concept, slightly different math.
**[33:46]** So probably we'll talk about it first thing Thursday. I think.
**[33:53]** All right.
**[33:54]** So for the rest of this week, we're going to talk about how do we fix these problems by applying these, oh, not going to work today.
**[34:03]** These security principles.
**[34:05]** Okay. So we've got these conceptual threats.
**[34:08]** Okay. These aren't like hacker threats, but conceptual threats of what happens to our messages that when we don't want them to be intercepted,
**[34:15]** when we don't want them to be modified, when we don't want our services to be interrupted,
**[34:20]** when we don't want information to be made up, those are all problems.
**[34:24]** So how do we solve those with cryptography by applying these principles?
**[34:29]** So at it's very core, we have this issue, okay.
**[34:35]** So we've got an Allison above cryptography.
**[34:37]** We are always used Allison Bob, somebody decided once a minute stuck.
**[34:41]** So A to B, how do we send a message between Allison Bob?
**[34:44]** We want to transmit that information and we want to do it securely.
**[34:48]** We've also got Eve, who is our Eve Strupper.
**[34:51]** Sometimes we get some other characters in our cryptographic world.
**[34:55]** Sometimes you'll see diagrams that include Trudy, who is an intruder, or Mallory, who is a malicious actor, actor, and Trent, who is a neutral third party.
**[35:06]** I don't know why Trent said that.
**[35:09]** So we're going to stick with you for right now.
**[35:12]** Okay.
**[35:13]** So our first problem, our first threat that we're trying to deal with is,
**[35:17]** what if Eve gets access to data that Eve should not have access to?
**[35:21]** Okay.
**[35:22]** So if that information is intercepted or disclosed when it shouldn't be disclosed,
**[35:27]** and Eve can read data that she shouldn't have.
**[35:30]** That is a direct violation of our fundamental principle of confidentiality.
**[35:34]** Okay.
**[35:35]** So confidentiality, one of our CIA triad pieces, is we want to make sure that the data that should be secret is kept secret.
**[35:44]** That only authorized people should have access to the data.
**[35:48]** Okay.
**[35:49]** Now, we mostly do this with cryptography using encryption.
**[35:53]** So encryption is just using some mathematical algorithm,
**[35:57]** whether simple or complex to disguise the data, so that even if Eve gets it,
**[36:02]** she can't do anything with it.
**[36:04]** Okay, because she can't understand that data.
**[36:06]** Okay.
**[36:07]** So far, we've been talking about a type of encryption, where Eve can't understand this,
**[36:12]** called symmetric encryption.
**[36:14]** Okay.
**[36:15]** symmetric encryption is when Allison Bob used the same algorithm with a single key, right?
**[36:21]** Alice has a copy of the key, Bob has a copy of the key,
**[36:24]** and they can both use those keys to encrypt and decrypt.
**[36:28]** And how do we exchange a key between Allison Bob,
**[36:32]** when we don't want Eve to have that key, when Allison Bob don't have a key?
**[36:36]** Well, we use Diffy Helvent in order to do that key exchange,
**[36:41]** so that each side has a symmetric key.
**[36:43]** Now, the key is you calculated or small, right?
**[36:45]** You know, like 10 or 12 or something like that.
**[36:48]** But these keys get much, much, much longer as we use much larger numbers.
**[36:53]** Makes sense?
**[36:54]** Questions so far?
**[36:56]** Okay.
**[36:57]** In the video, it's talking about, like, even if you had all the computational power
**[37:01]** on Earth, like you would still take you thousands of years with the encryption power.
**[37:06]** Benson, has that number for you?
**[37:08]** That video wasn't made this year?
**[37:09]** No help me.
**[37:10]** Well, not.
**[37:11]** Sorry.
**[37:12]** Yeah, within creases, does it get more and more worrisome?
**[37:15]** Yes.
**[37:16]** Although we can do things like make the numbers bigger,
**[37:20]** and then our keys are longer, and then it's fine.
**[37:22]** The real problem is quantum computing, which we'll talk about on this.
**[37:27]** You can hold that.
**[37:28]** Oh, yeah, it's a good question.
**[37:30]** Okay. Now, symmetric encryption eventually
**[37:33]** isn't the only game in town.
**[37:35]** We have this idea of asymmetric encryption.
**[37:39]** And that is the idea that Alice and Bob might be using a different key.
**[37:44]** How does that work?
**[37:46]** Well, we'll get there.
**[37:47]** But the idea is we have a key pair, okay?
**[37:51]** It's actually one key that has these two keys that are part of it.
**[37:55]** And one part of this key pair, we call the public key.
**[38:00]** And one part of the pair, we call the private key.
**[38:03]** And we can actually share the public key with the rest of the world.
**[38:07]** And the private key and the public key work together to do encryption.
**[38:10]** We'll talk about that towards the end of class with the beginning of next class as well.
**[38:14]** Okay.
**[38:15]** But today we're mostly talking about the symmetric side of encryption,
**[38:18]** where Alice and Bob used the same key.
**[38:21]** Okay?
**[38:22]** So once we have this key, we've got some other things to think about
**[38:27]** when you're transmitting messages between Alice and Bob.
**[38:30]** So for example, do we want to encrypt one bit at a time
**[38:37]** or we want to take the data that we're trying to submit to a Bob,
**[38:43]** or trying to send a Bob, and chop it up into blocks of data,
**[38:47]** okay, pieces, chunks of data, and encrypt those at a time.
**[38:51]** As it turns out, block tends to be faster with one exception.
**[38:57]** And so we really want to use block ciphers if we can.
**[39:02]** But sometimes we don't have data that's, we already know the size of the file
**[39:08]** and we can just chop up the file into a block.
**[39:10]** Sometimes we've got data coming in as a stream, okay?
**[39:14]** Like live video or audio data.
**[39:16]** And so we don't know when the end of the file is going to be,
**[39:19]** and we don't just have the whole file to chop up into blocks right now.
**[39:23]** And so we want to encrypt this as a stream as the data comes in.
**[39:28]** As it turns out, the algorithms are different for doing that the most efficiently.
**[39:34]** And so we tend to use stream ciphers or stream algorithms for stream data
**[39:40]** and block ciphers for non-stream data.
**[39:44]** All right, data that we know what the size of the file is in advance.
**[39:48]** Okay.
**[39:49]** There are a lot of different stream ciphers.
**[39:51]** I should change this slide now.
**[39:52]** The old one that we used to use quite a bit was called RC4 or Arc4.
**[39:57]** Now we tend to use one called Chacha or Chacha 20 specifically.
**[40:03]** And Chacha 20 actually really, really fast.
**[40:08]** So used to be that AES, we'll talk about next,
**[40:12]** was like the fast one and it still is very fast,
**[40:15]** but Chacha is also quite fast, which is why Chacha is kind of taking over the world.
**[40:21]** But as of right now, the most important and most commonly used encryption
**[40:26]** algorithm on the planet is AES.
**[40:30]** More devices have probably used AES on your behalf,
**[40:34]** dozens of times today.
**[40:36]** You've got to done something with AES today.
**[40:40]** The devices probably have.
**[40:42]** You've used AES almost certainly or Chacha.
**[40:45]** Okay.
**[40:46]** We'll talk about AES and how it works.
**[40:50]** Because I think it's worth knowing what happens in one of our modern
**[40:54]** algorithms.
**[40:55]** Okay.
**[40:56]** So the US government wants to keep certain information top secret.
**[41:00]** And part of that top secret process is encrypting that data.
**[41:03]** So they had a standard called the EES standard,
**[41:06]** the data encryption standard,
**[41:08]** that they had decided on a long time ago.
**[41:10]** And so all their top secret stuff was encrypted with the DES standard.
**[41:15]** After some amount of time and the increases in computing power,
**[41:18]** there was huge concerns that the US has adversaries,
**[41:22]** Russia and China, etc., would be able to decrypt that data.
**[41:25]** And that would be very bad for the US.
**[41:27]** And so they decided they needed a new standard,
**[41:30]** which they were going to eventually call the advanced encryption standard or AES.
**[41:35]** And so they had a competition.
**[41:37]** And they invited people from around the world,
**[41:39]** cryptographers, mathematicians, to submit algorithms that could be used
**[41:42]** as the advanced encryption standard.
**[41:44]** That's lasted for several years, multiple rounds,
**[41:46]** researchers around the world poking holes at these algorithms
**[41:49]** and seeing what was good or bad about them.
**[41:51]** And then the best ones would advance to the next round.
**[41:54]** And finally, an algorithm called Rindall,
**[41:57]** made by these guys, was actually selected as the winner.
**[42:01]** Now, was it the absolute best encryption of any algorithm submitted in the competition?
**[42:07]** It actually wasn't.
**[42:08]** But it was pretty close.
**[42:10]** And it was an algorithm that could essentially be run on a toaster.
**[42:14]** It has such low processing and memory requirements,
**[42:19]** because it often uses super simple operations.
**[42:23]** So this was good enough encryption and incredibly fast encryption.
**[42:28]** Now, in the meantime, the US government was freaked out
**[42:30]** that while this competition was going on,
**[42:32]** that the Soviets would decrypt all of its messages.
**[42:34]** And so it decided, okay, in the short amount of time,
**[42:37]** we're going to take our top secret data that's been encrypted with DES,
**[42:40]** and we're going to run that output through the DES algorithm again.
**[42:44]** Take the output of that, run it through the algorithm again,
**[42:47]** and we'll call that triple DES.
**[42:50]** And that's slightly better than DES while this competition is going.
**[42:53]** Okay?
**[42:54]** So from a brief period of time, all of our top secret data in this country
**[42:57]** was encrypted with the triple DES algorithm.
**[43:01]** Okay.
**[43:02]** Now, here's how AES works.
**[43:04]** It's going to look really complicated.
**[43:06]** Well, I want to break it down because it's really simple in its core.
**[43:10]** Okay?
**[43:11]** So here's what we've got.
**[43:13]** Okay, we've got some key stuff and some data stuff.
**[43:16]** Okay, so this is a block of data.
**[43:18]** This is our key for this round.
**[43:20]** And this is going to look really complicated.
**[43:22]** We do four different things.
**[43:25]** Ten times.
**[43:27]** Okay?
**[43:28]** So here's our four things and we're doing them in ten different times in a loop.
**[43:33]** And that's it.
**[43:34]** Okay?
**[43:35]** Let's look at those four things.
**[43:37]** First step.
**[43:39]** We substitute.
**[43:42]** Okay?
**[43:43]** So we've got this particular box.
**[43:45]** Substitution box, which is kind of like the Visionary Cypher, but it's this one.
**[43:49]** And we just substitute.
**[43:51]** We take our data.
**[43:52]** We look it up in the table and substitute.
**[43:54]** Okay?
**[43:55]** Second one.
**[43:56]** We transpose.
**[43:58]** We move our data over.
**[44:00]** You know, every row gets a slightly different transposition.
**[44:03]** We just move the data around a bit.
**[44:05]** Okay?
**[44:06]** Number three, we mix our columns up by doing math.
**[44:10]** Okay?
**[44:11]** This one happens to be multiplication, matrix multiplication, which is super fast.
**[44:14]** Just multiply.
**[44:15]** And then step four is we take our round key, which we'll talk about next.
**[44:20]** And we add it to our data.
**[44:23]** Okay?
**[44:24]** So we're just doing substitution, transposition, multiplication, and addition.
**[44:30]** And that's all AES does.
**[44:32]** And those operations are super fast.
**[44:35]** And we do them in different times.
**[44:38]** And the turns out, the mix columns in the very last round,
**[44:42]** doesn't actually add enough entropy.
**[44:44]** We're mixed upness.
**[44:46]** So we drop it on the last one for speed.
**[44:48]** But aside from that, we do all of those for operations.
**[44:51]** One to ten.
**[44:53]** And somebody who was attacking this algorithm said, if you only do it four times, it's probably not good enough.
**[44:58]** And so they said, oh, okay, fine.
**[45:00]** We'll do ten.
**[45:02]** Now, another thing that this algorithm does is it uses a different key for each round.
**[45:07]** But that just takes the original key, and it does this process.
**[45:11]** We just take some substitution and do some addition.
**[45:15]** And then we get a key.
**[45:17]** We span that key, original key out so that we have a chunk of the new key for each round by doing substitution and addition.
**[45:25]** And that's it.
**[45:27]** And so AES, and it's core is super simple.
**[45:30]** It's just like all algorithms.
**[45:32]** We just do them together.
**[45:34]** The substitution, addition, multiplication, and transposition.
**[45:38]** We just do them a lot of times.
**[45:40]** And when you need to decrypt, you just do all of this in reverse.
**[45:45]** That's it.
**[45:46]** That is the AES algorithm.
**[45:48]** It's the most widely used algorithm on the planet.
**[45:50]** Because it's so efficient, we actually usually implement it in hardware.
**[45:55]** So your processor doesn't even have to do the math in its normal processing pipeline.
**[46:00]** It actually says, hey, I need to do encryption or decryption of AES.
**[46:04]** Send it to the part of the processor that specifically
**[46:07]** they integrate in circuit to do AES in hardware.
**[46:11]** Super fast.
**[46:12]** So just my processor, how a private key, or is that private key switching over five?
**[46:16]** Yeah, that's the input of the processor.
**[46:19]** Okay.
**[46:20]** And that's it.
**[46:21]** Yes.
**[46:22]** Okay.
**[46:23]** So all the things we've talked about before, just done in a loop fast.
**[46:26]** Okay.
**[46:27]** Questions on that before we move on.
**[46:31]** Yeah.
**[46:32]** For this one, how does it get the key?
**[46:35]** Because it's you're just using the one key.
**[46:37]** Yeah.
**[46:38]** So we still have to get a key to encrypt the data.
**[46:41]** And we might use Diffy Helen to arrive at that key.
**[46:44]** And then the algorithm has a process of expanding that key out.
**[46:48]** So you take the inputs with that substitution box.
**[46:50]** It's up to two.
**[46:51]** Do you add things together and expand that out?
**[46:53]** And so you've got a key that's longer and you use chunks of it for each round.
**[46:59]** All right.
**[47:00]** Now, this next little bit, I'm going to pretty, I level this.
**[47:04]** This topic is probably the most conceptually technical of maybe the whole course.
**[47:10]** But I want to make it high level so that it's very applicable to you.
**[47:15]** But this is the idea of a mode.
**[47:17]** Okay.
**[47:18]** And it turns out you can't just do block encryption with a yes or a different block algorithm.
**[47:25]** But there's a different modes or ways that we can use those algorithms to encrypt things.
**[47:31]** Okay.
**[47:32]** Now this really arose because of a problem with the first mode that we decided to use.
**[47:38]** So once we can evaluate the computer scientists would look at all these modes and we can evaluate them on number of different dimensions.
**[47:47]** Like, if we have an error in the encryption of one block, does it lead to errors in subsequent blocks?
**[47:53]** We'll see that in a minute.
**[47:54]** Can we parallelize this, meaning can we do things simultaneously to speed up the process?
**[48:01]** Does it provide authentication or integrity?
**[48:03]** None of them that I'm going to show you really do that except for sort of one.
**[48:07]** But let's, let's talk about how we do this.
**[48:10]** So ECB mode, or electronic codebook mode, is probably the way that if you are thinking,
**[48:17]** how do I do block encryption?
**[48:19]** This is probably what all of us would come up with.
**[48:22]** This is what industry came up with until we discovered a problem with it.
**[48:26]** It looks like this.
**[48:28]** So we take our message, we call this the playing text message, okay, all our message up here,
**[48:33]** and we chop it up into blocks.
**[48:36]** Now how big are those blocks?
**[48:37]** Well, depends on the algorithm you're using.
**[48:39]** With AES 128, our blocks are 128 bits log.
**[48:45]** And if the last part of the message isn't long enough, we have a process for patting it out,
**[48:49]** so it's always 128 bits that go into the algorithm.
**[48:52]** So in this case, we've got a short message that gets blocked or gets chunked up into three blocks.
**[48:57]** Okay, and then we take our playing text, our key, our algorithm,
**[49:02]** and then we get cyber text for that block, and we do that for this block, and for this block,
**[49:06]** and so forth, and then we can catenate those together, and we've got our encrypted message.
**[49:10]** Pretty straightforward.
**[49:12]** If you have an error in encryption of this block,
**[49:16]** does it affect any of these others?
**[49:21]** These are all totally dependent, okay?
**[49:23]** If I wanted to encrypt this block at the same time as this block,
**[49:28]** is there anything stopping me from that?
**[49:30]** Okay, so this is great on some of our properties.
**[49:34]** Doesn't propagate errors.
**[49:35]** If there's a problem in one block, it is super parallelizable.
**[49:39]** All right, so we can do multiple blocks at the same time.
**[49:42]** That's great.
**[49:44]** But it has a problem.
**[49:46]** Let me show you the problem.
**[49:49]** So, how many of you know, what's the mascot of Linux?
**[49:55]** Penguin.
**[49:56]** Penguin.
**[49:57]** Okay, good. So the Penguin's name is.
**[49:59]** Box.
**[50:00]** All right.
**[50:02]** No, tucks.
**[50:07]** All right.
**[50:08]** So here's our mascot.
**[50:12]** Here's our mascot.
**[50:13]** Okay, here's tucks.
**[50:15]** Let's say we want to encrypt in the box with AES,
**[50:18]** and we're using the ECB mode.
**[50:20]** We're doing this encryption.
**[50:23]** The problem with this is that images are structured in a way
**[50:28]** that we have a lot of repeating data.
**[50:32]** Okay.
**[50:33]** By that, I mean, let's say we're going to break up this image
**[50:36]** into 128-bit chunks.
**[50:38]** Okay.
**[50:39]** The way that images are done, it's this pixel,
**[50:42]** and it's color and transparency,
**[50:44]** and then the next part of the file is
**[50:46]** the next pixel, and it's color and transparency,
**[50:49]** and then the next pixel and the next pixel.
**[50:50]** So we're taking 128-bit of that.
**[50:53]** We're taking a few pixels here,
**[50:56]** and doing the encryption.
**[50:58]** And we're moving to the next chunk of pixels,
**[51:01]** and the next chunk of pixels.
**[51:03]** And as it turns out, AES, which is supposed to keep everything
**[51:07]** about the underlying data secret.
**[51:09]** If you use ECB with AES on tucks,
**[51:13]** you're going to get something like this.
**[51:15]** And that's not great.
**[51:19]** It's not exactly tucks,
**[51:23]** but we're not supposed to see anything
**[51:26]** about the underlying data,
**[51:28]** but in highly structured, repetitive data files,
**[51:32]** we're basically pixelating the data files
**[51:36]** rather than actually hiding the information
**[51:39]** like we've pulled through it.
**[51:41]** And that's the main weakness of the ECB method.
**[51:44]** If we use a different mode, which we'll see in just a minute,
**[51:47]** it's supposed to look like this and ducks.
**[51:50]** We're supposed to have pure randomness
**[51:53]** or entropy in our encrypted image.
**[51:55]** Okay, makes sense?
**[51:58]** Okay, so ECB sucks.
**[52:01]** And that's exactly what I want to get across as a developer.
**[52:04]** Okay, this is the first way we used block ciphers,
**[52:08]** and in almost every programming language that does cryptography,
**[52:11]** which is basically all of the main ones,
**[52:14]** ECB is still an option to use,
**[52:17]** because there's a ton of data encrypted already
**[52:19]** on stored on servers that is encrypted with ECB mode.
**[52:23]** Why recommendation to you is,
**[52:26]** if you have to read data that's ECB,
**[52:29]** the ECB.
**[52:31]** If you have any choice in the matter
**[52:33]** on whether to write data,
**[52:35]** encrypt and write data using ECB or something else,
**[52:39]** don't use ECB if you can help it.
**[52:41]** Okay, a voice ECB is a developer if you can.
**[52:45]** Sometimes that's not an option in your organization.
**[52:49]** Okay, all right, so as an industry,
**[52:52]** this is what we did next to fix the problem.
**[52:55]** Okay, it was called cipher block chaining.
**[52:58]** Let me start with block two,
**[53:00]** so we understand the process that we'll move back to block one.
**[53:03]** So the idea here is we chunk up our data into blocks.
**[53:07]** Okay, here's block two data.
**[53:09]** And then before we go and encrypt it using AES
**[53:12]** or whatever algorithm we're using and our key,
**[53:15]** what we're going to do is we're going to take the output
**[53:17]** of the previous block, the encrypted data,
**[53:20]** and we're going to add technically XOR,
**[53:23]** but add it to our current blocks worth of data.
**[53:27]** Okay, that means that we're taking some
**[53:30]** entropy or some mixed upness from the previous block
**[53:33]** and propagating it to the next block and the next block
**[53:38]** and that helps get rid of our tough scroll.
**[53:41]** Okay, now in order to do every single block
**[53:45]** the same which we should, that means that for our first block
**[53:49]** we're supposed to XOR the previous blocks
**[53:52]** encrypted data, but we don't have a
**[53:54]** previous block for the very first one.
**[53:56]** And so we just make up a random number,
**[53:59]** call it an initialization vector,
**[54:01]** and we feed that into our very first one.
**[54:04]** And then in our output, we take our output of each block,
**[54:08]** we can catenate those together,
**[54:10]** and then we take our initialization vector, our IV,
**[54:13]** and we usually repend it to our encrypted data
**[54:16]** so that the person can read the initialization vector,
**[54:19]** take the key that we have already shared securely,
**[54:22]** and then decrypt all of the data using this method.
**[54:27]** So, what's good about this?
**[54:30]** It solves the tox problem.
**[54:32]** What's bad about this is, well,
**[54:35]** we can't parallelize anything now,
**[54:37]** because every block depends on the previous block,
**[54:40]** and it's inputs.
**[54:41]** Let's slow things down a lot.
**[54:43]** We also, what if we get an error in the encryption of this block,
**[54:46]** does it propagate to the next one of the next one?
**[54:48]** Yes, it does, okay.
**[54:49]** So we've got some negatives to this.
**[54:51]** But actually, the worst part is some super smart person,
**[54:54]** and I don't even fully understand this attack.
**[54:56]** It's super technical.
**[54:57]** But for the very last block,
**[54:59]** if it's too small, we've had the data out.
**[55:01]** And under certain circumstances,
**[55:03]** with certain types of padding,
**[55:05]** some very smart people figured out,
**[55:07]** that if you do things just wrong here,
**[55:10]** then you can do the whole thing,
**[55:12]** but you based off the padding structure,
**[55:13]** so there's a tack called the Poodle attack,
**[55:16]** that actually means the CBC super bad.
**[55:19]** So it's slow.
**[55:20]** It fixes one problem and opens up
**[55:22]** us up to another problem.
**[55:24]** If you're a developer,
**[55:25]** and you would have to use CBC,
**[55:27]** use CBC.
**[55:28]** It's better than ECB.
**[55:29]** If you can help it,
**[55:31]** use one of the better options out there.
**[55:33]** Okay?
**[55:35]** Okay. Next.
**[55:38]** Cypher feedbacks a weird one,
**[55:40]** as is CTR, which I didn't show you here.
**[55:43]** But sometimes,
**[55:45]** you are in an organization as a developer,
**[55:48]** and you may only be allowed to use AES.
**[55:50]** It's actually pretty common,
**[55:51]** is to be in an organization
**[55:52]** that if you're developing things,
**[55:54]** you're going to use the best algorithm,
**[55:56]** which is supposedly AES.
**[55:58]** Or to visit some ways, sort of isn't in other ways.
**[56:01]** But what if you need to encrypt streaming data?
**[56:05]** Yes, it's a block cipher, not a stream cipher.
**[56:08]** How do you do that?
**[56:10]** CFB and CTR are two ways
**[56:15]** in which we can increase stream data
**[56:19]** and have a block cipher
**[56:21]** pretend to be a stream cipher.
**[56:24]** It's not perfect,
**[56:25]** but the way that we do it is
**[56:27]** to encrypt our initialization vector with our key.
**[56:32]** We take the output of that,
**[56:34]** and then as the data comes in,
**[56:37]** we add it to our encrypted data,
**[56:40]** bit by bit,
**[56:41]** until we've got a full blocks worth,
**[56:43]** and then we send that on over to the next block.
**[56:46]** We encrypt that,
**[56:48]** and as the data comes in,
**[56:50]** bit by bit, we encrypt that,
**[56:52]** and so we can have a block cipher,
**[56:54]** kind of act like a stream cipher.
**[56:56]** It's not perfect.
**[56:57]** It's a little chunky.
**[56:58]** We sometimes have to wait for the next block
**[57:00]** to be encrypted before we can stream the next thing,
**[57:02]** so there's a little bit of a stalling
**[57:04]** or kind of chunking of the data.
**[57:06]** So it's not perfect,
**[57:09]** but it's okay.
**[57:10]** Use it only if you need to use a stream cipher
**[57:12]** with a block cipher.
**[57:14]** Sometimes you,
**[57:16]** that's your requirements.
**[57:17]** All right.
**[57:18]** The first of the,
**[57:21]** this is the one you probably should be using
**[57:23]** is called DCM or,
**[57:26]** if you know,
**[57:27]** French,
**[57:28]** Galois,
**[57:29]** Galois.
**[57:30]** Again.
**[57:31]** Thank you.
**[57:32]** That counter mode.
**[57:33]** GCM.
**[57:34]** Okay.
**[57:35]** GCM is a little technical behind the scenes,
**[57:37]** but the main thing is,
**[57:39]** we actually take a counter.
**[57:41]** So we pick a counter number,
**[57:43]** okay.
**[57:44]** Just some random number that we choose
**[57:46]** between the range.
**[57:47]** And then we take the first number there,
**[57:50]** the sub zero number,
**[57:51]** okay.
**[57:53]** And then we take the sub zero plus one,
**[57:56]** because we've chosen this random number
**[57:58]** and the hackers don't know it.
**[58:00]** So we could just take the number plus one
**[58:02]** for the next block,
**[58:03]** the number plus two for the next block and so forth.
**[58:05]** And we can encrypt all of those numbers
**[58:08]** and then we use the encrypted number
**[58:11]** and explore it with our data in sequence.
**[58:15]** So we can do a little parallelization with this as well.
**[58:18]** So speeds it up a little bit,
**[58:19]** not fully but a little bit.
**[58:21]** The other clever thing,
**[58:22]** as with GCM,
**[58:23]** as we actually have some hashing,
**[58:24]** we'll talk about hashing next time.
**[58:26]** We have some hashing that allows us
**[58:28]** to do a little bit of authentication
**[58:31]** as part of this mode,
**[58:32]** which is also super cool.
**[58:33]** It's not great authentication.
**[58:34]** We'll talk about better authentication later,
**[58:37]** but GCM is kind of our first
**[58:40]** acceptable option if you have a choice.
**[58:43]** In your lab,
**[58:44]** which will open on Thursday,
**[58:46]** in your lab for the next one,
**[58:47]** you'll be using ASGCM
**[58:49]** to decrypt a message.
**[58:51]** So as a developer,
**[58:53]** GCM is a good acceptable option now.
**[58:55]** Is it the perfect option?
**[58:56]** No, there's no perfect option,
**[58:58]** but it's generally widely implemented.
**[59:02]** The most programming languages of consequence
**[59:05]** have a GCM option or a good library to use for GCM.
**[59:09]** If you can avoid ECB and CPC
**[59:12]** and some of the others,
**[59:13]** GCM is the one you want to use.
**[59:15]** Like I mentioned,
**[59:16]** there's a whole bunch of other options out there.
**[59:19]** If you want to use stream ciphers
**[59:21]** or a block cipher as a stream cipher,
**[59:23]** you've got a couple of other options.
**[59:25]** NIST, the US government organization
**[59:27]** that does the competitions for these
**[59:29]** has a bunch of documentation
**[59:31]** on the different modes of using block ciphers
**[59:34]** that they consider good.
**[59:36]** ECB is not on this list.
**[59:38]** CPC is not on this list and lots of documentation.
**[59:41]** Here's our GCM, for example.
**[59:47]** Questions about, before we move to asymmetric,
**[59:50]** questions on block cipher modes.
**[59:53]** They can take away
**[59:56]** or evaluate these things with things
**[59:59]** like error propagation and parallelization,
**[01:00:01]** but realistically,
**[01:00:02]** we evaluate them on,
**[01:00:04]** are they good enough or modern crypto world?
**[01:00:07]** And ECB as I know,
**[01:00:09]** CPC is a mostly no GCM as a yes.
**[01:00:12]** And then if we have to use
**[01:00:14]** block to stream in a few options for us.
**[01:00:18]** I think that's.
**[01:00:23]** Yes.
**[01:00:25]** Okay.
**[01:00:27]** Ace of metric encryption.
**[01:00:30]** So this is when we're using a e-paer.
**[01:00:36]** So a bunch of people came up with the concept of this.
**[01:00:41]** But the actual algorithm didn't come out until a little bit later,
**[01:00:48]** from these gentlemen.
**[01:00:51]** So these guys were on Revest,
**[01:00:53]** Amy Schumer,
**[01:00:55]** and letter to Edelman are now known collectively as RSA.
**[01:00:59]** And so they came up with the RSA algorithm.
**[01:01:02]** Founded the RSA company,
**[01:01:04]** became multi-millionaires,
**[01:01:05]** based off of some stuff that they sold
**[01:01:07]** from the RSA company.
**[01:01:10]** We'd be to scientists at MIT.
**[01:01:13]** And this guy, over at Cox,
**[01:01:16]** worked for the British Intelligent Service,
**[01:01:18]** developed the RSA algorithm about 10 years prior,
**[01:01:21]** but it was classified,
**[01:01:23]** and he got a nice pension.
**[01:01:25]** So let's talk about RSA and how it works.
**[01:01:29]** It relies on this idea of a trapdoor or a one-way function.
**[01:01:33]** And the trapdoor function that they use is based off of this idea of,
**[01:01:37]** there's this ancient mathematician Euler.
**[01:01:40]** He was ancient Greek, like,
**[01:01:42]** hundred BC or something like that.
**[01:01:43]** It was a super old mathematician.
**[01:01:46]** He has this method for figuring out what he was later referred to as
**[01:01:49]** the breakability of the number.
**[01:01:51]** It's the number of factors that is associated with a number
**[01:01:55]** that are not common.
**[01:01:57]** Anyway, it's this complicated thing.
**[01:01:58]** As it turns out,
**[01:02:00]** calculated that number for most numbers,
**[01:02:02]** super hard.
**[01:02:03]** For prime numbers,
**[01:02:06]** it's super easy because almost all of the equations
**[01:02:08]** that he came up with in order to calculate this,
**[01:02:10]** cancels itself out with prime numbers.
**[01:02:13]** So he uses this or they use this RSA,
**[01:02:16]** I use this idea of in this one circumstance very difficult
**[01:02:20]** to do.
**[01:02:21]** And so I create this algorithm.
**[01:02:23]** Let's walk through the key generation process for RSA,
**[01:02:27]** and I'm going to have you do this yourself in just a minute.
**[01:02:30]** So we're going to take two prime numbers,
**[01:02:33]** and in this example,
**[01:02:34]** we're going to use super small ones,
**[01:02:36]** so that the math is easy,
**[01:02:37]** and it's hopefully understandable in real life
**[01:02:39]** for using thousands of digit characters.
**[01:02:43]** So he is three and Q is 11.
**[01:02:47]** These are small prime numbers.
**[01:02:49]** And we need to compute the product.
**[01:02:51]** So if shout it out for me,
**[01:02:53]** these times Q is pretty good,
**[01:02:56]** we calculate 33.
**[01:02:58]** And now we're going to calculate that
**[01:03:00]** and carry our value, the breakability number.
**[01:03:03]** And that is only for prime numbers,
**[01:03:06]** you might as one times Q minus one,
**[01:03:09]** which we get as one,
**[01:03:11]** okay, so P, the three minus one is two,
**[01:03:14]** the 11 minus one is 10,
**[01:03:16]** two times 10 is 20,
**[01:03:18]** okay those are both important numbers.
**[01:03:20]** And then we have to choose prime number,
**[01:03:25]** we'll call it E,
**[01:03:28]** that satisfies these rules.
**[01:03:31]** Number one,
**[01:03:32]** E has to be exclusive of the end points,
**[01:03:35]** has to be greater than one,
**[01:03:37]** and it has to be less than that Euler's totent,
**[01:03:40]** okay, so it can be, it's a whole number.
**[01:03:42]** So it can be two,
**[01:03:43]** 19 or any number in between us,
**[01:03:45]** okay.
**[01:03:46]** Also, E,
**[01:03:48]** and Euler's totent,
**[01:03:50]** hand share a factor,
**[01:03:53]** okay,
**[01:03:54]** that to be what are called coprime.
**[01:03:57]** So there's a bunch of prime numbers
**[01:03:59]** between two and 19,
**[01:04:01]** five is one of them,
**[01:04:04]** but five and 20 share a factor
**[01:04:07]** that isn't one,
**[01:04:08]** namely five,
**[01:04:09]** and so that one's out,
**[01:04:10]** okay, they can't use this
**[01:04:11]** or the math, math falls apart, okay.
**[01:04:13]** So we could choose a bunch of different numbers, okay?
**[01:04:15]** There's actually a whole bunch of prime numbers in that range.
**[01:04:18]** Well, the ease of doing math,
**[01:04:21]** we're going to choose seven,
**[01:04:23]** okay, you could have chosen one.
**[01:04:26]** Now, we've already got our public key,
**[01:04:29]** for our public key is E7
**[01:04:32]** and N33,
**[01:04:34]** which is the modulus if we're in the math on this one, okay?
**[01:04:39]** Now, here's the tricky part,
**[01:04:41]** is we need to figure out the private key,
**[01:04:43]** okay?
**[01:04:44]** The private key means that we have to choose a devalue,
**[01:04:47]** such that this equation is satisfied, okay?
**[01:04:50]** Let's ignore the D times E for right now.
**[01:04:52]** If we were to take the mod of the Euler's Toshit number,
**[01:04:56]** which is what?
**[01:04:58]** 20, so mod of 20 equals one,
**[01:05:02]** let's just purposefully make a number
**[01:05:05]** where that's definitely going to be true.
**[01:05:07]** So if we take mod of 20,
**[01:05:08]** let's just say one higher than that 20,
**[01:05:11]** so 21 mod 20,
**[01:05:13]** that gives us a remainder of one,
**[01:05:15]** 21 divided by 20,
**[01:05:17]** that gives us that remainder of one, okay?
**[01:05:19]** Good.
**[01:05:20]** What if we were to double the Euler's Toshit number
**[01:05:23]** and 40,
**[01:05:24]** and add one to it?
**[01:05:25]** 41 mod 20?
**[01:05:26]** Does that give us a one?
**[01:05:28]** 41 divided by 20?
**[01:05:30]** 20 goes in twice with a remainder of one,
**[01:05:33]** that it also works.
**[01:05:34]** About 61,
**[01:05:36]** or 81,
**[01:05:37]** or 101,
**[01:05:38]** or 21 mod 20,
**[01:05:40]** although it's going to have a remainder of one?
**[01:05:42]** Yeah, exactly.
**[01:05:43]** And when your computer generates an RSA key,
**[01:05:46]** that's the math that is actually doing,
**[01:05:48]** is it's figuring that out part of it out.
**[01:05:51]** Okay?
**[01:05:52]** So here's what we do.
**[01:05:53]** Let's say we're going to choose 21, okay?
**[01:05:56]** But first number.
**[01:05:57]** So it's always a Toshit plus one,
**[01:05:59]** mod 20 is going to be one, okay?
**[01:06:01]** So we need to find a value,
**[01:06:02]** D times E,
**[01:06:04]** that satisfy this equation.
**[01:06:06]** Okay?
**[01:06:07]** So if we're going to start with that 21,
**[01:06:09]** is there any value of D times E,
**[01:06:12]** that equals 21?
**[01:06:14]** Remember we chose E to be seven?
**[01:06:17]** Three.
**[01:06:18]** If we choose D to be three,
**[01:06:21]** then yeah, okay?
**[01:06:23]** D times E in this case,
**[01:06:25]** three times seven equals 21,
**[01:06:27]** 21 mod 20.
**[01:06:28]** Does that equal one?
**[01:06:29]** Yeah, sure it does.
**[01:06:30]** Okay?
**[01:06:31]** And so that's our key.
**[01:06:34]** Our key becomes D,
**[01:06:36]** and as our private key.
**[01:06:42]** Now with small numbers,
**[01:06:43]** that seems like with that's it.
**[01:06:45]** But with large numbers,
**[01:06:47]** this is how the internet works.
**[01:06:49]** Okay?
**[01:06:50]** All right.
**[01:06:51]** Let's do some encryption with this,
**[01:06:54]** so you can see how it works.
**[01:06:56]** Let's take something super small and simple.
**[01:06:58]** The message is the number three.
**[01:07:01]** If we want to encrypt that to send to someone,
**[01:07:04]** let's use the public key to do the encryption,
**[01:07:07]** private to do the decryption.
**[01:07:09]** Talk about why that's a 40 later.
**[01:07:11]** So we'll take our three value,
**[01:07:14]** and raise it to our E value,
**[01:07:17]** 133.
**[01:07:19]** The number there should be a nine.
**[01:07:22]** That's encrypted.
**[01:07:23]** You've sent it over the internet.
**[01:07:25]** The other side has their private key.
**[01:07:29]** They're going to take the nine value,
**[01:07:31]** raise it to the D value,
**[01:07:33]** 133,
**[01:07:35]** and get the decrypted value.
**[01:07:38]** So,
**[01:07:41]** who would you crack this if you had these values?
**[01:07:45]** The answer is,
**[01:07:46]** sure,
**[01:07:47]** because the numbers are super small.
**[01:07:48]** All right?
**[01:07:49]** This actually doesn't take that much to crack something this small.
**[01:07:51]** But in reality,
**[01:07:52]** the numbers are super big.
**[01:07:54]** Several years ago,
**[01:07:55]** I grabbed what Google's RSA key is,
**[01:07:57]** and this is their very,
**[01:07:59]** very old now,
**[01:08:00]** RSA key is 1224 bits in hexadecimal format.
**[01:08:05]** Okay?
**[01:08:06]** But 1224 is not long enough nowadays.
**[01:08:10]** And so,
**[01:08:11]** let's look at what,
**[01:08:12]** let's do,
**[01:08:14]** see what we were using.
**[01:08:21]** Certificate.
**[01:08:22]** They're using.
**[01:08:24]** So the algorithm they're using RSA,
**[01:08:26]** and their public key is 496 bits.
**[01:08:30]** Here is that number that they're using for their public key.
**[01:08:34]** And here's that modulus function.
**[01:08:36]** The N value is 17 bits.
**[01:08:39]** Well,
**[01:08:40]** we'll have 96 bits in order to do these calculations.
**[01:08:45]** Now,
**[01:08:46]** there's an alternative to this,
**[01:08:47]** which we'll talk about the beginning of class next time,
**[01:08:50]** called ECC,
**[01:08:51]** which uses shorter keys and slightly different math,
**[01:08:53]** and we'll get to that on Thursday.
**[01:08:55]** So,
**[01:08:56]** for the remainder time we have,
**[01:08:57]** here's what I want you to do.
**[01:08:59]** In two-a small group,
**[01:09:02]** I want you to calculate,
**[01:09:03]** if I was to give this as an exam question,
**[01:09:06]** and to give you P and Q,
**[01:09:07]** just as we had before,
**[01:09:08]** I'm going to choose the E,
**[01:09:10]** so that everybody ends up with the same answer.
**[01:09:12]** What I want you to do is,
**[01:09:13]** based off of this information,
**[01:09:15]** and the formulas we've given you,
**[01:09:16]** you can skip step three,
**[01:09:17]** because I've already chosen the E for you.
**[01:09:19]** I want you to come up with the public and the private keys,
**[01:09:23]** using these formulas.
**[01:09:25]** This small group,
**[01:09:26]** we're on this,
**[01:09:27]** and then we'll spend,
**[01:09:28]** and four minutes on it,
**[01:09:30]** and then the last minute,
**[01:09:31]** we'll do it together if,
**[01:09:33]** if anyone's still stuck.
**[01:09:34]** So, a four minutes ready to go.
**[01:09:36]** I want for these keys.
**[01:09:38]** Here's the key,
**[01:09:39]** okay, okay, let me open the key.
**[01:09:40]** I don't have any more to add in.
**[01:09:42]** You can add it down.
**[01:09:44]** You can add it down.
**[01:09:45]** Yeah,
**[01:09:46]** I just thought that was a good thing to do.
**[01:09:48]** You can still add,
**[01:09:49]** you can do it.
**[01:09:50]** It's a good thing to do.
**[01:09:51]** You know,
**[01:09:52]** it's a good thing to do.
**[01:09:53]** You already got it.
**[01:09:54]** I can't use it.
**[01:09:56]** I can't use it.
**[01:09:57]** And people say to buy it.
**[01:09:59]** I thought she had managed.
**[01:10:01]** So nice gentle work.
**[01:10:02]** I went to two.
**[01:10:03]** Six minutes.
**[01:10:04]** Six minutes.
**[01:10:05]** Six minutes.
**[01:10:06]** Six minutes.
**[01:10:07]** That's what I'm saying.
**[01:10:09]** I'm going to start this.
**[01:10:10]** I think I have the money.
**[01:10:12]** That I have.
**[01:10:13]** Six.
**[01:10:15]** Six.
**[01:10:16]** I don't even want to see it.
**[01:10:18]** That.
**[01:10:19]** We.
**[01:10:20]** We.
**[01:10:21]** We.
**[01:10:23]** Then.
**[01:10:24]** Then.
**[01:10:25]** Six.
**[01:10:26]** Yes.
**[01:10:27]** I'm 80.
**[01:10:29]** Good on great.
**[01:10:31]** Next slide.
**[01:10:33]** For the next time, 16, 16.
**[01:10:37]** Good Q&A, yes.
**[01:10:39]** I don't know, I'm a single final.
**[01:10:41]** I think you see it for five.
**[01:10:43]** I think you see it for five.
**[01:10:45]** So what is the actual number?
**[01:10:47]** I'm still feeling a lot.
**[01:10:49]** So we need to keep you pretty.
**[01:10:51]** There's a lot of things to do.
**[01:10:53]** So, thanks.
**[01:10:55]** It's just a little bit difficult.
**[01:10:57]** But it's a little bit easier.
**[01:10:59]** But we don't actually need to do it.
**[01:11:01]** I just need to figure out about it.
**[01:11:03]** I don't know what it's about.
**[01:11:05]** It's about 16.
**[01:11:07]** I don't know.
**[01:11:09]** What is it?
**[01:11:11]** I don't know.
**[01:11:13]** It's about 16.
**[01:11:15]** It's about 16.
**[01:11:17]** It's about 16.
**[01:11:19]** It's about 16.
**[01:11:21]** It's about 16.
**[01:11:23]** It's about 16.
**[01:11:25]** It's about 16.
**[01:11:27]** What is it?
**[01:11:29]** It's crazy.
**[01:11:31]** It's not.
**[01:11:33]** It's a chord.
**[01:11:35]** The formula is that it's short.
**[01:11:37]** I don't know what it's about.
**[01:11:39]** It's not.
**[01:11:41]** It's about 18.
**[01:11:43]** It's about 18.
**[01:11:45]** It's about 18.
**[01:11:47]** It's about 18.
**[01:11:49]** It's about 18.
**[01:11:51]** It's about 18.
**[01:11:53]** Its?
**[01:11:55]** Whatever it is.
**[01:11:57]** You've got it already.
**[01:12:03]** How about people?
**[01:12:05]** From 13 to 18.
**[01:12:07]** It's about 25.
**[01:12:09]** It's about 16.
**[01:12:11]** It's about 65.
**[01:12:13]** It's about 55?
**[01:12:15]** five.
**[01:12:16]** Yeah, people on 16.
**[01:12:18]** I'm a bit in.
**[01:12:19]** I'm just a bit in.
**[01:12:21]** I'm a chatty.
**[01:12:22]** Yeah.
**[01:12:23]** Can 5 minutes, because 5,13 or 64 hours.
**[01:12:27]** Oh, maybe because.
**[01:12:28]** Yeah.
**[01:12:29]** You can keep going.
**[01:12:30]** Okay.
**[01:12:31]** So yeah, it's.
**[01:12:32]** But probably he is.
**[01:12:34]** It's going to be a little bit.
**[01:12:35]** I apologize.
**[01:12:36]** I'm sorry.
**[01:12:37]** See if I.
**[01:12:38]** It's an emotional bit.
**[01:12:39]** I'm sorry.
**[01:12:40]** I'm sorry.
**[01:12:41]** Well, let's see.
**[01:12:43]** Check your answer.
**[01:12:44]** I was like, Oh, that makes sense.
**[01:12:45]** That's all.
**[01:12:46]** That makes sense.
**[01:12:47]** That's good.
**[01:12:48]** Uh, yes.
**[01:12:49]** We got up to.
**[01:12:50]** You guys.
**[01:12:51]** It's a little bit.
**[01:12:52]** Yeah.
**[01:12:53]** We got up.
**[01:12:54]** We got up.
**[01:12:55]** We got up.
**[01:12:56]** We got up.
**[01:12:57]** We got up.
**[01:13:03]** Let's do this together.
**[01:13:05]** All right.
**[01:13:06]** So first thing we need to do is calculate.
**[01:13:08]** And.
**[01:13:09]** P times Q.
**[01:13:10]** 5 times 17 is.
**[01:13:12]** 5.
**[01:13:13]** And that's actually all we need because we've already decided on our eat.
**[01:13:16]** That's all we need to get the public key.
**[01:13:18]** So our public key is just eat 13.
**[01:13:21]** I'm a.
**[01:13:22]** You need five.
**[01:13:23]** All right.
**[01:13:24]** So we're we're halfway there.
**[01:13:25]** All right.
**[01:13:26]** That was the easy part.
**[01:13:27]** Now we need to do the hard part, which is calculating D.
**[01:13:30]** And in order to get D, we need this oil.
**[01:13:32]** There's toast.
**[01:13:33]** Okay.
**[01:13:34]** So that's P minus one times Q minus one.
**[01:13:36]** P is four.
**[01:13:37]** Or minus one is four.
**[01:13:38]** You minus one is 16.
**[01:13:40]** Four times 16 is.
**[01:13:42]** 64.
**[01:13:43]** Okay.
**[01:13:44]** And so we want to find some value.
**[01:13:46]** 64 that's going to give us a remake.
**[01:13:49]** One.
**[01:13:50]** So we're going to start with.
**[01:13:51]** That number plus one.
**[01:13:52]** Okay.
**[01:13:53]** So 65.
**[01:13:54]** 64 is going to give us a value of one.
**[01:13:56]** If that doesn't work over here.
**[01:13:58]** Then we would double that.
**[01:13:59]** And we go 128 plus one.
**[01:14:02]** 64 is also going to give us one.
**[01:14:04]** And then 192 plus one.
**[01:14:05]** 93.
**[01:14:06]** 183.
**[01:14:07]** 164 is going to give us one.
**[01:14:08]** Okay.
**[01:14:09]** And so we'll start with the 65.
**[01:14:11]** Is there any value?
**[01:14:12]** 65.
**[01:14:13]** Such that E times D equals 65.
**[01:14:16]** So we do 65 divided by E.
**[01:14:19]** Which is.
**[01:14:20]** All right.
**[01:14:21]** That whole number.
**[01:14:22]** Yes.
**[01:14:23]** Okay.
**[01:14:24]** And then we're done.
**[01:14:25]** And so our private key is five and 85.
**[01:14:30]** That's what your computer does.
**[01:14:31]** If it's ever generating an RSA key.
**[01:14:33]** I haven't decided yet if I'm going to make you do that in the next lab.
**[01:14:35]** I sometimes do that sometimes don't.
**[01:14:37]** But this is how you calculate stuff.
**[01:14:39]** Yes.
**[01:14:40]** Can you do that?
**[01:14:41]** I'd be like.
**[01:14:42]** Oh.
**[01:14:43]** So it could be a number of different things.
**[01:14:47]** Now the chances of that happening with larger and larger numbers.
**[01:14:50]** We think goes down.
**[01:14:52]** Because there's not a number of that.
**[01:14:55]** There's not a number of numbers out there.
**[01:14:56]** But I don't know.
**[01:14:57]** There's lots of problems.
**[01:14:58]** Okay.
**[01:14:59]** So next time we'll start talking about ECC and some of our other stuff.
**[01:15:02]** We'll get into still computing.
**[01:15:04]** But now we know a little bit about key exchange.
**[01:15:07]** Subetric encryption.
**[01:15:09]** We'll all of that asymmetric encryption.
**[01:15:11]** And then we'll talk about doing this now.
**[01:15:14]** It's thanks.
**[01:15:15]** You on Thursday.
**[01:15:16]** Thank you very much.
**[01:15:18]** Thank you.
**[01:15:19]** Thank you.
**[01:15:20]** Thank you.
