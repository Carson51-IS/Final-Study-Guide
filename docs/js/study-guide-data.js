/* eslint-disable */
const STUDY_DATA = [
{id:"fraud",title:"Fraud",badge:"fraud",points:[
{bullet:"What is fraud? What are the legal requirements?",detail:`<p>Fraud is <strong>gaining an unfair advantage over another person</strong>, usually for financial benefit. For an act to be legally fraudulent, <strong>all five</strong> elements must be present:</p>
<ol>
<li><strong>A false statement, representation, or disclosure</strong> — there must be a lie.</li>
<li><strong>A material fact that induces a person to act</strong> — the lie must be about something significant enough to cause someone to do something. "Material" means large/substantive; a $47 discrepancy on a trillion-dollar firm is not material.</li>
<li><strong>An intent to deceive</strong> — the hardest element to prove; the liar must have intended to mislead.</li>
<li><strong>Justifiable reliance</strong> — the victim relies on the misrepresentation in a way a <strong>normal, reasonable person</strong> would.</li>
<li><strong>An injury or loss suffered by the victim</strong> — usually financial.</li>
</ol>
<p>Individuals who commit fraud are referred to as <strong>white-collar criminals</strong>. Fraud is notoriously hard to prosecute; prosecutors often pursue adjacent charges (mail fraud, wire fraud, money laundering).</p>
<h4>The Fraud Triangle</h4>
<ul>
<li><strong>Pressure</strong> — financial stress, personal problems, performance targets</li>
<li><strong>Opportunity</strong> — weak controls, lack of oversight, unsegregated duties</li>
<li><strong>Rationalization</strong> — "Nobody will get hurt," "I'll pay it back"</li>
</ul>
<p>As technology professionals, <strong>almost everything we do targets the opportunity side</strong>.</p>
<h4>Techniques of Neutralization (Matza &amp; Sykes)</h4>
<ol>
<li><strong>Denial of responsibility</strong> — "Not my fault"</li>
<li><strong>Denial of injury</strong> — "No one got hurt"</li>
<li><strong>Denial of the victim</strong> — "They deserved it"</li>
<li><strong>Condemnation of the condemners</strong> — "You're a hypocrite"</li>
<li><strong>Appeal to higher loyalties</strong> — "Had to protect the family"</li>
</ol>
<p>Research shows that sanctions (punishments) tend <strong>not</strong> to be effective. Better approach: neutralize the neutralization techniques through targeted training.</p>`,sources:["Slide: 03 Fraud W26, slides 5-8","Slide: 10 Organizational Security, slides 20-24","Transcripts: 2026-03-09, 2026-03-11, 2026-03-12"]},

{bullet:"Fraud methods discussed in class",detail:`<table><tr><th>Method</th><th>Description</th></tr>
<tr><td><strong>Phreaking</strong></td><td>Hacking the phone system</td></tr>
<tr><td><strong>Pretexting</strong></td><td>Fabricating a scenario to extract information</td></tr>
<tr><td><strong>Ransomware / Scareware</strong></td><td>Malware that locks data or frightens victims into paying</td></tr>
<tr><td><strong>Salami Technique</strong></td><td>Stealing tiny amounts per transaction (e.g., rounding to nearest nickel)</td></tr>
<tr><td><strong>Skimming</strong></td><td>ATM/gas-pump overlays that capture card data</td></tr>
<tr><td><strong>Smishing</strong></td><td>SMS-based phishing</td></tr>
<tr><td><strong>Structuring (Smurfing)</strong></td><td>Breaking cash deposits to stay under the ~$10,000 CTR threshold</td></tr>
<tr><td><strong>Triangulation Fraud</strong></td><td>Fake marketplace seller fulfills orders using a stolen credit card; effectively launders stolen card numbers</td></tr>
<tr><td><strong>Vishing</strong></td><td>Voice-call phishing</td></tr>
<tr><td><strong>Blackmail</strong></td><td>Rising with technology; phishing emails claiming compromising material</td></tr>
<tr><td><strong>Credit Card Fraud</strong></td><td>ATM shimming (chip-level) and skimming (magnetic stripe)</td></tr>
<tr><td><strong>Identity Theft</strong></td><td>Using SSN, name, DOB for credit, loans, medical records, tax fraud</td></tr>
<tr><td><strong>Nigerian Prince / 419</strong></td><td>Advance-fee fraud</td></tr>
<tr><td><strong>Phishing</strong></td><td>Spoofed emails to harvest credentials or install malware</td></tr>
<tr><td><strong>Friendly Fraud</strong></td><td>Buyer disputes charge to get money back while keeping goods</td></tr>
</table>`,sources:["Slide: 03 Fraud W26, slides 14-16","Transcripts: 2026-03-12 sessions 1-3"]},

{bullet:"Diann Cattani case study",detail:`<ul>
<li><strong>BYU Marriott graduate</strong> and former BYU volleyball team member</li>
<li>Worked at a small company with <strong>weak controls</strong> where she wore many hats</li>
<li>Started with a small mistake ("wrong credit card") that was never caught, then normalized — a <strong>slippery slope</strong></li>
<li>Convicted felon; lesson: <strong>integrity matters</strong> and even good people face temptation when opportunity exists</li>
<li>Illustrates the <strong>fraud triangle</strong>: pressure (personal), opportunity (weak controls, small company), rationalization (normalized behavior)</li>
</ul>`,sources:["Slide: 03 Fraud W26, slides 18-21","Transcripts: 2026-03-12 session 2"]},

{bullet:"OneCoin case study",detail:`<p><strong>OneCoin</strong> was a <strong>Ponzi scheme</strong> branded as an MLM. Commissions were paid for recruiting others to buy "cryptocurrency" packages. <strong>There was no blockchain, no technology, no actual cryptocurrency.</strong></p>
<p><strong>Scale:</strong> ~$3.8–4 billion.</p>
<h4>Key People</h4>
<ul>
<li><strong>Ruja Ignatova</strong> — "The Cryptoqueen." FBI Top Ten Most Wanted (reward: $5M). Previously convicted of bankruptcy fraud in Germany. Owned a £13.5M London penthouse.</li>
<li><strong>Konstantin Ignatov</strong> (her brother) — arrested at LAX, cooperated. Sentenced to 90 years.</li>
<li><strong>Mark Scott</strong> — U.S. lawyer who laundered ~$400M through shell companies (~10% cut). Convicted, disbarred.</li>
<li><strong>Karl Sebastian Greenwood</strong> — fled to Thailand, extradited to U.S., sentenced to 20 years.</li>
</ul>
<p><strong>Bulgaria HQ raid (Jan 2018):</strong> Building found empty — suspected tip-off.</p>
<p><strong>OneCoin primarily committed fraud by:</strong> Convincing victims that profits came from sales when they actually came from new investors (<strong>Ponzi scheme</strong>).</p>`,sources:["Slide: 03 Fraud W26, slides 22-36","Transcripts: 2026-03-12 sessions 1-3","BBC Podcast: Missing Crypto Queen"]}
]},

{id:"incident-response",title:"Incident Response & Forensics",badge:"ir",points:[
{bullet:"Definitions: Event, Incident, CSIRT, SOC",detail:`<ul>
<li><strong>Event:</strong> An observable occurrence in IT infrastructure (a login, a firewall alert).</li>
<li><strong>Incident (ISO 27001):</strong> Any event which is <strong>not part of the standard operation</strong> of a service and which causes, or may cause, an interruption to, or a reduction in, the quality of that service.</li>
<li><strong>CSIRT:</strong> Computer Security Incident Response Team — responsible for responding to security incidents. Usually <strong>cross-functional</strong>. "When you have an incident that is bad enough, you get the Avengers together." Related terms: CERT, CIRT.</li>
<li><strong>SOC:</strong> Security Operations Center — <strong>day-to-day monitoring and defending</strong> against security threats.</li>
<li><strong>Key difference:</strong> SOC handles <strong>continuous monitoring</strong>; CSIRT is <strong>invoked for major incidents</strong> requiring coordinated response.</li>
</ul>`,sources:["Slide: 09 Incident Response, slides 3-4","Transcripts: 2026-04-14 session 2"]},

{bullet:"NIST IR Lifecycle — Preparation",detail:`<p>What should be prepared:</p>
<ul>
<li>The <strong>CSIRT</strong> — who is on it, what roles, where do they meet</li>
<li><strong>Communication strategy</strong> — internal (management) and external (law enforcement, PR, regulators)</li>
<li><strong>Response plans for common attacks</strong> (ransomware playbook, etc.)</li>
<li><strong>Policies and procedures</strong></li>
<li><strong>Defensive tools/techniques:</strong> firewalls, network segmentation, patching, least privilege, logging, user training, risk assessments</li>
</ul>
<h4>Concepts from emergency responders and the military</h4>
<ul>
<li><strong>Fog of War:</strong> Not all information is known during an incident. Decisions must be made with incomplete data.</li>
<li><strong>Chain of Command:</strong> Clear authority structure. A <strong>senior manager should sponsor the CSIRT</strong> (CISO, CIO, Legal counsel).</li>
</ul>`,sources:["Slide: 09 Incident Response, slides 9-19","Slide: 09A Tabletop Exercise","Transcripts: 2026-03-09 sessions"]},

{bullet:"Detection & Analysis — Precursors vs. Indicators",detail:`<ul>
<li><strong>Precursors</strong> show an event <strong>may happen in the future</strong> (vulnerability scan, intelligence of upcoming attack)</li>
<li><strong>Indicators</strong> show something <strong>happened or is happening now</strong> (IDS alert, anti-virus detection, failed logins, unusual traffic)</li>
</ul>
<p><strong>Data sources:</strong> IDS/IPS, SIEM, Anti-Virus/Anti-Malware, file integrity checks (hashing), third-party monitoring, logs, people.</p>
<p><strong>Locard's Exchange Principle:</strong> Everything leaves a trace / evidence.</p>`,sources:["Slide: 09 Incident Response, slides 22-26","Transcripts: 2026-03-09"]},

{bullet:"Containment, Eradication, & Recovery",detail:`<h4>FIRST Classification Framework</h4>
<ul>
<li><strong>Category:</strong> Type of incident (DOS, compromised info, compromised asset, malware, hacking, etc.)</li>
<li><strong>Criticality:</strong> Critical systems → <strong>60-minute</strong> response; non-critical → <strong>4-hour</strong>; possible incidents → <strong>48-hour</strong></li>
<li><strong>Sensitivity:</strong> Level 1 (extremely sensitive): only CSIRT + management; Level 2: + system owners + ops; Level 3: employees can be informed</li>
</ul>
<h4>Containment</h4>
<p>Keep the problem from getting worse. Options: shut down system, disconnect, disable functions. <strong>Risks:</strong> tipping your hand, malware may escalate (encrypt on connectivity loss), changes could damage evidence.</p>
<h4>Evidence & Forensics</h4>
<ul>
<li><strong>Chain of custody</strong> — who had evidence, when, where stored → ensures admissibility in court</li>
<li><strong>Forensic images:</strong> bit-by-bit copies of memory and filesystem. Create hashes of originals and copies. Act quickly — data lost when systems power off.</li>
</ul>
<h4>Eradication & Recovery</h4>
<p><strong>Eradication:</strong> Reformat, rebuild, restore from <strong>clean</strong> backups. <strong>Recovery:</strong> Fix vulnerabilities and improve defenses <strong>before</strong> putting back in production. Monitor for re-compromise.</p>`,sources:["Slide: 09 Incident Response, slides 27-41","Transcripts: 2026-03-09, 2026-04-14"]},

{bullet:"Post-Incident Analysis",detail:`<p>Key questions to address:</p>
<ul>
<li>What happened? How well did the response work?</li>
<li>Were documented procedures adequate?</li>
<li>What would you do differently next time?</li>
<li>How can we detect similar incidents in the future?</li>
<li>Are additional tools or resources needed?</li>
</ul>`,sources:["Slide: 09 Incident Response, slides 43-44"]}
]},

{id:"privacy",title:"Information Privacy",badge:"privacy",points:[
{bullet:"What is information privacy? Confidentiality vs. Privacy",detail:`<blockquote>"Information privacy refers to the desire of individuals to <strong>control or have some influence over data about themselves</strong>." — Bélanger and Crossler (2011)</blockquote>
<ul>
<li><strong>Confidentiality</strong> focuses on protecting an <strong>organization's</strong> intellectual property and internal information</li>
<li><strong>Privacy</strong> deals with protecting <strong>customer/individual</strong> information</li>
</ul>
<p>Privacy is NOT only for criminals. Biblical examples (Matthew 8:4, Mark 7:36), ecclesiastical confidentiality, and religious precedent all support privacy as a fundamental right.</p>`,sources:["Slide: 11 Information Privacy, slides 4-18","Transcripts: 2026-03-26, 2026-03-31"]},

{bullet:"GDPR — Rights and Impact",detail:`<p>General Data Protection Regulation — adopted EU April 2016, in effect May 2018. Applies to orgs <strong>within</strong> the EU and those that <strong>sell to or collect data about</strong> EU members. Often the <strong>strictest</strong> regulation.</p>
<h4>The Eight GDPR Rights</h4>
<ol>
<li><strong>Right to be Informed (Transparency)</strong> — what data is collected, how used, who it's shared with</li>
<li><strong>Right of Access</strong> — obtain your data (e.g., Google Takeout)</li>
<li><strong>Right to Rectification</strong> — fix inaccurate data</li>
<li><strong>Right to Erasure (Right to be Forgotten)</strong> — delete profile/account (may not include tax/transaction records)</li>
<li><strong>Right to Restrict Processing</strong> — granular limits on data use</li>
<li><strong>Right to Data Portability</strong> — export data in usable format</li>
<li><strong>Right to Object / Withdraw Consent</strong> — stop processing; complain to EU authority</li>
<li><strong>Automated Decision-Making</strong> — request <strong>human review</strong> of algorithmic decisions</li>
</ol>
<h4>Impact of GDPR</h4>
<ul>
<li>Huge compliance costs; cookie banners everywhere</li>
<li>Potentially hurting smaller orgs disproportionately</li>
<li>Shifting ads from personalized to contextual in EU</li>
<li>Large fines: Meta ~€1.2B; treats fines as "cost of doing business"</li>
<li>Some sites blocked EU access entirely</li>
</ul>`,sources:["Slide: 11 Information Privacy, slides 21-25","Transcripts: 2026-03-31 sessions 3-4, 2026-04-14 session 1"]},

{bullet:"HIPAA, FERPA, and other privacy laws",detail:`<h4>CCPA (California, 2018)</h4>
<p>"GDPR light" — shorter rights list, <strong>opt-out</strong> model.</p>
<h4>Utah Consumer Privacy Act (UCPA)</h4>
<p>Very narrow: Revenue ≥ $25M AND large data sets OR >50% revenue from selling data. In practice, "basically applies to data brokers" and arguably "applies to no one" in Utah. Penalties: up to $7,500/violation.</p>
<h4>HIPAA (1996)</h4>
<p>US law safeguarding <strong>medical information</strong>. Strengthened by HITECH Act (2009). <strong>Covered entity:</strong> plan, provider, or clearinghouse transmitting health info electronically. <strong>Required</strong> vs <strong>addressable</strong> implementation specs.</p>
<h4>FERPA</h4>
<p>Protects <strong>education records</strong> — grades, class recordings, etc.</p>`,sources:["Slide: 11 Information Privacy, slides 26-30","Transcripts: 2026-03-31 sessions 3-4"]},

{bullet:"Opt-in vs. Opt-out, Tracking, Aggregation",detail:`<ul>
<li><strong>GDPR:</strong> Generally <strong>opt-in</strong> — explicit consent required before data collection</li>
<li><strong>US laws:</strong> Generally <strong>opt-out</strong> — data collected by default, you request removal</li>
</ul>
<h4>Tracking & Identification</h4>
<ul>
<li><strong>Behavioral tracking & cookies</strong> — websites track user activity</li>
<li><strong>Aggregation and identification</strong> — combining datasets to re-identify "anonymous" users</li>
<li><strong>K-anonymity:</strong> Minimum count of people sharing an attribute combination. If K=1, the individual is <strong>uniquely identifiable</strong>.</li>
<li><strong>Browser fingerprinting</strong> — unique combination of browser settings, fonts, plugins</li>
</ul>`,sources:["Slide: 11 Information Privacy, slides 31-36","Transcripts: 2026-03-26, 2026-04-14 session 2"]}
]},

{id:"sony",title:"Sony Pictures",badge:"sony",points:[
{bullet:"Background and key stakeholders",detail:`<ul>
<li><strong>Sony Pictures</strong> = film/TV subsidiary; was Columbia Pictures. Parent Sony ~$70B revenue.</li>
<li>Had a "golden era" (Bond, Spider-Man, animation) then expensive flops (<em>After Earth</em>, <em>White House Down</em>).</li>
<li>Strategy pivot toward high-ROI films (comedy, horror); <strong>Seth Rogen</strong> brought in.</li>
</ul>
<h4>Key People</h4>
<ul>
<li><strong>Amy Pascal</strong> — Co-Chair, creative side</li>
<li><strong>Michael Lynton</strong> — Co-Chair/CEO, business/finance</li>
<li><strong>Jason Spaltro (CISO)</strong> — Focus on security <em>"absolutely required by law"</em>; <em>"would not invest $10M to avoid a possible $1M loss"</em></li>
<li><strong>Philip Reitinger</strong> — Strong security exec from DHS; spent ~3 years at Sony parent but Japan HQ wouldn't fund security</li>
<li><strong>Kim Jong-un</strong> — political target of <em>The Interview</em></li>
<li><strong>Lazarus Group</strong> — North Korean state-sponsored attackers (front name: "Guardians of Peace")</li>
</ul>`,sources:["Slide: Sony Pictures, slides 1-13","Transcripts: 2026-03-09 sessions, 2026-03-11 sessions"]},

{bullet:"Sony's security history and practices",detail:`<h4>Security History ("Don't Poke the Internet")</h4>
<ul>
<li><strong>2005:</strong> Sony BMG rootkit on CDs — malware auto-installed to block ripping. A <strong>rootkit hides itself from the user</strong>. Attackers repurposed the code.</li>
<li><strong>2008:</strong> PlayStation website compromised</li>
<li><strong>2011:</strong> PlayStation Network breach (77M users, >3-week outage); Sony Online Entertainment (25M); Sony Pictures website defaced</li>
<li>Aggressive legal posture against hackers/modders "really pissed off the internet"</li>
</ul>
<h4>Security Practices at Time of Hack</h4>
<table><tr><th>Control</th><th>Status</th></tr>
<tr><td>Passwords</td><td>Weak, based on personal facts</td></tr>
<tr><td>MFA/2FA</td><td>Little to none</td></tr>
<tr><td>Encryption</td><td>Near 0% of data encrypted</td></tr>
<tr><td>Training</td><td>Minimal ("a session or two every few years")</td></tr>
<tr><td>Data segmentation</td><td>None — HR/SSN alongside scripts</td></tr>
<tr><td>Network segmentation</td><td>Very little</td></tr>
<tr><td>IT staffing</td><td>Very small team</td></tr></table>`,sources:["Slide: Sony Pictures, slides 14-16","Transcripts: 2026-03-09 sessions 1 & 4, 2026-03-11 session 2"]},

{bullet:"The Interview and the attack (Cyber Kill Chain)",detail:`<h4>The Interview</h4>
<p>Plot: CIA uses a talk-show to assassinate Kim Jong-un. North Korea's opposition was predictable. Trailers briefly pulled → <strong>Streisand Effect</strong>. After hack: theaters refused to show it (physical threats, Aurora precedent); President Obama weighed in (free speech); released online.</p>
<h4>The Attack — Cyber Kill Chain</h4>
<ol>
<li><strong>Reconnaissance</strong> — LinkedIn for employee info; infrastructure recon (malware had hard-coded IPs)</li>
<li><strong>Weaponization</strong> — Built on Shamoon/DarkSeoul wiper lineage; EldoS disk driver; <strong>custom malware</strong> to avoid AV</li>
<li><strong>Delivery</strong> — <strong>Spear-phishing emails</strong> as Apple ID problems → fake password reset → credential harvesting</li>
<li><strong>Exploitation</strong> — Phish + <strong>SMB vulnerability</strong> → <strong>worm</strong> spreads across the LAN</li>
<li><strong>Installation</strong> — Wiper components installed broadly</li>
<li><strong>C2</strong> — At least 3 servers: Italy (VPN endpoint), Poland (business), Thailand (university) — normal-looking traffic</li>
<li><strong>Actions on Objectives</strong> — Months of exfiltration; ~47,000 SSNs; 5 unreleased movies; >3,000 computers and 750 servers wiped</li>
</ol>`,sources:["Slide: Sony Pictures, slides 17-37","Transcripts: 2026-03-09 sessions, 2026-03-11 session 2"]},

{bullet:"Aftermath and Lazarus Group evolution",detail:`<h4>Aftermath</h4>
<ul>
<li>Improvements: better passwords, some segmentation, slow MFA adoption</li>
<li>CISO stayed for years; CEO Lynton was not fired; Pascal resigned years later (PR/email fallout)</li>
<li>Actual attackers: <strong>Lazarus Group</strong> (North Korean state-sponsored). FBI most-wanted posters for three individuals.</li>
</ul>
<h4>Lazarus Group Evolution</h4>
<ul>
<li>Early: DDoS against South Korea</li>
<li>2014: Sony Pictures (inflection point)</li>
<li>2015-16: Bangladesh Bank ($81M via SWIFT), Mexican/Polish financial attacks</li>
<li>2017: <strong>WannaCry</strong> ransomware; Taiwan bank; crypto attacks</li>
<li>2020: AstraZeneca / pharmaceuticals</li>
<li>2021: Targeting security researchers</li>
<li>2022+: Massive cryptocurrency exchange thefts</li>
</ul>`,sources:["Slide: Sony Pictures, slides 38-47","Transcripts: 2026-03-09 sessions, 2026-03-11 session 2"]}
]},

{id:"crypto",title:"Cryptography",badge:"crypto",points:[
{bullet:"CIA Triad + Security Threats & Principles",detail:`<table><tr><th>Principle</th><th>Crypto provides?</th><th>How</th></tr>
<tr><td><strong>Confidentiality</strong></td><td>Almost always</td><td>Encryption</td></tr>
<tr><td><strong>Integrity</strong></td><td>Almost always</td><td>Hashing, MACs, digital signatures</td></tr>
<tr><td><strong>Availability</strong></td><td>No</td><td>Infrastructure concern</td></tr>
<tr><td><strong>Authenticity</strong></td><td>Most of the time</td><td>Digital signatures, certificates</td></tr>
<tr><td><strong>Non-Repudiation</strong></td><td>Yes (via integrity + authenticity)</td><td>Digital signatures</td></tr></table>
<h4>Security Threats</h4>
<table><tr><th>Threat</th><th>Violates</th><th>Mitigation</th></tr>
<tr><td><strong>Interception</strong></td><td>Confidentiality</td><td>Encryption</td></tr>
<tr><td><strong>Modification</strong></td><td>Integrity</td><td>Hashing, MACs, signatures</td></tr>
<tr><td><strong>Interruption</strong></td><td>Availability</td><td>Redundancy, backups</td></tr>
<tr><td><strong>Fabrication</strong></td><td>Authenticity</td><td>Digital signatures, certs</td></tr></table>
<p><strong>Characters:</strong> Alice (sender), Bob (receiver), Eve (eavesdropper), Trudy (intruder), Mallory (MITM), Trent (neutral third party).</p>`,sources:["Slide: 12 Cryptography - Modern Ciphers, slides 14-29, 68-89","Transcripts: 2026-03-12, 2026-03-17, 2026-03-19"]},

{bullet:"Classic Ciphers (Transposition, Substitution, Caesar, Atbash, Vigenère)",detail:`<h4>Transposition</h4>
<p>Rearranges character <strong>positions</strong> without changing them. Example: columnar transposition with a numeric key. <strong>Scytale</strong> = ancient cylinder device.</p>
<h4>Substitution Ciphers</h4>
<ul>
<li><strong>ROT13:</strong> Rotate 13 positions. Applying twice = original.</li>
<li><strong>Atbash:</strong> Reverse alphabet (A↔Z). Biblical: <strong>Jeremiah 25:26</strong> — "Sheshach" → "Babel" via Hebrew Atbash.</li>
<li><strong>Caesar Cipher:</strong> Shift by fixed number. <code>c = (p + X) mod 26</code>. <strong>Keyspace = 25.</strong></li>
<li><strong>Vigenère:</strong> Polyalphabetic substitution with a repeating keyword. Uses tabula recta. More resistant to frequency analysis.</li>
</ul>
<h4>Encoding vs. Encryption</h4>
<p><strong>Pigpen/Masonic cipher</strong> = "basically a font" — an encoding, not encryption. <strong>Morse code</strong> = also encoding. If it uses a <strong>secret key</strong>, it's encryption.</p>`,sources:["Slide: 11 Cryptography - Introduction, slides 10-62","Transcripts: 2026-03-12 sessions 1-3"]},

{bullet:"Cipher Concepts (Keyspace, Kerckhoffs, Trapdoor, Randomness)",detail:`<ul>
<li><strong>Keyspace:</strong> Total number of possible keys. Caesar = 25.</li>
<li><strong>Cryptanalysis:</strong> Breaking ciphers using math/statistics (letter frequency, digraphs like TH).</li>
<li><strong>Kerckhoffs's Principle:</strong> "A cryptosystem should be secure even if <strong>everything about the system, except the key</strong>, is public knowledge." Security through obscurity ≠ security.</li>
<li><strong>Trapdoor (one-way) function:</strong> Easy one direction, hard to reverse. Examples: integer factorization (RSA), discrete log (DH), elliptic curve (ECC).</li>
<li><strong>Randomness:</strong> Truly random is hard. Sources: atmospheric noise (random.org), radioactive decay (HotBits), lava lamps (Cloudflare). <strong>CSPRNG</strong> for crypto; standard <code>random()</code> is NOT crypto-safe.</li>
</ul>
<h4>Enigma</h4>
<p>Rotors, reflector, plugboard; daily key sheets. Weakness: non-random indicators. <strong>Marian Rejewski</strong> (Poland) → <strong>Alan Turing</strong> (Bombe). UK needed US manufacturing. Lesson: don't act on every decrypt.</p>`,sources:["Slide: 12 Cryptography - Modern Ciphers, slides 3-8","Slide: 11 Cryptography - Introduction, slides 64-72","Transcripts: 2026-03-17 sessions"]},

{bullet:"Modern Ciphers: OTP, Diffie-Hellman, RSA, AES, ChaCha20",detail:`<h4>One-Time Pad (OTP)</h4>
<p>Proven <strong>perfectly secure</strong> by <strong>Claude Shannon</strong>. Requirements: pad must be truly random, used only once, ≥ message length. Impractical for most uses.</p>
<h4>Diffie-Hellman Key Exchange</h4>
<p>Solves the <strong>key exchange problem</strong>. Based on discrete logarithm: g^x mod p is easy; finding x is hard. DH is an <strong>asymmetric process</strong> that produces a <strong>symmetric key</strong>. Limitations: no authentication, MITM without certs. <strong>Forward secrecy / Ephemeral DH:</strong> new key per session. <strong>ECDH</strong> = elliptic curve variant.</p>
<h4>RSA</h4>
<p>Named after <strong>Rivest, Shamir, Adleman</strong>. <strong>Clifford Cocks</strong> at GCHQ discovered it ~10 years earlier (classified).</p>
<p><strong>Key Generation:</strong></p>
<ol>
<li>Choose primes <strong>p</strong> and <strong>q</strong></li>
<li><strong>n = p × q</strong></li>
<li><strong>φ(n) = (p-1)(q-1)</strong></li>
<li>Choose <strong>e</strong>: prime, 1 &lt; e &lt; φ(n), coprime with φ(n)</li>
<li>Public key = <strong>{e, n}</strong></li>
<li>Find <strong>d</strong>: (d × e) mod φ(n) = 1</li>
<li>Private key = <strong>{d, n}</strong></li>
</ol>
<p>Encrypt: <strong>c = m^e mod n</strong> | Decrypt: <strong>m = c^d mod n</strong></p>
<p><strong>Example:</strong> p=3, q=11 → n=33, φ=20, e=7, d=3. Encrypt m=3: c = 3^7 mod 33 = 9.</p>
<h4>AES</h4>
<p>Symmetric block cipher. Won NIST competition (<strong>Rijndael</strong>). 128-bit blocks, <strong>10 rounds</strong>. Operations: SubBytes, ShiftRows, MixColumns, AddRoundKey. Hardware AES in CPUs.</p>
<h4>ChaCha20</h4>
<p>Modern <strong>stream cipher</strong>; very fast, "taking over" in some contexts.</p>`,sources:["Slide: 11 Cryptography - Introduction, slides 73-74","Slide: 12 Cryptography - Modern Ciphers, slides 9-13, 29-54","Transcripts: 2026-03-17 all sessions, 2026-03-19"]},

{bullet:"Symmetric vs. Asymmetric; Block vs. Stream ciphers",detail:`<h4>Symmetric vs. Asymmetric</h4>
<table><tr><th></th><th>Symmetric</th><th>Asymmetric</th></tr>
<tr><td><strong>Keys</strong></td><td>Single shared key</td><td>Key pair: public + private</td></tr>
<tr><td><strong>Speed</strong></td><td>Fast</td><td>Slow</td></tr>
<tr><td><strong>Use case</strong></td><td>Bulk data encryption</td><td>Key exchange, signatures, certs</td></tr>
<tr><td><strong>Examples</strong></td><td>AES, ChaCha20, DES</td><td>RSA, ECC, DH</td></tr></table>
<h4>Block vs. Stream</h4>
<table><tr><th></th><th>Block</th><th>Stream</th></tr>
<tr><td><strong>Operation</strong></td><td>Fixed-size chunks (128-bit for AES)</td><td>Bit-by-bit or byte-by-byte</td></tr>
<tr><td><strong>Best for</strong></td><td>Stored data, large payloads</td><td>Live/streaming data</td></tr>
<tr><td><strong>Examples</strong></td><td>AES</td><td>RC4 (legacy), ChaCha20</td></tr></table>`,sources:["Slide: 12 Cryptography - Modern Ciphers, slides 28-30","Transcripts: 2026-03-17, 2026-04-14"]},

{bullet:"Block Cipher Modes (ECB, CBC, CFB, GCM)",detail:`<table><tr><th>Mode</th><th>Description</th><th>Error Prop.</th><th>Parallel</th><th>Auth</th></tr>
<tr><td><strong>ECB</strong></td><td>Each block independent</td><td>No</td><td>Yes</td><td>No</td></tr>
<tr><td><strong>CBC</strong></td><td>XOR with previous ciphertext; needs IV</td><td>Yes</td><td>Enc: No; Dec: Yes</td><td>No</td></tr>
<tr><td><strong>CFB</strong></td><td>Block cipher as stream cipher</td><td>Yes</td><td>Enc: No; Dec: Yes</td><td>No</td></tr>
<tr><td><strong>GCM</strong></td><td>Counter mode + auth tag (AEAD)</td><td>Yes</td><td>Yes (mostly)</td><td>Yes (weak)</td></tr></table>
<h4>Key Exam Points</h4>
<ul>
<li><strong>ECB is bad</strong> for structured data — "Tux the penguin" example. Don't use ECB.</li>
<li><strong>CBC:</strong> Better diffusion but subject to <strong>padding oracle attacks (POODLE)</strong>.</li>
<li><strong>CFB:</strong> Useful when you need block cipher to act like stream cipher.</li>
<li><strong>GCM:</strong> The <strong>recommended default</strong>. "Most widely implemented, still considered good." Lab uses AES-GCM.</li>
</ul>`,sources:["Slide: 12 Cryptography - Modern Ciphers, slides 34-44","Transcripts: 2026-03-17 all sessions, 2026-04-14"]},

{bullet:"Hashing / Digest Algorithms",detail:`<p>One-way function producing a fixed-length "fingerprint." Used for <strong>integrity checks</strong>, duplicate detection, password storage. Not reversible.</p>
<p><strong>Good hash:</strong> Small input change → large unpredictable output change.</p>
<p><strong>Collisions:</strong> Inevitable but a good hash makes forced collisions infeasible.</p>
<table><tr><th>Algorithm</th><th>Status</th></tr>
<tr><td><strong>MD5</strong></td><td>Broken — do not use cryptographically</td></tr>
<tr><td><strong>SHA-1</strong></td><td>Broken — forced collisions demonstrated</td></tr>
<tr><td><strong>SHA-256</strong></td><td>Widely used; currently secure</td></tr>
<tr><td><strong>SHA-3</strong></td><td>Newer alternative</td></tr></table>`,sources:["Slide: 12 Cryptography - Modern Ciphers, slides 72-74","Transcripts: 2026-03-19, 2026-04-14"]},

{bullet:"MACs, Digital Signatures, and Non-Repudiation",detail:`<h4>MAC (Message Authentication Code)</h4>
<p>Hash of message encrypted with a <strong>symmetric key</strong>. Provides integrity + authenticity among key-holders. <strong>CMAC</strong> = cipher-based; <strong>HMAC</strong> = hash-based. Limitation: per-sender/per-key, can't publish universally.</p>
<h4>Digital Signatures (most-missed exam topic)</h4>
<blockquote>"A digital signature is a hash of a message encrypted with the sender's private key."</blockquote>
<ol>
<li>Sender <strong>hashes</strong> the message</li>
<li>Sender <strong>encrypts the hash</strong> with their <strong>private key</strong> → the signature</li>
<li>Sender transmits message + signature</li>
<li>Recipient hashes the message independently</li>
<li>Recipient <strong>decrypts signature</strong> with sender's <strong>public key</strong></li>
<li>Compare hashes — match = <strong>integrity + authenticity</strong></li>
</ol>
<p>Provides: integrity, authenticity, <strong>non-repudiation</strong>. Does <strong>NOT</strong> provide confidentiality.</p>
<p><strong>Example:</strong> OS updates — vendor signs hash with private key; your OS verifies with built-in public key.</p>`,sources:["Slide: 12 Cryptography - Modern Ciphers, slides 80-95","Transcripts: 2026-03-24, 2026-04-14 sessions 1 & 3"]},

{bullet:"Digital Certificates, PKI, and TLS",detail:`<h4>Digital Certificates</h4>
<p>Electronic document linking a <strong>public key to an individual/organization</strong>.</p>
<h4>PKI (Public Key Infrastructure)</h4>
<p>Rules, processes, technology around creation, distribution, use, and revocation of certificates. Two trust models:</p>
<ul>
<li><strong>Certificate Authority (CA):</strong> Centralized trust. Types: Domain Validated, Organization Validated, Extended Validation.</li>
<li><strong>Web of Trust:</strong> Decentralized; certificates signed by peers.</li>
</ul>
<h4>Revocation</h4>
<p><strong>CRL</strong> (list), <strong>OCSP</strong> (real-time query), <strong>OCSP Stapling</strong> (server includes CA statement), Browser CRL sets (Chrome CRLset, Firefox OneCRL).</p>
<h4>TLS</h4>
<p>SSL is deprecated; <strong>TLS 1.3</strong> (2018) is current. Hybrid: asymmetric for key exchange, symmetric for bulk data. Adds <strong>perfect forward secrecy</strong>. Algorithm combination = <strong>cipher suite</strong>.</p>`,sources:["Slide: 12 Cryptography - Modern Ciphers, slides 98-112","Transcripts: 2026-03-24 sessions, 2026-04-14 session 2"]},

{bullet:"TOR, Dark Web, VPN, and Steganography",detail:`<h4>Web Layers</h4>
<ul>
<li><strong>Surface/Clear:</strong> Public, indexed</li>
<li><strong>Deep:</strong> Behind auth/paywalls — the <strong>majority</strong> of the web</li>
<li><strong>Dark:</strong> Requires Tor; a <strong>tiny</strong> fraction</li>
</ul>
<h4>TOR (The Onion Router)</h4>
<p>Purpose: <strong>anonymity, NOT confidentiality</strong>. Layers of encryption stripped by successive relays: entry → middle → exit. Exit relay can see plain HTTP. <strong>.onion</strong> addresses ≈ SHA-256 hashes.</p>
<h4>VPN</h4>
<p>Encrypted tunnel. Protocols: PPTP, L2TP/IPsec, OpenVPN, etc. Concern: VPN providers may keep logs.</p>
<h4>Steganography</h4>
<p>Concealing data within another file. History: Herodotus (~440 BC). Modern: <strong>Least Significant Bit (LSB)</strong> in image pixels. Best practice: encrypt payload before embedding.</p>`,sources:["Slide: 12 Cryptography - Modern Ciphers, slides 113-127","Transcripts: 2026-03-26 sessions"]},

{bullet:"ECC, Post-Quantum Cryptography, and Blockchain",detail:`<h4>Elliptic-Curve Cryptography (ECC)</h4>
<p><strong>256-bit ECC ≈ 3072-bit RSA</strong>. Shorter keys, faster computation. Public key = point on curve; private key = number of hops. Google uses ECC; BYU uses RSA-4096.</p>
<h4>Post-Quantum Cryptography</h4>
<ul>
<li><strong>Shor's algorithm:</strong> Breaks RSA, DH, ECC — "irrevocably broken and must be replaced"</li>
<li><strong>Grover's algorithm:</strong> AES needs <strong>double key size</strong> but remains sound</li>
<li><strong>Harvest now, decrypt later:</strong> Record traffic today, decrypt when quantum arrives</li>
<li>Solutions: <strong>lattice-based</strong>, <strong>code-based</strong> crypto. Apple iMessage ships post-quantum algorithms.</li>
</ul>
<h4>Blockchain</h4>
<p>Merkle root (hash of hashes) per block; each block includes previous block's hash. Mining: adjust nonce until hash meets difficulty. Wallets use ECC keys. "Do you need a blockchain? <strong>No.</strong>"</p>`,sources:["Slide: 12 Cryptography - Modern Ciphers, slides 55-67, 122-125","Transcripts: 2026-03-19, 2026-03-24"]}
]},

{id:"auth",title:"Authentication",badge:"auth",points:[
{bullet:"What is a Shibboleth?",detail:`<p>From <strong>Judges 12:5-6</strong>: The Gileadites used pronunciation of "Shibboleth" (vs. "Sibboleth") to identify Ephraimites — 42,000 were killed for failing.</p>
<p>A <strong>shibboleth</strong> is "a peculiarity of pronunciation, behavior, mode of dress, etc., that distinguishes a particular class or set of persons." Modern examples: place-name pronunciations (e.g., "Wollochet Bay").</p>`,sources:["Slide: 13 Authentication, slides 4-12","Transcripts: 2026-04-14 session 4"]},

{bullet:"Identification, Authentication, Authorization",detail:`<ul>
<li><strong>Identification:</strong> An identity <strong>claim</strong> (e.g. "I am Pat")</li>
<li><strong>Authentication:</strong> <strong>Proving</strong> that claim (passport, password)</li>
<li><strong>Authorization:</strong> What you're <strong>allowed to do</strong> after authentication (permissions, roles)</li>
</ul>`,sources:["Slide: 13 Authentication, slide 13","Transcripts: 2026-03-31, 2026-04-14 session 1"]},

{bullet:"SSO, Federated Identity, and Protocols (SAML, OAuth, CAS, Kerberos, LDAP)",detail:`<ul>
<li><strong>SSO (e.g., BYU CAS):</strong> One organization, one login → many apps. Risk: session compromise opens many systems.</li>
<li><strong>Federated Identity:</strong> Third-party identity (Google, GitHub) travels to other orgs' apps.</li>
</ul>
<h4>Protocols</h4>
<ul>
<li><strong>SAML:</strong> Standard for exchanging authentication info between systems</li>
<li><strong>OAuth 2.0:</strong> Access delegation (authorization). Lab uses OAuth with Google API.</li>
<li><strong>CAS:</strong> Web SSO protocol</li>
<li><strong>Kerberos:</strong> Local network authentication protocol</li>
<li><strong>LDAP:</strong> Lightweight Directory Access Protocol</li>
</ul>`,sources:["Slide: 13 Authentication, slides 18-19","Transcripts: 2026-03-31 sessions 3-4"]},

{bullet:"Authentication Factors (Knowledge, Possession, Biometrics)",detail:`<table><tr><th>Factor</th><th>Type</th><th>Examples</th></tr>
<tr><td><strong>Something you know</strong></td><td>Knowledge</td><td>Password, PIN, pattern, security questions</td></tr>
<tr><td><strong>Something you have</strong></td><td>Possession</td><td>Phone, hardware token, smart card, security key</td></tr>
<tr><td><strong>Something you are</strong></td><td>Biometrics</td><td>Fingerprint, face, iris, keystroke dynamics, vein pattern</td></tr></table>
<h4>Biometrics Pros/Cons</h4>
<p><strong>Pros:</strong> Convenient, hard to share/lose. <strong>Cons:</strong> Environmental issues (masks, wet hands), can't be changed if compromised, false positives (twins), costly sensors.</p>`,sources:["Slide: 13 Authentication, slides 21-60","Transcripts: 2026-04-02 sessions 2-3"]},

{bullet:"Passwords (policies, cracking, salt/pepper/iterations)",detail:`<p><strong>Most important characteristics:</strong> <strong>length</strong> and <strong>non-reuse</strong>.</p>
<p><strong>XKCD model:</strong> Complex rules → hard to remember AND not long enough. Length increases difficulty <strong>exponentially</strong>; symbol rules help only <strong>linearly</strong>. Best: "Turn off complexity requirements, just require length."</p>
<h4>Cracking Methods</h4>
<table><tr><th>Method</th><th>Description</th></tr>
<tr><td>Brute force</td><td>Try every combination</td></tr>
<tr><td>Dictionary</td><td>Common words and known passwords</td></tr>
<tr><td>Rainbow tables</td><td>Precomputed hash databases — "trading storage for processing"</td></tr>
<tr><td>Hybrid/Mask</td><td>Dictionary + brute force patterns</td></tr></table>
<h4>Defense</h4>
<ul>
<li><strong>Salt:</strong> Random string per user before hashing. "Salt destroys rainbow tables."</li>
<li><strong>Pepper:</strong> Mostly abandoned — "not really making us more secure."</li>
<li><strong>Iterations:</strong> Hash ~20,000 times. Negligible for login, "20,000 times worse" for cracking.</li>
<li><strong>Slow algorithms:</strong> bcrypt, PBKDF2, Argon2 instead of SHA-256.</li>
</ul>
<p><strong>Storage (worst to best):</strong> Clear text → Hashed → Hashed+salt → Hashed+salt+iterations</p>
<p><strong>Password managers:</strong> "Best tool we have for stopping phishing attacks" — won't autofill on wrong domain.</p>`,sources:["Slide: 13 Authentication, slides 25-44","Transcripts: 2026-04-02 sessions 2-3, 2026-04-14"]},

{bullet:"MFA / 2FA (methods, weaknesses, passkeys/FIDO2)",detail:`<h4>Methods (weakest to strongest)</h4>
<ul>
<li><strong>SMS codes:</strong> SIM-swap vulnerable; weakest MFA</li>
<li><strong>TOTP:</strong> App-generated codes; better but MITM-vulnerable</li>
<li><strong>Push (Duo):</strong> Not entered through attacker's site; <strong>number matching</strong> reduces blind approves</li>
<li><strong>Security keys (FIDO2/WebAuthn):</strong> Asymmetric encryption challenge. Face ID/fingerprint <strong>unlocks the passkey</strong>, not the crypto. Phishing-resistant.</li>
<li><strong>Passkeys:</strong> Passwordless WebAuthn/FIDO2 credentials</li>
</ul>
<p><strong>Weaknesses:</strong> SMS interception, SIM swapping, push fatigue, sophisticated MITM.</p>
<p><strong>Key insight:</strong> Mag card = weak. PIN = weak. Card + PIN = "still terrible, but not nearly as terrible." Combining <strong>different factor categories</strong> is the point.</p>`,sources:["Slide: 13 Authentication, slides 45-65","Transcripts: 2026-04-02 sessions 2-3"]},

{bullet:"Access Control Models (ACL, RBAC, ABAC)",detail:`<ul>
<li><strong>ACL:</strong> Filesystem ACL (file permissions) and Network ACL (firewall rules)</li>
<li><strong>RBAC:</strong> Permissions assigned to roles, users to roles. Types: Flat, Hierarchical, Constrained, Symmetric.</li>
<li><strong>ABAC:</strong> Policies based on attributes (user, resource, environment). Implemented with XACML or ALFA. Components: PEP, PDP, PAP, PIP.</li>
<li><strong>CAPTCHA:</strong> Human-verification challenge (not authentication per se).</li>
</ul>`,sources:["Slide: 13 Authentication, slides 66-81","Transcripts: 2026-04-02"]}
]},

{id:"hbgary",title:"HBGary Federal",badge:"hbgary",points:[
{bullet:"Background and key stakeholders",detail:`<ul>
<li><strong>HBGary</strong> — security consulting firm; founders <strong>Greg Hoglund</strong> (rootkit.com) and <strong>Penny Leavy-Hoglund</strong></li>
<li><strong>HBGary Federal</strong> — subsidiary for U.S. government contracts</li>
<li><strong>Aaron Barr</strong> — CEO of HBGary Federal</li>
<li><strong>"Juicy" (Jussi Jaakonaho)</strong> — Finnish system administrator</li>
</ul>`,sources:["Slide: HB Gary Federal Hack, slides 1-5","Transcripts: 2026-04-02 sessions 2-3"]},

{bullet:"What prompted the attack? Who attacked?",detail:`<p><strong>Aaron Barr</strong> publicly claimed he could <strong>unmask Anonymous</strong> members and planned to share names with the FBI — a "total bluff" for marketing. <strong>Lesson: "Don't poke the hornet's nest."</strong></p>
<h4>Who Actually Attacked</h4>
<p><strong>LulzSec</strong> (~7 people), not "Anonymous" as an organization. Did it "for the lulz." After HBGary, went on a <strong>"100 days of lulz"</strong> spree: Fox, PBS, game companies, <strong>Sony</strong>, the <strong>US Senate</strong>, and the <strong>CIA</strong>.</p>
<h4>Key Members</h4>
<ul>
<li><strong>Sabu (Hector Monsegur)</strong> — Founder; flipped, became FBI informant</li>
<li><strong>Kayla (Ryan Ackroyd)</strong> — Social engineer; posed as teen girl online</li>
<li><strong>Tflow (Mustafa Al-Bassam)</strong> — Later completed PhD in CS/blockchain</li>
<li><strong>Topiary (Jake Davis)</strong> — Scotland; minor at the time</li>
<li><strong>Pwnsauce (Darren Martyn)</strong> — Ireland; now a pentester</li>
<li><strong>AVunit</strong> — Never caught; best OPSEC</li>
</ul>`,sources:["Slide: HB Gary Federal Hack, slides 6-12","Transcripts: 2026-04-02 sessions 2-3"]},

{bullet:"Methods of attack (attack chain)",detail:`<ol>
<li><strong>SQL Injection</strong> on a custom CMS — "the most bare-bones SQL injection." Exposed user database.</li>
<li><strong>Stole user table:</strong> Passwords hashed with <strong>MD5, no salt</strong> → cracked with <strong>rainbow tables</strong>, including Aaron's password.</li>
<li><strong>Password reuse:</strong> Aaron used same password everywhere → <strong>email compromised</strong>.</li>
<li><strong>Social engineering</strong> from Aaron's email to Juicy (admin): convinced him to "open it up to the world."</li>
<li><strong>Full compromise:</strong> Server access, email, website defaced, data exfiltrated.</li>
<li><strong>WikiLeaks release:</strong> Tens of thousands of emails published.</li>
</ol>`,sources:["Slide: HB Gary Federal Hack, slides 13-14","Transcripts: 2026-04-02 sessions 2-3"]},

{bullet:"Aftermath and lessons learned",detail:`<p>HBGary Federal was effectively <strong>destroyed</strong> as a company.</p>
<p><strong>Vulnerabilities exploited:</strong> SQL injection on custom code, MD5 without salt, password reuse, social engineering, lack of MFA.</p>
<h4>LulzSec Outcomes</h4>
<ul>
<li><strong>Sabu</strong> — Served 7 months (informant). Now security researcher/AI exec.</li>
<li><strong>Kayla</strong> — 30 months UK prison. Now teaches/pentesters.</li>
<li><strong>Tflow</strong> — 20 months UK prison. PhD in CS, blockchain startups.</li>
<li><strong>Topiary</strong> — 24 months sentenced, served 38 days. Security consultant.</li>
<li><strong>Pwnsauce</strong> — No jail time. Pentester/researcher.</li>
<li><strong>AVunit</strong> — Never caught.</li>
</ul>`,sources:["Slide: HB Gary Federal Hack, slides 14-15","Transcripts: 2026-04-02 sessions 2-3"]}
]}
];

