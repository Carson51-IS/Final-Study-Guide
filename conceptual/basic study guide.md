# Final Exam (Conceptual) Study Guide

This study guide is not intended to be exhaustive, but to highlight areas that should be studied in depth.

---

## Exam details

- Learning Suite
- No short answer / essay questions
- Not comprehensive (lectures and labs since the midterm)

### Question breakdown

*(May change after last day of class.)*

| Item | Points |
|------|--------|
| 3 Calculation (cryptography) @ 2 points each | 6 |
| 41 Multiple Choice or True/False @ 2 points | 82 |
| 1 Multiple Response @ 2 points | 2 |
| 10 Matching (2 groups @ 1 point each) | 10 |
| **Total: 55 questions** | **100** |

---

## Fraud

- What is fraud? What are the legal requirements?
- **Fraud methods** ù Methods discussed in class (e.g., Triangulation Fraud, Skimming, Nigerian Prince, etc.)
- **Fraud examples** ù What method? What happened? What do we learn? Why were they caught (or not)? What is interesting about these examples?
- Diann Cattani
- OneCoin

### Sample exam question

**OneCoin primarily committed fraud by ù?**

- a. Convincing victims that profits are coming from sales where instead they are coming from new investors (i.e., a Ponzi scheme)
- b. Using the Triangulation Technique
- c. Overstating revenue and physical assets
- d. Underreporting sales to avoid taxes
- e. Keeping two sets of books to hide from lenders, investors, and auditors

---

## Incident response & forensics

### Definitions

- What is an event?
- What is an incident?
- What is a CSIRT? A SOC? How do they differ?

### NIST IR lifecycle

#### Preparation

- What should be prepared?
- Concepts from emergency responders and the military (Fog of War and Chain of Command)

### Sample questions

**A CSIRT evaluates an incident to determine if it is a ransomware attack or not because they have a plan in place for ransomware attacks. Which type of FIRST classification would they be using to determine the type of incident?**

- a. Category [X]
- b. Criticality
- c. Sensitivity
- d. None of the above

- Why is it important to maintain a **chain of custody** for evidence?

---

## Information privacy in organizations

- **GDPR**
  - Rights
- HIPPA
- FERPA
- Confidentiality vs. privacy
- Opt-in vs. opt-out
- Tracking
- Aggregation / identification

### Sample exam question

**Which GDPR right is associated with the ability to remove your account profile on a company's servers?**

- a. Right to Object
- b. Right to Restrict Processing
- c. Right to be Informed
- d. Right to Erasure (Right to be Forgotten)

---

## Sony Pictures

- Background / stakeholders / attackers
- Methods of attack
- Aftermath
- Lessons learned

### Sample questions

- What prompted the initial targeting of Sony Pictures?
- What did Sony Pictures do wrong and what did they do right?
- What is Sony's history of preventing cybersecurity?
- How did the hackers first gain access to Sony Pictures systems?
- What did they do after the initial attack?
- Why was the US President involved? And the theaters?
- Who actually attacked Sony Pictures? What have they done since?

---

## Cryptography

### Classic ciphers

- Transposition
- Substitution
  - ROT13
  - Atbash
  - Caesar
  - Vigenùre

### Cipher concepts

- Keyspace
- Cryptanalysis
- Kerckhoff's Principle
- A trapdoor (one-way) function
- Randomness

### Modern ciphers

- One-time pad
- Diffie-Hellman
- RSA
- AES
- ChaCha20
- Elliptic-Curve Cryptography (ECC)
- Post-Quantum Cryptography

### Threats and principles

**Principles**

- Confidentiality
- Integrity
- Availability
- Authenticity
- Non-Repudiation

**Threats**

- Interception
- Modification
- Interruption
- Fabrication

### Encryption types

- Symmetric vs. asymmetric encryption
- Block vs. stream ciphers

### Block cipher modes

- ECB
- CBC
- CFB
- GCM
- Pros/cons of these modes

### Hashing / digesting algorithms

- Purpose
- Examples (MD5, SHA-1, SHA-256, etc.)
- Collisions

### Other topics

- Message authentication (CMAC, HMAC)
- Digital signatures
- **Digital certificates**
  - Purpose
  - How do you obtain one?
  - What is PKI? What is a CA? What is Web of Trust?
  - Revocation
- **TOR and the dark web**
  - Purpose of TOR
  - How TOR is implemented
- **Steganography**
  - What is it? Why is it used?

### Sample questions

*Alice and Bob both have generated their own asymmetric keys and have shared each of their public keys with the world.*

- How can Alice send a message to Bob that provides confidentiality? Which key is used to encrypt? Which key is used to decrypt? What is encrypted/decrypted?
- How can Bob send a message to Alice that has integrity (authenticity and confidentiality are not necessary here)? What is used?
- How can Alice send a message to Bob that provides authenticity? Which key(s) is/are used?
- How could you secure an incremental application update with cryptography?

### Application of cryptography

Know how to generate keys using the following if you are provided with the formulas and have access to a calculator:

- Diffie-Hellman
- RSA

Know how to encrypt/decrypt with Transposition, Caesar, Atbash, Vigenùre, and RSA.

---

## Authentication

- What is a Shibboleth?

### Concepts

- Identification
- Authentication
- Authorization

### Other topics

- Single sign-on and federated identity

### Categories of factors

- Something you know (Knowledge)
- Something you have (Possession)
- Something you are (Biometrics)

### Passwords

- What makes a good/bad password
- Policies (e.g., requiring upper/lower, numbers/symbols or requiring regular changes)
- Password cracking methods
- Preventing/slowing password cracking
  - Salt
  - Pepper

### Biometrics

- Pros/cons

### MFA / 2FA

- MFA/2FA methods
- TOTP
- Security keys
- WebAuthn / FIDO2
- Weaknesses in MFA

### Sample questions

- What is the purpose of salting a password?
- What are the disadvantages of each type of authentication factor?
- What is an example of a Shibboleth?

---

## HBGary Federal

- Background / stakeholders / attackers
- Methods of attack
- Aftermath
- Lessons learned

### Sample questions

- What prompted the initial targeting of HBGary Federal?
- How did the hackers obtain the credentials to an HBGary employee's email?
- How did the hackers obtain the credentials to an HBGary server?
- Who actually attacked HBGary Federal?
