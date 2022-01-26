---
title: ACSC Essential 8 Assessment Methodology
---

## Overview

The ACSC Essential 8 Maturity Model is used in Australian government and private organisations for providing a baseline of security controls to implement. While the maturity model provides actions to undertake, there is no methodology provided by ACSC for assessing compliance with the standard or for ensuring comprehensive compliance.

This methodology outlays the steps for Volkis consultants to assess compliance with the ACSC Essential 8. It corresponds to the 1st April 2020 version of ACSC Essential 8 Maturity Model.

The latest version of the maturity model can be accessed at the [ACSC web site](https://www.cyber.gov.au/publications/essential-eight-maturity-model).

## Assessment approach

The assessment judges each control based on two factors:

* The maturity level of the control
* Whether the control is comprehensively implemented

A maturity rating should not be given unless all requirements of the maturity level are met. The comprehensively implemented rating should not be given unless every system in scope has the control implemented.

Sampling may be used in this assessment process, however the method and rationale for sampling must be noted in the report.

## Assessment activities

The following activities should be used to gather evidence in order to place the in-scope environment into maturity levels.

### Central activities

* Perform an authentication vulnerability assessment on all servers and workstations in scope or retrieve results from a recent vulnerability assessment performed on the client environment.

### Application control

* Identify the system used for application control. If there is a system in place:
  * Ensure the system is configured with a whitelist of approved executables rather than a blacklist of known malware
  * Investigate the functionality of the system to determine whether it restricts execution of executables, or it restricts software libraries, scripts, and installers in a addition
  * Obtain a list of workstations and servers where the system is installed. Compare this list to the asset list of servers and workstations.
* Investigate the script used to apply Microsoft block rules. The recommended rules are available on the [Microsoft website](https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules).

### Patch applications

* Analyse the results of the authenticated vulnerability assessment:
  * Identify missing application level patches on servers and workstations
  * Identify unsupported applications
* Review patch management process. Identify the service level expectations for the implementation of extreme risk patches.
* Identify any automated mechanism used to confirm patch deployment:
  * Obtain a list of workstations and servers where the system is installed/configured to scan. Compare this list to the asset list of servers and workstations.

### Configure Microsoft Office macro settings

* Identify group policy objects or mechanism used to block Microsoft Office macros.
  * Obtain a list of workstations and servers where the mechanism is used. Compare this list to the asset list of servers and workstations.
* Attempt to run a word document with macros on a workstation in scope.

### User application hardening

* Identify group policy objects or mechanism used to block web content and Microsoft Office macros.
  * Obtain a list of workstations and servers where the mechanism is used. Compare this list to the asset list of servers and workstations.
* On a workstation in scope:
  * Attempt to run a flash programme.
  * Attempt to run a java applet.
  * Attempt to run a word document with flash content and OLE content.
  * Identify whether web advertisements are blocked.
  
### Restrict administrative privileges

* Review the information security policy of the client. Identify whether the policy contains clauses that prevent privileged users from reading emails, browsing the web, and obtaining files via online services.
* Review documentation used for assigning privileged access. Ensure the process incorporates validation of the requirement for access.
* Review documentation around regular validation of privileges. Identify whether this is performed on an annual or more frequent basis.
* Identify if a privileged access management or similar control is in place in the environment:
  * Identify whether policy requirements enforce the usage of this control
  * Identify any privileged access that does not require this control

### Patch operating systems

* Analyse the results of the authenticated vulnerability assessment:
  * Identify missing operating system patches on servers and workstations
  * Identify unsupported operating systems
* Obtain the patch management process. Identify the service level expectations for the implementation of extreme risk patches.
* Identify any automated mechanism used to confirm patch deployment:
  * Obtain a list of workstations and servers where the system is installed/configured to scan. Compare this list to the asset list of servers and workstations.

### Multi-factor authentication

* Obtain a list of remote-access solutions. Ensure multi-factor authentication is used.
* Review the process for obtaining privileged access. Identify whether multi-factor authentication is required for login privileged users.
* Obtain a list of imporant data repositories. Ensure multi-factor authentication is used.

### Daily backups

* Review backup process.
* Review testing and restoration process. Identify the frequency of testing and restoration including partial and full backup tests.
* Identify the success of the last test and the last partial and full restorations.
* Identify the backup storage location:
  * Review the data retention requirements of this storage location and identify the retention period for backups.
  * Identify if the storage is offline or online in a non-rewritable and non-erasable manner.