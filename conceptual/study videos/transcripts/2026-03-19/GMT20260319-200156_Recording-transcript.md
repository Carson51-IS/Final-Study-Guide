# Study session transcript

**Source:** `GMT20260319-200156_Recording.m4a`
**Detected language:** en (probability 1.00)

Auto-generated with faster-whisper (Whisper **tiny**, CPU). Expect minor errors.

---
**[00:00]** As of our debate last time we were here behind the other sections, but we will catch up
**[00:14]** today.
**[00:17]** They all had debates today.
**[00:22]** So last time, let's recap, because there's important things I want to make sure we
**[00:27]** know the highlights.
**[00:28]** So last time we talked about modern ciphers and how they rely on some of the things that
**[00:33]** we learned about in our ancient ciphers.
**[00:36]** So what are the things that are modern ciphers rely on that are common with our old stuff?
**[00:41]** It's a key exchange.
**[00:44]** Key exchange, okay?
**[00:45]** We're going to talk about key exchange.
**[00:47]** Now, we can do a fancy key exchange nowadays where we don't have to have an in-person
**[00:52]** meeting like we used to, okay?
**[00:54]** One of the things that are old algorithms rely on that are, and we want to also rely
**[00:58]** on.
**[00:59]** Yeah.
**[01:00]** A lot of the ways to scramble things up for similar transposition and all the other
**[01:04]** things.
**[01:05]** Transposition?
**[01:06]** Yes, absolutely.
**[01:07]** And substitution, okay?
**[01:09]** So transposition is moving things around substitutions, swapping things with other
**[01:13]** things, okay?
**[01:14]** We also use some other stuff, like the AS algorithm, uses transposition substitution, but
**[01:20]** also simple math, okay?
**[01:23]** Things that processors are really fast at, things like addition and multiplication,
**[01:28]** bit operations or bit comparison operations, we're just looking at bits, honestly,
**[01:33]** it's super fast at those things, okay?
**[01:35]** And then there's one other thing that came up in the Diffy Helman algorithm, and then
**[01:40]** the algorithm we didn't get to in this section, RSA, we'll talk about again, is this idea
**[01:44]** of a trap door function or a one-way function?
**[01:47]** Well, these are things that are, at least for computers, easy to do in one direction,
**[01:52]** but really difficult in the other direction, okay?
**[01:56]** Things like, it's really easy for computers to take large numbers and multiply them
**[02:00]** together, okay?
**[02:01]** It's just super fast to do that, okay?
**[02:04]** But, what if we have a gigantic number and we're trying to factor that into its constituent
**[02:10]** parts?
**[02:11]** It's actually pretty hard to do that for computers, and by hard, it's just time consuming, okay?
**[02:16]** There's a few mathematical tricks that can be used, but we're mostly brute-forcing it,
**[02:20]** we're mostly just trial and error and seeing what the factor is, and that takes a lot longer
**[02:24]** than just multiplying them together, okay?
**[02:26]** All right, we also talked about symmetric encryption, and this idea of a Diffy Helman
**[02:34]** algorithm, just sometimes called the Diffy Helman key exchange, it gives you some hints,
**[02:39]** coming with the goal of Diffy Helman is, what do we try to accomplish, please?
**[02:44]** You let it basically, let's two people get a private key, that's, okay, that's
**[02:52]** to me, each other say the same one without a third, or the other one, okay?
**[02:55]** All right, now I want to be really careful with language and terms here, okay?
**[02:59]** So, you are getting a private key, but private key means something very particular, so we're
**[03:04]** going to get you today, so we'll talk about that as a shared symmetric key,
**[03:09]** or Rachel, do you have more than there, right?
**[03:11]** Yeah, I just, that's what I was going to say to you, okay?
**[03:14]** Yes, you said it allows two people who never meant to agree on a key that no one else
**[03:20]** is able to intercept even if all the data they transmit is good.
**[03:25]** So it is a process where certain pieces of information are private, those X values,
**[03:30]** but it is a, in general, a public process that you can watch, where two people can arrive
**[03:37]** at a shared private key, although we have to be careful with that, that term private key,
**[03:41]** a shared secret key that they're going to use for symmetric encryption, okay?
**[03:46]** So the whole goal of development is keys, all right, generating a symmetric key that both
**[03:52]** people can use.
**[03:55]** Then we use that and it's symmetric encryption algorithm, okay?
**[03:59]** And we talked about two different types of symmetric encryption algorithms, block ciphers
**[04:05]** and stream ciphers.
**[04:08]** When would you want to use one or the other?
**[04:11]** A couple of reasons we would choose one or the other.
**[04:16]** Good or bad about either of those, please.
**[04:18]** Well, I get it if you know how the, well, your transfering is going to be in their streams
**[04:22]** good, it can be as a constantly go.
**[04:24]** So part of it is our use case, right?
**[04:26]** You know, so if we've got something where we could predict the size or it's easy to take
**[04:30]** a file, slice and dice into pieces, we call them blocks, and then put them into a block
**[04:34]** ciphers, okay?
**[04:35]** Great.
**[04:36]** If the data is coming in a bit at a time, live data, for example, well, maybe it makes
**[04:39]** more sense to do stream ciphers, especially if it's inconsistent in its rate, right?
**[04:44]** If it's like a bit or two here, and then a pause, and then a ten bits here, and then
**[04:49]** a pause, I mean, especially if it's that the case, it may make more sense to do a stream
**[04:53]** ciphers, okay?
**[04:55]** But even the two, if you had the choice and everything was equal, why would most people
**[05:02]** historically choose a block cipher?
**[05:05]** Wait, way faster to calculate, okay?
**[05:09]** Because with a stream cipher, you're taking one bit and running it through a fairly complex
**[05:14]** algorithm, and then the next bit, and doing that, a hundred and twenty-eight times before
**[05:19]** you get to a hundred and twenty-eight bits, whereas with AES, you just say, oh, give me a hundred
**[05:24]** and twenty-eight bits, and we'll do that process once, a hundred and twenty-eight bits.
**[05:28]** Sure, it has ten grounds, but it's still way faster than a stream cipher.
**[05:31]** Now, Cha Cha twenty is actually pretty fast, still not as fast as AES, but pretty fast,
**[05:36]** so some people are choosing that instead, anyway.
**[05:38]** Okay?
**[05:39]** Alright, then we got into the fairly technical parts of, okay, we're choosing a block cipher,
**[05:46]** the simple way to use block cipher, just to slice things into blocks, encrypt each one,
**[05:51]** call it good, can calculate the results, that's called electronic codebook, and it turns
**[05:56]** out we have that penguin problem, the touch image problem, where if we've got repetitive
**[06:01]** files, the entropy of the whole file isn't really mixed up across the entire file, because
**[06:09]** of the feature of the file, so ECB, bad, we shouldn't use it.
**[06:14]** The solution, at least at first, was let's take the output of each block, and combine
**[06:20]** it with the input of the next block, and kind of conceptually chain these blocks together
**[06:25]** in our encryption process, we'll call that cipher block chaining, or CBC, and that should
**[06:31]** take our entropy from one block and kind of diffuse it all the way across the entire file.
**[06:36]** Okay, this is the touch problem, super slow by comparison, we can't parallelize anything,
**[06:42]** there's error propagation, so it's not that great, and some clever people figured out an attack
**[06:47]** on the padding of this, which can reveal some of the data, that's really bad, so CBC,
**[06:53]** better than ECB, do not grate, this mentioned a chaining of blocks, does that have anything
**[06:59]** to do with like block chaining, did we go? Not in this case, but if we have time, I don't know
**[07:05]** if we're enough time, if we have time we might spend a little deviation on how block chain
**[07:10]** actually works, and what the math is behind it for just a second, I used to give,
**[07:15]** there was a period of time when like cryptocurrency and NFTs and everything were the rave,
**[07:19]** and I don't know if they kind of went out of fashion, they come back a little bit, I used to
**[07:25]** give a block chaining lab and they were pretty fun to do, maybe I'll make them an extra credit
**[07:31]** lab or something, this semester, but yeah, we'll definitely very soon understand the math
**[07:37]** to be able to understand block chaining. They're different than this, yes. Okay,
**[07:44]** then we talked about there's a couple of methods, one we highlighted, where you can take a block
**[07:50]** cipher and have it act like a stream cipher, that's clever and you can use that, and then there was
**[07:55]** one mode where I kind of said, hey, if you have a choice, this is the one you probably should use,
**[08:01]** it's considered good enough, it's widely supported in our tooling and our programming languages
**[08:07]** and the libraries that are associated with those, and anyone remember what that one's called?
**[08:11]** Yeah, GCM, okay, so I don't know if that's a go-lock, a low-y, go whatever counter mode, okay, GCM,
**[08:18]** and in your lab, which will open soon, we're going to go and have you do some GCM. I did,
**[08:25]** I was testing the lab, you know, through day and then a little bit during lunch today,
**[08:29]** I found a tiny little problem with the lab, but nothing huge, but I will probably,
**[08:35]** until after a game tonight, work on fixing it, and so the lab will probably open, hopefully late
**[08:42]** tonight or early tomorrow morning, so apologies, it's not open yet, but in your lab, you're going to be
**[08:48]** using GCM, okay, then we need to talk about asymmetric encryption, which we didn't get to, so
**[09:01]** asymmetric encryption means that both sides may not actually use the same key,
**[09:09]** so our algorithms and asymmetric encryption, we generate a pair of keys, two of them,
**[09:16]** one of them we designate the public key, and one of them we designate the private key,
**[09:23]** in some algorithms, the algorithm chooses which one is which, and some you get to choose,
**[09:28]** but then you can share the public key with anybody, you need, and you keep
**[09:35]** private key very secret, you can use the public and the private key to do encryption,
**[09:40]** whether the math ends up working, is you can use the public key to encrypt a file,
**[09:48]** and then the public key can't decrypt that file, only the private key can, or you can encrypt
**[09:54]** with the private key, and the private key can't decrypt that, but the public key can,
**[10:02]** or people figured this out, so let's talk about how this works for one algorithm, so
**[10:09]** RSA algorithm is kind of the the one that's the most famous is the first algorithm space.
**[10:15]** It was created by these guys, who are professors at MIT, so run-revest, 80 Shamir, and little
**[10:22]** Aderlin, now known as RSA, they created this algorithm, they also created a company,
**[10:29]** we came multi-millionaires selling a bunch of security related products, very important contribution,
**[10:35]** and then turns out decades later, we discovered that this guy, Clifford Cox, worked for
**[10:41]** the British Intelligence Service, created the RSA algorithm about 10 years before RSA did,
**[10:48]** but it was classified, and he got a nice pension.
**[10:52]** So anyway, multiple people, multiple different places, created the same algorithm.
**[10:56]** It's based off of this idea of a trapdoor or a one-way function, and the trapdoor function
**[11:01]** that we're using here has to do with factoring, but also this, the most famous probably,
**[11:08]** probably the most important mathematician of all time was this guy named Oiler.
**[11:12]** He was a Swiss mathematician in the 1700s, came up with a whole bunch of stuff,
**[11:19]** lots of mathematicians look back on him and go holy cow, he came up with a lot of stuff
**[11:23]** of his lifetime that are really, really important. Anyway, one of the things that he was
**[11:27]** kind of as a diversion looking at was this idea that he called the breakability of numbers,
**[11:32]** calculating the constructions were allowed in this building. It was calculating how many factors there
**[11:39]** are of various numbers relative to things, I don't really fully understand it, but this number
**[11:45]** is very complicated to calculate for almost all numbers, in prime numbers, like 90% of the equation
**[11:54]** cancels itself out and we're ended up with a really simple thing. RSA is built off of
**[12:00]** this calculation at partially achieved, and so it's something that's really hard to compute except
**[12:07]** for when we're dealing with prime numbers, which makes it a good one-way function. So let me
**[12:11]** walk you through how we generate an RSA key. We're going to choose very small numbers, in reality
**[12:17]** we're going to choose really big numbers in a real key, but the math is still exactly the same.
**[12:23]** So let's choose two prime numbers. We're going to choose these tiny ones for P and 11 for Q,
**[12:32]** because our math is going to be easy. Hopefully we can compute the product of those two numbers.
**[12:39]** Go and shout it out. What's P times Q? We're going to do it in three. Okay, good.
**[12:44]** We'll have to wait there. No, we're not supposed to wait there. Okay, now we need to compute that
**[12:48]** Euler's totent, which for prime numbers we can simplify all the way down to P minus one times Q minus one.
**[12:57]** Okay, so we take P minus one, which is two, Q minus one, which is 10, multiply those together,
**[13:02]** and we get one to you. Okay, good. So that's how we calculate the Euler's totent value.
**[13:09]** Okay. All right, now we need some choices to make. We have to choose a prime number
**[13:15]** that fits these conditions. Number one, that's to be bigger than one. It has to be less,
**[13:22]** strictly less than the O-Euler's totent value. Okay, so we can choose two, we can choose 19,
**[13:27]** we can choose anywhere in between, we can't choose 20, we can't choose one. Okay, that's easy enough.
**[13:33]** And it has to be prime number. Okay. Are there any prime numbers in that range?
**[13:37]** There's a bunch of them, actually. Okay, now the other, one of the other factors is E and the O-Euler's
**[13:44]** totent have to be what we call co-prime, meaning they can't share a factor.
**[13:48]** So five is in that range. Okay, that's good. But five and 20 share a factor that isn't one,
**[13:54]** namely five, and so that one's out. We can't use that one. Okay. But we could choose any of these
**[13:59]** other ones. Because I want the math to be super easy, we're going to choose an E value of seven.
**[14:08]** It'll be apparent why that is in the minute. Okay. And that's it for getting our public key.
**[14:15]** So an RSA public key in this case is seven and 33. Pretty easy.
**[14:25]** Now, we need to do the slightly harder part. We need to compute a value for D that satisfies
**[14:33]** this equation. Now, once you ignore this part right here for a second, we're going to take
**[14:38]** something of mod of how much is this Euler's totent value? 20. Okay. So some value mod 20.
**[14:49]** And we want the remainder, what the mod function calculates, to equal one. Well, I don't know,
**[14:55]** smart people figured it out. Okay. Well, that's 20 equals one. So here's what we're going to do.
**[15:02]** Is we're going to say, okay. If I want a remainder of one, I'm going to start with
**[15:06]** whatever's one higher than this value. 21 mod 20. Well, 21 divided by 20 is going to have a
**[15:14]** remainder of one. Okay. Always. And so 21 mod 20, that's going to equal one. If that ends up
**[15:19]** not working for us, let's double this value and add one and do 41 mod 20. Is that going to equal one?
**[15:26]** Sure. You know, 20 goes into 41 twice with a remainder of one.
**[15:32]** If that doesn't work, we'll try 61 and then 81 and then 101 and 121 and so forth. Okay. And when
**[15:38]** your computer does a key generation of RSA, I'm not going to have to do this here, but I've done it in
**[15:45]** the past. That's what it's doing. It's just trying these and top finds a value of D that works.
**[15:49]** Does that happen? There are stretch, stretch, coming up. So let's try this. Let's try first of all,
**[15:58]** let's something that's 21 mod 20 equals one. That's going to be the first one we try.
**[16:03]** Okay. It's 21 to the thing we want to figure out. Is there any value of D times E that equals 21
**[16:09]** that the values are whole members? 21 divided by the E that we chose, 7. Is that a whole number?
**[16:18]** Anyone divided by 7? Yeah. It's value three. Okay. And we're done. And so D is three and our
**[16:25]** private key is 3 and 33. That's RSA key generation for tiny numbers. I don't obviously use tiny numbers,
**[16:34]** but let's go. Now, how would we use this to encrypt a message? Okay. Now, ultimately, computer
**[16:44]** thinks everything is a number. So we can always boil everything down to a number. So we're going
**[16:48]** to do this as a number. Okay. So let's take our message and our message is just the number three to
**[16:53]** make it nice and easy. And here's how we would encrypt that number. Okay. We're going to encrypt it
**[16:59]** first with the public key. Okay. We could have done the private key, but we're using the public key here.
**[17:03]** Okay. So the public key is 7 and 33. We take our unencrypted character, our plain text,
**[17:11]** the message. And we're going to raise that value to the E, quad, n, and get the value of 9.
**[17:20]** And now it's encrypted. And if we want to decrypt it, we raise the Cypher character, Cypher
**[17:30]** text to the D value, quad, n, and the process. We can't reverse this value, just the public key
**[17:44]** doesn't work. Math doesn't work. Only the encrypted with the public key can be decrypted with
**[17:49]** the private key or encrypted with the private key can be decrypted with the public key. So that's how the
**[17:53]** map works. And for small numbers, that's how it works. So can you break this? The numbers are small.
**[18:03]** Easy, easy. I mean, not super easy, but it is certainly easy to operate something this small.
**[18:09]** But what if it's large? A long time ago, like 10, 15 years ago something like that, I grabbed
**[18:15]** Google's old 1224 bit RSA key. These are not considered secure long enough, but this is the 1224 bit
**[18:24]** RSA key that Google used to use. Let's check out another site. It's to not do learning sweet,
**[18:34]** let's just do this to BYU and BYU secure connection, great. And let's see what we're running.
**[18:45]** BYU is using RSA, still. And here is there, 4,096 bit key. Go, this is their
**[18:56]** public key value. All right. So this is their E value. And here is their N value.
**[19:05]** Then, this has to be really long. So, 1,096 bits for that key.
**[19:13]** RSA used all the time.
**[19:17]** Well, we don't know anything, if not hundreds of times, by your computer today for you.
**[19:22]** I was talking to someone I wondered about. I was like, oh, yeah, RSA is what they use. And he was saying,
**[19:26]** oh, that's kind of outdated. People started using something else more to go. We're going to get to
**[19:29]** this something else. It is becoming more common, but RSA is still widely widely used.
**[19:35]** Should we be using the alternative? Probably things are slow when we come to tech,
**[19:40]** in general, security, and specifically. So, be right. In fact, it's not this light.
**[19:46]** Many are moving towards elliptical curve, which we'll get to in a few minutes, including Google
**[19:50]** doesn't use RSA anymore. It's loved curve. Okay. So, let's walk through this together. What I want
**[19:58]** to do is, if I give you the formulas, and because I want you to, whoops, not the answer.
**[20:05]** Because I want you to all come to the same answer, I'm going to choose the E for you,
**[20:11]** which means step three, I've already done for you. Can you come up with the private key,
**[20:17]** and the public key, and the private key, I give you formulas, giving you your groups,
**[20:22]** and give you three minutes to work on. I think we can do that. I will spend three minutes on this.
**[20:28]** Don't be able to get it.
**[20:39]** Are you going to oxygen, yes?
**[20:46]** First, clear. I probably should. I've been present on the public final exam, you see.
**[20:56]** There's usually some surprises associated with the fact that point there's something like that.
**[21:12]** Swish, cracking me RSAs.
**[21:20]** Okay, all these one groups advance the slides and has the answer.
**[21:27]** But anyone can calculate the answer?
**[21:30]** Yeah.
**[21:31]** We'll go another minute or so for a second.
**[21:35]** Let's see if there's any line.
**[21:50]** Okay.
**[21:57]** Okay.
**[22:05]** So I'm sorry, sorry, sorry, sorry, sorry.
**[22:12]** And I'm sorry, sorry.
**[22:18]** I'm sorry, sorry, sorry, sorry.
**[22:27]** These are the new things.
**[22:29]** How do you find D here?
**[22:32]** How do you get to that?
**[22:33]** These are the new things from the point of view.
**[22:37]** Okay.
**[22:50]** It's probably, it's always okay.
**[22:53]** So I'm not going to be fast in the students.
**[22:56]** I'm going to spot this.
**[22:58]** If I don't want you to be fast in the students.
**[23:01]** If I want you to be fast in the students.
**[23:05]** So I'm just thinking myself number of times 13 and five.
**[23:08]** Don't talk.
**[23:09]** It's important.
**[23:10]** Just do more.
**[23:11]** I'm starting to get a lot of speed up.
**[23:13]** All right.
**[23:14]** I think five.
**[23:15]** I've got it.
**[23:16]** I think they've got it.
**[23:17]** Okay.
**[23:18]** We'll go 30 more seconds.
**[23:19]** So then we'll do it together.
**[23:21]** Oh.
**[23:35]** Okay.
**[23:57]** Okay.
**[23:58]** If we're not quite done.
**[23:59]** Let's walk through this.
**[24:00]** So that our P&RQ.
**[24:03]** I'm going to calculate N, which is just their product.
**[24:05]** So what's five times 17?
**[24:08]** Okay.
**[24:09]** We've got that.
**[24:10]** Great.
**[24:11]** Which means we've already got half of our public key and half of our private key already.
**[24:14]** So that's the 85 part.
**[24:16]** Okay.
**[24:17]** We're halfway there.
**[24:18]** Almost.
**[24:19]** So then we need to calculate that oil.
**[24:21]** So that's P minus one times Q minus one.
**[24:24]** So five minus one is four.
**[24:26]** And Q minus one.
**[24:28]** The 17 minus one is 16.
**[24:30]** 14 times 16 is 64.
**[24:32]** Right.
**[24:33]** And so our oiler's totion is 64.
**[24:37]** We've almost got things down here.
**[24:41]** We've kept.
**[24:42]** We gave you E.
**[24:43]** Means.
**[24:44]** Oh, yeah.
**[24:45]** We've already got our public key.
**[24:46]** E is 13 and 85.
**[24:48]** Okay.
**[24:49]** So we're halfway home.
**[24:50]** And now the D part, the D is the tricky part.
**[24:52]** So we want to find some value.
**[24:55]** Well, 64.
**[24:57]** The remainder equals one.
**[24:59]** So the first thing we're going to try is one higher than that oiler's totion value.
**[25:04]** So we want to find a value 65 mod 64.
**[25:08]** That's going to equal one.
**[25:10]** So we take our 65.
**[25:12]** We divide it by E because we want to find a D times E.
**[25:16]** We're going to make this work.
**[25:18]** We divide it by E.
**[25:20]** 65 divided by by 13 is that a whole number.
**[25:26]** We divide it by that.
**[25:27]** 65 by 13 is five.
**[25:30]** Oh, that works.
**[25:31]** Okay.
**[25:32]** We need to hold a number.
**[25:33]** So these five are for private keys.
**[25:35]** Five and 85.
**[25:38]** That's what we do.
**[25:43]** That's the final.
**[25:44]** I usually do for one problem.
**[25:49]** Oh, questions.
**[25:54]** All right.
**[25:55]** That's, that's RSA key to it.
**[25:58]** Let's talk about the alternative to RSA, which is kind of brought up before.
**[26:03]** Because RSA is an old technology back in the late 70s.
**[26:06]** It was fiction.
**[26:08]** 60s if you're a British intelligence officer.
**[26:12]** So why do we have new stuff?
**[26:15]** Well, the new stuff is equivalent in some ways.
**[26:18]** And a little better in a couple of ways.
**[26:20]** So the new stuff, which isn't even that new nowadays, is elliptic curve cryptography.
**[26:26]** Here is kind of how that works.
**[26:29]** So as part of the algorithm and is public, you define a curve.
**[26:34]** And mathematicians have chosen a few curves that have the properties needed to do this type of thing.
**[26:39]** Okay.
**[26:40]** So these curves are all symmetric around the axis.
**[26:42]** And they look kind of like this sort of.
**[26:46]** In reality, we define the bound, the, you know, the minimum and maximum values for this curve.
**[26:52]** But we also let the curve wrap around kind of like Pac-Man style wrap around the other side.
**[26:59]** And so in reality when we're calculating these things, it looks way more like this.
**[27:03]** As things wrap around each side, we'll get to that in a second.
**[27:07]** But here's how it works.
**[27:10]** What's defined for everyone and you can see this.
**[27:13]** If you can see this as well, is there is a curve.
**[27:16]** And there's a starting point.
**[27:18]** All the generator.
**[27:19]** It's usually defined as a point G.
**[27:21]** I don't know why this visual of this.
**[27:23]** But let's pretend that this isn't, this is a G.
**[27:26]** Then we choose a point B on the curve and draw a line between us.
**[27:30]** Okay.
**[27:31]** So the line between point A and B.
**[27:33]** And we can again wrap around if we need to.
**[27:35]** And then we find the point where they intersect the curve.
**[27:40]** So the line between point A and B.
**[27:42]** Where does it intersect the curve?
**[27:44]** And then we take the negative value of that.
**[27:46]** And that's C.
**[27:47]** Then we draw a line between A and C.
**[27:51]** Okay.
**[27:52]** Then when we draw a line between A and C, we see where that intersects the curve.
**[27:56]** Take the negative value of that.
**[27:58]** And that becomes our point D.
**[27:59]** And we just go over and over and over again as many times as we want to.
**[28:03]** And see where things intersect.
**[28:05]** Draw a line from the generator over to the curve.
**[28:08]** See where that intersects take the negative value.
**[28:11]** Draw a new line and again and again and again.
**[28:13]** And mathematicians figured out that if we do this with good curves.
**[28:18]** Then you can take the number of iterations that you do.
**[28:23]** That same process of draw a line.
**[28:25]** See where it intersects.
**[28:27]** Draw the take the negative draw a new line.
**[28:29]** That's one.
**[28:30]** As you do that again and again.
**[28:32]** And if you take the number of hops, that can be a private key.
**[28:36]** And then after that number of hops.
**[28:39]** What point on the curve do you end up at?
**[28:41]** That can be the public key.
**[28:43]** Well, that can be used for cryptography.
**[28:48]** Where people?
**[28:49]** So this is an alternative to RSA.
**[28:52]** Why would you want to use this instead of RSA?
**[28:55]** Number one, it's actually way faster for computers to calculate.
**[28:58]** RSA actually takes a little time.
**[29:01]** It's way shorter in terms of keys.
**[29:04]** So remember, BYU has this 4,096 bit public key that every single time somebody wants to
**[29:11]** start up an HTTPS connection with BYU servers.
**[29:15]** They get that key as part of the transfer process.
**[29:19]** And they have to use it to evaluate it.
**[29:21]** We'll talk about that later.
**[29:22]** That's actually a lot of bits that get sent just to set up HTTPS.
**[29:27]** And if you're a BYU, I mean, that's a decent amount of bandwidth.
**[29:30]** But think about that in Google or Meta level of traffic.
**[29:34]** That's a lot of bits being sent just to set up the encryption.
**[29:38]** But we can shorten that in any way.
**[29:40]** That's a win.
**[29:41]** And ECC does that.
**[29:43]** So a 256 bit ECC key, which is pretty common still,
**[29:48]** is roughly equivalent to a 3,072 bit RSA key.
**[29:54]** You've been way more compact of a key, and way faster calculations.
**[29:59]** Win, win.
**[30:00]** Which is why big tech companies tend to be using ECC.
**[30:04]** I don't know why BYU is using RSA.
**[30:06]** How does it decide where point B is again?
**[30:09]** Are you just...
**[30:10]** That's chosen.
**[30:11]** It's in the equation.
**[30:14]** Yeah.
**[30:16]** So what is increasing when you're saying 256 bit key, you mean a private key?
**[30:21]** So I mean that the key, when you download the key, let's go.
**[30:26]** Yeah.
**[30:27]** I don't believe that.
**[30:28]** We have to be like you.
**[30:29]** We have to be like the key.
**[30:32]** Kind of big, right?
**[30:34]** Here's the public key here.
**[30:36]** There's a lot going on there.
**[30:38]** If we were to go to Google.
**[30:44]** Go and check out their key.
**[30:46]** Almost certain they're using ECC.
**[30:49]** So they're using ECC to curve public key.
**[30:52]** Here's their key.
**[30:53]** That's on a single screen.
**[30:55]** There's way more compact for the same level of security.
**[30:59]** What is increasing the length of the key change if it's a point on a curve?
**[31:03]** Is that fidelity of what one you're at?
**[31:05]** So the number of hops could theoretically increase things.
**[31:10]** Okay.
**[31:14]** Reality looks like this, and the numbers are like this.
**[31:18]** And there are only a few curves out there that have the properties that mathematicians think are acceptable.
**[31:23]** This is probably the most common curve.
**[31:25]** Two, two, two, five, five, one, nine.
**[31:27]** There's three or four ones for curves that are widely used.
**[31:32]** This is the curve used in cryptocurrency, like Bitcoin.
**[31:37]** I had that.
**[31:40]** All right.
**[31:42]** Thanks for your subscription.
**[31:43]** Ace metric encryption.
**[31:45]** We need to deal with quantum computing for a little bit.
**[31:48]** So I'm not a physics expert.
**[31:52]** I dabble.
**[31:53]** I like to be informed reasonably.
**[31:55]** I'm probably much better than your average human at understanding quantum physics,
**[32:00]** which means I know enough to realize I know nothing about quantum physics.
**[32:03]** Because quantum physics is super crazy, super fast.
**[32:06]** But I do dabble, and I like the topic.
**[32:10]** Our modern computers are based off of bits.
**[32:14]** We're doing math with bits and saving bits and moving bits around.
**[32:18]** We're really good about ones and zeros and bits.
**[32:21]** We have transistors on our CPUs that we'll deal with bit calculations.
**[32:25]** We're good at storing bits.
**[32:27]** Like on spinning hard drives, we use magnets to store bits.
**[32:30]** On our optical drives, like Lou Ray players, we use lasers to store bits and read bits.
**[32:35]** On our solid state drives, we use electronics to store bits.
**[32:39]** We're good at bits.
**[32:41]** Both of them and the routers to deal with moving bits around.
**[32:46]** Want some computers?
**[32:48]** Use what are called do bits or quantum bits.
**[32:52]** And they are not just ones and zeros.
**[32:54]** They're ones or zeros or both.
**[32:58]** And maybe also neither because they're quantum and quantum physics.
**[33:01]** And it's weird and I don't understand that, okay?
**[33:04]** But if you have enough eubits, you put them in a quantum computer.
**[33:09]** This is the inside of a quantum computer at IBM.
**[33:12]** And you look this down to approximately absolute zero.
**[33:16]** Then you can do calculations with certain algorithms.
**[33:20]** That can do a lot of weird calculations based off of probability fields.
**[33:26]** And so our calculations were one way functions, which are easy in one direction and hard in another.
**[33:33]** All of a sudden for a quantum computer become easy in one direction, easy in the other.
**[33:40]** That's a problem.
**[33:45]** Basically everything that relies on a trapdoor function.
**[33:48]** RSA, give you Helman, Olympic curve, are all totally broken.
**[33:54]** If we have a quantum computer that has enough qubits and is reliable enough has enough accuracy.
**[34:02]** And it's using a good algorithm like the shoreers algorithm, which this guy named Peter Shore, a computer scientist,
**[34:09]** developed before a quantum computer existed.
**[34:13]** They thought experiment.
**[34:16]** And everyone like he published a paper, but everything's like, whatever.
**[34:19]** That all of a sudden we start building quantum computers and people go, hey, the shore guy, he's got an algorithm that can do stuff.
**[34:24]** What can it do? Oh gosh, we might break cryptography.
**[34:29]** Now, we are four weeks ago, somebody published a paper that is an improvement on this.
**[34:36]** It might be twice as efficient as Shore's algorithm.
**[34:41]** I mean, we're worried as an industry that maybe the breaking of these encryption algorithms would be maybe like 10, 12 years away.
**[34:51]** Now, people are thinking like, you to five years away, kind of thing, which is a problem, okay.
**[35:00]** Other smart people like Love Grover created Grover's algorithm, which actually tried to attack problems that aren't really trapdoor functions.
**[35:09]** And so based off of that, they think that things that are simple math, you know, like the AS calculations.
**[35:16]** It might be a little bit easier for a quantum computer to do, maybe even like they could do it twice as fast, maybe.
**[35:23]** So that's not a huge problem, we just go, okay, AS needs to have double the key length, we'll call it good.
**[35:29]** That's an easy fix.
**[35:31]** These are not an easy fix.
**[35:33]** So, what do we do?
**[35:39]** When US government was worried that it's top secret encrypted information using DES was not good enough, what do they do?
**[35:47]** Well, the competition.
**[35:49]** What do we do?
**[35:51]** Computing?
**[35:52]** Well, the competition.
**[35:53]** So over the last few years, we've had this most quantum cryptography, PQC competition.
**[35:59]** It's been ongoing in a long time.
**[36:02]** Then a bunch of different mathematicians have submitted algorithms.
**[36:07]** They've actually submitted algorithms based off of wildly different types of mathematics, like different areas within mathematics and produced algorithms.
**[36:15]** They've submitted this competition.
**[36:17]** People around the world of kind of who are smart and care about this have poked holes at them.
**[36:22]** Some of the algorithms haven't advanced to future rounds.
**[36:25]** Ultimately, the competition's technically not done, but ultimately the competition got to a point where it's like, okay, we've got some front runners.
**[36:34]** And we're really, we're here to put quantum computers getting too powerful.
**[36:38]** Let's tentatively standardize two or three of these algorithms, while we let the competition keep going.
**[36:45]** And hopefully we can come up with some other backup options in case those end up being problems.
**[36:50]** So of these different forms of mathematics, the ones that ended up working in the tentative ratification are ones based off of code-based and mostly lattice-based cryptography.
**[37:04]** So I don't really fully understand all of this, but lattice-based mathematics is you take two vectors, okay?
**[37:13]** Like those two, those two, and based off of those vectors, those two vectors, you can pick them and you can develop a lattice, alright?
**[37:23]** So based off of the one vector, you can draw a bunch of different points using either of those two vectors to create this lattice.
**[37:31]** And our quantum resistant algorithms, again, I don't fully understand this, but they are based on the idea that quantum computers, just like regular computers,
**[37:40]** are pretty good about solving problems that have exact answers.
**[37:45]** And quantum computers are really good about solving our problems that have exact answers.
**[37:50]** And so these quantum resistant algorithms are based off of approximations and adding errors on purpose.
**[37:58]** And so if we do those things, we're pretty sure, we think mathematicians are pretty sure that these algorithms are no better than our current computers,
**[38:07]** and maybe even worse at it in the quantum computer. And we hope they're good enough.
**[38:13]** About eight months ago, Apple started in I-Message using the post-quantum algorithms.
**[38:21]** So if you've used I-Message in the last year, you've probably had encrypted data with one of these algorithms,
**[38:26]** and as far as we can tell, it seems to be okay.
**[38:32]** I don't have all the answers on this topic, but I'm happy to try.
**[38:37]** This is an expectation that quantum computing is going to be widespread, because that's a lot of the threat.
**[38:43]** It seems like it's very high level, expensive operation.
**[38:46]** It is high level and expensive, and we also don't really know who all is doing it.
**[38:51]** We know the people who are publishing papers based off of it. You know, your Google's a big player in this space,
**[38:57]** IBM is a very big player in this space, maybe even the leader. There's a few other companies.
**[39:01]** A few other private labs out there. We presume that there are governments out there that are doing stuff that we don't know about,
**[39:08]** because they're classified like the US government. We assume that they're doing stuff.
**[39:13]** But we don't really know what other countries are doing.
**[39:16]** I think that the worry is not that, I mean, I said this to the last section.
**[39:22]** I don't think anyone really cares if some hacker online who has a country has a, you know,
**[39:30]** a powerful enough quantum computer can go and break my connection with an e-commerce vendor and realize,
**[39:37]** Oh, well, it was bought a piece for a Kenmore oven this week to fix the oven.
**[39:44]** And it was a past midnight last night fixing the oven in my house, which I was.
**[39:48]** I don't think anyone really cares that they can break that.
**[39:52]** But the presumption is that the big governments of the world have been watching all of their adversaries traffic and capturing it as much as possible.
**[40:03]** And that if they can break encryption and they can go back to the stuff they've already captured and maybe get secrets,
**[40:10]** military plans, schematics, for military stuff, or it's some rogue person that's access to it.
**[40:18]** Maybe they can break the certificate, which we'll talk about probably on Tuesday.
**[40:23]** I don't think we're going to get there quite today, but we'll talk about certificates, which we looked at,
**[40:26]** and pretend to be your bank or Amazon for a few hours, and that could go very,
**[40:33]** but yeah, who has it? Who has enough of a powerful one to be able to do it? So far, nobody.
**[40:40]** But yeah, I think people are worried it's going to be completely catastrophic overnight.
**[40:46]** You don't think it is, even if these algorithms, the so far working end up not working, there's serious concerns.
**[40:56]** And what are we going to do about, like, countries that have done that, where they're just like gone, all over the country.
**[41:03]** No, I think they do.
**[41:05]** Really?
**[41:07]** Probably change the information.
**[41:11]** Hopefully the information is not up to date.
**[41:13]** You know, countries are really funny on what they want and don't want.
**[41:16]** When I taught at University of Arizona for a year, there's a guy in our ward who worked well,
**[41:22]** a bunch of people in our ward worked for Raytheon, which is Defense Contractor, makes missiles.
**[41:27]** And he was a developer, a grad of our program, actually.
**[41:31]** He shared, he was the next office over to the,
**[41:35]** but this so.
**[41:38]** And he'd go into London to talk to the Occasionally.
**[41:41]** It was really interesting. I don't think he should have shared this with me.
**[41:43]** But.
**[41:47]** That attacks that Raytheon was getting at the time ten years ago now, but the attacks they were getting at the time.
**[41:53]** We're only for one program that Raytheon was doing.
**[41:57]** They were all attacks that appeared to originate from China.
**[42:00]** And they were, I mean, Raytheon makes up billion different things.
**[42:03]** But they were only targeted at getting the schematics for the submarine.
**[42:09]** Like that was the, the one thing that attackers cared about it.
**[42:13]** And so it's chunky on what the attackers might care about or not care about.
**[42:18]** So hopefully those are still secret.
**[42:21]** I don't know.
**[42:25]** All right.
**[42:26]** That's quantum computing.
**[42:27]** We can talk more about that, but my knowledge is.
**[42:30]** Sparse pass that, okay.
**[42:32]** Okay.
**[42:33]** Let's far.
**[42:34]** We have all talked about the confidentiality peer.
**[42:37]** Part of the CIA tried and how we saw that with symmetric encryption and asymmetric encryption.
**[42:42]** But we haven't really gotten to some of these other pieces, which is also helpful from cryptography.
**[42:48]** So.
**[42:49]** Not only are we worried that Eve is going to get access to data that we care about.
**[42:54]** It shouldn't.
**[42:55]** It should be secret.
**[42:57]** You're also worried that Eve might intercept things and change the data.
**[43:04]** All right, and send corrected information along.
**[43:08]** That's a direct violation of pillar number two of the CIA triad, right?
**[43:13]** Is the integrity piece.
**[43:15]** So we want to make sure we have file or message integrity that nothing gets changed.
**[43:20]** Unless we wanted to get changed.
**[43:22]** So, but this was authorized to change it.
**[43:24]** Sure, they could change it.
**[43:25]** But nobody else should be able to change the data.
**[43:27]** And we use something called a digesting algorithm.
**[43:31]** Sometimes called a hashing algorithm produce a hash to give us integrity.
**[43:37]** Now hash is not this hash, which I grew up with.
**[43:41]** But hash is kind of like a fingerprint or an input or a file.
**[43:49]** You can't create the file from it, but it's kind of a marker that indicates that the file was exactly like it was.
**[43:56]** So we're not, let me show you this.
**[43:58]** We'll talk about some of these in particular, like Mb5, SHA1, and shot 256.
**[44:02]** I want to highlight particularly.
**[44:04]** So let's go to a site like this, and let's put in this text.
**[44:15]** So we have an input, and we're going to click the hash button.
**[44:19]** This site, all it does is it takes our input and it runs it through a bunch of different hashing algorithms.
**[44:24]** Okay, so here's our input.
**[44:27]** Here's the Md5 hash.
**[44:30]** Here's the show hash.
**[44:33]** And here's the shot 256 hash.
**[44:36]** Now, this is not as face.
**[44:38]** What's the obvious difference between these three?
**[44:41]** Some of them are longer than others, okay?
**[44:43]** In fact, Nd5, because of its length, is not considered good enough.
**[44:50]** Why is that?
**[44:51]** We'll talk about that next, okay?
**[44:52]** But I want to point out one thing.
**[44:54]** So let's look at this shot 256 hash.
**[44:56]** This is probably the most widely used hash on the planet right now.
**[44:59]** It's used in almost all cryptocurrencies, but it's also considered the easiest and fastest to commute to compute good enough.
**[45:10]** So this is kind of the best bank for your buck currently.
**[45:13]** So I want to pay attention to this hash.
**[45:15]** So right now it's 007B.
**[45:18]** We've got, and then it ends with AFAE8.
**[45:22]** And let's go and change a single character as should.
**[45:27]** Down here and look at it again.
**[45:29]** Is that a little different?
**[45:31]** A lot different.
**[45:32]** Pick up on it.
**[45:37]** We can change it back.
**[45:46]** Totally different, okay?
**[45:48]** And if we have a good hash in algorithm, it should be because a small change could lead to equally as big of a change as a large change to the input, okay?
**[46:01]** Because if it doesn't, then we can use, we can kind of go backwards to try to get information about the input and we shouldn't be able to do that.
**[46:10]** Because hashing algorithms or digesting algorithms are supposed to be lossy one way encryption.
**[46:16]** You can't come up with the input from the output.
**[46:19]** It's not supposed to work that way.
**[46:21]** It's supposed to be like a fingerprint, not a blueprint from regretting something.
**[46:26]** Okay.
**[46:27]** Down.
**[46:29]** What if we take an unlimited number of inputs, okay?
**[46:34]** A string, a giant file, even giant or file, okay?
**[46:38]** What if we have an unlimited number of inputs?
**[46:41]** And then all of those algorithms always produce a fixed length hash.
**[46:45]** So an mbmd5 hash is always the same length.
**[46:48]** A shot to 56 hash is always the same length.
**[46:52]** It's always 256 bits.
**[46:54]** Now that was hexadecimal up there, but it's always 256 bits.
**[46:57]** So if we take an unlimited number of inputs, could we ever find two inputs that lead to the same output?
**[47:09]** Okay.
**[47:10]** Right.
**[47:11]** Right.
**[47:12]** If we do it enough, we could absolutely find that.
**[47:13]** Okay.
**[47:14]** If that happened, we call it a hash collision.
**[47:17]** Okay.
**[47:18]** Means the two different inputs into the same hash or same output.
**[47:22]** That happens every once in a while.
**[47:24]** Whatever.
**[47:25]** That's fine.
**[47:26]** It just happens.
**[47:27]** Okay.
**[47:28]** But if we can force it to happen,
**[47:30]** or computationally choose that it happens,
**[47:33]** that's when we start having problems.
**[47:36]** So md5 is just too short.
**[47:39]** They're modern computing resources cloud computing.
**[47:42]** We can just purposefully make things that collide.
**[47:45]** That's not good enough anymore.
**[47:49]** Okay.
**[47:50]** Shot one was the gold standard for a while.
**[47:53]** I have a flaw in the algorithm that was discovered later,
**[47:56]** that you can force collisions to happen.
**[47:59]** All the not good.
**[48:01]** So neither of those should be used for cryptographic purposes now.
**[48:06]** Why?
**[48:08]** It's time to use Shot two V6.
**[48:10]** Different family of the shot algorithm,
**[48:13]** which doesn't have the same flaw of shot one.
**[48:16]** Okay.
**[48:17]** There's also Shot three and Blake and a whole bunch of other ones.
**[48:21]** Those are really fine too,
**[48:23]** but Shot two V6 is fast and fine.
**[48:27]** If you want to, it's not going to be on exam.
**[48:30]** You go through the math of Shot two V6.
**[48:33]** Okay.
**[48:34]** Let's talk about how we use this.
**[48:36]** Let's say that Alice wants to send a message to Bob.
**[48:39]** It doesn't care at all about confidentiality.
**[48:41]** Anybody can know this.
**[48:43]** You can know this.
**[48:44]** Totally fine.
**[48:45]** But she wants the message to get there without being changed.
**[48:48]** Maybe this is the plans for her gig.
**[48:51]** It doesn't care at all about confidentiality.
**[48:54]** Anybody can know this.
**[48:56]** You can know this.
**[48:57]** Totally fine.
**[48:58]** But she wants the message to get there without being changed.
**[49:01]** This is the plans for her big launch party for the game.
**[49:06]** If you want everybody to, who's, you know, everyone to know when it starts,
**[49:10]** where it's at, et cetera, once bring all that stuff.
**[49:15]** What if Eve has a grudge against Bob and doesn't want Bob to attend this party?
**[49:22]** She wants to change the start time or the location, the address,
**[49:27]** something about the message.
**[49:30]** That is a problem, right?
**[49:32]** So Alice is worried about this.
**[49:35]** She takes the message.
**[49:37]** She runs it through a hashy algorithm like shot 256 and produces this hash.
**[49:43]** Then what if she sends the hash over to Bob?
**[49:48]** And then sends the message over to Bob.
**[49:53]** Well, Bob says, okay, okay, I've got this hash.
**[49:56]** I can recompute the shot 256 hash on the message.
**[50:01]** Say, not really.
**[50:02]** Just run the message through the hashy algorithm and produce my own hash.
**[50:06]** Then I can check to see if those match.
**[50:09]** And if they do, what do we know about message?
**[50:17]** At least from the time that Alice got it and sent it to Bob,
**[50:21]** it hasn't changed.
**[50:22]** It hasn't integrity.
**[50:23]** Now, what if we were to do?
**[50:26]** It's then the message over.
**[50:29]** We need maybe intercept it.
**[50:31]** Made some changes.
**[50:33]** Then the hash comes through and Eve goes, I'm just going to give my new hash
**[50:37]** that I'm going to compute and send it over.
**[50:39]** Right.
**[50:40]** This isn't a perfect solution because we've got this dance of the hashes.
**[50:44]** And we've got to make sure this is right.
**[50:46]** So this is not actually how we do anything because this has some problems.
**[50:50]** But the concept of if we have something where you hash the message before,
**[50:57]** and then send the hash and the message together with to the recipient,
**[51:01]** and then they can calculate the hash and compare those two.
**[51:05]** That is a way that we can prove integrity.
**[51:09]** So, for example, what if they intercept the hash and change batch?
**[51:18]** Yeah, that's a problem.
**[51:19]** So, if they don't change the message, but they change the hash,
**[51:22]** then once Bob re-hashes the message and compares them,
**[51:27]** what's going to look like?
**[51:29]** We'll match and they'll know there's a problem.
**[51:32]** So, that's actually an okay situation because we realize there's a problem,
**[51:35]** and we can contact Alice.
**[51:37]** The real problem is if he could do bold.
**[51:41]** Yeah.
**[51:42]** That's actually how it's going to look like.
**[51:45]** Great.
**[51:46]** So, let me give you an example of how we might use this.
**[51:51]** So, let's say, how many of you have updated your systems or your programs
**[51:56]** in the last year?
**[51:57]** I hope everyone raised up their hand.
**[51:59]** Shade on you if you don't raise your hand.
**[52:01]** Update your systems.
**[52:03]** Okay.
**[52:04]** When you download something, depending on which program or your operating system,
**[52:08]** oftentimes you'll see some sort of window where it's like downloading the files.
**[52:11]** And you'll see a progress bar.
**[52:13]** Okay.
**[52:14]** And then once you download all those files or file,
**[52:17]** oftentimes you'll see the progress bar change back to zero,
**[52:21]** and they'll be a verifying or something like that.
**[52:24]** And then you'll have the progress bar will keep going.
**[52:26]** And then you'll stop again and it'll be installing.
**[52:28]** And you'll see a progress bar like that or something like that.
**[52:30]** Okay.
**[52:31]** The verification step is two things,
**[52:35]** which we can two in a minute.
**[52:38]** One of them is hashing and comparing the hashes.
**[52:41]** So, when you deliver updates for your software,
**[52:45]** hashing is kind of a thing.
**[52:48]** You'll never done like an app install on the system.
**[52:53]** One of the things that happens is it downloads
**[52:56]** and hashes and verifies the hash with what it's supposed to be,
**[53:00]** before it install something.
**[53:01]** That's just how we distribute files and updates in our modern systems.
**[53:06]** Okay.
**[53:07]** It's super important for that purpose.
**[53:10]** Here's another.
**[53:12]** What if we have a scenario where
**[53:16]** that you're trying to be a competitor to like a drop box,
**[53:21]** or one drive, or eye cloud, or box,
**[53:24]** or whatever the other ones are?
**[53:26]** So you're an online cloud file post.
**[53:31]** What if you have people upload a bunch of files,
**[53:34]** like giant files?
**[53:36]** These are like 4K video files,
**[53:39]** and yeah, you can have a different tier to charge people more of a certain amount of file size and things.
**[53:43]** But what if we've got all these files on our servers?
**[53:46]** And what if all of a sudden a file becomes very popular,
**[53:49]** and a lot of people want to store it in their accounts?
**[53:52]** Maybe some people even want to have a backup,
**[53:55]** so they store it multiple times on our servers.
**[53:57]** All of a sudden these giant files are going to take up a lot of space on our servers.
**[54:02]** What if there was a way for us to store only on copy of those files?
**[54:08]** Instead of storing 1,000 or a million copies of this very popular file?
**[54:15]** You do that with Hashing.
**[54:17]** So every time a file gets uploaded to one of these services,
**[54:22]** and Hashing, and if it matches the hash of something that we've already stored,
**[54:27]** you just say, oh, it's the same as this file with a hash on there.
**[54:32]** Don't store the file, just a little notation in our database,
**[54:36]** that it's actually this file.
**[54:38]** And do I know that that's how they do it?
**[54:41]** Because I have just fully put files that have hash collisions
**[54:46]** into some of these systems to see if it actually stores both of them,
**[54:50]** because they're actually different files.
**[54:52]** And as it turns out, it doesn't.
**[54:54]** It stores only one of them.
**[54:58]** All right.
**[55:00]** How do we actually do this in practice?
**[55:02]** We'll get to there in just a second.
**[55:04]** First of all, though.
**[55:06]** One thing we can do is called a message authentication code.
**[55:11]** Mac address, but a Mac message authentication code.
**[55:15]** There's a few different versions of this.
**[55:17]** It depends on the algorithm.
**[55:18]** There's stuff different stuff we can do.
**[55:20]** But the idea with these message authentication codes is,
**[55:23]** let's take our hash.
**[55:26]** And let's encrypt it with the symmetric key.
**[55:32]** And we've already done like a defy helmet between Alice and Bob.
**[55:35]** Let's encrypt it with the symmetric food.
**[55:39]** Okay, with me.
**[55:41]** Then we send that on over Bob.
**[55:45]** And then the message over to Bob.
**[55:49]** If Eve gets the message authentication code,
**[55:55]** she do anything with it.
**[55:58]** If you can modify it, can she read it?
**[56:03]** It's encrypted with the symmetric key that supposedly only Alice and Bob have.
**[56:08]** Well, they negotiated using defy helmet.
**[56:11]** And so Bob, and do the same thing, right?
**[56:16]** He has the same key. He can either recreate the same Mac,
**[56:21]** okay, and compare those.
**[56:23]** Or you could calculate the hash and decrypt the
**[56:27]** the Mac with the symmetric key.
**[56:30]** And then compare the hashes.
**[56:31]** Either those were.
**[56:33]** What was that?
**[56:34]** You'd for us.
**[56:35]** Does it give us integrity?
**[56:39]** Yes, because we're comparing hashes.
**[56:42]** Does it give us anything else?
**[56:43]** Yeah.
**[56:44]** I need to set a question.
**[56:46]** Yeah.
**[56:47]** Well, if we're going through all this,
**[56:49]** we're going to, like,
**[56:51]** rubble to and the hash to confirm that the messages
**[56:54]** are changed, like, for smaller messages,
**[56:57]** but it just, and that encryption on the level.
**[57:01]** It's a good question.
**[57:03]** Uh, so maybe in terms of a process,
**[57:05]** but we usually don't,
**[57:07]** the reason why we usually don't is because we usually do not this process,
**[57:12]** but the next process.
**[57:14]** don't is because we usually do not this process, but the next process. And the next process
**[57:21]** has benefits. The encryption is not one of them. And so we usually bind the next thing,
**[57:30]** we have symmetric encryption if we need confidentiality, using a faster block cipher. So
**[57:36]** the excellent question, if you can hold off a few minutes, we're going to get there.
**[57:39]** All right. So, we haven't integrity because the passes or the max match,
**[57:48]** what else does it tell us about the scenario? What do you think else?
**[57:56]** Actually, because we can either recreate the Mac or decrypt the Mac either of those.
**[58:04]** How's of that? We know that this message had to come from whomever as the shared key.
**[58:13]** They did only that person could have encrypted this Mac, which means we get integrity
**[58:19]** and, you know, authenticity. It's actually from Alice. And that's pretty cool.
**[58:28]** You occasionally do it this way. Mostly do it, but we're going to get to it a second.
**[58:32]** Now, I should also point out, we've done C and I. There's also the interruption part or the
**[58:38]** availability part of this communication. Cryptography doesn't really help with availability,
**[58:44]** so we're going to skip that. But this is the last part of the CAA try it. Okay? Now,
**[58:49]** we need to deal with this issue of one of Eve's just a gossip. She's just making up stuff and
**[58:54]** sent it off to Bob. And making up things. That goes to the authenticity or the authentication
**[59:03]** of a message. How do we know something actually came from Alice and not from Eve?
**[59:09]** We're going to get next week. We're going to get into like the basics, you know, passwords and
**[59:13]** multi-factor authentication and biometrics and we'll talk all of those things. If we have time,
**[59:17]** which I hope we do, we'll get into factor authentication, ask keys and how they work,
**[59:24]** but I do want to get into this last one next. All right? Now, a related topic to authentication
**[59:31]** and integrity is this legal concept of non-reputiation. Non-reputiation works like this.
**[59:38]** So let's say that I'm a, I'm Bob. We're going to company and we sell widgets, okay? And
**[59:45]** Alice's bought our widgets in the past, and she sends us a message that says, I need an order
**[59:51]** for a million widgets. And we say, great. We'd love to do business with you again. We're
**[59:56]** going to make widgets and you're going to pay us money. And Alice says, great. What's to that?
**[01:00:01]** And then a million widgets are made. And Alice, all of a sudden, says, I didn't make that order.
**[01:00:08]** I want those widgets. I'm not paying you. And it goes to court. Repudiation of the message means
**[01:00:16]** that Alice is repudiating, saying, I didn't say that, okay? But how can Bob prove non-reputiation
**[01:00:23]** meaning how could he prove that Alice actually set that message? If Bob could prove in court
**[01:00:30]** that it definitely came from Alice, authentic, and that it definitely wasn't changed the
**[01:00:37]** message. If it hasn't integrity, that log can prove that it definitely came from Alice, non-reputiation.
**[01:00:43]** So when we have authenticity and integrity, we can both of them, and we can prove non-reputiation.
**[01:00:52]** So let's do it how this actually happens at practice.
**[01:00:56]** All right. Alice wants to send a message to Bob. Let me care about confidentiality yet.
**[01:01:03]** Does care very much that Alice, sorry, that Bob does that it definitely came from Alice,
**[01:01:11]** and that the message hasn't integrity. So Alice is going to take the message.
**[01:01:18]** What is true? Through a hash in algorithm, like shot 256, and encrypt that message with her
**[01:01:27]** private key. We're talking asymmetric encryption again. She's encrypting that message with her private key.
**[01:01:35]** That encrypted hash with the sender's private key is called a digital signature.
**[01:01:44]** Super common. Then that message gets sent over to Bob.
**[01:01:53]** This matter of EVE sees the message. She can't do anything about this encrypted hash, because
**[01:01:58]** which key can he be used to decrypt this message? It was Alice's private key that encrypted it.
**[01:02:05]** What message can decrypt it?
**[01:02:11]** Public key, which who's public key? Alice's public key. The Bob has a public key in a private key.
**[01:02:18]** That's not involved in this process. So if Alice encrypts it with her private key,
**[01:02:25]** the only key that could decrypt it was Alice's public key. So Bob can have that.
**[01:02:32]** It's her public key. She can share it with whoever she wants. She can share it with EVE.
**[01:02:37]** So this message, we can verify that if it, we can calculate the hashes, just like we normally
**[01:02:43]** did before, we can take the hash, decrypt the message with Alice's public key,
**[01:02:48]** compare the hashes, and that gives us integrity and authenticity.
**[01:02:54]** If we have both of those, we also get non-repidiation, and that's why we use digital signatures.
**[01:03:00]** Instead of when you download your updates to your software, and I said that most of what's
**[01:03:04]** happening is hashing behind the scenes. The other part that's happening is you're
**[01:03:10]** mirrorifying the digital signature. Make sure that it actually came from Apple,
**[01:03:16]** from Microsoft, or from whomever your software update has given you that the patch's
**[01:03:22]** legitimate has integrity, but it's also authentically from who it's supposed to come from.
**[01:03:29]** Just like a church happened all the time behind the scenes. People have tried doing digital
**[01:03:36]** signatures and things like email and things that consumers use, and they just get really
**[01:03:41]** confusing for people. Great solutions for doing digital signatures to solve a whole bunch of
**[01:03:46]** our problems, and just users just aren't savvy enough to use them, so most organizations
**[01:03:52]** of them know. Behind the scenes, you're just going to choose to use it a ton of stuff.
**[01:04:04]** Maybe, yeah? Yeah, just kind of more of a comment, so like because of this,
**[01:04:08]** the digital signature is like not only make sure that something came from that person,
**[01:04:15]** but then if other people have your public key, they can send you information that only you
**[01:04:21]** get to that next. Yes. Very good. Very good. Okay. So so far, a digital signature solves
**[01:04:27]** authenticity and integrity. It doesn't give us any confidentiality. If you could totally see this
**[01:04:35]** message. So how could we add to the same scenario? How could we add confidentiality to this?
**[01:04:44]** So if we basically do the same thing for integrity and availability and authenticity,
**[01:04:53]** we still do digital signature. We want to add confidentiality in two options.
**[01:04:59]** Option one, when we normally do, use Diffy Helman first, come up with a symmetric key.
**[01:05:08]** Use the symmetric key to encrypt the message that Bob and Alice have and then decrypt the
**[01:05:17]** message at the other end. If we normally do, so if you want both three, you're going to do
**[01:05:22]** symmetric encryption for the message, asymmetric encryption for the signature,
**[01:05:29]** then we get confidentiality, integrity, and authenticity. Option two, we need all three.
**[01:05:38]** Option two is, when you do the digital signature just like before, the sender's private key
**[01:05:44]** encrypting the message and the sender's public key decrypting that, not the message, the hash,
**[01:05:50]** and then the sender's public key decrypting the hash. Then, how do we use asymmetric encryption?
**[01:05:57]** Send this confidentiality, Bob. We'll figure it out yet.
**[01:06:03]** This scenario, we have to have, Alice has a public and a private key, and Bob has a public
**[01:06:12]** and a private key. They share their public keys with each other beforehand. Then what do we do?
**[01:06:21]** We sort of combine them, but how do we combine them? So,
**[01:06:28]** asymmetric. So, here's our works. We do digital things just like before, okay? So,
**[01:06:34]** rehash the message, Alice uses her private key, it gets sent over with the message that's encrypted
**[01:06:39]** which we get to in a minute, then it gets decrypted by Bob using Alice's public key, rehash,
**[01:06:46]** and then verify. Okay, saying that's the same thing. But the message, we're not using the
**[01:06:51]** defy helmet key, that's actually used to be encrypted along the way. It's what we do.
**[01:06:56]** Use the recipient's public key to encrypt the message, and who can decrypt that?
**[01:07:07]** Only the recipient's private key, only Bob, with his private key. We have to use asymmetric
**[01:07:15]** encryption, like RSA, to do the messaging encryption. That's how we do it.
**[01:07:21]** Oh, she still use RSA, then. Or something. But still use RSA. Turns out, ECC doesn't really do
**[01:07:28]** option of messages, but it can do digital signatures. So, we most of the time, we just do
**[01:07:35]** symmetric for the message. So, when you go, we're going to go to this next time. I think
**[01:07:41]** it's not from a few people leaving, and I is getting a little low in this super hot room.
**[01:07:44]** I think we may call it in a minute, but you don't ask about game to go read for. But
**[01:07:51]** most of the time what happens when you go to do HTTPS, you do RSA to verify authenticity,
**[01:08:00]** actually be why you actually your bank, that is actually your e-commerce vendor or whatever.
**[01:08:05]** You do RSA or ECC for that part of it, and you do Diffie Helman and AES or Cha Cha for the
**[01:08:13]** encryption of the messages back and forth. You combine asymmetric and symmetric because you take
**[01:08:18]** good aspects of each to do the jobs that they're actually designed to do best.
**[01:08:26]** All right, if that's confusing, we're going to do almost all of that last little part
**[01:08:31]** again at the beginning of class. Probably other sections wanted to get to it and we'll start with that,
**[01:08:37]** but to it's important enough and a little confusing enough, that I think you need to think on it
**[01:08:43]** over the weekend as you chair for teams, but also we'll recap this because it's really important.
**[01:08:48]** Any questions before we'll just call it? Yeah, it's a term for this.
**[01:08:54]** We're going to be on ensemble over in the machine that I guess we're going to turn on. It's on
**[01:08:58]** ensemble at different tools for different. It's a good question. Is there a term for
**[01:09:03]** Ashing in RSA and? I mean, there probably isn't, I might have to either remember or think about it.
**[01:09:18]** When you negotiate the TLS at the outset, it's called the Cypher Suite,
**[01:09:25]** but I don't know if that's actually the term here. I'm not sure. It's a good question.
**[01:09:34]** Anyway, we'll pick up right here next time. Look for a, well, get the lab in the suit tonight.
**[01:09:40]** Look for a new lab, late late tonight or tomorrow morning, and then we'll meet on Tuesday,
**[01:09:44]** and talk more about the situation at this.
**[01:10:14]** So I finished by the depth of the plot and see a Josh.
**[01:10:24]** I'll think of what I'll do if he gets to.
**[01:10:30]** All right. We can't, I don't know.
**[01:10:38]** All right. How long have our rules? It's not like, you know, all the rules, right?
**[01:10:44]** I mean, I don't know. I mean, I don't know. I mean, I don't know.
**[01:10:58]** I mean, I don't know.
**[01:11:08]** I mean, I don't know.
**[01:11:14]** I mean, I don't know.
**[01:12:00]** I mean, I don't know.
**[01:12:16]** I mean, I don't know.
**[01:12:32]** I mean, I don't know.
**[01:12:50]** I mean, I don't know.
**[01:13:06]** I mean, I don't know.
**[01:13:28]** I mean, I don't know.
**[01:13:38]** I don't know what it means, but yeah, you're filing.
**[01:13:44]** He's a professor.
**[01:13:52]** I mean, I don't know.
**[01:14:08]** I mean, I don't know.
**[01:14:24]** I mean, I don't know.
**[01:14:36]** I mean, I don't know.
**[01:14:52]** I mean, I don't know.
**[01:15:04]** I mean, I don't know.
**[01:15:24]** I mean, I don't know.
**[01:15:52]** I mean, I don't know.
**[01:16:08]** I mean, I don't know.
**[01:16:20]** I mean, I don't know.
**[01:16:36]** I mean, I don't know.
**[01:16:48]** I mean, I don't know.
**[01:17:04]** I mean, I don't know.
**[01:17:16]** I mean, I don't know.
**[01:17:32]** I mean, I don't know.
**[01:17:56]** I mean, I don't know.
