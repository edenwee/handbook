---
Title: Personal Security
---

This page has tips, tricks and guidelines for your personal security. It is everyone's responsibility to stay safe and secure and to help each other in this area. After all, that's what Volkis is all about!

## Laptop security

Your laptop is your life. Guard it well. Here's a number of things you can do to ensure you've secured your laptop to a minimum standard.

### Strong login passphrase

It should come as no surprise to anyone that you need to protect your laptop from someone just guessing your password. Instead of a password, use a passphrase. Think of a sentence or 4-5 words that you can use. Where you can, switch up the cases and add some numbers and symbols. Remember, space is a symbol! Another trick is to use non-english characters if you speak a second language.

### Full disk encryption

In the unlikely case that your laptop is misplaced or stolen, the protection of your data (and our clients') is paramount. There are various ways to implement this, depending on your operating system.

Ensuring that a password or PIN is required to decrypt your drive is essential for protecting against (unlikely) attacks that attempt to [retrieve the decryption key from the TPM](https://nakedsecurity.sophos.com/2019/03/21/researcher-finds-new-way-to-sniff-windows-bitlocker-encryption-keys/).

#### Windows (BitLocker)

BitLocker can be set up by [following this guide from Microsoft](https://support.microsoft.com/en-au/help/4028713/windows-10-turn-on-device-encryption). Additionally, it is highly recommended to set a [pre-boot password or PIN](https://docs.microsoft.com/en-us/windows/security/information-protection/bitlocker/bitlocker-countermeasures) to ensure the highest level of security. Make sure the password is different from your login!

Keep a copy of your recovery key somewhere safe! If you change any hardware (drives, RAM) you'll be required to input the key before booting. A good tactic is to put it in an envelope next to where you keep your passport.

#### Linux (LUKS)

LUKS can be set up during OS install or by using `cryptsetup`. A guide can be [found here](https://wiki.archlinux.org/index.php/Dm-crypt/Device_encryption). Again, use a strong passphrase that isn't your login passphrase.

#### MacOS (FileVault)

FileVault requires your login passphrase to decrypt, so make sure it's a strong one! It can be turned on by [following this guide](https://support.apple.com/en-us/HT204837). If possible, link it to your Apple ID so you're able to recover your disk should you forget your login.

### BIOS password

You might think it's unnecessary to set this if you've got a strong login password and FDE, but it's simply another layer of protection that won't impact your day-to-day workflow.

You'll have to refer to your manufacturer for how to set up a BIOS password, but generally you'll simply enter your BIOS (reboot and spam F1, F2, F10, Delete, or Esc) and hunt around for the Security tab where you can set it. For Macs, [follow this guide](https://support.apple.com/en-au/HT204455). As always, use a different password from your login and FDE.

## Software security

Now that you're safe from someone stealing your data when they steal your laptop, let's protect that data during your day-to-day activities.

### Password management

You're going to have passwords for things. Probably 100s of them. How can you keep them safe? By using a password manager, of course!

Let's talk about some password managers and see which one is right for you.

#### LastPass (recommended)

[LastPass](https://www.lastpass.com/) is a freemium online password manager. It is optimised for user experience, meaning that it's very easy to use. LastPass uses a ["zero-knowledge security model"](https://www.lastpass.com/security/what-if-lastpass-gets-hacked). Apparently, even if LastPass gets hacked, your password database should be safe. However, [there have been serious issues](https://en.wikipedia.org/wiki/LastPass#2015_security_breach).

LastPass supports multi-factor authentication, but the more secure versions (such as hardware tokens) are reserved only for premium users. (You can expense the cost of LastPass if you wish to use it.)

Installed as a browser extension, LastPass will automatically fill in logins for websites you have credentials for, and will automatically add credentials as you create them (such as during signup). It features a handy key generator that will automatically appear in a "new password" field, allowing you to have strong, random passwords without putting in any effort.

LastPass's ability to share passwords with other LastPass users is why we recommend it for Volkis related things.

#### KeePass

[KeePass](https://keepass.info/) is an application that stores passwords. It uses encryption algorithms that can be configured to increase your security at the cost of performance. For instance, using Argon2, KeePass can increase the number of iterations and the memory requirement for logging in. This helps protect your KeePass database from brute-force attacks.

KeePass has a number of multi-factor options. You can generate a key file that is required to be present for the database to open when you input your password. This should be stored on a USB and not on the same filesystem as your database. If you have a YubiKey, you can even use that in combination with the key file and password.

The main use case is opening the database and copy+pasting your password. This can be cumbersome, so browser extensions exist to automatically fill in password fields (similar to LastPass and other browser extensions).

KeePass has had [security issues](https://keepass.info/help/kb/sec_issues.html) in the past, but the fact that it is a local file rather than a cloud service limits its attack surface.

#### Native Browser

All major browsers have password manager functionality built into them. Should you use them? **No.** All of them allow you to retrieve the passwords in plaintext _if you have access to the browser_. So if you get hacked, you've probably lost those stored accounts too.

### Multi-factor authentication

You should **always** enable multi-factor authentication where you can. Auth0 have a [great writeup](https://auth0.com/learn/two-factor-authentication/) comparing the pros and cons of each method.

If you're using One Time Passwords (OTPs) for MFA, always prefer a software token over SMS based. [Authy]() is a nice app for both Android and iPhones where you can store all your MFA tokens and gives your option of backing them up. I recommend backing them up with a strong password. **Make sure to keep a copy of all your scratch codes** in case your phone dies or gets stolen. Check out our article on [Trust Hierarchies](https://www.volkis.com.au/blog/trust-hierarchies-in-your-everyday-life/) and what can happen if you lose your MFA codes.

### Patching

Yep. Its tedious. Unfortunately its also very important. Most software will update itself regularly; make sure you don't ignore that message. Others you'll need to update manually. Check all your software every month to see that its up to date. To make your life easier, uninstall things you don't use often. Sometimes its just simpler to reinstall an app when you need it.

### Antivirus

Windows Defender has made great strides the last few years and can actually give our pentests a hard time. On Windows, it's really all you need.

Outside of enterprise solutions, Linux and Mac antivirus is generally signature-based and terrible. The best antivirus is common sense.

### Office Macros

[Disable them](https://www.cisecurity.org/white-papers/intel-insight-how-to-disable-macros/). We don't use macros at all in Volkis and probably never will due to the security risk.

## Data protection

Even if your software security is on point, you can't protect yourself from everything. 0-days are called 0-days for a reason. So, let's make sure your data is safe even if you get popped.

### Keep a minimal host operating system and use virtual machines

This is an easy way to segregate your data. For instance, this structure will ensure corporate data can't be accessed by your testing machine:

- **Barebones host:** The host running the virtualisation solution. Minimal data and applications should be stored on this.
- **Corporate VM:** Any applications and data relating to the business should be stored in here. For instance, this could be a Windows guest that contains any Azure AD integrations, as well as Office apps.
- **Testing VM(s):** These machines run software that is used in malware, so it's always a good idea to have these running in a VM separate from any sensitive data. You can even snapshot your VM before a test and restore to ensure no sensitive data remains on it.
- **Shared folder**: Any information you may need to share across your host and guests should be stored in a shared folder. Ensure this folder is cleaned regularly.

If you're paranoid, make sure to enable side-channel attack protections in your virtualisation solution. If your solution doesn't include this, disable hyperthreading if you're running an Intel processor. The risk of this being exploited is very low, so it's up to you to make the security vs performance tradeoff.

### Protect client data

As a security consultant, you not only need to protect your data, but also your clients'. This means you should ensure any client data is stored securely. Immediately after an engagement and relevant files are moved to the company's secure file storage, remove all files pertaining to the engagement from your computer. Don't forget to empty that Recycle Bin!

As a general rule, **do not store client data anywhere other than your laptop**.

### Using VPNs

Whenever you're away from home, like at a cafe, airport, or hotel, and using their "free" wireless you're risking your network data being sniffed (hence the quotes in "free"). In these scenarios you should use a VPN to protect your traffic.

The first rule of VPN is never use a free one. With that said, [NordVPN](https://nordvpn.com/), [ProtonVPN](https://protonvpn.com/) and [Airvpn](https://airvpn.org/) are three good picks.

If you're ever on an untrusted network on either your laptop or phone, fire up that VPN! The connection might be denied if the network you're on is very restricted. In that case, it's safest to tether to your phone for internet.
