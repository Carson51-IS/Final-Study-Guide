# IS 414 Final Exam — Comprehensive Conceptual Study Guide

> Synthesized from **lecture slides**, **29 study-session transcripts**, and the original study-guide outline.
> This is **not comprehensive of all possible questions** but covers every bullet on the study guide in depth.

---

## Exam Details

- **Platform:** Learning Suite
- **Format:** No short answer / essay questions
- **Scope:** Not comprehensive — only lectures and labs **since the midterm**

### Question Breakdown

| Item | Points |
|------|--------|
| 3 Calculation (cryptography) @ 2 points each | 6 |
| 41 Multiple Choice or True/False @ 2 points | 82 |
| 1 Multiple Response @ 2 points | 2 |
| 10 Matching (2 groups @ 1 point each) | 10 |
| **Total: 55 questions** | **100** |

### Exam Format Notes (from class)

- **Conceptual portion:** 55 questions, closed-book, roughly one hour. Formulas for DH and RSA calculations will be provided; calculators and Wolfram Alpha / Bing allowed for math.
- **Applied portion:** Open notes/AI/internet; timed chunks (15 min + 45 min); labs since the midterm (cyber defense, cryptography, forensics) are fair game.
- **Crypto calculation questions (3):** Expect one Diffie-Hellman shared-secret computation, one RSA key-generation or encrypt/decrypt, and one classical cipher (Caesar/Atbash/Vigenere) given the key.
- **Digital signatures:** Only ~2-3 questions, but historically the most-missed topic.

---

## 1. Fraud

### What Is Fraud?

Fraud is **gaining an unfair advantage over another person**, usually for financial benefit. For an act to be legally fraudulent, **all five** of the following elements must be present:

1. **A false statement, representation, or disclosure** — there must be a lie.
2. **A material fact that induces a person to act** — the lie must be about something significant enough that it causes someone to do something. "Material" means large/substantive; a $47 discrepancy on a trillion-dollar firm is not material.
3. **An intent to deceive** — the hardest element to prove; the liar must have intended to mislead.
4. **Justifiable reliance** — the victim relies on the misrepresentation in a way that a **normal, reasonable person** would. If the scam is so outlandish that no reasonable person would fall for it, this element may not hold.
5. **An injury or loss suffered by the victim** — usually financial.

Individuals who commit fraud are referred to as **white-collar criminals**. Fraud is notoriously hard to prosecute; prosecutors often pursue adjacent charges (mail fraud, wire fraud, money laundering) instead.

### The Fraud Triangle

Three conditions that increase the likelihood of fraud:

- **Pressure** — financial stress, personal problems, performance targets
- **Opportunity** — weak controls, lack of oversight, unsegregated duties
- **Rationalization** — "Nobody will get hurt," "I'll pay it back," "I deserve this"

As technology professionals, **almost everything we do targets the opportunity side** — reducing the chances someone can commit fraud even if they are motivated to.

### Techniques of Neutralization (Matza & Sykes)

These are rationalizations people use to justify security violations or fraud:

1. **Denial of responsibility** — "Not my fault"
2. **Denial of injury** — "No one got hurt"
3. **Denial of the victim** — "They deserved it"
4. **Condemnation of the condemners** — "You're a hypocrite"
5. **Appeal to higher loyalties** — "Had to protect the family"

Research shows that sanctions (punishments) tend **not** to be effective at preventing policy violations. Better approach: neutralize the neutralization techniques through targeted training.

### Fraud Methods (discussed in class)

| Method | Description |
|--------|-------------|
| **Phreaking** | Hacking the phone system |
| **Pretexting** | Fabricating a scenario to extract information |
| **Ransomware / Scareware** | Malware that locks data or frightens victims into paying |
| **Salami Technique** | Stealing tiny amounts per transaction (e.g., rounding to the nearest nickel and pocketing the remainder) |
| **Skimming** | ATM/gas-pump overlays that capture card data; look for taped card readers |
| **Smishing** | SMS-based phishing |
| **Structuring (Smurfing)** | Breaking cash deposits to stay under the ~$10,000 Currency Transaction Report threshold (e.g., depositing $9,999 repeatedly) |
| **Triangulation Fraud** | Fake marketplace seller fulfills orders by purchasing with a **stolen credit card** elsewhere. The buyer is happy, the platform pays the seller, and the stolen card funds the purchase — effectively laundering stolen card numbers. |
| **Vishing** | Voice-call phishing |
| **Blackmail** | Rising with technology; common variant: phishing emails claiming compromising material |
| **Credit Card Fraud** | Includes ATM shimming (chip-level) and skimming (magnetic stripe) |
| **Identity Theft** | Using someone's SSN, name, DOB, etc. for credit, loans, medical records, employment, and tax fraud |
| **Nigerian Prince / 419** | Advance-fee fraud |
| **Phishing** | Spoofed emails to harvest credentials or install malware |
| **Friendly Fraud (Chargeback Fraud)** | Buyer makes purchase, then disputes the charge to get money back while keeping the goods |

### Fraud Prevention and Mitigation

- Make fraud **less likely to occur**
- **Increase the difficulty** of committing fraud (technical controls, segregation of duties)
- **Improve fraud detection** methods (monitoring, logging, anomaly detection)
- **Reduce fraud losses** (insurance, rapid response)

### Case Study: Diann Cattani

- **BYU Marriott graduate** and former BYU volleyball team member
- Worked at a small company with **weak controls** where she wore many hats
- Started with a small mistake ("wrong credit card") that was never caught, then the behavior normalized — a **slippery slope**
- Convicted felon; lesson: **integrity matters** and even good people face temptation when opportunity exists and controls are weak
- Illustrates the **fraud triangle**: she had pressure (personal), opportunity (weak controls, small company), and rationalization (normalized the behavior)

### Case Study: OneCoin / Ruja Ignatova ("The Missing Crypto Queen")

**What it was:** OneCoin was a **Ponzi scheme** branded as an MLM (multi-level marketing), where commissions were paid for recruiting others to buy "cryptocurrency" packages. **There was no blockchain, no technology, no actual cryptocurrency.**

**Scale:** Brought in approximately **$3.8–4 billion**.

**Key people:**
- **Ruja Ignatova** — "The Cryptoqueen." Father purchased Gusswerk Waltenhofen (a casting factory); Ruja became CEO, ran it into the ground, and was convicted of bankruptcy fraud and illegal accounting in Germany (14-month sentence). She then pivoted to OneCoin. She is currently an **FBI Top Ten Most Wanted** fugitive (reward: $5 million). Owned a £13.5M London penthouse with £500,000 in art.
- **Konstantin Ignatov** (her brother) — arrested at LAX, signed a plea deal, cooperated against Mark Scott. Sentenced to 90 years; sentencing pending other cases.
- **Mark Scott** — U.S. lawyer brought in to set up Caribbean shell companies, offshore accounts, and investment funds to launder ~$400M (earned ~$50M / ~10%). Convicted of conspiracy to commit money laundering and bank fraud. Disbarred November 2020. Denied retrial September 2023.
- **Karl Sebastian Greenwood** — fled to Thailand, extradited to the U.S., pled guilty December 2022, sentenced to 20 years.

