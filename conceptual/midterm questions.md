# IS 414 Midterm Exam Questions (Reference)

These are the actual midterm questions, preserved for reference when authoring final-exam quiz questions.

---

## 1. Risk Formula

We discussed how risk can be conceptualized using the following formula: **risk = impact * likelihood**

We also extensively discussed how 1) Assets, 2) Threats, 3) Vulnerabilities, and 4) Controls impact these factors. Which of these 4 items does **not** directly affect risk likelihood?

- **A. Assets** ✅
- B. Threats
- C. Vulnerability
- D. Controls
- E. All of these directly affect risk likelihood

---

## 2. Asset Valuation

The asset identification process often includes a valuation of organizational assets. Which of the following is NOT a commonly used valuation metric we discussed in class?

- A. Cost to replace asset
- B. Value asset provides to organization
- C. Value of asset to hacker
- D. Cost of noncompliance with laws or regulations
- **E. All are commonly used valuation metrics** ✅

---

## 3. Risk Level Matrix

A Risk Level Matrix is a tool used for quantitative risk assessment.

- True
- **False** ✅

> It is used for **qualitative** risk assessment.

---

## 4. Risk Response — Insurance

Indian Wells Brewing Company, makers of Death Valley Root Beer, decided to take out an insurance policy to cover losses in case their brewing facility experienced a fire. Which of the following categories describes the organization's primary response to this risk?

- A. Reduction
- B. Retention
- C. Avoidance
- **D. Transfer** ✅
- E. None of these

---

## 5. Risk Response — GDPR Avoidance

Verve, a mobile ad platform, decided to close its London and Munich offices in response to GDPR requirements. This is primarily an example of what type of risk response?

- A. Reduction
- B. Retention
- **C. Avoidance** ✅
- D. Transfer
- E. None of these

---

## 6. Risk Determination

The level of risk is exclusively determined by the combination of a vulnerability and an outside threat.

- True
- **False** ✅

> It is the combination of **likelihood and impact**.

---

## 7. Vulnerability Definition

A vulnerability is best defined as ...

- A. A process realized during the software development life-cycle to increase software security.
- B. A sequence of commands that takes advantage of source code in order to cause unintended behavior.
- C. Potential unwanted incident, which may result in harm to a system or an organization.
- **D. A weakness or a flaw in a system that could be accidentally triggered or intentionally exploited.** ✅

---

## 8. Risk Response — Retention

New Club Penguin, a fan-made recreation of Disney's now-defunct Club Penguin, is currently operating online. One of its predecessors, Club Penguin Rewritten, was shut down in 2022 and the three creators were arrested in London for potential copyright infringement. The creators of New Club Penguin have done nothing differently than Club Penguin Rewritten to respond to this potential risk. This is primarily an example of what type of risk response?

- A. Reduction
- **B. Retention** ✅
- C. Avoidance
- D. Transfer
- E. None of these

---

## 9. Quantitative Risk Analysis (Calculation)

Using a quantitative risk approach, determine which control(s) the organization should implement:

- **Asset:** Web Server
- **Threat:** Information Disclosure
- **Vulnerability:** SQL-Injection
- **Control A:** Code Audit — $10,000
- **Control B:** Server Hardening — $5,000
- **Control C:** Data Encryption and reconfigure — $10,000
- **Impact:** $200,000 (including secondary losses)
- **Likelihood:** 0.25 (25%)
- **Security Budget:** $1,000,000
- **Risk Appetite:** High
- **Mitigation A:** likelihood → 0.21
- **Mitigation B:** likelihood → 0.23
- **Mitigation C:** likelihood → 0.19
- **A and B:** likelihood → 0.17
- **B and C:** likelihood → 0.18
- **A and C:** likelihood → 0.17
- **A, B, and C:** Not feasible

Answer: **F. Implement both A and C** ✅

---

## 10. Virtualization

The center and right images represent different types of virtualization. What do the "???" layers represent?

- A. The Guest Operating System (OS)
- B. Shared code libraries
- C. A container
- **D. A hypervisor** ✅
- E. A virtualizer

---

## 11. Patch Management

Information technology managers are often in a bind when a new exploit is discovered in the wild. They can respond by updating the affected software or hardware with new code provided by the manufacturer, which runs the risk that a flaw in the update will crash the system... or they can wait until the new code update has been extensively tested, but that runs the risk that they will be compromised by the exploit during the testing period. Dealing with these issues is referred to as...

- A. Change management
- B. Exploit management
- C. Software staging
- **D. Patch management** ✅
- E. Defense-in-depth

---

## 12. Sandboxing

A mechanism for isolating running code that can keep malicious code separate from other systems is called...

- A. Hardening
- B. Bootloader locking
- C. Full-drive encryption
- **D. Sandboxing** ✅
- E. Intrusion detection system (IDS)

---

## 13. Systems Hardening

The primary goal of systems hardening is reducing the attack surface.

- **True** ✅
- False

---

## 14. NMAP and Kill Chain

Using NMAP typically corresponds to which aspect of the Cyber Kill Chain?

