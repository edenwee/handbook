---
title: Penetration testing welcome pack
---

## Introduction

Welcome to your Volkis penetration test (**pentest** for short). We aim for high quality penetration testing with accurate results, effective communication, and a report and debrief that helps ensure things get fixed.

This welcome pack goes over the requirements, timeframes, communication plans and details of testing. If you have any questions about the testing or need any help with testing please contact your lead consultant.

## What do the consultants need?

The penetration testers will require:

- **Confirmation of scope**: Although we have the scope in our proposal, we are aware that modern IT environments constantly change and things may be a bit different since then. We will ask you to confirm the scope so that we don't accidentally hack someone else.
- **Business contact**: The business contact will be kept up-to-date with the penetration test and the findings. We will arrange with you how best to keep you up to date, whether you want a call per day or just a rundown at the end (see [Communication plan](#communication-plan-and-timeframes)).
- **Technical contact**: The technical contact will be used when the tester needs more information about the systems being tested. This could include technical information on how the system works or the interactions between systems. The technical contact will also be contacted if there are suspected availability issues with systems in scope, whether or not they were caused by testing.
- **Testing location**: For any on-site testing including internal testing or on-site web application penetration testing, the consultant will need a suitable location with a desk, chair, and ethernet connectivity. We will arrange a specific time for the consultant to arrive so you can be sure they get to the testing location.

## Before starting your penetration test

Although Volkis consultants will not perform denial of service attacks and will always try to work with you to ensure the tests and attacks they run will not cause availability issues, penetration testing can be a potentially disruptive activity. There are potential side effects to exploits, including behaviour that is completely unexpected. Although this is rare, it still occasionally occurs.

Because of this, it is recommended that you take a few prudent steps just in case there are any unexpected issues:

- Back up all systems prior to the test starting.
- Provide the penetration tester with a technical contact that can be reached in the case of availability issues. (see [What do the consultants need?](#what-do-the-consultants-need))
- Fix as many vulnerabilities as you can - there's no sense in having us find what you already know about!
- Ensure you have permission from any affected third parties for our testing.

If you are doing internet-based penetration testing, you'll get the best results if you whitelist the Volkis testing IP address. This IP address can always be resolved from `out.volk.is`. In both Windows and Linux, you can use this command to resolve the IP address:

```
nslookup out.volk.is
```

## Communication plan and timeframes

Volkis pride ourselves on our communication, including during the pentest. We have a standard communications plan for all tests to ensure you're kept up to date with everything that's happening.

Although this is our standard communications plan, we're happy to change this to your preferences.

- **1 week before testing**: This welcome pack will be sent your way. Our project staff will send an email to confirm scope, testing location, and arrange the business and technical contacts for testing. They will also arrange a kick-off call.
- **Prior to testing**: We will have a kick-off call with the consultant and your contacts to make sure everyone's on the same page with testing.
- **During testing**: The consultant will call the business contact if there are any high risk or critical risk vulnerabilities found. The consultant will call after validating, verifying, and exploring the impact of the issue. Unvalidated vulnerabilities or suspected false positives will not be raised.
- **1 week after testing**: The report will be released up to a week after testing. If you need the report earlier please contact us - although we can't guarantee anything we'll try to get it your way when you need.
- **Up to 1 month after testing**: We will have a 1 hour debrief where we go over the findings, results, and answer any questions you may have. This is also a good opportunity to discuss potential next steps in your security strategy.
- **Up to 3 months after testing**: If retesting is part of scope, our project team will work with you to arrange the retest.

Our consultants are contactable over:
- Phone
- Email
- Slack: _If you also use Slack, we can invite you into a joint Slack channel! Let the lead consultant know to arrange this._
- Signal

Every consultant at Volkis has their own [PGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) key. If you wish to send or receive files encrypted using this protocol, ask for their public key.

## Vulnerability disclosure

If there are vulnerabilities identified in third party systems or software, other organisations and people may be at risk as well. We try to be ethical and help everyone close any vulnerabilities they have, so we have a vulnerability disclosure programme that involves responsibly disclosing the vulnerabilities to those third parties.

In this programme, we have some basic guidelines:

- We will work directly with the third party rather than through you or your organisation.
- If a fix is released by the developers, we will alert you with details.
- After 30 days (depending on fix timeframes), we may publicly disclose the vulnerability. The penetration tester who identified the vulnerability will generally be credited.
- Unless we have your permission, we will not use your organisation's name when reporting the vulnerability, but we may say that it was found during one of our penetration tests.

## From here

One of our philosophies at Volkis is **do what you love*. Our consultants enjoy penetration testing and are excited to share this opportunity with you! Why not ask them to show you a hacking technique or 2, or even an interesting story from past projects? We all love talking infosec
