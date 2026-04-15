# 12 Cryptography - Modern Ciphers

## Slide 1

IS 414:IS Security & Controls
Dr. Taylor Wells

## Slide 2

Admin

## Slide 3

Randomness
3
Challenging to create truly random numbers

## Slide 4

Randomness
4
Atmospheric noise (used by random.org)

## Slide 5

Randomness
5
Radioactive Decay (used by HotBits)

## Slide 6

Randomness
6
Lava Lamps (used by Cloudflare - LavaRand)

## Slide 7

Randomness
7
Cryptographically secure pseudorandom number generator (CSPRNG)
Often use encryption with a seed
RDRAND/RDSEED – Hardware entropy-generating device on newer CPUs
Seeds might include sources of entropy like IO operations, network traffic arrival/delays

## Slide 8

Kerckhoff’s Principle
A cryptosystem should be secure even if everything about the system, except the key, is public knowledge
Security through obscurity ≠ security
Security is primarily in the Key, not algorithm
Auguste Kerckhoff

## Slide 9

The Key Exchange Problem
9

## Slide 10


## Slide 11


## Slide 12

Diffie-Hellman Practice
In groups, two people will exchange a key; others try to figure it out
Let 	p = 23      g = 5
Choose x, any number between 1 and p-1
Compute y = gx mod p
[this can be done on Google, Bing, or Wolfram Alpha]
Share y with your partner
Using the y from your partner and your chosen x and p, compute
shared key = (ypartner)x mod p
See if any of the eavesdropping “Eves” can guess the shared key
Alice and Bob reveal their shared key (they should match)
12

## Slide 13

Limitations of Diffie-Hellman
A new key needs to be negotiated for every new person
No authentication (more on this later)
13

## Slide 14

Security Principles
14

## Slide 15

Overview
Security Threats
Interception
Modification
Interruption
Fabrication
Security Principles
Confidentiality
Integrity
Availability
Authenticity
Non-Repudiation

## Slide 16

Security Threats and Principles
Alice

## Slide 17

Security Threats and Principles
Alice
Bob

## Slide 18

Security Threats and Principles
Alice
Bob

## Slide 19

Security Threats and Principles
Alice
Bob

## Slide 20

Security Threats and Principles
Alice
Bob
Eve

## Slide 21

Security Threats and Principles
Alice
Bob
Eve (eavesdropper)

## Slide 22

Security Threats and Principles
Alice
Bob
Eve
Sometimes we include:
Trudy (an intruder)
Mallory (a malicious attacker who often uses man-in-the-middle attacks)
Trent (a neutral third-party)
And more …

## Slide 23

Security Threats and Principles
Information Interception – When an unauthorized party gains access to data
Alice
Bob
Eve

## Slide 24

Security Threats and Principles
Confidentiality
Protecting information from unauthorized disclosure
The threat of information interception violates this security principle
Confidentiality of information in networks is primarily preserved using encryption

## Slide 25

Security Threats and Principles
Encryption
– Disguising a message by encoding it using a mathematical algorithm
Alice
Bob
Eve

## Slide 26

Security Threats and Principles
Alice
Bob
Eve

## Slide 27

Security Threats and Principles
?
Alice
Bob
Eve

## Slide 28

Security Threats and Principles
?
Symmetric Encryption
– The sender and receiver use the same key for encryption/decryption
Alice
Bob
Eve

## Slide 29

Security Threats and Principles
?
Asymmetric Encryption
– The sender uses the public key of the receiver to encrypt the message and then the receiver uses her private key to decrypt
Alice
Bob
Eve

## Slide 30

Encryption
Symmetric
A single private cryptographic key is used by sender and receiver for encryption and decryption
Stream Ciphers
Encrypt one bit at a time
E.g., RC4
Block Ciphers
Encrypt a group of bits at a time
E.g., AES

## Slide 31

AES
31

## Slide 32

AES
Advanced Encryption Standard
Supercedes the Data Encryption Standard (DES) (and 3DES) for use by the NSA Top Secret info effective 2002
Block Cipher
Designed for high speed and low memory requirements
Rijndael algorithm won the competition
32
Vincent Rijmen
Joan Daemen