**Bulgaria HQ raid (January 2018):** Building found empty — suspected tip-off / paid police.

**OneCoin primarily committed fraud by:** Convincing victims that profits are coming from sales where instead they are coming from new investors (**Ponzi scheme**).

**Podcast:** BBC's "Missing Crypto Queen" (language warning) is a recommended resource.

---

## 2. Incident Response & Forensics

### Definitions

- **Event:** An observable occurrence in IT infrastructure (e.g., a login, a firewall alert).
- **Incident (ISO 27001):** Any event which is **not part of the standard operation** of a service and which causes, or may cause, an interruption to, or a reduction in, the quality of that service.
- **CSIRT (Computer Security Incident Response Team):** Responsible for responding to security incidents. Usually **cross-functional** — "when you have an incident that is bad enough, you get the Avengers together." They follow playbooks for specific incident types. Related terms used mostly synonymously: CERT, CIRT.
- **SOC (Security Operations Center):** A formal organization for **day-to-day monitoring and defending** against security threats. Ongoing operations, like what a cyber defense lab deals with.
- **Key difference:** The SOC handles **continuous monitoring/operations**; the CSIRT is **invoked for major incidents** requiring coordinated response.

### NIST Incident Response Lifecycle (NIST 800-61)

#### Phase 1: Preparation

What should be prepared:
- The **CSIRT** — who is on it, what roles, where do they meet
- **Communication strategy** — internal (management, impacted business units) and external (law enforcement, PR, regulators)
- **Response plans for common attacks** (ransomware playbook, data breach playbook, etc.)
- **Policies and procedures**
- **Defensive tools/techniques**: firewalls, network segmentation, patching, least privilege, network/host logging, user training, risk assessments

**Concepts borrowed from emergency responders and the military:**
- **Fog of War:** Not all information is known during an incident. Decisions must be made with incomplete data, and early reports are often wrong.
- **Chain of Command:** Clear authority structure so decisions get made quickly without conflicting orders. A **senior manager should sponsor the CSIRT** (CISO, CIO, Legal counsel).

#### Phase 2: Detection & Analysis

**Precursors vs. Indicators:**
- **Precursors** show an event **may happen in the future** (e.g., a vulnerability in a scan, receiving intelligence of an upcoming attack)
- **Indicators** show something **happened or is happening now** (e.g., IDS alert, anti-virus detection, failed logins, deviation in network traffic)

**Data sources for detection:** IDS/IPS, SIEM (analytics), Anti-Virus/Anti-Malware, file integrity checks (hashing), third-party monitoring (e.g., FireEye/Mandiant), logs, people (internal and external reports).

**Locard's Exchange Principle:** Everything leaves a trace / evidence.

#### Phase 3: Containment, Eradication, & Recovery

**FIRST Classification Framework** (used by CSIRTs to classify incidents):
- **Category:** What type of incident (DOS/DDOS, compromised information, compromised asset, malware, email-based, policy violation, internal/external hacking, unlawful activity)
- **Criticality:** How urgent the response must be
  - Critical systems / revenue-impacting → **60-minute** initial response
  - Non-critical systems → **4-hour** response
  - Non-critical/possible incidents → **48-hour** response
- **Sensitivity:** Defines "need to know"
  - Level 1 (extremely sensitive): only CSIRT + management
  - Level 2 (sensitive): CSIRT + management + system owners + operations
  - Level 3 (not sensitive): employees can be informed

**Containment** — Keep the problem from getting worse:
- Options: shut down system, disconnect from network, disable functions
- Considerations: overall risk (CIA triad), evidence preservation, feasibility, duration
- **Risks of containment:** tipping your hand (attacker may escalate), removing internet may trigger malware behavior change (e.g., encryption on connectivity loss), changes could damage evidence

**Gathering Evidence:**
- **Chain of custody** — maintaining documentation of who had evidence, when, and where stored, to ensure evidence is admissible in court
- **Evidence log:** identifying info (hostname, IP, model number), who collected, date/time, storage location
- **Forensic images:** bit-by-bit copies of memory and filesystem. Create hashes of originals and copies. Do this quickly — data is lost when systems power off.

**Eradication:** Remove the threat — reformat, rebuild, restore from **clean** backups.

**Recovery:** Fix vulnerabilities and improve defenses **before** putting systems back in production. Continue monitoring for re-compromise. Add indicators of compromise to IDS/IPS.

#### Phase 4: Post-Incident Analysis

Key questions:
- What happened? How well did the response work?
- Were documented procedures adequate?
- What would you do differently?
- How can we detect similar incidents in the future?
- Are additional tools or resources needed?

### Sample Questions

