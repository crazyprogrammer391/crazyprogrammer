const snippetList = [
    {
        url: "https://www.barrons.com/articles/facebook-to-hire-10-000-people-build-metaverse-51634557309",
        date: "October 19, 2021",
        linkTitle: "Facebook to Hire 10,000 People to Build Its ‘Metaverse.’ What That Means.",
        key: 50
    },
    {
        url: "https://www.businessinsider.com/facebook-metaverse-jack-dorsey-criticizes-as-dystopian-mark-zuckerberg-2021-10",
        date: "October 19, 2021",
        linkTitle: "Jack Dorsey mocks Mark Zuckerberg's metaverse plan, saying it's dystopian",
        key: 49
    },
    {
        url: "https://www.yahoo.com/news/facebook-reportedly-changing-name-because-024709210.html",
        date: "October 19, 2021",
        linkTitle: "Facebook is reportedly changing its name because it wants to be known for its 'metaverse' focus",
        key: 48
    },
    {
        url: "https://www.theverge.com/2021/10/19/22735612/facebook-change-company-name-metaverse",
        date: "October 19, 2021",
        linkTitle: "Facebook is planning to rebrand the company with a new name",
        key: 47
    },
    {
        url: "https://spacenews.com/industry-panel-u-s-space-systems-need-protection-against-cyber-attacks/",
        date: "October 19, 2021",
        linkTitle: "Industry panel: U.S. space systems need protection against cyber attacks",
        key: 46
    },
    {
        url: "https://www.newsweek.com/us-tells-russia-return-crimea-ukraine-stop-cyber-attacks-america-allies-1640552",
        date: "19 October 2021",
        linkTitle: "U.S. Tells Russia to Return Crimea to Ukraine, Stop Cyber Attacks on America and Allies",
        key: 45
    },
    {
        url: "https://www.zdnet.com/article/twitter-accounts-linked-to-cyberattacks-against-researchers-suspended/",
        date: "19 October 2021",
        linkTitle: "Twitter accounts linked to cyberattacks against security researchers suspended",
        key: 44
    },
    {
        url: "https://www.jpost.com/breaking-news/cyberattack-attempts-towards-israeli-hospitals-thwarted-govt-682221",
        date: "17 October 2021",
        linkTitle: "72% increase in cyberattacks against healthcare sector over the weekend",
        key: 43
    },
    {
        url: "https://finance.yahoo.com/news/what-the-metaverse-is-and-why-it-matters-to-you-090642725.html",
        date: "31 August 2021",
        linkTitle: "What the Metaverse is and why it matters to you",
        key: 42,
        tags: [
            {
                1: "Mark Zuckerberg",
                2: "Facebook",
                3: "metaverse",
                4: "virtual reality",
                5: "augmented reality"
            }
        ]
    },
    {
        url: "https://newrepublic.com/article/163461/metaverse-horizon-workrooms-facebook-soulless-virtual-reality",
        date: "31 August 2021",
        linkTitle: "The “Metaverse” Is Facebook’s Soulless Virtual Vision for the Future of Life and Work",
        key: 41
    },
    {
        url: "https://www.washingtonpost.com/technology/2021/08/30/what-is-the-metaverse/",
        date: "31 August 2021",
        linkTitle: "Big Tech wants to build the ‘metaverse.’ What on Earth does that mean?",
        key: 40
    },
    {
        url: "https://gizmodo.com/tiktok-s-owner-is-taking-one-small-step-into-the-metave-1847583359",
        date: "31 August 2021",
        linkTitle: "TikTok’s Owner Is Taking One Small Step Into the Metaverse",
        key: 39
    },
    {
        url: "https://www.bloomberg.com/news/articles/2021-08-17/waymo-s-self-driving-cars-are-99-of-the-way-there-the-last-1-is-the-hardest",
        date: "30 August 2021",
        linkTitle: "Waymo Is 99% of the Way to Self-Driving Cars. The Last 1% Is the Hardest",
        key: 1
    },
    {
        url: "https://www.fastcompany.com/90668859/tesla-autopilot-investigation-self-driving-cars-future",
        date: "30 August 2021",
        linkTitle: "What the Tesla Autopilot investigation means for the future of self-driving cars",
        key: 2
    },
    {
        url: "https://www.cnn.com/2021/08/27/cars/toyota-self-driving-vehicle-paralympics-accident/index.html",
        date: "30 August 2021",
        linkTitle: "Toyota suspends use of self-driving vehicle in Olympic Village after collision with Paralympic athlete",
        key: 3
    },
    {
        url: "https://www.qsrmagazine.com/outside-insights/how-ai-can-solve-fast-food-labor-problems",
        date: "30 August 2021",
        linkTitle: "How AI Can Solve Fast-Food Labor Problems",
        key: 4
    },
    {
        url: "https://thisweekinworcester.com/belsito-tori-ai-voice-tech-worcester/",
        date: "30 August 2021",
        linkTitle: "Worcester Native Launches ‘Tori’, the World’s First Drive-Thru Voice Ordering AI",
        key: 5
    },
    {
        url: "https://www.today.com/food/may-i-take-your-order-future-ai-fast-food-drive-t210791",
        date: "30 August 2021",
        linkTitle: "May I take your order? How AI is changing fast-food drive-thrus",
        key: 6
    },
    {
        url: "https://www.electronicsforu.com/technology-trends/tech-focus/ai-aviation-fly-without-human-pilot",
        date: "30 August 2021",
        linkTitle: "AI In Aviation: Are You Ready To Fly Without A Human Pilot?",
        key: 7
    },
    {
        url: "https://simpleflying.com/airbus-boeing-artificial-intelligence-flight/",
        date: "30 August 2021",
        linkTitle: "How Airbus And Boeing Are Using Artificial Intelligence To Advance Autonomous Flight",
        key: 8
    },
    {
        url: "https://www.shrm.org/resourcesandtools/hr-topics/technology/pages/can-robots-replace-humans-just-ask-elon-musk.aspx",
        date: "30 August 2021",
        linkTitle: "Can Robots Replace Humans? Just Ask Elon Musk",
        key: 9
    },
    {
        url: "https://time.com/5876604/machines-jobs-coronavirus/",
        date: "30 August 2021",
        linkTitle: "Millions of Americans Have Lost Jobs in the Pandemic—And Robots and AI Are Replacing Them Faster Than Ever",
        key: 10
    },
    {
        url: "https://economictimes.indiatimes.com/jobs/the-jobs-they-are-a-going-robots-are-replacing-humans-and-why-the-future-of-jobs-is-bleak/replacing-humans/slideshow/78886747.cms",
        date: "30 August 2021",
        linkTitle: "The Jobs They Are a-Going: Robots are replacing humans and why the future of jobs is bleak",
        key: 11
    },
    {
        url: "https://www.wired.com/2000/04/joy-2/",
        date: "30 August 2021",
        linkTitle: "Why the Future Doesn't Need Us",
        key: 12
    },
    {
        url: "https://www.mckinsey.com/featured-insights/future-of-work/ai-automation-and-the-future-of-work-ten-things-to-solve-for",
        date: "30 August 2021",
        linkTitle: "AI, automation, and the future of work: Ten things to solve for",
        key: 13
    },
    {
        url: "https://venturebeat.com/2021/08/26/zendesk-acquires-customer-service-automation-startup-cleverly-ai/",
        date: "30 August 2021",
        linkTitle: "Zendesk acquires customer service automation startup Cleverly.ai",
        key: 14
    },
    {
        url: "https://www.computerworld.com/article/3630634/microsoft-plots-price-hikes-for-most-office-microsoft-365-subscriptions.html",
        date: "30 August 2021",
        linkTitle: "Microsoft Plans Price Hikes for Office 365",
        key: 15
    },
    {
        url: "https://www.cio.com/article/3510644/crackpot-technologies-that-might-just-work.html",
        date: "30 August 2021",
        linkTitle: "6 Crackpot Technologies that might transform IT",
        key: 16
    },
    {
        url: "https://www.morewithvpro.com/What-Do-PCs-Have-to-Do-with-Sustainability-Plenty?asrc=SS_CW_NEWS",
        date: "30 August 2021",
        linkTitle: "70% Tech Execs Say 'Sustainability' is Top 10 Priority",
        key: 17
    },
    {
        url: "https://www.computerweekly.com/news/252505889/Tech-giants-commit-to-Bidens-cyber-security-action-plan",
        date: "30 August 2021",
        linkTitle: "Tech Giants to Back Biden Cybersecurity Plan",
        key: 18
    },
    {
        url: "https://www.cnbc.com/2021/08/26/ford-to-cut-f-150-pickup-truck-production-due-to-chip-shortage.html",
        date: "30 August 2021",
        linkTitle: "Ford to Cut F-150 pickup truck production due to chip shortage",
        key: 19
    },
    {
        url: "https://www.barrons.com/articles/chip-shortage-stocks-economy-51629507891",
        date: "30 August 2021",
        linkTitle: "The Chip Shortage Looks Like the Oil Shortage of the 1970s",
        key: 20
    },
    {
        url: "https://www.cio.com/article/3628333/the-future-of-payments-is-invisible.html",
        date: "30 August 2021",
        linkTitle: "The Future of Payments is Invisible",
        key: 21
    },
    {
        url: "https://www.networkworld.com/article/3629495/are-you-ready-for-the-3g-sunset.html",
        date: "30 August 2021",
        linkTitle: "Are you ready for the 3G sunset?",
        key: 22
    },
    {
        url: "https://www.techradar.com/news/china-now-has-half-a-billion-5g-customers",
        date: "30 August 2021",
        linkTitle: "China now has half a billion 5G customers",
        key: 23
    },
    {
        url: "https://www.techradar.com/news/google-facebook-join-forces-on-new-submarine-internet-cable",
        date: "30 August 2021",
        linkTitle: "Google, Facebook join forces on new submarine internet cable",
        key: 24
    },
    {
        url: "https://www.techradar.com/news/5g-connections-to-top-three-billion-by-2026",
        date: "30 August 2021",
        linkTitle: "5G connections to top three billion by 2026",
        key: 25
    },
    {
        url: "https://threatpost.com/azure-cosmos-db-bug-cloud/168986/",
        date: "30 August 2021",
        linkTitle: "Critical Azure Cosmos DB Bug Allows Full Cloud Account Takeover",
        key: 26
    },
    {
        url: "https://threatpost.com/man-hacked-icloud/168923/",
        date: "30 August 2021",
        linkTitle: "California Man Hacked iCloud Accounts to Steal Nude Photos",
        key: 27
    },
    {
        url: "https://threatpost.com/breaking-down-joe-bidens-10b-cybersecurity-down-payment/163304/",
        date: "30 August 2021",
        linkTitle: "Breaking Down Joe Biden’s $10B Cybersecurity ‘Down Payment’",
        key: 28
    },
    {
        url: "https://thehackernews.com/2021/08/microsoft-google-to-invest-30-billion.html",
        date: "30 August 2021",
        linkTitle: "Microsoft, Google to Invest $30 Billion in Cybersecurity Over Next 5 Years",
        key: 29
    },
    {
        url: "https://www.cnet.com/tech/services-and-software/apple-google-amazon-ceos-head-to-white-house-for-cybersecurity-meeting/",
        date: "30 August 2021",
        linkTitle: "Google, Amazon, Microsoft unveil massive cybersecurity initiatives after White House meeting",
        key: 30
    },
    {
        url: "https://www.boston25news.com/news/local/boston-public-library-experiencing-systemwide-technical-outage-due-cybersecurity-attack/ZGKP6AU3WVFUFGSGX5L244BLRY/",
        date: "30 August 2021",
        linkTitle: "Boston Public Library experiencing systemwide technical outage due to cybersecurity attack",
        key: 31
    },
    {
        url: "https://www.securityweek.com/amazon-offer-free-cybersecurity-training-materials-mfa-devices?&web_view=true",
        date: "30 August 2021",
        linkTitle: "Amazon to Offer Free Cybersecurity Training Materials, MFA Devices",
        key: 32
    },
    {
        url: "https://therecord.media/academics-bypass-pins-for-mastercard-and-maestro-contactless-payments/?web_view=true",
        date: "30 August 2021",
        linkTitle: "Academics bypass PINs for Mastercard and Maestro contactless payments",
        key: 33
    },
    {
        url: "https://therecord.media/cloudflare-says-it-mitigated-a-record-breaking-17-2m-rps-ddos-attack/",
        date: "30 August 2021",
        linkTitle: "Cloudflare says it mitigated a record-breaking 17.2M rps DDoS attack",
        key: 34
    },
    {
        url: "https://therecord.media/what-did-the-white-house-and-u-s-tech-giants-pledge-to-do-on-cyber-exactly/",
        date: "30 August 2021",
        linkTitle: "What did the White House and U.S. tech giants pledge to do on cyber, exactly?",
        key: 35
    },
    {
        url: "https://therecord.media/scammers-steal-2-3-million-from-small-us-town/",
        date: "30 August 2021",
        linkTitle: "Scammers steal $2.3 million from small US town",
        key: 36
    },
    {
        url: "https://www.infosecurity-magazine.com/news/how-feds-use-frt/?&web_view=true",
        date: "",
        linkTitle: "Federal Agencies Mostly Use Facial Recognition Tech for Digital Access",
        key: 37
    },
    {
        url: "https://www.npr.org/2021/08/26/1013501080/chinas-microsoft-hack-may-have-had-a-bigger-purpose-than-just-spying?&web_view=true",
        date: "30 August 2021",
        linkTitle: "China's Microsoft Hack May Have Had A Bigger Purpose Than Just Spying",
        key: 38
    },
]
export default snippetList