## Slide 33

AES

## Slide 34

Block Cipher Modes
34

## Slide 35

Block Cipher Modes
All symmetric block ciphers can be utilized in different ways that we call modes
Different modes have strengths/weaknesses
Some (non-exhaustive) properties of note include:
Error propagation – How an error in one block affects encryption/decryption of subsequent blocks
Parallelization – Can we parallelize the encryption/decryption or does it have to be done “single-threaded”?
Authentication – Does it provide authentication?
Integrity – Does it provide message integrity?
35

## Slide 36

Electronic Codebook (ECB)
36
Each block encrypted separately
Strengths
Simple
Weaknesses
Each block is not independent and properly diffused
Properties
Error Propagation – No
Parallelization – Yes

## Slide 37

Electronic Codebook (ECB)
37

## Slide 38

Cipher Block Chaining (CBC)
38
Each plaintext block XORed with previous block’s ciphertext
Strengths
Diffusion – each block depends on all blocks
Weaknesses
Requires an IV
Subject so some padding attacks (e.g., POODLE)
No parallelization
Properties
Error Propagation – Yes
Parallelization – Encryption: No; Decryption: Yes

## Slide 39

Cipher Block Chaining (CBC)
39

## Slide 40

Cipher Feedback (CFB)
40
One mode that makes a block cipher into a stream cipher
Strengths
Use block ciphers as a stream cipher
Weaknesses
No parallelization on encrypt
Has a “stall” while performing the block encryption
Requires block cipher on both ends
Properties
Error Propagation – Yes, for several blocks
Parallelization – Encryption: No; Decryption: Yes

## Slide 41

Cipher Feedback (CFB)
41

## Slide 42

Galois Counter Mode (GCM)
42

## Slide 43

Galois Counter Mode (GCM)
43
A counter method with authenticated encryption (AEAD)
Strengths
The most recommended mode (currently) if you can use it
Authentication tag for some use cases
Weaknesses
Authentication is weaker than alternatives
Shorter IVs in most implementations are weaker
Potential for repeated counters for LARGE files, not randomized
Properties
Error Propagation – Yes
Parallelization –Yes (mostly)

## Slide 44

Other Modes
Output Feedback (OFB) – block to stream
Counter (CTR) – block to stream
Authenticated Encryption Modes – combining confidentiality and authenticity
CCM, EAX, OCB, etc.
Integrity
HMAC, CMAC, GMAC
Other Modes Tracked by NIST
44

## Slide 45

Encryption
Asymmetric (Public-key Cryptography)
A pair of keys are used
One key is designated the public key and can be shared with anyone
The other key is designated the private key and must remain secret
When a message is encrypted using one key, it can only be decrypted with the other
Based on difficult mathematical calculations
E.g., RSA

## Slide 46

Ron Rivest
Adi Shamir
Leonard Adleman

## Slide 47

RSA
Clifford Cocks

## Slide 48

Trapdoor Function
48

## Slide 49

Euler’s Totient φ(n)
Count of numbers relatively prime to n OR number of integers where greatest common divisor = 1
Challenging (time consuming) to compute, EXCEPT for with prime numbers
49

## Slide 50

RSA Example
Choose 2 prime numbers
Choose p = 3 and q = 11 (small numbers make our math easy)
Compute n = p * q
n = 3 * 11 = 33
Compute φ(n) = (p - 1) * (q - 1)
φ(n) = 2 * 10 = 20
Choose a prime number e that satisfies the following:
1 < e < φ(n)
e and φ(n) are coprime (i.e. e and φ(n) only share a factor of 1)
We could pick 3, 7, 11, 13, 17, or 19 (not 5).
Let e = 7
The public key is {e, n} or {7, 33}
Now we need to compute d so that it satisfies: (d * e) MODφ(n) = 1
(d * 7) MOD20 = 1; one solution would be to make d = 3.
The private key is {d, n} or {3, 33}

## Slide 51