- **A CSIRT evaluates an incident to determine if it is a ransomware attack or not because they have a plan in place for ransomware attacks. Which type of FIRST classification would they be using?** → **Category** (they're determining the *type* of incident)
- **Why is it important to maintain a chain of custody for evidence?** → To ensure evidence is **admissible in court** and can be verified as authentic and untampered.

---

## 3. Information Privacy in Organizations

### What Is Information Privacy?

> "Information privacy refers to the desire of individuals to **control or have some influence over data about themselves**." — Bélanger and Crossler (2011)

### Confidentiality vs. Privacy

- **Confidentiality** focuses on protecting an **organization's** intellectual property and internal information
- **Privacy** deals with protecting **customer/individual** information rather than internal company information

### Is Privacy Only for Criminals?

No. Privacy has historical, religious, and cultural significance:
- Biblical examples: Jesus instructing healed individuals "tell no man" (Matthew 8:4, Mark 7:36)
- Ecclesiastical interviews are confidential — "members may not confess sins or seek guidance if what they share will not be kept confidential"
- Eric Schmidt's quote ("if you have something that you don't want anyone to know, maybe you shouldn't be doing it") is the **wrong view** — privacy is a fundamental right, not evidence of wrongdoing

### GDPR (General Data Protection Regulation)

- Adopted by EU **April 2016**, in effect **May 2018**
- Applies to organizations **within the EU** and also those that **sell to the EU or collect data about EU members**
- Often the **strictest** privacy regulation; many companies **standardize on GDPR globally** to simplify compliance

**The Eight GDPR Rights (know these conceptually — fake rights may appear as distractors):**

1. **Right to be Informed (Transparency)** — Organizations must tell you what data they collect, how it's used, who it's shared with, how long it's retained, and who to contact. This caused the flood of "we've updated our privacy policy" emails in 2018.
2. **Right of Access** — You can obtain your data (e.g., Google Takeout lets you download your data).
3. **Right to Rectification** — Fix inaccurate data (e.g., wrong name in an article, incorrect credit file entry).
4. **Right to Erasure (Right to be Forgotten)** — Request deletion of your profile/account. Doesn't necessarily include transaction/tax records (may be exempt for legal requirements); may require anonymized rather than fully deleted records.
5. **Right to Restrict Processing** — Granular limits on how your data is used (e.g., cookie consent: essential-only vs. all partners).
6. **Right to Data Portability** — Export your data in a usable format to move to another system (e.g., Gmail exports as .eml files).
7. **Right to Object / Withdraw Consent** — Stop processing after opt-out; complain to the company or to an EU supervisory authority; organizations may need a DPO (Data Protection Officer).
8. **Rights Related to Automated Decision-Making** — Request **human review** of algorithmic decisions (loan approvals, insurance, admissions). Distinguished from the general right to object.

**Sample question:** "Which GDPR right is associated with the ability to remove your account profile on a company's servers?" → **Right to Erasure (Right to be Forgotten)**

**Impact of GDPR:**
- Huge compliance expenditures
- Cookie banners everywhere (arguably not what GDPR intended)
- Potentially **hurting smaller organizations** disproportionately (regressive compliance costs)
- Shifting online advertising from personalized to contextual in EU
- Large fines: Meta fined ~€1.2 billion; Meta treats fines as "cost of doing business" and lobbies the US to pressure the EU
- Some sites blocked EU access entirely

### Opt-In vs. Opt-Out

- **GDPR:** Generally **opt-in** — explicit consent required before data collection
- **US laws:** Generally **opt-out** — data collected by default, you must request removal

### Other Privacy Laws

**CCPA (California Consumer Privacy Act, 2018):**
- Often called "GDPR light" — shorter rights list, **opt-out** model
- Applies to businesses meeting certain revenue/data thresholds

**Utah Consumer Privacy Act (UCPA):**
- Very **narrow** applicability: Annual Revenue ≥ $25M AND (Data on ≥ 100,000 consumers OR (>50% of revenue from selling data AND data on ≥ 25,000 consumers))
- In practice, "basically applies to data brokers" and arguably "applies to no one" in Utah
- Consent: opt-out; Rights: access, deletion, data portability, restrict some processing, privacy notifications
- Penalties: up to $7,500 per violation

**HIPAA (1996):**
- US law safeguarding **medical information**; strengthened by HITECH Act (2009 stimulus)
- **Covered entity:** plan, provider, or clearinghouse transmitting health info electronically
- **Required** vs **addressable** implementation specifications
- Post-2009 enforcement includes significant fines

**FERPA:**
- Protects **education records** — grades, class recordings, etc.

### Tracking, Aggregation, and Identification

- **Behavioral tracking & cookies** — websites track user activity
- **Aggregation and identification** — combining datasets to re-identify "anonymous" users
- **K-anonymity:** A metric for re-identification risk. The **minimum count** of people sharing a particular combination of attributes. If K=1, the individual is **uniquely identifiable**.
- **Browser fingerprinting** — unique combination of browser settings, fonts, plugins (check: coveryourtracks.eff.org)

---

## 4. Sony Pictures

### Background

- **Sony Pictures** = film/TV subsidiary; was Columbia Pictures, acquired by Sony, still uses Columbia branding
- Parent **Sony** has ~$70B annual revenue
- Had a "golden era" (~Bond/Daniel Craig, Spider-Man/Andrew Garfield, animation like *Cloudy with a Chance of Meatballs*) making it a top-tier studio
- **Rough patch before the hack:** expensive "tent-pole" flops (e.g., *After Earth*, *White House Down*)
- Strategy pivot toward **high-ROI, lower-cost films** (comedy, horror, rom-com); **Seth Rogen** brought in for track record

### Key People

- **Amy Pascal** — Co-Chair, **creative** side (greenlights, scripts, production)
- **Michael Lynton** — Co-Chair / CEO, **business/finance** side
- **Jason Spaltro (CISO, Sony Pictures)** — Infamously said:
  - Focus investments on security **"that are absolutely required by law"**
  - Would **not invest $10M to avoid a possible $1M loss** — defensible risk management if the loss estimate were accurate, but actual harm was vastly larger (~half a billion dollars)
- **Philip Reitinger** — Strong security executive from DHS/CISA predecessor, brought to **Sony parent** level; spent ~3 years, but little changed because Japan corporate wouldn't fund security
- **Kim Jong-un** — Political target of *The Interview*
- **Guardians of Peace** — Hacktivist front name used by attackers
- **Lazarus Group** — North Korean state-sponsored group behind the attack

### Sony's Pre-Breach Security History ("Don't Poke the Internet")

- **2005:** Sony BMG rootkit on music CDs — malware auto-installed on Windows to block ripping. A **rootkit hides itself from the user**. Attackers repurposed Sony's rootkit code, making global malware worse.
- **2008:** PlayStation website compromised
- **2011:** PlayStation Network breach (77M users, >3-week outage)
- **2011:** Sony Online Entertainment breach (25M customers)
- **2011:** Sony Pictures website defaced / data stolen
- Sony's aggressive legal posture against hackers/modders (PS3 DRM cracking, going after a reverse-engineer) "really pissed off the internet"

### Security Practices at the Time of the Hack

| Control | Status |
|---------|--------|
| Passwords | Weak, based on personal/real-world facts |
| MFA/2FA | Little to none |
| Encryption | Near 0% of data encrypted |
| Training | Minimal ("a session or two every few years") |
| Data segmentation | None — HR/SSN files alongside scripts on shared servers |
| Network segmentation | Very little |
| Firewall | In some accounts, managed by non-technical studio staff |
| Anti-virus | Present but pattern-based — useless against custom/novel malware |
| IT staffing | Very small team |

### *The Interview*

- Plot: CIA uses a talk-show setup to assassinate Kim Jong-un
- North Korea's opposition was predictable (parallel: how would the US react to a foreign film depicting the assassination of a US president?)
- Trailers briefly pulled → **Streisand Effect** (everyone wanted to see it)
- After the hack: theaters refused to show it due to physical threats (Aurora shooting made chains risk-averse); President Obama weighed in (free speech); ultimately released online with high views but weak theatrical revenue

### The Attack (Mapped to the Cyber Kill Chain)

1. **Reconnaissance** — Attackers went to **LinkedIn** to identify Sony employees and roles. Infrastructure recon also occurred (malware later had **hard-coded internal IP addresses**).

2. **Weaponization** — Built on prior wiper lineage (**Shamoon / DarkSeoul**). Used **EldoS disk driver** to bypass the OS for fast disk wiping. Created **custom malware** to avoid anti-virus detection. Set up **web servers** for phishing operations. Malware contained hard-coded Sony credentials.

3. **Delivery** — **Spear-phishing emails** posing as Apple ID problems → fake password reset pages → credential harvesting.

4. **Exploitation** — Social engineering (phish) + **SMB vulnerability** → **worm** (malware that propagates through the network) spreads across the LAN.

5. **Installation** — Wiper and other components installed broadly across machines.

6. **Command & Control** — At least **3 C2 servers**: Italy (former VPN endpoint), Poland (a business), Thailand (a university). These locations were chosen because traffic from them looks normal and isn't associated with North Korea.

7. **Actions on Objectives:**
   - **Months of exfiltration** before detection; data was throttled/low bitrate to avoid triggering IDS
   - **~47,000 Social Security Numbers**, salaries, addresses, and other PII stolen
   - **5 unreleased movies** leaked (including Brad Pitt's *Fury* — ~1.2M downloads in one week)
   - Scripts and **emails** leaked (Amy Pascal's racially insensitive Obama comments; disparaging remarks about Jolie, DiCaprio, Kevin Hart)
   - **>3,000 computers and 750 servers wiped**
   - On-screen scareware-style demands (kill *The Interview*) with graphic threats against executives

### Aftermath

- **Improvements:** Better passwords, some data/network segmentation, some training, slow MFA adoption, "started doing something" with encryption
- **CISO stayed** for years (aligned with parent refusing to spend)
- **CEO Lynton** was not fired (remained for 15+ years)
- **Pascal** resigned years later — more from PR/email fallout than the breach
- **Guardians of Peace** = front name. The actual attackers: **Lazarus Group** (North Korean state-sponsored). FBI issued most-wanted posters for three individuals.

### Lazarus Group Evolution

- Early: DDoS attacks against South Korea
- 2014: Sony Pictures attack (inflection point)
- 2015-16: Bangladesh Bank ($81M stolen via SWIFT), Mexican/Polish financial sector attacks
- 2017: **WannaCry** ransomware (called "largest ransomware" at the time); Taiwan bank; crypto attacks
- 2020: AstraZeneca and pharmaceutical companies
- 2021: Targeting security researchers
- 2022+: Many cryptocurrency exchange thefts (major income source)

### Sample Questions

- **What prompted the initial targeting of Sony Pictures?** → *The Interview*, a comedy depicting the assassination of Kim Jong-un
- **How did the hackers first gain access?** → Spear-phishing emails disguised as Apple ID alerts, harvesting credentials
- **What did Sony do wrong?** → Weak passwords, no MFA, no encryption, no data/network segmentation, minimal training, understaffed IT
- **Why was the US President involved?** → Free speech implications when theaters refused to show the film after physical threats
- **Who actually attacked Sony Pictures?** → **Lazarus Group** (North Korean state-sponsored), operating under the name "Guardians of Peace"

---

## 5. Cryptography

### CIA Triad + Crypto's Role

| Principle | Crypto provides? | How |
|-----------|-----------------|-----|
| **Confidentiality** | Almost always | Encryption |
| **Integrity** | Almost always | Hashing, MACs, digital signatures |
| **Availability** | No | Infrastructure concern (IS 404 / IS 531) |
| **Authenticity** | Most of the time | Digital signatures, certificates |
| **Non-Repudiation** | Yes (via integrity + authenticity) | Digital signatures |

### Security Threats and Principles

| Threat | Violates | Mitigation |
|--------|----------|------------|
| **Interception** — unauthorized access to data | Confidentiality | Encryption |
| **Modification** — intercepting and changing a message | Integrity | Hashing, MACs, digital signatures |
| **Interruption** — disrupting service | Availability | Redundancy, backups, load balancing |
| **Fabrication** — unauthorized addition of information | Authenticity | Digital signatures, certificates |

**Standard characters:** Alice (sender), Bob (receiver), Eve (eavesdropper), Trudy (intruder), Mallory (man-in-the-middle attacker), Trent (neutral third party).

### Classic Ciphers

**Transposition** — rearranging the positions of characters (not changing them). Example: columnar transposition with a numeric key defining column order. The **scytale** (cylinder + strip) is an ancient transposition device.

**Substitution** — replacing characters with different characters.

- **ROT13:** Rotate each letter 13 positions. Applying twice returns the original (since 26/2 = 13).
- **Atbash:** Reverse the alphabet (A↔Z, B↔Y, etc.). Biblical example: **Jeremiah 25:26** — "Sheshach" (ששך) decrypts to "Babel/Babylon" (בבל) via Hebrew Atbash.
- **Caesar Cipher:** Shift each letter by a fixed number. Formula: c = (p + X) mod 26. **Keyspace = 25** (shift of 26 = identity, not a valid key).
- **Vigenere Cipher:** Polyalphabetic substitution using a keyword. Each letter of the key shifts the corresponding plaintext letter by a different amount (using the tabula recta). Key is **repeated** to match message length. More resistant to frequency analysis than monoalphabetic ciphers.

**Important distinction — Encoding vs. Encryption:**
- **Pigpen / Masonic cipher:** "Basically a font" — it's an **encoding** (substituting symbols for letters without a secret key), not true encryption.
- **Morse code:** Also encoding, not encryption.
- If it uses a **secret key**, it's encryption. If it's just saving in a different format, it's encoding.

### Cryptanalysis

Using ciphertext structure and language statistics (letter frequency, common digraphs like TH, short words) to break ciphers without the key.

**Enigma:** Rotors, reflector, plugboard; daily key sheets. Weakness: operators used non-random daily indicators (e.g., "Heil Hitler," women's names). Polish mathematician **Marian Rejewski** made early progress; **Alan Turing** (the "father of modern computing") and team at Bletchley Park built the **Bombe** to systematically crack settings. The UK needed **US manufacturing** (Dayton cash registers). Vital lesson: **don't act on every decrypt** or the enemy changes settings (D-Day planning relied on this discipline).

### Cipher Concepts

- **Keyspace:** The total number of possible keys. Caesar has 25; longer keys = larger keyspace = harder to brute force.
- **Cryptanalysis:** Breaking ciphers using mathematical/statistical methods.
- **Kerckhoffs's Principle:** "A cryptosystem should be secure even if **everything about the system, except the key**, is public knowledge." Security through obscurity ≠ security. Modern algorithms (AES, RSA) are fully public; security resides in the key.
- **Trapdoor (one-way) function:** Easy to compute in one direction, computationally hard to reverse. Examples: integer factorization (RSA), discrete logarithm (DH), elliptic curve (ECC).
- **Randomness:** Truly random numbers are hard to generate. Sources: atmospheric noise (random.org), radioactive decay (HotBits), lava lamps (Cloudflare LavaRand). **CSPRNG** (Cryptographically Secure PRNG): uses encryption with a seed; hardware entropy (RDRAND/RDSEED in CPUs); seeds from IO operations, network timing. The standard `random()` function in most languages is **not** cryptographically secure.

### Modern Ciphers

**One-Time Pad (OTP):**
- Proven **perfectly secure** by **Claude Shannon** (father of information theory): plaintext + truly random pad = random ciphertext.
- Requirements: pad must be **truly random** (very difficult), used **only once**, and **at least as long as the message**.
- Impractical for most uses due to key distribution and length requirements.
- Associated with **Frank Miller, Gilbert Vernam, Joseph Mauborgne** (development), and **Claude Shannon** (proof).

**Diffie-Hellman Key Exchange:**
- Solves the **key exchange problem**: how do two parties who've never met agree on a shared symmetric key over a public channel?
- Based on the **discrete logarithm** problem: computing g^x mod p is easy; finding x given the result is hard.
- **Process:** Both parties agree on public values g and p. Each picks a private x, computes y = g^x mod p, shares y publicly. Each computes the shared secret using the other's y and their own x.
- **Critical:** DH is an **asymmetric process** that produces a **symmetric key** for bulk encryption (AES/ChaCha). It is NOT "asymmetric encryption."
- **Limitations:** No authentication (you don't know it's really Bob); need a new key per peer; vulnerable to **man-in-the-middle** if not combined with authentication.
- **Forward secrecy / Ephemeral DH:** Using a **new DH key per session** so that if a long-term key is later compromised, past sessions remain safe. Adversaries who "harvest now, decrypt later" are thwarted.
- **ECDH (Elliptic Curve DH):** Modern variant using elliptic curves for shorter keys and faster computation.

**RSA:**
- Named after **Rivest, Shamir, Adleman** (public discovery). **Clifford Cocks** at GCHQ discovered it ~10 years earlier but it was classified.
- **Trapdoor:** integer factorization / **Euler's totient** — easy to compute given the prime factors p and q, hard without them.

**RSA Key Generation (know for exam):**

1. Choose two prime numbers **p** and **q**
2. Compute **n = p × q**
3. Compute **φ(n) = (p-1) × (q-1)** (Euler's totient for two distinct primes)
4. Choose **e**: must be prime, 1 < e < φ(n), coprime with φ(n)
5. **Public key = {e, n}**
6. Find **d** such that **(d × e) mod φ(n) = 1**
7. **Private key = {d, n}**

**RSA Encrypt/Decrypt:**
- Encrypt: **c = m^e mod n** (using public key)
- Decrypt: **m = c^d mod n** (using private key)

**Worked example from class:** p=3, q=11 → n=33, φ(n)=20, e=7, d=3. Encrypt m=3: c = 3^7 mod 33 = 9. Decrypt: m = 9^3 mod 33 = 3.

**Practice problem:** p=5, q=17, e=13 → n=85, φ(n)=64, d=5. Public key: {13, 85}. Private key: {5, 85}.

**AES (Advanced Encryption Standard):**
- **Symmetric block cipher**; superseded DES (and interim Triple-DES = run DES three times)
- Won a NIST competition; originally called **Rijndael** (by Vincent Rijmen and Joan Daemen)
- Block size: **128 bits**; **10 rounds** for standard AES
- Round operations (high level): **SubBytes** (S-box substitution), **ShiftRows**, **MixColumns** (matrix multiplication), **AddRoundKey** (XOR with expanded round key). MixColumns is omitted in the final round.
- Hardware AES instructions in modern CPUs make it extremely fast
- Why 10 rounds? Cryptanalysis showed 4 rounds could be broken.

**ChaCha20:**
- A modern **stream cipher**; very fast, "taking over" in some contexts
- Used alongside AES as an alternative

### Symmetric vs. Asymmetric Encryption

| | Symmetric | Asymmetric |
|--|-----------|------------|
| **Keys** | Single shared key (two copies) | Key pair: public + private |
| **Speed** | Fast | Slow |
| **Use case** | Bulk data encryption | Key exchange, signatures, certificates |
| **Examples** | AES, ChaCha20, DES | RSA, ECC, DH |

### Block vs. Stream Ciphers

| | Block | Stream |
|--|-------|--------|
| **Operation** | Encrypts fixed-size chunks (e.g., 128-bit blocks for AES) | Encrypts bit-by-bit or byte-by-byte |
| **Best for** | Stored data, large payloads | Live/streaming data (A/V) |
| **Examples** | AES | RC4 (legacy), ChaCha20 |

### Block Cipher Modes (exam focus: high-level properties, not implementation details)

| Mode | Description | Error Propagation | Parallelization | Auth/Integrity |
|------|-------------|-------------------|-----------------|----------------|
| **ECB** | Each block encrypted independently | No | Yes | No |
| **CBC** | Each plaintext block XORed with previous ciphertext; requires random IV | Yes | Encrypt: No; Decrypt: Yes | No |
| **CFB** | Makes a block cipher act like a stream cipher | Yes (several blocks) | Encrypt: No; Decrypt: Yes | No |
| **GCM** | Counter mode + authentication tag (AEAD) | Yes | Yes (mostly) | Yes (weak but useful) |

**Key exam points:**
- **ECB is bad for structured/repetitive data:** The famous "Tux the penguin" example — encrypting a bitmap with ECB-AES still shows the penguin's outline because identical plaintext blocks produce identical ciphertext blocks. **Don't use ECB.**
- **CBC:** Better than ECB (diffusion), but subject to **padding oracle attacks (POODLE)**. "Don't use if you can help it."
- **CFB:** Useful when you need a block cipher to behave like a stream cipher (e.g., org bans RC4 but can't use ChaCha yet).
- **GCM:** The **recommended default**. "Most widely implemented, still considered good." Provides both encryption and an authentication tag for integrity. Lab uses AES-GCM.

### Hashing / Digest Algorithms

- **Purpose:** One-way function producing a fixed-length "fingerprint" of data. Used for **integrity checks**, duplicate detection, password storage. Not reversible.
- **Good hash properties:** Small input change → large, unpredictable output change. Fixed-length output regardless of input size.
- **Collisions:** Inevitable (infinite inputs → finite outputs), but a good hash makes forced/practical collisions computationally infeasible.

| Algorithm | Status |
|-----------|--------|
| **MD5** | Too short; purposeful collisions feasible. **Do not use cryptographically.** |
| **SHA-1** | Forced collisions demonstrated. **Do not use cryptographically.** |
| **SHA-256** (part of SHA-2) | Most widely used; currently secure. |
| **SHA-3** | Newer alternative. |

**Instructor note:** SHA-256 math won't be on the exam; know the concepts and which algorithms are secure vs. broken.

### Message Authentication (CMAC, HMAC)

- **MAC (Message Authentication Code):** Hash of a message encrypted with a **symmetric key** (shared between parties). Provides **integrity + authenticity** among those sharing the key.
- **CMAC:** Cipher-based MAC (uses block cipher symmetric key)
- **HMAC:** Hash-based MAC (uses cryptographic hash + secret key)
- **Limitation vs. digital signatures:** You can't publish a single MAC for everyone — it's per-sender/per-key. A digital signature uses a **private key** that only the signer holds, and anyone can verify with the **public key**.

### Digital Signatures (historically the most-missed exam topic)

> **"A digital signature is a hash of a message encrypted with the sender's private key."**

**Process:**
1. Sender **hashes** the message
2. Sender **encrypts the hash** with their **private key** → this is the digital signature
3. Sender transmits message + signature
4. Recipient **hashes** the received message independently
5. Recipient **decrypts the signature** using the sender's **public key**
6. Recipient **compares** the two hashes — if they match, the message has **integrity** (wasn't altered) and **authenticity** (came from the private key holder)

**What it provides:**
- **Integrity** — message wasn't altered
- **Authenticity** — came from the claimed sender
- **Non-repudiation** — sender can't deny sending (legal concept; requires both integrity and authenticity)
- **Does NOT provide confidentiality** on its own — anyone can read the message; the signature only proves it wasn't tampered with

**Real-world example:** OS updates — vendor hashes the update file, signs the hash with their private key. Your OS verifies with the vendor's built-in public key, proving the update came from the real vendor and is complete/unaltered.

### Digital Certificates & PKI

- **Digital certificate:** Electronic document that **links a public key to an individual or organization**. Provides proof of key ownership.
- **PKI (Public Key Infrastructure):** All the rules, processes, and technology around **creation, distribution, use, and revocation** of digital certificates. PKI links keys to people/companies.

**Two trust models:**
- **Certificate Authority (CA):** Centralized trust. Your browser/OS ships with a list of trusted CAs. Certificate types: Domain Validated, Organization Validated, Extended Validation.
- **Web of Trust:** Decentralized trust. Certificates signed by multiple peers; key-signing parties.

**Certificate Revocation:**
- **CRL (Certificate Revocation List):** List from CAs of revoked certificates
- **OCSP (Online Certificate Status Protocol):** Query the CA about certificate status in real-time
- **OCSP Stapling:** Server includes a short-lived CA-signed statement that its certificate is still valid
- **Browser CRL sets:** Chrome CRLset, Firefox OneCRL — abbreviated CRL lists distributed with browser updates

### SSL/TLS

- **SSL:** Deprecated; **TLS** is the current standard (TLS 1.3 released 2018)
- Hybrid approach: asymmetric encryption for key exchange, symmetric for bulk data
- TLS 1.3 removes weak algorithms and adds **perfect forward secrecy**
- The TLS handshake negotiates algorithms and DH parameters; the combination of algorithms is called a **cipher suite**

### VPN

- Creates an encrypted tunnel across networks
- Protocols: PPTP, L2TP/IPsec, TLS-based (OpenVPN), DTLS, MPLS VPN, etc.
- Concern: VPN providers may keep **logs** — your trust shifts from your ISP to the VPN provider

### TOR and the Dark Web

**Web layers:**
- **Surface/Clear web:** Public, indexed by search engines
- **Deep web:** Behind authentication/paywalls — the **majority** of the web (medical records, email, streaming content)
- **Dark web:** Requires special software like Tor; a **tiny** fraction of the web (thousands vs. billions of pages)

**TOR (The Onion Router):**
- **Purpose:** Anonymity, NOT guaranteed confidentiality
- **How it works:** Layers of encryption, each stripped by a successive relay. Data is encrypted with each relay's public key in layers. **Entry/guard node** → middle relay → **exit relay**. Exit relay can see plain HTTP (but not HTTPS content).
- **.onion addresses** ≈ SHA-256 hashes of service public keys; vanity prefixes via brute force
- **Tor vs. VPN:** Tor is slower; VPN has log concerns; attackers sometimes chain VPN + Tor
- **Exit relay risk:** Running an exit relay in the US carries legal risk if abusive traffic exits through you
- **Legitimate .onion sites:** BBC, CIA, Reddit, ProtonMail, Bible access in censored regions

**Dark web content (descriptive):** Stolen credit/debit cards (priced below balance due to fraud risk), PayPal credentials, counterfeit currency, stolen hardware, drugs, fake IDs, fraud services. Payment is almost always **Bitcoin or cryptocurrency**. Law enforcement conducts takedowns (e.g., Ragnar Locker seized by Interpol).

### Steganography

- **What:** Concealing data within another file (most commonly images)
- **History:** Attributed to Herodotus (~440 BC) — message on a shaved head, hair regrows to conceal it
- **Modern technique:** **Least Significant Bit (LSB)** in image pixels per color channel. Imperceptible to the human eye but detectable with analysis tools.
- **Best practice:** Encrypt the hidden payload (e.g., AES) before embedding so even if detected, it can't be read.
- **Instructor note:** If steganography appears on the final, it will be announced in advance; otherwise assume it won't be on the exam.

### Elliptic-Curve Cryptography (ECC)

- A **better trapdoor** than RSA's integer factorization
- **256-bit ECC ≈ 3072-bit RSA** in security strength — shorter keys, faster computation
- Keys: **public key = point on curve**, **private key = number of hops** from the generator point
- Google uses ECC; BYU still uses RSA (4096-bit) in their certificate
- **ECDH (Elliptic Curve Diffie-Hellman)** is the modern DH variant

### Post-Quantum Cryptography

**The threat:**
- **Shor's algorithm:** Breaks RSA, DH, and ECC by making factorization and discrete log easy for quantum computers. These algorithms would be **"irrevocably broken and must be replaced."**
- **Grover's algorithm:** Gives quadratic speedup for symmetric key search → AES needs **double the key size** (AES-256 instead of AES-128) but remains fundamentally sound.
- **Harvest now, decrypt later:** Adversaries may record encrypted traffic today and decrypt when quantum capability exists.

**Post-quantum solutions (NIST competition):**
- **Lattice-based** cryptography (shortest vector / closest vector problems)
- **Code-based** cryptography (learning with errors — intentionally adding approximation/error so quantum doesn't help)
- Apple iMessage has already shipped **post-quantum** algorithms

### Application of Cryptography (Exam Calculations)

**Know how to perform these with provided formulas and a calculator:**

1. **Diffie-Hellman:** Given g, p, and your partner's public value y_partner, compute the shared secret = (y_partner)^x mod p.
2. **RSA:** Given p, q, e → compute n, φ(n), d → encrypt/decrypt with c = m^e mod n and m = c^d mod n.
3. **Classical ciphers:** Encrypt/decrypt with Transposition (column key), Caesar (shift), Atbash (reverse alphabet), Vigenere (tabula recta + repeating key), and RSA.

### Blockchain / Bitcoin (supplementary)

- **Block structure:** Header + transactions; **Merkle root** (hash of hashes of all transactions) — any change to any transaction breaks the root
- **Chain integrity:** Each block includes the previous block's hash
- **Mining:** Adjust nonce until hash meets difficulty (leading zeros); rewards + fees to miners; reward halves over time
- **Wallets:** Address = ECC public key; transactions signed with private key
- **"Do you need a blockchain?"** — Usually no; niche use case: inter-bank settlement without intermediary delays. Instructor's decision tree: "Should you have a blockchain? **No.**"

---

## 6. Authentication

### What Is a Shibboleth?

From **Judges 12:5-6**: The Gileadites used pronunciation of "Shibboleth" (vs. "Sibboleth") as a test to identify Ephraimites — 42,000 were killed for failing. A **shibboleth** is "a peculiarity of pronunciation, behavior, mode of dress, etc., that distinguishes a particular class or set of persons." Modern examples: place-name pronunciations (e.g., "Wollochet Bay"), cultural references.

### Core Concepts

- **Identification:** An identity **claim** ("I am Carson")
- **Authentication:** **Proving** that claim (showing a passport, entering a password)
- **Authorization:** What you're **allowed to do** after authentication (permissions, roles, access levels)

### Single Sign-On (SSO) and Federated Identity

- **SSO (e.g., BYU CAS):** One organization, **one login** grants access to many applications. **Risk:** session compromise opens many systems.
- **Federated Identity:** Identity from a **third party** (Google, GitHub) travels to other organizations' apps.

**Protocols:**
- **SAML (Security Assertion Markup Language):** Standard for exchanging authentication information between systems (e.g., after CAS login, tells the app you're authenticated)
- **OAuth/OAuth 2.0:** Standards for **access delegation** (authorization, not authentication per se). Lab uses OAuth with Google API.
- **CAS (Central Authentication Service):** Web SSO protocol
- **Kerberos:** Local network authentication protocol
- **LDAP:** Lightweight Directory Access Protocol

### Categories of Authentication Factors

| Factor | Type | Examples |
|--------|------|----------|
| **Something you know** | Knowledge | Password, PIN, pattern, security questions |
| **Something you have** | Possession | Phone, hardware token, smart card, security key |
| **Something you are** | Biometrics (Inherent) | Fingerprint, face, iris, keystroke dynamics, vein pattern |

### Passwords

**What makes a good password:** **Length** and **non-reuse** are the most important characteristics. Random words plus separators between them (not just "correct horse battery staple" — that exact string is in every cracking dictionary now; misspell a word or add random symbols between words).

**The XKCD model:** Complex rules produce passwords that are hard to remember and not long enough. Length increases difficulty **exponentially**; extra symbol rules help only **linearly**. Best practice: **"Turn off the requirements for uppercase and lowercase and numbers and symbols and just require length."**

**Password policies:** NIST and Microsoft guidance now favors **length over complexity**. Frequent forced changes lead to predictable patterns (Password1! → Password2!).

**Password cracking methods:**
| Method | Description |
|--------|-------------|
| **Brute force** | Try every combination |
| **Dictionary/Wordlist** | Try common words and known passwords |
| **Combinator** | Append/combine words from lists |
| **Hybrid** | Dictionary + brute force |
| **Mask** | Subset of brute force based on human password patterns |
| **Rainbow tables** | Precomputed hash databases — "trading storage for processing." Short passwords (~7-8 chars) feasible; longer passwords push storage to petabytes/exabytes. |

**Online vs. offline attacks:**
- **Online:** Rate limits, lockouts (e.g., iPhone wipes after 10 wrong attempts)
- **Offline:** Stolen hash database, crack at leisure — this is the real threat

**Preventing/slowing password cracking:**
- **Salt:** Random string concatenated with password before hashing. **Every user gets a different salt.** Purpose: "**Salt destroys rainbow tables**" — you'd need a rainbow table per salt. The salt can be stored alongside the hash; its goal is not secrecy.
- **Pepper:** Salt stored separately. Mostly abandoned — "people realized it's not really making us any more secure."
- **Iterations (key stretching):** Hash the password many times (e.g., ~20,000 iterations). Negligible delay for one login; "20,000 times worse" for offline cracking.
- **Slow/adaptable hashing algorithms:** Purpose-built password hashing (bcrypt, PBKDF2, Argon2) rather than fast algorithms like SHA-256.
- **Limit online brute-force attempts**

**Password storage (worst to best):**
1. Clear text (never do this)
2. Hashed
3. Hashed + salt
4. Hashed + salt + iterations (best practice)

**Django example:** `pbkdf2_sha256$20000$H0dPx8NeajVu$GiC4k5kqbbR...` → algorithm$iterations$salt$hash

**Password managers:**
- **"Password managers are the best tool we have for stopping phishing attacks"** — they won't autofill on the wrong domain
- "Almost no products give you better security AND better convenience — password managers are those things."
- **A site should never store your actual password.** If "forgot password" emails you the password, that's a red flag.

### Biometrics

**Pros:** Convenient, hard to share/lose, unique to individual
**Cons:** Environmental issues (masks, wet hands), can't be changed if compromised, false positives (Apple "one in a million" but identical twins/siblings), sensor UX issues (infrared vein patterns are more unique but hardware is expensive/finicky)

### MFA / 2FA

**Methods and their relative strength:**
- **SMS codes:** Can be SIM-swapped or intercepted; weakest MFA
- **TOTP (Time-based One-Time Password):** App-generated codes; better than SMS but still vulnerable to sophisticated MITM
- **Push notifications (Duo):** Better because not entered through attacker's site; **number matching** on push reduces blind "approve" taps
- **Security keys (FIDO2/WebAuthn):** **Asymmetric encryption challenge** — Face ID/fingerprint **unlocks the passkey**, not the crypto itself. Phishing-resistant.
- **Passkeys:** Any passwordless WebAuthn/FIDO2 credential; implemented with asymmetric encryption

**Weaknesses in MFA:** SMS interception, SIM swapping, push notification fatigue (user approves without checking), sophisticated MITM proxying the second factor in real-time.

**Key insight:** A magnetic card is weak. A 4-digit PIN is weak. Card + PIN together is "still terrible, but not nearly as terrible" — the combination across **different factor categories** is the point of MFA.

### Access Control Models

- **ACL (Access Control List):** Filesystem ACL (file/directory permissions) and Network ACL (firewall rules)
- **RBAC (Role-Based Access Control):** Permissions assigned to roles, users assigned to roles. Types: Flat, Hierarchical, Constrained, Symmetric.
- **ABAC (Attribute-Based Access Control):** Policies based on attributes (user, resource, environment). Commonly implemented with XACML or ALFA. Components: Policy Enforcement Point (PEP), Policy Decision Point (PDP), Policy Administration Point (PAP), Policy Information Point (PIP).
- **CAPTCHA:** Not authentication per se, but a human-verification challenge.

### Sample Questions

- **What is the purpose of salting a password?** → To make rainbow table attacks infeasible by ensuring each user's hash is unique even if passwords are identical. "Salt destroys rainbow tables."
- **What are the disadvantages of each type of authentication factor?** → Knowledge: forgettable, guessable, reusable; Possession: can be lost/stolen; Biometrics: can't be changed if compromised, environmental issues, cost.
- **What is an example of a Shibboleth?** → A local place-name pronunciation that outsiders get wrong (e.g., "Wollochet Bay"), or any behavior/appearance that identifies group membership.

---

## 7. HBGary Federal

### Background

- **HBGary** — security consulting firm; founders **Greg Hoglund** (rootkit.com fame) and **Penny Leavy-Hoglund** (his wife)
- **HBGary Federal** — subsidiary for U.S. government contracts / approved vendor list
- **Aaron Barr** — CEO of HBGary Federal
- **"Juicy" (Jussi Jaakonaho)** — Finnish system administrator

### What Prompted the Attack

Aaron Barr claimed he could **unmask Anonymous** members through dark-web research — a "total bluff" meant as marketing. He announced he would share his findings at a security conference and hand names to the FBI. **Lesson: "Don't poke the hornet's nest"** — there was no financial benefit to angering the most sophisticated hackers on the internet.

### Who Actually Attacked

Not "Anonymous" as an organized group — the actual attackers were **LulzSec** (Lulz Security), a core group of **~7 people** who did it "for the lulz" (laughs). After HBGary, they went on a "100 days of lulz" spree targeting Fox, PBS, game companies (Minecraft, LoL, Bethesda), **Sony**, the **US Senate**, and the **CIA**.

**Key members:**
- **Sabu (Hector Monsegur)** — Founder; from the USA; flipped and became an FBI informant
- **Kayla (Ryan Ackroyd)** — England; social engineer who posed as a teenage girl online
- **Tflow (Mustafa Al-Bassam)** — Iraq; later completed a PhD in CS focusing on blockchain
- **Topiary (Jake Davis)** — Scotland; minor at the time
- **Pwnsauce (Darren Martyn)** — Ireland; now a pentester
- **AVunit** — Never caught; best operational security of the group; may have done a Reddit AMA in 2015

### Methods of Attack (Attack Chain)

1. **SQL Injection** on a custom CMS (not a standard platform like Drupal/Joomla) — "the most bare-bones SQL injection." This exposed the user database.
2. **Stole user table:** Passwords were hashed with **MD5, no salt** → easily cracked with **rainbow tables**, including **Aaron Barr's password**.
3. **Password reuse:** Aaron used the same password across multiple services → his **email was compromised**.
4. **Social engineering from Aaron's email to Juicy (the admin):** Posing as Aaron, the attackers convinced Juicy to confirm a password and "open it up to the world" while Aaron was supposedly "traveling."
5. **Full compromise:** Server access, email access, website defaced, data exfiltrated.
6. **WikiLeaks release:** Tens of thousands of internal emails published (e.g., 17,191 emails mentioning "Aaron" alone).

### Aftermath / Lessons Learned

- **HBGary Federal** was effectively destroyed as a company
- **Vulnerabilities exploited:** SQL injection on custom code, MD5 without salt, password reuse, social engineering, lack of MFA

**LulzSec Outcomes:**
- **Sabu** — Pled to 12 crimes (potentially 124 years); served only 7 months as an informant. Now a security researcher and executive at an AI research firm.
- **Kayla** — 30 months in UK prison. Now teaches at a UK university and works as a pentester.
- **Tflow** — 20 months in UK prison. Completed a PhD in CS, launched blockchain startups.
- **Topiary** — Sentenced to 24 months, served 38 days. Now a security researcher and consultant.
- **Pwnsauce** — No jail time. Now a pentester and security researcher.
- **AVunit** — Never caught.

### Sample Questions

- **What prompted the initial targeting of HBGary Federal?** → Aaron Barr publicly claimed he could unmask Anonymous members and planned to share their identities with the FBI.
- **How did the hackers obtain the credentials to an HBGary employee's email?** → SQL injection on a custom CMS exposed MD5-hashed (unsalted) passwords → rainbow tables cracked them → password reuse gave access to Aaron's email.
- **How did the hackers obtain the credentials to an HBGary server?** → Social engineering: from Aaron's compromised email, they convinced the Finnish admin (Juicy) to provide access.
- **Who actually attacked HBGary Federal?** → **LulzSec** (a ~7-person subgroup of Anonymous)

---

## Quick-Reference: Key Quotes Worth Memorizing

| Topic | Quote |
|-------|-------|
| Kerckhoffs | "A cryptosystem should be secure even if everything about the system, except the key, is public knowledge" |
| Digital signatures | "A digital signature is a hash of a message encrypted with the sender's private key" |
| Salt | "Salt destroys rainbow tables" |
| Password managers | "Password managers are the best tool we have for stopping phishing attacks" |
| Spaltro (Sony CISO) | Focus on security "absolutely required by law"; "would not invest $10M to avoid a possible $1M loss" |
| HBGary lesson | "Don't poke the hornet's nest" |
| SOC vs CSIRT | SOC = ongoing ops; CSIRT = "when it's bad enough, you get the Avengers together" |
| Tor | "Tor is an anonymizing service, not a confidentiality service" |
| Privacy | "Privacy is having a desire to control information about yourself" |
| ID vs Auth vs Authz | "Identification is a claim. Authentication is proving who you are. Authorization is what you can do." |
| Fraud | "Almost all that we do as tech people is on the opportunity piece [of the fraud triangle]" |

---

## Appendix: Organizational Security (Supplementary)

### NIST Cybersecurity Framework 2.0

Three components:
1. **Core** — Functions, categories, subcategories of cybersecurity activities
2. **Profiles** — Organization-specific alignment of requirements and objectives
3. **Tiers** — Degree of rigor in cybersecurity risk management practices

### SolarWinds Attack (Sunburst Hack)

- **Attacker:** Cozy Bear (APT29 / NOBELIUM) — Russian government-linked APT
- **Method:** Sophisticated **supply chain attack** — didn't change source code, but **injected malware during the compilation process**
- **Sunburst backdoor:** Identified antivirus/monitoring tools on compromised machines; installed multiple malware forms for persistent access; fastidiously covered tracks
- **Impact:** ~100 organizations compromised (FireEye, Microsoft, US Justice Department, State Department, NASA, NVIDIA, Intel, Cisco) out of ~18,000 SolarWinds customers
- **Quote:** "The tradecraft was phenomenal. This was the craziest thing I'd ever seen." — Adam Meyers, SVP of Intelligence at CrowdStrike

### Physical Security (Supplementary)

- "Without physical security, no other security measures can be considered effective" — Microsoft
- Physical security has cyber consequences and vice versa
- **Layered security:** perimeter → building → room → device
- **Security theater** (Bruce Schneier): measures that make people **feel** safe without actually improving security
- **Piggybacking/tailgating:** Following someone through a secured door
- **Keyloggers:** Hardware devices that capture keystrokes
- **USB drops:** Malicious USB drives left in parking lots — studies show people plug them in
- **Disaster recovery:** Backups, hot/cold sites, business continuity planning
