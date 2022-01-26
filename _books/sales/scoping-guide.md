---
title: Scoping guide
---

How long do we need to complete a project? How do we figure that out? Do we just wing it? "There's gotta be a better way! _(Infomercial voice)_".

In this guide we will discuss how we perform scoping and the questions you should ask potential clients to get a better idea of how large a project is.

**Supporting Docs:**

- [Scoping Questionnaire Template](/assets/doc/Scoping Questionnaire Template.docx)

## Before we get started

Some important things to remember during scoping:

1. **It is not an exact science.** A lot of the time we are estimating based on past experience and the limited data given to us by clients.
2. Given point 1, **it is okay to under/over-scope**. Mistakes will happen; no need to stress about it. Learn and move on.
3. (Almost) all service are **scoped as a fixed-cost for a deliverable**. This means that clients pay us an agreed amount for the result, regardless of how long it takes. In all communications with clients it is important to emphasise that we speak in terms of results rather than days of effort. (There is a caveat to this point in the form of [Time-limited projects](#time-limited-projects))
4. In practice, we **convert an estimate into a fixed cost**. For example, an external pentest that might take between 3 to 5 days is given a fixed cost of 4 days' work.
5. It is **easier to get information from a client over a 30-minute scoping call** than from a scoping document. Generally, with our company culture, we prefer in-person communication, but it's also just easier to ask direct questions about the scope and the whys.
6. **Scoping should be easy for the client.** Scoping questions might be unusual to them. Try to make the experience as easy as possible.
7. The time estimate should include the time it takes to **perform the actual work, write the report and perform QA**.

With these points in mind, let's continue.

## The why

Typically, the conversation might start with a client asking for a very specific piece of work: _"I need an external pentest done."_ That's a great starting point, but we need to take a few steps back. **Why** do they need an external pentest? Dig deep here. Answers like, _"To find vulnerabilities"_ aren't useful so you'll have to be more pointed. Is there an audit requirement? Are they worried customer data will be breached? Do they have a duty of care? Is there an up-time requirement? Different businesses worry about security for different reasons, and its important to get to the core of those reasons.

Understanding the reasons will help immensely when recommending what they should do with their security. Maybe an external pentest is the right way to go, but maybe a security review would be better, or both.

## Background questions

Some other things you might want to ask:

1. **Timeframes:** When do they need the work to start? Are there any deadlines?
2. **Budget:** It's totally fine if the client doesn't have one and doesn't want to share this information, but knowing the budget helps us make better recommendations and get them the best bang for buck.
3. **Constraints:** Is there anything that might impact our ability to do the work?
4. **Communication:** Do they prefer email or phone calls? Do they use Slack for comms (if so, we can connect workspaces)?

## Penetration test scoping

Now that you know the client's requirements and why they need help with infosec, we can ask specific questions about the intended scope.

_(If you haven't yet, now is a good point to pause and check out our [Service Catalogue](/services/service-catalogue/) before continuing)_

### External Penetration Test

This one is fairly easy. We use raw numbers for this, so we need to know:

1. How many external IP addresses does the client own (total)?
2. How many of those are live (hosting at least 1 service)?

One thing that is important to note: External pentests **do** cover off-the-shelf applications such as Outlook Web Access, VPN login pages, file sharing etc, but **do not** cover custom web apps built just for the client. Use the [Web App scoping guide](#web-app-penetration-test) for those.

### Internal Penetration Test

Internals are much the same. We use raw numbers to determine the size of the scope:

1. How many servers are there (both physical and virtual)?
2. How many networking devices are there (routers, switches, access points etc...)?
3. How many user devices are there (workstations, laptops)?
4. How many IoT devices are there (cameras, phones, printers, anything else with an IP address)?
5. Is there a Windows Domain (Active Directory)?
6. What physical location are we testing from?

### Wireless Penetration Test

Wireless is usually offered as part of the internal pentest. We need to know:

1. How many physical locations are we testing from? Where are they?
2. For each location, how many wireless networks (SSIDs) are there (e.g. corporate & guest)?

### Web App Penetration Test

Due to the complexity of web applications, they can be incredibly hard to scope. Instead of using raw numbers like in the previous ones, we try to gauge how "complex" a web app is. Typically, the more functions, the more complex the app is. If some functionality affects other functionality, then complexity increases again.

To demonstrate, here are some examples:

#### Large Application

A large application is one that has hundreds of features/functions, and where functions can interrelated to one another. It may have multiple authentication paths, read/write functionality to multiple data sets, have upload functionality or a complex flow. For example, a CMS such as Pipedrive is considered a large application.

#### Medium Application

A medium application has tens of functions (10-100). These functions are complex and may interrelate to one another. For example, a basic eCommerce application with products, a shopping cart and payment functionality is considered a medium application.

#### Small Application

A small application has few functions (less than 10) and are simple in nature. For example, a mostly static website with a search function and a contact form would be considered small.

#### Authenticated vs. Unauthenticated

Authenticated vs. Unauthenticated is all about the perspective. How many functions can be seen/accessed from the given perspective. The perspective will guide the visible size of the application. For example, a CMS application as seen from an Authenticated perspective would have hundreds of functions, making it a Large Application. Whereas, the same application from an Unauthenticated perspective would have only the login and password reset functions visible, making it a Small Application.

It is best to have a consultant look and use the app themselves, so we need to ask the client for the following:

1. The URL that points to the web app;
2. Username and password to login with (only needed if performing Authenticated testing).

If for some reason, access cannot be given to a consultant, a demo of the app through video call can be organised.

### Mobile App Penetration Test

Mobile apps are just as complex to scope as web apps. As such, they should also be scoped by giving a consultant access to the app by asking:

1. Is this app on Android, iOS or both?
2. How can we get access to app (e.g. AppStore, TestFlight, custom apk file)?
3. Username and password to login with.

### Phishing Campaign

Phishing is best discussed with the client over a call. However, some preliminary questions are:

1. How many users are we targeting?
2. How many campaigns (rounds) are we performing?

## Other services

Any service not covered above should have a scoping call. Since infosec is full of jargon and mixed terminology, there's just too much room for confusion without a scoping call.

## Time-limited Projects

Although we prefer full-scope projects (whose end is dictated by a result), we do offer an option for time-boxing a project.

In a time-limited (or time-boxed) project, we perform whatever work we can in a given timeframe. In this scenario we cannot guarantee a satisfactory result or that we cover the entire scope, which is why its not ideal.

There are, however, circumstances in which a time-limited project is favourable; for example when the scope is not well-defined due to lack of information, or when there are time or budget constraints. In these cases, a scope still needs to be defined but can be time-limited to the following minimums:

|    Project type    | Minimum days needed |
| :----------------: | :-----------------: |
|  External pentest  |          2          |
|  Internal pentest  |          3          |
|  Web app pentest   |          2          |
| Mobile app pentest |          3          |

Other types cannot be time-boxed.

## Questions?

Security is a complicated problem, so if you have any questions, our consultants are always available to answer them or attend scoping calls with clients.

**Happy scoping!**
