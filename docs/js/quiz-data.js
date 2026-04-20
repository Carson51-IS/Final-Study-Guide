const QUIZ_DATA = [

  // ─────────────────────────────────────────────
  //  FRAUD (25 questions)
  // ─────────────────────────────────────────────

  {
    id: 1,
    topic: "fraud",
    type: "mc",
    question: "Which of the following is NOT one of the five elements required for an act to be legally classified as fraud?",
    choices: [
      "A. A false statement, representation, or disclosure",
      "B. An intent by the liar to deceive",
      "C. A motive of personal financial gain",
      "D. Justifiable reliance by a reasonable victim",
      "E. An injury or loss suffered by the victim"
    ],
    correct: 2,
    explanation: "The five elements of fraud are: (1) a false statement, (2) about a material fact that induces action, (3) intent to deceive, (4) justifiable reliance, and (5) injury or loss. 'Motive of personal financial gain' is not a required element — fraud can occur even when the perpetrator's gain is indirect or non-financial. The key is whether the victim was harmed through deception.",
    sourceRef: "Study Guide > Fraud > What Is Fraud?"
  },
  {
    id: 2,
    topic: "fraud",
    type: "mc",
    question: "A company employee rounds every payroll transaction to the nearest dollar and transfers the leftover cents to a personal account. Over a year, this accumulates $45,000. Which fraud method does this best illustrate?",
    choices: [
      "A. Skimming",
      "B. Structuring",
      "C. Salami technique",
      "D. Triangulation fraud"
    ],
    correct: 2,
    explanation: "The salami technique involves stealing tiny amounts per transaction (e.g., rounding fractions and pocketing the remainder). Skimming involves capturing card data with overlays on ATMs or gas pumps. Structuring involves breaking deposits to stay under reporting thresholds. Triangulation fraud involves using stolen credit cards to fulfill marketplace orders.",
    sourceRef: "Study Guide > Fraud > Fraud Methods"
  },
  {
    id: 3,
    topic: "fraud",
    type: "tf",
    question: "In the fraud triangle, technology professionals primarily address the 'rationalization' side by implementing better security controls.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. Technology professionals primarily address the OPPORTUNITY side of the fraud triangle — reducing the chances someone can commit fraud through technical controls, segregation of duties, monitoring, etc. Rationalization is addressed through training and culture, not technical controls.",
    sourceRef: "Study Guide > Fraud > The Fraud Triangle"
  },
  {
    id: 4,
    topic: "fraud",
    type: "mc",
    question: "A customer buys an expensive laptop online, receives it, then disputes the charge with their credit card company claiming they never received the item — keeping both the laptop and the refund. This is an example of:",
    choices: [
      "A. Triangulation fraud",
      "B. Friendly fraud (chargeback fraud)",
      "C. Identity theft",
      "D. Advance-fee fraud"
    ],
    correct: 1,
    explanation: "Friendly fraud (chargeback fraud) occurs when a buyer makes a legitimate purchase, then disputes the charge to get their money back while keeping the goods. Triangulation fraud involves a fake seller using stolen credit cards to fulfill orders. This scenario describes the buyer intentionally abusing the chargeback process.",
    sourceRef: "Study Guide > Fraud > Fraud Methods"
  },
  {
    id: 5,
    topic: "fraud",
    type: "mc",
    question: "An employee who committed embezzlement tells herself, 'The company makes billions — they'll never even notice this small amount.' Which technique of neutralization is she using?",
    choices: [
      "A. Denial of responsibility",
      "B. Denial of injury",
      "C. Denial of the victim",
      "D. Condemnation of the condemners",
      "E. Appeal to higher loyalties"
    ],
    correct: 1,
    explanation: "Denial of injury is the rationalization that 'no one got hurt' or the harm is negligible. The employee is minimizing the impact of her theft by suggesting the large company won't be affected. Denial of responsibility would be 'it's not my fault'; denial of the victim would be 'they deserved it'; condemnation of the condemners would be attacking the accusers' credibility.",
    sourceRef: "Study Guide > Fraud > Techniques of Neutralization"
  },
  {
    id: 6,
    topic: "fraud",
    type: "mc",
    question: "A drug dealer deposits $9,999 at five different banks on the same day to avoid triggering Currency Transaction Reports. This practice is known as:",
    choices: [
      "A. Salami technique",
      "B. Structuring (smurfing)",
      "C. Triangulation",
      "D. Phreaking"
    ],
    correct: 1,
    explanation: "Structuring (also called smurfing) involves breaking cash deposits into amounts under the ~$10,000 Currency Transaction Report threshold. The salami technique involves skimming small amounts from many transactions. Triangulation fraud involves fake marketplace sellers using stolen cards. Phreaking is hacking the phone system.",
    sourceRef: "Study Guide > Fraud > Fraud Methods"
  },
  {
    id: 7,
    topic: "fraud",
    type: "mc",
    question: "In the OneCoin case, how did Ruja Ignatova's scheme primarily commit fraud?",
    choices: [
      "A. By manipulating a real blockchain's consensus mechanism",
      "B. By hacking directly into investors' crypto wallets",
      "C. By paying earlier investors with new investor money (Ponzi)",
      "D. By shorting legitimate cryptocurrencies using insider knowledge"
    ],
    correct: 2,
    explanation: "OneCoin was a Ponzi scheme branded as an MLM, where there was no blockchain, no technology, and no actual cryptocurrency. Victims were told profits came from cryptocurrency sales, but the money actually came from new investors buying 'packages.' The scheme brought in approximately $3.8–4 billion before collapsing.",
    sourceRef: "Study Guide > Fraud > OneCoin case study"
  },
  {
    id: 8,
    topic: "fraud",
    type: "tf",
    question: "Research shows that increasing the severity of sanctions (punishments) is the most effective way to prevent employees from committing security policy violations.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. Research shows that sanctions tend NOT to be effective at preventing policy violations. A better approach is to 'neutralize the neutralization techniques' through targeted training — addressing the rationalizations people use to justify bad behavior, rather than relying on the threat of punishment.",
    sourceRef: "Study Guide > Fraud > Techniques of Neutralization"
  },
  {
    id: 9,
    topic: "fraud",
    type: "mc",
    question: "In the Diann Cattani case, which aspect of the fraud triangle was most directly enabled by her working at a small company where she 'wore many hats'?",
    choices: [
      "A. Pressure",
      "B. Opportunity",
      "C. Rationalization",
      "D. Capability"
    ],
    correct: 1,
    explanation: "The small company with weak controls and lack of segregation of duties created the OPPORTUNITY for fraud. Cattani's initial mistake ('wrong credit card') was never caught, which illustrates how lack of oversight enables fraud. While she also experienced pressure (personal) and rationalization (normalized behavior), the small company environment most directly created opportunity.",
    sourceRef: "Study Guide > Fraud > Case Study: Diann Cattani"
  },
  {
    id: 10,
    topic: "fraud",
    type: "mc",
    question: "Mark Scott, a lawyer involved in the OneCoin scheme, was brought in to:",
    choices: [
      "A. Develop OneCoin's blockchain and mining infrastructure",
      "B. Recruit new investors through MLM channels",
      "C. Launder about $400M through offshore shell companies",
      "D. Serve as CEO after Ruja Ignatova disappeared"
    ],
    correct: 2,
    explanation: "Mark Scott was a U.S. lawyer who set up Caribbean shell companies, offshore accounts, and investment funds to launder ~$400M from OneCoin. He earned approximately $50M (~10%) for his role. He was convicted of conspiracy to commit money laundering and bank fraud, and was disbarred in November 2020.",
    sourceRef: "Study Guide > Fraud > OneCoin case study"
  },
  {
    id: 11,
    topic: "fraud",
    type: "mc",
    question: "An employee who has been embezzling says, 'The CEO makes 300 times what I make — who are they to judge me?' This is an example of which neutralization technique?",
    choices: [
      "A. Denial of responsibility",
      "B. Denial of injury",
      "C. Appeal to higher loyalties",
      "D. Condemnation of the condemners"
    ],
    correct: 3,
    explanation: "Condemnation of the condemners involves attacking the moral standing of those who would accuse or judge you — essentially calling them hypocrites. By pointing to the CEO's large salary, the employee redirects attention from their own wrongdoing to the perceived unfairness of those in authority.",
    sourceRef: "Study Guide > Fraud > Techniques of Neutralization"
  },
  {
    id: 12,
    topic: "fraud",
    type: "mc",
    question: "A fake seller on an online marketplace takes orders from buyers at low prices, then purchases the items from a legitimate retailer using stolen credit card numbers and ships them to the buyer. This is an example of:",
    choices: [
      "A. Friendly fraud",
      "B. Triangulation fraud",
      "C. Salami technique",
      "D. Identity theft"
    ],
    correct: 1,
    explanation: "Triangulation fraud involves a fake marketplace seller who fulfills orders by purchasing with a stolen credit card elsewhere. The buyer is happy, the platform pays the seller, and the stolen card funds the purchase — effectively laundering stolen card numbers through three parties (buyer, fake seller, legitimate retailer).",
    sourceRef: "Study Guide > Fraud > Fraud Methods"
  },
  {
    id: 13,
    topic: "fraud",
    type: "tf",
    question: "For an act to be legally classified as fraud, the victim must have relied on the misrepresentation in a way that any person — regardless of how outlandish the claim — would have believed.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. The standard is 'justifiable reliance' — the victim must rely on the misrepresentation in a way that a NORMAL, REASONABLE person would. If the scam is so outlandish that no reasonable person would fall for it, the justifiable reliance element may not hold. The test is based on a reasonable person standard, not any person.",
    sourceRef: "Study Guide > Fraud > What Is Fraud?"
  },
  {
    id: 14,
    topic: "fraud",
    type: "mc",
    question: "Which of the following best describes the 'material fact' element of fraud?",
    choices: [
      "A. The lie must be documented in writing",
      "B. The lie must be significant enough to induce action",
      "C. The lie must involve a physical or tangible item",
      "D. The lie must cause damages exceeding $10,000"
    ],
    correct: 1,
    explanation: "A 'material fact' means the false statement must be about something significant (substantive) enough that it causes someone to do something they otherwise wouldn't have done. 'Material' means large or substantive — for example, a $47 discrepancy on a trillion-dollar firm would likely not be considered material.",
    sourceRef: "Study Guide > Fraud > What Is Fraud?"
  },
  {
    id: 15,
    topic: "fraud",
    type: "mc",
    question: "Ruja Ignatova is currently:",
    choices: [
      "A. Serving a 20-year prison sentence in the U.S.",
      "B. An FBI Top Ten fugitive with a $5M reward",
      "C. Under house arrest in Bulgaria awaiting trial",
      "D. Living openly in Dubai under diplomatic protection"
    ],
    correct: 1,
    explanation: "Ruja Ignatova, 'The Cryptoqueen,' disappeared and is currently an FBI Top Ten Most Wanted fugitive with a $5 million reward. Karl Sebastian Greenwood was the one sentenced to 20 years. Konstantin Ignatov (her brother) was arrested at LAX and signed a plea deal. Ruja's whereabouts remain unknown.",
    sourceRef: "Study Guide > Fraud > OneCoin case study"
  },
  {
    id: 16,
    topic: "fraud",
    type: "mc",
    question: "A device placed over an ATM card slot that captures magnetic stripe data when customers insert their cards is an example of:",
    choices: [
      "A. Phreaking",
      "B. Shimming",
      "C. Skimming",
      "D. Smishing"
    ],
    correct: 2,
    explanation: "Skimming involves ATM or gas-pump overlays that capture card data from the magnetic stripe. Shimming is a related but distinct technique that captures data from the chip (chip-level). Phreaking is hacking the phone system, and smishing is SMS-based phishing. The key distinction is skimming targets the magnetic stripe.",
    sourceRef: "Study Guide > Fraud > Fraud Methods"
  },
  {
    id: 17,
    topic: "fraud",
    type: "mc",
    question: "Which fraud prevention strategy is MOST directly within the control of IT security professionals?",
    choices: [
      "A. Reducing employee financial pressure through better pay",
      "B. Reducing fraud opportunity through stronger technical controls",
      "C. Reducing rationalization through targeted employee therapy",
      "D. Hiring only candidates with clean criminal records"
    ],
    correct: 1,
    explanation: "IT professionals primarily address the opportunity side of the fraud triangle by increasing the difficulty of committing fraud through technical controls like access restrictions, segregation of duties, monitoring, and logging. Financial pressures (A) and rationalization (C) are HR/management concerns, and hiring practices (D) are not technical controls.",
    sourceRef: "Study Guide > Fraud > Fraud Prevention and Mitigation"
  },
  {
    id: 18,
    topic: "fraud",
    type: "tf",
    question: "Individuals who commit fraud are typically referred to as blue-collar criminals.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. Individuals who commit fraud are referred to as WHITE-COLLAR criminals. The term 'blue-collar' refers to manual labor workers. White-collar crime involves deception in business or professional contexts for financial gain, and fraud is the quintessential white-collar crime.",
    sourceRef: "Study Guide > Fraud > What Is Fraud?"
  },
  {
    id: 19,
    topic: "fraud",
    type: "mc",
    question: "In the Diann Cattani case, her fraud began with:",
    choices: [
      "A. A premeditated plan to embezzle company funds",
      "B. Discovering a flaw in the company's accounting software",
      "C. A small uncaught mistake that later normalized into fraud",
      "D. Pressure from a coworker to cover up irregularities"
    ],
    correct: 2,
    explanation: "Cattani's fraud began as a slippery slope — she made a small mistake using the wrong credit card, and when it was never caught due to weak controls at her small company, the behavior normalized over time. This illustrates how weak controls create opportunity and how small ethical compromises can escalate into significant fraud.",
    sourceRef: "Study Guide > Fraud > Case Study: Diann Cattani"
  },
  {
    id: 20,
    topic: "fraud",
    type: "mc",
    question: "An employee takes cash payments from customers and pockets them before they can be recorded in the company's accounting system. This is best described as:",
    choices: [
      "A. Lapping cash receipts",
      "B. Skimming cash before entry",
      "C. Salami technique fraud",
      "D. Structuring cash deposits"
    ],
    correct: 1,
    explanation: "In occupational fraud, skimming refers to taking cash before it is recorded in the books — the money never appears in the accounting system. This is distinct from the ATM/card reader skimming technique. The salami technique involves tiny amounts taken from many transactions, and structuring involves breaking deposits to avoid reporting thresholds.",
    sourceRef: "Study Guide > Fraud > Fraud Methods"
  },
  {
    id: 21,
    topic: "fraud",
    type: "mc",
    question: "An employee caught embezzling says, 'I had to do it — my family needed the money and the company has insurance for this.' Which TWO neutralization techniques is she combining?",
    choices: [
      "A. Denial of responsibility and denial of injury",
      "B. Appeal to higher loyalties and denial of injury",
      "C. Denial of the victim and condemnation of the condemners",
      "D. Appeal to higher loyalties and denial of responsibility"
    ],
    correct: 1,
    explanation: "'I had to do it for my family' is an appeal to higher loyalties — prioritizing family over organizational rules. 'The company has insurance' is denial of injury — minimizing the harm by suggesting no one really suffers. Together, these two neutralization techniques form a layered rationalization for the criminal behavior.",
    sourceRef: "Study Guide > Fraud > Techniques of Neutralization"
  },
  {
    id: 22,
    topic: "fraud",
    type: "tf",
    question: "Fraud is relatively easy to prosecute, which is why most white-collar criminals are charged directly with fraud.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. Fraud is notoriously HARD to prosecute, particularly proving intent to deceive. Prosecutors often pursue adjacent charges such as mail fraud, wire fraud, or money laundering instead. The difficulty stems from proving all five elements, especially the subjective element of intent.",
    sourceRef: "Study Guide > Fraud > What Is Fraud?"
  },
  {
    id: 23,
    topic: "fraud",
    type: "mc",
    question: "Which OneCoin associate fled to Thailand, was extradited to the U.S., pled guilty in December 2022, and was sentenced to 20 years?",
    choices: [
      "A. Mark Scott",
      "B. Konstantin Ignatov",
      "C. Karl Sebastian Greenwood",
      "D. Ruja Ignatova"
    ],
    correct: 2,
    explanation: "Karl Sebastian Greenwood fled to Thailand, was extradited to the U.S., pled guilty in December 2022, and was sentenced to 20 years. Mark Scott was the lawyer convicted of laundering ~$400M. Konstantin Ignatov (Ruja's brother) was arrested at LAX. Ruja Ignatova disappeared and remains on the FBI's Top Ten Most Wanted list.",
    sourceRef: "Study Guide > Fraud > OneCoin case study"
  },
  {
    id: 24,
    topic: "fraud",
    type: "mc",
    question: "When Bulgarian authorities raided OneCoin's headquarters in January 2018, they found:",
    choices: [
      "A. Servers full of blockchain transaction data",
      "B. An empty building — suspected tip-off or paid police",
      "C. Ruja Ignatova working under a false identity",
      "D. Evidence of a legitimate cryptocurrency mining operation"
    ],
    correct: 1,
    explanation: "When authorities raided the OneCoin Bulgaria headquarters in January 2018, the building was found empty — suggesting either a tip-off or that police had been paid off. This is consistent with the scheme's scale ($3.8–4 billion) and the resources available to avoid law enforcement.",
    sourceRef: "Study Guide > Fraud > OneCoin case study"
  },
  {
    id: 25,
    topic: "fraud",
    type: "mc",
    question: "Which of the following is the BEST example of the 'denial of the victim' neutralization technique?",
    choices: [
      "A. 'I only took a small amount — they'll never notice.'",
      "B. 'The company cheated me out of a promotion.'",
      "C. 'It wasn't my fault — the system invited me to do it.'",
      "D. 'My boss does worse things every day of the week.'"
    ],
    correct: 1,
    explanation: "Denial of the victim is the rationalization that the victim 'deserved it' or 'had it coming.' Option B fits this — the employee frames the company as deserving of the fraud. Option A is denial of injury ('no one got hurt'), option C is denial of responsibility ('not my fault'), and option D is condemnation of the condemners ('you're a hypocrite').",
    sourceRef: "Study Guide > Fraud > Techniques of Neutralization"
  },


  // ─────────────────────────────────────────────
  //  INCIDENT RESPONSE (25 questions)
  // ─────────────────────────────────────────────

  {
    id: 26,
    topic: "incident-response",
    type: "mc",
    question: "What is the key difference between a security 'event' and a security 'incident'?",
    choices: [
      "A. Events are always malicious; incidents may be accidental",
      "B. Events are observable occurrences; incidents disrupt normal operations",
      "C. Events happen externally; incidents happen internally at organizations",
      "D. Events require immediate response; incidents can wait"
    ],
    correct: 1,
    explanation: "An event is any observable occurrence in IT infrastructure (e.g., a login, a firewall alert). An incident (per ISO 27001) is an event that is NOT part of normal operations and causes or may cause disruption or reduction in service quality. All incidents are events, but not all events are incidents.",
    sourceRef: "Study Guide > Incident Response > Definitions"
  },
  {
    id: 27,
    topic: "incident-response",
    type: "mc",
    question: "A SOC analyst notices unusual network traffic patterns during routine monitoring. This observation is best described as:",
    choices: [
      "A. An incident",
      "B. A precursor",
      "C. An indicator",
      "D. An event"
    ],
    correct: 3,
    explanation: "At the point of initial observation during routine monitoring, this is simply an event — an observable occurrence. It becomes an indicator if further analysis shows something happened or is happening now. It would be a precursor if it suggests something may happen in the future. It only becomes an incident if it disrupts or threatens normal operations.",
    sourceRef: "Study Guide > Incident Response > Definitions"
  },
  {
    id: 28,
    topic: "incident-response",
    type: "mc",
    question: "What is the primary difference between a SOC and a CSIRT?",
    choices: [
      "A. A SOC handles external threats; a CSIRT handles internal",
      "B. A SOC runs daily monitoring; a CSIRT convenes for major incidents",
      "C. A SOC is staffed by managers; a CSIRT by technical personnel",
      "D. A SOC responds to incidents; a CSIRT only plans for them"
    ],
    correct: 1,
    explanation: "The SOC handles continuous, day-to-day monitoring and defending against threats (ongoing operations). The CSIRT is a cross-functional team invoked for major incidents — as described in the study guide, 'when you have an incident that is bad enough, you get the Avengers together.' The SOC is always active; the CSIRT assembles when needed.",
    sourceRef: "Study Guide > Incident Response > Definitions"
  },
  {
    id: 29,
    topic: "incident-response",
    type: "mc",
    question: "During an active data breach, the CSIRT lead must make rapid decisions with incomplete and possibly incorrect information. This challenge is best described by which military concept?",
    choices: [
      "A. Chain of command",
      "B. Rules of engagement",
      "C. Fog of war",
      "D. OPSEC"
    ],
    correct: 2,
    explanation: "The 'fog of war' concept, borrowed from military and emergency response, describes the reality that not all information is known during an incident. Decisions must be made with incomplete data, and early reports are often wrong. Chain of command refers to clear authority structures for decision-making, which is a separate (though related) preparedness concept.",
    sourceRef: "Study Guide > Incident Response > Phase 1: Preparation"
  },
  {
    id: 30,
    topic: "incident-response",
    type: "mc",
    question: "A CSIRT evaluates an incident to determine if it is a ransomware attack because they have a specific playbook for ransomware. Which FIRST classification dimension are they applying?",
    choices: [
      "A. Criticality",
      "B. Sensitivity",
      "C. Category",
      "D. Priority"
    ],
    correct: 2,
    explanation: "Category refers to the TYPE of incident — DOS/DDOS, compromised information, malware, email-based attack, policy violation, etc. The CSIRT is determining the category so they can apply the appropriate response playbook. Criticality determines urgency (response time), and sensitivity determines who needs to know.",
    sourceRef: "Study Guide > Incident Response > FIRST Classification Framework"
  },
  {
    id: 31,
    topic: "incident-response",
    type: "tf",
    question: "According to the FIRST classification framework, an incident involving a non-critical system requires an initial response within 60 minutes.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. The 60-minute initial response time is for critical systems or revenue-impacting incidents. Non-critical systems require a 4-hour response. Non-critical/possible incidents have a 48-hour response window. The FIRST framework uses these different urgency levels to allocate resources appropriately.",
    sourceRef: "Study Guide > Incident Response > FIRST Classification Framework"
  },
  {
    id: 32,
    topic: "incident-response",
    type: "mc",
    question: "During incident response, a security team decides to disconnect a compromised server from the network. However, they are concerned this might trigger the malware to encrypt data if it detects connectivity loss. This dilemma illustrates:",
    choices: [
      "A. The fog of war",
      "B. The risks of containment",
      "C. Chain of custody requirements",
      "D. Post-incident analysis"
    ],
    correct: 1,
    explanation: "This illustrates the risks of containment. Containment actions like disconnecting systems carry risks: tipping your hand may cause the attacker to escalate, removing internet may trigger malware behavior changes (e.g., encryption on connectivity loss), and changes could damage evidence. The response team must weigh these risks against the benefits of containment.",
    sourceRef: "Study Guide > Incident Response > Phase 3: Containment, Eradication, & Recovery"
  },
  {
    id: 33,
    topic: "incident-response",
    type: "mc",
    question: "Which phase of the NIST Incident Response Lifecycle includes creating playbooks for specific attack types and establishing communication strategies?",
    choices: [
      "A. Detection & Analysis",
      "B. Containment, Eradication, & Recovery",
      "C. Post-Incident Analysis",
      "D. Preparation"
    ],
    correct: 3,
    explanation: "Preparation includes establishing the CSIRT, creating communication strategies (internal and external), developing response plans/playbooks for common attacks, setting up policies and procedures, and implementing defensive tools. All of this groundwork happens before any incident occurs.",
    sourceRef: "Study Guide > Incident Response > Phase 1: Preparation"
  },
  {
    id: 34,
    topic: "incident-response",
    type: "mc",
    question: "A vulnerability scan reveals a known exploit in your web server software, but no attack has occurred yet. This finding is best classified as:",
    choices: [
      "A. An indicator",
      "B. A precursor",
      "C. An incident",
      "D. A false positive"
    ],
    correct: 1,
    explanation: "A precursor shows that an event MAY happen in the future — such as a vulnerability in a scan or intelligence about an upcoming attack. An indicator shows something happened or IS happening now (e.g., IDS alert, failed logins). The vulnerability hasn't been exploited yet, so it's a warning of potential future compromise, making it a precursor.",
    sourceRef: "Study Guide > Incident Response > Phase 2: Detection & Analysis"
  },
  {
    id: 35,
    topic: "incident-response",
    type: "mc",
    question: "Why is maintaining a chain of custody critical during incident response?",
    choices: [
      "A. It ensures the CSIRT follows the correct playbook",
      "B. It keeps evidence admissible and verifiable as untampered",
      "C. It determines which manager authorized the response actions",
      "D. It tracks the cost of the incident for insurance"
    ],
    correct: 1,
    explanation: "Chain of custody documentation tracks who had evidence, when, and where it was stored, ensuring that evidence is admissible in court and can be verified as authentic and untampered. Without proper chain of custody, even compelling digital evidence may be ruled inadmissible because its integrity cannot be proven.",
    sourceRef: "Study Guide > Incident Response > Phase 3: Containment, Eradication, & Recovery"
  },
  {
    id: 36,
    topic: "incident-response",
    type: "tf",
    question: "According to the FIRST sensitivity classification, Level 1 (extremely sensitive) incidents should be communicated to all employees so everyone can help respond.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. Level 1 (extremely sensitive) information should only be shared with the CSIRT and management — a 'need to know' basis. Level 2 (sensitive) expands to include system owners and operations. Level 3 (not sensitive) is when employees can be informed. Sharing sensitive incident details too broadly can compromise the investigation or cause unnecessary panic.",
    sourceRef: "Study Guide > Incident Response > FIRST Classification Framework"
  },
  {
    id: 37,
    topic: "incident-response",
    type: "mc",
    question: "During the eradication phase of incident response, the primary goal is to:",
    choices: [
      "A. Identify which systems were affected by the threat",
      "B. Disconnect compromised systems from the network quickly",
      "C. Remove the threat, rebuild, and restore clean backups",
      "D. Document lessons learned for future incident response"
    ],
    correct: 2,
    explanation: "Eradication is about removing the threat completely — reformatting systems, rebuilding them, and restoring from CLEAN backups. Identifying affected systems falls under Detection & Analysis, disconnecting systems is part of Containment, and documenting lessons learned is Post-Incident Analysis. The key word in eradication is 'clean' — backups must be verified as uncompromised.",
    sourceRef: "Study Guide > Incident Response > Phase 3: Containment, Eradication, & Recovery"
  },
  {
    id: 38,
    topic: "incident-response",
    type: "mc",
    question: "Which of the following is NOT a recommended action during the recovery phase of incident response?",
    choices: [
      "A. Fix vulnerabilities before restoring systems to production",
      "B. Continue monitoring for signs of re-compromise",
      "C. Add indicators of compromise to IDS/IPS rules",
      "D. Immediately restore all systems to minimize downtime"
    ],
    correct: 3,
    explanation: "During recovery, you should fix vulnerabilities and improve defenses BEFORE putting systems back in production, continue monitoring for re-compromise, and add indicators of compromise to IDS/IPS. Immediately restoring systems without fixing the underlying vulnerabilities would likely lead to re-compromise.",
    sourceRef: "Study Guide > Incident Response > Phase 3: Containment, Eradication, & Recovery"
  },
  {
    id: 39,
    topic: "incident-response",
    type: "mc",
    question: "Which principle states that every contact or interaction leaves a trace of evidence?",
    choices: [
      "A. Kerckhoffs's principle",
      "B. Locard's exchange principle",
      "C. The principle of least privilege",
      "D. Shannon's theorem"
    ],
    correct: 1,
    explanation: "Locard's Exchange Principle states that 'everything leaves a trace / evidence' — every contact between two items results in an exchange of material. In digital forensics, this means attackers inevitably leave traces (log entries, file modifications, network artifacts) even when they try to cover their tracks.",
    sourceRef: "Study Guide > Incident Response > Phase 2: Detection & Analysis"
  },
  {
    id: 40,
    topic: "incident-response",
    type: "mc",
    question: "A forensic investigator creates a bit-by-bit copy of a compromised hard drive and generates a hash of both the original and the copy. Why is the hash comparison important?",
    choices: [
      "A. To encrypt the forensic image for secure storage",
      "B. To compress the forensic image to save disk space",
      "C. To verify the copy is exact and the original untouched",
      "D. To identify which files the attacker modified recently"
    ],
    correct: 2,
    explanation: "Creating hashes of both the original and the forensic copy verifies that the copy is an exact replica and that the original has not been altered during the imaging process. This is critical for maintaining evidence integrity and chain of custody. If the hashes match, the copy is proven to be a perfect duplicate.",
    sourceRef: "Study Guide > Incident Response > Phase 3: Containment, Eradication, & Recovery"
  },
  {
    id: 41,
    topic: "incident-response",
    type: "mc",
    question: "During an active intrusion, the incident response team learns that disconnecting the attacker could cause them to detonate ransomware. This risk is an example of:",
    choices: [
      "A. Evidence spoliation by responders",
      "B. Containment risk — attacker escalation",
      "C. Chain of custody failure",
      "D. Post-incident oversight gap"
    ],
    correct: 1,
    explanation: "This is a containment risk — specifically, the risk that containment actions may 'tip your hand' and cause the attacker to escalate (e.g., detonate ransomware, wipe data, or accelerate exfiltration). The response team must weigh the risk of the attacker's reaction against the risk of continued access.",
    sourceRef: "Study Guide > Incident Response > Phase 3: Containment, Eradication, & Recovery"
  },
  {
    id: 42,
    topic: "incident-response",
    type: "tf",
    question: "Forensic images should be created as soon as possible because data stored in volatile memory is lost when systems are powered off.",
    choices: ["True", "False"],
    correct: 0,
    explanation: "True. Forensic images — bit-by-bit copies of memory and filesystem — should be created quickly because volatile data (RAM contents, running processes, network connections) is lost when systems power off. This makes speed critical in evidence preservation, especially for memory forensics.",
    sourceRef: "Study Guide > Incident Response > Phase 3: Containment, Eradication, & Recovery"
  },
  {
    id: 43,
    topic: "incident-response",
    type: "mc",
    question: "Which of the following is NOT a typical question addressed during post-incident analysis?",
    choices: [
      "A. What happened and how well did the response work?",
      "B. What disciplinary action should be taken against the attacker?",
      "C. Were the team's documented procedures adequate for this?",
      "D. How can we detect similar incidents in the future?"
    ],
    correct: 1,
    explanation: "Post-incident analysis focuses on: what happened, how well the response worked, whether documented procedures were adequate, what could be done differently, how to detect similar incidents in the future, and whether additional tools or resources are needed. Disciplinary action against external attackers is a law enforcement matter, not part of the CSIRT's post-incident review.",
    sourceRef: "Study Guide > Incident Response > Phase 4: Post-Incident Analysis"
  },
  {
    id: 44,
    topic: "incident-response",
    type: "mc",
    question: "According to the preparation phase of NIST 800-61, who should sponsor the CSIRT?",
    choices: [
      "A. The IT help desk manager on duty",
      "B. A senior manager such as the CISO or CIO",
      "C. The organization's external auditor or consultant",
      "D. The team's most technically skilled employee"
    ],
    correct: 1,
    explanation: "Chain of command requires a clear authority structure for quick decision-making. A senior manager should sponsor the CSIRT — typically the CISO, CIO, or legal counsel — to ensure the team has the organizational authority to make critical decisions during an incident, including decisions about system shutdowns, public communications, and law enforcement involvement.",
    sourceRef: "Study Guide > Incident Response > Phase 1: Preparation"
  },
  {
    id: 45,
    topic: "incident-response",
    type: "mc",
    question: "An anti-virus program detects a known malware signature on a workstation. This detection is best classified as:",
    choices: [
      "A. A precursor",
      "B. An indicator",
      "C. A false positive",
      "D. A containment action"
    ],
    correct: 1,
    explanation: "An indicator shows something happened or IS happening now — such as an IDS alert, anti-virus detection, failed logins, or deviation in network traffic. The anti-virus detection is evidence of current malware presence, making it an indicator. A precursor would suggest something MIGHT happen in the future.",
    sourceRef: "Study Guide > Incident Response > Phase 2: Detection & Analysis"
  },
  {
    id: 46,
    topic: "incident-response",
    type: "mc",
    question: "An evidence log for a forensic investigation should include all of the following EXCEPT:",
    choices: [
      "A. Hostname, IP address, and model number of the device",
      "B. Who collected the evidence and the date/time",
      "C. The suspect's confession or statement",
      "D. Storage location of the evidence"
    ],
    correct: 2,
    explanation: "An evidence log tracks identifying information (hostname, IP, model number), who collected the evidence, date/time, and storage location. A suspect's confession is not part of the evidence log — it would be handled by law enforcement or legal teams. The evidence log is specifically about maintaining chain of custody for physical and digital evidence.",
    sourceRef: "Study Guide > Incident Response > Phase 3: Containment, Eradication, & Recovery"
  },
  {
    id: 47,
    topic: "incident-response",
    type: "tf",
    question: "A CSIRT is typically a cross-functional team that may include members from IT, legal, HR, and communications.",
    choices: ["True", "False"],
    correct: 0,
    explanation: "True. A CSIRT is described as cross-functional — 'when you have an incident that is bad enough, you get the Avengers together.' This means assembling expertise from different departments (IT security, legal, HR, communications, management) to effectively handle all dimensions of a major incident.",
    sourceRef: "Study Guide > Incident Response > Definitions"
  },
  {
    id: 48,
    topic: "incident-response",
    type: "mc",
    question: "Which data source for incident detection involves analytics platforms that correlate events from multiple sources across the organization?",
    choices: [
      "A. Anti-virus scanning software",
      "B. File integrity monitoring tools",
      "C. A SIEM correlation platform",
      "D. Third-party monitoring services"
    ],
    correct: 2,
    explanation: "SIEM (Security Information and Event Management) systems provide analytics by aggregating and correlating events from multiple data sources across the organization — logs, IDS/IPS alerts, authentication events, etc. Anti-virus checks for known malware signatures, file integrity checking uses hashing to detect unauthorized modifications, and third-party monitoring is external.",
    sourceRef: "Study Guide > Incident Response > Phase 2: Detection & Analysis"
  },
  {
    id: 49,
    topic: "incident-response",
    type: "mc",
    question: "A revenue-critical production database server is compromised. According to the FIRST classification, what is the required initial response time?",
    choices: [
      "A. 15 minutes",
      "B. 60 minutes",
      "C. 4 hours",
      "D. 48 hours"
    ],
    correct: 1,
    explanation: "Critical systems or revenue-impacting incidents require a 60-minute initial response according to the FIRST classification framework. Non-critical systems get a 4-hour window, and non-critical/possible incidents get 48 hours. A revenue-critical production database server is clearly in the most urgent tier.",
    sourceRef: "Study Guide > Incident Response > FIRST Classification Framework"
  },
  {
    id: 50,
    topic: "incident-response",
    type: "mc",
    question: "Which NIST incident response phase directly follows Detection & Analysis?",
    choices: [
      "A. Preparation",
      "B. Post-Incident Analysis",
      "C. Containment, Eradication, & Recovery",
      "D. Threat Intelligence"
    ],
    correct: 2,
    explanation: "The NIST Incident Response Lifecycle phases are: (1) Preparation, (2) Detection & Analysis, (3) Containment, Eradication, & Recovery, and (4) Post-Incident Analysis. After detecting and analyzing an incident, the next step is containing it, eradicating the threat, and recovering systems.",
    sourceRef: "Study Guide > Incident Response > NIST Incident Response Lifecycle"
  },


  // ─────────────────────────────────────────────
  //  PRIVACY (25 questions)
  // ─────────────────────────────────────────────

  {
    id: 51,
    topic: "privacy",
    type: "mc",
    question: "What is the key distinction between 'confidentiality' and 'privacy' in information security?",
    choices: [
      "A. Confidentiality protects digital data; privacy protects physical records",
      "B. Confidentiality protects organization data; privacy protects individual data",
      "C. Confidentiality is legally required; privacy is purely optional",
      "D. Confidentiality covers classified data; privacy covers all else"
    ],
    correct: 1,
    explanation: "Confidentiality focuses on protecting an organization's intellectual property and internal information, while privacy deals with protecting customer/individual information — the desire of individuals to control data about themselves. This distinction is important because different legal frameworks and ethical obligations apply to each.",
    sourceRef: "Study Guide > Privacy > Confidentiality vs. Privacy"
  },
  {
    id: 52,
    topic: "privacy",
    type: "mc",
    question: "A user wants to download all the personal data Google has collected about them in a portable format. Which GDPR right does this exercise?",
    choices: [
      "A. Right to Rectification",
      "B. Right to Data Portability",
      "C. Right of Access",
      "D. Right to be Informed"
    ],
    correct: 1,
    explanation: "The Right to Data Portability allows individuals to export their data in a usable format to move to another system (e.g., Google Takeout exports data in portable formats). The Right of Access allows you to obtain your data but doesn't specify portability. The Right to Rectification is about fixing inaccurate data, and the Right to be Informed is about being told how data is collected and used.",
    sourceRef: "Study Guide > Privacy > GDPR Rights"
  },
  {
    id: 53,
    topic: "privacy",
    type: "mc",
    question: "GDPR is generally described as an _____ system, while most U.S. privacy laws follow an _____ model.",
    choices: [
      "A. opt-out; opt-in",
      "B. opt-in; opt-out",
      "C. voluntary; mandatory",
      "D. federal; state"
    ],
    correct: 1,
    explanation: "GDPR is generally opt-in — explicit consent is required before data collection. U.S. laws are generally opt-out — data is collected by default and the individual must request removal. This fundamental difference reflects the EU's stronger stance on individual consent versus the U.S. business-friendly approach.",
    sourceRef: "Study Guide > Privacy > Opt-In vs. Opt-Out"
  },
  {
    id: 54,
    topic: "privacy",
    type: "mc",
    question: "A person notices that their credit report contains an incorrect address and requests the credit bureau to fix it. Which GDPR right does this correspond to?",
    choices: [
      "A. Right to Erasure",
      "B. Right to Rectification",
      "C. Right to Restrict Processing",
      "D. Right to Object"
    ],
    correct: 1,
    explanation: "The Right to Rectification allows individuals to fix inaccurate data — like a wrong name in an article or an incorrect entry in a credit file. The Right to Erasure is about deleting accounts/profiles entirely, while the Right to Restrict Processing limits how data is used. The Right to Object allows withdrawing consent.",
    sourceRef: "Study Guide > Privacy > GDPR Rights"
  },
  {
    id: 55,
    topic: "privacy",
    type: "mc",
    question: "An algorithm denies a person's loan application. Under GDPR, the person can request:",
    choices: [
      "A. That the algorithm's source code be made public",
      "B. That the company delete all their financial data",
      "C. Human review of the automated loan decision",
      "D. That the company use a different algorithm"
    ],
    correct: 2,
    explanation: "The Rights Related to Automated Decision-Making allow individuals to request human review of algorithmic decisions (loan approvals, insurance, admissions). This doesn't require the company to publish their source code or change their algorithm — only to have a human review the specific decision rather than leaving it entirely to automation.",
    sourceRef: "Study Guide > Privacy > GDPR Rights"
  },
  {
    id: 56,
    topic: "privacy",
    type: "tf",
    question: "The GDPR only applies to companies that are physically located within the European Union.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. GDPR applies to organizations within the EU AND to those that sell to the EU or collect data about EU members, regardless of the organization's physical location. This extraterritorial reach is one of GDPR's most significant features, affecting companies worldwide that serve EU customers.",
    sourceRef: "Study Guide > Privacy > GDPR"
  },
  {
    id: 57,
    topic: "privacy",
    type: "mc",
    question: "In 2018, users worldwide received floods of 'we've updated our privacy policy' emails. Which GDPR right primarily drove this?",
    choices: [
      "A. Right of Access",
      "B. Right to be Informed (Transparency)",
      "C. Right to Data Portability",
      "D. Right to Erasure"
    ],
    correct: 1,
    explanation: "The Right to be Informed (Transparency) requires organizations to tell users what data they collect, how it's used, who it's shared with, how long it's retained, and who to contact. The flood of privacy policy update emails in May 2018 was organizations scrambling to comply with this transparency requirement before the GDPR enforcement deadline.",
    sourceRef: "Study Guide > Privacy > GDPR Rights"
  },
  {
    id: 58,
    topic: "privacy",
    type: "mc",
    question: "Which U.S. privacy law is specifically designed to protect medical information?",
    choices: [
      "A. FERPA",
      "B. CCPA",
      "C. HIPAA",
      "D. UCPA"
    ],
    correct: 2,
    explanation: "HIPAA (Health Insurance Portability and Accountability Act, 1996) safeguards medical information. It was strengthened by the HITECH Act (2009). FERPA protects education records, CCPA is California's general consumer privacy act, and UCPA is Utah's narrow consumer privacy act primarily targeting data brokers.",
    sourceRef: "Study Guide > Privacy > HIPAA"
  },
  {
    id: 59,
    topic: "privacy",
    type: "mc",
    question: "In a dataset, if a person's combination of zip code, birth date, and gender is shared by only that one individual (K=1), this means:",
    choices: [
      "A. The data is properly anonymized in storage",
      "B. The person is uniquely identifiable via quasi-identifiers",
      "C. The dataset satisfies K-anonymity privacy requirements",
      "D. The person has opted out of data collection"
    ],
    correct: 1,
    explanation: "K-anonymity measures re-identification risk. K is the minimum count of people sharing a particular combination of attributes. If K=1, the individual is uniquely identifiable — their combination of quasi-identifiers singles them out, creating a re-identification risk even in supposedly anonymized data.",
    sourceRef: "Study Guide > Privacy > K-anonymity"
  },
  {
    id: 60,
    topic: "privacy",
    type: "mc",
    question: "The CCPA (California Consumer Privacy Act) is often described as:",
    choices: [
      "A. Stricter than GDPR in every meaningful respect",
      "B. 'GDPR light' — shorter rights list, opt-out model",
      "C. Applicable only to tech companies in Silicon Valley",
      "D. A federal law that applies to all 50 states"
    ],
    correct: 1,
    explanation: "CCPA is often called 'GDPR light' because it provides a shorter list of consumer rights and follows an opt-out model (data collected by default, consumers must request removal) rather than GDPR's opt-in model. It applies to businesses meeting certain revenue/data thresholds in California, not just tech companies.",
    sourceRef: "Study Guide > Privacy > CCPA"
  },
  {
    id: 61,
    topic: "privacy",
    type: "tf",
    question: "Eric Schmidt's quote — 'if you have something that you don't want anyone to know, maybe you shouldn't be doing it' — represents the correct view of privacy according to the course.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. The course explicitly identifies Schmidt's view as the WRONG view of privacy. Privacy is a fundamental right, not evidence of wrongdoing. Historical, religious, and cultural examples demonstrate the importance of privacy — from biblical instructions about confidentiality to ecclesiastical interviews to general civil liberties.",
    sourceRef: "Study Guide > Privacy > Is Privacy Only for Criminals?"
  },
  {
    id: 62,
    topic: "privacy",
    type: "mc",
    question: "A website uses a unique combination of your browser settings, installed fonts, screen resolution, and plugins to identify you across visits without using cookies. This technique is called:",
    choices: [
      "A. Session hijacking",
      "B. Cookie stuffing",
      "C. Browser fingerprinting",
      "D. Cross-site scripting"
    ],
    correct: 2,
    explanation: "Browser fingerprinting creates a unique identifier from the combination of browser settings, fonts, plugins, screen resolution, and other technical attributes. Unlike cookies, it can't be easily cleared or blocked. The EFF's coveryourtracks.eff.org demonstrates how uniquely identifiable most browsers are.",
    sourceRef: "Study Guide > Privacy > Tracking, Aggregation, and Identification"
  },
  {
    id: 63,
    topic: "privacy",
    type: "mc",
    question: "Under the Utah Consumer Privacy Act (UCPA), penalties for violations can be up to:",
    choices: [
      "A. $1,000 per violation",
      "B. $7,500 per violation",
      "C. 4% of annual global revenue",
      "D. $100,000 per violation"
    ],
    correct: 1,
    explanation: "The UCPA allows penalties of up to $7,500 per violation. However, the law has very narrow applicability — it essentially applies to data brokers (requiring annual revenue ≥$25M AND high data volumes). The 4% of annual global revenue is a GDPR penalty, not UCPA.",
    sourceRef: "Study Guide > Privacy > Utah Consumer Privacy Act"
  },
  {
    id: 64,
    topic: "privacy",
    type: "mc",
    question: "Which GDPR right would you exercise if you want to delete your entire account and profile from a social media platform?",
    choices: [
      "A. Right to Restrict Processing Activity",
      "B. Right to Rectification of Data",
      "C. Right to Erasure / Forgotten",
      "D. Right to Object and Withdraw"
    ],
    correct: 2,
    explanation: "The Right to Erasure (Right to be Forgotten) allows individuals to request deletion of their profile/account. However, it doesn't necessarily include transaction or tax records (which may be exempt for legal requirements), and some records may be anonymized rather than fully deleted. This is distinct from the Right to Restrict Processing, which limits how data is used rather than deleting it.",
    sourceRef: "Study Guide > Privacy > GDPR Rights"
  },
  {
    id: 65,
    topic: "privacy",
    type: "tf",
    question: "The Utah Consumer Privacy Act (UCPA) is widely considered to have very broad applicability, affecting most businesses operating in Utah.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. The UCPA has very NARROW applicability, requiring annual revenue ≥$25M AND either data on ≥100,000 consumers OR (>50% revenue from selling data AND data on ≥25,000 consumers). In practice, it 'basically applies to data brokers' and arguably 'applies to no one' in Utah.",
    sourceRef: "Study Guide > Privacy > Utah Consumer Privacy Act"
  },
  {
    id: 66,
    topic: "privacy",
    type: "mc",
    question: "FERPA primarily protects:",
    choices: [
      "A. Financial records kept by federal employees",
      "B. Education records such as grades and recordings",
      "C. Medical information stored in hospital databases",
      "D. Internet browsing history of underage minors"
    ],
    correct: 1,
    explanation: "FERPA (Family Educational Rights and Privacy Act) protects education records — grades, class recordings, student information, etc. HIPAA protects medical information, and there is no single U.S. federal law broadly protecting browsing history of minors (though COPPA addresses children's online privacy differently).",
    sourceRef: "Study Guide > Privacy > FERPA"
  },
  {
    id: 67,
    topic: "privacy",
    type: "mc",
    question: "A GDPR cookie consent banner that lets you choose 'essential cookies only' versus 'all partners' is an implementation of which right?",
    choices: [
      "A. Right to be Informed",
      "B. Right of Access",
      "C. Right to Restrict Processing",
      "D. Right to Data Portability"
    ],
    correct: 2,
    explanation: "The Right to Restrict Processing provides granular limits on how data is used. Cookie consent banners with options like 'essential only' vs. 'all partners' allow users to restrict the scope of data processing. The Right to be Informed would cover the disclosure about what cookies do, but the ability to choose processing level is the Right to Restrict Processing.",
    sourceRef: "Study Guide > Privacy > GDPR Rights"
  },
  {
    id: 68,
    topic: "privacy",
    type: "mc",
    question: "Which of the following is a documented negative consequence of GDPR?",
    choices: [
      "A. It eliminated all data breaches across the EU",
      "B. It hurts smaller firms via regressive compliance costs",
      "C. It made EU citizens' data invisible to companies",
      "D. It forced all U.S. companies to adopt GDPR"
    ],
    correct: 1,
    explanation: "GDPR potentially hurts smaller organizations disproportionately because compliance costs are regressive — the same requirements apply regardless of company size, but smaller firms have fewer resources. Other impacts include ubiquitous cookie banners, some sites blocking EU access entirely, and Meta treating large fines as 'cost of doing business.'",
    sourceRef: "Study Guide > Privacy > Impact of GDPR"
  },
  {
    id: 69,
    topic: "privacy",
    type: "mc",
    question: "Why do many global companies choose to standardize on GDPR compliance worldwide, even in countries without equivalent laws?",
    choices: [
      "A. GDPR is the only privacy law that exists globally",
      "B. GDPR is strictest; compliance satisfies most other laws",
      "C. The EU requires all companies to follow GDPR globally",
      "D. Non-GDPR countries have no privacy protections at all"
    ],
    correct: 1,
    explanation: "GDPR is often the strictest privacy regulation, so many companies standardize on it globally to simplify compliance. If you meet GDPR's requirements, you typically meet or exceed the requirements of less stringent laws (like CCPA or UCPA). This is more efficient than maintaining different privacy practices for different regions.",
    sourceRef: "Study Guide > Privacy > GDPR"
  },
  {
    id: 70,
    topic: "privacy",
    type: "mc",
    question: "Under HIPAA, a 'covered entity' includes all of the following EXCEPT:",
    choices: [
      "A. A health plan administering coverage",
      "B. A healthcare provider transmitting info electronically",
      "C. A healthcare clearinghouse processing claims",
      "D. A social media company hosting a health forum"
    ],
    correct: 3,
    explanation: "HIPAA covered entities are specifically defined as health plans, healthcare providers transmitting health information electronically, and healthcare clearinghouses. A social media company hosting health discussions is not a covered entity under HIPAA, even though it may contain health-related information — it's not a plan, provider, or clearinghouse.",
    sourceRef: "Study Guide > Privacy > HIPAA"
  },
  {
    id: 71,
    topic: "privacy",
    type: "tf",
    question: "Combining multiple 'anonymized' datasets together can sometimes re-identify individuals, defeating the purpose of anonymization.",
    choices: ["True", "False"],
    correct: 0,
    explanation: "True. Aggregation and identification — combining separate datasets — can re-identify 'anonymous' users. Even if individual datasets are anonymized, combining quasi-identifiers (zip code, birth date, gender, etc.) across datasets can narrow results to a single person (K=1), revealing their identity.",
    sourceRef: "Study Guide > Privacy > Tracking, Aggregation, and Identification"
  },
  {
    id: 72,
    topic: "privacy",
    type: "mc",
    question: "Which of the following is NOT a real GDPR right?",
    choices: [
      "A. Right to Data Portability",
      "B. Right to Erasure",
      "C. Right to Compensation",
      "D. Right to Rectification"
    ],
    correct: 2,
    explanation: "The eight GDPR rights are: Right to be Informed, Right of Access, Right to Rectification, Right to Erasure, Right to Restrict Processing, Right to Data Portability, Right to Object, and Rights Related to Automated Decision-Making. 'Right to Compensation' is not a GDPR right — exam questions may include fake rights as distractors.",
    sourceRef: "Study Guide > Privacy > GDPR Rights"
  },
  {
    id: 73,
    topic: "privacy",
    type: "mc",
    question: "The HITECH Act (2009) strengthened which existing privacy law?",
    choices: [
      "A. FERPA",
      "B. CCPA",
      "C. HIPAA",
      "D. GDPR"
    ],
    correct: 2,
    explanation: "The HITECH Act (Health Information Technology for Economic and Clinical Health Act), passed as part of the 2009 stimulus, strengthened HIPAA by expanding enforcement, increasing penalties, and extending privacy requirements. GDPR is an EU regulation (2016/2018), CCPA is a 2018 California law, and FERPA is a separate education privacy law.",
    sourceRef: "Study Guide > Privacy > HIPAA"
  },
  {
    id: 74,
    topic: "privacy",
    type: "mc",
    question: "A website visitor in the EU decides to stop allowing data processing and files a complaint with a supervisory authority. Which GDPR right are they exercising?",
    choices: [
      "A. Right to Erasure",
      "B. Right to Restrict Processing",
      "C. Right to Object / Withdraw Consent",
      "D. Right to Data Portability"
    ],
    correct: 2,
    explanation: "The Right to Object / Withdraw Consent allows individuals to stop processing after opt-out and to complain to the company or to an EU supervisory authority. The Right to Restrict Processing limits specific processing activities, while the Right to Erasure requests complete deletion. The Right to Object specifically includes the complaint mechanism.",
    sourceRef: "Study Guide > Privacy > GDPR Rights"
  },
  {
    id: 75,
    topic: "privacy",
    type: "tf",
    question: "Under GDPR, the Right to Erasure always requires a company to completely delete all records associated with an individual, including tax and legal records.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. The Right to Erasure doesn't necessarily include transaction or tax records, which may be exempt for legal requirements. In some cases, records may need to be anonymized rather than fully deleted. Legal obligations to retain certain records (tax, regulatory, legal proceedings) can override the Right to Erasure.",
    sourceRef: "Study Guide > Privacy > GDPR Rights"
  },


  // ─────────────────────────────────────────────
  //  SONY PICTURES (20 questions)
  // ─────────────────────────────────────────────

  {
    id: 76,
    topic: "sony",
    type: "mc",
    question: "Jason Spaltro, Sony Pictures' CISO, infamously stated his approach to security investments was to:",
    choices: [
      "A. Invest heavily in proactive defense and threat hunting",
      "B. Focus only on security investments required by law",
      "C. Outsource all security operations to a managed provider",
      "D. Prioritize employee training above all technical controls"
    ],
    correct: 1,
    explanation: "Spaltro focused on security investments 'absolutely required by law' and stated he would not invest $10M to avoid a possible $1M loss. While this risk-based logic could be defensible if the loss estimate were accurate, the actual harm from the breach was vastly larger — approximately half a billion dollars. This became a cautionary example of underestimating cyber risk.",
    sourceRef: "Study Guide > Sony Pictures > Key People"
  },
  {
    id: 77,
    topic: "sony",
    type: "mc",
    question: "What was the initial delivery mechanism used by the attackers to compromise Sony Pictures?",
    choices: [
      "A. A USB drive left in the company parking lot",
      "B. Spear-phishing emails posing as Apple ID resets",
      "C. A zero-day exploit in Sony's corporate firewall",
      "D. A compromised third-party vendor's VPN connection"
    ],
    correct: 1,
    explanation: "The delivery method was spear-phishing emails disguised as Apple ID problems, leading employees to fake password reset pages that harvested their credentials. This was a social engineering attack that didn't require exploiting technical vulnerabilities in Sony's perimeter — it exploited human trust instead.",
    sourceRef: "Study Guide > Sony Pictures > The Attack (Cyber Kill Chain)"
  },
  {
    id: 78,
    topic: "sony",
    type: "mc",
    question: "Which cyber kill chain stage involved the attackers going to LinkedIn to identify Sony employees and their roles?",
    choices: [
      "A. Weaponization",
      "B. Delivery",
      "C. Reconnaissance",
      "D. Exploitation"
    ],
    correct: 2,
    explanation: "Reconnaissance is the first stage of the cyber kill chain, where attackers gather information about the target. The Sony attackers used LinkedIn to identify employees and their roles, and also performed infrastructure recon — the malware later contained hard-coded internal IP addresses, indicating they had mapped Sony's network before attacking.",
    sourceRef: "Study Guide > Sony Pictures > The Attack (Cyber Kill Chain)"
  },
  {
    id: 79,
    topic: "sony",
    type: "mc",
    question: "The Sony Pictures attackers used malware built on the lineage of which previous destructive tools?",
    choices: [
      "A. Stuxnet and Flame",
      "B. Shamoon and DarkSeoul",
      "C. NotPetya and WannaCry",
      "D. Zeus and SpyEye"
    ],
    correct: 1,
    explanation: "The weaponization stage involved building on prior wiper malware lineage — specifically Shamoon and DarkSeoul. The attackers used the EldoS disk driver to bypass the OS for fast disk wiping, created custom malware to avoid anti-virus detection, and hard-coded Sony credentials into the malware.",
    sourceRef: "Study Guide > Sony Pictures > The Attack (Cyber Kill Chain)"
  },
  {
    id: 80,
    topic: "sony",
    type: "tf",
    question: "Sony Pictures had strong encryption practices in place at the time of the 2014 hack, protecting most of its sensitive data.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. Sony had near 0% of data encrypted at the time of the hack. Combined with weak passwords, little to no MFA, minimal training, no data or network segmentation, and a very small IT team, the security posture was extremely weak — creating the conditions for a catastrophic breach.",
    sourceRef: "Study Guide > Sony Pictures > Security Practices"
  },
  {
    id: 81,
    topic: "sony",
    type: "mc",
    question: "What was Sony's pattern-based anti-virus unable to detect?",
    choices: [
      "A. Known malware signatures in email attachments",
      "B. Custom/novel malware created specifically for the attack",
      "C. Phishing emails with malicious links",
      "D. Employees using weak passwords"
    ],
    correct: 1,
    explanation: "Sony's anti-virus was present but pattern-based, meaning it relied on known malware signatures. This made it useless against the custom/novel malware created specifically for the Sony attack, since there were no existing patterns to match. This illustrates why signature-based detection alone is insufficient against targeted attacks.",
    sourceRef: "Study Guide > Sony Pictures > Security Practices"
  },
  {
    id: 82,
    topic: "sony",
    type: "mc",
    question: "The attackers set up command & control (C2) servers in Italy, Poland, and Thailand because:",
    choices: [
      "A. These countries have no cybercrime laws",
      "B. Traffic looks normal and avoids North Korea attribution",
      "C. Sony had business partners in these countries",
      "D. These countries had the cheapest server hosting"
    ],
    correct: 1,
    explanation: "The C2 servers were placed in Italy (a former VPN endpoint), Poland (a business), and Thailand (a university) because traffic from these locations would appear normal and not be associated with North Korea. This is a common C2 technique — using compromised infrastructure in neutral countries to avoid attribution.",
    sourceRef: "Study Guide > Sony Pictures > The Attack (Cyber Kill Chain)"
  },
  {
    id: 83,
    topic: "sony",
    type: "mc",
    question: "How did the Sony attackers avoid triggering intrusion detection systems during months of data exfiltration?",
    choices: [
      "A. They encrypted all exfiltrated data with AES-256",
      "B. They only exfiltrated data during non-business hours",
      "C. They throttled data transfers to a low bitrate",
      "D. They modified the IDS rules remotely"
    ],
    correct: 2,
    explanation: "The attackers conducted months of exfiltration before detection by throttling/using low bitrate to avoid triggering IDS alerts. Large data transfers would have been flagged, but slow, steady exfiltration blended in with normal network traffic. This resulted in ~47,000 SSNs, 5 unreleased movies, scripts, and emails being stolen.",
    sourceRef: "Study Guide > Sony Pictures > The Attack (Cyber Kill Chain)"
  },
  {
    id: 84,
    topic: "sony",
    type: "mc",
    question: "Who was the actual threat actor behind the Sony Pictures hack?",
    choices: [
      "A. Anonymous hacker collective",
      "B. Guardians of Peace (independent hacktivists)",
      "C. Lazarus Group (North Korean state-sponsored)",
      "D. LulzSec hacker crew"
    ],
    correct: 2,
    explanation: "The actual attackers were the Lazarus Group, a North Korean state-sponsored group. 'Guardians of Peace' was the hacktivist front name they used. The FBI issued most-wanted posters for three individuals associated with the group. LulzSec was behind the HBGary attack, and Anonymous is a decentralized collective, not the direct attacker.",
    sourceRef: "Study Guide > Sony Pictures > Aftermath"
  },
  {
    id: 85,
    topic: "sony",
    type: "mc",
    question: "The 2005 Sony BMG rootkit scandal involved:",
    choices: [
      "A. A data breach of Sony's music streaming platform",
      "B. A rootkit on music CDs that auto-installed on Windows",
      "C. Hackers inserting malware into Sony's digital music downloads",
      "D. Sony encryption preventing unauthorized copying of Blu-rays"
    ],
    correct: 1,
    explanation: "Sony BMG placed rootkit software on music CDs that auto-installed on Windows computers to block ripping. A rootkit hides itself from the user. The critical consequence was that attackers repurposed Sony's rootkit code, making global malware worse. This was one of several incidents that established Sony's pattern of aggressive anti-piracy measures that provoked hackers.",
    sourceRef: "Study Guide > Sony Pictures > Sony's Pre-Breach Security History"
  },
  {
    id: 86,
    topic: "sony",
    type: "mc",
    question: "What prompted the initial targeting of Sony Pictures by North Korea?",
    choices: [
      "A. Sony's PlayStation Network breach back in 2011",
      "B. The Interview, a Kim Jong-un assassination comedy",
      "C. Sony's acquisition of a North Korean media company",
      "D. Sony's refusal to pay a ransom after an attack"
    ],
    correct: 1,
    explanation: "The Interview, a Seth Rogen comedy depicting a plot to assassinate Kim Jong-un, prompted the attack. North Korea's opposition was predictable — the parallel question being 'how would the US react to a foreign film depicting the assassination of a US president?' The trailers were briefly pulled, creating a Streisand Effect.",
    sourceRef: "Study Guide > Sony Pictures > The Interview"
  },
  {
    id: 87,
    topic: "sony",
    type: "tf",
    question: "After the Sony Pictures hack, the CISO Jason Spaltro was immediately fired and replaced.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. Spaltro stayed as CISO for years after the breach, which aligned with Sony's parent company's refusal to spend on security. Similarly, CEO Michael Lynton was not fired and remained for 15+ years. Amy Pascal resigned years later, more from PR/email fallout than directly from the breach itself.",
    sourceRef: "Study Guide > Sony Pictures > Aftermath"
  },
  {
    id: 88,
    topic: "sony",
    type: "mc",
    question: "After the hack, theaters refused to show The Interview primarily because of:",
    choices: [
      "A. Low audience interest in the film",
      "B. Physical threats against theaters after Aurora shooting",
      "C. A court order from the North Korean government",
      "D. Sony's decision to cancel the theatrical release"
    ],
    correct: 1,
    explanation: "Theaters refused to show The Interview due to physical threats against theaters and moviegoers. The Aurora shooting at a Dark Knight screening made theater chains particularly risk-averse about security threats. President Obama weighed in on free speech grounds, and the film was ultimately released online with high views but weak theatrical revenue.",
    sourceRef: "Study Guide > Sony Pictures > The Interview"
  },
  {
    id: 89,
    topic: "sony",
    type: "mc",
    question: "Which Lazarus Group activity occurred AFTER the Sony Pictures hack and was called the 'largest ransomware' at the time?",
    choices: [
      "A. The Bangladesh Bank heist",
      "B. WannaCry ransomware",
      "C. DarkSeoul attacks on South Korea",
      "D. AstraZeneca pharmaceutical attacks"
    ],
    correct: 1,
    explanation: "WannaCry ransomware (2017) was called the 'largest ransomware' at the time and was attributed to Lazarus Group. The timeline: early DDoS attacks against South Korea → 2014 Sony Pictures → 2015-16 Bangladesh Bank ($81M via SWIFT) → 2017 WannaCry → 2020 AstraZeneca → 2022+ cryptocurrency exchange thefts.",
    sourceRef: "Study Guide > Sony Pictures > Lazarus Group Evolution"
  },
  {
    id: 90,
    topic: "sony",
    type: "mc",
    question: "Philip Reitinger was brought to Sony from a DHS/CISA predecessor role to improve security. Why did his efforts largely fail?",
    choices: [
      "A. He lacked the technical expertise needed for the entertainment industry",
      "B. Japan corporate (Sony's parent) wouldn't fund security improvements",
      "C. He was only at Sony for three months before the hack",
      "D. He focused exclusively on physical security rather than cybersecurity"
    ],
    correct: 1,
    explanation: "Reitinger was a strong security executive brought from DHS/CISA, but despite spending approximately three years at Sony's parent level, little changed because Japan corporate wouldn't fund security investments. This organizational failure — leadership unwilling to invest in security — was a root cause of Sony's vulnerability.",
    sourceRef: "Study Guide > Sony Pictures > Key People"
  },
  {
    id: 91,
    topic: "sony",
    type: "mc",
    question: "In the exploitation stage of the Sony attack, what enabled the malware to spread across the local network?",
    choices: [
      "A. Email forwarding rules that sent malware to all employees",
      "B. Phishing combined with an SMB flaw that wormed through",
      "C. A compromised DNS server redirecting traffic to attackers",
      "D. Physical access to Sony's corporate data center"
    ],
    correct: 1,
    explanation: "The exploitation phase combined social engineering (credential harvesting from the phishing campaign) with an SMB vulnerability, creating a worm — malware that propagates automatically through the network. This is why network segmentation would have been so important; without it, the worm spread across the entire LAN.",
    sourceRef: "Study Guide > Sony Pictures > The Attack (Cyber Kill Chain)"
  },
  {
    id: 92,
    topic: "sony",
    type: "mc",
    question: "How many Social Security Numbers were stolen in the Sony Pictures breach?",
    choices: [
      "A. Approximately 5,000",
      "B. Approximately 47,000",
      "C. Approximately 77 million",
      "D. Approximately 500,000"
    ],
    correct: 1,
    explanation: "Approximately 47,000 Social Security Numbers were stolen along with salaries, addresses, and other PII. The 77 million figure is from the earlier 2011 PlayStation Network breach (a separate Sony division). Additionally, 5 unreleased movies were leaked, and over 3,000 computers and 750 servers were wiped.",
    sourceRef: "Study Guide > Sony Pictures > The Attack (Cyber Kill Chain)"
  },
  {
    id: 93,
    topic: "sony",
    type: "tf",
    question: "The Streisand Effect, as mentioned in the Sony case, refers to the phenomenon where attempting to suppress information actually increases public interest in it.",
    choices: ["True", "False"],
    correct: 0,
    explanation: "True. When Sony briefly pulled the trailers for The Interview, it created a Streisand Effect — the attempt to suppress the content made everyone want to see it even more. The term comes from Barbra Streisand's attempt to suppress photos of her home, which only drew more attention.",
    sourceRef: "Study Guide > Sony Pictures > The Interview"
  },
  {
    id: 94,
    topic: "sony",
    type: "mc",
    question: "Which of the following security controls was PRESENT but ineffective at Sony Pictures during the 2014 hack?",
    choices: [
      "A. Multi-factor authentication (MFA)",
      "B. Full-disk encryption",
      "C. Anti-virus (pattern-based)",
      "D. Network segmentation"
    ],
    correct: 2,
    explanation: "Anti-virus was present at Sony but was pattern-based, making it useless against the custom/novel malware used in the attack. MFA was largely absent ('little to none'), encryption was near 0%, and network segmentation was 'very little.' The anti-virus was the one security control that existed but was fundamentally inadequate against a targeted attack.",
    sourceRef: "Study Guide > Sony Pictures > Security Practices"
  },
  {
    id: 95,
    topic: "sony",
    type: "mc",
    question: "Amy Pascal and Michael Lynton's roles at Sony Pictures were, respectively:",
    choices: [
      "A. CFO and CTO respectively",
      "B. Co-Chair creative and Co-Chair/CEO business",
      "C. CISO and CEO respectively",
      "D. Head of Marketing and Distribution"
    ],
    correct: 1,
    explanation: "Amy Pascal was Co-Chair on the creative side (greenlights, scripts, production) and Michael Lynton was Co-Chair/CEO on the business and finance side. Pascal's leaked emails — containing racially insensitive comments about Obama and disparaging remarks about actors — caused significant PR damage beyond the data breach itself.",
    sourceRef: "Study Guide > Sony Pictures > Key People"
  },


  // ─────────────────────────────────────────────
  //  CRYPTOGRAPHY (55 questions)
  // ─────────────────────────────────────────────

  {
    id: 96,
    topic: "crypto",
    type: "mc",
    question: "Which element of the CIA triad does cryptography NOT directly provide?",
    choices: [
      "A. Confidentiality",
      "B. Integrity",
      "C. Availability",
      "D. Authenticity"
    ],
    correct: 2,
    explanation: "Cryptography provides confidentiality (encryption), integrity (hashing, MACs, digital signatures), and authenticity (digital signatures, certificates), but does NOT provide availability. Availability is an infrastructure concern addressed through redundancy, backups, and load balancing — topics covered in IS 404 / IS 531.",
    sourceRef: "Study Guide > Cryptography > CIA Triad"
  },
  {
    id: 97,
    topic: "crypto",
    type: "mc",
    question: "An attacker intercepts a message in transit and changes the dollar amount from $100 to $10,000 before forwarding it. This attack violates:",
    choices: [
      "A. Confidentiality (interception)",
      "B. Integrity (modification)",
      "C. Availability (interruption)",
      "D. Authenticity (fabrication)"
    ],
    correct: 1,
    explanation: "Modification — intercepting and changing a message — violates integrity. The mitigation is hashing, MACs, or digital signatures. Interception (just reading) violates confidentiality. Interruption (disrupting service) violates availability. Fabrication (unauthorized addition of information) violates authenticity.",
    sourceRef: "Study Guide > Cryptography > Security Threats and Principles"
  },
  {
    id: 98,
    topic: "crypto",
    type: "mc",
    question: "Kerckhoffs's Principle states that:",
    choices: [
      "A. A cipher must use a proprietary algorithm to be secure",
      "B. Security should rest in the key, not algorithm secrecy",
      "C. Longer keys are always more secure than shorter keys",
      "D. Symmetric encryption is always stronger than asymmetric encryption"
    ],
    correct: 1,
    explanation: "Kerckhoffs's Principle states: 'A cryptosystem should be secure even if everything about the system, except the key, is public knowledge.' This means security should reside in the KEY, not in the secrecy of the algorithm. Modern algorithms like AES and RSA are fully public — security through obscurity is not security.",
    sourceRef: "Study Guide > Cryptography > Cipher Concepts"
  },
  {
    id: 99,
    topic: "crypto",
    type: "mc",
    question: "A Caesar cipher with a shift of 5 encrypts the letter 'W' (position 22) as which letter? Formula: c = (p + key) mod 26",
    choices: [
      "A. A",
      "B. B",
      "C. C",
      "D. D"
    ],
    correct: 1,
    explanation: "Using the formula c = (p + key) mod 26: c = (22 + 5) mod 26 = 27 mod 26 = 1. Position 1 corresponds to the letter 'B' (where A=0, B=1, ...). The modular arithmetic wraps around the alphabet, so W shifted by 5 goes W→X→Y→Z→A→B.",
    sourceRef: "Study Guide > Cryptography > Classic Ciphers"
  },
  {
    id: 100,
    topic: "crypto",
    type: "mc",
    question: "What is the total keyspace of the Caesar cipher?",
    choices: [
      "A. 26",
      "B. 25",
      "C. 24",
      "D. 52"
    ],
    correct: 1,
    explanation: "The Caesar cipher keyspace is 25, not 26. A shift of 26 produces the identity (the original text), so it's not a valid key. Each of the 25 remaining shifts produces a different ciphertext, giving a keyspace of 25. This small keyspace makes Caesar trivially breakable by brute force.",
    sourceRef: "Study Guide > Cryptography > Classic Ciphers"
  },
  {
    id: 101,
    topic: "crypto",
    type: "tf",
    question: "The Pigpen (Masonic) cipher is considered true encryption because it substitutes letters with symbols.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. The Pigpen cipher is an ENCODING, not true encryption — it's 'basically a font' that substitutes symbols for letters without using a secret key. Similarly, Morse code is encoding, not encryption. The distinction: if it uses a SECRET KEY, it's encryption; if it's just saving in a different format, it's encoding.",
    sourceRef: "Study Guide > Cryptography > Classic Ciphers"
  },
  {
    id: 102,
    topic: "crypto",
    type: "mc",
    question: "In the Atbash cipher, the letter 'B' (position 1) encrypts to which letter?",
    choices: [
      "A. X",
      "B. Y",
      "C. Z",
      "D. W"
    ],
    correct: 1,
    explanation: "Atbash reverses the alphabet: A↔Z, B↔Y, C↔X, etc. So 'B' (the second letter) maps to 'Y' (the second-to-last letter). A biblical example: in Jeremiah 25:26, 'Sheshach' decrypts to 'Babel/Babylon' using Hebrew Atbash.",
    sourceRef: "Study Guide > Cryptography > Classic Ciphers"
  },
  {
    id: 103,
    topic: "crypto",
    type: "mc",
    question: "What makes the Vigenere cipher stronger than the Caesar cipher against frequency analysis?",
    choices: [
      "A. It uses a much longer extended alphabet",
      "B. Polyalphabetic substitution so each letter shifts differently",
      "C. It rearranges letters rather than substituting them",
      "D. It uses a different random key for every message"
    ],
    correct: 1,
    explanation: "The Vigenere cipher uses polyalphabetic substitution — each letter of the repeating keyword shifts the corresponding plaintext letter by a different amount using the tabula recta. This means the same plaintext letter can encrypt to different ciphertext letters depending on its position relative to the key, making frequency analysis much harder.",
    sourceRef: "Study Guide > Cryptography > Classic Ciphers"
  },
  {
    id: 104,
    topic: "crypto",
    type: "mc",
    question: "ROT13 has a unique property that makes it special among Caesar cipher variants. What is it?",
    choices: [
      "A. It produces the strongest encryption of any rotation",
      "B. Applying it twice returns the original plaintext (self-inverting)",
      "C. It cannot be broken by frequency analysis",
      "D. It works on numbers as well as letters"
    ],
    correct: 1,
    explanation: "ROT13 rotates each letter 13 positions, and since 26/2 = 13, applying ROT13 twice returns the original text. This self-inverting property means the same operation both encrypts and decrypts, making it convenient for simple obfuscation (though it provides no real security).",
    sourceRef: "Study Guide > Cryptography > Classic Ciphers"
  },
  {
    id: 105,
    topic: "crypto",
    type: "mc",
    question: "A function that is easy to compute in one direction but computationally hard to reverse is called a:",
    choices: [
      "A. Hash function",
      "B. Trapdoor (one-way) function",
      "C. Symmetric cipher",
      "D. Block cipher"
    ],
    correct: 1,
    explanation: "A trapdoor (one-way) function is easy to compute forward but hard to reverse. Examples include integer factorization (RSA), discrete logarithm (DH), and elliptic curve (ECC). While hash functions are also one-way, 'trapdoor function' specifically refers to the mathematical basis of asymmetric cryptography where a 'trapdoor' (the private key) makes reversal possible.",
    sourceRef: "Study Guide > Cryptography > Cipher Concepts"
  },
  {
    id: 106,
    topic: "crypto",
    type: "mc",
    question: "Cloudflare uses lava lamps as a source of randomness for cryptographic purposes. This addresses the need for:",
    choices: [
      "A. Faster encryption processing on Cloudflare servers",
      "B. Truly random numbers for cryptographic operations",
      "C. Larger key sizes for better security margins",
      "D. Quantum-resistant encryption algorithms for post-quantum"
    ],
    correct: 1,
    explanation: "Truly random numbers are extremely difficult to generate computationally. Sources of true randomness include atmospheric noise (random.org), radioactive decay (HotBits), and Cloudflare's LavaRand (lava lamps). CSPRNGs use encryption with seeds and hardware entropy, but the standard random() function in most languages is NOT cryptographically secure.",
    sourceRef: "Study Guide > Cryptography > Cipher Concepts"
  },
  {
    id: 107,
    topic: "crypto",
    type: "mc",
    question: "The One-Time Pad (OTP) is proven perfectly secure under which conditions?",
    choices: [
      "A. The pad is at least 128 bits and changed monthly",
      "B. The pad is truly random, used once, and long enough",
      "C. The pad is generated by a CSPRNG and shared securely",
      "D. The pad uses AES-256 encryption internally for keys"
    ],
    correct: 1,
    explanation: "Claude Shannon proved the OTP is perfectly secure when: (1) the pad is truly random (very difficult), (2) used only once, and (3) at least as long as the message. If any condition is violated, security is lost. The OTP is impractical for most uses due to key distribution and length requirements.",
    sourceRef: "Study Guide > Cryptography > One-Time Pad"
  },
  {
    id: 108,
    topic: "crypto",
    type: "tf",
    question: "Diffie-Hellman is an asymmetric encryption algorithm used to encrypt messages between two parties.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. Diffie-Hellman is an asymmetric PROCESS that produces a SYMMETRIC KEY for bulk encryption (using AES or ChaCha). It is NOT 'asymmetric encryption' — it solves the key exchange problem, allowing two parties who've never met to agree on a shared secret over a public channel. The actual encryption happens with the derived symmetric key.",
    sourceRef: "Study Guide > Cryptography > Diffie-Hellman Key Exchange"
  },
  {
    id: 109,
    topic: "crypto",
    type: "mc",
    question: "In Diffie-Hellman, Alice and Bob agree on public values g=5, p=23. Alice chooses private key x=6 and computes her public value y_A = 5^6 mod 23 = 8. Bob chooses private key x=15 and computes y_B = 5^15 mod 23 = 19. What does Alice compute as the shared secret?\n\nFormula: shared_secret = (y_partner)^x mod p",
    choices: [
      "A. 2",
      "B. 19",
      "C. 5",
      "D. 8"
    ],
    correct: 0,
    explanation: "Alice computes: shared_secret = (y_Bob)^x_Alice mod p = 19^6 mod 23 = 2. Bob would compute: shared_secret = (y_Alice)^x_Bob mod p = 8^15 mod 23 = 2. Both arrive at the same shared secret (2) despite never sharing their private keys. This shared secret is then used as a symmetric key for encryption.",
    sourceRef: "Study Guide > Cryptography > Diffie-Hellman Key Exchange"
  },
  {
    id: 110,
    topic: "crypto",
    type: "mc",
    question: "What vulnerability does Diffie-Hellman have when used alone (without additional authentication)?",
    choices: [
      "A. It can only exchange keys shorter than 128 bits",
      "B. Vulnerable to man-in-the-middle due to missing authentication",
      "C. It requires a pre-shared secret to function properly",
      "D. It only works on local networks, not over internet"
    ],
    correct: 1,
    explanation: "DH alone provides no authentication — you don't know if you're actually exchanging keys with Bob or with an attacker (Mallory) in the middle. A man-in-the-middle can perform separate DH exchanges with both parties, intercepting and relaying all communication. DH must be combined with authentication (certificates, signatures) for security.",
    sourceRef: "Study Guide > Cryptography > Diffie-Hellman Key Exchange"
  },
  {
    id: 111,
    topic: "crypto",
    type: "mc",
    question: "RSA Key Generation: Given p=5, q=17, e=13.\n\nFormulas: n = p × q, φ(n) = (p-1)(q-1), find d such that (d × e) mod φ(n) = 1.\n\nWhat is the private key {d, n}?",
    choices: [
      "A. {5, 85}",
      "B. {3, 85}",
      "C. {7, 85}",
      "D. {11, 85}"
    ],
    correct: 0,
    explanation: "n = 5 × 17 = 85. φ(n) = (5-1)(17-1) = 4 × 16 = 64. Find d where (d × 13) mod 64 = 1. Testing d=5: (5 × 13) mod 64 = 65 mod 64 = 1. ✓ So the private key is {d=5, n=85}. The public key would be {e=13, n=85}.",
    sourceRef: "Study Guide > Cryptography > RSA"
  },
  {
    id: 112,
    topic: "crypto",
    type: "mc",
    question: "Using RSA with public key {e=7, n=33}, encrypt the message m=3.\n\nFormula: c = m^e mod n",
    choices: [
      "A. 3",
      "B. 9",
      "C. 21",
      "D. 12"
    ],
    correct: 1,
    explanation: "c = m^e mod n = 3^7 mod 33. Compute: 3^7 = 2187. 2187 mod 33 = 2187 - (66 × 33) = 2187 - 2178 = 9. The ciphertext is 9. To decrypt, the recipient uses their private key {d=3, n=33}: m = 9^3 mod 33 = 729 mod 33 = 3, recovering the original message.",
    sourceRef: "Study Guide > Cryptography > RSA"
  },
  {
    id: 113,
    topic: "crypto",
    type: "mc",
    question: "RSA's trapdoor function is based on:",
    choices: [
      "A. The discrete logarithm problem",
      "B. Integer factorization / Euler's totient",
      "C. Elliptic curve point multiplication",
      "D. The shortest vector problem in lattices"
    ],
    correct: 1,
    explanation: "RSA's trapdoor is integer factorization / Euler's totient — it's easy to compute n = p × q and φ(n) given the prime factors, but extremely hard to factor n back into p and q when n is very large. DH uses the discrete logarithm problem, ECC uses elliptic curve point multiplication, and lattice-based problems are used in post-quantum cryptography.",
    sourceRef: "Study Guide > Cryptography > RSA"
  },
  {
    id: 114,
    topic: "crypto",
    type: "mc",
    question: "RSA Key Generation: Given p=3, q=11.\n\nFormulas: n = p × q, φ(n) = (p-1)(q-1). Choose e (prime, 1 < e < φ(n), coprime with φ(n)). Find d where (d × e) mod φ(n) = 1.\n\nIf e=7, what is d?",
    choices: [
      "A. 3",
      "B. 5",
      "C. 7",
      "D. 9"
    ],
    correct: 0,
    explanation: "n = 3 × 11 = 33. φ(n) = (3-1)(11-1) = 2 × 10 = 20. Find d where (d × 7) mod 20 = 1. Testing d=3: (3 × 7) mod 20 = 21 mod 20 = 1. ✓ So d = 3. This means the public key is {7, 33} and the private key is {3, 33}.",
    sourceRef: "Study Guide > Cryptography > RSA"
  },
  {
    id: 115,
    topic: "crypto",
    type: "mc",
    question: "Using RSA with private key {d=3, n=33}, decrypt the ciphertext c=9.\n\nFormula: m = c^d mod n",
    choices: [
      "A. 27",
      "B. 3",
      "C. 9",
      "D. 6"
    ],
    correct: 1,
    explanation: "m = c^d mod n = 9^3 mod 33 = 729 mod 33. 729 / 33 = 22 remainder 3. So m = 3. This confirms the RSA round-trip: encrypting m=3 with public key {7,33} gives c=9, and decrypting c=9 with private key {3,33} recovers m=3.",
    sourceRef: "Study Guide > Cryptography > RSA"
  },
  {
    id: 116,
    topic: "crypto",
    type: "mc",
    question: "AES (Advanced Encryption Standard) is a:",
    choices: [
      "A. Asymmetric stream cipher",
      "B. Symmetric block cipher",
      "C. Symmetric stream cipher",
      "D. Asymmetric block cipher"
    ],
    correct: 1,
    explanation: "AES is a symmetric block cipher that encrypts data in 128-bit blocks. It superseded DES (and interim Triple-DES). It was originally called Rijndael, named after its creators Vincent Rijmen and Joan Daemen, and won a NIST competition. It uses 10 rounds of operations (SubBytes, ShiftRows, MixColumns, AddRoundKey).",
    sourceRef: "Study Guide > Cryptography > AES"
  },
  {
    id: 117,
    topic: "crypto",
    type: "mc",
    question: "Which AES round operation is OMITTED in the final round?",
    choices: [
      "A. SubBytes",
      "B. ShiftRows",
      "C. MixColumns",
      "D. AddRoundKey"
    ],
    correct: 2,
    explanation: "MixColumns (matrix multiplication) is omitted in the final round of AES. The four standard round operations are SubBytes (S-box substitution), ShiftRows, MixColumns, and AddRoundKey (XOR with expanded round key). MixColumns provides diffusion but is not needed in the last round.",
    sourceRef: "Study Guide > Cryptography > AES"
  },
  {
    id: 118,
    topic: "crypto",
    type: "mc",
    question: "The famous 'Tux the penguin' image, where encrypting a bitmap still shows the penguin's outline, demonstrates the weakness of which block cipher mode?",
    choices: [
      "A. CBC",
      "B. CFB",
      "C. GCM",
      "D. ECB"
    ],
    correct: 3,
    explanation: "ECB (Electronic Codebook) encrypts each block independently, so identical plaintext blocks produce identical ciphertext blocks. With structured/repetitive data like the Tux bitmap, patterns in the plaintext are preserved in the ciphertext. This is why ECB should not be used — it leaks information about data structure.",
    sourceRef: "Study Guide > Cryptography > Block Cipher Modes"
  },
  {
    id: 119,
    topic: "crypto",
    type: "mc",
    question: "Which block cipher mode is considered the recommended default and provides both encryption and an authentication tag for integrity (AEAD)?",
    choices: [
      "A. ECB",
      "B. CBC",
      "C. CFB",
      "D. GCM"
    ],
    correct: 3,
    explanation: "GCM (Galois/Counter Mode) is the recommended default — it's the most widely implemented and provides both encryption and an authentication tag for integrity (Authenticated Encryption with Associated Data — AEAD). ECB leaks patterns, CBC is vulnerable to POODLE attacks, and CFB is a niche use when you need a block cipher to act like a stream cipher.",
    sourceRef: "Study Guide > Cryptography > Block Cipher Modes"
  },
  {
    id: 120,
    topic: "crypto",
    type: "tf",
    question: "CBC mode is vulnerable to POODLE (Padding Oracle On Downgraded Legacy Encryption) attacks.",
    choices: ["True", "False"],
    correct: 0,
    explanation: "True. CBC mode is subject to padding oracle attacks, including POODLE. While CBC is better than ECB (it adds diffusion by XORing each plaintext block with the previous ciphertext block), the padding oracle vulnerability makes it less desirable than GCM for modern applications.",
    sourceRef: "Study Guide > Cryptography > Block Cipher Modes"
  },
  {
    id: 121,
    topic: "crypto",
    type: "mc",
    question: "An organization has banned RC4 (a stream cipher) but needs stream-cipher-like behavior from a block cipher. Which mode should they use?",
    choices: [
      "A. ECB",
      "B. CBC",
      "C. CFB",
      "D. GCM"
    ],
    correct: 2,
    explanation: "CFB (Cipher Feedback) makes a block cipher act like a stream cipher. It's useful when an organization bans legacy stream ciphers like RC4 but can't yet use modern stream ciphers like ChaCha20. CFB enables byte-by-byte encryption similar to a stream cipher while using a block cipher engine underneath.",
    sourceRef: "Study Guide > Cryptography > Block Cipher Modes"
  },
  {
    id: 122,
    topic: "crypto",
    type: "mc",
    question: "Which hashing algorithm has demonstrated forced collisions and should NOT be used for cryptographic purposes?",
    choices: [
      "A. SHA-256",
      "B. SHA-3",
      "C. MD5",
      "D. Both MD5 and SHA-1"
    ],
    correct: 3,
    explanation: "Both MD5 and SHA-1 have demonstrated forced/purposeful collisions and should not be used cryptographically. MD5 is too short and collisions are feasible; SHA-1 has also had forced collisions demonstrated. SHA-256 (part of SHA-2) is currently secure and most widely used, and SHA-3 is a newer alternative.",
    sourceRef: "Study Guide > Cryptography > Hashing"
  },
  {
    id: 123,
    topic: "crypto",
    type: "mc",
    question: "What is the primary limitation of a MAC (Message Authentication Code) compared to a digital signature?",
    choices: [
      "A. MACs are much slower to compute than signatures",
      "B. MACs cannot provide any message integrity protection",
      "C. MACs use shared keys, so they lack non-repudiation",
      "D. MACs require asymmetric encryption and certificate authorities"
    ],
    correct: 2,
    explanation: "A MAC uses a shared symmetric key, so anyone with the key can generate valid MACs. You can't prove WHO sent the message since multiple parties share the key — meaning no non-repudiation. Digital signatures use a private key that only the signer holds, and anyone can verify with the public key, providing both authenticity and non-repudiation.",
    sourceRef: "Study Guide > Cryptography > MACs vs Signatures"
  },
  {
    id: 124,
    topic: "crypto",
    type: "mc",
    question: "A digital signature is created by:",
    choices: [
      "A. Encrypting the whole message with the sender's own public key",
      "B. Hashing the message and encrypting the hash with sender's private key",
      "C. Encrypting the message with the recipient's public key plus timestamp",
      "D. Hashing the message and encrypting the hash with recipient's public key"
    ],
    correct: 1,
    explanation: "'A digital signature is a hash of a message encrypted with the sender's PRIVATE key.' The sender hashes the message, then encrypts that hash with their private key. The recipient independently hashes the received message, decrypts the signature with the sender's PUBLIC key, and compares — if they match, integrity and authenticity are confirmed.",
    sourceRef: "Study Guide > Cryptography > Digital Signatures"
  },
  {
    id: 125,
    topic: "crypto",
    type: "mc",
    question: "Digital signatures provide all of the following EXCEPT:",
    choices: [
      "A. Integrity",
      "B. Authenticity",
      "C. Confidentiality",
      "D. Non-repudiation"
    ],
    correct: 2,
    explanation: "Digital signatures provide integrity (message wasn't altered), authenticity (came from the claimed sender), and non-repudiation (sender can't deny sending). They do NOT provide confidentiality — anyone can read the message; the signature only proves it wasn't tampered with and came from the private key holder.",
    sourceRef: "Study Guide > Cryptography > Digital Signatures"
  },
  {
    id: 126,
    topic: "crypto",
    type: "mc",
    question: "When your operating system verifies an update from Microsoft, it uses the vendor's built-in public key to:",
    choices: [
      "A. Decrypt the update file so it can be installed",
      "B. Verify the digital signature to prove authenticity",
      "C. Establish an encrypted connection to Microsoft's update servers",
      "D. Generate a hash of the update for future comparison"
    ],
    correct: 1,
    explanation: "OS update verification uses digital signatures: the vendor hashes the update file and signs the hash with their private key. Your OS uses the vendor's built-in public key to decrypt the signature and compare it to a fresh hash of the downloaded file, proving the update came from the real vendor and is complete/unaltered.",
    sourceRef: "Study Guide > Cryptography > Digital Signatures"
  },
  {
    id: 127,
    topic: "crypto",
    type: "mc",
    question: "What is a digital certificate?",
    choices: [
      "A. A password stored in encrypted hash format",
      "B. A document linking a public key to an identity",
      "C. A hash of a website's content for integrity",
      "D. A symmetric key used for SSL/TLS encryption"
    ],
    correct: 1,
    explanation: "A digital certificate is an electronic document that links a public key to an individual or organization, providing proof of key ownership. PKI (Public Key Infrastructure) encompasses all the rules, processes, and technology around creation, distribution, use, and revocation of digital certificates.",
    sourceRef: "Study Guide > Cryptography > Digital Certificates & PKI"
  },
  {
    id: 128,
    topic: "crypto",
    type: "mc",
    question: "In the CA (Certificate Authority) trust model, your browser trusts a website's certificate because:",
    choices: [
      "A. The website generates and signs its own certificate",
      "B. Your browser trusts a CA that signed the certificate",
      "C. Multiple peers have signed it at key-signing parties",
      "D. The government mandates which certificates are valid"
    ],
    correct: 1,
    explanation: "In the centralized CA trust model, your browser/OS ships with a pre-installed list of trusted Certificate Authorities. When a website presents a certificate signed by a trusted CA, your browser trusts it. Certificate types include Domain Validated, Organization Validated, and Extended Validation. The alternative is the decentralized 'Web of Trust' model.",
    sourceRef: "Study Guide > Cryptography > Digital Certificates & PKI"
  },
  {
    id: 129,
    topic: "crypto",
    type: "mc",
    question: "OCSP Stapling is a technique where:",
    choices: [
      "A. The browser queries the CA about validity in real-time",
      "B. The server staples a CA-signed statement of validity",
      "C. The browser downloads the Certificate Revocation List weekly",
      "D. The CA pushes certificate updates directly to all browsers"
    ],
    correct: 1,
    explanation: "With OCSP Stapling, the server itself includes a short-lived, CA-signed statement that its certificate is still valid, 'stapled' to the TLS handshake. This is more efficient than regular OCSP (where the browser queries the CA in real-time) because it reduces latency and doesn't reveal user browsing patterns to the CA.",
    sourceRef: "Study Guide > Cryptography > Certificate Revocation"
  },
  {
    id: 130,
    topic: "crypto",
    type: "tf",
    question: "TLS 1.3 includes perfect forward secrecy and removed weak algorithms compared to earlier versions.",
    choices: ["True", "False"],
    correct: 0,
    explanation: "True. TLS 1.3 (released 2018) removes weak algorithms present in earlier versions and adds perfect forward secrecy. It uses a hybrid approach: asymmetric encryption for key exchange and symmetric encryption for bulk data transfer. The combination of algorithms negotiated during the TLS handshake is called a cipher suite.",
    sourceRef: "Study Guide > Cryptography > SSL/TLS"
  },
  {
    id: 131,
    topic: "crypto",
    type: "mc",
    question: "A concern about using a VPN provider is that:",
    choices: [
      "A. VPNs cannot actually encrypt data in transit",
      "B. You shift trust from ISP to VPN provider",
      "C. VPNs only work on HTTPS-protected web pages",
      "D. VPNs are illegal in most countries worldwide"
    ],
    correct: 1,
    explanation: "With a VPN, you're shifting trust from your ISP to the VPN provider. The VPN creates an encrypted tunnel, but the VPN provider can potentially see your traffic and may keep logs. Your trust shifts — you're trusting the VPN provider's privacy policy instead of your ISP's.",
    sourceRef: "Study Guide > Cryptography > VPN"
  },
  {
    id: 132,
    topic: "crypto",
    type: "mc",
    question: "Which layer of the web constitutes the MAJORITY of all web content?",
    choices: [
      "A. Surface/Clear web",
      "B. Deep web",
      "C. Dark web",
      "D. They are all approximately equal in size"
    ],
    correct: 1,
    explanation: "The deep web — content behind authentication, paywalls, and access controls — constitutes the MAJORITY of the web (medical records, email, streaming content, banking portals). The surface/clear web (publicly indexed content) is much smaller, and the dark web (requiring Tor or similar software) is a tiny fraction with thousands versus billions of pages.",
    sourceRef: "Study Guide > Cryptography > TOR and the Dark Web"
  },
  {
    id: 133,
    topic: "crypto",
    type: "mc",
    question: "Tor (The Onion Router) primarily provides:",
    choices: [
      "A. Guaranteed confidentiality of all data contents",
      "B. Anonymity via layered encryption across relays",
      "C. Faster internet speeds through distributed routing",
      "D. Antivirus protection against malware and phishing"
    ],
    correct: 1,
    explanation: "Tor's purpose is ANONYMITY, not guaranteed confidentiality. It works by layering encryption through successive relays (entry/guard node → middle relay → exit relay), each stripping one layer. The exit relay can see plain HTTP traffic (but not HTTPS content). Tor is slower than direct connections, not faster.",
    sourceRef: "Study Guide > Cryptography > TOR and the Dark Web"
  },
  {
    id: 134,
    topic: "crypto",
    type: "tf",
    question: "The exit relay in the Tor network can see the contents of unencrypted (HTTP) traffic passing through it.",
    choices: ["True", "False"],
    correct: 0,
    explanation: "True. The exit relay strips the final layer of Tor encryption and forwards traffic to the destination. If the underlying traffic is plain HTTP (not HTTPS), the exit relay operator can see the contents. This is why using HTTPS over Tor is important for content confidentiality, and why running a Tor exit relay carries legal risk.",
    sourceRef: "Study Guide > Cryptography > TOR and the Dark Web"
  },
  {
    id: 135,
    topic: "crypto",
    type: "mc",
    question: "Steganography using the Least Significant Bit (LSB) technique works by:",
    choices: [
      "A. Encrypting an entire image file with AES-256",
      "B. Hiding data in each pixel's least significant bit",
      "C. Compressing a file inside another file's metadata",
      "D. Embedding hidden data into the filename of an image"
    ],
    correct: 1,
    explanation: "LSB steganography conceals data within the least significant bit of image pixels per color channel. The change is imperceptible to the human eye but can be detected with analysis tools. Best practice is to encrypt the hidden payload (e.g., with AES) before embedding, so even if detected, the content can't be read.",
    sourceRef: "Study Guide > Cryptography > Steganography"
  },
  {
    id: 136,
    topic: "crypto",
    type: "mc",
    question: "ECC (Elliptic-Curve Cryptography) provides equivalent security to RSA with:",
    choices: [
      "A. Identical key lengths",
      "B. Longer keys but faster computation",
      "C. Much shorter keys — 256-bit ECC ≈ 3072-bit RSA",
      "D. No key at all — it uses geometric properties instead"
    ],
    correct: 2,
    explanation: "256-bit ECC provides approximately the same security strength as 3072-bit RSA, meaning much shorter keys and faster computation. In ECC, the public key is a point on the curve and the private key is the number of hops from the generator point. Google uses ECC; BYU still uses RSA (4096-bit) in their certificate.",
    sourceRef: "Study Guide > Cryptography > Elliptic-Curve Cryptography"
  },
  {
    id: 137,
    topic: "crypto",
    type: "mc",
    question: "Shor's algorithm threatens which types of cryptographic systems?",
    choices: [
      "A. Only symmetric ciphers like AES-256 and ChaCha20",
      "B. Only hash functions like SHA-256 and SHA-3",
      "C. RSA, DH, and ECC — the asymmetric systems",
      "D. All cryptographic systems are affected equally"
    ],
    correct: 2,
    explanation: "Shor's algorithm makes factorization and discrete logarithm easy for quantum computers, which would 'irrevocably break' RSA, DH, and ECC — they 'must be replaced.' Grover's algorithm affects symmetric ciphers but only gives a quadratic speedup, meaning AES just needs double the key size (AES-256 instead of AES-128) but remains fundamentally sound.",
    sourceRef: "Study Guide > Cryptography > Post-Quantum Cryptography"
  },
  {
    id: 138,
    topic: "crypto",
    type: "mc",
    question: "The 'harvest now, decrypt later' threat refers to:",
    choices: [
      "A. Attackers stealing encryption keys and using them immediately",
      "B. Storing encrypted traffic now to decrypt with future quantum",
      "C. Companies collecting user data now for future AI analysis",
      "D. Using rainbow tables to crack passwords stored for analysis"
    ],
    correct: 1,
    explanation: "'Harvest now, decrypt later' describes adversaries recording encrypted traffic today with the expectation that quantum computers will eventually allow them to decrypt it. This is why post-quantum cryptography is urgent even before practical quantum computers exist — sensitive data encrypted today could be vulnerable in the future.",
    sourceRef: "Study Guide > Cryptography > Post-Quantum Cryptography"
  },
  {
    id: 139,
    topic: "crypto",
    type: "mc",
    question: "Post-quantum cryptographic solutions being evaluated by NIST include:",
    choices: [
      "A. Triple-DES and RC4",
      "B. Lattice-based and code-based cryptography",
      "C. Extended RSA with 16384-bit keys",
      "D. Quantum-entangled key pairs"
    ],
    correct: 1,
    explanation: "Post-quantum solutions include lattice-based cryptography (shortest vector / closest vector problems) and code-based cryptography (learning with errors — intentionally adding approximation/error so quantum computation doesn't help). Simply increasing RSA key size won't work because Shor's algorithm fundamentally breaks the mathematical basis. Apple iMessage has already shipped post-quantum algorithms.",
    sourceRef: "Study Guide > Cryptography > Post-Quantum Cryptography"
  },
  {
    id: 140,
    topic: "crypto",
    type: "mc",
    question: "What does 'forward secrecy' (using ephemeral DH keys) protect against?",
    choices: [
      "A. Brute-force attacks on the current TLS session",
      "B. SQL injection attacks against authentication servers",
      "C. Past sessions compromised if long-term key leaks",
      "D. Denial-of-service attacks against the web server"
    ],
    correct: 2,
    explanation: "Forward secrecy / Ephemeral DH uses a new DH key per session, so if a long-term key is later compromised, past sessions remain safe — each session's key is unique and not derivable from the compromised long-term key. This thwarts adversaries who 'harvest now, decrypt later.'",
    sourceRef: "Study Guide > Cryptography > Diffie-Hellman Key Exchange"
  },
  {
    id: 141,
    topic: "crypto",
    type: "mc",
    question: "In cryptography, the standard character who represents a man-in-the-middle attacker is:",
    choices: [
      "A. Eve",
      "B. Trudy",
      "C. Mallory",
      "D. Trent"
    ],
    correct: 2,
    explanation: "The standard characters are: Alice (sender), Bob (receiver), Eve (eavesdropper — passive listening), Trudy (intruder), Mallory (man-in-the-middle attacker — actively modifies communications), and Trent (neutral third party / trusted authority). Mallory is the MITM attacker.",
    sourceRef: "Study Guide > Cryptography > Security Threats and Principles"
  },
  {
    id: 142,
    topic: "crypto",
    type: "mc",
    question: "Which statement about symmetric vs. asymmetric encryption is correct?",
    choices: [
      "A. Symmetric uses key pairs; asymmetric uses a shared key",
      "B. Symmetric is fast for bulk; asymmetric for key exchange",
      "C. Symmetric provides non-repudiation while asymmetric does not",
      "D. Asymmetric encryption is always preferred for its strength"
    ],
    correct: 1,
    explanation: "Symmetric encryption uses a single shared key (two copies), is fast, and is used for bulk data encryption (AES, ChaCha20). Asymmetric uses a key pair (public + private), is slower, and is used for key exchange, signatures, and certificates (RSA, ECC, DH). Modern systems typically use asymmetric for key exchange, then symmetric for data.",
    sourceRef: "Study Guide > Cryptography > Symmetric vs. Asymmetric Encryption"
  },
  {
    id: 143,
    topic: "crypto",
    type: "mc",
    question: "A stream cipher encrypts data _____, while a block cipher encrypts _____.",
    choices: [
      "A. in fixed-size chunks; bit-by-bit or byte-by-byte",
      "B. bit-by-bit or byte-by-byte; in fixed-size 128-bit blocks",
      "C. using asymmetric keys; using symmetric keys",
      "D. stored disk data; live or streaming data"
    ],
    correct: 1,
    explanation: "Stream ciphers encrypt bit-by-bit or byte-by-byte (best for live/streaming data like A/V), while block ciphers encrypt fixed-size chunks (e.g., AES uses 128-bit blocks, best for stored data and large payloads). Examples: stream = RC4 (legacy), ChaCha20; block = AES, DES.",
    sourceRef: "Study Guide > Cryptography > Block vs. Stream Ciphers"
  },
  {
    id: 144,
    topic: "crypto",
    type: "mc",
    question: "In the Enigma machine, what key weakness did operators introduce that helped cryptanalysts break the system?",
    choices: [
      "A. The machine used too few rotors internally",
      "B. Operators used predictable indicators like 'Heil Hitler'",
      "C. The reflector was removable and often lost in transit",
      "D. The plugboard settings were published daily in newspapers"
    ],
    correct: 1,
    explanation: "While the Enigma machine itself was sophisticated (rotors, reflector, plugboard, daily key sheets), operators introduced weakness by using non-random daily indicators — predictable phrases like 'Heil Hitler' or women's names. This human weakness allowed Polish mathematician Marian Rejewski and later Alan Turing to make progress in breaking the system.",
    sourceRef: "Study Guide > Cryptography > Cryptanalysis"
  },
  {
    id: 145,
    topic: "crypto",
    type: "tf",
    question: "The standard random() function in most programming languages is suitable for generating cryptographic keys.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. The standard random() function in most programming languages is NOT cryptographically secure — it's a pseudorandom number generator that can be predicted if the seed is known. For cryptographic purposes, a CSPRNG (Cryptographically Secure PRNG) must be used, which employs encryption with seeds from hardware entropy sources.",
    sourceRef: "Study Guide > Cryptography > Cipher Concepts"
  },
  {
    id: 146,
    topic: "crypto",
    type: "mc",
    question: "In blockchain technology, a Merkle root is:",
    choices: [
      "A. The first transaction entered in a block",
      "B. The hash of the previous block's header",
      "C. A recursive hash of all transactions in the block",
      "D. The mining reward paid out for the block"
    ],
    correct: 2,
    explanation: "A Merkle root is a hash of hashes of all transactions in a block. Because it's a recursive hash structure, any change to any individual transaction would change its hash, which would propagate up and change the Merkle root. This provides efficient integrity verification for the entire block of transactions.",
    sourceRef: "Study Guide > Cryptography > Blockchain"
  },
  {
    id: 147,
    topic: "crypto",
    type: "tf",
    question: "According to the instructor's view, most organizations should consider implementing blockchain technology.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. The instructor's decision tree for 'Should you have a blockchain?' results in 'No.' Blockchain has niche use cases (like inter-bank settlement without intermediary delays) but is usually unnecessary for most organizations. The instructor notes that blockchain is overhyped for most practical applications.",
    sourceRef: "Study Guide > Cryptography > Blockchain"
  },
  {
    id: 148,
    topic: "crypto",
    type: "mc",
    question: "Non-repudiation in cryptography means:",
    choices: [
      "A. The message cannot be intercepted by unauthorized parties",
      "B. The sender cannot deny having sent the message",
      "C. The message is delivered within a guaranteed time frame",
      "D. The message is encrypted with multiple layers"
    ],
    correct: 1,
    explanation: "Non-repudiation is a legal concept meaning the sender cannot deny having sent the message. It requires both integrity (message wasn't altered) and authenticity (came from the claimed sender), and is achieved through digital signatures. A MAC cannot provide non-repudiation because the shared key means any key holder could have generated it.",
    sourceRef: "Study Guide > Cryptography > Digital Signatures"
  },
  {
    id: 149,
    topic: "crypto",
    type: "mc",
    question: "Grover's algorithm affects symmetric cryptography by:",
    choices: [
      "A. Completely breaking all symmetric ciphers fundamentally",
      "B. Quadratic speedup requiring doubled symmetric key sizes",
      "C. Making symmetric encryption stronger against attacks",
      "D. Having no effect on symmetric cryptography whatsoever"
    ],
    correct: 1,
    explanation: "Grover's algorithm provides a quadratic speedup for symmetric key search on quantum computers. This means AES needs double the key size to maintain security — AES-256 instead of AES-128 — but AES remains fundamentally sound. This is much less severe than Shor's algorithm, which 'irrevocably breaks' RSA, DH, and ECC.",
    sourceRef: "Study Guide > Cryptography > Post-Quantum Cryptography"
  },
  {
    id: 150,
    topic: "crypto",
    type: "mc",
    question: "Which statement about .onion addresses is correct?",
    choices: [
      "A. They are assigned by ICANN like regular domain names",
      "B. They are SHA-256 hashes of the service's public key",
      "C. They can only be accessed by official government agencies",
      "D. They use IPv6 addresses encoded in hexadecimal form"
    ],
    correct: 1,
    explanation: ".onion addresses are approximately SHA-256 hashes of the service's public key. They aren't registered through DNS or ICANN. Vanity prefixes (like 'facebook' in facebookcorewwwi.onion) are generated by brute-forcing key pairs until the hash starts with the desired prefix. Legitimate .onion sites include BBC, CIA, Reddit, and ProtonMail.",
    sourceRef: "Study Guide > Cryptography > TOR and the Dark Web"
  },


  // ─────────────────────────────────────────────
  //  AUTHENTICATION (30 questions)
  // ─────────────────────────────────────────────

  {
    id: 151,
    topic: "auth",
    type: "mc",
    question: "In the story from Judges 12:5-6, the Gileadites used the pronunciation of 'Shibboleth' to identify Ephraimites. In modern security, a 'shibboleth' refers to:",
    choices: [
      "A. A type of encryption algorithm system",
      "B. A peculiarity that distinguishes a particular group",
      "C. A firewall rule for network access control",
      "D. A multi-factor authentication hardware token"
    ],
    correct: 1,
    explanation: "A shibboleth is 'a peculiarity of pronunciation, behavior, mode of dress, etc., that distinguishes a particular class or set of persons.' Modern examples include local place-name pronunciations (like 'Wollochet Bay') or cultural references that outsiders wouldn't know. The biblical story resulted in 42,000 Ephraimites being killed for failing the pronunciation test.",
    sourceRef: "Study Guide > Authentication > What Is a Shibboleth?"
  },
  {
    id: 152,
    topic: "auth",
    type: "mc",
    question: "When you enter your username at a login screen, you are performing:",
    choices: [
      "A. Authentication",
      "B. Authorization",
      "C. Identification",
      "D. Federation"
    ],
    correct: 2,
    explanation: "Entering a username is identification — making a claim about who you are (e.g. 'I am Pat'). Authentication is PROVING that claim (entering a password, scanning a fingerprint). Authorization is what you're ALLOWED to do after authentication. 'Identification is a claim. Authentication is proving who you are. Authorization is what you can do.'",
    sourceRef: "Study Guide > Authentication > Core Concepts"
  },
  {
    id: 153,
    topic: "auth",
    type: "mc",
    question: "What is the primary security risk of Single Sign-On (SSO)?",
    choices: [
      "A. Users must remember many different passwords",
      "B. Session compromise grants access to many systems",
      "C. It only works within a single application silo",
      "D. It requires expensive biometric authentication hardware"
    ],
    correct: 1,
    explanation: "SSO means one login grants access to many applications (e.g., BYU CAS). The risk is that if a session is compromised (stolen session token, credential theft), the attacker gains access to ALL connected systems simultaneously rather than just one. The convenience of SSO comes with this concentration-of-risk trade-off.",
    sourceRef: "Study Guide > Authentication > SSO and Federated Identity"
  },
  {
    id: 154,
    topic: "auth",
    type: "mc",
    question: "OAuth 2.0 is primarily a standard for:",
    choices: [
      "A. Encrypting passwords during transmission",
      "B. Access delegation (authorization), not authentication",
      "C. Generating one-time passwords",
      "D. Biometric template storage"
    ],
    correct: 1,
    explanation: "OAuth/OAuth 2.0 is a standard for ACCESS DELEGATION — authorization, not authentication per se. It allows applications to access resources on behalf of a user without sharing credentials. For example, allowing a third-party app to access your Google Drive files without giving it your Google password.",
    sourceRef: "Study Guide > Authentication > Protocols"
  },
  {
    id: 155,
    topic: "auth",
    type: "mc",
    question: "Which protocol is described as a web SSO protocol used by BYU?",
    choices: [
      "A. OAuth",
      "B. SAML",
      "C. CAS",
      "D. LDAP"
    ],
    correct: 2,
    explanation: "CAS (Central Authentication Service) is a web SSO protocol used by BYU for single sign-on. SAML is a standard for exchanging authentication information between systems. OAuth handles access delegation. LDAP (Lightweight Directory Access Protocol) is for directory services. Kerberos is for local network authentication.",
    sourceRef: "Study Guide > Authentication > Protocols"
  },
  {
    id: 156,
    topic: "auth",
    type: "mc",
    question: "A fingerprint scanner, facial recognition, and iris scan are all examples of which authentication factor?",
    choices: [
      "A. Something you know",
      "B. Something you have",
      "C. Something you are",
      "D. Something you do"
    ],
    correct: 2,
    explanation: "Fingerprint, facial recognition, and iris scans are all biometric factors — 'something you are' (inherent characteristics). Something you know includes passwords and PINs. Something you have includes phones, hardware tokens, and smart cards. Biometrics are unique to the individual but have drawbacks like inability to change if compromised.",
    sourceRef: "Study Guide > Authentication > Categories of Authentication Factors"
  },
  {
    id: 157,
    topic: "auth",
    type: "mc",
    question: "According to current NIST and Microsoft guidance, what is the MOST important characteristic of a strong password?",
    choices: [
      "A. Including uppercase, lowercase, numbers, and special characters",
      "B. Changing the password every 30 days",
      "C. Length and non-reuse across sites",
      "D. Using a common word with number substitutions"
    ],
    correct: 2,
    explanation: "LENGTH and NON-REUSE are the most important password characteristics. NIST and Microsoft guidance now favors length over complexity. Complex rules produce passwords that are hard to remember but not necessarily secure, while length increases difficulty exponentially. Frequent forced changes lead to predictable patterns (Password1! → Password2!).",
    sourceRef: "Study Guide > Authentication > Passwords"
  },
  {
    id: 158,
    topic: "auth",
    type: "mc",
    question: "The XKCD password comic illustrates that:",
    choices: [
      "A. Four random common words are always the best password",
      "B. Length matters exponentially; symbol rules help only linearly",
      "C. Passwords should always be 8 characters with mixed case",
      "D. Password managers are unnecessary when using the XKCD method"
    ],
    correct: 1,
    explanation: "The XKCD model shows that complex rules produce hard-to-remember passwords that aren't as secure as longer ones. Length increases cracking difficulty EXPONENTIALLY; extra symbol rules help only LINEARLY. The best practice is to 'turn off the requirements for uppercase and lowercase and numbers and symbols and just require length.' Note: 'correct horse battery staple' itself is now in cracking dictionaries.",
    sourceRef: "Study Guide > Authentication > Passwords"
  },
  {
    id: 159,
    topic: "auth",
    type: "mc",
    question: "Rainbow tables are a password cracking method that:",
    choices: [
      "A. Use brute force to try every possible combination in real-time",
      "B. Trade storage for processing via precomputed hash databases",
      "C. Exploit social engineering to trick users into revealing passwords",
      "D. Intercept passwords during transmission on unsecured networks"
    ],
    correct: 1,
    explanation: "Rainbow tables are precomputed hash databases — they 'trade storage for processing.' Instead of computing hashes in real-time, attackers look up a hash in a massive pre-built database. Short passwords (~7-8 chars) are feasible to crack this way; longer passwords push storage requirements to petabytes/exabytes. Salt defeats rainbow tables.",
    sourceRef: "Study Guide > Authentication > Password Cracking Methods"
  },
  {
    id: 160,
    topic: "auth",
    type: "mc",
    question: "What is the primary purpose of salting a password before hashing?",
    choices: [
      "A. To make the hash longer and more secure",
      "B. To encrypt the password before storing it",
      "C. To defeat rainbow tables by making every hash unique",
      "D. To keep the salt secret from attackers"
    ],
    correct: 2,
    explanation: "'Salt destroys rainbow tables.' A salt is a random string concatenated with the password before hashing. Every user gets a different salt, so even identical passwords produce different hashes. Attackers would need a separate rainbow table per salt, making precomputation impractical. The salt CAN be stored alongside the hash — its goal is not secrecy.",
    sourceRef: "Study Guide > Authentication > Preventing Password Cracking"
  },
  {
    id: 161,
    topic: "auth",
    type: "tf",
    question: "A salt must be kept secret from attackers to be effective at preventing password cracking.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. The salt can be stored alongside the hash — its goal is NOT secrecy. The purpose of salt is to make rainbow tables impractical by ensuring each user's hash is unique, even for identical passwords. An attacker who has the salt still can't use precomputed tables because each salt requires separate computation. (A 'pepper' is the variant stored separately, but it's mostly abandoned.)",
    sourceRef: "Study Guide > Authentication > Preventing Password Cracking"
  },
  {
    id: 162,
    topic: "auth",
    type: "mc",
    question: "In the Django password storage format `pbkdf2_sha256$20000$H0dPx8NeajVu$GiC4k5kqbbR...`, the '20000' represents:",
    choices: [
      "A. The length of the hash in bits",
      "B. The number of iterations for key stretching",
      "C. The user's ID number for database lookups",
      "D. The salt length measured in characters"
    ],
    correct: 1,
    explanation: "The format is algorithm$iterations$salt$hash. The 20000 represents iterations — the number of times the password is hashed. This key stretching creates a negligible delay for one legitimate login but makes offline cracking '20,000 times worse.' Combined with salt, this is the recommended approach for password storage.",
    sourceRef: "Study Guide > Authentication > Preventing Password Cracking"
  },
  {
    id: 163,
    topic: "auth",
    type: "mc",
    question: "Which password storage method represents the BEST practice?",
    choices: [
      "A. Plaintext storage in database",
      "B. Hashed only without a salt",
      "C. Hashed with a random salt",
      "D. Hashed, salted, and stretched"
    ],
    correct: 3,
    explanation: "The hierarchy from worst to best is: (1) clear text (never do this), (2) hashed, (3) hashed + salt, (4) hashed + salt + iterations (best practice). Purpose-built password hashing algorithms like bcrypt, PBKDF2, and Argon2 implement all of these — they're designed to be slow/adaptable, unlike fast algorithms like SHA-256.",
    sourceRef: "Study Guide > Authentication > Preventing Password Cracking"
  },
  {
    id: 164,
    topic: "auth",
    type: "mc",
    question: "Password managers are described as 'the best tool we have for stopping phishing attacks' because:",
    choices: [
      "A. They use stronger encryption than web browsers alone",
      "B. They refuse to autofill credentials on the wrong domain",
      "C. They generate passwords too long to type manually",
      "D. They actively block access to known phishing websites"
    ],
    correct: 1,
    explanation: "Password managers won't autofill on the wrong domain — if you're on a phishing site that looks like your bank but has a different URL, the password manager won't offer your bank credentials. This makes them the best phishing defense. They also provide both better security AND better convenience, which is rare for security tools.",
    sourceRef: "Study Guide > Authentication > Password Managers"
  },
  {
    id: 165,
    topic: "auth",
    type: "tf",
    question: "If a 'forgot password' feature emails you your actual password, this is a sign of good security because it shows the site stored your password securely.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. A site should NEVER store your actual password. If 'forgot password' emails you the password in plaintext, it means the site stored your password in a recoverable format (cleartext or reversible encryption) — a major security red flag. Properly secured sites store only the hash and require you to create a new password.",
    sourceRef: "Study Guide > Authentication > Password Managers"
  },
  {
    id: 166,
    topic: "auth",
    type: "mc",
    question: "What is the WEAKEST form of multi-factor authentication listed?",
    choices: [
      "A. FIDO2/WebAuthn security keys",
      "B. Push notifications with number matching",
      "C. TOTP authenticator applications",
      "D. Plain SMS text codes"
    ],
    correct: 3,
    explanation: "SMS codes are the weakest MFA method because they can be intercepted through SIM swapping or network vulnerabilities. From weakest to strongest: SMS codes → TOTP apps → Push notifications (especially with number matching) → FIDO2/WebAuthn security keys (phishing-resistant because they use asymmetric encryption challenges).",
    sourceRef: "Study Guide > Authentication > MFA / 2FA"
  },
  {
    id: 167,
    topic: "auth",
    type: "mc",
    question: "FIDO2/WebAuthn passkeys are considered phishing-resistant because:",
    choices: [
      "A. They require typing a long password each time",
      "B. They use an asymmetric challenge bound to the domain",
      "C. They are stored on the server and cannot be copied",
      "D. They change every 60 seconds like TOTP codes"
    ],
    correct: 1,
    explanation: "FIDO2/WebAuthn passkeys use an asymmetric encryption challenge bound to the specific website. Face ID or fingerprint UNLOCKS the passkey (the private key stored on the device), but the actual authentication is the cryptographic challenge-response. Since the key is bound to the legitimate site's domain, a phishing site can't intercept or replay it.",
    sourceRef: "Study Guide > Authentication > MFA / 2FA"
  },
  {
    id: 168,
    topic: "auth",
    type: "mc",
    question: "A bank ATM card requires both inserting the card (possession) and entering a PIN (knowledge). Even though both factors are individually weak, this is an example of:",
    choices: [
      "A. Single-factor authentication with built-in redundancy",
      "B. Multi-factor authentication combining different categories",
      "C. Biometric-only authentication methods",
      "D. Token-based possession authentication only"
    ],
    correct: 1,
    explanation: "A magnetic card is weak. A 4-digit PIN is weak. But card + PIN together is 'still terrible, but not nearly as terrible' — the combination across DIFFERENT factor categories (something you have + something you know) is the point of MFA. The security comes from requiring compromise of both factors, not from either factor's individual strength.",
    sourceRef: "Study Guide > Authentication > MFA / 2FA"
  },
  {
    id: 169,
    topic: "auth",
    type: "mc",
    question: "In RBAC (Role-Based Access Control), permissions are assigned to:",
    choices: [
      "A. Individual users directly by the administrator",
      "B. Roles, with users assigned to roles",
      "C. Network segments based on IP address",
      "D. Time-of-day access windows per shift"
    ],
    correct: 1,
    explanation: "In RBAC, permissions are assigned to roles (e.g., 'manager,' 'analyst,' 'admin'), and users are then assigned to appropriate roles. This simplifies administration — when an employee changes position, you change their role assignment rather than modifying individual permissions. RBAC types include Flat, Hierarchical, Constrained, and Symmetric.",
    sourceRef: "Study Guide > Authentication > Access Control Models"
  },
  {
    id: 170,
    topic: "auth",
    type: "mc",
    question: "ABAC (Attribute-Based Access Control) makes access decisions based on:",
    choices: [
      "A. Only the user's role in the organization",
      "B. Attributes of user, resource, and environment via policies",
      "C. Only the file's classification level within systems",
      "D. Only the time of day and user location"
    ],
    correct: 1,
    explanation: "ABAC uses policies based on multiple attributes — user attributes (department, clearance), resource attributes (classification, type), and environment attributes (time, location, network). It's commonly implemented with XACML or ALFA and includes Policy Enforcement Point (PEP), Policy Decision Point (PDP), Policy Administration Point (PAP), and Policy Information Point (PIP).",
    sourceRef: "Study Guide > Authentication > Access Control Models"
  },
  {
    id: 171,
    topic: "auth",
    type: "mc",
    question: "A disadvantage of biometric authentication is that:",
    choices: [
      "A. It is too easy to share with other people",
      "B. It is impossible to implement on mobile devices",
      "C. Biometrics cannot be changed if compromised",
      "D. It requires an internet connection to verify"
    ],
    correct: 2,
    explanation: "A major disadvantage of biometrics is that if compromised, the biometric CANNOT be changed — you can't get new fingerprints or a new iris pattern like you can change a password. Other cons include environmental issues (masks affecting face recognition, wet hands on fingerprint sensors), false positives (Apple's 'one in a million' but identical twins/siblings), and expensive/finicky hardware.",
    sourceRef: "Study Guide > Authentication > Biometrics"
  },
  {
    id: 172,
    topic: "auth",
    type: "tf",
    question: "Push notification MFA with number matching is more secure than basic push notifications because it prevents users from blindly tapping 'approve'.",
    choices: ["True", "False"],
    correct: 0,
    explanation: "True. Basic push notifications are vulnerable to 'push fatigue' — users may approve notifications without checking, especially if an attacker sends repeated requests. Number matching requires the user to enter a specific number shown on the login screen into their phone, confirming they are actually attempting to log in and not just blindly approving.",
    sourceRef: "Study Guide > Authentication > MFA / 2FA"
  },
  {
    id: 173,
    topic: "auth",
    type: "mc",
    question: "SIM swapping is a specific weakness of which MFA method?",
    choices: [
      "A. TOTP authenticator apps",
      "B. FIDO2 security keys",
      "C. SMS-based codes",
      "D. Push notifications"
    ],
    correct: 2,
    explanation: "SIM swapping — where an attacker convinces a carrier to transfer a victim's phone number to a new SIM card — specifically defeats SMS-based MFA because the codes are sent via the phone number, not tied to a specific device. TOTP apps, FIDO2 keys, and push notifications are all resistant to SIM swapping because they're bound to specific devices or cryptographic keys.",
    sourceRef: "Study Guide > Authentication > MFA / 2FA"
  },
  {
    id: 174,
    topic: "auth",
    type: "mc",
    question: "Which of the following is NOT a type of RBAC?",
    choices: [
      "A. Flat",
      "B. Hierarchical",
      "C. Contextual",
      "D. Constrained"
    ],
    correct: 2,
    explanation: "The four types of RBAC are Flat, Hierarchical, Constrained, and Symmetric. 'Contextual' is not a type of RBAC — contextual attributes would fall under ABAC (Attribute-Based Access Control), which considers user, resource, and environment attributes for access decisions.",
    sourceRef: "Study Guide > Authentication > Access Control Models"
  },
  {
    id: 175,
    topic: "auth",
    type: "mc",
    question: "Federated Identity differs from SSO in that:",
    choices: [
      "A. Federated uses passwords while SSO uses biometrics",
      "B. SSO is within one org; federated spans organizations",
      "C. SSO is always more secure than federated identity",
      "D. Federated identity doesn't require any authentication steps"
    ],
    correct: 1,
    explanation: "SSO operates within a single organization — one login grants access to many internal applications (like BYU CAS for BYU services). Federated identity extends across organizations — your identity from a third party (Google, GitHub) travels to other organizations' apps. 'Sign in with Google' on a non-Google site is federated identity.",
    sourceRef: "Study Guide > Authentication > SSO and Federated Identity"
  },
  {
    id: 176,
    topic: "auth",
    type: "mc",
    question: "SAML (Security Assertion Markup Language) is used to:",
    choices: [
      "A. Encrypt password databases in storage",
      "B. Exchange authentication info between federated systems",
      "C. Generate one-time passwords for MFA login",
      "D. Store biometric templates securely in vaults"
    ],
    correct: 1,
    explanation: "SAML is a standard for exchanging authentication and authorization information between an identity provider and a service provider. For example, after logging in via BYU CAS, SAML assertions tell other BYU applications that you've been authenticated, including attributes about your identity and what you're authorized to access.",
    sourceRef: "Study Guide > Authentication > Protocols"
  },
  {
    id: 177,
    topic: "auth",
    type: "mc",
    question: "A password cracking method that tries common words and known passwords from previous breaches is called:",
    choices: [
      "A. Brute force",
      "B. Dictionary/Wordlist attack",
      "C. Rainbow table attack",
      "D. Mask attack"
    ],
    correct: 1,
    explanation: "Dictionary/Wordlist attacks try common words and known passwords from previous data breaches. Brute force tries every possible combination. Rainbow tables use precomputed hash databases. Mask attacks are a subset of brute force based on human password patterns (e.g., trying patterns like Uppercase + lowercase × 5 + digit + symbol).",
    sourceRef: "Study Guide > Authentication > Password Cracking Methods"
  },
  {
    id: 178,
    topic: "auth",
    type: "mc",
    question: "The real threat in password cracking is:",
    choices: [
      "A. Online attacks against public login pages",
      "B. Offline attacks on a stolen hash database",
      "C. Shoulder surfing people in public places",
      "D. Social engineering attacks over the phone"
    ],
    correct: 1,
    explanation: "Offline attacks — where the attacker has stolen a hash database and can crack at leisure with no rate limits or lockouts — are the real threat. Online attacks face rate limits and lockouts (e.g., iPhone wipes after 10 wrong attempts). Offline cracking has no such restrictions, which is why salting, iterations, and slow hashing algorithms are critical.",
    sourceRef: "Study Guide > Authentication > Password Cracking Methods"
  },
  {
    id: 179,
    topic: "auth",
    type: "tf",
    question: "Kerberos is a web-based SSO protocol primarily used for internet applications.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. Kerberos is a LOCAL NETWORK authentication protocol, not a web-based SSO protocol. It's primarily used for authenticating users and services within a corporate network (like Active Directory environments). CAS is the web SSO protocol; SAML and OAuth are standards used for web-based authentication and authorization.",
    sourceRef: "Study Guide > Authentication > Protocols"
  },
  {
    id: 180,
    topic: "auth",
    type: "mc",
    question: "Which of the following is a disadvantage of the 'something you know' authentication factor?",
    choices: [
      "A. It cannot be changed if compromised",
      "B. It can be lost or stolen physically",
      "C. It's forgettable, guessable, and often reused",
      "D. It requires expensive hardware to function"
    ],
    correct: 2,
    explanation: "Knowledge factors (passwords, PINs, security questions) are forgettable, guessable, and often reused across sites. Option A describes biometrics (can't be changed). Option B describes possession factors (can be lost/stolen). Option D also relates to biometrics or hardware tokens. Password reuse is particularly dangerous, as demonstrated in the HBGary hack.",
    sourceRef: "Study Guide > Authentication > Categories of Authentication Factors"
  },


  // ─────────────────────────────────────────────
  //  HBGARY FEDERAL (20 questions)
  // ─────────────────────────────────────────────

  {
    id: 181,
    topic: "hbgary",
    type: "mc",
    question: "What action by Aaron Barr provoked the attack on HBGary Federal?",
    choices: [
      "A. He hacked into Anonymous's communication channels",
      "B. He claimed he could unmask Anonymous members publicly",
      "C. He reported a vulnerability in Anonymous's website",
      "D. He refused to hire former Anonymous members"
    ],
    correct: 1,
    explanation: "Aaron Barr publicly claimed he could unmask Anonymous members through dark-web research and announced he would share his findings at a security conference and hand names to the FBI. This was described as a 'total bluff' meant as marketing — the lesson being 'don't poke the hornet's nest' with no financial benefit from angering sophisticated hackers.",
    sourceRef: "Study Guide > HBGary Federal > What Prompted the Attack"
  },
  {
    id: 182,
    topic: "hbgary",
    type: "mc",
    question: "Who actually attacked HBGary Federal?",
    choices: [
      "A. Anonymous operating as a coordinated organization",
      "B. LulzSec — a core group of about 7",
      "C. Lazarus Group (North Korean state-sponsored)",
      "D. Guardians of Peace hacktivist collective"
    ],
    correct: 1,
    explanation: "The actual attackers were LulzSec (Lulz Security), a core group of approximately 7 people who did it 'for the lulz' (laughs). They were NOT 'Anonymous' as an organized group — LulzSec was a small, skilled subset. After HBGary, they went on '100 days of lulz' targeting Fox, PBS, Sony, the US Senate, and the CIA.",
    sourceRef: "Study Guide > HBGary Federal > Who Actually Attacked"
  },
  {
    id: 183,
    topic: "hbgary",
    type: "mc",
    question: "The initial attack vector used against HBGary Federal was:",
    choices: [
      "A. A phishing email targeting Aaron Barr directly",
      "B. A zero-day exploit in their corporate VPN",
      "C. Basic SQL injection on their custom CMS",
      "D. A brute-force attack on their SSH server"
    ],
    correct: 2,
    explanation: "The attack began with SQL injection on a custom CMS (not a standard platform like Drupal/Joomla). It was described as 'the most bare-bones SQL injection,' which exposed the user database. The fact that a security company was vulnerable to such a basic attack made the case particularly embarrassing.",
    sourceRef: "Study Guide > HBGary Federal > Methods of Attack"
  },
  {
    id: 184,
    topic: "hbgary",
    type: "mc",
    question: "After obtaining the HBGary user database via SQL injection, the attackers were able to crack the passwords easily because:",
    choices: [
      "A. The passwords were stored in plain cleartext format",
      "B. The passwords were MD5-hashed with no salt applied",
      "C. The passwords were encrypted with a weak symmetric key",
      "D. The database used base64 encoding instead of hashing"
    ],
    correct: 1,
    explanation: "Passwords were hashed with MD5 — which produces short hashes with feasible collisions — and critically, NO SALT was used. Without salt, precomputed rainbow tables could crack the hashes almost instantly. This is a textbook example of why 'salt destroys rainbow tables' and why MD5 should never be used for password storage.",
    sourceRef: "Study Guide > HBGary Federal > Methods of Attack"
  },
  {
    id: 185,
    topic: "hbgary",
    type: "mc",
    question: "How did the attackers gain access to Aaron Barr's email account?",
    choices: [
      "A. They guessed his security questions correctly",
      "B. They used a zero-day exploit against Gmail",
      "C. He reused his cracked password across services",
      "D. They intercepted it via a man-in-the-middle attack"
    ],
    correct: 2,
    explanation: "Aaron Barr used the same password across multiple services. After cracking his HBGary password (MD5, no salt → rainbow tables), the attackers simply tried it on his email accounts — and it worked. This is a textbook example of why password reuse is dangerous, especially for someone in the security industry.",
    sourceRef: "Study Guide > HBGary Federal > Methods of Attack"
  },
  {
    id: 186,
    topic: "hbgary",
    type: "mc",
    question: "How did the attackers gain access to HBGary's servers?",
    choices: [
      "A. Brute-forced the server's main admin password",
      "B. Exploited a known vulnerability in the server OS",
      "C. Social engineering — impersonated Aaron to trick Juicy",
      "D. Physically broke into HBGary's corporate data center"
    ],
    correct: 2,
    explanation: "Using Aaron Barr's compromised email account, the attackers posed as Aaron and social-engineered Juicy (Jussi Jaakonaho, the Finnish system administrator) into confirming a password and 'opening it up to the world' while Aaron was supposedly 'traveling.' This chain — SQL injection → password cracking → password reuse → social engineering — shows how vulnerabilities compound.",
    sourceRef: "Study Guide > HBGary Federal > Methods of Attack"
  },
  {
    id: 187,
    topic: "hbgary",
    type: "mc",
    question: "Which LulzSec member was the founder, flipped to become an FBI informant, and was from the USA?",
    choices: [
      "A. Kayla (Ryan Ackroyd)",
      "B. Tflow (Mustafa Al-Bassam)",
      "C. Sabu (Hector Monsegur)",
      "D. Topiary (Jake Davis)"
    ],
    correct: 2,
    explanation: "Sabu (Hector Monsegur) was the founder of LulzSec, from the USA. He was arrested, pled to 12 crimes (potentially 124 years), but served only 7 months after cooperating as an FBI informant. He is now a security researcher and executive at an AI research firm.",
    sourceRef: "Study Guide > HBGary Federal > Who Actually Attacked"
  },
  {
    id: 188,
    topic: "hbgary",
    type: "mc",
    question: "Which LulzSec member was known for social engineering, posed as a teenage girl online, and was from England?",
    choices: [
      "A. Sabu",
      "B. Kayla (Ryan Ackroyd)",
      "C. Topiary",
      "D. AVunit"
    ],
    correct: 1,
    explanation: "Kayla (Ryan Ackroyd) was from England and was the group's social engineer, who posed as a teenage girl online. She was sentenced to 30 months in UK prison. She now teaches at a UK university and works as a pentester. The social engineering used against Juicy in the HBGary attack exemplifies this skillset.",
    sourceRef: "Study Guide > HBGary Federal > Who Actually Attacked"
  },
  {
    id: 189,
    topic: "hbgary",
    type: "tf",
    question: "All seven members of LulzSec were eventually identified and arrested.",
    choices: ["True", "False"],
    correct: 1,
    explanation: "False. AVunit was NEVER caught — they had the best operational security of the group and may have done a Reddit AMA in 2015. The other members (Sabu, Kayla, Tflow, Topiary, Pwnsauce) were all identified and faced legal consequences of varying severity, from no jail time (Pwnsauce) to 30 months (Kayla).",
    sourceRef: "Study Guide > HBGary Federal > Who Actually Attacked"
  },
  {
    id: 190,
    topic: "hbgary",
    type: "mc",
    question: "What happened to the internal emails stolen from HBGary Federal?",
    choices: [
      "A. They were encrypted and held for ransom",
      "B. They were published publicly on WikiLeaks",
      "C. They were sold on the dark web",
      "D. They were returned after private negotiation"
    ],
    correct: 1,
    explanation: "Tens of thousands of internal HBGary emails were published on WikiLeaks — for example, 17,191 emails mentioning 'Aaron' alone. The public release of these emails was humiliating and damaging, exposing internal communications and effectively destroying HBGary Federal as a company.",
    sourceRef: "Study Guide > HBGary Federal > Methods of Attack"
  },
  {
    id: 191,
    topic: "hbgary",
    type: "mc",
    question: "The HBGary Federal attack chain demonstrates a sequence of compounding vulnerabilities. Which is the correct order?",
    choices: [
      "A. Phishing → cracking → server access → email compromise",
      "B. SQL injection → MD5 cracking → password reuse → social engineering",
      "C. Zero-day → lateral movement → privilege escalation → exfiltration",
      "D. Brute force → session hijacking → escalation → data theft"
    ],
    correct: 1,
    explanation: "The attack chain was: (1) SQL injection on the custom CMS exposed the user database, (2) MD5-hashed passwords with no salt were cracked via rainbow tables, (3) password reuse gave access to Aaron's email, (4) social engineering from Aaron's email convinced admin Juicy to grant server access. Each vulnerability enabled the next step.",
    sourceRef: "Study Guide > HBGary Federal > Methods of Attack"
  },
  {
    id: 192,
    topic: "hbgary",
    type: "mc",
    question: "Which LulzSec member had the best operational security and was never caught?",
    choices: [
      "A. Sabu",
      "B. Pwnsauce",
      "C. AVunit",
      "D. Tflow"
    ],
    correct: 2,
    explanation: "AVunit was never caught — they had the best operational security of the entire LulzSec group. They may have done a Reddit AMA in 2015, but their identity remains unknown. This contrasts sharply with other members like Sabu (who was identified and turned FBI informant) and demonstrates the importance of operational security.",
    sourceRef: "Study Guide > HBGary Federal > Who Actually Attacked"
  },
  {
    id: 193,
    topic: "hbgary",
    type: "mc",
    question: "After the HBGary Federal hack, LulzSec went on a '100 days of lulz' spree targeting all of the following EXCEPT:",
    choices: [
      "A. Fox and PBS",
      "B. Sony",
      "C. The US Senate and CIA",
      "D. The Pentagon and NSA"
    ],
    correct: 3,
    explanation: "LulzSec's '100 days of lulz' targeted Fox, PBS, game companies (Minecraft, LoL, Bethesda), Sony, the US Senate, and the CIA. The Pentagon and NSA were not among their publicly documented targets. The spree demonstrated the group's capability and audacity in attacking high-profile targets.",
    sourceRef: "Study Guide > HBGary Federal > Who Actually Attacked"
  },
  {
    id: 194,
    topic: "hbgary",
    type: "mc",
    question: "Greg Hoglund, co-founder of HBGary, was known for:",
    choices: [
      "A. Developing the NIST Cybersecurity Framework draft",
      "B. Creating rootkit.com to build his reputation",
      "C. Serving as CISO of Sony Pictures",
      "D. Leading the FBI's cybercrime division office"
    ],
    correct: 1,
    explanation: "Greg Hoglund was co-founder of HBGary and was known for rootkit.com, establishing his reputation in the security research community. He co-founded HBGary with his wife Penny Leavy-Hoglund. HBGary Federal was the subsidiary focused on U.S. government contracts, led by Aaron Barr.",
    sourceRef: "Study Guide > HBGary Federal > Background"
  },
  {
    id: 195,
    topic: "hbgary",
    type: "tf",
    question: "The HBGary Federal hack demonstrated that even security companies can be vulnerable to basic attacks like SQL injection and poor password practices.",
    choices: ["True", "False"],
    correct: 0,
    explanation: "True. The irony of the HBGary case is that a security consulting firm was brought down by 'the most bare-bones SQL injection,' MD5 hashes without salt, password reuse by its CEO, and social engineering of its admin. It powerfully demonstrates that no organization is immune to basic security failures, regardless of their expertise.",
    sourceRef: "Study Guide > HBGary Federal > Aftermath / Lessons Learned"
  },
  {
    id: 196,
    topic: "hbgary",
    type: "mc",
    question: "What was the primary lesson of the HBGary Federal case?",
    choices: [
      "A. State-sponsored hackers are essentially unstoppable",
      "B. 'Don't poke the nest'; basic failures compound",
      "C. Cloud hosting is inherently more secure than on-premises",
      "D. Anonymous is an organized military-style operation"
    ],
    correct: 1,
    explanation: "The key lesson was 'don't poke the hornet's nest' — Barr's provocation of Anonymous had no financial benefit but angered 'the most sophisticated hackers on the internet.' Combined with basic security failures (SQL injection, MD5 no salt, password reuse, social engineering, no MFA), these compounded into the complete destruction of HBGary Federal.",
    sourceRef: "Study Guide > HBGary Federal > Aftermath / Lessons Learned"
  },
  {
    id: 197,
    topic: "hbgary",
    type: "mc",
    question: "Tflow (Mustafa Al-Bassam) of LulzSec went on to:",
    choices: [
      "A. Become an FBI informant after capture",
      "B. Complete a PhD focused on blockchain",
      "C. Teach at a UK university full-time",
      "D. Work as a penetration tester exclusively"
    ],
    correct: 1,
    explanation: "Tflow (Mustafa Al-Bassam), from Iraq, served 20 months in UK prison, then completed a PhD in Computer Science focusing on blockchain and launched blockchain startups. Sabu became the FBI informant, Kayla teaches at a UK university and pentesters, and Pwnsauce is a pentester/security researcher. Many former hackers redirected their skills into legitimate careers.",
    sourceRef: "Study Guide > HBGary Federal > Who Actually Attacked"
  },
  {
    id: 198,
    topic: "hbgary",
    type: "mc",
    question: "Sabu (Hector Monsegur) pled guilty to 12 crimes potentially carrying 124 years in prison but served only:",
    choices: [
      "A. 30 months in prison",
      "B. 20 months in prison",
      "C. 7 months (due to informant cooperation)",
      "D. No prison time served"
    ],
    correct: 2,
    explanation: "Sabu served only 7 months despite pleading to 12 crimes potentially carrying 124 years because he cooperated extensively as an FBI informant, helping identify and build cases against other LulzSec members. He is now a security researcher and executive at an AI research firm.",
    sourceRef: "Study Guide > HBGary Federal > Who Actually Attacked"
  },
  {
    id: 199,
    topic: "hbgary",
    type: "mc",
    question: "Which security vulnerability was NOT exploited in the HBGary Federal attack?",
    choices: [
      "A. SQL injection",
      "B. MD5 hashing without salt",
      "C. Password reuse",
      "D. Buffer overflow exploit"
    ],
    correct: 3,
    explanation: "The HBGary attack exploited SQL injection (on the custom CMS), MD5 hashing without salt (enabling rainbow table attacks), password reuse (Aaron's password worked on his email), social engineering (convincing Juicy to grant access), and lack of MFA. A buffer overflow exploit was NOT part of the attack chain.",
    sourceRef: "Study Guide > HBGary Federal > Aftermath / Lessons Learned"
  },
  {
    id: 200,
    topic: "hbgary",
    type: "mc",
    question: "What ultimately happened to HBGary Federal as a company after the attack?",
    choices: [
      "A. It rebranded and continued as a successful security firm",
      "B. It was effectively destroyed as a company",
      "C. It was acquired by a larger security firm at a premium",
      "D. It pivoted to become a cryptocurrency company"
    ],
    correct: 1,
    explanation: "HBGary Federal was effectively destroyed as a company by the attack. The combination of the embarrassing breach (a security company hacked via basic attacks), the public release of internal emails on WikiLeaks, and the reputational damage made it impossible to continue operating. This serves as a stark example of how cyber attacks can be existential threats to organizations.",
    sourceRef: "Study Guide > HBGary Federal > Aftermath / Lessons Learned"
  },

  // ─────────────────────────────────────────────
  //  MULTI-SELECT QUESTIONS (spread across topics)
  // ─────────────────────────────────────────────

  {
    id: 201,
    topic: "crypto",
    type: "multi",
    question: "Select ALL properties that digital signatures provide:",
    choices: [
      "A. Integrity",
      "B. Confidentiality",
      "C. Authenticity",
      "D. Non-repudiation",
      "E. Availability"
    ],
    correct: [0, 2, 3],
    explanation: "Digital signatures provide integrity (message wasn't altered), authenticity (came from the claimed sender), and non-repudiation (sender can't deny sending). They do NOT provide confidentiality (anyone can read the message) or availability (an infrastructure concern, not a cryptographic one).",
    sourceRef: "Study Guide > Cryptography > Digital Signatures"
  },
  {
    id: 202,
    topic: "fraud",
    type: "multi",
    question: "Select ALL five elements required for an act to be legally classified as fraud:",
    choices: [
      "A. A false statement, representation, or disclosure",
      "B. A material fact that induces a person to act",
      "C. Intent to deceive",
      "D. A written contract between the parties",
      "E. Justifiable reliance by the victim",
      "F. An injury or loss suffered by the victim"
    ],
    correct: [0, 1, 2, 4, 5],
    explanation: "All five required elements are: (A) false statement, (B) about a material fact, (C) intent to deceive, (E) justifiable reliance, and (F) injury or loss. A written contract (D) is NOT required — fraud can occur through verbal statements or other representations without any formal contract.",
    sourceRef: "Study Guide > Fraud > What Is Fraud?"
  },
  {
    id: 203,
    topic: "incident-response",
    type: "multi",
    question: "Select ALL correct phases of the NIST Incident Response Lifecycle:",
    choices: [
      "A. Preparation",
      "B. Detection & Analysis",
      "C. Threat Modeling",
      "D. Containment, Eradication, & Recovery",
      "E. Post-Incident Analysis",
      "F. Penetration Testing"
    ],
    correct: [0, 1, 3, 4],
    explanation: "The four NIST Incident Response Lifecycle phases are: (A) Preparation, (B) Detection & Analysis, (D) Containment, Eradication, & Recovery, and (E) Post-Incident Analysis. Threat Modeling and Penetration Testing are valid security activities but are NOT phases of the NIST IR lifecycle.",
    sourceRef: "Study Guide > Incident Response > NIST Incident Response Lifecycle"
  },
  {
    id: 204,
    topic: "auth",
    type: "multi",
    question: "Select ALL vulnerabilities that were exploited in the HBGary Federal attack:",
    choices: [
      "A. SQL injection on a custom CMS",
      "B. MD5 hashing without salt",
      "C. Password reuse across services",
      "D. Social engineering of the system administrator",
      "E. Zero-day exploit in Windows Server",
      "F. Lack of multi-factor authentication"
    ],
    correct: [0, 1, 2, 3, 5],
    explanation: "The HBGary attack exploited: (A) SQL injection on the custom CMS, (B) MD5 without salt enabling rainbow table attacks, (C) Aaron's password reuse giving email access, (D) social engineering of Juicy for server access, and (F) no MFA that could have prevented unauthorized access. There was no zero-day exploit (E) involved.",
    sourceRef: "Study Guide > HBGary Federal > Aftermath / Lessons Learned"
  },
  {
    id: 205,
    topic: "privacy",
    type: "multi",
    question: "Select ALL that are real GDPR rights:",
    choices: [
      "A. Right to be Informed",
      "B. Right to Compensation",
      "C. Right to Erasure",
      "D. Right to Data Portability",
      "E. Right to Restrict Processing",
      "F. Right to Anonymity"
    ],
    correct: [0, 2, 3, 4],
    explanation: "The real GDPR rights include: Right to be Informed (A), Right to Erasure (C), Right to Data Portability (D), and Right to Restrict Processing (E). 'Right to Compensation' (B) and 'Right to Anonymity' (F) are NOT GDPR rights — they are fake distractors. The eight real GDPR rights should be known conceptually for the exam.",
    sourceRef: "Study Guide > Privacy > GDPR Rights"
  },
  {
    id: 206,
    topic: "sony",
    type: "multi",
    question: "Select ALL security weaknesses present at Sony Pictures at the time of the 2014 hack:",
    choices: [
      "A. Weak passwords based on personal/real-world facts",
      "B. Little to no MFA/2FA",
      "C. Near 0% data encryption",
      "D. Strong network segmentation preventing lateral movement",
      "E. Minimal security training",
      "F. Very small IT security team"
    ],
    correct: [0, 1, 2, 4, 5],
    explanation: "Sony had ALL of these weaknesses EXCEPT strong network segmentation (D) — in fact, they had VERY LITTLE network segmentation, which is why the worm could spread across the LAN. Weak passwords (A), minimal MFA (B), near-zero encryption (C), minimal training (E), and understaffed IT (F) all contributed to the catastrophic breach.",
    sourceRef: "Study Guide > Sony Pictures > Security Practices"
  },
  {
    id: 207,
    topic: "crypto",
    type: "multi",
    question: "Select ALL algorithms that would be 'irrevocably broken' by Shor's algorithm on a quantum computer:",
    choices: [
      "A. RSA",
      "B. AES-256",
      "C. Diffie-Hellman",
      "D. SHA-256",
      "E. ECC (Elliptic-Curve Cryptography)",
      "F. ChaCha20"
    ],
    correct: [0, 2, 4],
    explanation: "Shor's algorithm breaks RSA (A), Diffie-Hellman (C), and ECC (E) — all asymmetric systems based on factorization or discrete logarithm problems. AES-256 (B), SHA-256 (D), and ChaCha20 (F) are symmetric/hash algorithms that are affected by Grover's algorithm (quadratic speedup) but remain fundamentally sound with larger key sizes.",
    sourceRef: "Study Guide > Cryptography > Post-Quantum Cryptography"
  }
];