RSA Example
Public Key: {7, 33}
Private Key: {3, 33}
Let’s encrypt our message (m) = 3 using the public key
The encrypted ciphertext (c)
c = 37 MOD 33 = 9
To decrypt the ciphertext:
m = 93 MOD 33 = 3

## Slide 52

RSA Example
Q: Now, can you “crack” or reverse engineer the private key from the message and the public key or the message from the ciphertext?
Public Key: {7, 33}; Ciphertext: c = 9
A: Yes, because these are very small numbers and the prime factors of 33 are very easy to calculate (1, 3, 11)
This is why we use 1024 bit and 2048 bit keys:
Example: www.google.com old 1024-bit key (in hex):
30 81 89 02 81 81 00 d5 6d 62 ec b5 f7 94 2f 35 e9 7b b6 b1 96 47 9f 07 27 00 19 f9 e3 e8 68 34 20 6f 6b 41 16 59 70 c6 93 59 0d 64 80 79 48 be 2f 61 47 0e 56 bf 2f b0 c4 8a 0e b6 c9 6b d1 db 18 09 16 0d 30 f5 76 64 9b 9b b2 28 88 b8 a2 51 7d 6a 18 d6 0d d9 73 44 93 70 62 9f 1c 11 f4 5e 5b 67 7b 6e e0 5b 44 84 71 ed 01 f2 c1 1d c5 4a 2f 41 b9 8e c1 13 02 27 7b f4 a9 a7 3f e3 f1 1b 6d 55 20 d7 60 63 49 02 03 01 00 01
Note, many sites are moving towards elliptical curve cryptography (ECC) which may use shorter keys

## Slide 53

RSA Example
Create the public/private key pair given the following:
p = 5
q = 17
e = 13
Compute n = p * q
Compute φ(n) = (p - 1) * (q - 1)
Choose a prime number e that satisfies the following:
1 < e < φ(n)
e and φ(n) are coprime (i.e. e and φ(n) only share a factor of 1)
The public key is {e, n}
Now we need to compute d so that it satisfies: (d * e) MODφ(n) = 1
The private key is {d, n}

## Slide 54

RSA Exercise
Create the public/private key pair given the following:
p = 5
q = 17
e = 13
n = 85
φ(n) = 64
(d * 13) MOD64 = 1;	d = 5
Public Key: {13, 85}
Private Key: {5, 85}

## Slide 55

Elliptic-Curve Cryptography
A better trapdoor
256-bit ECC key ~ 3072-bit RSA
Faster to calculate than RSA
Curve Definition
Equation
Generator (G) start point defined
Maximum value (often a prime) used as the “MOD”
Note: Lines can “wrap around” and real “curves” are not as pretty
Keys
Public Key {point on curve}
Private Key {number of hops}
55

## Slide 56

https://curves.xargs.org/
56

## Slide 57

Quantum Computing Breaks the Internet?
57

## Slide 58

Quantum Cryptography
Consequences of a “good” quantum computer
Factoring, Discrete Logarithm problem no longer trapdoors
Asymmetric algorithms (e.g., RSA, Diffie-Hellmann, and ECC) are irrevocably broken and must be replaced
Symmetric algorithms like AES are half as effective (so we double the key sizes and are fine)
58

## Slide 59

Shor’s Algorithm (Peter Shor)
59

## Slide 60

Grover’s Algorithm (Lov Grover)
60

## Slide 61

Quantum Cryptography
Consequences of a “good” quantum computer and these algorithms:
Factoring, discrete logarithm problem, elliptic curve math are no longer trapdoors
Asymmetric algorithms (e.g., RSA, Diffie-Hellmann, and ECC) are irrevocably broken and must be replaced
Symmetric algorithms like AES are half as effective (so we double the key sizes and are fine)
61

## Slide 62

What do we dO?
Post-Quantum (or Quantum Resistant) Cryptography
https://csrc.nist.gov/projects/post-quantum-cryptography
https://en.wikipedia.org/wiki/NIST_Post-Quantum_Cryptography_Standardization
62

## Slide 63

Post-Quantum Cryptography Options
63
Supersingular elliptic curve isogeny

