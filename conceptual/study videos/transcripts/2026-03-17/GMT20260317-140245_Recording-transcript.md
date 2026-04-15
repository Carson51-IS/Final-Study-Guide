# Study session transcript

**Source:** `GMT20260317-140245_Recording.m4a`
**Detected language:** en (probability 1.00)

Auto-generated with faster-whisper (Whisper **tiny**, CPU). Expect minor errors.

---
**[00:00]** So, your lab is open, you have really had a whole lot of questions about the lab thus far.
**[00:10]** Is that because we haven't started yet?
**[00:16]** Okay, I'm on this one.
**[00:19]** People who have done it, it seems have gone reasonably smoothly.
**[00:23]** So, I will hope that that's the case with everybody.
**[00:26]** One of the answers, but that's been fixed down.
**[00:28]** So, do you have questions about the lab?
**[00:31]** Let me know, how are things in the core?
**[00:33]** Is it those midterm, so things okay?
**[00:36]** Yeah, it's getting better now.
**[00:38]** I'll let you know.
**[00:39]** We'll ramp it up in a couple weeks, for about a week.
**[00:43]** So, all right, let's come in soon.
**[00:45]** Let's, uh, in the conference.
**[00:49]** And today.
**[00:52]** Montez, why is this one my favorite days of the semester?
**[00:56]** So, hopefully it is for you as well.
**[00:58]** Okay, do we talk in this section?
**[01:00]** I think we might have been the only section that got through with one time pads.
**[01:03]** You guys come through with that?
**[01:04]** Okay, so the one time pad, you got to get randomness.
**[01:07]** And if you mix randomness, non-randomness, the result is randomness.
**[01:12]** And that's actually kind of hard to do.
**[01:16]** Uh, so let's talk about randomness, uh, for just a second.
**[01:21]** So, how do we get through randomness?
**[01:26]** Any, uh, any, uh, dice game players, like D&D or other kind of dice games?
**[01:33]** Is that ever, anyone ever thought very carefully like, is this actually a fair dice, right?
**[01:38]** Uh, at my kids table, it's like, oh, you rolled too many, uh, too many nap 20s of this session.
**[01:43]** Uh, you're definitely, yeah.
**[01:44]** Because of the loaded dice, right?
**[01:46]** You definitely use them on it.
**[01:47]** It's not fair.
**[01:48]** Let's get out the water, float it, see if it's actually, uh, for, like, sort of, I don't know.
**[01:51]** I mean, this is just, just, just, just my kids.
**[01:53]** Uh, so it's actually really, really hard to get true randomness, right?
**[01:59]** Uh, random.work, which is actually a pretty great site for getting a random number.
**[02:03]** Sometimes it uses atmospheric nodes.
**[02:05]** As far as we know, the weather is a truly chaotic thing.
**[02:09]** And if you get atmospheric noise that that's,
**[02:12]** that's close to true randomness as we, uh, as we kind of experience on earth,
**[02:17]** uh, there's an old company that's now defunct, uh, called Hot Bits,
**[02:21]** and used radioactive decay, which is kind of crazy.
**[02:24]** So if you're familiar with that at all, uh, everything that decays,
**[02:29]** atoms, elements that decay, have a half life that is predictable,
**[02:35]** but the actual decay of any particular, uh,
**[02:40]** atom, uh, into its constituent parts, is as far as we know, pretty random.
**[02:45]** Even if the in aggregate, it's not, uh, and so that's an option to do true randomness,
**[02:50]** kind of hard, like, to get, like, a Geiger counter kind of thing to, uh, do randomness,
**[02:54]** uh, cloud flare, which some of you have experience with, uh,
**[02:57]** they didn't develop the idea behind this, but they use it in their offices.
**[03:01]** So in the, in quarters of cloud flare, they have a bank of,
**[03:05]** lava lamps, uh, and they use a protocol that's called lava random,
**[03:09]** uh, in order to sample from each of these lava lamps,
**[03:13]** bits from the lava lamp that gets put into their, uh, random number generation.
**[03:18]** As far as we can tell, the movement of the blobs in the, uh, in the lava lamps,
**[03:23]** is truly random. And because they got,
**[03:26]** pulled out on this a few years ago, they posted on their blog and people thought,
**[03:30]** oh, that's really cool. They've actually, as they've expanded to other offices,
**[03:34]** they've added other sources of randomness. So this is the headquarters, uh,
**[03:38]** uh, they're, they're London office. They've got these dual pendulum things that,
**[03:42]** uh, also were supposedly truly random, uh, in Austin, Texas.
**[03:46]** They have these, like, spinning mobiles that they sample the light from,
**[03:50]** uh, in order to speed into their random number generators.
**[03:53]** So, um, pretty cool that they take real-life stuff,
**[03:57]** and put them to their random number generators. Because randoms is actually,
**[04:00]** hard. So, in your, uh, in your operating systems,
**[04:04]** usually there is some mechanism, you know, hardware,
**[04:08]** to help your computer develop truly random numbers if possible.
**[04:12]** And what we really do nowadays is we try to get,
**[04:15]** as random of, as possible, of a seed,
**[04:18]** and then build or put that into a cryptographic algorithm,
**[04:22]** probably a good one. And if we kind of,
**[04:25]** in crypt, a good random number,
**[04:28]** then we think the output is pretty close to random.
**[04:31]** And in most of our programming languages,
**[04:33]** if you ever use the random function in your programming languages,
**[04:35]** okay, usually most programming languages have a random function that's not very good,
**[04:40]** but good enough for, like, playing a silly game, all right,
**[04:43]** or teaching a programming language,
**[04:45]** and then there's a cryptographically secure food or random number generator,
**[04:50]** that actually takes a lot longer to calculate and figure out,
**[04:53]** and you consider good enough for information.
**[04:55]** Okay, so most of you probably use the non cryptographically secure ones,
**[04:58]** because it's a lot of overhead,
**[05:00]** if you don't need anything fancier than that.
**[05:03]** Okay, how do we get the seeds in our hardware?
**[05:05]** Well, there's a bunch of different ways,
**[05:06]** but your operating system might use,
**[05:08]** uh, IO operations like read and write from disks,
**[05:11]** uh, or from RAM, there's like slight,
**[05:14]** little like millisecond, uh, variations in those things,
**[05:17]** and that rivals might be, uh, things,
**[05:19]** uh, might be some source of randomism, so forth.
**[05:23]** All right, randomism is hard.
**[05:26]** Switching gears, there's that handdoor.
**[05:28]** Spread your hand, okay.
**[05:30]** Archf, long dad, a very smart guy,
**[05:33]** a ghost crutch off, came up with this idea,
**[05:36]** 1800s, I think,
**[05:38]** uh,
**[05:39]** the idea is when you're developing cryptography,
**[05:43]** you should develop an algorithm,
**[05:46]** such that if everyone knows the algorithm,
**[05:51]** it's still secure.
**[05:53]** The security comes from the key, okay?
**[05:57]** Now, his, his term here is a crypto system should be secure,
**[06:01]** even if everything about the system accept the key is public knowledge.
**[06:04]** Okay.
**[06:05]** This is also kind of led to the security is not obscurity,
**[06:09]** uh, thing which you might have heard before.
**[06:11]** Maybe, I don't know.
**[06:12]** In your lab, uh, if you do the lab this week,
**[06:14]** uh, you might find something worse.
**[06:16]** Uh, so,
**[06:19]** our best encryption nowadays.
**[06:21]** Everybody knows or can know what the algorithms are
**[06:24]** and what they do every step of the process.
**[06:27]** And we consider that to be,
**[06:28]** I mean, security researchers can go into the algorithms
**[06:31]** and they can find holes in them
**[06:33]** and over time, you know,
**[06:34]** we have competitions now to decide
**[06:36]** which is the best algorithm to use in the future,
**[06:39]** uh,
**[06:40]** and winners are the ones that get adopted.
**[06:42]** And so it's really about the good algorithm,
**[06:46]** there really knows about,
**[06:47]** and they go to key that goes with that algorithm.
**[06:50]** Okay.
**[06:52]** It does lead us to a pretty big problem.
**[06:55]** Okay.
**[06:56]** So far,
**[06:57]** we've only talked about symmetric encryption
**[06:59]** to come to a more detail in a minute.
**[07:01]** But we have this issue.
**[07:03]** So in our modern world,
**[07:05]** how many of you have ever,
**[07:07]** how many have you've done,
**[07:08]** uh, online shopping in the last week?
**[07:12]** Well, let's move on.
**[07:14]** Maybe more than half of us.
**[07:15]** Okay.
**[07:16]** I'll leave you an interacted with some
**[07:18]** HTTPS site in the last week.
**[07:21]** Well, do you have,
**[07:22]** whether you know or not, you have.
**[07:24]** Unless you've been off the internet this week.
**[07:27]** Okay.
**[07:28]** How many of you have ever,
**[07:30]** taken your private key to the server,
**[07:35]** or Amazon,
**[07:37]** or your bank,
**[07:38]** or eBay,
**[07:39]** or wherever you're buying stuff from,
**[07:41]** maybe you've taken your key,
**[07:43]** and worked it off to Seattle headquarters for Amazon,
**[07:47]** or to wherever you're trying to go,
**[07:49]** and handed that off.
**[07:50]** Because in order to securely communicate,
**[07:53]** both sides have to have that key
**[07:55]** in order to do the encryption.
**[07:57]** It reads in symmetric encryption.
**[07:59]** How do we do that in our modern world?
**[08:02]** How do we have a key exchanged?
**[08:06]** Well, we're not actually physically together.
**[08:09]** How can we send a key over the internet?
**[08:13]** We're not able to encrypt anything yet,
**[08:16]** because we don't have the keys exchanged.
**[08:18]** Of the huge problem.
**[08:20]** So, not potentially been working on this for a while.
**[08:22]** Let's introduce some of the players that we're going to talk about for the history,
**[08:25]** because these algorithms are really important still.
**[08:28]** No.
**[08:29]** Maybe.
**[08:30]** In the early 1970s,
**[08:32]** three young computer scientists saw
**[08:34]** that a revolution in the way we've been looking,
**[08:37]** would require a revolution in the way we keep secrets.
**[08:40]** We're going to think about both the paperless office.
**[08:43]** And what's law?
**[08:45]** What would you do for a single visitor?
**[08:48]** Until 1976, all cryptographic
**[08:51]** or secrecy systems that since the time of Caesar's cyber,
**[08:54]** were based on the physical exchange of a single secret key
**[08:58]** that unlocked its secret code.
**[09:00]** They're the internet.
**[09:01]** That's impossible.
**[09:02]** At the University of California,
**[09:04]** we've worked May in 1974,
**[09:06]** and undergraduate students named Ralph Merkel
**[09:09]** envisioned a new way to exchange secrets between computers.
**[09:13]** His professor rejected the idea as muddled,
**[09:16]** and a way inside to picture and say,
**[09:18]** it didn't yet sense.
**[09:20]** They had meant that this really wanted to go back here.
**[09:23]** After Ralph Merkel, if we can.
**[09:25]** Professor Martin Fussley, the standing symbol reactions
**[09:29]** until he met with Dippy.
**[09:31]** It was just such a meeting in the vines,
**[09:33]** and it was so nice to find something to give him
**[09:35]** like I was crazy.
**[09:36]** Building on Merkel's ideas,
**[09:38]** Dippy and Helen proposed a radically new cryptographic method
**[09:42]** but not one for two keys,
**[09:44]** a public key and a private key for it.
**[09:48]** So we'll come back to that idea of a public and private key
**[09:51]** in just a minute.
**[09:52]** But I wanted to introduce you to the players,
**[09:54]** so this is Witt Dippy.
**[09:55]** You saw Martin and Helen.
**[09:56]** They're going to be important to just a second.
**[09:58]** You also saw Ralph Merkel.
**[10:00]** I don't know if we're going to have time this semester,
**[10:02]** because we're going to need to get to some in-text stuff.
**[10:04]** But sometimes when we have time,
**[10:06]** after we do enough cryptography,
**[10:08]** to understand the basics,
**[10:09]** we sometimes will have a little time to talk about
**[10:12]** what the heck cryptocurrency is.
**[10:14]** And Ralph Merkel's really important in that,
**[10:16]** for example,
**[10:17]** if you've ever done anything with most cryptocurrencies,
**[10:20]** like Bitcoin,
**[10:21]** one of the main calculations that's done
**[10:24]** is calculating the Merkel route,
**[10:26]** which is actually for Ralph Merkel,
**[10:27]** as part of cryptography.
**[10:29]** Our cryptocurrency.
**[10:30]** Okay.
**[10:31]** So let's talk about this key exchange problem
**[10:34]** that Witt Dippy and Martin Homan try to tackle next.
**[10:40]** Millions around the world,
**[10:42]** a new problem's merged.
**[10:44]** At the time,
**[10:45]** Christian required two parties to first share
**[10:47]** a secret brand of number known as a key.
**[10:50]** So how do two people who have never met
**[10:53]** a three-on-a-secret shared key
**[10:56]** without letting Eve,
**[10:58]** who is always listening,
**[11:00]** also obtain a copy?
**[11:02]** I'm more about Eve.
**[11:04]** Eve is the eavesdropper.
**[11:05]** In 1976, Witt Dippy and Martin Homan
**[11:09]** the guy who made them trip to do that.
**[11:12]** First, let's explore how this trick
**[11:14]** is done using colors.
**[11:16]** How could Alice involve a three-on-secret
**[11:19]** color was how Eve finding it out?
**[11:22]** The trick is based on two things.
**[11:25]** One, it's easy to mix two colors together
**[11:28]** to make a third-colourition.
**[11:30]** And two,
**[11:31]** even in a mixed color,
**[11:33]** it's hard to reverse it
**[11:35]** in order to find the exact original colors.
**[11:38]** V, in the basis for a lot of it.
**[11:41]** Easy one-to-effond,
**[11:43]** part in the reverse direction.
**[11:45]** This is known as a one-way function.
**[11:48]** Now, the solution works as follows.
**[11:52]** First, they agree publicly on a starting color,
**[11:55]** saying yellow.
**[11:57]** That Alice involved both randomly select
**[12:01]** fried colors
**[12:03]** and mix them into the published yellow
**[12:05]** in order to disguise their private colors.
**[12:08]** Now, Alice keeps her private color
**[12:11]** and sends her mixture to Bob.
**[12:14]** And Bob keeps his private color
**[12:16]** and sends his mixture to Alice.
**[12:22]** Now, the hard to trick.
**[12:25]** Alice and Bob add their private colors
**[12:28]** to the other person's mixture
**[12:30]** and arrive at a shared secret color.
**[12:37]** Notice how Eve is unable to determine this exact color
**[12:41]** since she needs one of their private colors to do so.
**[12:45]** And that is the trick.
**[12:51]** Now, to do this at numbers,
**[12:53]** we need a numerical procedure,
**[12:55]** which is easy in one direction
**[12:57]** and hard in the other term.
**[12:59]** This brings us to modular arithmetic,
**[13:02]** also known as clock arithmetic.
**[13:04]** For example, the 40th set is my 12.
**[13:08]** We can take a global plate for 46 units
**[13:11]** and wrap it around a clock
**[13:14]** of 12 unit, which is called the modulus.
**[13:17]** And where the rope ends, is the solution.
**[13:20]** So we say 46x12 is congruent to 10.
**[13:25]** Easy.
**[13:26]** Now, to make this work,
**[13:28]** we use a prime modulus,
**[13:30]** such as 17,
**[13:31]** that we find a printed group of 17.
**[13:34]** In this case, 3,
**[13:36]** which has this important product
**[13:38]** that when braids the different exponents,
**[13:41]** the solution distributes uniformly around the clock.
**[13:46]** The reading is known as the generated book.
**[13:49]** If we raise 3 to any exponent x,
**[13:52]** then the solution is equally likely
**[13:54]** to be any integer between 0 and 17.
**[13:58]** Now, the reverse procedure is hard.
**[14:01]** Say given 12,
**[14:03]** on the exponent 3,
**[14:05]** to be raised to it.
**[14:06]** This is called the discrete log of the prime.
**[14:10]** And now we have our one-way function,
**[14:13]** that we need to perform,
**[14:14]** but hard to reverse.
**[14:16]** Given 12,
**[14:17]** we would have to resort to trial and error,
**[14:20]** we'll find matching exponents.
**[14:22]** How hard is this?
**[14:24]** Well, with small numbers that's easy,
**[14:27]** but if we use a prime modulus,
**[14:29]** which is hundreds of digits long,
**[14:31]** it becomes impact at total sol.
**[14:34]** Even if you had access to all computational power on earth,
**[14:38]** you could take thousands of years
**[14:40]** to run through all possibilities.
**[14:42]** So, the strength of a one-way function
**[14:44]** is based on the time needed to reverse it.
**[14:48]** Now, this is our solution.
**[14:50]** First, Alice, if I agree publicly,
**[14:53]** on a prime modulus and a generator.
**[14:55]** In this case, 17 and 3,
**[14:58]** then Alice selects a private random number,
**[15:01]** say 15,
**[15:03]** and calculates 3 to the power 15 by 17,
**[15:08]** and sends this result publicly for volume.
**[15:12]** Then, Bob selects his private random number,
**[15:16]** say 13,
**[15:17]** and calculates 3 to the power 13 by 17,
**[15:22]** and sends this result publicly to Alice,
**[15:26]** and now the heart of the trip.
**[15:28]** Alice takes Bob's public result
**[15:31]** and raises it to the power of her private number
**[15:34]** to obtain the shared secret,
**[15:36]** which in this case is 10.
**[15:38]** Bob takes Alice's public result
**[15:41]** and raises it to the power of his private number
**[15:45]** resulting in the same shared secret.
**[15:48]** Notice they did the same calculation,
**[15:50]** though it may not look like it at births.
**[15:53]** Consider Alice,
**[15:54]** the 12 she receives from Bob was calculated
**[15:58]** as 3 to the power 13 mon 17.
**[16:01]** So her calculation was the same as 3
**[16:04]** to the power 13 to the power 15 mon 17.
**[16:08]** Now, consider Bob,
**[16:10]** the six you received from Alice was calculated
**[16:13]** as 3 to the power 15 mon 17.
**[16:17]** So his calculation was the same as 3
**[16:20]** to the power 15 to the power 13.
**[16:22]** Notice they did the same calculation
**[16:24]** with the exponents in a different order.
**[16:26]** When you put the exponent in the result,
**[16:29]** doesn't change.
**[16:30]** So they both calculated 3 raised to the power
**[16:33]** of their private numbers.
**[16:35]** Without one of these private numbers 15 or 13,
**[16:39]** Eve will not be able to find a solution.
**[16:43]** And this is how it's done.
**[16:45]** That's done.
**[16:46]** All right.
**[16:47]** So that is now referred to
**[16:49]** as the Diffy Home and Key Exchange.
**[16:52]** There are a few variants of it now,
**[16:54]** including using elliptic curve cryptography,
**[16:57]** which we'll talk about in a few minutes.
**[16:59]** But you've probably done this calculation
**[17:02]** or your computer and phone have
**[17:05]** millions of times in your life thus far.
**[17:08]** Because this is how you do key exchange.
**[17:12]** So we've spent three or four minutes,
**[17:15]** five minutes, something like that,
**[17:16]** practicing this, seeing how it works.
**[17:20]** And then we'll talk about some more exciting things.
**[17:23]** But I highly recommend you use some calculator.
**[17:26]** The one that actually I think is the best for this
**[17:28]** is called Wolf from Alpha.
**[17:32]** So as you can go to Wolf from Alpha and do the calculations.
**[17:36]** If you need to raise something to the power,
**[17:38]** you can use the little carrot symbol.
**[17:41]** You get the numbers raised to the power.
**[17:43]** If you want to do the mod function,
**[17:45]** use the word mod and then the number,
**[17:47]** and that will calculate the values right there.
**[17:50]** What I want you to do is get in a group of two,
**[17:53]** or three if there's an uneven number,
**[17:55]** and then try using these numbers to calculate this.
**[18:00]** Okay, so here's what we're going to do.
**[18:01]** Key and G are given to you.
**[18:04]** Okay, the generator and the p-value.
**[18:07]** Okay?
**[18:08]** We're going to choose any number,
**[18:10]** 1 and 22,
**[18:13]** inclusive of the endpoint.
**[18:15]** We're going to compute this for yourself.
**[18:18]** You're going to share the y-value with your partner.
**[18:21]** And you're going to take your partners y-value
**[18:25]** to your input,
**[18:27]** share it with your partner x-value,
**[18:29]** mod p,
**[18:31]** and then see if you match with your partner.
**[18:33]** Okay?
**[18:34]** Here we go.
**[18:36]** All right.
**[18:40]** We're going to get you to do a,
**[18:43]** and then we sign it.
**[18:44]** I'm going to do the same, so.
**[18:47]** You have to do some clear,
**[18:49]** just clearly.
**[18:50]** That's the answer.
**[18:51]** That's all.
**[18:52]** All right.
**[18:53]** Okay.
**[18:54]** We're going to do the same thing,
**[18:56]** which we're going to do.
**[18:57]** We're going to do the same thing.
**[18:58]** So, I'm going to do the same thing.
**[18:59]** We're going to do the same thing, so.
**[19:01]** No, no.
**[19:02]** We're going to do the same thing.
**[19:04]** Yes.
**[19:05]** Start by picking a number between 1 and 22.
**[19:07]** And, well, all right.
**[19:09]** That one is your good one.
**[19:11]** That's your x-value.
**[19:17]** Oh, 2, 2, 7.
**[19:20]** Okay.
**[19:21]** Fine, fine.
**[19:23]** That's sweet.
**[19:24]** 2, 1, 2, 6, 10.
**[19:25]** And 2, 2, 1, 2, 1, 2, 3, OK.
**[19:27]** Yeah.
**[19:28]** Very, very wide.
**[19:29]** Yeah.
**[19:30]** So, again, we'll do this,
**[20:32]** I don't feel like this, because we shouldn't know if it was in my food.
**[20:36]** You know what?
**[20:37]** That's what I'm talking about.
**[20:39]** Here, no one in the right.
**[20:40]** Right.
**[20:43]** My house must be getting kids with big kids.
**[20:45]** No.
**[20:47]** Oh, point is that.
**[20:48]** No, no, no, no.
**[20:50]** You can never get either of the act.
**[20:52]** Five and seven.
**[20:53]** Pretty good.
**[20:54]** Yeah.
**[20:55]** Yeah.
**[20:56]** You never get sick.
**[20:57]** There.
**[20:58]** Eight times.
**[20:59]** I got a team.
**[21:00]** I acted pretty good.
**[21:01]** I changed everything.
**[21:02]** You think you went to the market?
**[21:03]** I liked to get a fiar.
**[21:04]** I'm not sure if you've kind of alignment was this sort of.
**[21:05]** That's so nice.
**[21:06]** So, nine.
**[21:07]** Yeah.
**[21:08]** That's what I wanted to do.
**[21:09]** Why, we've got the most successful so far.
**[21:12]** Two.
**[21:13]** Maybe half who needs more time?
**[21:14]** Yes.
**[21:15]** We'll go, like, 40 seconds.
**[21:17]** Okay.
**[21:18]** The period we're going to smile.
**[21:19]** Yeah, well.
**[21:20]** There's a lot of things.
**[21:21]** There's a lot of things.
**[21:22]** That's, to say good.
**[21:23]** There's some randoms we can't even keep that on the elevator.
**[21:26]** OK.
**[21:57]** The bill is the significance of coming to a single
**[22:04]** same value with your partner. Why do we care?
**[22:09]** As a matter, it's very referent to the
**[22:13]** current position.
**[22:15]** Your computer is doing this calculation or one of its
**[22:19]** cousin calculations.
**[22:21]** It doesn't stop times a day, probably.
**[22:25]** Why is it doing this? What's the goal of this?
**[22:31]** It's okay.
**[22:35]** No, you can trust.
**[22:37]** That's part of it, although we're not really fully
**[22:41]** trusting anyone based off of this.
**[22:43]** We'll get to trust later today or early Thursday on how we actually get
**[22:47]** trust, but it's in the ballpark of that.
**[22:51]** What else?
**[22:55]** What's the point of this algorithm?
**[22:59]** What's the point of this algorithm?
**[23:05]** Why can we encrypt stuff after we do this algorithm?
**[23:07]** Okay, there we go.
**[23:09]** So, this solves our key exchange problem.
**[23:13]** This is a way for us to publicly, with another partner,
**[23:17]** exchange information and arrive at a shared key
**[23:21]** that everyone who's watching all of the public communication
**[23:25]** can't get the public or that shared key.
**[23:29]** They just don't have enough information with large enough numbers
**[23:33]** to be able to calculate what that shared is.
**[23:37]** So, Eve, our Eve's dropper, can watch.
**[23:39]** You share those, those why values with your partner.
**[23:43]** And they can watch the P and the G.
**[23:45]** But if they don't have the X's for each of you,
**[23:49]** they can't ever get at the shared secret key.
**[23:53]** So, this is a, this is going to, I'm going to say this carefully.
**[23:57]** This is an asymmetric process.
**[24:01]** I mean, the both sides have different pieces of information
**[24:05]** to arrive at a single symmetric key,
**[24:09]** meaning both sides end up with the same key.
**[24:13]** The point of this is to do symmetric encryption
**[24:17]** in that both sides use the same key to encrypt and to decrypt.
**[24:21]** So, if you want to go to your bank or to wherever you're doing your online shopping
**[24:27]** or whether, if you want to connect securely to your social media account
**[24:31]** or whatever it happens to be that you're going to learn in sweet.
**[24:35]** Do this exchange or a similar one, but we can then use HTTPS
**[24:41]** so that there's a shared key and that communication can happen without us
**[24:45]** handing off a key at some sort of a room somewhere across the country
**[24:49]** or in the waitings data center or wherever it is.
**[24:53]** Questions? Yes. So, is the key just said like,
**[24:55]** is it cookie that it's sort of very long?
**[24:57]** The key's never set. The key is generated through this process
**[25:01]** and stored on either side and then you do the encryption.
**[25:05]** So, then you can send cookies securely over HTTPS,
**[25:09]** but it's never set.
**[25:11]** Please call it P and G values decided.
**[25:15]** And just agree on them. So, when you make a request to a server that's using HTTPS,
**[25:19]** one of the things that said, we'll look at TLS if we have time.
**[25:23]** Probably not today, probably Thursday.
**[25:25]** One of the things that sent as a very first message of an HTTPS
**[25:29]** initiation request is, hey, here's the algorithms that I know about
**[25:35]** which one do you want to use and the server will spawn? Oh, let's use this one
**[25:39]** and here's the information in order to start this exchange.
**[25:47]** Okay. So, what's good about development?
**[25:49]** One, it solves this key exchange problem which makes our modern internet possible.
**[25:53]** Okay? But it has some challenges.
**[25:55]** There's no authentication.
**[25:57]** We actually don't believe have trust built in
**[26:01]** because the math works, you don't actually know yet
**[26:05]** who you're exchanging information with.
**[26:07]** You just know you're exchanging information with someone
**[26:11]** and we don't have any verification that someone is yet.
**[26:15]** We'll come there, come to that.
**[26:17]** Okay? Also, every single person or server that we need to communicate with,
**[26:21]** we need a new key.
**[26:25]** And also, it's not in this bullet point, but one of the other things is
**[26:29]** what if we generate a key for our server that we want to talk to?
**[26:33]** Let's say our bank.
**[26:35]** We've been ready to key for that and we can then submit your
**[26:37]** encrypt from now until the end of time with that.
**[26:41]** But what happens if somebody's gathering all of our encrypted data along the way?
**[26:47]** And what if at some point in the future that key gets out
**[26:51]** and that's a big problem, or quantum computing comes along and breaks this?
**[26:57]** But that later, that's a problem too.
**[27:01]** So, what if we want to do this all the time?
**[27:03]** We actually do that.
**[27:05]** So, rather than have a key that we use from now to eternity for every single site,
**[27:09]** we basically use a new one for each session.
**[27:15]** All right. Let's move into big picture security principles around cryptography.
**[27:21]** Okay? So, we have these four problems or threats.
**[27:27]** These are not accurate threats. These are conceptual threats.
**[27:31]** And we've got these principles that we're going to solve with cryptography.
**[27:37]** Okay? All right. So, back to our example.
**[27:41]** In cryptography, we almost always use adolescent Bob, A to B to set information.
**[27:47]** And we're almost always worried about Eve who is the Eve's dropper.
**[27:53]** Now, there are also other people in our cryptographic world.
**[27:57]** We might use Trudy as an intruder and Mallory as a malicious attacker.
**[28:03]** I don't know why Trent, but Trent is a neutral third party.
**[28:07]** But anyway, we're going to use Alice and Bob and Eve a whole bunch of different times over the next little bit.
**[28:13]** So, the challenge or the threat of interception violates our principle of confidentiality.
**[28:21]** Okay? So, if Alice wants to send a message to Bob, but she doesn't want anyone to know about it,
**[28:26]** if Eve knows about it and can intercept that message, that violates confidentiality.
**[28:32]** Okay? It's confidentiality.
**[28:34]** It's only letting the authorized reviewers or readers of this information have that information.
**[28:40]** We don't want any unauthorized disclosure.
**[28:42]** Okay? On the metal CIA Triad principle.
**[28:46]** Okay? So, how we fix that?
**[28:50]** With encryption.
**[28:52]** We use a mathematical algorithm of some sort.
**[28:56]** The key in our modern algorithms in order to disguise that information so that if Eve gets it,
**[29:03]** she's still can't do anything with it.
**[29:06]** Okay?
**[29:08]** The idea here is that we send a message that's encrypted that Bob can then decrypt or undisguised that data so that he can access it.
**[29:19]** Does that make sense?
**[29:21]** Okay.
**[29:22]** Questions?
**[29:24]** Yes.
**[29:25]** The data that's being cryptid is decrypted using that key in the moment.
**[29:29]** If, automatically, it came to.
**[29:31]** We're using some metric encryption.
**[29:33]** Yes.
**[29:34]** But it's the time we are.
**[29:35]** That means for transition into the next slide.
**[29:37]** So, some metric encryption is exactly what was just described.
**[29:41]** That is when Alice and Bob have the same key.
**[29:44]** They either handed it off to each other in advance or, like, a one time pad kind of thing,
**[29:49]** or they've done the Diffie Home and Key Exchange or its new variants.
**[29:53]** And, you know, we'll talk about this later.
**[29:56]** And they've come up with the same exact key.
**[29:58]** And so, these are an algorithm.
**[30:00]** Preferably a good one.
**[30:02]** We're not using Caesar's Cypher here.
**[30:04]** But some good algorithm, we'll talk about it later.
**[30:07]** And they've used the same key to decrypt.
**[30:10]** Now, asymmetric encryption.
**[30:14]** This is what Diffie and Helman were writing about before they figured out the key exchange.
**[30:20]** And they didn't actually come up with an algorithm.
**[30:23]** Some other folks did, which we'll talk about in a minute.
**[30:26]** So asymmetric encryption is when we have a pair of keys.
**[30:31]** They go together.
**[30:33]** Everyone can have their own pair.
**[30:35]** There's not just one pair of keys.
**[30:37]** But every party that wants to can have a pair of keys.
**[30:40]** One of them we designate the public key.
**[30:43]** And one of them we designate the private key.
**[30:46]** We'll use some clever things with those,
**[30:49]** including with some algorithms in crypt.
**[30:52]** And with other algorithms, just verification.
**[30:55]** We'll talk about that in a bit.
**[30:57]** So, with symmetric encryption.
**[31:01]** So, this is the same key at both sides.
**[31:03]** We have a few options.
**[31:06]** One of those options is we can go character
**[31:09]** by character or bit by bit and encrypt things.
**[31:14]** Let's call this stream cipher.
**[31:16]** Where we just take the next thing in the list.
**[31:19]** It's bit.
**[31:20]** And we encrypt that bit.
**[31:21]** You go to the next bit and the next bit and the next bit.
**[31:24]** Stream ciphers are really good for streaming data.
**[31:29]** And by streaming data, like, let's talk about things like a video data.
**[31:33]** But in particular, we're talking about real time data.
**[31:37]** So audio and video that's live.
**[31:39]** It happens to be a good candidate for stream ciphers.
**[31:42]** Because the data you just encrypted as it comes in.
**[31:46]** Lock ciphers are doing a chunk at a time.
**[31:50]** Or a block at a time.
**[31:52]** Maybe like 128 bits at a time.
**[31:55]** It's pretty common.
**[31:56]** And so, block ciphers don't take a bit of time.
**[31:59]** They take a chunk.
**[32:01]** And because of that, they tend to be historically a little more efficient at encryption.
**[32:06]** If you're encrypting big files or even files that don't change like a video file that
**[32:13]** isn't being like real time, right?
**[32:15]** You're just like one that we recorded is probably going to be block cipher encrypted.
**[32:21]** Just because it's a little faster to do the encryption and decryption.
**[32:24]** The exception to that is there's one of our modern stream ciphers.
**[32:29]** It's really, really fast.
**[32:31]** And so that was kind of taking over the world a little bit.
**[32:33]** But we'll talk about this.
**[32:35]** So historically RC4 or RC4 is a pretty common stream cipher.
**[32:40]** We'll talk about some of the alternatives in a bit.
**[32:42]** And then AS is the most widely encryption algorithm in the world.
**[32:47]** It stands for the Advanced Encryption cipher.
**[32:50]** And let's talk about it because it's really important.
**[32:53]** Your computer has probably done it for you a few thousand,
**[32:57]** maybe up to a few million times on your behalf today.
**[33:00]** So AS, super important.
**[33:03]** He went by these guys and it was a part of a competition.
**[33:08]** The US government said, hey, we need a competition because our old ciphers
**[33:13]** aren't good enough anymore.
**[33:14]** In fact, they had an old cipher that they called the data encryption standard DES.
**[33:19]** And they said, hey, this isn't good enough anymore.
**[33:22]** We need a competition to come up with the new one,
**[33:24]** which will call the Advanced Encryptions standard or AES.
**[33:28]** And then in the meantime, the US government was really worried
**[33:31]** that the Russians and Chinese and others adversaries of the US would get access to their data
**[33:36]** because DES wasn't good enough.
**[33:38]** And so they came up with a stop-a-gap.
**[33:40]** Hey, let's just take the output of DES and put it back into the DES algorithm
**[33:45]** and then take the output of that and put it back into the DES algorithm.
**[33:49]** So it gets encrypted retimes.
**[33:51]** We'll call it triple DES,
**[33:53]** and that's what the US government did for a few years
**[33:55]** while this competition went.
**[33:57]** And so this competition happened.
**[34:01]** The winners were these guys.
**[34:04]** And partially it was because the encryption was good, and it is.
**[34:08]** And partially because this particular encryption can run on a poster.
**[34:12]** It basically has no memory requirements and almost no processing requirements
**[34:17]** because it relies simply on the next stuff we talked about.
**[34:21]** It's a substitution, transposition, and some simple math.
**[34:26]** We can be done super, super fast and low powered.
**[34:30]** Which is why most of you have a device in front of you or in your pockets or both
**[34:35]** that has AES built into hardware so that it can even run even faster.
**[34:41]** So your operating system doesn't have to do the calculations in the CPU.
**[34:45]** It just says, hey, I need AES go and that's hard-wired into your processors.
**[34:52]** Here's how it works.
**[34:54]** I'm going to walk through this visualization.
**[34:56]** It's going to look really complicated.
**[34:58]** It's actually pretty simple if we look at the fundamentals.
**[35:02]** So the inputs are the plain text and the key.
**[35:05]** And then we also have some other stuff going on.
**[35:08]** So let's talk about this.
**[35:11]** We do this in grids just because matrix algebra is faster.
**[35:16]** So this is how things work.
**[35:19]** We just do all of this for 10 rounds and encrypt things.
**[35:27]** So let's what is all of that.
**[35:28]** There's four things that are done.
**[35:30]** There are those four things.
**[35:32]** Number one, resubstitute.
**[35:35]** This substitution box was very carefully chosen.
**[35:38]** But it's just a look-up table.
**[35:40]** Kind of like the vision air cipher where you just do that for every single little block
**[35:44]** or for every bite.
**[35:46]** Then we transpose.
**[35:48]** We just shift our bits over.
**[35:51]** Because it turns out we shift each row over a little bit differently.
**[35:54]** But we just transpose.
**[35:56]** And then we're going to mix the columns, which is just another
**[36:00]** Transposition.
**[36:01]** But it's a transposition using matrix algebra.
**[36:03]** So we're just multiplying here.
**[36:05]** So we're substituting, transposing, and multiplying.
**[36:10]** And then we're taking our key.
**[36:14]** It's actually around key. We'll see in just a minute.
**[36:16]** And we're adding those together.
**[36:19]** Oblocation, addition, substitution, and transposition.
**[36:22]** That's all the AS algorithm does.
**[36:24]** And it does it for 10 different rounds.
**[36:27]** And that's it.
**[36:28]** That's how AS works.
**[36:29]** That's how almost all of our bulk encryption is done nowadays.
**[36:34]** Now, a tiny bit more complexity here.
**[36:37]** And that is that each round has a different key.
**[36:42]** So that gets calculated by taking the original key and doing a
**[36:47]** Expansion algorithm, in terms called a key derivation function,
**[36:52]** where if the original key and we make the whole key that's going to be used for
**[36:57]** the whole algorithm.
**[36:58]** So in this derivation function, we actually use a substitution box
**[37:01]** and some addition.
**[37:03]** And then we use the previous round key and then we cut
**[37:06]** and just build this key out.
**[37:08]** So that every single round has a different key.
**[37:10]** It's super easy to come up with this key for encryption and decryption.
**[37:14]** Yeah.
**[37:15]** The original key chosen.
**[37:17]** You choose it.
**[37:18]** Like, like, we used it to defy Hellman algorithm or key exchange
**[37:22]** or just die choosing it.
**[37:23]** You just come up with the key.
**[37:26]** Or have the computer randomly generate one if that makes sense.
**[37:30]** Okay.
**[37:31]** And basically it.
**[37:34]** Just to transposition, substitution, addition, and multiplication.
**[37:39]** And then expand out our key.
**[37:41]** And that's AES.
**[37:43]** And as it turns out, why do we do 10 rounds?
**[37:46]** Because in part of the competition where photographers around the world
**[37:50]** could poke holes at any of the algorithms that we're submitted
**[37:53]** because they were all public.
**[37:54]** Some of the researchers said, hey, you know,
**[37:57]** and if you only do like four rounds of AES looping,
**[38:01]** it's weak to this one particular flaw and they said,
**[38:04]** okay, well, we're doing four rounds.
**[38:06]** Is it going to be weak to six rounds or seven rounds
**[38:08]** and the researcher said, oh, probably not.
**[38:10]** Okay, let's do 10.
**[38:12]** That's why we have 10.
**[38:14]** Also, as it turns out, you might have noticed
**[38:16]** the last round.
**[38:18]** One of the transformations I forget which one it is.
**[38:20]** We can look it up.
**[38:21]** One of them doesn't actually matter.
**[38:24]** Yeah.
**[38:25]** The mix columns doesn't actually provide any additional
**[38:27]** mixing in the very last round.
**[38:29]** So it's skipped so that it could be even faster.
**[38:32]** And that's it.
**[38:33]** That's AES.
**[38:34]** Yes.
**[38:35]** You're going to use an air lab.
**[38:37]** You're probably using it all the time now.
**[38:40]** It is a block cipher that is really, really important.
**[38:44]** Oops.
**[38:48]** Okay.
**[38:49]** So I'd be like, really, don't question.
**[38:52]** We like that.
**[38:53]** But if we know exactly how it's calculated,
**[38:55]** how people can't just like basically reverse them.
**[38:58]** They could try.
**[38:59]** It's just because like the keys are there.
**[39:01]** The key is good enough.
**[39:02]** And we think this algorithm is good enough.
**[39:04]** And even though it's actually what's happening.
**[39:06]** They can't there have been lots of people in governments around the world
**[39:09]** that are trying to do that.
**[39:10]** Because this is the top secret algorithm for the US government.
**[39:14]** Still.
**[39:15]** Okay.
**[39:16]** So you say that we choose our key.
**[39:18]** It's usually easy to start computers.
**[39:20]** Yes.
**[39:21]** Usually it's through the Diffy Helping Key Exchange
**[39:23]** if we're using HTTPS or it's something similar
**[39:26]** if you're encrypting to your computer.
**[39:29]** So if you're using, we talked about this a little bit.
**[39:32]** If you're using a,
**[39:34]** gosh, one of the technologies called.
**[39:36]** The full-driving encryption technology is on.
**[39:38]** Mac.
**[39:39]** It is time.
**[39:40]** Nothing.
**[39:41]** What is that?
**[39:42]** I don't remember the tools are called anyway.
**[39:43]** If you have your full-driving encryption exercises.
**[39:46]** I'm choosing that for you in order to do the encryption
**[39:50]** in the encryption.
**[39:51]** I'm storing that in a very special place in hardware.
**[39:53]** That's hard to get access to that key.
**[39:55]** Okay.
**[39:56]** Oh, my gosh.
**[39:57]** Yeah.
**[39:58]** Maybe I missed it.
**[39:59]** But we do the 10 rounds.
**[40:00]** This is the point that you're encrypting that
**[40:03]** and the full things of that 10th crown.
**[40:05]** It's on that one message is 10 rounds key.
**[40:07]** Or there's two directions.
**[40:09]** Each is a good question.
**[40:11]** So each file that we want to encrypt.
**[40:14]** We chop it into pieces.
**[40:16]** Okay.
**[40:17]** Because AES can only take a, well,
**[40:19]** depending on the version of AES.
**[40:21]** Only a certain size block.
**[40:23]** And as we chop our message into whatever
**[40:25]** the maximum size block is for that.
**[40:27]** Like AES 128 is 128 bit blocks.
**[40:30]** And then we encrypt that block 10 rounds.
**[40:33]** And then it goes to our file.
**[40:35]** And then we do the next block and rounds.
**[40:37]** And we just concatenate those together.
**[40:39]** And then we have an encrypted file.
**[40:40]** If we have a block at the very end,
**[40:42]** that's not quite long enough,
**[40:43]** there's mechanisms for padding those out.
**[40:45]** And making it a full size 128.
**[40:47]** That makes it.
**[40:48]** And the key would be shared with the person.
**[40:51]** That way they can,
**[40:52]** Yes, anything.
**[40:53]** Center receiver or yourself encrypting
**[40:56]** for yourself have to have the same key.
**[40:58]** And then you could run the algorithm.
**[41:00]** Just each step.
**[41:01]** Every single step in reverse.
**[41:03]** Well, the key expansion.
**[41:04]** Same direction.
**[41:05]** Like the same,
**[41:06]** the same, the expanded key.
**[41:07]** But then the rounds.
**[41:09]** And the back.
**[41:10]** You just went back.
**[41:11]** Go backwards.
**[41:12]** Then how would you know,
**[41:13]** which columns and the shift?
**[41:15]** How is that?
**[41:16]** Publicly available in your computer says,
**[41:18]** run the algorithm to shift.
**[41:20]** The one way or the reverse way for decrypting.
**[41:23]** Just public and written in code.
**[41:27]** Okay.
**[41:29]** Now,
**[41:30]** Am I going to make you get into the code?
**[41:32]** Is it really algorithms?
**[41:33]** No.
**[41:34]** Am I going to make you use the algorithms?
**[41:36]** Yes.
**[41:37]** Okay.
**[41:38]** So we'll do that in our next lab.
**[41:39]** Yeah.
**[41:40]** This little piece right here.
**[41:42]** Locksipher mode is probably the most technical,
**[41:45]** conceptually technical thing that we'll cover in this class.
**[41:48]** I want you to get the basics.
**[41:50]** I'm going to kind of go through the nuances pretty quickly,
**[41:53]** because the high level is the most important thing.
**[41:55]** If I was to ask an exam question,
**[41:57]** it would be on the high level,
**[41:58]** not on the low level stuff.
**[42:00]** Okay.
**[42:01]** So let's walk through.
**[42:02]** As it turns out,
**[42:04]** I mean up with the algorithm to be used for block ciphers,
**[42:08]** like AES,
**[42:09]** is really important.
**[42:10]** But how we use those algorithms is also pretty important.
**[42:15]** Okay.
**[42:16]** And that's what we call modes.
**[42:18]** So all of these modes have pros and cons.
**[42:24]** For example, let's talk about some of these things.
**[42:26]** What happens if we're encrypting one block,
**[42:30]** and there's an error,
**[42:32]** we can evaluate these modes,
**[42:34]** let's see what those mean in a minute.
**[42:36]** One in the way we can say if an error in one block,
**[42:39]** does that mean that there's an error in the next block of encryption?
**[42:43]** Is there error propagation?
**[42:46]** Another thing we can evaluate is,
**[42:48]** hey, we're chopping up our messages into blocks and encrypting each block,
**[42:52]** can we do this in parallel and speed up the process?
**[42:55]** So can we,
**[42:56]** if we've got a 16 core processor,
**[43:00]** can we do 16 of those blocks at a time,
**[43:03]** if we're doing those in our calculations?
**[43:05]** So can we make things faster,
**[43:07]** multi-threaded or parallel?
**[43:09]** Okay.
**[43:10]** Is there authentication integrity involved in the process?
**[43:13]** The ones I'm going to show you today are the answers,
**[43:15]** no.
**[43:16]** Well, with one exception,
**[43:17]** but we'll talk about this a little bit more later.
**[43:20]** Okay.
**[43:22]** Here is the first mode.
**[43:24]** It's called ECB or electronic code book.
**[43:27]** Let me show you the picture that will come back to this.
**[43:29]** So this might be,
**[43:30]** if you were to just come up initially,
**[43:32]** and this is what they did,
**[43:33]** we need to use in a symmetric encryption,
**[43:36]** well, on blocks,
**[43:37]** this is probably how you'd think about doing it.
**[43:39]** Okay.
**[43:40]** So we take our unencrypted data,
**[43:42]** the size of this block,
**[43:43]** and then we,
**[43:44]** here's our next blocks worth of unencrypted data,
**[43:46]** and our next blocks,
**[43:47]** and our next block and so forth.
**[43:48]** So we chop up our message into pieces,
**[43:50]** the size of a block.
**[43:52]** We take our key and the plain text.
**[43:54]** We put it into our algorithm like AES,
**[43:56]** and we get our Cypher text,
**[43:58]** and we can cabinet those things together.
**[44:00]** Pretty straightforward.
**[44:02]** Okay.
**[44:03]** Could we do this block at the same time as this block?
**[44:08]** Yeah.
**[44:09]** Yeah.
**[44:10]** Super parallelizable.
**[44:13]** Okay.
**[44:14]** Which means this can be super fast.
**[44:15]** Okay.
**[44:16]** If we have an error in this encryption,
**[44:18]** does it affect this one?
**[44:20]** Basically independent of each other?
**[44:22]** So this is pretty good.
**[44:24]** Okay.
**[44:25]** Good.
**[44:26]** No error propagation.
**[44:28]** Good on parallelization.
**[44:30]** The challenge with this
**[44:32]** is if we have highly structured data,
**[44:36]** the inputs,
**[44:37]** if the inputs are structured,
**[44:39]** in ways that are predictable
**[44:43]** and repetitive,
**[44:45]** then we can have some problems.
**[44:47]** Let me show you an example of this.
**[44:51]** I didn't even know what the mascot for Linux is.
**[44:55]** And what the mascot's name is.
**[44:57]** The name is what?
**[44:58]** Who's name is what?
**[44:59]** He means little name.
**[45:02]** He can go.
**[45:03]** I can go.
**[45:04]** I can go.
**[45:07]** Good.
**[45:08]** Thanks.
**[45:09]** Thanks.
**[45:10]** Very good.
**[45:11]** All right.
**[45:12]** How did you know that?
**[45:13]** Oh.
**[45:14]** So there's a thing called it.
**[45:15]** I see it.
**[45:16]** So we've got our mascot,
**[45:18]** Tux.
**[45:19]** And yes, you guys know Tux.
**[45:22]** Okay.
**[45:23]** Let's just do this.
**[45:24]** What do you use?
**[45:30]** Tux mascot.
**[45:34]** Looks like that.
**[45:35]** Okay.
**[45:36]** You can just say Tux right there.
**[45:37]** Okay.
**[45:38]** Images.
**[45:40]** How they data structure
**[45:42]** that is very repetitive.
**[45:45]** Take this pixel.
**[45:48]** Put the color and the transparency into the file.
**[45:52]** And then the next pixel.
**[45:53]** And then the next pixel.
**[45:55]** And so if you're doing a block of the file at a time.
**[46:00]** You're taking a chunk of pixels.
**[46:02]** And you're encrypting those, which is good.
**[46:05]** Mixing those up.
**[46:06]** And then you're taking the next chunk of pixels and mixing those up.
**[46:09]** And the next chunk of pixels and mixing those up.
**[46:11]** But as it turns out, repetitive files encrypted with electronic code book.
**[46:16]** ECB AES.
**[46:17]** And it's up looking like that.
**[46:20]** We're supposed to be fully mixing this data.
**[46:24]** You can get no information about the underlying contents.
**[46:29]** So that Eve, if Eve is even dropping, Eve can't go.
**[46:33]** Oh, I know something about this file.
**[46:35]** Where it's not perfect, right?
**[46:36]** But you can still see stuff about this file.
**[46:40]** And that's not good.
**[46:42]** That's not the entropy or the mixed upness that we really want.
**[46:47]** And so if we were to use a different type of file or encryption mode,
**[46:53]** we might get better results.
**[46:55]** Where our answer looks much, much, much more mixed up.
**[46:59]** You can't really get information about that.
**[47:01]** So this is another mode we'll talk about in a minute.
**[47:03]** The reason that the middle still resembles something similar is because each of those blocks
**[47:08]** are still in an order is all right.
**[47:12]** They're still in order because of the underlying file structure of an image.
**[47:16]** All right, because the image has repetitive information.
**[47:19]** So it's like you're taking like this chunk of the screen and encrypting just this chunk.
**[47:25]** And that gets mixed up, right?
**[47:27]** But then you're taking the next chunk and doing that.
**[47:29]** And because there's so much repetitive file structure and because you're taking a chunk of the file that's
**[47:35]** sequential like this, you're not mixing up the whole file,
**[47:39]** mixing up just the chunks and the chunks is basically just pixelating the image.
**[47:45]** Which is why ECB is considered bad.
**[47:51]** Because so much data got encrypted using ECB mode,
**[47:55]** it's still supported in most of our modern,
**[47:58]** operative languages, programming languages.
**[48:01]** So if you want to decrypt or encrypt files using ECB,
**[48:04]** you usually can but you should it.
**[48:07]** So this is one thing as a developer.
**[48:10]** You should learn from this class.
**[48:12]** Don't use ECB mode unless you have to access files that have already been encrypted in ECB.
**[48:18]** And then advocate for them back to the server,
**[48:21]** wherever you're in them in a different mode.
**[48:24]** Go hand up here.
**[48:34]** Next option.
**[48:35]** CBC.
**[48:36]** Let me walk you through what this would look like.
**[48:39]** Okay.
**[48:40]** So this one, we're going to skip this first block for a second.
**[48:43]** We'll come back to it.
**[48:44]** Okay. Let's take this second block.
**[48:46]** So with this block, we're going to take our plain text.
**[48:48]** We've chopped our message into pieces.
**[48:50]** Okay. Just like before, we're going to take our plain text.
**[48:52]** We're going to take the output of the previous block,
**[48:55]** the encrypted part of the previous block,
**[48:57]** and we're going to add those together.
**[49:01]** We're going to add the plain text with the previous block to mix that up.
**[49:08]** And then we're going to put that and encrypt it to get our cipher text.
**[49:13]** And then we'll put this one and make the next block and so forth.
**[49:18]** Okay.
**[49:19]** The whole point of this is to fix the problem with ECB.
**[49:23]** So then each blocks encryption actually relies on the previous blocks encryption.
**[49:28]** So that the entropy, the mixed upness,
**[49:31]** goes and propagates throughout the entire encryption process.
**[49:35]** Now to make this fast and efficient and use the exact same thing,
**[49:39]** we actually need for every block.
**[49:41]** We need two inputs, well three inputs.
**[49:43]** We need the key, we need the plain text,
**[49:45]** and we need the previous blocks output.
**[49:48]** But for this first block, we don't have the previous blocks output.
**[49:52]** So we have to have some thing to put in there.
**[49:55]** And we call that a random number called an initialization vector.
**[49:59]** That's just what the cryptographer has decided on.
**[50:01]** So we just pick a random number, we call it the initialization vector,
**[50:04]** and it's just used for the first block.
**[50:06]** And then when we store the file, we can catenate all these things together,
**[50:09]** and then we also can catenate usually at the front,
**[50:12]** the initialization vector with the file.
**[50:14]** So that the person decrypt in it just needs the key.
**[50:17]** They could read the initialization vector and then walk up the message
**[50:21]** and then use their key to decrypt it.
**[50:23]** Is there a hint here?
**[50:24]** Is there what I mean by like,
**[50:26]** we'll use like one.
**[50:28]** The block is different, which we'll get to today,
**[50:31]** maybe on Thursday, we'll talk about block chain,
**[50:33]** if you can wait there.
**[50:34]** We'll do a tiny bit of block chain depending on time.
**[50:41]** So, why is this good?
**[50:44]** Well, it fixes the problem with ECB.
**[50:47]** Great.
**[50:49]** But it isn't actually good in some ways.
**[50:52]** Can we parallelize this at all?
**[50:56]** No, because one block, the encryption of one block
**[50:59]** is totally dependent on the encryption of the previous block.
**[51:03]** And so we have to do this in order.
**[51:06]** Let's close things down, okay?
**[51:08]** Whoops.
**[51:09]** We also have this weird thing.
**[51:11]** Some very smart people figured out a little like crazy attack
**[51:15]** on the very last block and the padding that gets used.
**[51:19]** And so if you use certain types of padding,
**[51:22]** it's susceptible to this really horrific attack that actually lets you
**[51:26]** decrypt the message just based off of the padding.
**[51:28]** Some warmer mathematicians figured it out.
**[51:30]** It's actually beyond my full understanding of how this works.
**[51:33]** But this is kind of a bad mode because it's slow.
**[51:37]** It fixes one problem at the expense of having another problem.
**[51:42]** Okay.
**[51:43]** So, if you're a developer and you have data that's in CBC mode,
**[51:47]** we'll install your programming languages.
**[51:50]** We'll allow you to encrypt and decrypt in CBC mode.
**[51:53]** If you have to read data that's encrypted in CBC,
**[51:56]** do that and then advocate for using something beside CBC.
**[52:00]** Okay?
**[52:01]** Because it's just not good enough.
**[52:02]** Not as bad as ECB, but not good enough if you can have an option
**[52:07]** to switch.
**[52:08]** Okay.
**[52:09]** Let's talk about some of our modes that are at least different.
**[52:13]** Okay.
**[52:14]** CFB is a weird one.
**[52:18]** Sometimes we don't have to use a stream cipher.
**[52:23]** Okay.
**[52:24]** Your company just doesn't accept RC4,
**[52:26]** which you probably shouldn't nowadays,
**[52:28]** and it doesn't have the infrastructure
**[52:30]** to use our modern technologies that are stream ciphers,
**[52:33]** like Chacha, which we'll talk about.
**[52:36]** Maybe you have to use AES,
**[52:38]** but you need to use it on data that's being streamed,
**[52:41]** like live video or audio data.
**[52:43]** And so how can we use a block cipher like a stream cipher?
**[52:48]** We can kind of hack it in this way to make it work.
**[52:53]** And so we still have to have an initialization vector.
**[52:57]** We stick around and claim text,
**[53:00]** and then we bring it in a little bit at a time,
**[53:03]** but what we do is we encrypt our initialization vector with our key,
**[53:06]** and then we take the output of that,
**[53:09]** and I store it one by at a time,
**[53:12]** or one bit at a time, sorry.
**[53:14]** And then make that the cipher text.
**[53:16]** So it allows us to bring in data a little bit at a time,
**[53:20]** and still allow this process to act like a stream cipher.
**[53:25]** Now, it's still a little chunky,
**[53:27]** because we have to do this block one at a time,
**[53:30]** and we wait for the next block to be to go into this one.
**[53:33]** So it's still a little bit weird.
**[53:35]** There's a little bit of a chunkiness and falls on the way,
**[53:38]** but allows us to use AES as a stream cipher,
**[53:41]** if we have to use that.
**[53:43]** I would say if you don't have to use that,
**[53:45]** you're something that actually stream cipher this faster,
**[53:47]** like Cha Cha.
**[53:48]** But it's okay.
**[53:50]** It's still waiting on one block to encrypt the next block.
**[53:53]** How is it?
**[53:54]** Realization.
**[53:56]** So it, it allows you if you get not the whole block,
**[54:00]** but if you get chunks of this at a time,
**[54:03]** you do those chunks at the same time.
**[54:05]** So you can do the bit-wise X or operation here.
**[54:10]** You can do those together,
**[54:11]** so it's a little tiny bit of parallelization,
**[54:13]** but not the whole blocks.
**[54:15]** Okay.
**[54:16]** Now, if you have a choice,
**[54:18]** there are a few good options for the modes you should use
**[54:22]** if you're starting out from scratch.
**[54:24]** And the one that is most commonly recommended is called GCM,
**[54:29]** or you don't speak French,
**[54:32]** or you don't speak French.
**[54:33]** I think something like that counter mode.
**[54:35]** How's it?
**[54:36]** Hello.
**[54:37]** Thank you.
**[54:38]** GCM.
**[54:39]** So GCM mode is generally the like,
**[54:42]** okay, this is one of the good ones.
**[54:45]** We should use this mode if you can choose to do so.
**[54:48]** And it is becoming more implemented
**[54:51]** in a lot of our programming languages.
**[54:53]** Some of them you will require to use a third-party library
**[54:56]** in order to use not ECB, which is unfortunate,
**[55:00]** but GCM is becoming more and more useful.
**[55:04]** Now, I'm not going to walk through all of the messiness of this.
**[55:08]** Just let me tell you, it's a little more complicated,
**[55:10]** but one of the cool things about GCM is
**[55:12]** we get good cryptography, okay.
**[55:15]** So we don't have the limitations as much as the others.
**[55:18]** But we also get a little bit of authentication.
**[55:23]** You can actually authenticate a message
**[55:26]** before you do the full decryption on it
**[55:29]** because of how clever things are done.
**[55:31]** It's really interesting.
**[55:32]** What we do is you encrypt a counter variable.
**[55:34]** So you pick a number and then you encrypt that number
**[55:37]** and then just count up by one and encrypt that.
**[55:40]** And you use that kind of like a round key as you go.
**[55:43]** But there's also this hashing process,
**[55:45]** which we'll talk about hashing in a minute,
**[55:46]** that allows you to do counters.
**[55:48]** So authentication.
**[55:50]** Pretty cool.
**[55:52]** It's not great authentication,
**[55:54]** but it's okay authentication.
**[55:56]** Better authentication later.
**[55:58]** But GCM is kind of the first.
**[56:00]** This is a good one.
**[56:02]** It's got some limitations,
**[56:04]** but the limitations are not.
**[56:06]** Ranking limitations, like they are with
**[56:08]** some of the other modes.
**[56:10]** And there are a bunch of other modes, okay.
**[56:12]** So counter mode is sometimes used.
**[56:14]** Also is a stream cipher.
**[56:16]** It's not bad.
**[56:17]** Counter mode is the basis of GCM,
**[56:19]** but GCM is fully block.
**[56:23]** There's also a whole bunch of other options.
**[56:25]** And if you want to use some of the more advanced ones.
**[56:28]** NIST with the organization of the US government that does standards,
**[56:31]** including the competitions for cryptographic algorithms,
**[56:36]** has some great documentation on the various modes
**[56:39]** and how to use them.
**[56:40]** So here's their documentation on GCM.
**[56:43]** Here's some of the alternatives.
**[56:45]** So there's GCM with some extra stuff.
**[56:47]** There's EAX, which is actually pretty good.
**[56:49]** If you want to authenticate it encryption,
**[56:51]** and so forth, if you want to use,
**[56:54]** or look up for more information.
**[56:56]** But my general recommendation is use GCM,
**[56:59]** unless you really know what you're doing otherwise,
**[57:01]** or you have to use one of the else.
**[57:03]** Butchets.
**[57:05]** Super technical on this, but mostly high level it.
**[57:09]** Yeah.
**[57:10]** So when like AES was invented,
**[57:12]** was it's just for a block, right?
**[57:15]** And they had to invent all these other things.
**[57:17]** AES is the algorithm that does the encryption
**[57:20]** in each block.
**[57:21]** And then these are, how do we use AES with data?
**[57:25]** As it turns out, the simple way that you normally think about it,
**[57:28]** the ECB method we call it now, has problems.
**[57:31]** And so these are, how do we use it in ways to solve those problems?
**[57:34]** Is that what's your question?
**[57:36]** Yeah, and that's not a problem with AES.
**[57:38]** That's a problem with like this.
**[57:39]** Well, with blocks, I first.
**[57:41]** So I'll turn it into AES.
**[57:42]** Have a similar problem on like image encryption and things like that.
**[57:46]** Yeah.
**[57:48]** All right.
**[57:52]** Good time left.
**[57:53]** Let's talk about AES metric encryption.
**[57:56]** So AES metric encryption came about.
**[57:59]** So some guys will see in just a minute.
**[58:02]** This is when we have that pair of keys,
**[58:05]** that one of which we designate public and private.
**[58:07]** And we can do clover things with that.
**[58:09]** RSA has been our main AES metric encryption algorithm
**[58:13]** for a really long time.
**[58:15]** You're probably used today or it's main alternative,
**[58:19]** which is elliptic curve cryptography.
**[58:22]** We'll talk about that in a second.
**[58:24]** But let's talk about RSA and how it works first.
**[58:27]** So these are the gentlemen who sort of came up with it.
**[58:31]** So this is a wrong-revest 80 Shamir and Leonard Edelman.
**[58:35]** Now known as RSA.
**[58:38]** This guy, Clifford Cox,
**[58:41]** the British intelligence system came up with a RSA.
**[58:45]** Ten years before our did.
**[58:47]** But it was classified and they got a nice pension.
**[58:52]** And they made a million dollar cryptographic company.
**[58:56]** And Clifford Cox invented RSA before RSA did.
**[59:01]** So you remember our trap door or one way functions.
**[59:05]** These are things that are easy and one direction hard and another.
**[59:08]** That limps Walk through the very basics of RSA.
**[59:11]** So RSA relies on this idea of a breakability of the number.
**[59:15]** Oiler.
**[59:17]** I think I think mathematician from like 100 BC or something like that.
**[59:24]** Really smart.
**[59:25]** Came up with this idea of breakability of numbers.
**[59:28]** And one of the things about it is with prime numbers.
**[59:31]** This breakability number is really easy to calculate because almost all of it cancels out.
**[59:36]** But regular numbers that aren't prime.
**[59:40]** They aren't.
**[59:42]** So this is kind of part of our one way function here.
**[59:45]** Figuring this out.
**[59:46]** So here's how RSA key generation works.
**[59:49]** And then encryption.
**[59:51]** Let's walk through this.
**[59:52]** So we choose two prime numbers.
**[59:54]** In our example, I'm going to choose very small prime numbers,
**[59:57]** which are easy to pick.
**[59:59]** In the real world, we use very large prime numbers.
**[01:00:03]** And under its or thousands of bits of digits long.
**[01:00:08]** Okay.
**[01:00:09]** So we're going to choose E is 3 and Q is 11.
**[01:00:13]** And we need to make some math.
**[01:00:14]** Okay.
**[01:00:15]** So can we calculate the product of E times Q?
**[01:00:18]** Double jump it up.
**[01:00:20]** 3.
**[01:00:21]** 3.
**[01:00:22]** Thank you.
**[01:00:23]** Okay.
**[01:00:24]** Now four prime numbers.
**[01:00:25]** The really large Oiler's totion calculation.
**[01:00:29]** End up simplifying down to P minus 1 times Q minus 1.
**[01:00:33]** So can we calculate that one?
**[01:00:35]** All right.
**[01:00:36]** We got 20.
**[01:00:37]** All right.
**[01:00:38]** P minus 1 is 2.
**[01:00:39]** Q minus 1 is 10.
**[01:00:41]** 2 times 10 is 20.
**[01:00:43]** Okay.
**[01:00:44]** Great.
**[01:00:45]** Now we need to choose.
**[01:00:46]** This is the decision we have to make.
**[01:00:48]** We need to choose another prime number.
**[01:00:51]** E satisfies these requirements.
**[01:00:55]** Number one is it has to be greater than one.
**[01:00:59]** And it has to be less than that Oiler's totion.
**[01:01:02]** Okay.
**[01:01:03]** And integer.
**[01:01:04]** So it has to be between in this case 2 and 19.
**[01:01:07]** Okay.
**[01:01:08]** Are there any prime numbers between 2 and 19?
**[01:01:10]** Yeah.
**[01:01:11]** There's a bunch of them actually.
**[01:01:12]** And so that's requirement one.
**[01:01:14]** We don't have to have E.
**[01:01:16]** And the Oiler's totion have to be co-prime.
**[01:01:19]** Meaning that even though Oiler's totion isn't a prime number here.
**[01:01:23]** It means that the number E we choose and that Oiler's totion can only share a factor of 1.
**[01:01:29]** Okay.
**[01:01:30]** So for example, 5 is a prime number between 2 and 19.
**[01:01:36]** But 5 and 20 share a factor that isn't 1, namely 5.
**[01:01:42]** And so that one's out.
**[01:01:43]** It actually is a limitation of RSA.
**[01:01:45]** You can't choose that.
**[01:01:46]** We can choose any of these other prime numbers between 2 and 19.
**[01:01:50]** Well, a bunch of them.
**[01:01:52]** We're going to choose one that makes the math as easy as possible.
**[01:01:55]** So let's choose 7.
**[01:01:58]** And then we need to make our hardest math calculation of this algorithm.
**[01:02:04]** Okay.
**[01:02:05]** First of all, we have our public key now.
**[01:02:08]** Okay.
**[01:02:09]** So our public key is the combination of E which we just chose.
**[01:02:13]** And that's the public key.
**[01:02:19]** Our private key we have to do this formula.
**[01:02:22]** Okay. So if you remember, we take the mod of function mod of some number.
**[01:02:27]** And if we get a 1, what's that mean?
**[01:02:34]** 3 mod 2 does that equal 1?
**[01:02:41]** 3 mod 3 does that equal 1?
**[01:02:43]** Okay.
**[01:02:44]** I see some heads shaking and heads not in.
**[01:02:46]** When we're doing this calculation, we do the division.
**[01:02:48]** And we take the remainder.
**[01:02:50]** 3 mod 3.
**[01:02:52]** 3 goes into 3 even number of times.
**[01:02:55]** So the remainder is 0.
**[01:02:56]** Okay.
**[01:02:57]** 3 mod 2 is we divide 3 by 2.
**[01:03:00]** It goes in one time with the remainder of 1.
**[01:03:03]** Okay.
**[01:03:04]** And so what we're doing is we're looking for a value of mod 33.
**[01:03:09]** That's our end value.
**[01:03:11]** Okay.
**[01:03:12]** Sorry, the oil is pushing right here.
**[01:03:14]** So mod 20 equals 1.
**[01:03:16]** So if we had a value like 41 here.
**[01:03:20]** Okay. 41 mod 20.
**[01:03:22]** Is that give us 1?
**[01:03:24]** Okay.
**[01:03:25]** How about 20 mod 20?
**[01:03:28]** Does that equal 1?
**[01:03:29]** How about 21 mod 20?
**[01:03:31]** Is that equal 1?
**[01:03:32]** Okay. Great.
**[01:03:33]** And so we're looking for a number.
**[01:03:34]** And we can just brute force this.
**[01:03:36]** We'll find a D where this is true.
**[01:03:40]** Okay.
**[01:03:41]** So we're going to start with like,
**[01:03:43]** we'll take the 20 value.
**[01:03:45]** And we'll just add 1 to it.
**[01:03:47]** And we'll say, okay, is 21.
**[01:03:49]** 120 equal 1 sure it does.
**[01:03:51]** Are there any hole numbers?
**[01:03:53]** D times E.
**[01:03:55]** That equal 21.
**[01:03:57]** Now we chose 7 to be.
**[01:03:59]** Okay.
**[01:04:00]** It's like E to be 7.
**[01:04:01]** So there's any number times 7 that equals 21.
**[01:04:05]** Yeah.
**[01:04:06]** 3 times 7.
**[01:04:07]** All right.
**[01:04:08]** And so we choose that as our.
**[01:04:11]** Okay.
**[01:04:12]** If we didn't have a whole number that was.
**[01:04:14]** That worked there.
**[01:04:15]** Then we'd go to the next one.
**[01:04:16]** We'd say double this oiler's totent.
**[01:04:18]** And we go.
**[01:04:19]** 40 plus one.
**[01:04:21]** 1.
**[01:04:22]** Okay.
**[01:04:23]** That's going to be there.
**[01:04:24]** Is there anything that seven times.
**[01:04:26]** D equals 41.
**[01:04:28]** And we just do that.
**[01:04:29]** And so when your computer is generating these keys.
**[01:04:31]** That's what it's doing.
**[01:04:32]** It's just trying different combinations of.
**[01:04:35]** Mod times.
**[01:04:38]** The next number plus one.
**[01:04:40]** And then seeing if they can figure it out.
**[01:04:42]** Yeah.
**[01:04:43]** Then step five say that.
**[01:04:45]** And it's 33.
**[01:04:46]** Sorry.
**[01:04:47]** Say that again.
**[01:04:48]** Then step five say that.
**[01:04:49]** And it's 33.
**[01:04:50]** Not 20.
**[01:04:51]** And so we'd be doing a lot.
**[01:04:52]** 33.
**[01:04:53]** Right.
**[01:04:54]** Yes.
**[01:04:55]** So public key here.
**[01:04:56]** End up being seven and 33.
**[01:04:58]** Which is the end.
**[01:04:59]** But this value is this oiler's totent.
**[01:05:02]** Which is the 20 value.
**[01:05:03]** Yeah.
**[01:05:04]** It's a good call.
**[01:05:05]** Okay.
**[01:05:06]** And so now our private key is 33.
**[01:05:09]** Very small numbers.
**[01:05:11]** This doesn't look very impressive.
**[01:05:13]** Okay.
**[01:05:14]** But we're really talking about very large numbers here in order to make this work.
**[01:05:17]** Okay.
**[01:05:18]** So when we've got these values.
**[01:05:20]** We want to encrypt a message using this.
**[01:05:23]** Public and private key.
**[01:05:25]** So let's encrypt with our public key.
**[01:05:28]** Okay.
**[01:05:29]** So we're going to say our message is three.
**[01:05:32]** Very simple math just to make it easy.
**[01:05:35]** So here's how it works.
**[01:05:36]** Our cipher message or cipher text.
**[01:05:39]** See is three raised to the e power mod n.
**[01:05:51]** And we get our cipher character.
**[01:05:54]** Three is been existed as a nine.
**[01:05:57]** And if we want to decrypt it.
**[01:06:01]** We use other key with d and
**[01:06:05]** 33.
**[01:06:07]** So we take our cipher character.
**[01:06:09]** Is it to our d power mod 33.
**[01:06:12]** And encrypt that message.
**[01:06:15]** And this only works.
**[01:06:17]** Because really smart people out.
**[01:06:19]** Public and private keys in an algorithm.
**[01:06:23]** And the math of each of them is the inverse of the other.
**[01:06:28]** So you can encrypt with the private key and decrypt with the public key.
**[01:06:34]** Or encrypt with the public key.
**[01:06:37]** And the private key actually works both directions with RSA.
**[01:06:41]** That is the magic of a symmetric encryption.
**[01:06:45]** It allows us to do some clenverse.
**[01:06:49]** Let's go.
**[01:06:51]** Now a few years ago I grabbed.
**[01:06:54]** We made a few calls.
**[01:06:55]** Old variable at this point.
**[01:06:57]** 124 bit.
**[01:06:58]** Let's go and see what b.
**[01:07:01]** Why use using currently.
**[01:07:02]** It's might have switched this year.
**[01:07:07]** They were using RSA still as a last year.
**[01:07:10]** Let's check it out.
**[01:07:11]** Connection is secure.
**[01:07:13]** Then let's see what we're using here.
**[01:07:16]** They're public key.
**[01:07:19]** They're using RSA encryption.
**[01:07:24]** And their public key is right here.
**[01:07:27]** They're using a 4,096 bit.
**[01:07:30]** Launchless the key.
**[01:07:32]** Here's our public exponent.
**[01:07:35]** So this is the N values.
**[01:07:37]** This is the 17 bit N value.
**[01:07:39]** And then here is their RSA key.
**[01:07:42]** This is the the E value that is their public key.
**[01:07:48]** We want to encrypt things up to BYU.
**[01:07:50]** We can use their key right there.
**[01:07:53]** And now.
**[01:07:56]** It turns out this is kind of inefficient.
**[01:07:58]** And so we have a better algorithm nowadays.
**[01:08:01]** I'm actually kind of surprised me.
**[01:08:02]** I used to use the better algorithm yet.
**[01:08:04]** But let's go and do this.
**[01:08:06]** We've got like four minutes left.
**[01:08:08]** I want to see if you can figure this out.
**[01:08:11]** And you're getting a small group and see if you can figure this out.
**[01:08:15]** So we're ready to case here.
**[01:08:17]** I've given you a bunch of the values.
**[01:08:19]** Okay.
**[01:08:20]** I've given you the P.
**[01:08:21]** I've given you the Q.
**[01:08:22]** And I've chosen the E for you.
**[01:08:24]** So you all get the same answer.
**[01:08:25]** Okay.
**[01:08:26]** We can skip this whole step three.
**[01:08:28]** I want you to figure out if you can get E and N and D and N in three minutes.
**[01:08:34]** And then we'll do it in the last minute together.
**[01:08:40]** Okay.
**[01:08:41]** You're going to do the better.
**[01:08:44]** I think I do have a couple of days.
**[01:08:48]** If I'm 40 times 60, whatever that symbolism is 60.
**[01:08:53]** She's 40.
**[01:08:56]** She's 40.
**[01:08:57]** She's 50.
**[01:08:58]** There.
**[01:08:59]** 40.
**[01:09:00]** 40.
**[01:09:01]** 40.
**[01:09:02]** 40.
**[01:09:03]** 40.
**[01:09:04]** 40.
**[01:09:05]** 40.
**[01:09:06]** 40.
**[01:09:07]** 40.
**[01:09:08]** 40.
**[01:09:09]** 40.
**[01:09:10]** 40.
**[01:09:11]** 40.
**[01:09:12]** 40.
**[01:09:13]** 40.
**[01:09:14]** 40.
**[01:09:15]** 40.
**[01:09:16]** 40.
**[01:09:17]** 40.
**[01:09:18]** 40.
**[01:09:19]** 40.
**[01:09:20]** 40.
**[01:09:21]** 40.
**[01:09:22]** 40.
**[01:09:23]** 40.
**[01:09:24]** 40.
**[01:09:25]** 40.
**[01:09:26]** 40.
**[01:09:27]** 40.
**[01:09:28]** 40.
**[01:09:29]** 40.
**[01:09:30]** 40.
**[01:09:31]** 40.
**[01:09:32]** 40.
**[01:09:33]** 40.
**[01:09:34]** 40.
**[01:09:35]** 40.
**[01:09:36]** 40.
**[01:09:37]** 40.
**[01:09:38]** 40.
**[01:09:39]** 40.
**[01:09:40]** 40.
**[01:09:41]** Good evening.
**[01:09:43]** Thank you.
**[01:09:45]** Good morning.
**[01:09:47]** Please, not working, Larry.
**[01:09:48]** You said that?
**[01:09:49]** You said that was the same.
**[01:09:50]** I heard painting my words.
**[01:09:52]** It's about the way.
**[01:09:54]** I was 130.
**[01:09:55]** There were 64.
**[01:09:58]** I'm sorry, I'm sorry.
**[01:10:01]** Okay.
**[01:10:04]** I got it already?
**[01:10:08]** Well, another minute half.
**[01:10:10]** It's just going to take away from you.
**[01:10:13]** Just.
**[01:10:15]** Beautiful.
**[01:10:17]** Got it, Tim.
**[01:10:19]** Got it.
**[01:10:40]** You
**[01:11:11]** You.
**[01:11:18]** Even if you haven't figured it out, let's do this together.
**[01:11:21]** So we've got a queer in our last minute that we have.
**[01:11:23]** Okay.
**[01:11:24]** So.
**[01:11:25]** Here's what I ended up getting.
**[01:11:28]** What we do is we think are.
**[01:11:30]** Because Q.
**[01:11:31]** All right.
**[01:11:32]** Five times 17, which was.
**[01:11:34]** Five.
**[01:11:35]** Five.
**[01:11:36]** Thank you.
**[01:11:37]** And then we do our oilist totion, which is.
**[01:11:38]** P minus one times Q minus one, which is four times 16, which is our 64.
**[01:11:43]** Okay.
**[01:11:44]** And then we are to give you e.
**[01:11:46]** So our public key is 13 and 85.
**[01:11:49]** And then our private key.
**[01:11:51]** This is the tricky part.
**[01:11:52]** We've got to figure out what our d is.
**[01:11:55]** If we multiply d times e.
**[01:11:57]** So d times 13, which we chose.
**[01:11:59]** But.
**[01:12:00]** Of course, there's totion that 64 value has to be a remainder of one.
**[01:12:04]** And so what we do is we try one higher than this value.
**[01:12:07]** 65.
**[01:12:08]** Okay.
**[01:12:09]** We want to figure out.
**[01:12:10]** Hey.
**[01:12:11]** If we do 65 months 64, that's going to be a remainder of one.
**[01:12:13]** So is there any value of d that if we take 65 divided by 13.
**[01:12:18]** That ends up being an integer.
**[01:12:20]** So 65 divided by 13 is.
**[01:12:23]** Five.
**[01:12:24]** And so that's an integer that totally works for us.
**[01:12:27]** And our private key is five and 85.
**[01:12:30]** Okay.
**[01:12:31]** If that hadn't worked, then we double this oilist totion.
**[01:12:34]** 28 at one because 129 mod 64 is also going to be one.
**[01:12:39]** And we go 129 divided by 13 and see if that's an integer.
**[01:12:42]** And then we try the next one and the next one.
**[01:12:44]** Okay.
**[01:12:45]** So we're out of time.
**[01:12:47]** Next time remind me that we'll pick up with ECC.
**[01:12:50]** And we'll keep going from here and talk about this.
**[01:12:53]** But all of this is to provide confidentiality.
**[01:12:57]** We figured out how to use the metric encryption just a little bit.
**[01:13:02]** And some modes of using symmetric encryption.
**[01:13:04]** We figured out how to share keys by using Diffy Helman key exchange for symmetric encryption.
**[01:13:10]** And now we figured out a little bit on how do we do asymmetric encryption.
**[01:13:15]** We'll talk about some of the implications for that next time.
**[01:13:18]** We'll also get into how do we do integrity.
**[01:13:21]** How do we do authentication?
**[01:13:23]** How do we do non-reputiation?
**[01:13:25]** We'll do that on Thursday as well in preparation for your lab, which is almost done.
**[01:13:30]** So anyway.
**[01:13:31]** Thank you for your attention and I will see you on Thursday.
