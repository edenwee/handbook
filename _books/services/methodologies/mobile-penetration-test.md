---
name: Mobile application penetration testing methodology
---

Volkis will perform penetration testing on the target mobile application. This will include the identification and enumeration of the application, identifying vulnerabilities, exploiting identified vulnerabilities, and then analysing and reporting on the results.

Our methodology is based on multiple industry recognised methodologies including OWASP.

### Identification and enumeration

Volkis will investigate the application using reverse engineering techniques to identify packages and frameworks in use. Static analysis will be performed to determine compilation protections, configuration information, and retrieve potentially sensitive strings, such as hardcoded credentials or encryption keys. The permissions the application requests from the user will be reviewed to determine if they are appropriate.

Volkis will perform run-time analysis on the application. By using the application as intended, artifacts may be generated on the device. This can include files containing user information, items stored in the keychain, and log messages. Additional protections in the application, such as anti-instrumentation and certificate pinning, will be discovered and attempted to be subverted. Session handling will be analysed.

If certificate pinning is able to be subverted, Volkis will inspect the web traffic that is generated using our web application methodology.

### Vulnerability identification

With the assistance of the previous results, the tester will then use manual techniques to uncover vulnerabilities that automated techniques will not see. This will include targeting custom developed services, investigating the feedback that the services provide when test cases are entered, and other manual techniques.

Data storage will be inspected to ensure sensitive data is stored securely on the device. Methods used to encrypt information will be inspected in an attempt to find encryption keys used. In addition, the use of cryptography will be examined to ensure strong algorithms are used for their use-case. Transport security will be assessed to ensure sensitive information is not transmitted unencrypted. Logging will be examined for sensitive information disclosed during run-time.

The application will be inspected for client-side injection, where a user may be able to inject malicious code into web sessions, the binary itself, or into local databases on the device. 

If local authentication or authorisation exists within the mobile application, attempts will be made to bypass these through instrumentation. If successful, the tester may be able to access privileged functionality not normally accessible by a user. The mechanism the application uses to maintain sessions will be examined for issues.

Vulnerabilities that are identified will not just be technical vulnerabilities, but could also include logic flaws, gaps in business process, or any other weakness of the application that could present risk to the organisation.

### Exploitation

The tester will exploit identified vulnerabilities to better understand its impact and to eliminate the possibility of a false-positive.

The exploitation will occur alongside the vulnerability identification phase as vulnerabilities are identified. It will incorporate prioritisation, where vulnerabilities that tend to present higher risk to the organisation will be prioritised over low risk vulnerabilities. If there is a significant chance of service disruption, the tester will organise a window for exploitation, or not exploit it at all.

Exploitation will often involve the usage of publicly available tools, custom written tools, or specific actions taken by the tester.

Due to the nature of certain vulnerabilities, not every vulnerability can be exploited by the tester. This could be due to the level of network or system access required for exploitation, privilege requirements for exploitation, or specific conditions that need to be in place. These vulnerabilities will still be reported on even if exploitation was not achieved. The lack of exploitation will be a consideration when assessing the risk rating during the risk assessment.

Due to time limitations and prioritisation, not all vulnerabilities that are identified will be exploited during this phase. For example, the tester may choose not to exploit vulnerabilities that present a low risk to the organisation or that have a known impact.

Sensible precautions will be used during the exploitation phase to minimise the risks of availability issues. This could include performing exploitation out-of-hours or using a development or testing server. If the risks of exploitation are considered greater than the benefit of exploitation, and those risks cannot be mitigated or managed, the exploitation of the vulnerability will be skipped.

Exploitation of vulnerabilities that specifically create Denial of Service (DoS) condition will not be performed, nor will any sort of Distributed Denial of Service (DDoS).

### Post-exploitation

Successful exploitation of vulnerabilities will provide the tester with additional access to information, functionality, and potential access to the internal environment. This additional access will be used by the tester to determine and prove the full scope of compromise, including the true business impact of the vulnerability.

The additional access will be fed back into the previous stages to determine if additional services can be enumerated and additional vulnerabilities can be found and exploited.
