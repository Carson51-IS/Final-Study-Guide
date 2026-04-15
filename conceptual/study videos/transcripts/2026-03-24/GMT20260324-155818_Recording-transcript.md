# Study session transcript

**Source:** `GMT20260324-155818_Recording.m4a`
**Detected language:** en (probability 0.99)

Auto-generated with faster-whisper (Whisper **tiny**, CPU). Expect minor errors.

---
**[00:00]** I'm honestly impressed. I'm not more drawn to have been shot down in North Texas by
**[00:18]** the shoe. It seems like such an orthotoxist thing to do, so. Okay, last time we were talking
**[00:27]** about some important concepts and I told, I think I told you, that we would come back
**[00:33]** and do them again. So let's talk about digital signatures, because this is an important
**[00:39]** concept to understand from cryptography. Maybe the most important concept to understand
**[00:44]** perhaps, so what is a digital signature? Yeah, please. Where a sender has a key that has
**[01:03]** just something, and then everyone else has a public key that can decrypt it, so if it can
**[01:10]** be too scriptable, that means that it was actually sent for a police person. The things
**[01:14]** are just like, this was sent by a human witness. Okay. 85% correct. So very good. Very good.
**[01:23]** Let's get that last 15% in there. So those are good stuff. Yes, please. Insepsually, this
**[01:28]** signature verifies that the data you're receiving has not been changed. Okay. So we've got,
**[01:36]** integrity that's provided by digital signature. Yeah. Absolutely. Okay. We also have
**[01:41]** what else that's provided by a digital signature. Now, we're already yes, as we're comparing
**[01:46]** hashes at the end of the day, and it's also better came from. Okay. Authenticity that actually
**[01:50]** came from the sender. Okay. And then the part that was inaccurate is, so our algorithms for
**[01:56]** digital signatures, there is a hashes, part of the digital signature, but the private key doesn't
**[02:04]** do the hashes. Private key does the encryption of the hash. Okay. So if I was to just ask you
**[02:10]** what what is a digital signature? A digital signature is a encrypted hash using the sender's
**[02:18]** private key. That's what a digital signature is. And if I was to ask you what it provides us,
**[02:24]** it provides us integrity or the ability to do an integrity check. An ability to check the
**[02:30]** Authenticity of the message. And then we also talked about this related legal term that if we have
**[02:35]** integrity and authenticity, we also get, you don't pick up on that one.
**[02:45]** Non-reputiation. You guys remember that one? So if we get authenticity and integrity together,
**[02:50]** we also get non-reputiation, meaning that if Alice sends a message to Bob with a digital signature,
**[02:56]** Alice can't later say, oh no, that wasn't me because Bob can say, yeah, it was. I have a message
**[03:03]** that definitely came from you because it was digitally signed and it definitely wasn't modified
**[03:07]** by me in any way because it was digitally signed in here's the hashes. And so if we get
**[03:11]** integrity and authenticity, we also get non-reputations. So just to check, you know signatures are created
**[03:21]** by which key, sender's private. So if Alice has a public and a private key and Bob has a public
**[03:31]** and a private key and they decide to share their public keys, that's totally fine. You can have
**[03:35]** their public keys as well, like post-demon line, no big deal. But the digital signature is the
**[03:42]** sender Alice in this case for a private key gets used to sign the hash or to encrypt the hash
**[03:50]** which is the little signature. And then Bob and Alice and everyone in the world who has the
**[03:55]** public key decrypt that hash. The digital signature give us any confidentiality.
**[04:04]** Yeah, by itself. It's just purely integrity and authenticity of
**[04:11]** you and technically from the radiation. You use digital signatures all the time,
**[04:16]** probably without realizing this. Every time you're using HTTPS, we're doing a digital signature
**[04:24]** verification. Every time you're downloading software updates and things like that,
**[04:31]** you're almost always using digital signature verification behind the scenes to make sure that
**[04:36]** the file has been downloaded correctly and has integrity and it's from the source that you think it's
**[04:40]** from. But most of these things are behind the scenes. But developers have to create them and so
**[04:46]** it's not important for us to know about them in case you need to use them in the future in your
**[04:49]** dual boxes. All right. Let's talk about for just a second. Let's talk about this
**[04:57]** other thing that we did last time. A message authentication code, or sometimes called an
**[05:02]** off-tag. I don't remember the difference between these two.
**[05:08]** A digital signature and a mat, a little tricky. So in a Mac, Alice and Bob have already negotiated or shared
**[05:22]** asymmetric key. They haven't set that up in advance. How could they arrive at a symmetric key
**[05:30]** when they're not in the same room? Do they exchange? Or the Divi Helman key exchange? Okay. Very good.
**[05:36]** So Alice and Bob need to come up with a symmetric key that they shared. And then Alice wants
**[05:42]** to send a message to Bob. She takes that message, ashes the message, and then encrypts it with
**[05:49]** the pre-shared key. Let me think you arrived at with Divi Helman. And we call that a message
**[05:55]** authentication code or a move back. And then we send the Mac over to Bob with the message. And
**[06:03]** then Bob can he either recreate the Mac or decrypt this Mac and then compare the hashes
**[06:10]** because he has the pre-shared key. So a Mac is a essentially like a digital signature but with
**[06:16]** symmetric encryption. And digital signature though is using the asymmetric encryption, the
**[06:21]** private key and then the public key. Now the reason why we don't use this more Mac's more, we do
**[06:28]** use them in circumstances. But the main reason why we don't use the more is because we have to do
**[06:34]** this Mac, her sender and per key whereas how many of you have been to learning sweet or be
**[06:42]** why you today? A fair amount of you. Most of you. Okay. BYU has one public key in order to do
**[06:50]** this verification. They don't have to negotiate a new public or a new Mac for every single one of
**[06:55]** you. You just do the verification with their public key. So we can post our public key, we can't post
**[07:00]** our Macs. All right. Now what if we want to layer confidentiality onto this process?
**[07:10]** How could we do that? Let's say we're using RSA in symmetric encryption.
**[07:15]** How could we do it that way? That's not how we usually do it but you could theoretically do it this way.
**[07:21]** So we want in this circumstance Alice wants to send a message to Bob that has confidentiality,
**[07:27]** integrity, you know the authenticity all in one go. How do we provide that with asymmetric
**[07:34]** encryption? Great exam question. Please. If you have, please, if for Alice, if you're wanting to
**[07:47]** for authentication, you could do it with your private or else it's private key,
**[07:53]** the hash hash. Okay. You also be able to encrypt or using the Bob's public key. Okay. All right.
**[08:05]** These are the messages. All right. Well, let's do this. Okay. So let's talk about this.
**[08:09]** So if we want a scenario using asymmetric encryption where we get confidentiality, integrity,
**[08:15]** and authenticity, well, we already talked about how integrity and authenticity, that's a solved
**[08:19]** problem. We make a digital signature. That's how we do integrity and authenticity. Okay. So we do
**[08:24]** the exact same thing as before through the integrity and authenticity part. We take the message,
**[08:28]** we hash it, we encrypt the hash with the sender's private key, and then Bob can then verify that
**[08:33]** with the sender's public key integrity authenticity solved. Okay. The real trick is how do we
**[08:39]** encrypt the message so we get confidentiality? And in this case, there's a much better than some
**[08:46]** of the other folks that I've taught. We got it on first try. So which key do we use? There's
**[08:51]** Alice use to encrypt this message. Oh, it's not the receiver's public key. Because when we send the
**[08:59]** message with the receiver's public key, who's the only one on the planet, provided we're
**[09:03]** being careful with keys, who's the only one on the planet who can decrypt that message? It's
**[09:07]** the receiver with their private key. Okay. Because only the receiver has that private key. Okay.
**[09:13]** So we use Alice's private key sign, the hash, the digital signature, and we use Bob's public
**[09:21]** and then private key to encrypt and then decrypt that message. Now, why do we not actually do it that
**[09:29]** way? Because RSA is really slow, adding encryption. And so RSA or ECC, great for digital signatures,
**[09:37]** not great for actual encryption of lots of stuff messages, files, etc.
**[09:43]** Just really, really slow. So what do we normally do? We do digital signatures use an asymmetric
**[09:48]** encryption for the integrity and authenticity piece, and then we use Diffy Helman and symmetric
**[09:54]** encryption for the messages because it's just way faster. So it's not a guarantee, but probably
**[10:03]** all of you have used HTTPS today. Most of that transactions that you've been sending back and forth
**[10:11]** with some web server somewhere, almost all of them have used either RSA or ECC for the
**[10:18]** verification piece to make sure that you can verify the authenticity of the site that you're going
**[10:22]** to, and then the integrity of that. And then most of you have been using either Cha Cha or AES after
**[10:29]** doing Diffy Helman to actually encrypt the messages back and forth. We tend to use both asymmetric
**[10:37]** and symmetric encryption. You'll ask questions. Let's make sure we've got this locked down.
**[10:45]** I usually have a question or two or three or four on an exam about
**[10:49]** which keys do we use when do we use them? What's the digital signature? How do we provide
**[10:53]** confidentiality those kind of things? Yeah. So just to clarify what is the difference between
**[10:59]** the symmetric and the asymmetric with the public and primary keys? Okay, so if you
**[11:05]** Helman is a public process, okay, we tend to use asymmetric information, but Diffy Helman is a public
**[11:12]** process at which we can arrive at a pre-shared key. So we used next for symmetric encryption,
**[11:19]** using whatever algorithms we care about AES, Cha Cha, whatever. So it is a asymmetric process
**[11:25]** that gives us a symmetric key. Whereas what we just talked about with Alice and Bob's public
**[11:32]** private keys, that's an asymmetric encryption process. We use the public key and the private key
**[11:38]** and tandem for the machine. In this case, we use private key then public key,
**[11:43]** for the encryption we use public key then private key. Yeah, I think so. Okay, what else?
**[11:53]** All right, keep going, if we've got it. Beat. We're ready to talk about CIA, try it along the way.
**[12:06]** Okay, so we have one remaining big problem that you might have thought that we solved, but we haven't
**[12:14]** actually solved with what we've talked about so far. That is, how do we know the math works?
**[12:20]** How do we know if we've never met them? How do we know it's actually Bob or actually Alice
**[12:28]** and it's not actually Eve? The math works, so that we're only going to in thin messages and verify
**[12:35]** from one person. How do we know that one person's actually who we think it is? We haven't solved
**[12:42]** that problem yet, so let's solve that problem. How do we verify someone isn't actually digitally
**[12:47]** catfish at you? Earlier this semester, I brought up this slide and we talked about how just
**[12:56]** the old X files from the 90s mantra that we should trust no one and that is absolutely true.
**[13:01]** We should be careful on things that we should learn more by things, but as it turns out,
**[13:06]** the internet doesn't actually work at all if we trust zero people to trust someone. So the
**[13:13]** question then becomes, if we have to trust someone in order to make this whole thing work,
**[13:18]** who do we decide to trust? Let me show you who this computer finds to trust.
**[13:36]** This is the list of organizations that this computer has decided to trust.
**[13:43]** Why do they decide to trust this? Well, this is what basically with a few exceptions,
**[13:48]** this is what Windows has decided to trust and this list is almost exactly the same for Mac
**[13:55]** computers and iPhones and Android phones and Linux systems and so forth. This is the list of
**[14:01]** organizations that we have decided to trust. We call them certificate authorities and they are allowed
**[14:09]** to make public private keys and package them in a document that we call a certificate.
**[14:17]** Then, when we go to websites like let's pull up, what was really hard to navigate with Zoom?
**[14:24]** When we go to a website like Learning Suite and we pull up the this is connection is secure
**[14:29]** and I still a padlock. We look at the certificate, we can come over, oh, maybe we can come over.
**[14:34]** If I can do that, right this way. We'll come over here. Here's BYU's certificate. It is
**[14:44]** issued to startupbYU.edu. Here's the organization and you'll notice who issued this?
**[14:50]** Did you start global G2 global law with RSAs, shot 256, et cetera, from just
**[14:58]** and if we come back to our certificates, here is Digisert Global Route G2.
**[15:08]** This is the certificate that's actually issued BYU's certificate. And how do we
**[15:16]** actually verify that? Every time we go to Learning Suite or WWAU.edu, we're going to get the
**[15:21]** certificate from BYU and we're going to immediately our computer on our behalf is going to say,
**[15:26]** okay, great. This was issued and digitally signed by Digisert. Do we trust them?
**[15:33]** Let me use their public key if I've got that in my trusted list, which I do. Let me grab
**[15:38]** their public key and then check the signature of this certification and if it's good, then oh, this
**[15:43]** must be BYU because we've decided we're going to trust this list. Can this list change over time?
**[15:49]** Sure, we can change over time. In fact, you can manually add things to the list like BYU has
**[15:54]** so that we don't, that this machine doesn't have to have a digital certificate to go to anything
**[15:59]** that BYU has just made up without Digisert. It's just manually installed here. So here,
**[16:05]** here, then here. Yeah, is this putting everything at the time you go to a website or is there like
**[16:10]** a match that's stored? It's like, oh, I've already been here, everybody very much. So there is cash,
**[16:14]** but every time you go to one where you need to. Yeah, so a lot of people still get fished
**[16:22]** like you click on a website and there's not a certification or do they somehow get a certification,
**[16:27]** like how does your computer not freak out every time you click? So as it turns out,
**[16:31]** getting a certificate, actually not that hard nowadays. With the movement towards HDPS everywhere
**[16:38]** and organizations like Let's Encrypt, it's pretty easy to get a certificate. Should you still
**[16:45]** check to see if the URL is right? And if it has a certificate, if, are we actually at BYU or
**[16:51]** an efficient site that has a certificate that looks like BYU, but isn't actually BYU? You know,
**[16:56]** www.BYU-edu.com or something like that, right? You know, you should double check that because
**[17:05]** that site could theoretically still get a certificate. This doesn't fully solve our problem.
**[17:12]** At least partially solves our problem. So yeah, this is the list and your computer when it sets
**[17:20]** up a TLS HDPS connection is checking its list of who we trust or don't trust.
**[17:27]** Over time that list can change and people who mess up can get thrown off the list.
**[17:35]** In face certificate authority loses its private key and people can just issue certificates
**[17:43]** that are immediately trusted by everyone in the world. That's generally considered very bad.
**[17:48]** You get it thrown off the ship, picked off the island. In that case. So a digital certificate is just
**[17:54]** a digital document has a particular structure that is connecting a public key with an organization
**[18:02]** or an individual. It's a document that connects those two things. So BYU has its certificate,
**[18:09]** it sends it to you and you want to go to their website and it says, here is their public key,
**[18:14]** here's who it's signed by and here's the signature of digisert. We can say, oh great, I've got
**[18:19]** digisert in my computer, I trust it. If anything was signed by digisert, it must be good. Let me just
**[18:24]** double check. Public key, sign, okay, everything's good. Must be BYU. We call all of the stuff around
**[18:36]** this process, the algorithms, the certificate authorities, the whole process of this. We call it
**[18:41]** public key infrastructure or PKI. It's kind of a terrible name, but it's just the name we use.
**[18:46]** It's like about certificate authorities. There's an alternative way of establishing trust
**[18:54]** that has never really taken off. And so this idea of web of trust is we had this cool
**[19:04]** idea of, okay, maybe we don't want to trust certificate authorities. Why don't we just issue our own
**[19:09]** keys and we'll just have other people and organizations sign our keys and so we have kind of like a
**[19:15]** constitution document with a whole bunch of signatures at the bottom right digitally on our
**[19:19]** our certificates. And if enough people sign our keys, that looks like we're trusted, right?
**[19:23]** And so you kind of develop this web of trust, especially if somebody who's trusted signs are key,
**[19:28]** then we must be trusted. The back one, I was a student admittedly a very long time ago.
**[19:33]** The predecessor to AIS, we would have key signing parties where we had our PGP keys and we
**[19:38]** get together and we'd sign everyone else's keys and that was cool and it wasn't ever cool, but
**[19:43]** we thought it was cool. This whole web of trust was going to be a thing and then it wasn't
**[19:48]** really a thing. Because you can actually spoof this web of trust if you just issue a bunch of keys
**[19:52]** and sign a bunch of keys yourself and then you just have trust because they're all signed.
**[19:57]** So this doesn't really work. There's also with certificate authorities and these,
**[20:02]** there's also ways of revoking certificates, okay? So you can through operating the system updates
**[20:09]** you could get in Microsoft or Apple, push out a, hey, somebody's been naughty. We need to pull them
**[20:15]** off the list and that will update the certificate store list out of who you trust. There's also
**[20:20]** other ways. For example, let's encrypt. Most people like let's encrypt. The organization that
**[20:26]** basically lets you get a certificate pretty easily on a site without pay money. So this is kind of
**[20:32]** an established to the HTTPS everywhere movement, but they did kind of five, six years ago
**[20:39]** and had to revoke about 3 million certificates. That's not great. But the question is,
**[20:45]** do we just remove the let's encrypt from our list? I'll trust it. All of a sudden, what about the
**[20:51]** three million, actually multiple, multiple millions that use let's encrypt that thought on the
**[20:58]** bad list? What happens with them? That could cause problems. So we actually have multiple processes
**[21:03]** for checking to see if a certificate has been revoked, okay? Your browsers have their own internal
**[21:10]** list, like Chrome and Firefox have their own internal lists of revoked certificates. They get updated
**[21:14]** as browsers get updated. There's also a API that you can check to see if a certificate's been revoked
**[21:21]** and so forth. Yeah, here's the, was that hand here? No. Yeah, I was looking like I'm trying to
**[21:26]** like I guess like getting that certificate back. Getting it back? So usually not getting it back,
**[21:31]** it's usually just getting a new one issue to you that's not illegitimate. That's what happens
**[21:37]** like with let's encrypt. The maximum length on it now is like a month or three months or something
**[21:42]** like that. I have to double check now. It keeps getting shorter and shorter. Apple keeps pushing
**[21:45]** for shorter and shorter certificates. I have mixed feelings about that. I tend to think it's kind of
**[21:50]** about idea. I think a year is fine. Apple doesn't think that. So for most of this it's just
**[21:57]** let's get a new one. All right. We talked quite a bit about TLS and SSL along the way. How much time do
**[22:10]** we have? Time left. Let's, we have time. I'm just going to do section one. I told
**[22:22]** it would do dark web on Thursday. Let's do dark web Thursday just to be consistent with them.
**[22:28]** So let's talk, let's talk about some other applications. So now that we know the basics
**[22:34]** of photography and how this all works, we can understand a lot of the technologies that are going
**[22:40]** on around us. Like we can look at the pens and we can understand them far far more than we ever
**[22:46]** have before. And one of those technologies, whether this is useful or not, it certainly is in the
**[22:52]** news a lot, is blockchain and cryptocurrencies. And we now have enough cryptographic background to
**[22:58]** understand what's going on with them. So let's, not for the whole rest of class, but for a few minutes
**[23:02]** let's talk about what is blockchain and specifically the most commonly talked about blockchain
**[23:10]** is Bitcoin. So let's talk about Bitcoin and what that is and how it's structured and how it works
**[23:14]** and how cryptography is involved. So a blockchain is made up of a block that is chain together with
**[23:22]** other blocks. Okay that's a, you know, from the name, here is what a block looks like. It has
**[23:29]** some metadata at the top and then a whole bunch of transactions at the bottom, right?
**[23:34]** It makes it look like the header is really big here and the transactions are small. The
**[23:38]** transactions are actually, you know, off the screen here. There's lots and lots of transactions.
**[23:41]** Transactions in Bitcoin, at least, are just send money from one place, keep another place,
**[23:49]** and the amount of money that's set. A sender, a receiver, and the value. Very simple piece of data,
**[23:56]** the list of transactions is actually in Bitcoin and cryptocurrency terminology. It's the wallet address
**[24:04]** that you're sending from one to next. Those wallet addresses are just a wallet piece.
**[24:11]** So when you generate a Bitcoin wallet, you generate a public and a private key pair using
**[24:17]** ECC encryption, a Lyptoccurve cryptography, and your wallet address that you share with everybody
**[24:24]** if you want to do a transaction is just your public key. Okay. Then what happens when a block
**[24:32]** is created and we'll talk about that process in a minute is you take a chunk of transactions
**[24:38]** in Bitcoin, this usually ranges from about 1500 to about 4,000 transactions, and hundreds,
**[24:44]** varies from block to block. Gather up these Indian transactions that are not yet on the blockchain.
**[24:49]** You put a mental list and then you craft this header. This header includes some standard things,
**[24:55]** like there's a magic number that's just always in every block. There's the size of the block
**[24:59]** which has to do which varies, based off how many transactions there are, the version of block that
**[25:03]** you've just seen. But then key is there's two cryptographic ashes that are involved in a block
**[25:10]** chains header. There is the hash of the previous blocks header that is put into the next block.
**[25:17]** That's confirmed that it actually changed these blocks together because we always have a link
**[25:22]** in the previous block because we have the hash of the previous block header embedded in any given block.
**[25:30]** We also have this thing called a Miracle Route. And if you remember the videos from last week,
**[25:35]** there was the the guy Ralph Merkel said he wrote a paper and all the scientific journal said
**[25:42]** that it was terrible idea and then he came back and said, oh, this meant it must be a great idea.
**[25:46]** You guys remember that guy. So super important cryptographer and great at this idea of a
**[25:52]** Miracle Route. It works well. I'm going to show you how it works with eight transactions. In
**[25:58]** reality, we're talking about a few two or three thousand transactions usually. So we're going
**[26:04]** to take our list of transactions and we're going to make a binary tree out of them in this way.
**[26:09]** So we'll take the first two transactions in the list and we'll pair them up. We're going to
**[26:15]** calculate the hash of each of them, shot to 56 and then we'll concatenate those together.
**[26:21]** Then we'll take the third and the fourth transactions, calculate the shot to 56,
**[26:26]** hash of each of those and concatenate those together. Now we'll do that for all of the transactions.
**[26:32]** And then we take the concatenated together, hashes and then we hash those.
**[26:40]** And then we combine those by concatenation. And we do that all the way up the tree as many
**[26:46]** times as we want or as we need for the whole list of transactions. And so we put the
**[26:51]** lot arrive at what we now call the Miracle Route, which is a hash of hash of hash of hash
**[26:58]** of hash, however many layers down it is. The cool thing about this type of structure, oh, please.
**[27:04]** So are you concatenated like you take the hash, it's plain text now and you just like,
**[27:12]** you rehash them and now there's like a different. But you hash them all once, get the plain text
**[27:17]** of that, just concatenate that together and then you hash that concatenate that with another pair
**[27:23]** of concatenated hashes all the way up the chain until you get a one long string that gets hashed
**[27:28]** and that long hash string is never dashed. Or five, six, ten, you know, all the way up the chain
**[27:35]** depending on how many transactions are in the book. So if you have an odd number, you just skip
**[27:41]** one level for the last one, it just kind of like uneven brackets, it just moves up one without
**[27:47]** to be hashed with all of the first round. This allows us, this hash of hashes of hashes means
**[27:55]** that if you change a single bit in any of the transactions, the more congrutes not calculated
**[28:03]** the same. So you can tell the integrity completely or if you swap the position of any of these
**[28:10]** transactions, also the mercury doesn't calculate correctly. So this ensures that the order of
**[28:17]** transactions and the integrity of each transaction is verifiable very quickly with this mercury.
**[28:25]** In our chains and our blocks, the work of root gives us the integrity of the block and the
**[28:35]** previous block hash gives us the integrity of the chain. So we use that to create
**[28:42]** structures that we've got blocks that are organized with chains. Each block we can verify the
**[28:48]** integrity by calculating the work of root each block we can calculate whether it's actually attached
**[28:54]** to the previous block because we can calculate the previous block's header and then see if it's
**[28:58]** actually matching with this block. Yeah, do we need to like decrypt those and how does that happen?
**[29:05]** No decryption, right, but we can verify by calculating the hashes ourselves and then just compare
**[29:09]** in them. So this is just an integrity check. All right, a couple of the things that we haven't
**[29:17]** gotten to were each of these transactions. I'm actually going to have one more thing that I haven't
**[29:26]** mentioned here. So each transaction, that's good to hear each transaction, it isn't just a
**[29:32]** from and to an amount. It's a from a to amount and the digital signature on that. So everyone uses
**[29:44]** their private key. If you want to send money, even Bitcoin, you use your private key, your hidden
**[29:50]** secret wallet address, your private key to sign every transaction before it goes into pending.
**[29:57]** And then everyone can use the public key, your wallet address to verify that transaction.
**[30:04]** Each transaction verifiable cryptographically, each block is verifiable cryptographically using the
**[30:11]** Merkel route. And each block in the chain is positioned in the chain is verifiable using the
**[30:18]** hash of the previous header. A lot of cryptography going on here. And it's just shot 256
**[30:26]** and ECC using one particular curve. That's it. So the Merkel route is changing as you go on.
**[30:35]** Each block has the same local route. If it has the same collection of transactions in the same order,
**[30:40]** then it has the same Merkel route. Those are adding more transactions. These transactions
**[30:44]** and this one have a very different Merkel route. But if you were to look at one block
**[30:49]** and look at the transaction list in order and calculate the Merkel route from that,
**[30:53]** you'd always get the same answer. You'd always see that this block from the past still is valid.
**[30:59]** Does it continue to grow? Or does it like a sliding? Each block is once it's on the chain,
**[31:03]** which we haven't talking about talked about yet, what is on the chain? It's fixed. It's stopped.
**[31:07]** Okay. So let's look. Here is the latest blocks on Bitcoin. So here's the most recent blocks.
**[31:13]** This one is 8 minutes ago. This one was 22 minutes ago, etc. Here's the number of transactions.
**[31:19]** These are in the 3 to 4,500 range. And then we'll talk about the nons in just a minute. But let's look at
**[31:27]** let's look at this transaction. So this is block number 942,018 since the start.
**[31:36]** And here's 9242,017. And we could go and look up any transaction. This is a
**[31:42]** public distributed ledger. We could look at any transaction over the history of blockchain. It's there.
**[31:48]** Okay. So let's look at the most recent one. There we go. So here's the most recent block.
**[31:56]** And then here are all of the transactions in order. First is the block reward. We'll talk about that in a minute.
**[32:02]** But then we've got transaction number one. And somebody from this ID, from this wallet address,
**[32:07]** this public key address is sent 7.05 Bitcoin from this wallet address. So this wallet sent
**[32:16]** into this wallet 7.05 Bitcoin, which is currently 350 grand or something like that.
**[32:23]** But then in here. So it's 492 grand. I'm sorry. Bitcoin is not like 70. It's not 50 now. That's right.
**[32:36]** Okay. Okay. So that's all this. And here's, you know, 119 pages of transactions of all of the
**[32:44]** transactions going in this one. Now let's pay attention to a couple of these things over here.
**[32:50]** So we have the blocks hash of this block. We also have the previous blocks hash embedded in here.
**[32:58]** We have the block hash. One thing I want to point out, we're going to come to this in a second.
**[33:02]** There is a whole bunch of zeros here. As purposeful, we'll get to that in a second.
**[33:09]** Oh, this block right here was 7500 Bitcoin. So about 524 million just in this one block. That was,
**[33:18]** that was sent. Okay. We also have a nons. Remember a nons is a cryptographic name for a number
**[33:25]** used once. We're going to talk about that in a second. Here's what the Miracle root is for this block.
**[33:29]** We want to calculate it. And then here's the report and the difficulty level. We'll talk about that too.
**[33:35]** Okay. A couple hands first. And then when we talk about mining, how the block gets added. So here's
**[33:39]** it here. Yeah. Just curious how secure the block chain is. Because I know we talked about
**[33:44]** North Korea's like supposedly primary income is from stealing crypto currencies.
**[33:49]** Is that mainly just from social engineering? So let's talk about what what we mean by security.
**[33:55]** So how secure the block is? Are the block chain is? The block chain cryptographically
**[34:01]** is solid until quantum computing breaks ECC. And then we have problems. But cryptographically,
**[34:09]** it's secure far as the technology goes to our understanding. But that doesn't mean that it's
**[34:16]** use is secure. So if somebody steals your wallet address private key, if you're wallet
**[34:22]** address is your public key. But if if somebody steals your wallet, which includes the private key
**[34:26]** associated with that public key, then they can access any of the money that's associated with that
**[34:31]** wallet and make transactions and send them somewhere else. And so it's really that is the problem
**[34:36]** that gets people's hacked, right? It's your wallet, including the private key. You need hacked
**[34:42]** by North Korea. And that can be through social engineering. It can be through malware. It can be through
**[34:46]** a million other different ways. It can be through if you shared some of that with crypto
**[34:51]** currency exchanges. So they can transactions on your behalf without you having your wallet locally.
**[34:55]** That's terrible idea, but that happens all the time. And anytime they can steal the private key,
**[35:00]** the secret key, that's where we have problems. Every block is a collection of transactions.
**[35:09]** It's a bit quite least, yes. How many are in a block? Where does that vary? When the block varies.
**[35:17]** And so this block had 3271. They usually range. The smallest ones are usually like 1500 or so.
**[35:25]** The largest ones are 4,500 or so, but it can vary. It's, we'll talk about mining just a second.
**[35:31]** But when a block is created, they gather chunk or usually all of the pending transactions
**[35:38]** that have happened since the last block got mined and they just throw them into the current transaction.
**[35:44]** Now, that's not universally true. You don't always get all of them. But you get the vast majority
**[35:49]** of the pending ones. And this is a distributed system. So the pending transactions are known
**[35:53]** by everyone on multiple servers all over on the world. It's all shared in a distributed way.
**[35:57]** If you want to run your own node of Bitcoin and have a copy of the block chain,
**[36:01]** you can absolutely run your own the software's downloadable and open source.
**[36:06]** All right. Now, we haven't talked about how does the block
**[36:09]** go into the chain, right? How do we form a new block? That process with Bitcoin, at least, is called
**[36:16]** mining. Okay. Mining is the Bitcoin Census mechanism. Consensus mechanism is the general term
**[36:24]** for how a block gets onto a chain. Other block chains like Ethereum use a different consensus
**[36:29]** mechanism than Bitcoin. So with mining, with Bitcoin mining, what happens is that
**[36:38]** every miner who wants to try to get some of this reward because you actually get a good reward,
**[36:44]** here is your reward for mining this block. Whoever mining this block got 3.16 Bitcoin, which is
**[36:49]** with 110-ish grand, or mining this block. So the question is, how do you get that?
**[36:57]** Well, what you do is you have to create the block in a way that everyone can go, oh, yep, that's it.
**[37:03]** And here's how that happens. Gather all the pending transactions. You form the block, put
**[37:09]** in order, calculate the Merkel route, and calculate all the rest of that header information.
**[37:14]** Okay. So you basically gather all the ones and then you make this. Okay. Put the transactions
**[37:20]** in a list. You calculate the Merkel route. You grab the previous blocks hash because that's already
**[37:25]** there. You just grab it, but you form this. And then you pick unnaughts. A number used to want it.
**[37:34]** And then you hash this header.
**[37:39]** If the header meets the difficulty level, which can be adjusted over time, here's the difficulty.
**[37:47]** If it meets the difficulty level, and this number is sort of meaningless, but if you interpret
**[37:52]** this number, it means the hash has to have a certain number of zeros to start it.
**[37:57]** And so if your hash meets the difficulty level, then you say, great, we mind it,
**[38:04]** here, community, you can verify everything that we actually mind it properly, and boom,
**[38:10]** money goes to us. And if your hash doesn't have after your hash the header with that
**[38:15]** nons, if it doesn't have the right number of zeros in front of it, or anything that's not a zero
**[38:20]** in front of it, then you say, you know, that wasn't it. And let's choose the next number up
**[38:26]** at our nons, hash the header again. And your cryptocurrency mining is just people around the
**[38:33]** world doing as many hashes as possible as fast as possible, whether changing that nons
**[38:38]** until they find one where the zeros are enough zeros for the rest of the community to say,
**[38:43]** yep, that's the one it's added to the blockchain. I thought mine is just using video cards
**[38:49]** mostly to calculate hashes really fast with different nonses every second. So hand or maybe
**[38:56]** let me just talk to you. That's mine. Ethereum and others use a different consensus mechanism
**[39:03]** that doesn't rely on that, but this is how Bitcoin uses things. I should see how.
**[39:10]** Why did people pay up to $100,000 just to say, hey, we match the hash with this.
**[39:18]** Because people think that Bitcoin has value, just like every other currency around the world,
**[39:23]** the US dollar people think it has value. And so we think it has value.
**[39:28]** Does it actually have value in the world? Is the blockchain a good technology? Is it a good use of
**[39:33]** cryptography? What was the question? There's a great, I didn't put it in the slides, but there's
**[39:38]** a great infographic. Should you have a blockchain decision tree and it only leads to no?
**[39:44]** Uh, there's some truth to that. I actually can see a few use cases for blockchain that haven't
**[39:51]** been used fully yet and a whole bunch of uses for blockchain that are terrible ideas.
**[39:56]** Yeah, paying the reward for the money. So the reward comes as part of the protocol of blockchain
**[40:05]** and as part of the transaction fees per transaction. So a part of it comes from the
**[40:11]** transactions themselves and part of it comes from there is a reward designed into the protocol
**[40:17]** or every block that's mined. And it actually over time that reward gets smaller and smaller.
**[40:23]** It's a lot of eventually we'll go down to zero and it'll only be the transaction fees.
**[40:27]** But it was to design in a way to encourage people to mine blockchain from my blocks early.
**[40:34]** Or mine Bitcoin blocks early. So the rewards used to be like 25 block Bitcoin. And then they
**[40:41]** have to down to 12 Bitcoin or 12.5. And then they have to again have to again. And so, you know,
**[40:47]** chunk of this is actually transaction fees instead of the little timber works.
**[40:56]** Okay, so what are actually use cases of block chains? Yeah, so obviously cryptocurrency is a use case
**[41:02]** that people think are legitimate. There are clever things you can do with block chains that have
**[41:07]** smart contracts, which we are used to do a extra credit lab. I don't know, I may be off
**[41:12]** throw it out there this year as an extra credit lab. But I used to do an extra credit lab on
**[41:18]** blockchain and smart contracts. Smart contracts can include stupid things like NFTs, but also
**[41:25]** potentially useful things by allowing you to put a hold embedded into blocks on blockchain.
**[41:33]** So you can have certain cool things. If you use Ethereum to develop applications,
**[41:37]** especially some of that happens in the cloud on the blockchain in a distributed way. And that's
**[41:42]** pretty cool. Here's an example that I think is her, for example, where blockchain could be used,
**[41:48]** but is not. So if you do an ACH transaction, which means you pay for something using a check
**[41:55]** or you receive a check from someone else, right? You deposit the check at your bank.
**[42:00]** And how long until you actually have the money in your account, depends on your bank, if
**[42:05]** things have that. But usually it's say, well, sort of put it in your account, but not really.
**[42:09]** It's really pending for two or three or four days as we talk to the other bank and negotiate
**[42:14]** that and get that all worked out. That's an example where why don't we have a intrabank blockchain
**[42:21]** where things could be verified immediately. And we just handle all ACH transactions,
**[42:27]** mean the banks. They don't trust each other. They just have to use the same system,
**[42:30]** watching make sense to me at least to use in that context. We can instant verify,
**[42:35]** well, almost instant verification of the transactions that happen that way.
**[42:40]** I think it's going to do that? Nope, not yet, but they certainly could. Now, there's a
**[42:44]** much terrible use cases, but that's one of them that could work. Although, and that is promising,
**[42:49]** but still unlikely to ever really be used, is voting systems, or our voting systems are pretty
**[42:55]** bad electronic versions of them, which is when I was still like paper balance.
**[42:58]** But in theory, a blockchain-based voting system could be better. Again, it could be ways
**[43:04]** here to audit and prove that it's broad and it's like that. So, hand up here. Yeah. How does
**[43:11]** I want to be computing? Yeah. Totally blood breaks it if it's based off of any algorithms that are
**[43:16]** susceptible to this. So Bitcoin is currently using a lipstick curve cryptography, which is
**[43:22]** we think totally broken by quantum computing. So there are the based technologies. Yeah,
**[43:27]** there are a plan in place to fork Bitcoin in a way that keeps all the current wallets there,
**[43:34]** but starts using transitions everyone from an ECC wallet to a resistant wallet.
**[43:44]** Plans to do that has been actually implemented yet. So, okay, so that's blockchain. We have
**[43:52]** we have three minutes left. Not really enough to do this thing on your feet or
**[43:56]** toward anything else. Let me just answer questions that you have in three minutes about
**[44:03]** anything that you want to ask about cryptography. And we'll do Dark Web first thing on Thursday,
**[44:09]** a little privacy and talk authentication in text prep. I always thought like a big
**[44:16]** attraction of cryptography was that it was a volunteer. But if everything's using one of the keys,
**[44:21]** can it be trained? So an anonymity is tricky. So every single transaction that has ever
**[44:27]** happened on the blockchain with Bitcoin or Ethereum is totally public. But it only lists the
**[44:34]** wallet address. So if people know who has the wallet address that's not an all anonymity
**[44:40]** and you can see I'm back, maybe I'll pull this out. See every single wallet
**[44:47]** if we were to go through the transactions down here, this particular wallet,
**[44:53]** look on that and say, okay, whatever all their transactions, right? Here, now this one doesn't
**[44:58]** have very many, but here's the total amount of transactions that this wallet has used. So there's no
**[45:04]** only anonymity is because there's no connection between a person and their wallet unless
**[45:10]** there becomes one, right? People can infer from your transactions that it's actually you, you know,
**[45:16]** if you're spending money at organizations that tie that to you, you know, they can potentially
**[45:22]** track this or if it gets out. But the anonymity is provided by the fact that it's listing the
**[45:27]** cryptographic, what public key, but yeah, it's not a transaction is absolutely out of the open
**[45:34]** and everyone can see. Yeah, what a hold and balance is it just saying this wallet address has
**[45:40]** sent and received and sent and received this much money. So they have just a sum of the transactions
**[45:44]** in and out and you can't go negative. In the lab that I'm probably not going to have you do this
**[45:51]** here unless it's extra credit. I have you great your own cryptocurrency in blockchain in C sharp
**[45:57]** and walk through that. If that would be beneficial or interesting to people, maybe I'll make it
**[46:01]** a credit lab. I used to give it as a real lab when cryptocurrency was high and everyone thought it was
**[46:05]** full and there were a lot of blockchain debt jobs out there. Have our students move on to them.
**[46:10]** Now it seems less promising compared to AI and other things. Well, I'm not going to keep you longer.
**[46:17]** If you want to chat cryptocurrency or cryptography with me, I'll stick around a few minutes.
