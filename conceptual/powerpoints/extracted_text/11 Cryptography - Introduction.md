# 11 Cryptography - Introduction

## Slide 1

IS 414:IS Security & Controls
Dr. Taylor Wells

## Slide 2

Admin

## Slide 3

CIA Triad
3

## Slide 4

CIAAA Pentad?
4

## Slide 5

Provided by Cryptography?
5
Almost Always
Almost Always
A lot of the time
No, Access Control Systems
No, IS404/IS531 Stuff

## Slide 6

To the consumer, cryptography is a shadowy protective entity—something like Batman—kind of menacing but on the side of justice, and endowed with mystic powers.
—Bruce Schneier

## Slide 7

Group Activity - Simple Cryptography
Derive a simple encryption / decryption algorithm
What did you design?

## Slide 8

Modern Ciphers Rely on
Transposition
Substitution
Simple/fast math
Trapdoor Functions
8

## Slide 9

Classic Ciphers
Cryptography History
And a modern implementation:
https://colab.research.google.com/drive/10wtv9aC6AHyf4H8hyyEfQf4-GEa05wbZ?usp=sharing
9

## Slide 10

Transposition Cipher
10

## Slide 11

Rise and Shout, The COUGARS are Out!

## Slide 12

r i s e a n d s h ou t , t h e c o u ga r s a r e o u t !

## Slide 13

0 1 2 3 4 5 6 7 8 9r i s e a n d s h ou t , t h e c o u ga r s a r e o u t !

## Slide 14

6 0 2 5 4 8 7 1 3 9d r s n a h s i e oc u , e h u o t t go a s e r t u r a !

## Slide 15

d r s n a h s i e oc u , e h u o t t go a s e r t u r a !

## Slide 16

d r s n a h s i e oc u , e h u o t t go a s e r t u r a !
dco rua s,s nee ahr hut sou itr eta og!

## Slide 17

d r s n a h s i e oc u , e h u o t t go a s e r t u r a !
dco rua s,s nee ahr hut sou itr eta og!

## Slide 18

Instead of columns, we could use rows…
18

## Slide 19

d r s n a h s i e oc u , e h u o t t go a s e r t u r a !
drsnahsieocu,ehuottgoasertura!

## Slide 20

d r s n a h s i e oc u , e h u o t t go a s e r t u r a !
drsnahsieocu,ehuottgoasertura!

## Slide 21

KEY:6 0 2 5 4 8 7 1 3 9CIPHERTEXT:
drsnahsieocu,ehuottgoasertura!

## Slide 22

Decryption
22

## Slide 23

6 0 2 5 4 8 7 1 3 9
drsnahsieocu,ehuottgoasertura!

## Slide 24

6 0 2 5 4 8 7 1 3 9d r s n a h s i e oc u , e h u o t t go a s e r t u r a !

## Slide 25

0 1 2 3 4 5 6 7 8 9r i s e a n d s h ou t , t h e c o u ga r s a r e o u t !

## Slide 26

r i s e a n d s h ou t , t h e c o u ga r s a r e o u t !

## Slide 27


## Slide 28

Substitution Ciphers
28

## Slide 29

ROT13
29

## Slide 30

ATBASH
30

## Slide 31

31
Jeremiah 25:26 And all the kings of the north, far and near, one with another, and all the kingdoms of the world, which are upon the face of the earth: and the king of Sheshach shall drink after them.

## Slide 32

32
Jeremiah 25:26 And all the kings of the north, far and near, one with another, and all the kingdoms of the world, which are upon the face of the earth: and the king of Sheshach shall drink after them.
ששך
בבל
→
Sheshach

## Slide 33

33
Jeremiah 25:26 And all the kings of the north, far and near, one with another, and all the kingdoms of the world, which are upon the face of the earth: and the king of Sheshach shall drink after them.
ששך
בבל
→
Babel (Babylon)
Sheshach

## Slide 34

Caesar Cipher
34

## Slide 35

35

## Slide 36

28
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

## Slide 37

28
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
0

## Slide 38

28
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
1

## Slide 39

