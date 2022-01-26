---
title: Volkis style guide
---

## Introduction

The Volkis style guide is a constant work in progress. It covers all documents including reports, web sites, presentations, and handbook entries.

Volkis uses Australian English at all times.

## Naming convention

Report filenames should be in the following format:

```Volkis report - { { client }} - { { title }} { { version }}```

The version can be ommitted if the version number is 1.0.

## Versions

Volkis reports and documents should use the ```major.minor``` version numbering system.

## Capitalisation

Titles should be capitalised in sentence case. For example:

* External penetration testing report
* Attack walkthrough
* Volkis style guide

Capitalisation should be limited to the first letter of each sentence and proper nouns.

## Emotive language

Most documents that are released by Volkis are technical documents that attempt to convey information in a concise and informative way. In technical documentation we should avoid emotive language. The application isn't suffering from anything. The vulnerability isn't extremely or enourmously important.

We need to be factual and "matter of fact" when describing our findings. This might make it sound less fun but it avoids overexaggerations and being misconstrued.

This doesn't apply to blog posts and irreverent marketing. Go ahead and use as much emotive language as you want in those cases.

## Dates and times

Although dd/mm/yyyy is preferred in Australia, it is ambiguous for overseas readers. For this reason, it is preferred to use yyyy-mm-dd hh-ss format.

## Screenshots and images

All screenshots within a report should have captions describing the screenshots.

## Source code

In markdown, all source code and computing variables should be encapsulated within triple ticks (\`\`\`), even if they are part of a sentence. This should include:

* Variable names
* Function names
* IP addresses
* Email addresses
* Filenames
* File paths

Items that do **not** need to use code blocks include:

* Document names
* Product names
* Port numbers
* Line numbers
* References (including CVE numbers, RFCs, etc)

There are cases where you might use your discretion, depending on context:

* Error messages
* Usernames
* Comments within code

## Specific terms

This section provides directions for specific terms that may have unique meaning, capitalisation, or phrasing.

### And/or

Avoid using slashes such as "and/or", "accept/enforce", etc. Instead, the sentence can be rephrased to remove and clarify it. Mostly this would be replacing "and/or" with a simple "and" or "or".

### A number of

Avoid using "A number of". Instead, either say the specific number or remove the phrase.

### Brute force

Use "**brute-force**" over "**brute force**" or "**brute forcing**". This includes:

* Brute-force attacks
* Brute-force techniques
* Brute-force search

### LaTeX

Document processing system used in Report Ranger. Pronounced "LAH-tekh". LaTeX should have the appropriate capitalisation. Use "\\latex" to format this correctly when using latex.