/**
 * Match quiz sourceRef to study cards (same rules as the quiz side panel).
 * @returns {{ sectionId: string, cardIndex: number|null, points: Array }}
 */
function getStudyAnchorFromRef(topicKey, sourceRef){
  var section = STUDY_DATA.find(function(sec){ return sec.id === topicKey; });
  if(!section || !section.points || !section.points.length){
    return { sectionId: topicKey, cardIndex: null, points: [] };
  }
  var tail = (sourceRef || '').split('>').pop().trim();
  var hint = tail.replace(/\?$/,'').toLowerCase();
  var points = section.points;
  if(!hint){
    return { sectionId: section.id, cardIndex: 0, points: points.slice(0, 2) };
  }
  var words = hint.split(/[^\w]+/).filter(function(w){ return w.length > 2; });
  var scored = points.map(function(p, idx){
    var b = p.bullet.toLowerCase();
    var score = 0;
    if(b.includes(hint)) score += 25;
    var hintPrefix = hint.slice(0, Math.min(48, hint.length));
    if(hintPrefix.length > 5 && b.includes(hintPrefix)) score += 12;
    words.forEach(function(w){ if(b.includes(w)) score += 4; });
    return { p: p, idx: idx, score: score };
  });
  scored.sort(function(a, b){ return b.score - a.score; });
  if(scored[0].score > 0){
    return { sectionId: section.id, cardIndex: scored[0].idx, points: [scored[0].p] };
  }
  if(words.length){
    var hitIdx = points.findIndex(function(p){
      return words.some(function(w){ return p.bullet.toLowerCase().includes(w); });
    });
    if(hitIdx >= 0){
      return { sectionId: section.id, cardIndex: hitIdx, points: [points[hitIdx]] };
    }
  }
  return { sectionId: section.id, cardIndex: 0, points: points.slice(0, 2) };
}

/** Hash fragment for index.html: section only, or section/cardIndex (opens that card). */
function studyGuideHashFromRef(topicKey, sourceRef){
  var m = getStudyAnchorFromRef(topicKey, sourceRef);
  if(m.cardIndex == null) return m.sectionId;
  return m.sectionId + '/' + m.cardIndex;
}
