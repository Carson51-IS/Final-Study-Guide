# Study session transcript

**Source:** `GMT20260326-202307_Recording.m4a`
**Detected language:** en (probability 1.00)

Auto-generated with faster-whisper (Whisper **tiny**, CPU). Expect minor errors.

---
**[00:00]** Okay, so last time we skipped over or this, and I want to make sure that we understand
**[00:15]** what we're talking about here, so tour is one of the two technologies that allow you
**[00:22]** to access what we now call the dark web. It's the most famous, it's the largest, it's
**[00:27]** the one that's more important than simplistic to understand, so we're going to talk about this,
**[00:31]** there are some competitors but tourists the big one. So tour is an acronym that stands for
**[00:36]** the onion router, and the reason why it's called the onion router is because your message is
**[00:42]** get routed through its network, not exactly in the same way as routing at layer three works,
**[00:49]** but similar concept, but also we wrap things up in layers of cryptography, and then we peel
**[00:56]** the layers off, we'll see that just a second, so that's the concept of the onion. So there is this idea
**[01:02]** of data and servers and things on the internet, this chart may or may not be accurate in terms
**[01:10]** of the number on here, but the concept is pretty much. There's a bunch of data that is sometimes
**[01:16]** called the surface web, sometimes called the clear web, the idea is anyone on the planet with a
**[01:22]** browser can access the surface web. These are new sites, these are blogs, these are people's
**[01:28]** home pages for businesses and so forth, but then there's also more data that is only available
**[01:37]** if you have a login or your paid subscription to something, right? So this is company data,
**[01:44]** this is your email, this is a transaction data from what you've purchased history with an
**[01:51]** e-commerce vendor. This is the stuff that if you go to the BYU library and search for books and
**[01:56]** academic articles, it's the stuff that BYU pays millions of dollars a year for people on campus
**[02:01]** to be able to access those resources. It's all the stuff that's behind pay walls and authentication,
**[02:06]** and that's the majority of the internet is behind that. And then we have a little tiny piece
**[02:13]** that we call the dark web, and the technologies are still the same, we're still got web servers,
**[02:18]** we still access it through web browsers and similar technologies, but in order to get here,
**[02:24]** we have to go through what we call an anonymizing service like tour or competitors, okay?
**[02:31]** So the same kind of thing, but we have to get there a slightly different way, not hugely
**[02:36]** different but slightly different, okay? All right, let me, there's some nuances here that we're
**[02:42]** not going to get into, but let me high level talk about how tour works, especially with the
**[02:48]** cryptographic site. So let's say we've got your computer sitting in front of you and you've already
**[02:53]** downloaded the tour client. The one that allows you to use the tour network. The most common tool to
**[02:59]** do this is called the tour browser. It's just a fork of Firefox with some extra stuff added,
**[03:03]** and that's what I'll be using in just a minute and when we go to the dark web, okay?
**[03:07]** For browser, download of tour browser is blocked on this campus. Although we discovered an
**[03:13]** section one, if you install on a Mac through home route, not blocked. But you've got your client
**[03:21]** all the way set up. Over here, you've got a server, just a web server, okay? And your web server
**[03:26]** could be a regular server, just out on the internet, on the clear web, or it could be a server that's
**[03:32]** only accessible through the dark web. You can go through the dark web or through the tour network
**[03:39]** and get two regular servers. We'll do that as well as get two servers that are only accessible
**[03:44]** through the dark web. Okay? So let's say we want to go to this website and we craft our HTTP
**[03:50]** get request. I'm doing with that. Yes. Here's what we do. Our client here, our tour browser is going to
**[04:00]** say, okay, you're going to do a HTTP get request. I can do that. Well, in order to use the tour network,
**[04:05]** we got to set up the tour stuff. So first your client talks to a server that's not in this
**[04:11]** diagram. I should put it in the diagram. It's not in the diagram. Talks to a server that says,
**[04:15]** I'm going to give you a path you're going to take through the tour network. We call that a circuit.
**[04:21]** The circuit, it's going to take through the tour network. And the circuit is simply go to this
**[04:27]** server than to this server, than to this server, than to this server, and then out. Okay? So it's just
**[04:33]** ordered path through the network. That's the information you get from this first server. Okay?
**[04:39]** Now, these servers, we sometimes call them relays. That's what they are in this diagram.
**[04:45]** But we also sometimes call them tour routers or onion routers. Okay? They are devices that
**[04:52]** act like routers, but we're really just bouncing from server to server to server. The really important
**[05:00]** part is the list you get about your circuit, your path, go here, go here, go here, go here, go here,
**[05:06]** and then out. Isn't just the IP addresses of these servers, which it is, but it's also the
**[05:13]** public keys of those servers. So you take your get request and you say, okay, on my list of circuits,
**[05:26]** I'm supposed to end up with this relay, or this server is called an exit server, an exit node,
**[05:33]** an exit relay. The one that I exit the tour network and go back to the internet on.
**[05:39]** I'm going to take the public key for this server. And I'm going to take my HTTP get request and
**[05:45]** encrypt that rapid encryption with the public key of the server. Okay? Then you take the second to the
**[05:53]** last server and use its public key and encrypt it and add another layer of encryption.
**[06:00]** And then you take the third to the last and use its public key and encrypt it all the way back to
**[06:06]** the entry server, sometimes called the guard or the bridge relay. Okay? Then you send your message
**[06:14]** out to the tour network. First to the first one on your circuit list and then the server here says,
**[06:21]** okay, I got a message. Does it have encryption on it? Oh, it doesn't have encryption on it.
**[06:25]** I wonder if I can decrypt it with my private key. We peel that first layer off the onion and then
**[06:33]** send it onto the next node. And then the next node uses its private key to peel off the next layer
**[06:40]** on the next layer as we go through this network. Until ultimately, we take this layers and layers
**[06:47]** and layers of cryptography and then the exit relay takes off the last tour cryptography.
**[06:54]** And we're left with whatever the person crafted originally at their client and HTTP requested
**[07:00]** this case and then he goes out to the internet. There is no guarantee here of confidentiality.
**[07:08]** If you use an HTTP request, anyone could snoop on that. Okay? The whole point of this cryptography
**[07:17]** and bouncing around and changing circuits every time is that tour is an anonymizing service.
**[07:24]** Not a confidentiality service, but anonymizing service. People watching right here can see what
**[07:31]** traffic is going out onto the network in the clear, but the whole point is hopefully if everything's
**[07:36]** working properly, they don't know it came from here. That's why people used it. It's for anonymity.
**[07:45]** Yeah, I just kind of repeating back, just to make sure I like understood it correctly. So the
**[07:52]** the circuit gives all the public keys for the route that you're going to take.
**[07:58]** So the client gets a list of, here's your circuit. It's going to go here, here, here, here, here,
**[08:03]** and by the way, here's the IP addresses of each of those, here, here, here, here, here, here, here is
**[08:06]** and the public keys of all those, here, here, here. And then it just it works the way backwards,
**[08:11]** yeah, each of the public keys and then each time again. You've ripped in crypt encrypt, and then
**[08:15]** as the message goes, decrypt decrypt decrypt decrypt decrypt decrypt decrypt. Okay, yep, there's
**[08:21]** okay. Along the way, we can use regular DNS to go to regular sites. One for the sites
**[08:30]** that are specifically only accessible through the dark web, we don't use DNS. We use an alternative
**[08:36]** to DNS called a onion or a dot onion service. You'll see these as we go to these sites
**[08:42]** in just a second. The URLs look really, really long for these sites because they're actually
**[08:48]** just shot 256 hashes. They're really long, and we don't have a hierarchical DNS service.
**[08:57]** There's just shared hash tables in order to use the dark web, because you just grab these
**[09:02]** shared hash tables and get the information on the IP addresses rather than use a DNS server.
**[09:07]** So, conceptually, they act similarly behind the scenes totally different in terms of how they work.
**[09:14]** You'll also see probably the URLs are really hard to see in this browser, but
**[09:19]** you might also see the beginning of some of the dot onion addresses. We'll actually say a word
**[09:26]** or a couple of words. That's because somebody has spent a decent amount of computing power,
**[09:31]** kind of Bitcoin mining, trying to come up with a vanity URL that actually says what they want
**[09:37]** it to say at the beginning. So, there's the ability of using things like a nons in order to change
**[09:41]** your URL to get what you want it to say, at least to some extent. All right, let's go to the dark web.
**[09:50]** And, all right, wait for this one. So, we don't do this. We're the express purpose
**[09:59]** of giving you something different to do during in text week.
**[10:04]** Point to this is one. The cryptography that runs in is pretty cool.
**[10:09]** We're going to talk about privacy in just a minute, and privacy in anonymity are pretty carefully correlated.
**[10:16]** Number three, if you decide to go into cybersecurity, and maybe not that many of you will,
**[10:21]** but some of you will, you probably should be at least aware of what happens on the dark web,
**[10:28]** the nefarious things that happen there, and security researchers often go to the dark web
**[10:34]** to see what the hackers are up to, and it's just a place where information can be found.
**[10:39]** So, let's start here. This is, can you see? So, this is just a fork of Firefox
**[10:49]** that also has the tour stuff built in and a cup one or two extensions already enabled. So,
**[10:55]** this one has for sure the no script into extension enabled. So, JavaScript can't run,
**[11:00]** because JavaScript could theoretically find out information about where you are like your IP address
**[11:04]** and things like that. And so, JavaScript typically is not run when you visit the dark web.
**[11:10]** If you want to see, here is the circuit that this device took to get to its destination.
**[11:17]** So, a game from this browser to a bridge network at this IP address to the Netherlands, to Luxembourg,
**[11:23]** to other relays that we don't even know about, I don't know why I did that,
**[11:28]** often all the way to our final destination. So, this side thinks we came from somewhere else,
**[11:36]** maybe Luxembourg, but maybe somewhere else, okay? This is called the hidden wiki.
**[11:41]** You can actually find the clear web version of this. So, here's a normal hidden
**[11:46]** the hidden dashwiki.org. So, here's the, the clear text version of it,
**[11:50]** but here's the dark web only accessible version of the hidden wiki. Notice that the URL
**[11:55]** is a whole bunch of gibberish.unyen. So, a really long URL that's just a shot 256 hash.
**[12:03]** This is kind of a curated version of the most popular places on the dark web. So, it's not an extensive
**[12:09]** list of everything, but there's a whole bunch of here's how you can get to stuff on the dark web.
**[12:16]** Lots of stuff in here, some of it totally benign, and a bunch of it related to illegal stuff, okay?
**[12:26]** Let's go through a few categories of things that can be found on the dark web. So,
**[12:31]** here's a site where you can buy stolen credit cards. So, if you want to buy a bulk, you know,
**[12:38]** that's a 10 or 50, you can buy stolen credit cards. If you want one specifically from
**[12:43]** Europe or Asian, here's once you can buy from Europe or Asian, if you want other cheap cards,
**[12:49]** here's cheap cards with, these are debit cards with balances that are either low or medium or high,
**[12:56]** and you buy those and they're not directly on them. So, how do they track about them? It depends
**[13:02]** on what you're doing, but almost all transactions on the dark web are done with Bitcoin or cryptocurrency.
**[13:07]** So, it is trickier to track this. Well, in the card after, like, each chip to you, or these are
**[13:15]** just digital, these numbers, and you're sorry, it's live by money. If you have money to buy a card,
**[13:23]** it's just going to have off of the line. So, the amount you pay for a stolen credit card is
**[13:29]** lower than its balance because there's risk in it being deactivated before you actually use it,
**[13:34]** or being flagged as fraudulent, and the transaction not going through. So, it was saying,
**[13:38]** people, it's essentially, it's dev income and the risk involved. Here's PayPal accounts that
**[13:47]** are active confirmed that you could buy a PayPal account, or to use that one. If you want to buy
**[13:52]** counterfeit US dollars, in a way to get the secret service to visit you, but in theory,
**[13:58]** there are counterfeit dollars or counterfeit euros. If you want to buy stolen apple hardware,
**[14:05]** just iPhone, smacks, MacBook Pro, etc. That services that act in escrow so you can pay money,
**[14:14]** and they can hold things until the transaction actually completes to make sure everything's safe,
**[14:19]** for people, yes, please. Okay, so I know like you have this giant numbers of a URL,
**[14:26]** but how do you even like find that? So, if people are deciding, I want to go to the dark web.
**[14:32]** How do you like, yes, so there are certain that the hash is, so most people, most people start,
**[14:39]** people start with the hidden wiki, so if you just Google or use a search engine for hidden wiki,
**[14:43]** you'll come across this site on the clear web, and then they will have the link to the dark web
**[14:49]** onion version of that, which is right here, and then you can kind of start there. There are search
**[14:55]** engines specific to the dark web. You have to be very careful. I've carefully curated this.
**[15:02]** The first time I went to the dark web before class, people will assume that I'd go to the dark web a lot.
**[15:07]** The last time I was there was one year ago in this classroom, and so I'm not there very often,
**[15:13]** but the first time I went there, I installed a bunch of extensions in order to block all images,
**[15:19]** in case there was bad stuff on them, and then I'd like look at the page and see if it was likely to
**[15:25]** have bad stuff on it, and if it wasn't, I'd turn off the extension really quick and see if
**[15:29]** there was like looked okay, and then I'd add it to my list of okay stuff, and if it looks bad,
**[15:35]** I'd remove it, so I want to give you a very carefully curated clean version of this.
**[15:41]** If you decide to just start searching, you can go to diverse paths as the scriptures say,
**[15:47]** pretty clean way. Let's not do that. That's your question.
**[15:53]** It's another hand. Yeah, everybody like layers of VPNs usually when you X. So I'm not running layers
**[16:03]** of VPNs, but I am connecting first through a VPN and then through tour. It's good enough for me
**[16:10]** for now. I'm also not very purposely not downloaded anything other than the web page that's not
**[16:16]** running any scripts. I think it's probably fine. So it's my work computer anyway, right?
**[16:26]** Well, see, OIT has never come after me. If they do eventually.
**[16:31]** Yeah, the network web also sometimes has sites that come in and out, sometimes a site,
**[16:36]** especially when that runs something illegal, might need to change where its server is hosted,
**[16:41]** depending on if it gets busted or not, whether it comes back or not,
**[16:45]** sometimes it's open. So every year I open up last year's list and go,
**[16:49]** I don't have to have a mirror now down. Let me find a few others that could be added to the list.
**[16:54]** So the next category, probably one of the most common uses of the dark web is to find
**[17:02]** illegal drugs. So the site sells a variety of different illegal drugs. They have a sister site
**[17:09]** that also sells just psychedelics. To this site, I'm not very aware of how this works,
**[17:15]** but apparently this site has been up and reputable in the Netherlands for a really long time,
**[17:21]** selling marijuana. And there's a whole bunch of sites that will sell that to you. Now, if you are
**[17:28]** having things shipped physically to you, not just getting a credit card number that you buy with Bitcoin,
**[17:33]** there's additional risk, because we're dealing with the gold addresses. Even if you have a
**[17:38]** PO box, which in the US has been cracked down on a lot, there's still running a risk. So you're
**[17:44]** basically, if you're buying something physical, let's see how we go. You're basically rolling the dice
**[17:49]** that the volume of packages set through FedEx or USPS is just high enough, and the number of
**[17:57]** drug-sifch niffin dogs is low enough, that the inspection rate is low enough. In the other sections,
**[18:03]** I said, it's basically rolling a D-10,000, and hoping you don't get a net one. And let me don't
**[18:10]** tell you. So people just like you fake names and stuff. Sometimes fake names, but real address is
**[18:15]** oftentimes. It looks like a couple of these sites are down. Here's if you want to buy a passport
**[18:23]** for the first time. So moving into another category in Europe, it's actually built to come across
**[18:35]** handguns, but on the dark went and find them. The site's been up for a really long time. There's
**[18:41]** also things that are a little more exotic. If you want to buy the little more exotic things,
**[18:46]** the UK is extremely restrictive on handguns, firearms in general, even law enforcement rarely has
**[18:53]** guns. And the UK, you have to be part of a special unit to have a gun. Almost everybody just has
**[19:00]** batons, guns are highly highly restrictive. Yeah, how does someone go about the just trying
**[19:07]** means? Are they just buying servers from Amazon? Yeah, so if you're going to run a dark web
**[19:13]** server, you have to run it in a place where you're not going to get shut down. Now, there's nothing
**[19:19]** illegal about having a server on the dark web. You could run a dark web server through AWS.
**[19:26]** You just can't run an illegal business on a dark web server in the US. So my suspicion is that
**[19:35]** this site is not US hosted. I'm not sure on that. I'm going to guess it's a pretty strong
**[19:42]** yes, that it's not hosted in the US. Probably in some jurisdiction that US does not have an
**[19:48]** extradition agreement with them that US inderable don't really have any say.
**[19:53]** That is your question. Yeah, it goes back to Luke's question earlier. How do you go about
**[19:59]** getting the weapon that you buy anonymously? Yeah, it becomes less anonymous when you have to
**[20:04]** ship it. So you've got a roll the dice on shipping it somewhere or shipping it to an intermediary that's
**[20:10]** willing to take it and finalize the transaction with you in person, kind of a KSL market place
**[20:17]** meet up kind of kind of vibe. Our sketch and KSL market place. Yeah, yeah, no, no, no, no.
**[20:27]** That's true. Great, Craigslist. Oh, thanks book Marketplace. That's the sketch you want. All right.
**[20:33]** Our next category, we have actual Reddit, accessible only this this way is only through the dark web.
**[20:41]** Obviously, in Gaxas Reddit, real wet. They've spent a lot of resources to server resources on getting
**[20:46]** WWW. Reddit tour as the start of their custom kind of vanity address. We've also this was not
**[20:53]** upright now, but Twitter was at least at one point accessible fully through our web. We have actual
**[21:02]** CIA and we have BBC news, actual BBC news. So the question is, why would Twitter, I don't
**[21:12]** Facebook was down earlier. Facebook also is accessible through the dark web only.
**[21:17]** Well, and clear web, but through dark web through an in link. Why would the BBC and Twitter and
**[21:22]** Facebook and CIA and Reddit? Why would they have dark web only connections?
**[21:28]** Yeah, please. I'm guessing if you're like in a country where you don't want to
**[21:32]** have no, let people know that you're on BBC or Facebook or whatever. Yeah. It's an
**[21:37]** anonymizing year. There's a decent percentage of the world's population that doesn't
**[21:43]** enjoy the first amendment, you know, benefits that we have in this country, right? Where they can't
**[21:49]** always go to a reputable source of information. They live in an authoritarian regime. They, you know,
**[21:54]** they're getting misinformation from the sources that are in their government and so forth. And the
**[21:59]** idea is, BBC news, whether you like them or not, they have a pretty good reputation of being accurate
**[22:05]** and pretty unbiased. They want to get the information out there and want to access that information
**[22:11]** and see what's actually going on. Some of the things with Reddit and Facebook and Twitter,
**[22:17]** these also allow people who are in places where their government crackdowns to be able to
**[22:21]** maybe organize peacefully protest to try to change things, you know, for the better in their,
**[22:27]** their government or their countries. Yeah. Oh, companies like BBC and Reddit, they host these
**[22:32]** in the dark. Yeah. So these are just hosts. I mean, there's nothing to legal about this.
**[22:35]** Just a normal server, they've configured it so that their servers also accessible through the
**[22:39]** onion network. Yeah. Well, nothing really fancy about this other than they went through the
**[22:45]** trouble of getting a dot on an address and then sent it to their server. That's basically it.
**[22:52]** Oh, other than the vanity aspect of it, like the www.bbcnews or the Twitter or whatever, you know,
**[22:59]** there's there's computational resources to get the vanity piece of it. After that, it's just
**[23:04]** configuration super easy. These ones are probably running on AWS or Azure or Oracle or
**[23:10]** wherever they're normally running. Yeah. We've got sites that have been moved around a lot. So
**[23:16]** like this one used to be hosted in Sweden. I believe it is not currently hosted in Sweden. So this is
**[23:21]** one of the historically most popular piracy sites out there called Pirate Bay. These sites,
**[23:29]** these two right here, let's say you've acquired some Bitcoin through whatever means.
**[23:35]** And you're worried that the fact that the blockchain is fully
**[23:39]** public, they don't necessarily know it's you, but they can track the transactions between
**[23:44]** your wallet and other wallets. What if you want to provide a little cover for that,
**[23:49]** you could use one of these services that'll take a cut, but they will pull your not a cryptocurrency
**[23:56]** with a whole bunch of others with hundreds or thousands or millions of transactions and mix things
**[24:01]** up and then ultimately send them to a final wallet. And then you can kind of hide where you got
**[24:08]** things from and what happened there. So those are Bitcoin mixers. You can buy Bitcoin. I don't
**[24:15]** actually know what a freshly mined version Bitcoin is, but where that exists. This site,
**[24:22]** a proton mail, and anyone heard a proton before. So a couple people. So proton has sort of become in
**[24:29]** the last two or three years, a Google workspace alternative. They have a, they've always had email
**[24:36]** for a long time that's pretty competitive with Gmail, but they've added in a cloud storage,
**[24:41]** very like a Google Drive. They've added in docs and sheets. And so very much like Google Docs
**[24:47]** in Google Sheets, but this is a company that is very privacy-focused. Basin Switzerland. You pay
**[24:53]** an annual fee or a monthly fee, but it's, we don't use your data to track you and to sell your
**[24:59]** data to other people and for many people who want to ungoogle their lives. This is an appealing
**[25:04]** proposition. I've been a customer of theirs in the past. Some good products. If you're in a place
**[25:11]** where the Bible is censored, there's the dark web version of the Bible. So, it seems like
**[25:23]** the site's not up to date anymore. It used to be that the site was really accurate and it
**[25:27]** would track all of the ransomware groups and their sites on the dark web. It looks like I've clicked
**[25:32]** on maybe 10 or 12 of them over the last 24 hours and none of them have worked except for this one,
**[25:38]** which I knew about. The Ragnar Locker was one of the biggest ransomware groups two or three
**[25:44]** years ago and their site got seized by Interpol and Interpol has maintained this server on the
**[25:51]** dark web saying, yeah, we took them down. It's a lot of them. Nothing. It's a little dirty. It's
**[25:58]** on them. Then we just pointed out. We haven't really done this yet, but let me point out that,
**[26:04]** is that site down? Which one? Let me refresh this one. See if we can pull this one back up. It was
**[26:11]** up earlier. You can access normal sites. This is just going to Amazon.com. We're going in this case
**[26:22]** through a couple of relays in the United States to Amazon. We can go to the very beginning of my list.
**[26:30]** We can go to this site, BYU.edu. In this case, we went through the United Kingdom and then
**[26:36]** Luxembourg. Now, BYU, I didn't realize until today, has a site that is entirely non-functional
**[26:43]** with no JavaScript. If JavaScript is turned off like it is in this browser, this is what the BYU
**[26:49]** site looks. It's great. Let's see if that last site opens back. It's partially down. That's
**[27:01]** interesting. This one is called the Imperial Library of Trendtore, which is a reference to a
**[27:07]** sci-fi book. The idea between this site is it's illegal, but there are copies, non-DRM copies
**[27:14]** of almost every book published in the last 100 years or so. In places where you have censorship
**[27:23]** and can't get access to books, it may be illegal, but it may or may not be unethical to access
**[27:30]** information if you're in certain places in the world. I'm not going to, this is an ethics class,
**[27:36]** but I could see it being perhaps ethical or moral to access information even if it was illegal
**[27:42]** in some circumstances. That's dark web, questions. How do people get these published on the
**[27:52]** dark web? What is that? They work mostly in countries where the U.S. doesn't have
**[28:02]** extradition agreements and they're still servers hosted. There are people who are willing to
**[28:09]** pay a slight premium to host their stuff in places where they won't get busted, and so there
**[28:14]** places who will run those servers and data centers. Do you know, I mean, it might
**[28:23]** church like the church website? You could go to the church website because you can go to the
**[28:29]** clear web through the through tour. Maybe we'll do that, but I am certain that they don't have an
**[28:34]** unine address. That would be hilarious if they actually had one. You succeeded. You know,
**[28:45]** I'm taking a minute. I think it has been really slow. So it's too slow. So their site doesn't
**[28:52]** fully rely on JavaScript. Good on the church. There's a few things that looks like a broken
**[28:59]** linjava script, but at least you can see the just. I would be very shocked if
**[29:05]** I'm coming through Poland. I'm surprised they didn't give me Polish.
**[29:12]** I'm just, I'm sorry. Other questions. I've heard a lot of jokes my whole life about, oh,
**[29:21]** if you just sell your kidney on the dark web, that kind of thing, how realistic or actuality
**[29:27]** is that a thing? I think that's mostly a joke. But there used to be a site on the dark web called
**[29:37]** Silk Road. And then there was a Silk Road version two. There is actually, there are Utah
**[29:43]** connections to the Silk Road. Silk Road was kind of the, you can buy anything on the Silk Road.
**[29:49]** So that's where you could legitimately hire a hitman. You could legitimately buy drugs. You could
**[29:56]** legitimately buy, if a kidney was for sale, that would be where you would find it. I think that's
**[30:02]** mostly a joke. I could be wrong. Again, I'm not a citizen of the dark web, but I think it's useful
**[30:10]** in bringing up, well, one the cryptography is cool, two cybersecurity and type of crime happens
**[30:15]** on the dark web sometimes. And it gets students pay attention for a few minutes, which is
**[30:20]** not to find to me. So thank you for your attention. Amen. It happened with floor,
**[30:25]** like they quite encrypted. Yeah, other sections asked that as well. And I don't actually know
**[30:29]** the answer entirely. I think people, some people just stupidly used credit cards because there wasn't
**[30:33]** actually that much oversight and fraud detection, like there used to be, I think some of it ended
**[30:40]** up being kind of like, will facilitate the start of the transaction. But in the big cities,
**[30:45]** you got to do the Craigslist Facebook Marketplace meet-up kind of vibe. But it's a great
**[30:51]** question. I don't fully know the answer. All right, that's blockchain. That's, that's uh,
**[31:01]** let's talk about one other, one or two other fun things. All right, there is this idea concept.
**[31:11]** It's not exactly cryptography, but it's related. There's this idea of stegonography.
**[31:18]** So, I had an apartment's way or where, historically, there was this guy kind of a crazy guy,
**[31:23]** back in 440 BC called Herodotus. And Herodotus came up with this scheme. This is hundreds of years
**[31:31]** before the Caesar Cypher, right, before Caesar existed. But they needed a way to get information
**[31:36]** from like a central command where the general was at out to the far-flung battlefields, you know,
**[31:42]** maybe a couple weeks away, right, by horseback or something like that. So how do you do that
**[31:48]** when you can't actually encrypt things because encryption had really been developed yet? So this
**[31:53]** Herodotus came up with a brilliant scheme, brilliant. Shave ahead of a slave. It's had to the message
**[32:04]** onto the scalp of the slave. Wait a couple days for the stubble to mostly cover the tattoo.
**[32:12]** And then send them under guard to the front lines of battle a couple weeks away if they get
**[32:17]** intercepted. They can't see the message because it's covered with stubble and hair. And then
**[32:23]** ultimately at the front lines, shave the slave and then see the message. Okay, obviously bad.
**[32:32]** So the earliest known example of what we now refer to as stegonography, which is hiding information
**[32:39]** kind of in plain sight, but inside of something. So there's a digital version of this. No
**[32:46]** slaves involved. The digital version of this is to take some data and try to hide it inside of another
**[32:53]** file. The most common way to do this is to take a file like an image file. Okay, so we've
**[33:02]** talked about images image files before. An image file is just let's encode the color of this pixel
**[33:07]** and in some formats the transparency of this pixel and then let's encode the color of this
**[33:11]** pixel and this pixel and this pixel. And because people care about colors and transparency,
**[33:17]** there's sometimes a lot of data that could be stored for pixel 16 bits, 24 bits per pixel,
**[33:24]** right, depending on the file you're using. So let's say we've got 16 bits per pixel. Okay,
**[33:30]** that's a lot of colors, right, 65,000 colors that we can store for that one pixel.
**[33:35]** If you've ever done web development, if you change the color like the RGB value by one,
**[33:43]** how many of you can tell the difference between those two colors?
**[33:47]** Definitely not me. If you change it by five, I probably couldn't tell this difference between
**[33:53]** those two colors. If you change it by 10, I can tell. We've just changed it by one. I don't think
**[33:59]** very many people on a planet can tell the difference between those. Maybe some, I'm not one of them.
**[34:04]** So if you per pixel, let's say we just take the very last bit of that pixel,
**[34:10]** sometimes call it that the least significant bit. Last one or zero. And we just change it
**[34:16]** to be either a one or a zero for the data that we want to store.
**[34:21]** And let's say we've got a five mega by our mega pixel image that's five million pixels.
**[34:28]** If we want to store five million bits, we've got a spot to store five million bits.
**[34:35]** That's a lot of data actually. You start adding things up. So we can store data inside of a file
**[34:42]** like an image. And you could do it for other types of data. I mean stored in PDF. So there's
**[34:46]** ways of doing things besides just images. But let me show you how I did it and how it affects you.
**[34:54]** So a little while ago, some of you came across an image that looked like this.
**[35:13]** Do you remember this one? As it turns out,
**[35:17]** if you had some code that could get data in and out of an image using the least significant
**[35:28]** bit there and just run this little script, then what you could have found is you could have found
**[35:35]** this little document called secrets in it. And in the secrets file, just on the home page of
**[35:43]** your midterm was all of the questions and all of the answers for the midterm.
**[35:50]** The entire time. And if you found them, you found them. Sometimes I accidentally put stuff into
**[35:57]** your labs. A couple of you have found things that I accidentally forgot to delete in your labs
**[36:01]** and could use those. And those are fair game. But this one is staganography inside of that image.
**[36:07]** Section 3 wanted to see the differences between those two. So this is the original document.
**[36:13]** And this is the one that has the answer to it.
**[36:20]** Definitely obvious. I tell the difference between those colors. I totally can't tell them that
**[36:25]** many of those colors, they're not actually flipped because for some of them, the color was a one
**[36:30]** and you want to encode a one on that spot and so you just leave it alone. And so a lot of the colors
**[36:35]** are exactly the same. Like half the pixels are exactly the same. It's just the other half that are
**[36:39]** flipped to the other one. Anyway, so that's staganography. Now a couple of caveat. Let me answer
**[36:45]** some questions. But let me say a couple of caveats. I've done this for five or six years running
**[36:51]** now, six, seven years running maybe. I was actually, I was worried because somebody in section one
**[36:56]** came up before the midterm room to say, hey professor, well, somebody last year told me that
**[37:01]** you can hide the answers somewhere. Are you going to do that this year? And I said, I don't know.
**[37:04]** I haven't done it yet and then I, but Paul, but I went, oh, I'm definitely doing it.
**[37:11]** So I was a little worried, but the game would get out. The other thing about this, though, is I
**[37:15]** did encrypt the data before I stashed it in the image. Now the password is just, I have to
**[37:20]** see the root beer or root get root beer. So you could have gotten it if you, if you really knew it was
**[37:24]** there. But about four years ago, five years ago, somewhere in there, somebody from the core
**[37:30]** at the very end of finals week came, like, can I meet you in your office? Sure. So we had a
**[37:35]** meeting in the office and said, hey, professor, well, they did really bad and bumped the final.
**[37:39]** Can I talk to you about it? Is there anything I can do? And I'm like, it's not really much you can
**[37:43]** do at this point? Like the points are out. I've got great to do. Like, and so we had a
**[37:47]** long conversation. I was like, okay, well, let's talk about some options and how moving forward,
**[37:52]** let's talk about your study strategies and how you can avoid this in the future. It came out
**[37:57]** during that conversation that the student had not studied one minute for the final. And it's
**[38:04]** spent at least 10 hours looking for hidden stuff when I didn't make any for the final.
**[38:14]** So I told them, given the bad strategy to spend the time in a nice way. But going forward,
**[38:24]** if I choose to do any stagnography between now and the last minute of the final,
**[38:30]** I will tell you about it in advance. Okay, fair. Okay. And you should still study for the final.
**[38:37]** After we do intakes. But the last couple, two, three years, I have sometimes incorporated
**[38:45]** a stagnography into the final. Usually, it's a, here's the code to do stagnography. Here's how
**[38:51]** you load an image, how you run the library, et cetera. You need to go find the password somewhere else
**[38:56]** and kind of use that as the final step. I've done that in the last couple years. I don't know
**[39:00]** if I'll do it this year. But I will tell you in advance if there's going to be stagnography. If I
**[39:05]** don't say anything, no stagnography. Okay. Okay. Yes. Good. Okay. A couple questions, Bailey, run it. Yeah.
**[39:11]** That was just that question. I asked about today. Yeah. So yeah, somebody also asked if the answers
**[39:15]** of the final are in that image and if they need to pull it from their cash on their computer,
**[39:19]** no, it just had the midterm answers in it. So, good luck, questions on this.
**[39:33]** You find stuff that you don't think I intended, only fair game.
**[39:40]** All right. You got a few minutes left. You guys are ahead of every other section.
**[39:47]** Just great. That's good that way.
**[39:59]** Okay. The last time we talked about privacy and then basically got to GDPR. Is that some
**[40:04]** right? Where do we not talk about privacy enough? Where do we end up at? I've about privacy,
**[40:12]** temple a little bit. Yeah, a little bit. Okay. Do we end up saying, hey, we would talk next time
**[40:19]** about GDPR. I think, maybe? Yes. No. We talked about any of, like, we talked about privacy,
**[40:36]** confidentiality. My notes. I have confidentiality versus privacy and then GDPR. Okay.
**[40:43]** This is standard. Okay. So let's start that. Thank you. Okay. So last time we probably,
**[40:50]** oh, I didn't put it on screen. That's why we did things on the screen. So last time I probably
**[40:57]** said something like, hey, there are some privacy laws around the world. GDPR is probably the
**[41:03]** most famous. It's the European Union privacy law. But there are alternatives like in California
**[41:09]** about two years after GDPR went into effect. California passed a law called CCPA. We'll talk
**[41:16]** about in a minute. CCPA is kind of a slightly watered down version of GDPR. So it's not as restrictive,
**[41:22]** but it has a lot of the same things in it. And then a few years after that, I think two years ago,
**[41:27]** it was ratified. Utah passed a privacy law. It is a quite watered down version of CCPA
**[41:34]** of the California law, which means it basically has no teeth at all. And then the question is,
**[41:40]** okay. So if I'm a company in business in Utah, which privacy laws do I care about?
**[41:48]** Well, if I'm only in Utah, and I only do business with people who are from Utah,
**[41:53]** then I probably just have to deal with Utah law, which is basically nothing. If I have an
**[42:01]** office in California, or a bunch of customers from California, then I might also have to deal
**[42:07]** with the California law. If I have an office in the EU, I definitely have to deal with GDPR. And so
**[42:16]** if that's the case, do I organize my business in a way that I, in different jurisdictions,
**[42:23]** I act differently. In Utah, I collect your data, but in Europe I don't. Or do I just
**[42:30]** organize myself so that I follow the strictest law? Most companies just say, okay, let me just
**[42:36]** follow the strictest law, which is why GDPR matters even for companies that are not EU-based.
**[42:44]** Because GDPR is pretty much the strictest privacy law out there, and a lot of organizations
**[42:49]** do business somewhat in Europe, and are just worried about the fines. Because if they've got
**[42:54]** an office in Europe, then there's a legal mechanism for being fined by the EU.
**[42:59]** Some of these fines, as we'll see, it's pretty big. So GDPR is the one that we need to talk about,
**[43:07]** even if it doesn't actually turn your business that you go to work for, it might implicitly
**[43:13]** be what they follow just because everybody sent tends to follow this one. Yeah, I'm just like
**[43:18]** out of curiosity. Does like every state have their own set? Oh, no. I have a double check now.
**[43:24]** It's certainly less than half the states. A year or two ago, it was like a 10 states head privacy
**[43:31]** laws. Utah, Utah and California were in the minority. I don't know what the current number is.
**[43:36]** There has been museums for about five years that the US should have a federal privacy law
**[43:43]** so that everybody in the US just follows the same standard rather than having each state
**[43:48]** have its own thing and have to worry about different states and all of that. That hasn't
**[43:52]** really gone anywhere so far. But I mean, Congress hasn't really been functional for, I don't know,
**[43:59]** 30 years or 40 years. So, I mean, I don't know whether that will actually go into effect.
**[44:05]** It is good for business to have a single standard to kind of go for, even if the standard ends up being
**[44:10]** GDPR because that's the default. But yeah, it's a good question.
**[44:15]** Yeah. So, let's talk just the highlights. We'll come back to this next time. I know we're kind
**[44:22]** of bringing a little short on time. GDPR has a bunch of rights associated with it. And I
**[44:29]** probably, I might have mentioned this last time. But if you want to read GDPR, like it's up on
**[44:33]** the internet. You can just read the article. It's great if you are having insomnia, a great
**[44:40]** thing to read. But let's distill it down to these rights. Most of these things, I think are
**[44:46]** pretty straightforward. There's a couple of them that are a little weird. So let's kind of walk through
**[44:50]** them one by one and make sure we understand them. I might recap this next Tuesday for we go and
**[44:56]** start doing more in-text stuff. So, number one, the right to be informed when GDPR first went into
**[45:05]** effect, which was 2018. One of the things you might have noticed, if you had ever done business
**[45:11]** with any organization who's ever been in Europe, you might have noticed that you got a billion emails
**[45:17]** that month that you were changing and adding to their privacy policy. Because one of the things
**[45:24]** that GDPR requires is they require information to be posted publicly about how they're using your
**[45:31]** data, what they are collecting, who they are sending it to, what are your rights related to it,
**[45:37]** who do you contact if you think you're rights have been violated and so forth. And so this is kind of
**[45:42]** the start of privacy policies being for every organization that counters any kind of data online.
**[45:49]** And privacy policies that have very specific sections in order. Most of our privacy policies
**[45:56]** look exactly like that section of GDPR because they hit every single one of those points so
**[46:01]** that they're compliant with GDPR. If we were to go to the church's privacy policy,
**[46:06]** maybe we'll do that on Tuesday, it looks very much like a bullet point of GDPR right to be
**[46:11]** informed section. If we go to Amazon's and Google's and Facebook's, they're basically all
**[46:17]** those sections with some pretty flowery videos in between to try to make them a little more
**[46:21]** palatable, because they're wrong on who they share your data with. Okay, so that's right to be
**[46:27]** informed. Right of access is you have the right under GDPR to get access to the data about you.
**[46:37]** I won't show this today but as anyone ever heard of Google takeout,
**[46:41]** notice a Google takeout or search Google takeout, it is Google service to be in compliance with GDPR
**[46:48]** and other laws like that. So you can go to Google takeout and say, hey, if I've ever had a Google
**[46:53]** account, you can log in there and say, hey, Google, give me all of my data. We'll give me all of
**[47:00]** my data about one service and you can export that data. It is an experience to find out how much data
**[47:08]** Google has on you. For most people, you push the button and it Google will be like, okay,
**[47:16]** we'll send you an email when we're ready. You want it in like one or two gigabyte chunks, right?
**[47:21]** We'll tell you when it's ready, it might be a day, it might be a week, but we'll let you know
**[47:26]** when you can download it in one or two gigabyte chunks. Right, last time I did it for all of my data,
**[47:33]** I had 33 gigs, but that number is way higher now, because including YouTube videos for classes
**[47:39]** and stuff like that, it's way higher now. This was several years ago, so I just barely downloaded a
**[47:45]** couple of my chats, histories, and it was like a gig just for one service, you know,
**[47:53]** it's crazy. Okay, so you have the right to access the data on yourself. Third, you have the right
**[48:00]** under some circumstances to have your data deleted or a rates erased. If you can say to a company,
**[48:09]** I no longer want you to have an account on me, and the company can say, oh, but you've bought
**[48:15]** stuff from us before, we have to retain the transaction information for our accounting records,
**[48:21]** and that's okay. What if they want your account closed, they can't just archive it in their
**[48:27]** database, it actually has to be deleted. So if you want your social media account deleted and
**[48:34]** actually deleted, you need to tell them that you're from the GU, that it will actually be deleted.
**[48:40]** Always, it'll be archived, and then they'll send you an email saying, hey, you want your account
**[48:44]** reactivated? Okay, next one. The right to restrict processing, you have the right under GDPR
**[48:55]** in some circumstances, say, okay, I want my data used in this way, that's okay, and not in this way.
**[49:02]** Oftentimes, when you sign up for a site that is trying to comply with GDPR, there will be
**[49:07]** some checkboxes when you sign up and say, hey, do I, do you care if your data is shared
**[49:12]** with our partners like this for marketing purposes? Do you care if our data is shared with this
**[49:16]** to do this? And in your privacy policy, it usually says, if you want an account with us,
**[49:23]** this is what you must agree with. Here are the things that you absolutely can choose whether to do
**[49:29]** or not to do. So you have at least some say, over time, this is kind of, you have less say,
**[49:35]** like basically organizations have said, hey, if you want an account, this is what you're agreeing to,
**[49:39]** but sometimes you have some control over that. Next one, right of data portability is pretty closely
**[49:47]** tied to the right of access. Right of data portability means when you download your stuff from
**[49:53]** like a Google takeout or similar, that it should be in a format that's usable. If you download
**[50:00]** your mail, like your Gmail, they should give it to you in a standard format, which they do,
**[50:06]** they give it to you in a.eml format, which means you theoretically could import that into Microsoft
**[50:12]** mail or Yahoo if it still exists or so it should be in a format that's reasonable.
**[50:19]** Oftentimes this is just JSON format nowadays, but at least it's reasonable.
**[50:26]** Two minutes. Okay. We'll hit this last one and there will actually maybe last two and we'll talk
**[50:32]** with the other one later. So the right to rectification. If there is inaccurate information about
**[50:38]** you online, you have the right under GDPR to have it fixed. Now that doesn't mean you can say,
**[50:44]** hey, I want you to change that article that you wrote about me committing a crime. Even though
**[50:49]** it was an accurate article, I want you to change it. But you could say, hey, you wrote an article
**[50:55]** about somebody committing a crime and you use the wrong name and it's my name and people are
**[50:58]** giving me death threats and they can they have to change that. Right. So if it's wrong,
**[51:04]** you have the right to have it be changed. And then the last one we'll talk about. This last one is
**[51:08]** kind of weird. We'll talk about that one next Tuesday, maybe. But you have the right to complain.
**[51:13]** You have the right to object. There, you have to have a in-year privacy policy. There has to be
**[51:19]** a contact information of, hey, something went wrong with my privacy. Your violating my privacy.
**[51:23]** And he's somebody to talk to. A chief privacy officer, usually. Or you also have the right to
**[51:29]** contact the European Union and say, hey, this company is not following GDPR. In this way,
**[51:35]** here's my proof. Do something about it and you might get a settlement because GDPR
**[51:41]** they'll mess around in Europe with GDPR. All right. We will end there. Let me just point
**[51:48]** out in this. We'll talk about this next time. This site tracks these are just GDPR finds.
**[51:55]** We will talk about some of their finds. They are not small amounts of money and the one thing that
**[52:04]** will be a theme as we go through is better Amazon, meta, uh, uh, talk, LinkedIn, Uber, meta,
**[52:14]** meta, let's app, which is meta, meta, cool, cool, Facebook, which is so far. We'll talk about
**[52:24]** that next time. Have a great weekend. Let me know if there's problems with the lab and I will see you on
**[52:28]** Tuesday. I think it's fine. I think it's fine. I think it's fine. I think it's fine.