- **A. Reconnaissance** ✅
- B. Weaponization
- C. Delivery
- D. Exploitation
- E. Installation
- F. Command and Control
- G. Actions on Objectives

---

## 15–17. Firewall Matching

**15.** This type of firewall does not perform "deep packet inspection" but does examine network traffic over time to discover and block patterns → **Stateful Firewall**

**16.** This type of firewall only examines IP addresses and port numbers to make allow or deny decisions → **Packet Filtering Firewall**

**17.** This type of firewall performs "deep packet inspection" by examining the content of data sent over the network → **Application-Level (or Next Generation) Firewall**

---

## 18. Application-Level Firewall

Most firewalls operate exclusively at layers 3 and 4 (and in some cases layer 2). Which type of firewall also includes the top layer of the TCP/IP (Internet) model (layers 5-7 of the OSI model)?

- A. Packet-filtering firewall
- B. Stateful inspection packet firewall
- **C. Application-level gateway (or application proxy)** ✅
- D. Circuit-level gateway (or circuit-level proxy)

---

## 19. Session Hijacking

Shortly after you let another student use your computer to "check their email" you notice that student logged into the Webkinz store with your account on their laptop trying to make a purchase. You are certain that your username and password haven't been leaked and you haven't received any notifications on your phone with a two-factor authentication token. What is the most likely cause?

- A. ARP Spoofing
- B. Password cracking
- C. DNS Cache Poisoning
- **D. Session Hijacking** ✅
- E. Triangulation Fraud
- F. Skimming

---

## 20. CSRF

A social media manager's account posted offensive content after clicking a link in a spam email. Many twitter users had posted the exact same tweets. This was most likely an example of...

- A. Spearphishing
- **B. Cross-Site Request Forgery (CSRF)** ✅
- C. Cross-Site Scripting (XSS)
- D. SQL Injection (SQLi)
- E. None of these

---

## 21. SQL Injection Mitigation

Which vulnerability can be mitigated by using stored procedures and object-relational mapping?

- A. Buffer-overflow
- B. Cross-Site Request Forgery (CSRF)
- C. Cross-Site Scripting (XSS)
- **D. SQL Injection (SQLi)** ✅
- E. None of these

---

## 22. Buffer Overflow Mitigation

Which vulnerability can be mitigated by developing systems using interpreted programming languages?

- **A. Buffer-overflow** ✅
- B. Cross-Site Request Forgery (CSRF)
- C. Cross-Site Scripting (XSS)
- D. SQL Injection (SQLi)
- E. None of these

---

## 23. CSRF Mitigation

Which vulnerability can be mitigated by submitting specially crafted cookies along with carefully designed user form inputs?

- A. Buffer-overflow
- **B. Cross-Site Request Forgery (CSRF)** ✅
- C. Cross-Site Scripting (XSS)
- D. SQL Injection (SQLi)
- E. None of these

---

## 24. IDOR

Security researchers discovered that the McHire application had a flaw allowing access to other applicants' information by changing the ID number in API requests. The system had 64 million applicants whose private information could be accessed. This is an example of:

- A. SQLi (SQL Injection)
- B. XSS (Cross-Site Scripting)
- C. Session Hijacking
- **D. IDOR (Insecure Direct Object Reference)** ✅
- E. Buffer Overflow
- F. CSRF (Cross-Site Request Forgery)

---

## 25–34. Social Engineering Matching

| # | Scenario | Answer |
|---|----------|--------|
| 25 | Dr. Wells priming you to think about root beer all semester | **Preloading** |
| 26 | Nigerian prince offering 50% of the money | **Reciprocation** |
| 27 | TAs asked for login credentials in an official email | **Authority** |
| 28 | Discount only if you sign up with a credit card today | **Scarcity** |
| 29 | Speed dating to ask questions and gather personal info (no deception) | **Elicitation** |
| 30 | Brewmaster concocts a story to access competitor's facility | **Pretexting** |
| 31 | Scammer shares real similarities and interests to build rapport | **Liking** |
| 32 | Spearphishing attack from a "friend" (not actually your friend) | **Impersonation** |
| 33 | Door-to-door salesperson says your neighbors already purchased | **Social Validation/Proof** |
| 34 | Political campaign targeting previous donors to donate again | **Consistency** |

---

## 35. Target Case — POS Malware

From our discussion of the Target case, what did the malware installed on Target's POS systems do?

- A. Encrypt the credit card information
- B. Selling of credit card information
- **C. Memory (or RAM) scraping of credit card information** ✅
- D. Keylogging of credit card information

---

## 36. Most Large-Scale Hacks Begin With...

As discussed in class numerous times, most large-scale hacks begin with...

- A. Brute-force password cracking
- **B. Social engineering (usually some form of phishing)** ✅
- C. Exploiting highly technical vulnerabilities in communication protocols
- D. Vulnerabilities in third-party (vendor) software

---

## 37. Target vs Home Depot

The examples of the Target and Home Depot data breaches demonstrate that investing in securing data and decreasing attack surface always lead to better financial outcomes.

- True
- **False** ✅

> Home Depot wasn't investing in security, had nearly as bad of a data breach as Target, and was barely impacted financially.
