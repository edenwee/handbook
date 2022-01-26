---
title: Setting up a testing host in AWS
---

## Why?

When you're performing a project like a penetration test, you might want to use a cloud VPS for multiple reasons. Some of the common reasons are:

- You are required to use a whitelisted IP address
- You have the need... The need for (internet) speed!
- You need an externally available host to listen for incoming connections

## Whitelisting IP addresses

Volkis has an official IP address that clients can whitelist. It always resolves from `out.volk.is`. Here it is in our Sandbox AWS environment...

![Whitelisted IP](/assets/img/whitelist-ip.png)

(Like it says, don't delete this IP after you're done testing.)

If you want clients to whitelist an IP address for testing purposes, you should strongly prefer giving them this one rather than your home/office IP address. This is done for consistency and also for security. Your home IP might rotate and be given to someone else while the client might forget to remove it from the whitelist.

The same applies for when the client asks you to test from a predefined IP addresses.

## Creating a testing instance

The Sandbox AWS environment is there specifically for this purpose. Feel free to play with what you need in here. In this guide, we'll just focus on EC2. Let's get started...

1. [Create your EC2 instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html) - size is up to you, but limit it for what you think you'll need.
2. Assign the whitelisted IP address to this instance.<br>![Assigning IP address 1](/assets/img/assign-ip1.png)
3. Choose the instance you just created.<br>![Assigning IP address 2](/assets/img/assign-ip2.png)

4. SSH to your new instance! From here you can install whatever tools you need. ⚠️ Remember to remove this instance once you're finished with it, but leave the IP (it will auto disassociate).

## Tunnelling local tools to your testing host using OpenVPN

A lot of the time you might not want to install everything you need on the testing host. Instead, to save time, you can use OpenVPN to tunnel your traffic through the whitelisted IP address. Installing and using OpenVPN is super simple and we'll go over that process now.

1. (SSH into the box if you haven't already.)
2. Run this command: `wget https://git.io/vpn -O openvpn-install.sh`
3. Then run this command to start installation: `sudo bash openvpn-install.sh`
4. Follow the prompts to configure it how you like. Here's an example config input. You can type anything you want where the star is, just something memorable. Your hacker handle is sensible here. 😉 <br>![Install OpenVPN 1](/assets/img/openvpn-install.png)
5. It will take some time to install everything, so sit back and relax.
6. Once it's done you can copy the newly created `.ovpn` file to your local system (check the end of the output for its location).
7. ⚠️ Don't forget to [allow your OpenVPN port in the AWS security group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html#adding-security-group-rule) linked to your instance.

Next we're going to use [Pritunl client](https://client.pritunl.com/) to import the config, but you can use any client that supports OpenVPN.

1. Open up Pritunl client and click on Import Profile.<br>![Import ovpn profile](/assets/img/pritunl-client1.png)
2. Choose the `.ovpn` file you copied earlier.
3. Click on the burger menu and hit connect. Hopefully in a few seconds, you should be connected to the VPN. Now all your traffic should come out of the whitelisted IP address.
4. To make sure it is, you can try running this command: `curl ifconfig.me/ip`<br>![Outbound IP](/assets/img/outbound-ip.png)

Once you're done testing, remember to delete the host and everything associated with it like:

- The instance
- Security groups
- Keypairs
- ⚠️ **But NOT the whitelisted IP address** - if you're using other IP addresses, deleting those is fine