28
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
2

## Slide 40

28
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
0
ROOTBEER

## Slide 41

28
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
1
SPPUCFFS

## Slide 42

28
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
2
TQQVDGGT

## Slide 43

c = (p + X) mod 26
X = number of places rotated

## Slide 44

Keyspace

## Slide 45

Keyspace:
Number of possible keys

## Slide 46

28
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

## Slide 47

bruteforce attack

## Slide 48

28
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
TQQVDGGT

## Slide 49

28
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
SPPUCFFS

## Slide 50

28
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
ROOTBEER

## Slide 51

Pigpen “Cipher” / Masonic “Cipher”
51

## Slide 52

Vigenère cipher
A simple polyalphabetic substitution cipher
52

## Slide 53

Vigenère cipher
P:B Y U C O U G A R S
K:R O O T B E E R
C:S M I V P Y K R I G
53

## Slide 54

Vigenère cipher
P:B Y U C O U G A R S
K:R O O T B E E R
C:S M I V P Y K R I G
54

## Slide 55

Vigenère cipher
P:B Y U C O U G A R S
K:R O O T B E E R
C:S M I V P Y K R I G
55
R O

## Slide 56

Vigenère cipher
P:B Y U C O U G A R S
K:R O O T B E E R R O
C:S M I V P Y K R I G
56

## Slide 57

Vigenère cipher
P:B Y U C O U G A R S
K:R O O T B E E R R O
C:S M I V P Y K R I G
57

## Slide 58

Vigenère cipher
P:B Y U C O U G A R S
K:R O O T B E E R R O
C:S M I V P Y K R I G
58

## Slide 59

Vigenère cipherdecrypt
P:
K:R O O T B E E R R O
C:S M I V P Y K R I G
59

## Slide 60

Vigenère cipherdecrypt
P:
K:R O O T B E E R R O
C:S M I V P Y K R I G
60

## Slide 61

Vigenère cipherdecrypt
P:
K:R O O T B E E R R O
C:S M I V P Y K R I G
61

## Slide 62

Vigenère cipherdecrypt
P:B
K:R O O T B E E R R O
C:S M I V P Y K R I G
62

## Slide 63

63

## Slide 64

Vhfuhw
How can these be solved?

## Slide 65

How can these be solved?
|  |  |
| Order Of Frequency Of Digraphs | th er on an re he in ed nd ha at en es of or nt ea ti to it st io le is ou ar as de rt ve |
| Order Of Frequency Of Trigraphs | the and tha ent ion tio for nde has nce edt tis oft sth men |
| Order Of Frequency Of Most Common Doubles | ss ee tt ff ll mm oo |
| Order Of Frequency Of Initial Letters | T O A W B C D S F M R H I Y E G L N P U J K |
| Order Of Frequency Of Final Letters | E S T D N R Y F L O G H A K M P U W |
| One-Letter Words | a, I. |
| Most Frequent Two-Letter Words | of, to, in, it, is, be, as, at, so, we, he, by, or, on, do, if, me, my, up, an, go, no, us, am |
| Most Frequent Three-Letter Words | the, and, for, are, but, not, you, all, any, can, had, her, was, one, our, out, day, get, has, him, his, how, man, new, now, old, see, two, way, who, boy, did, its, let, put, say, she, too, use |
| Most Frequent Four-Letter Words | that, with, have, this, will, your, from, they, know, want, been, good, much, some, time |

## Slide 66

66

## Slide 67

Cryptanalysis
67

## Slide 68

Problem: Nazi Germany using ENIGMA machine to encrypt messages
68

## Slide 69


## Slide 70


## Slide 71

71

## Slide 72

72
Alan Turing
Hans-Thilo Schmidt
Marian Rejewski
Bombe

## Slide 73

Claude Shannon
Frank Miller
Gilbert Vernam
Joseph Mauborgne
One-Time Pad

## Slide 74

One-Time Pad
Must be TRULY random (VERY DIFFICULT)
Must be used only once
Must be at least as long as message
Proven: Plaintext + Random Pad = Random

## Slide 75

Next
