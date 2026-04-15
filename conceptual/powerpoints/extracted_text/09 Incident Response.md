# 09 Incident Response

## Slide 1

IS 414:IS Security & Controls
Dr. Taylor Wells

## Slide 2

Incident Response
2

## Slide 3

Definitions
Event
Observable occurrence in our IT infrastructure
Incident (ISO 27001)
Any event which is not part of the standard operation of a service and which causes, or may cause, an interruption to, or a reduction in, the quality of that service.
3

## Slide 4

Definitions
Computer Security Incident Response Team (CSIRT)
Responsible for responding to security incidents
Usually cross-functional
There are some related terms that are mostly used synonymously
Computer Emergency Response Team (CERT)
Computer Incident Response Team (CIRT)
Security Operations Center (SOC)
Formal organization for monitoring and defending against security threats
4

## Slide 5

A few industry standards
Expectations for Computer Security Incident Response (IETF RFC 2350)
https://tools.ietf.org/html/rfc2350
Computer Security Incident Handling Guide (NIST 800-61)
https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final
5

## Slide 6

Types of Response
Technical response
Public relations response
Legal response
6

## Slide 7

NIST Incident Response Lifecycle Phases
7

## Slide 8

NIST Incident Response Lifecycle Phases
8

## Slide 9

Preparation
9

## Slide 10

Typical Incident Response
10

## Slide 11

Preventing Incidents
Apply many of the defensive security tools/techniques/practices we have learned already:
Firewalls
Network segmentation
Patching
Least privilege designs
Network logging
Host-based logging
Planning
User training
Risk assessments
11

## Slide 12

Establishing an Incident Response Capability
A managerial/organizational issue
Complex undertaking
Takes planning and organization
Goal is to mitigate risk
What is a “major incident”?
12

## Slide 13

When a major Incident occurs …
13

## Slide 14

People May Panic
14

## Slide 15

Or at a minimum will be stressed
15

## Slide 16

Not all information is known (Fog of War)
16

## Slide 17

Useful to borrow concepts from the military like Chain of Command
17

## Slide 18

18

## Slide 19

What to plan?
The CSIRT
Communication strategy
Internal
External (including law enforcement and PR)
Response to common attacks
Policies and Procedures
19

## Slide 20

Rootkit Hacked Server
20

## Slide 21

NIST Incident Response Lifecycle Phases
21

## Slide 22

Detection & Analysis
22

## Slide 23

Signs of an Incident
Precursors vs. Indicators
Precursors show event may happen in future (e.g., a vulnerability in a scan)
Indicators show something happened or is happening now
23

## Slide 24

Example Precursors and Indicators
Web server logs getting scanned
A new vulnerability is announced
Receive intelligence of an upcoming attack
Intrusion Detection System alert that DB server is being attacked
Anti-Virus detects malware
System administrator sees something weird
Host configuration changes and the change is logged
Failed logins (application, system)
Deviation in network traffic
And many more …
24

## Slide 25

Intrusion Identification Data Sources
IDS, IPS
SIEM (analytics)
Anti-Virus / Anti-Malware
File integrity checks (hashing)
Third party monitoring software (e.g., FireEye)
Logs
People
Internal
External
25

## Slide 26

Locard’s Exchange Principle
Everything leaves a trace / evidence
26

## Slide 27

Containment, Eradication, & Recovery
27

## Slide 28

Classification of incident
https://www.first.org/resources/guides/csirt_case_classification.html
28

## Slide 29

Category
Denial of Service
DOS or DDOS
Compromised Information
Disclosure of sensitive corporate information or intellectual property
Compromised Asset
Compromised host, network device, user account, application
Malware, root account, rootkit, etc.
Unlawful Activity
Theft, Fraud, Computer Safety
29
Internal Hacking
Suspicious activity originating from inside the network, excluding malware
External Hacking
Suspicious activity originating from outside the network, excluding malware
Email
Spoofed email, spam, phishing
Malware
Policy Violation

## Slide 30

