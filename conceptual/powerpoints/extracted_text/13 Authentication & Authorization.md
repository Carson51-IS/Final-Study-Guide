# 13 Authentication & Authorization

## Slide 1

IS 414:IS Security & Controls
Dr. Taylor Wells

## Slide 2

Admin

## Slide 3

Authentication andAuthorization
3

## Slide 4

1100 BC

## Slide 5


## Slide 6

5 And the Gileadites took the passages of Jordan before the Ephraimites: and it was so, that when those Ephraimites which were escaped said, Let me go over; that the men of Gilead said unto him, Art thou an Ephraimite? If he said, Nay;
6 Then said they unto him, Say now Shibboleth: and he said Sibboleth: for he could not frame to pronounce it right. Then they took him, and slew him at the passages of Jordan: and there fell at that time of the Ephraimites forty and two thousand.
Judges 12:5-6

## Slide 7

Shibboleth, noun, [shib – uh – lith, -leth]A  peculiarity of pronunciation, behavior, mode of dress, etc., that distinguishes a particular class or set of persons
7

## Slide 8

8

## Slide 9

9

## Slide 10

Wollochet Bay
10
Wollochet Bay
Hurricane, UT

## Slide 11

11

## Slide 12

12

## Slide 13

Identification - Who are you?Authentication - Prove who you areAuthorization - What you can do.

## Slide 14

14

## Slide 15


## Slide 16


## Slide 17

“Your endowment is, to receive all those ordinances in the house of the Lord, which are necessary for you, after you have departed this life, to enable you to walk back to the presence of the Father, passing the angels who stand as sentinels, being enabled to give them the key words, the signs and tokens, pertaining to the holy Priesthood, and gain your eternal exaltation in spite of earth and hell.”
– Brigham Young
17

## Slide 18

Single Sign-on (SSO) and Federated Identity
18

## Slide 19

Single Sign-on (SSO) and Federated Identity
SAML - Security Assertion Markup Language standard for exchanging authentication information online
OAuth/OAuth 2.0 – Standards for access delegation - Authorization
CAS - Central Authentication Service Web protocol
Kerberos – Local Network authentication protocol
LDAP - Lightweight Directory Access Protocol
19

## Slide 20

20

## Slide 21

Knowledge
21

## Slide 22

Pin Number
22

## Slide 23

Pattern
23

## Slide 24

Security Questions (Knowledge-Based Authentication or KBA)
24

## Slide 25

What makes a good/bad password?
Passwords

## Slide 26

123456
2. password
3. 123456789
4. 12345678
5. 12345
6. 111111
7. 1234567
8. sunshine
9. qwerty
10. iloveyou
11. princess
12. admin
13. welcome
14. 666666
15. abc123
16. football
17. 123123
18. monkey
19. 654321
20. !@#$%^&*
21. charlie
22. aa123456
23. donald
24. password1
25. qwerty123
Top Passwords of 2018

## Slide 27

123456
123456789
picture1
password
12345678
111111
123123
12345
1234567890
senha
1234567
Querty
Abc123
Million2
000000
1234
Iloveyou
Aaron431
Password1
Qqww1122
123
Omgpop
123321
654321
qwertyuiop
Top Passwords of 2020

## Slide 28

28

## Slide 29


## Slide 30

Passwords

## Slide 31

https://www.security.org/how-secure-is-my-password/
http://rumkin.com/tools/password/passchk.php
https://www.grc.com/haystack.htm
http://www.passwordmeter.com/
Passwords

## Slide 32

NIST Guidelines
https://www.nist.gov/blogs/taking-measure/easy-ways-build-better-p5w0rd
32

## Slide 33

Advantages of Passwords
Easily deployable
Users comfortable with this authentication method
33

## Slide 34

Disadvantages of Passwords
Memorable often not secure, secure often not memorable
Reuse
Frequency of change
Meeting password “rules”
Password cracking
34

## Slide 35

35

## Slide 36

Password Cracking
Brute force – try every combo
Combinator – append each word in list
Dictionary (wordlist)
Hybrid – usually dictionary + brute force
Mask – subset of brute force based on patterns of how humans tend to create passwords
36

## Slide 37

Rainbow Tables
37

## Slide 38

How could we prevent (or slow down) password cracking?
38

## Slide 39

Password Storage
Clear text
Hashed
Hashed + salt
Hashed + salt + pepper
39

## Slide 40

Password Storage Examples
Linux:
Django:
<algorithm>$<iterations>$<salt>$<hash>
pbkdf2_sha256$20000$H0dPx8NeajVu$GiC4k5kqbbR9qWBlsRgDywNqC2vd9kqfk7zdorEnNas=
40
Username
Salt
Hash

## Slide 41

Use a slow (and adaptable) hashing algorithm
41

## Slide 42

Limit online brute-force attempts
42

## Slide 43

Password Managers
43

## Slide 44

Other methods for storing passwords
44

## Slide 45

Possession
45

## Slide 46

46

## Slide 47

47

## Slide 48

48

## Slide 49

49

## Slide 50

50

## Slide 51

51

## Slide 52

52

## Slide 53

53

## Slide 54

Passkeys
Any passwordless WebAuthn/FIDO2 Credential
Implemented with Asymmetric Encryption Challenge
54

## Slide 55

Advantages and Disadvantages of Possession (What you HAVE)
55

## Slide 56

Inherent Factors (often Biometrics)
56

## Slide 57

57

## Slide 58

58

## Slide 59

Keystroke Dynamics
59

## Slide 60

Advantages and Disadvantages of Inherent Factors (What you are)
60

## Slide 61

61

## Slide 62

62
Magnetic card – weak4-digit pin – weakCard + pin – less weak

## Slide 63

63

## Slide 64

https://twofactorauth.org/
64

## Slide 65

Advantages and Disadvantages of MFA
65

## Slide 66

Access-Control Models
66

## Slide 67

Access Control Lists
67

## Slide 68

Filesystem ACL
68

## Slide 69

Network ACL
69

## Slide 70

Role-Based Access Control (RBAC)
70
https://csrc.nist.gov/projects/role-based-access-control

## Slide 71

Flat RBAC
71

## Slide 72

Hierarchical RBAC
72

## Slide 73

Constrained RBAC
73

## Slide 74

Symmetric RBAC
74

## Slide 75

Attribute-Based Access Control (ABAC)
75
https://csrc.nist.gov/Projects/Attribute-Based-Access-Control

## Slide 76

76

## Slide 77

77
Policy Enforcement Point
Policy Decision Point
Policy Administration Point
Policy Information Point

## Slide 78

Attribute-Based Access Control (ABAC)
Policies commonly implemented using …
eXtensible Access Control Markup Language (XACML)
Abbreviated Language For Authorization (ALFA)
78

## Slide 79

Not authentication, but related …
79

## Slide 80

Captcha
80

## Slide 81

81

## Slide 82

Next
