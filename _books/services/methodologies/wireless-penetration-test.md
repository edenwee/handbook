---
title: Wireless penetration test methodology
---

# Wireless penetration test

Volkis will perform wireless penetration testing on the wireless infrastructure of the organisation. This will involve identification and enumeration of the wireless networks, capturing the authentication handshakes of WEP and WPA-PSK networks, impersonating WPA-Enterprise networks and checking for network segmentation. The goal of the wireless penetration test is to gain access to the internal network through wireless infrastructure.

## Identification and enumeration

The consultant will use wireless capture tools to analyse each SSID in scope. The networks will be identified and enumerated, capturing the type of authentication and encryption used for each network be it WEP, WPA-PSK, WPA2-PSK, WPA-Enterprise or 802.1x. Signal strength between the consultant's machine, the access points and other wireless clients is also considered to assist in further attacks.

Identification of potentially vulnerable protocols such as WPS is performed at this point and noted for further exploitation attempts.

## Capturing handshakes

In the case of networks protected with WEP or WPA(2)-PSK, the consultant will capture the initial handshakes of users connecting to the network. This is done by sending deauthentication packets to the connected wireless client. Since devices will automatically reconnect, this is usually transparent to the user. If no wireless client can be found connected the access point the consultant will attempt the PMKID attack to gather data that can be used to crack the passphrase.

For WEP networks, the consultant will then crack the encryption key used in the handshake to gain access to the network. For WPA-PSK networks, the consultant will use brute forcing techniques against the handshake to attempt to crack the pre-shared key. If the key cannot be cracked within a reasonable amount of time, the consultant may ask for the passphrase so that further checks can be performed while on the wireless network.

## Evil twin attack

WPA-Enterprise (aka. WPA-EAP) uses multiple phases of authentication depending on the configuration. Most commonly, PEAP is used with MSCHAPv2. The consultant will create a fake access point that impersonates the real one. It may be possible to trick client devices into connecting to the fake access point instead of the real one to capture authentication handshakes for offline cracking. Since the incoming connections also require an identity, this could possibly be a method of enumerating domain users.

The consultant will assess if a downgrade attack is possible by attempting to negotiate to a less secure authentication scheme. If possible, the attack may be abused to increase the chances of gaining access to the network.

If user devices are successfully tricked into connecting to the fake access point, the consultant may use this Man-in-the-Middle position to perform attacks, such as NTLM relay, to gain access.

## Network pivoting

Once on the wireless network, the consultant will attempt to gain access to the internal network. If the internal network is segmented, layer 2 network attacks and other exploits will be used to try and gain additional access. If successful and an internal penetration test is also performed during the engagement, the consultant will combine the exploit path for a full picture of potential attacks.

## Client isolation

On wireless networks that are likely to host untrusted users, such as on guest networks, the consultant will check for access to other wireless client devices to ensure attackers cannot exploit the organisation's guests.