Criticality
Incident affecting critical systems
Potential to impact revenue or customers
Active hacking, compromised critical asset, virus outbreak, etc.
Initial response time: 60 minutes
Incident affecting non-critical systems
Not revenue or customer impacting
Time-sensitive employee investigations
Policy violations, unauthorized access, compromised asset, inactive hacking
Initial response time; 4 hours
Possible incident affecting non-critical systems
Employee investigations not time sensitive, longer-term investigations
Email, forensics request, policy violation
Initial response time: 48 hours
30

## Slide 31

Sensitivity
Helps define the “need to know” and who should be in the loop
Level 1: Extremely sensitive
Forensics request, destruction of property, unlawful activity, compromised information, etc.
Informed: CSIRT, Management
Computer Security Incident Response Team
Level 2: Sensitive
Hacking, unauthorized access
Informed: CSIRT, Management, System owners, Operations
Level 3: Not sensitive
Denial of service, virus, email
Informed: Employees can be informed as well of isolated infections
31

## Slide 32

Inform appropriate entities
Thorough planning should help in identifying who should be informed
A senior manager should sponsor the CSIRT
CISO, CIO, Legal counsel, etc.
Notify them when declaring an incident
Email
Phone call or visit for the critical incidents
Local or organizational incident-handling team
Impacted business unit
Start tracking the incident
Utilize an incident tracking system
32

## Slide 33

Containment
Keep the problem from getting worse
It may be appropriate to ..
Shut down the system
Disconnect the system from the network
Disable certain affected functions of the system
What to consider
Overall risk
CIA Triad (confidentiality, integrity, availability)
Evidence preservation requirements
Feasibility and effectiveness of containment
Duration of the strategy – temporary or permanent?
33

## Slide 34

Risk of containment
Do you want to tip your hand?
Some organizations may setup a sandbox and monitor the attacker
Some organizations may determine leaving everything online with stringent monitoring is a better short-term solution
Further determine what’s happening, what is affected
Dangerous solution – could lead to further compromise
Might cause additional damage
Removing internet access from some malware could cause it to behave differently
Malware could start encrypting files when it loses connectivity
Making changes could damage evidence
May need evidence for determining the full scope of the incident
May need evidence for legal purposes
34

## Slide 35

Gathering evidence
Especially in the case you need to preserve for legal proceedings, documentation is essential
Talk with legal professionals to be sure your evidence can be admissible in court
Account for evidence with a chain of custody
Keep an evidence log
Identifying information - location, model number, hostname, IP address, etc.
Who collected the evidence
Time and date
Evidence storage locations
NIST SP 800-86, Guide to Integrating Forensic Techniques into Incident Response
35

## Slide 36

Create forensic images
The quicker you can create a forensic image of the affected systems, the better
Image the memory and filesystem
You’ll lose data if you turn off the system
Bit-by-bit images to get all filesystem data is best
Create hashes of the original and images
Not all incidents will allow for full backups and analysis
More time sensitive incidents will require live forensics
36

## Slide 37

Digital Forensics
37

## Slide 38

Digital Forensics
What did the attacker do?
How far did the attacker go?
38

## Slide 39

Eradication
Containment is to isolate and prevent spread; eradication is to remove
Reformat and rebuild
Restoring from CLEAN system backups
39

## Slide 40

Recovery
Fix vulnerabilities and improve defenses before placing back in production
Monitor and assess
40

## Slide 41

Recovery - monitoring
The other major portion of the recovery phase is continued monitoring
Continually look for evidence of the intrusion
On the recovered systems
On the entire network
Check regularly for re-compromise
Script this!
Look for the specific indicators
Utilize network and host-based IPS/IDS
Add indicators of the compromise
Incident Response
41

## Slide 42

Public Relations / Media Response
42

## Slide 43

Post-Incident Analysis
43

## Slide 44

Questions to address
What happened?
How well did the response work?
Were documented procedures adequate?
What other information could have been used sooner?
What hurdles were there?
What would you do differently next time?
Could information sharing have been improved?
What can we do next time to prevent any problems?
How can we detect similar incidents in the future?
Are any additional tools or resources needed?
44

## Slide 45

Next
