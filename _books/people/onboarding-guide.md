---
title: Onboarding guide & checklist
---

Hello and welcome to Volkis! If you're reading this you have probably just joined the Volkis family (or maybe you're a curious external reader). I'm sure you've been excited to get started and we've been just as excited to get to know you better.

In this guide, you'll learn the essentials about Volkis and get acquainted with how we work, what tools we use and where to ask for help. We know how important it is to get off on the right foot and this guide aims to empower you to do just that.

## Brief intro to Volkis

Volkis was started by Matt Strahan and Alexei Doudkine. Here are the two stooges now 😛...

![Matt and Alexei](/assets/img/alexei_matt_1.jpg)

We started Volkis as something fun to do. We knew the kind of company we wanted to work for and nothing quite fit for us, so we decided to give it a go ourselves. Having worked in security since at least 2010, we didn't see much significant change in the industry and we knew that it needed to change. We want to keep pushing the envelope and help the industry grow as a whole, while taking care of those around us and helping them thrive.

### What's it like at Volkis?

We have an easy going culture. We don't take ourselves too seriously, but we are passionate about what we do. We believe what we do helps _people_ like our clients' customers and their employees. We believe in **doing what you love** (it's one of our philosophies you'll hear a lot) and that means you're responsible for yourself. You can pick your own hours, as long as the work gets done on time, is of excellent quality and the client is happy.

We have a strict no-blame culture. That goes for other Volkis people and our clients. Security is genuinely hard and its up to us to make it a little easier without showing off or blaming other for security issues.

We're also very big on teaching and learning. No one knows everything and everyone (even those new to infosec) have something to teach. We're open with information, as people and as a company. We strive to be **open but secure** (another philosophy) which means we try to open source anything that isn't confidential (this Handbook for example)!

_TODO: Link to culture page when its done_

### What does "Volkis" mean?

Kind of a funny story! Matt and Alexei were brainstorming ideas while being halfway across the world (Alexei being in Europe at the time). Names are hard and we went through a lot of bad ones! Matt had the idea of naming the company "Volk" after Alexei's dog, but that didn't seem quite right.

On a late night flight to Greece, Alexei sat there playing with the "Volk" name idea... "Volk Security?" No. "Volk IS?" (IS means Information Security) No. What about "Volk + IS"... "Volkis?" It sounded good, was unique and most importantly, the domain name was available! 😛 It stuck.

"Volk", by the way, means wolf in Russian. 🐺

### What's with the logo?

The logo is an abstract wolf's head in relation to **Volk** in **Volkis**. The colours have dual meaning: They are often used in modern day terminals (think Material Theme) and they are soothing, invoking a sense of trust, which is essential when providing security.

## What to expect on Day 1

Day 1 is all about learning and settling up. You'll probably be reading this on day 1. Your manager will get you started by getting you access to core tools like email and Slack. You'll also be sent a Trello list of things to do. This will include getting access to systems and filling in some official forms.

You'll get to meet lots of new people, including the founders. It will be a lot of information, but don't let it overwhelm you; you don't need to memorise anything. Take it easy, keep reading and take the time to setup your system to your liking.

You'll also be assigned a "buddy", someone who'll help you along the way of learning Volkis things and someone you can just chat to about anything.

## Important Systems (Service delivery team)

This section gives a quick run-down of the hardware and software that is most important for new starters in the service delivery team. A list of all 3rd party service providers that we use can be [found here](/operations/third-party-providers/).

### Hardware

The laptop and other hardware you use will be extremely important. We provide a yearly hardware allowance for things you may need including a laptop, dock, web cam, headset, peripherals and other items to make your job easier. You can choose your own laptop and other hardware that suits _you_. Generally, we will reimburse costs of hardware within reason. If in doubt, as your manager before purchasing.

With freedom of choice, comes responsibility. You are responsible for the maintenance and security of your own laptop. We do have some minimum security requirements (_TODO: Link to page on personal sec_), however. Plan for your laptop to live at least 3 years. That means getting warranty of at least 3 years is highly recommended.

The following laptop specs are recommended minimums:

- **CPU:** Intel i7 or AMD Ryzen 7
- **RAM:** 16GB
- **Storage:** 500GB SSD
- **Resolution:** 1080p
- **Ethernet port**: yes

### Microsoft 365

We use M365 for email, centralised identity management, SharePoint for file storage and Teams just for external video calls.

To connect the company-wide file share to your account follow these steps:

1. Make sure you have OneDrive installed
2. Follow this link. It will take you to the filestore in SharePoint: [https://volkiscomau.sharepoint.com/Shared%20Documents/Forms/AllItems.aspx](https://volkiscomau.sharepoint.com/Shared%20Documents/Forms/AllItems.aspx)
3. Click on the **Sync** button at the top. OneDrive should automatically connect itself to SharePoint

### Slack

Slack is our core internal communication platform. We try to integrate as many other apps into Slack as possible. You'll probably use it more than email.

Once you have a Volkis email address, you can sign up to Slack yourself by using this link: [https://join.slack.com/t/volkis/signup](https://join.slack.com/t/volkis/signup) (You must use your @volkis.com.au email address)

For more info on Slack, check out our [Slack etiquette & usage guide](/operations/slack-etiquette).

### Trello

Trello is primarily used to track projects, both client work and internal projects. A detailed guide on our project lifecycle can be [found here](/operations/trello-guide/).

### GitLab

We use GitLab for internal app development and hosting Docker images. Here's our company group: [https://gitlab.com/volkis](https://gitlab.com/volkis).

If you don't have a personal GitLab already (or you don't want to use link it to Volkis), sign up with your work email!

You'll get access to all private repos (and public ones, obviously).

### Pipedrive

Pipedrive is our CRM. That's all you need to know for now.

### Qwilr

Qwilr is our proposal generator and distribution app.

### Xero

We use Xero for finance. You will be setup with a Xero account you can use to submit expenses. We highly recommend downloading the Xero Expenses mobile app for its ability to add expenses from receipt photos. Invaluable while on the road.

### Report Ranger

Report Ranger is an internally built application for compiling reports. A detailed overview can be found in the [Report Ranger wiki](https://gitlab.com/volkis/report-ranger/-/wikis/1.-Overview).

### Volk Messenger

Volk Messenger (previous known as Report Courier) is a system we use for delivering reports and other files to clients. It uses two channel communication (email and SMS) with end-to-end encryption for security.

Volk Messenger can be accessed at <https://file.volkis.com.au/>, however a valid Volkis staff address is required.

### PGP Key

Since we're usually dealing with sensitive data, we ask all consultants to generate a PGP key linked to their volkis.com.au email address for any sensitive communication.

- For Windows you can use [https://www.openpgp.org/software/kleopatra/](Kleopatra),
- For Mac you can use [https://gpgtools.org/](GPG Suite),
- Or you can just use [https://gnupg.org/](GnuPG) on Linux.

Make sure to generate a 4096-bit key with the correct details. Generate a revokation certificate! We don't want anyone encrypting sensitive info with your key if it's been compromised! Send the public key and its fingerprint to your manager so they can add it to your email signature.

**Creating a key pair:**

Windows and Mac:

1. Download the relevant suite of tools
2. Open the Keychain applciation (Kleopatra/GPG Keychain)
3. Go to Settings > Configure Kleopatra (Mac: GPG Keychain > Preferences)
4. Change the OpenPGP Keyserver to **"hkps://keyserver.ubuntu.com"**
5. Click Apply/Save (Mac: Close window)
6. Select File > New Certificate / New Key
7. Enter your name and Volkis email address
8. Set the expiration date for 10 years from now
9. Click "Advanced Settings" and ensure the RSA key-size is 4096 bits
10. Windows: Check box "Protect the generated key with passphrase"
11. Create a strong passphrase (store this somewhere safe, like your password manager)
12. Follow prompts to complete set up

**Creating a Revoke Certificate**

Windows:

1. Right-click on your newly created keypair in Kleopatra
2. Select "Details"
3. Click "Generate revocation certificate"
4. Save certificate somewhere safe and back it up

Mac:

1. Right-click on your newly created keypair in GPG Keychain
2. Select "Create Revoke Certificate"
3. Save certificate somewhere safe and back it up

**Publishing your certificate to a keyserver**

Windows and Mac:

1. Right-click on your newly created keypair in Kleopatra/GPG Keychain
2. Select "Publish on Server" / "Send Public Key to Key Server"
3. After a few minutes, visit <https://keyserver.ubuntu.com/>
4. Enter "volkis.com.au" in the search box and click "Search Key"
5. Confirm your public key has been uploaded successfully

### Software licenses for testing

You'll be given licenses for the usual tools, such as Burp Suite Professional, Nessus, and VMWare Workstation/Fusion.

### Other hardware/software

If you have your own favourite hardware/software you would like to use, we can probably reimburse you for the cost. Just ask!

## Forms and merch

Let's trade! Send these forms, filled in, to your manager...

- Tax file number declaration
- Superannuation standard choice
- Withholding declaration
- Medicare levy variation declaration (optional)

... and in exchange we'll send you:

- Your own business cards
- Volkis stickers
- A Volkis t-shirt
- A Volkis beer glass

**We prefer the [newer method](https://www.ato.gov.au/business/single-touch-payroll/single-touch-payroll-for-employees/new-employees/)** of submitting these forms through myGov. You can do this by logging into your myGov account and selecting either:

1. **My profile** > **Employment**; or
2. **New employment** on the home screen.

However, if you'd rather use the oldschool forms, you can find links to them here:

- [Tax file number declaration](https://www.ato.gov.au/uploadedFiles/Content/IND/Downloads/TFN_declaration_form_N3092.pdf)
- [Superannuation standard choice](https://www.ato.gov.au/WorkArea/DownloadAsset.aspx?id=67314)
- [Withholding declaration](https://www.ato.gov.au/WorkArea/DownloadAsset.aspx?id=66553)
- [Medicare levy variation declaration](https://www.ato.gov.au/WorkArea/DownloadAsset.aspx?id=66552)

The following information may help you fill in these forms:

- **Volkis (employer) ABN:** 80 636 000 774
- **Employer's default super fund details**
  - **Name:** Australian Super
  - **Unique Superannuation Identifier (USI):** STA0100AU
  - **ABN:** 65 714 394 898

Once the forms are filled, you'll need to send them to your manager.

## Where to get help

Phew! That was a lot of information. Volkis is a never ending learning experience, and everyone needs help from time to time. A few places you can get that help are:

- This handbook! Use the search function at the top of the page and see if you can find the info you need.
- The _#general_ Slack channel is a great place to ask for help.
- Your buddy can probably answer lots of "process" type questions early on. They are a great resource; you should use them.
- Of course, **the founders are always available to chat in times of frustration, stress and anxiety whether it's personal or work related.**

We sincerely hope you have an amazing time at Volkis and can't wait to see the incredible things you'll do! 🎉
