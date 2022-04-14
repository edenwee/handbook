---
title: Workflow automations & integration
---

This page contains a list of automation used between software, triggers and actions they perform as well as any custom integrations.

| Trigger                                                                 | Systems involved                                   | Process                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Result                                                                                       |
| ----------------------------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Report Delivered** item checked                                       | Trello                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Move card to **Post-engagement**, set **Retest expiry date** to 3 months from now            |
| **Preparation** checklist completed                                     | Trello                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Card added to top of **Ready to go** list                                                    |
| Any item is checked                                                     | Trello, Slack                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Message displayed in Slack project channel showing the checked item                          |
| **Do project folder, Slack channel, schedule create (Auto)** is checked | Trello, Zapier, SharePoint, Slack, Resource Guru   | 1. Trello sends POST request to Zapier webhook<br> 2. Zapier authenticates to Graph API<br> 3. Batch request is prepared<br> 4. Batch request sent to Graph API<br> 5. Project folder template created in SharePoint<br> 6. Slack channel created<br> 7. Topic set in channel<br> 8. Trello bot added to channel<br> 9. Trello card link written in channel<br> 10. Client created/retrieved in Resource Guru<br> 11. New Project created in Resource Guru<br> 12. Zapier gets Slack channel permalink<br> 13. Slack permalink added to Trello card | New SharePoint channel created, new Slack channel created, new Resource Guru project created |
| User is added/removed to/from Trello card                               | Trello, Zapier, SharePoint, Slack                  | 1. Trello sends POST request to Zapier webhook<br> 2. User is permissions on the relevant SharePoint folder is added/removed.<br> 3. If removing, stop here<br> 4. Zapier gets list of Channel IDs and Names from Slack<br> 5. Zapier converts Channel Name to ID<br> 6. Find Slack user ID from email<br> 7. Invite user to Slack channel                                                                                                                                                                                                          | User gets/loses write perms on project folder and added to Slack channel (but never removed) |
| Proposal is viewed for first time                                       | Qwilr, Slack                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Slack message sent to **#general**                                                           |
| Proposal accepted                                                       | Qwilr, Zapier, Slack, Trello, Pipedrive, MailChimp | 1. Slack message sent to **#general**<br> 2. Get Pipedrive Op & Client<br> 3. Generate unique Project ID<br> 4. Update Project ID, value, Proposal URL & close Op<br> 5. Trello card created with Project ID added<br> 6. Checklists Pre/Post engagement added to card<br> 7. Add signer to MailChimp if they opt in                                                                                                                                                                                                                                | New message in Slack. Pipedrive closed with updated info. New project card in Trello         |
| **Volkis RR Template** master branch changed                            | Gitlab, Zapier                                     | 1. CI/CD Sends relevant files to Zapier<br> 2. Zapier adds/updates files to Storage                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Updated template files in Storage by Zapier                                                  |
| **Generate proposal in Qwilr** button is pressed                        | Pipedrive, Hit the Pipe, Zapier, Qwilr             | 1. Pipedrive directs user to a URL in Hit the Pipe<br> 2. Hit the Pipe gets Deal data from Pipedrive<br> 3. Hit the Pipe sends Deal data to Zapier webhook<br> 4. Zapier creates a new proposal in Qwilr, autofilling some fields<br> 5. When finished, Zapier sends a callback request to Hit the Pipe with the new Qwilr project ID<br> 6. Hit the Pipe adds Qwilr proposal URL to Deal<br> 7. User redirected to new proposal URL                                                                                                                | New proposal made, user redirected to proposal page, Pipedrive updated with Proposal URL     |