## Slide 64

Lattice-Based
64

## Slide 65

Lattice-Based
65

## Slide 66

Lattice-Based – Shortest Vector, Closest Vector
66

## Slide 67

Purposely Adding Errors
Learning with Errors
Code-Based
67

## Slide 68

Security Threats and Principles
Alice
Bob
Eve

## Slide 69

Security Threats and Principles
Information Modification
– Intercepting and changing a message
Alice
Bob
Eve

## Slide 70

Security Threats and Principles
Information Modification
– Intercepting and changing a message
Alice
Bob
Eve

## Slide 71

Security Threats and Principles
Integrity
Assurance that information is accurate and free from alteration
The threat of information modification violates this security principle
Integrity is often ensured using secure hashing (digest) algorithms

## Slide 72

Hash?
72

## Slide 73

Hashing or Digesting Function
One-way encryption
E.g., MD5, SHA-1, SHA-2 (which includes SHA-256), SHA-3
http://www.fileformat.info/tool/hash.htm
Collisions
MD5 and SHA-1 are NOT cryptographically secure
73

## Slide 74

https://sha256algorithm.com/
74

## Slide 75

Security Threats and Principles
For example, the sender computes the hash of a message and sends it
Alice
Bob
Eve

## Slide 76

Security Threats and Principles
For example, the sender computes the hash of a message and sends it
Alice
Bob
Eve

## Slide 77

Security Threats and Principles
Then the sender sends the message
Alice
Bob
Eve

## Slide 78

Security Threats and Principles
The recipient computes the hash and compares it with the hash sent earlier
Alice
Bob
Eve

## Slide 79

Security Threats and Principles
In this example, integrity is assured only if the hash is not modified
Alice
Bob
Eve

## Slide 80

CMAC & HMAC
Message Authentication (MAC) codes
Provide Integrity and Authentication
Most common types:
Cipher-based Message Authentication Code (CMAC)
Algorithm uses block cipher (symmetric) key and message to create the MAC (tag)
Hash-based Message Authentication Code (HMAC)
Uses cryptographic hash and a secret key
80

## Slide 81

Security Threats and Principles
For example, the sender computes the MAC of a message and sends it
Alice
Bob
Eve

## Slide 82

Security Threats and Principles
For example, the sender computes the MAC of a message and sends it
Alice
Bob
Eve

## Slide 83

Security Threats and Principles
Then the sender sends the message
Alice
Bob
Eve

## Slide 84

Security Threats and Principles
The recipient computes the MAC and compares it with the MAC sent earlier
Alice
Bob
Eve

## Slide 85

Security Threats and Principles
The threat of  interruption
Alice
Bob
Eve

## Slide 86

Security Threats and Principles
Availability
The degree to which information and systems are accessible to authorized users
The threat of interruption violates this principle
Confidentiality and integrity depend on availability
Availability is ensured in many ways
Redundancy
Backup and recovery plans
Load balancing
Fixing bottlenecks
Updating hardware and software
… and others

## Slide 87

Security Threats and Principles
Information Fabrication
– Unauthorized addition of information
Alice
Bob
Eve

## Slide 88

Security Threats and Principles
Authenticity
The assurance that a message was sent by the claimed source and not forged
The threat of fabrication violates this principle
Authenticity can be ensured in many ways
Passwords, PIN numbers
Smartcards, USB tokens, Cell phone SMS
Biometrics
Digital Signatures and Digital Certificates

## Slide 89

Security Threats and Principles
Non-repudiation
Requires both authenticity and integrity
A legal issue, but conditions can be partially satisfied by technology
The ability to prove to others that a message originated with its source and was not forged
Non-repudiation is primarily ensured using digital signatures

## Slide 90

Security Threats and Principles
Digital Signature
– First, the sender generates a hash of the message
Alice
Bob

## Slide 91

Security Threats and Principles
Digital Signature
– Then the hash is encrypted with the sender’s private key
Alice
Bob

## Slide 92

Security Threats and Principles
Digital Signature
– The message and encrypted hash are sent to the recipient
Alice
Bob

## Slide 93

