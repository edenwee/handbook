---
title: External penetration test methodology
---

# External penetration testing

Volkis will perform penetration testing on the internet-accessible systems and services within the target subnet. This will include the identification and enumeration of systems and services, identifying vulnerabilities within those systems and services, targeting weak authentication and account credentials, exploiting identified vulnerabilities, and then analysing and reporting on the results.

## Identification and enumeration

Volkis will investigate the subnets in scope using scanning methods, active enumeration to identify what systems and services are accessible from the internet, and Open Source Intelligence (OSINT).

Volkis will scan the entirety of the in-scope subnet using a port scanner, scanning for common TCP and UDP open ports. Where possible and where systems can handle the traffic throughput, full TCP port scans will be launched against systems.

Accessible systems will be analysed to gather information about the system, including whether the system is running Microsoft Windows or Linux and the version including the operating system build or service pack information.

Open services and ports will be enumerated to identify what service is running and information about that service including the version, banner information, and any third-party plugins and modules that could be installed.

A search for hidden assets and endpoints will also be performed. This is to expand the attack surface and find things such as:

- Non-linked admin/high value pages;
- Websites behind a virtual hostname;
- UAT pages/instances with live data.

The tester will investigate the organisation using common OSINT sources. This could include WHOIS information, social media sources and publicly available websites including the organisation's website. Other assets that may impact the security of the external network such as DNS, email, code repositories, third party hosting and Software as a Service providers will also be considered as part of the security posture.

## Vulnerability identification

Each open system, service and asset will be investigated for potential vulnerabilities that could be used to compromise systems, gain access to information, make malicious changes to information or applications, or create impact on the availability of systems and information.

The vulnerability identification will begin with using automated vulnerability assessment tools on the environment. This will include running generalist network vulnerability assessment tools such as Tenable Nessus that will scan for potential misconfigurations, missing patches, out-of-date software, and other common vulnerabilities.

For specific services, more specialised vulnerability scanning and assessment tools will be used. These specific tools will give greater depth of vulnerability assessment than the general vulnerability assessment tools.

Following the vulnerability assessment, and with assistance of the results of the identification, enumeration, and vulnerability assessment results, the tester will then use manual techniques to uncover vulnerabilities that automated techniques will not see. This will include targeting custom developed services, leveraging the OSINT information, investigating the feedback that the services provide when test cases are entered, and other manual techniques.

Vulnerabilities that are identified will not just be technical vulnerabilities, but could also include logic flaws, gaps in business process, or any other weakness of the application that could present risk to the organisation.

## Exploitation

The tester will exploit identified vulnerabilities to better understand its impact and to eliminate the possibility of a false-positive.

The exploitation will occur alongside the vulnerability identification phase as vulnerabilities are identified. It will incorporate prioritisation, where vulnerabilities that tend to present higher risk to the organisation will be prioritised over low risk vulnerabilities. If there is a significant chance of service disruption, the tester will organise a window for exploitation, or not exploit it at all.

Exploitation will often involve the usage of publicly available tools, custom written tools, or specific actions taken by the tester.

Due to the nature of certain vulnerabilities, not every vulnerability can be exploited by the tester. This could be due to the level of network or system access required for exploitation, privilege requirements for exploitation, or specific conditions that need to be in place. These vulnerabilities will still be reported on even if exploitation was not achieved. The lack of exploitation will be a consideration when assessing the risk rating during the risk assessment.

Due to time limitations and prioritisation, not all vulnerabilities that are identified will be exploited during this phase. For example, the tester may choose not to exploit vulnerabilities that present a low risk to the organisation or that have a known impact.

Sensible precautions will be used during the exploitation phase to minimise the risks of availability issues. This could include performing exploitation out-of-hours or using a development or testing server. If the risks of exploitation are considered greater than the benefit of exploitation, and those risks cannot be mitigated or managed, the exploitation of the vulnerability will be skipped.

Exploitation of vulnerabilities that specifically create Denial of Service (DoS) condition will not be performed, nor will any sort of Distributed Denial of Service (DDoS).

## Post-exploitation

Successful exploitation of vulnerabilities will provide the tester with additional access to information, functionality, and potential access to the internal environment. This additional access will be used by the tester to determine and prove the full scope of compromise, including the true business impact of the vulnerability.

The additional access will be fed back into the previous stages to determine if additional services can be enumerated and additional vulnerabilities can be found and exploited.
