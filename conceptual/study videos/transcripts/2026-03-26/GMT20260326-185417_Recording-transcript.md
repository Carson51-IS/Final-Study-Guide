# Study session transcript

**Source:** `GMT20260326-185417_Recording.m4a`
**Detected language:** en (probability 1.00)

Auto-generated with faster-whisper (Whisper **tiny**, CPU). Expect minor errors.

---
**[00:00]** I promise we're going to start by talking about dark web.
**[00:17]** So.
**[00:18]** The dark web is empowered by who sort of related technologies that are kind of used
**[00:30]** independently of each other.
**[00:31]** Though in this most famous is called Toilver or the Onion Router, there's an alternative
**[00:35]** to that we're going to make the focus on core that we're going to use.
**[00:39]** Or as an acronym, it stands for Onion Router.
**[00:43]** It's the end of minute why we're talking about onions because it's all about layers.
**[00:48]** Layers, in this case, of cryptography.
**[00:50]** When we talk about the dark web specifically, there are terms that kind of get used.
**[00:56]** The top of this little iceberg here is the surface web, but we're commonly called the
**[01:01]** clear web nowadays.
**[01:04]** This is the part of the internet that is publicly accessible to anyone.
**[01:08]** You can just type in your browser and get information.
**[01:11]** Things like news sites, home pages, blogs, things like that that are publicly accessible
**[01:17]** to anyone on the planet who can just use a web browser.
**[01:21]** Then there's a whole bunch of content, probably much larger than the clear surface web of
**[01:26]** something called the Deep Web.
**[01:28]** These are things that you have to be authenticated to access.
**[01:32]** You have to be pay money, have an account, have an organization, this is company private
**[01:39]** data, this is academic library stuff.
**[01:43]** Be where you pay, I don't know how much money.
**[01:45]** Probably millions of dollars a year to the library subscriptions that it subscribes to.
**[01:49]** You can't just access those things online.
**[01:51]** You have to actually have a subscription to that.
**[01:54]** Enough that is just internal data that you've got to access.
**[01:58]** Your email, for example, tons of tons of data that you've got to have an account in
**[02:02]** order of the access.
**[02:04]** That's the majority of the internet nowadays.
**[02:06]** Then we have this dark web section, which is just web servers and other servers, but
**[02:13]** it is only accessible through a service like to or an anonymized service, which we're
**[02:18]** going to talk about next.
**[02:20]** There's a lot of stuff there, which is why it's sometimes called the dark web.
**[02:25]** Now, from a technological perspective, I think it's pretty interesting.
**[02:30]** Let me talk at a high level how this works.
**[02:32]** There's some nuances that are complicated, but the high level, I think, is very understandable
**[02:36]** to you now that you've got cryptographic background.
**[02:39]** Let's say you've got a computer in front of you right here, and your computer has a client
**[02:44]** on it that can access tour.
**[02:46]** That's how to do this algorithm stuff.
**[02:50]** I'll show you just a minute what that looks like.
**[02:52]** Then we've got a server over here.
**[02:54]** This could be a clear net server, right, web page of somebody or a new site, or it could
**[03:00]** be a server that's configured only to be accessible through the dark web.
**[03:05]** Both of those are options.
**[03:06]** It could be either of those.
**[03:08]** You want it from your client, you want to go to this server.
**[03:12]** First thing you do is you talk to a server that's not in this diagram, and you say, hey,
**[03:17]** I need a route through the tour network.
**[03:20]** We call that a circuit, I need a circuit through the tour network.
**[03:24]** That server says, okay, great, let me give you a list of servers, and you're going
**[03:27]** to go in this order.
**[03:28]** You're going to go from here to this one, to this one, to this one, and then out to the
**[03:32]** final destination.
**[03:33]** That's your circuit, if you're path through this network.
**[03:37]** The other thing that server gives you, gives you the list of servers you're going to
**[03:41]** hit.
**[03:42]** But importantly, it gives you their public keys, so each server has a public and a private
**[03:49]** key pair, and when you get the list, you get this server in this order and their public
**[03:54]** keys.
**[03:56]** Okay.
**[03:57]** And then here's what you do.
**[03:58]** Thank you, message, but it's an HTTP request for this server and a web page or something
**[04:04]** like that.
**[04:06]** And you say, okay, hey, tour browser, tour client, I'm going to go to this web server,
**[04:11]** I want to do an HTTP Git request to all your stuff.
**[04:16]** And all the stuff that your client does, is it says, okay, let's start at the very last
**[04:21]** node in the tour network where we're going to go out to the server.
**[04:24]** We call the last one an exit node or an exit relay or an exit router, but this is this
**[04:30]** one.
**[04:31]** And we're going to use its public key and wrap our HTTP request in cryptography by encrypting
**[04:38]** it with its public key.
**[04:41]** And then we're going to go to our second to last node and we're going to take our encrypted
**[04:46]** art and encrypt it with its public key.
**[04:50]** And then work our way backward, encrypting in layers of encryption using the public key so
**[04:56]** that it looks like this, encryption encryption encryption encryption around us central
**[05:00]** or message that's going out to the internet.
**[05:03]** And then when we send our message to the first node or first onion router in this network,
**[05:10]** it's called a guard node or an entry node sometimes.
**[05:16]** And this node says, okay, great, when you expect the message, can I decrypt the outer layer
**[05:21]** and peel the onion by one layer?
**[05:24]** Oh, yeah, sure, I can, because I've got the private key that's associated with that.
**[05:27]** And then it sends it on its way to the next node and then it decrypts that outer layer
**[05:33]** and then sends it on to the next one until finally it gets to the exit relay and it decrypts
**[05:37]** that last layer and all you're left with is an HTTP request and it'll go, oh, great,
**[05:42]** I'll send that out to the server.
**[05:46]** All of that encryption and decryption and changing of the routes for every single one,
**[05:51]** changing the circuit.
**[05:52]** The whole point of that is to provide anonymity.
**[05:56]** There's no guarantee of confidentiality and as the message comes out here, it's whatever
**[06:03]** you sent it, okay?
**[06:05]** It doesn't have to be confidential.
**[06:06]** It could be over HTTP instead of HTTP S.
**[06:09]** It could be over HTTP S, that's fine.
**[06:10]** And that as an additional confidentiality, but it doesn't guarantee confidentiality, but this
**[06:16]** encryption and mixing things up, we hope if Tor is working as it's supposed to.
**[06:23]** The users of it hope that this message, you can't look at it and go, oh, it came from this
**[06:30]** client.
**[06:31]** The whole process provides anonymity.
**[06:34]** Yes.
**[06:35]** How is this different from VPN because it seems really secure, like why wouldn't we just
**[06:40]** use Tor all the time?
**[06:41]** Yeah.
**[06:42]** So good question.
**[06:43]** So Tor is slow and inefficient, so that's one of the reasons why our guard is fast and
**[06:49]** very efficient.
**[06:52]** Also people worry about VPNs because VPNs might keep logs, especially free ones.
**[06:58]** In fact, some of the VPNs like Mulvad and Proton, like one of their real things is we don't
**[07:04]** keep logs and here's our audit report from somebody saying, hey, they don't keep logs,
**[07:09]** whereas some of the free clients do and these Tor notes don't keep logs.
**[07:16]** You just can't keep them so free.
**[07:18]** So the idea is that the VPNs might not be as privacy promoting as you think they are
**[07:24]** in some cases, but some are.
**[07:26]** So it's just slightly different problems.
**[07:29]** Oftentimes, the hackers will combine that VPNs to the access Tor to go through a proxy server
**[07:36]** to chain these things together to keep themselves as private and anonymous as possible.
**[07:42]** Good question.
**[07:43]** All right.
**[07:44]** Also, for the endpoints that are only accessible through the Tor network, there
**[07:52]** is a DNS like service called dot onion, okay?
**[07:56]** It's not DNS, but it's like DNS and a lot of the sites that we will go to in just a
**[08:01]** second.
**[08:02]** You'll see these really long URLs that are dot onion, the really long URL is actually
**[08:08]** just a shot 256 hash, right?
**[08:10]** So this is a hash that is distributed so you know where to go in that network.
**[08:16]** Kind of like DNS, but not behind the scenes, it's very different.
**[08:21]** You've shot 256 hash is just like a Bitcoin hash where you can add the nons and then
**[08:25]** rehash things until you get a certain number of zeros at the front of it, and the similar
**[08:30]** kind of thing that you can do for these onion URLs.
**[08:34]** And so some companies and organizations try to have a certain thing at the beginning of
**[08:38]** their shot 256 hash to look all cool.
**[08:40]** So there's some vanity ones, we'll see as we can.
**[08:44]** Let's go to the dark.
**[08:48]** My point in going to the dark web in class is not to encourage you to spend your time on
**[08:56]** the dark web.
**[08:58]** But it's to show you what types of things are available there, especially if you're
**[09:04]** a cybersecurity professional in the future, and some of you will be, oops, we'll
**[09:08]** close Slack before we do that.
**[09:15]** Let's go to.
**[09:29]** So I want you to be aware of generally what kind of things happen on the dark web,
**[09:42]** and also it's really an important place if you become a cybersecurity researcher, which
**[09:46]** I'm not.
**[09:47]** I do research, but I don't really research cybersecurity very much.
**[09:50]** So I understand what's going on, what are the hackers doing, how are they behaving, what
**[09:55]** new exploits that they found, what they're using, and so forth.
**[09:59]** Now, what you can see here, it's a little bit messy, this is a fork of the Firefox browser
**[10:06]** that's called the Tor browser.
**[10:08]** There are other clients, but it is the main client to access Tor, which is the browser.
**[10:13]** So it's Firefox plus the stuff that does all the cryptography to talk to Tor.
**[10:18]** Also, by default, certain extensions get installed, this one happens to have the no script
**[10:25]** and the next extension, which if you go through the Tor network to BYU.edu, website without
**[10:31]** JavaScript looks like this.
**[10:34]** BYU's website is not good if with much JavaScript, but one of the things you'll see is
**[10:39]** this is the path that this client went through the circuit to get to BYU, right?
**[10:46]** We went through some ridge or guard server, and then we went to Germany, and then another
**[10:53]** server in Germany, and then over to BYU.
**[10:56]** So this is way that we can go through the Tor network to a clear net website, BYU's home
**[11:02]** page, to a regular site, and BYU, for all types of purposes, BYU thinks we're coming from
**[11:07]** Germany.
**[11:09]** All right, now, on the dark web, sites kind of come and go, sometimes they're up, sometimes
**[11:16]** they're down, depends on if they're in some jurisdiction where their server is legal
**[11:22]** or not legal, and whether they need to move servers to avoid the quality issues, and so
**[11:28]** sometimes these sites will be up, and sometimes they won't.
**[11:31]** Let me show you some of the sites on the dark web.
**[11:33]** This is a carefully curated list to try to not show you any objectionable content.
**[11:38]** I don't recommend just to really nearly go into the dark web and start exploring.
**[11:43]** You will come across bad stuff.
**[11:45]** So this is called the Hidden Wiki, the Hidden Wiki is kind of the unofficial home page
**[11:50]** of the dark web.
**[11:52]** It is a silly little wiki that is kind of a curated list of the most popular sites on
**[11:58]** the dark web.
**[11:59]** You can kind of see those.
**[12:00]** We'll go to many of the sites that are listed here.
**[12:03]** There are mirrors of this hidden wiki all over the place, but one thing you might notice,
**[12:06]** I know the text is super small, you might notice that the URL is really, really long and
**[12:12]** dot onion, that's because this site, this version of this site, is only accessible through
**[12:17]** Tor, only accessible through the dark web.
**[12:20]** So let's go to a few different categories of things.
**[12:23]** So first of all, here's one of a few sites that we'll go to where you can buy stolen credit cards.
**[12:30]** So if you want to buy stolen credit cards, these won't happen to also have international
**[12:33]** ones.
**[12:34]** If you want to get a stolen credit card from Europe or Asia, this might be how you go and
**[12:39]** do that.
**[12:40]** Here's another one, buy some cards along the way, medium balances, high balances, low balances,
**[12:47]** they have different prices.
**[12:49]** Here's if you want to buy stolen PayPal credentials that have been verified to work
**[12:55]** and the amount, so what the balance is, and variety, whether it's associated with that,
**[13:03]** one of my counterfeit currency, it's a good way to get the secret service coming to your
**[13:06]** door, but if you can avoid that, there's US dollars, there's euros, that counterfeit
**[13:13]** euros.
**[13:14]** If you want to buy stolen Apple products, iPhones and MacBook Pros and so forth, you can
**[13:21]** buy a Vision Pro, or you can see them pretty good deal, right?
**[13:26]** Vision Pro, you don't have a Vision Pro or what I'm going to say, maybe you can use a Vision
**[13:33]** Pro, maybe it's your small one, just like here's an escrow site where you can put money
**[13:39]** into escrow and get a little trust through the site, it looks like this one's down
**[13:43]** right now.
**[13:45]** One of the primary uses of the dark web is for purchasing drugs, there are many sites
**[13:50]** to do so, here's one of them, it means since psychedelics, prescription drugs, this
**[13:57]** one, which is a sister site to the other one, that's psychedelics, there's this one,
**[14:03]** which has been up for really, really long time, apparently high quality marijuana if you're
**[14:08]** in the Netherlands, that one's down right now, this one is, let's see if it's just
**[14:14]** down to barely, this one is for fake IDs, so you could buy fake IDs, off-hand actions
**[14:20]** done in Bitcoin, almost all of them, yeah, or some cryptocurrency, yeah, why is something
**[14:27]** like a physical, where do you, yeah, so what do you do with something physical, so in
**[14:31]** some countries, US has been cracking down on this, people do things like boxes, you know,
**[14:37]** that are shipped to a PO box, not an actual address, but mostly what happens with physical items
**[14:43]** is you're basically rolling the, there's a lot of packages shipped around the world to dice
**[14:49]** and only so many drug dogs and so much inspection, so you're basically running a D1,000 and
**[14:55]** hoping not to hit a doubt, not one, basically, and for physical goods, there you go, you have to
**[15:04]** give a much shipping address, if you want to buy something online, yeah, and what if I
**[15:11]** have, like, I don't know if and Steven is a thing, what if it's a, what does it call,
**[15:17]** what if it's a sting sign, like, yeah, so how much of this is run by the FBI or Interpol,
**[15:22]** we don't know, but you know, just like in the real world, people get reputations for being legit
**[15:29]** or be narks, right, you know, sites that persist tend to be ones that actually deliver on things
**[15:35]** and get a reputation for being legitimate, but occasionally they're not, occasionally it's a long,
**[15:40]** long term FBI operation, so I'm always surprised, I mean, there's, there's people in my life that
**[15:47]** have some wisdom issues, and I'm always surprised at how they always have a supply, making
**[15:55]** always access things and get things, and some of that might be through the long way.
**[16:00]** I'm curious, because of URLs, you're so weird and different, how do you go about finding
**[16:04]** or saving or, yeah, so there are search engines specifically for the dark web,
**[16:09]** again, you know, a stray to paths that you shouldn't wander down on search engines there,
**[16:15]** but they exist to find stuff. There are also acronyms and just forums online,
**[16:21]** the US actually took one of the main ones down about weeks ago, but there are forums online where
**[16:26]** people are information and chat about these things. Yeah, it would do, I think interesting
**[16:32]** when you do, it's like a stolen credit card, would you use a PayPal account, bought that,
**[16:36]** I stuff with the, with the ship at somewhere else. Yeah, PayPal tends a lot most of that down,
**[16:42]** but it depends on your country here, and actually, so, yeah, you don't hear,
**[16:47]** I'll imagine obviously that this is all decentralized, so what, actually, some of it is a little
**[16:53]** centralized, they just happen to be in jurisdictions that don't care about it, because like all
**[16:58]** servers not in the US, for example, these relay routers, like if I wanted to run one of these routers
**[17:04]** for you, you know, these circuits, you can download this software, that's all right,
**[17:07]** then the, the, the, the tors software are very distributed, yes, the individual servers are
**[17:12]** wherever they're at. So there is an organization, there's an organization, the, the
**[17:19]** tors organization, I forget what's called officially, but that, that you can become a torn note,
**[17:24]** easy, this download run, which is like being a bit, no, it's download the software and run it,
**[17:28]** you're operating. Is there a financial incentive to do that? Like, why, why, why are they running
**[17:33]** these routers? Most people do do it, believe in privacy and anonymity, and just kind of,
**[17:41]** uh, mean the cost themselves, and being an exit relay in most places in the West, especially in the
**[17:48]** US is a dangerous game, because if any traffic goes through you as an exit relay, out to the
**[17:54]** internet that has bad stuff in it, then the FBI comes and has a chat with you, even if it's
**[17:58]** you just run in the exit relay, so it's a, it's a game, yeah, here they're here. Um, or, yeah,
**[18:06]** donors and Bill, like Bitcoin started like early 2010s, right? Yes, yes, somewhere there,
**[18:14]** so what happened before that? Just cash before that. Uh, so I'm not as well aware of that.
**[18:20]** Somebody asked this morning in similar kind of question. I think some people are using credit cards
**[18:24]** with that, um, no, no, no, no, no, no, no. It's absurd by today's standards, but there also
**[18:29]** wasn't the tracking and fraud detection and stuff that credit card companies used today. So I think
**[18:35]** there was some credit cards going on, which is crazy, uh, and then also something like, okay,
**[18:40]** let's actually have a central meet-up place in this big city, after you do the transaction to do
**[18:46]** the, to sort of like a mixed list kind of thing or cancel, classify, it's kind of thing,
**[18:51]** on the manual transaction. You'd buy a stolen credit card number from a company that sells all those
**[18:56]** credit card numbers are just digital, right? You, you pay them something, and then you get it,
**[19:02]** digitally. Yeah, but you would give you a credit card number to a company that sells it.
**[19:06]** Correct. And you hope that they're being secure with it.
**[19:11]** What easier with Bitcoin and crypto. Maybe it's just a different,
**[19:16]** it's like a different subject, but I just know like in movies, let's talk about like offshore
**[19:20]** accounts or wiring, that's not cryptocurrency or not. So that's just the legal frameworks in certain
**[19:28]** countries is financially different. And so like there's famous places like Switzerland for bank
**[19:36]** accounts that can be anonymous, that, uh, this was seemed to be okay with. And in the Cayman Islands,
**[19:44]** where there's not a lot of taxes and not a lot oversight for money wiring and so stuff that
**[19:49]** can be wired in various places, there are, and, sexually, some similarities, but distinct.
**[19:55]** wiring just isn't, I have question I just have. Remember, there were never no amendments.
**[20:00]** Is it just like a transfer? It's just a money transfer. Yeah, so I'm not an expert in this,
**[20:04]** but in my life, I have a lot and sold one home and bought an additional home. So I've
**[20:11]** only ever owned two homes. So I've been involved in three money transfers or wires, money wires
**[20:16]** in my entire life. And it's just go to the bank and talk to the banker for one minute, so then
**[20:23]** verify that all the numbers are right before they get sent, so that the money's going to the right place.
**[20:31]** I'm sure it's way more complicated if you're Swiss bankers, but it's just a
**[20:35]** one. It's just a transfer. Yeah, I've got many people are being word nodes, but then it
**[20:39]** want to be X nodes. Can you choose what they're not your next a note? There are far fewer X
**[20:44]** nodes. Okay, let's look at a few other categories. So we've got some that are down,
**[20:53]** this one's down also. So I'm going to grab a passport. Here is a US passport for four
**[21:00]** four grand to grab a US passport. Well, this lights down now. And then most countries in Europe
**[21:07]** have handgun bands, but there are places to make your things up. You're in there, there's also
**[21:13]** ability to get things that are a little more exotic. If you're in the UK, UK is actually very strict
**[21:18]** on guns unless except for certain hunting purposes, even for law enforcement. So handguns are
**[21:23]** really hard to come across. There's those that site, these ones are down today. And then here's
**[21:30]** actual reddit, but it's only through the dark web. They have a vanity one that starts with
**[21:36]** www.reddit.org. A lot of money. There are a lot of computing resources in order to get that
**[21:43]** vanity one. But this is actual reddit. This isn't currently working, but this is actual Twitter.
**[21:50]** This one, none of our what this one was, but it's not up right now. This is actual CIA.
**[21:57]** This is actual BBC. Why would a reddit or a Twitter or formerly Facebook, but I couldn't
**[22:06]** get them to work today, or the CIA, or BBC news, why would they have a only accessible through
**[22:12]** the dark web presence? Great thoughts, any questions, ideas? Yeah, so that you don't do.
**[22:19]** So you're cool. Yeah, there's some straight credit, especially with the CIA. I mean, if you want to
**[22:23]** work with the CIA and you're familiar with the dark web, it's not about a place to talk, yeah.
**[22:30]** I'm sharing certain countries, there's political reasons. Absolutely, back again. You see,
**[22:36]** are the pretty stellar reputation of being pretty unbiased and pretty accurate in terms of
**[22:43]** its news and it just wants to get the news out and make money on the way, but get the news out.
**[22:48]** And so if you're in an area of the world where news is a little bit more controlled,
**[22:53]** the first amendment is not very strong or existing in your country. If there's an
**[22:58]** oppressive authoritarian regime, maybe you don't have access to good information. And this is
**[23:04]** one way to do that. In fact, I think, well, personally, that's like the silver lining of
**[23:09]** tour. The question for me that is, is all of the bad stuff and there's bad stuff that we're
**[23:16]** not going to and the stuff we are going to. Is all of that stuff is it balanced at all by the fact
**[23:22]** that who are in countries that can't get access to information or oppressive regimes can do that
**[23:28]** through tour, perhaps, is it balanced it out? For me, the answer is generally no, bad stuff is
**[23:36]** far worse. But for some people, that's the reason for tour existing and it's okay in their books.
**[23:42]** Yeah, and he has it's like anonymized. You cannot regulate that some of the bad stuff.
**[23:47]** You can regulate as far as you could regulate. So if there are people in other countries,
**[23:52]** it's hard to regulate but not impossible depending on your relationship with other countries.
**[23:55]** Servers live somewhere. Some of the things that happen is people try to de-anonymize
**[24:03]** these things based off of traffic patterns and things. But on the snow and leaks, there are a
**[24:09]** couple of things we know. Well, one of the NSA was doing, but also a couple of things that the NSA
**[24:14]** really hated. One of them is tour. It probably generally works.
**[24:24]** All right, a couple of other things before we move on to something else. Let's see.
**[24:29]** If you're someone who's getting cryptocurrency maliciously or maybe illegally on the dark way,
**[24:35]** you know, either through ransomware or selling illegal things, you can see all those transactions
**[24:40]** online, right? And so some law enforcement could put things together based off of prices and
**[24:45]** matching and things like that. And so what if you want to mix all that in money up? Hey,
**[24:50]** a service. There's a bunch of different services on the dark web. You pay them some fee.
**[24:55]** They take your money and then they take other people's money and they mix it up with hundreds of
**[25:00]** thousands of other transactions around. And then ultimately, they can funnel it to different
**[25:05]** addresses at the end. And then it in theory with volume is hard to track to you in the end.
**[25:12]** Well, the services that will take a chunk of your money for that. There's Bitcoins. You can buy
**[25:17]** online. I don't know what a freshly minted Virgin Bitcoins is, but they've been by them.
**[25:22]** Here's Proton. If you haven't come across Proton before, we're going to customer of Protons
**[25:27]** before. Proton is a privacy-focused security-focused alternative to kind of like Google Workplace,
**[25:35]** they have mail that's very like Gmail. They have a cloud storage that's very like Google Drive.
**[25:40]** They have docs and sheets that work very like Google Docs and Google Heads,
**[25:44]** but they're also not gathering your data and selling it to third parties.
**[25:49]** It's not a bad service if you're interested in it, but it is cost. Where's Google is not?
**[25:53]** You are all in this one. Is that an example of why?
**[25:56]** So this is also a vanity one. Now Proton mail is accessible on the clear web and on the dark web,
**[26:01]** but you're all as different. That was a hash, did they have to spend some time in order to get
**[26:06]** that Proton mail at the beginning, for sure. Here is the Bible online in case you're in an area
**[26:14]** where the Bible is censored. There are countries in the world where that happens. So this is
**[26:18]** available on the dark web. People consider that a good thing. This site seems to be actually not
**[26:25]** up to date anymore. It used to be a good source of what are the ransomware groups and what are
**[26:29]** their sites on the dark web and we could go and see all the ransomware groups. In the last 24 hours,
**[26:33]** I've tried, I don't know, maybe 10 of them and they've all been down. So this site might be out of date.
**[26:37]** But this one is still up because the Ragnar locker group, which is one of the worst ransomware
**[26:44]** groups a few years ago, their site got seized by Interpol. And since then, has had this consistently
**[26:51]** up and so you can see that law enforcement does get involved and take some of these sites down
**[26:56]** over time. And then let's see, it's section one. They wanted to go to Amazon. So here's us going to
**[27:02]** Amazon in this case through some nodes in United States. And then this site hasn't been fully
**[27:09]** up today. I don't know why, but this one's called the Imperial Library of Trantor. It's a reference
**[27:14]** to a science fiction book. This is a site that has illegal copies, but non-DRM copies of like
**[27:23]** most books that have come out in the last 100 years or so. Now they're illegal. But if you're in
**[27:31]** an area of the world where books get banned and you can't access books, is it unethical or immoral
**[27:37]** to access books? I think that's more of an open question. And so this is a way to access things.
**[27:45]** Anyway, that's the dark web. Again, there's lots of bad stuff. I don't do this to show you
**[27:51]** where you should be spending your time during in-text week. But I think you should be at least aware
**[27:57]** that a lot of shady stuff happens here. There's also forums where people share hacking techniques
**[28:02]** and targets and word lists and personal information about you if they can get it. And you know,
**[28:09]** this is a place where that exists, please. It's in here also just writing your own VPN to the
**[28:14]** result of the connection on your laptop. So the tour website is blocked on campus. We found out
**[28:23]** in section one that if you install using home brew, it's not blocked on campus. But tour has some
**[28:32]** clever tricks to get around blocks. So you could still access tour resources from campus,
**[28:37]** BYU, you might wonder what you're doing in some cases. But I am connected to my home computer
**[28:43]** through VPN and then for just to make things, so people using VMs or virtual machines to
**[28:50]** access tour sometimes. But it really depends on what you're trying to protect against. Like if
**[28:56]** you're trying to like protect against downloading something while you're on tour, like, I mean,
**[29:01]** I would be heavily skeptical download anything while you're on tour. But yeah, if they're
**[29:06]** looking could solve certain problems with that. It's one of those websites. I want to look
**[29:14]** very like steady. No, you're laying. It's just like dark web has always been that way.
**[29:20]** And have you ever looked like your self up on the dark web see what's there about?
**[29:26]** So I have just been a long time. I did take a peek at one of the data dumps of passwords
**[29:34]** a while ago. I had an notification for my password manager or from Google that my password
**[29:39]** had been leaked on the dark web. And I was like, let me see if I can find it. This is 10 years ago.
**[29:44]** And I did find where my email address had been leaked. But it was also in a file that flagged
**[29:50]** passwords had been cracked in which one's held. It's been cracked yet. And mine was on the
**[29:54]** not yet cracked list. And I had a really good, like, you know, 20 characters. Well, leave this
**[29:58]** word like, okay, I'm good. You know, so I guess the answer to your question is yes, but it's
**[30:04]** been a while. So then this guy go here, then you're a lady, ladies first. Ladies first.
**[30:11]** Okay. That was super high. That's not a cool. Yeah. Ask it for a friend. Yeah.
**[30:15]** Yeah. There's a play. There's a random person. I want to see, you know, like,
**[30:19]** bruised and look from around. Like, you shouldn't say biggest concerns. Like, they're not going
**[30:24]** to buy anything. They're just. Yeah. So I would say the biggest concern, you know,
**[30:29]** start with the hidden bit. You know, and you could find out what the unenadresses for that
**[30:34]** on the clear web. And there's ways of finding that. And then the biggest concern, though, is
**[30:41]** I have carefully curated sites using, because I wanted to show students the dark web,
**[30:47]** but I started doing this maybe six, seven years ago. Like, I started with it's file extensions that
**[30:53]** would block all images. And then go through a few of the sites of being like, okay, is there any
**[30:59]** content that seems like it would be objectionable here? And if it wasn't then turn off the blocker
**[31:04]** for temporarily, just make sure there's no photographic images or other stuff on there. You know,
**[31:10]** I think I've got a reasonable tour that has avoided that, but you can go down. I versed paths
**[31:16]** according to the scriptures pretty quickly. That would be quick. It's concern. So the little
**[31:23]** iceberg, eventually you said, says that like 96% of the internet content is in our web about
**[31:30]** them. And no, no, no, that doesn't say that. 96% is either clear web or behind a password or pay
**[31:38]** wall or web parts tiny. Okay, okay, yeah. That number's probably out of date, but it's relative
**[31:45]** proportions are the dark web as t. Okay. Now there's search engines for the dark web and you can
**[31:50]** actually see sites. It's not nothing, but I mean, we're talking hundreds of billions of pages
**[31:55]** of accessible through their web or behind paywalls. We're talking thousands of pages on the dark web.
**[32:02]** I mean, it's like orders of magnitude difference. Maybe hundreds of thousands, but not millions.
**[32:07]** Yeah, I got two quick questions. One, do you feel like the dark web is grown? And
**[32:12]** percentage staying the same. I don't know if I don't strong enough position. Okay, like I show it
**[32:17]** in class. I think it's useful. The last time I was on the dark web was a year ago in this class.
**[32:22]** I'm not really a resident of the dark web. It's my impression is that it might be shrinking
**[32:29]** slightly because sites often take it down by a interpole. But I don't, I don't know, I'm all
**[32:34]** of, I had to really say that. Nice. Of course, at students in a full job, very constantly would say,
**[32:42]** like, oh, well, that's what I remember if anonymous would say, you know, please.
**[32:47]** Okay, so it's not illegal to go to it. It's not. And put it up. I feel okay.
**[32:53]** And for hours and stuff. So it's like, what is illegal? Is it based off?
**[33:02]** The store is in the laws there? Sure. It's good. Yeah. So it's, I mean, it's wherever you are at
**[33:07]** in your jurisdiction. Now, at online is always a fuzzy term. But it's usually where you're currently
**[33:13]** physically located and where the end point might be located as to whether illegal behavior has happened.
**[33:20]** Why understanding is that showing you this in class is fine. You, why you might go, what are
**[33:26]** you doing? But probably not fire me. Well, and if I start buying stolen credit cards, then
**[33:31]** certainly, you know, that's illegal to buy stolen credit stolen goods in this country and
**[33:36]** most countries. So yeah, I would just depend on who we handled to jurisdictional things.
**[33:41]** For me, it would be the US and Utah and Utah County. And then, sorry, follow up.
**[33:48]** After you got it all set up, is it as simple as just like clicking an app? Sure. Yeah. So the
**[33:54]** torque browser is just, it's just download, fire up, fire fox. But it happens to be torque browser
**[34:00]** and then go to the URL. And it's very easy. I just like go to like some, I mean, you could use
**[34:07]** it as a regular browser. It just, but then if you want to go to the sites that are the dot onion
**[34:11]** sites, you have to know where they are and go there and hidden what he's a good place to start.
**[34:17]** Maybe one more question than we need to to move on a little bit. Yeah. So let's say someone
**[34:22]** who's in a country or a location that's suppressed wants to get into the dark web,
**[34:27]** you know, to have that information. And it needs to install the tour, the countries like track,
**[34:35]** who's installed it eventually. Yeah. So for a while there, there were lots of taking
**[34:40]** USB drives and like helicopter dropping them with like the tour browser and lots of
**[34:45]** entries and things like that, you know, supposedly in sites where they'll put USB flash drives
**[34:52]** in like walls like gloom and walls so you can like plug your laptop in and grab stuff like movies
**[34:56]** like they do at North Korea to like share movies across the order and things,
**[35:00]** supposedly tour browser often is included in some of those bundles, but yeah, you can track it and try
**[35:05]** to block it. All right. Again, the whole point of this, not to encourage you to spend a lot of
**[35:12]** your time on tour, but just to be aware of things that are happening and the cryptography
**[35:20]** that runs tour is pretty cool. So all right. Last time we did blockchain, I want to talk about
**[35:26]** this concept of stegonography. Why? That's fine.
**[35:42]** Okay. So historians think that there's this guy in around 440 BC called Herodotus that
**[35:51]** did this thing that we, I think everybody considers crazy. This is both Caesar Cypher, like hundreds
**[35:57]** of years before Caesar and at the whole point that he wanted to take military instructions from
**[36:04]** some headquarters and then send them way out to the front of the battle like a week or two away
**[36:10]** by, you know, by horse, how do you end up doing that and keeping your information secure?
**[36:16]** So the scheme that he came up with was, he would take a slave, he would shave their head,
**[36:24]** had to the instructions on the slave's head. We had a couple of days for the stubble to fill in,
**[36:29]** and then send the slave with some soldiers the two week march or whatever arrived out to the
**[36:35]** battlefront where he would then have the military commander would have the slave shaved and then
**[36:41]** they'd read the instructions from headquarters. It's a crazy story. But this is the first known
**[36:48]** example of what we now call stegonography, which is hiding data sort of in plain sight but within
**[36:54]** something. And so the modern equivalent of the shaving of the head is let's take some data and
**[37:03]** see if we can hide it inside of some other data, like a file or something like that. The most,
**[37:09]** I think clearest way and probably most common way of doing this nowadays is through images.
**[37:15]** So let's say we've got an image. I'm not about images in their formats before in some of the
**[37:20]** limitations, but images are essentially what is the color and in some formats transparency of this
**[37:26]** pixel and then what's the color and transparency of this pixel in this pixel and this pixel just
**[37:30]** again and again, right for every single pixel. And so let's say we've got a like five megapixel
**[37:36]** image, not that big, by today's standards, so which is five million pixels. Okay, and okay,
**[37:43]** so we've got five million pixels. We're each pixel. We might have 16 bits or 24 bits worth of
**[37:50]** information for the color of the transparency. Let's say we've got 16 bits. How many of you
**[37:56]** doing web development? You were to change the RGB code by one number. You tell the difference between
**[38:06]** those colors. If you change it by five, I probably couldn't tell the number. If you change it by
**[38:12]** 10, I could definitely tell the difference. But if you change it by one number, that's really not
**[38:17]** that much of a change for most people. And what if you do that, like just just take, you know,
**[38:23]** those 16 bits for each pixel, and let's just change the last bit. We call it the least significant
**[38:30]** bit, the last bit, the one to a one or zero, but a one or zero in there. Our choice, that allows
**[38:35]** us to store one bit worth of data in that one pixel. We've got five million pixels. That's a lot
**[38:44]** of bits, like we can store some stuff in there. That's how our modern stegonography tends to work,
**[38:50]** is that type of process doesn't have to be an image, but that's the most common way. So let me show
**[38:55]** what I did.
**[39:09]** No. A while ago, I took some very simple code and it's not very long. It just uses this one
**[39:16]** library. I'll post this code for you so you can see it and play around with it. And I don't know
**[39:21]** if you remember, but you might have seen this image before. So if you were to download this image,
**[39:33]** and run it through the same code, but in reverse, you would have found, along the way, this
**[39:42]** document stored inside of that file, which had your entire exam and all the answers in it.
**[39:52]** And if you had found it, totally fair game. So all the answers to the exam were just posted in the
**[39:57]** image on that rootkift.rebeared.log website. And that's my stegonography example. So it's awesome.
**[40:08]** Interesting, original image to see if we can tell any different. So okay, so this one is the original.
**[40:14]** Let me pull up the other one. The one, this is the one that has data in it.
**[40:22]** He's a, every pixel is off by like one little point of color. And not even every single one.
**[40:29]** If it started as a one, it got encoded as a one. It stays exactly the same. It's just this
**[40:35]** where they switch. You just use that as data. So they're basically exactly the same.
**[40:40]** All we have extracted that. What would we have extracted? I mean, I sort of rely on the fact that
**[40:46]** you probably wouldn't have. What's the one doing? So if they knew there was new. So there are sites
**[40:52]** that will just grab data and check to see if there's stuff in there. Now the trick with this one
**[40:57]** is I do encrypt it with a, yes, before I stash it in, which is really hard. So you can't really throw
**[41:02]** it in a site unless you do that. But the password was just root kit, root bear. Or maybe it was just
**[41:08]** root bear I'd have to double check. But you know, you could have guessed the password. You could have
**[41:11]** heard, there's somebody's section one who right before the midterm was like, hey professor,
**[41:15]** well, I heard you do this thing where you hide the answers. I heard from a student last year.
**[41:20]** Are you going to do that this year? And I was like, I don't know, but I haven't done it yet. And
**[41:23]** then I went home and I was like, oh, I'm definitely doing that today. So anyway, now here's my warning
**[41:31]** to you. I had a student, I've been doing this probably six, seven years in a row now or something
**[41:37]** similar to it. Last year I just put the image up on Slack. But before five years ago, I had a
**[41:45]** student come to me after finals week ended and just say a professor well as I just bought
**[41:50]** your exam for the finals or anything I can do and we had a conversation and part of the conversation
**[41:55]** I said, okay, well, you know, there's not a lot I can do at the end of finals week, you know,
**[41:59]** but let's talk about how you studied for it and what do you do and then it ended up being,
**[42:05]** hey, I didn't actually study for your exam. I spent about 10 hours searching for it in
**[42:11]** English. So I could try to find the exam and I, you know, I just might stomach sank because I didn't
**[42:17]** do any stécodography for that final of that year and the person had just spent all of their study
**[42:23]** time looking for that. So because of that, we had a long conversation after that, but because of that,
**[42:31]** if I choose to use stécodography between now and the last minute of finals, I will tell you an
**[42:38]** advance, okay? If I don't say anything, there's no stécodography on the final or an
**[42:43]** index or anything. I will definitely tell you if we're doing stécodography and you should definitely
**[42:47]** study for the final. Okay, yes. How do you, I understand you can absolutely what's going on,
**[42:54]** I don't understand technically how you get a message on to an image. Yeah, so what's the process?
**[42:59]** So I happen to be using a library that does a lot of the heavy lifting for me. I have written my
**[43:04]** own code before, but this library is faster, but better. Oh, better, my code, go. I was in right
**[43:12]** of, thank you. So I'm using this stéco helper library, which is really nice, but all it's doing is
**[43:20]** it's taking an input image and it's reading the input image in and I've got a file for the out to
**[43:26]** write out and then it's taking the hidden text, I just put the exam into a text format and it's just
**[43:33]** okay, I've got this much data, I've got to, you know, I've got to use this many pixels to change,
**[43:37]** it's just reading one pixel at a time and flipping the color and then writing that file out.
**[43:42]** It's actually pretty simple. If you were to write your own code or look at their code,
**[43:46]** it's not actually that long. I will say, I have used stécodography briefly on the final
**[43:55]** in the last two or three years, a couple times, but I've been very explicit. Here are the three
**[44:01]** images and here's how you need to go find the passwords first and then run the code that I'm going to
**[44:06]** give you with those images. It's more of a password hunt than a stécodography, but you do have to
**[44:11]** click the run stécodography button. I don't know if I'll do that in the final this year, but
**[44:15]** I've done that in the past. Yeah, here then here. Yeah, so it's the library, what's mapping,
**[44:19]** like what pixel to what character. The library just does that for me. Yeah, just says,
**[44:24]** give me an image and a hidden file and I will stash it in there and then hand you back into
**[44:29]** an image format and you can save it yourself or the reverse. Yeah. I don't know if the answer is
**[44:33]** no, but is there any way for anyone who's trying to intercept the message to even know the
**[44:38]** pretty pretty tricky if you encrypt it with something like AES. It's really hard. But I assume that
**[44:44]** you say fly agencies are trying, and I say it's probably trying to find that if you're trying
**[44:48]** over or I ran or whatever is doing anything like this, I don't know. I guess how they know that
**[44:52]** image has even been altered because tricky to find out. Yeah, very tricky. So. All right,
**[45:02]** let's, you've got a couple more minutes. Let's start our conversation. You know, we've got five minutes.
**[45:08]** So, not a whole lot. Start our conversation. That's enough cryptography. Let's start talking
**[45:13]** about privacy very briefly. We won't get too far, but I want to make sure we hit a little bit.
**[45:19]** In the other sections, we had about 10 minutes of privacy. We'll be a little a few minutes behind.
**[45:24]** That's okay. We'll kind of feel the next time. So, privacy is a topic that is often associated
**[45:31]** with cybersecurity, but they're usually talked about distinctly. And in companies, there's often
**[45:37]** a privacy person or group and a security person or group. And those are often different titles.
**[45:43]** We occasionally have students go and work in privacy jobs. And then privacy is actually a really
**[45:48]** active part of law. And so we've had a few students who've gone to law school after our program
**[45:55]** and gone in the bachelor's. I've written, I think, re-letters of recommendation and everybody got
**[46:00]** in, I think. And so, you know, if you want to do privacy law, that's actually a pretty active
**[46:05]** place to be in. So, the five minutes we have, let me at least start making the case
**[46:12]** where why you might want to care about privacy even if you don't currently care about privacy.
**[46:17]** Okay. So, privacy just definitionally is having a desire to control information about yourself.
**[46:25]** Sometimes we refer to personally identifiable information or PII. That's a legal term in this
**[46:31]** country of data that can identify you, like you're a security number or your name or things like that.
**[46:38]** Those are personally identifiable pieces of information. And those are legally protected by certain
**[46:43]** laws. But privacy can mean even more than that. So, let's talk about this argument first.
**[46:50]** There are people of May the argument, hey, if I'm not doing anything wrong,
**[46:54]** why do I care if anyone knows about it? Okay. I think that's a reasonable argument.
**[46:59]** Back when the Snowden stuff came out that the NSA was snooping on all the US citizens illegally,
**[47:04]** the community and Stephen Colbert said, if you're doing nothing wrong, you have nothing to hide
**[47:08]** from the giant surveillance apparatus the government's been hiding. It's funny, but also
**[47:15]** those sad and terrifying. You know, that we're all being spied on, but it's a matter if we're being
**[47:20]** spied on. We care if the US government knows about us. The CEO of the former CEO of Google
**[47:27]** and former Chairman of the Board at Google said, hey, if you have something that you don't
**[47:32]** want to ever even know about, maybe you shouldn't be doing it in the first place. And then
**[47:36]** famously, not a camera, but supposedly multiple times Mark Zuckerberg has said that privacy is dead.
**[47:43]** Some question is, is it dead? Especially in our era of social media when people just
**[47:49]** put that fun line, do we care about privacy? Let me, let me, for at least two or three minutes,
**[47:54]** we have make two arguments for why privacy might matter still and why you don't have to agree with
**[48:00]** me, but you might consider other privacy matters to you. Okay. Number one, we're going to
**[48:06]** come follow me. We're going to be very soon getting to the Exodus period and we'll talk about
**[48:11]** the tabernacle and all the components that go into it and how things evolve in terms of our
**[48:16]** temple worship over time. Isn't privacy at all in the tabernacle? Places that only certain people
**[48:23]** could go and conversations only certain people could listen to. Yeah, we think so, right? There's
**[48:28]** a holy place that I'm most holy place and we have a couple conversations that happen in
**[48:32]** their inscriptions and we think that matters. How about in the temple? We like to use this phrase
**[48:40]** it's not secret, it's sacred, but it's kind of secret, right? We're not supposed to talk about it.
**[48:46]** There's just times in which certain information is supposed to stay in certain places and
**[48:51]** not be shared. How about in here? What when you're chatting with a bishop or an ecclesiastical
**[48:57]** leader on some sort? In this country, at least most countries, this is actually a privileged
**[49:04]** conversation. I mean that a court can't force your bishop to testify in court about something you
**[49:10]** said in this meeting. The only exception to that is if there's a child abuse that's brought up,
**[49:16]** the bishop is a mandated reporter as our educators like myself and a whole bunch of other people,
**[49:20]** police officers and so forth, right? So if child abuse comes up, there's an exception,
**[49:24]** but any other conversation in this office is privileged. We care about privacy. In fact,
**[49:31]** there's a section of the handbook on keeping this confidential. One of my intentions is that
**[49:39]** privacy matters because it better allows people to repent. We totally believe Adam and Eve
**[49:45]** in the garden that they're hiding themselves, even how we want to do things. We also
**[49:52]** realize that some people just make mistakes. Why are we going after, you know, what somebody said
**[50:01]** 15 years ago when they were 13-year-old punk kid, right? Why are we stopping them from getting a job
**[50:07]** or running for public office or whatever? Don't we believe in repentance and change, you know,
**[50:13]** with that? Do we think that people's sins in these meetings should be shared broadly?
**[50:21]** Or is that only necessary to help with the repentance process? I think privacy matters here.
**[50:28]** And then the last thing we'll maybe say before there are one minute we have,
**[50:34]** this may be sacralidges. I'm sorry. I'm going to heavily editorialize these scriptures. There
**[50:39]** was a couple times where Jesus said, hey, let's keep this on the down below. Okay.
**[50:45]** We're going to do a miracle, but I want you to tell anybody about this. Of course,
**[50:49]** what immediately happened? I'm told everybody about this, okay. Now, was Jesus using reverse
**[50:54]** psychology to try to spread the message? I don't think so. I think there were just times,
**[51:00]** but I think there are times when Christ was like, okay, we're not, we're not quite ready yet.
**[51:05]** You know, I've got to put some things in place, you know, for the ministry to go forward,
**[51:09]** and there's times where we maybe shouldn't talk about stuff. That's okay.
**[51:14]** So, all right, we're out of time. I will try to convince you a little bit more next time
**[51:19]** that maybe we should care about privacy, even if we're not criminals. And even if we don't care
**[51:25]** if we put our silly TikTok dances online, maybe that's okay, but maybe we should care about privacy
**[51:31]** generally at least a little bit. Okay, and we'll talk about what tech companies are doing and not
**[51:36]** doing. So, we'll finish up there. Thank you for your attention, and I will see you next Tuesday,
**[51:42]** when we'll do more in-text prep. If you've got any of your lab problems, let me know. All right, thanks,
**[51:47]** all right.
**[51:51]** Please, just text in.