Security Threats and Principles
Digital Signature
– The recipient then hashes the message
Alice
Bob

## Slide 94

Security Threats and Principles
Digital Signature
– Then the recipient decrypts the hash with the sender’s public key
Alice
Bob

## Slide 95

Security Threats and Principles
Digital Signature
– Finally, the recipient verifies integrity by comparing hashes
Alice
Bob

## Slide 96

Protection of organizational data from unauthorized disclosure
Security Goals
CIA triad
Assurance that data have not been altered or destroyed
The degree to which information and systems are accessible to authorized users

## Slide 97

Application of Security Principles

## Slide 98

Digital Certificates & PKI
98

## Slide 99

How do we verify identity?
99

## Slide 100

100

## Slide 101

Tell me how a Digital Signature Works
101

## Slide 102

We have to trust SOME ONE
102

## Slide 103

With a digital signature, we CAN know if a message originated with the private key holder, but how do we know if that is the RIGHT person/organization?
103

## Slide 104

Digital Certificate
Electronic document that provides some proof of ownership of a key
104

## Slide 105

Public Key Infrastructure (PKI)
All of the rules, processes, & technology around the creation, distribution, use, & revocation of digital certificates
PKI links keys to people/companies
Two major ways to gain trust in a certificate
Certificate authorities
Web of trust
105

## Slide 106

Certificate Authority
Let’s see who our computers trust
Windows: mmc > Add certificates snap in
Mac: Keychain?
106

## Slide 107

Certificate Authority
Centralized trust model
Types of SSL Certificates
Domain Validated
Organization Validated
Extended Validation
107

## Slide 108

Certificate Revocation
What if we need to revoke certificates?
E.g., Let’s Encrypt needed to revoke over 3 million SSL(TLS) certificates in March 2020
Revocation Methods
Certificate Revocation Lists (CRL) – list from CAs of revoked certificates
Online Certificate Status Protocol (OCSP) – a way to query the CA about the status of a certificate
OCSP Stapling – a short lived message signed by issuing certificate authority verifying that certificate is still valid. Served by domain with certificate
Chrome CRLset and Firefox OneCRL – Google and Mozilla’s abbreviated CRL lists distributed with browser updates
108

## Slide 109

Web of Trust
A decentralized trust model
Certificates can be signed multiple times
Key signing parties
109

## Slide 110

SSL/TLS
110

## Slide 111

SSL and TLS
Secure Sockets Layer [Deprecated] & Transport Layer Security
A suite of protocols for secure communication across networks
Hybrid approach where symmetric and asymmetric encryption are used
TLS 1.3 specification released in 2018
Removes ability to use many cryptographically weak algorithms and processes
Adds perfect forward secrecy
111

## Slide 112

SSL/TLS
http://www.moserware.com/2009/06/first-few-milliseconds-of-https.html

## Slide 113

VPN
113

## Slide 114

VPN

## Slide 115

Protocols supporting VPN
Wide variety of protocols and implementations
e.g., PPTP, L2TP/IPsec, TLS (e.g., OpenVPN), DTLS, MPLS VPN, and many others
Some implementations built into OS, but most require additional software
115

## Slide 116

TOR
116

## Slide 117

117

## Slide 118

TOR

## Slide 119

TOR

## Slide 120

TOR – Onion Services
120
.onion is a non-DNS pseudo-TLD
Recent versions use public keys and a distributed hash table

## Slide 121

Who can see what with TOR
https://www.eff.org/pages/tor-and-https
121

## Slide 122

Blockchain
122

## Slide 123

123

## Slide 124

124

## Slide 125

Cryptocurrency
https://blockchain.info/

## Slide 126

Steganography
126

## Slide 127

Steganography
Concealing data, most commonly within another file
Historically thought to have originated with Herodotus in 440 BC with messenger tattoos
Demo
127

## Slide 128

We’ll talk more about password hashing when we discuss authentication in more detail
128

## Slide 129

DRM
129

## Slide 130

Challenges
130

## Slide 131


## Slide 132

Forward Secrecy
132

## Slide 133

Next
