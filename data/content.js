/*
 * ALL SITE CONTENT LIVES HERE.
 * Edit text, add questions, or change the plan without touching the layout code.
 * Fields marked "html" may contain simple HTML tags (<strong>, <em>, <br>).
 * Use backticks (`...`) for text so apostrophes and quotes are safe.
 */
window.APM_CONTENT = {
  meta: {
    candidate: `Utsaw Kumar`,
    college: `IIT Bhubaneswar`,
    role: `Google Associate Product Manager (APM), University Graduate, 2027 Start (India)`,
    defaultInterviewDate: `2026-12-08`,
    mockTarget: 8,
    caseTarget: 25
  },

  /* ------------------------------------------------------------------ */
  overview: {
    format: [
      { time: `~1 min`, title: `2-line intro`, body: `The interviewer introduces themselves and asks you to do the same. Keep it to two sentences: who you are and why you're here. Don't recite your resume; the case is what matters.` },
      { time: `~35 min`, title: `One main product case`, body: `A single open-ended prompt (for example, “design a watch for kids”). Expect follow-ups that push on your choices: why this user, what would you cut, how would Google make money, what if a competitor launches first. It's a conversation, not a presentation.` },
      { time: `~5 min`, title: `Your questions`, body: `You ask the interviewer questions. Have two or three ready that show curiosity about the PM role and the APM program, not things you could Google.` }
    ],
    skills: [
      {
        name: `Product Vision`,
        plain: `Can you imagine something new and worthwhile, and explain why it should exist?`,
        detail: `The interviewer wants to see you start from a real user need, think beyond the obvious incremental fix, and land on a product idea with a clear purpose. Ambition matters, but so does grounding: a bold idea with a believable first version beats a science-fiction pitch with no MVP.`,
        page: `vision`
      },
      {
        name: `Problem Space Understanding`,
        plain: `Do you deeply understand who has the problem, what exactly hurts, and why it hasn't been solved yet?`,
        detail: `This is where most candidates are weakest, because they rush to solutions. Strong candidates map the user journey, find specific pain points, rank them with reasons, and name the constraints (technical, social, regulatory, business) and stakeholders before they suggest anything.`,
        page: `problem`
      },
      {
        name: `Strategic Insight`,
        plain: `Do you understand why Google, specifically, should do this, and how it wins as a business?`,
        detail: `Expect questions on competitors, business model, go-to-market and risk. The interviewer wants you to connect the product to Google's mission and unfair advantages (Search, Android, Maps, YouTube, Gmail, Gemini, scale, data) and to think about how the market reacts.`,
        page: `strategy`
      }
    ],
    timeline: [
      { step: `Round 1`, detail: `45-minute video interview with a Google PM (this one).` },
      { step: `Results`, detail: `Up to 2 weeks after round 1.` },
      { step: `Next rounds`, detail: `5 more interviews over Google Meet. Your recruiter will confirm the format and focus of each.` },
      { step: `Total process`, detail: `About 8–12 weeks end to end. Keep practising between rounds; don't stop after round 1.` }
    ],
    reported: [
      { q: `Design an alarm clock for kids in the 2100s.`, id: `q1` },
      { q: `Design a new product for travellers that Google would launch.`, id: `q2` },
      { q: `Design a watch for kids.`, id: `q3` },
      { q: `What's your favourite product and how would you improve it?`, id: `q11` },
      { q: `How would you improve Google Maps?`, id: `q12` }
    ]
  },

  /* ------------------------------------------------------------------ */
  framework: {
    steps: [
      { start: 0, end: 3, name: `Clarify`, what: `Ask 2–3 questions (goal, region, limits). Then say “Give me 30 seconds to structure this.”`,
        tips: [`Ask about the goal (engagement? revenue? new users?), the market (India? global?) and constraints (platform, timeline).`, `If the interviewer says “your call”, make a reasonable assumption out loud and move on.`, `Never ask more than 3–4 questions; it reads as stalling.`],
        say: `“Before I dive in, a couple of quick questions. Is there a particular goal for Google here, say growth or engagement? Should I focus on India or globally? Any constraint on platform?… Great. Give me 30 seconds to structure this.”` },
      { start: 3, end: 6, name: `Why it matters`, what: `Mission, and why Google in particular.`,
        tips: [`Tie it to Google's mission: organise the world's information and make it universally accessible and useful.`, `Name 2–3 specific Google assets that give it a right to win here.`, `One minute is enough. This sets up your Strategic Insight story.`],
        say: `“This fits Google's mission because… and Google is unusually well placed because it already has X, Y and Z.”` },
      { start: 6, end: 12, name: `Users`, what: `List 3–4 user groups, pick one, justify it (size, pain, Google fit).`,
        tips: [`Segment by need or behaviour, not just demographics.`, `Say the selection criteria out loud before choosing: size, pain intensity, Google fit.`, `Pick ONE group. You can mention expansion later.`],
        say: `“I see four groups: A, B, C, D. I'll pick C because it's large, the pain is acute and frequent, and Google has a clear advantage serving them.”` },
      { start: 12, end: 18, name: `Problem space`, what: `User journey → pain points → rank the top 1–2 → constraints, stakeholders, trade-offs.`,
        tips: [`Walk through a day or a journey in that user's life, step by step.`, `List 4–5 pain points, then rank by frequency × severity × how poorly current solutions handle it.`, `Name constraints (cost, connectivity, regulation, privacy) and stakeholders (parents, partners, regulators).`],
        say: `“Let me walk through a typical journey… The pain points I see are… The top two, because they're frequent and badly served today, are…”` },
      { start: 18, end: 26, name: `Solutions`, what: `3 ideas (small, medium, bold). Pick one by impact, effort and Google's advantage. Describe the MVP.`,
        tips: [`Each idea should map to a ranked pain point.`, `Always include one bold, 10x idea. This is where Product Vision shows.`, `Compare quickly on impact, effort, Google advantage. Pick one and describe a concrete MVP: what a user sees and does.`],
        say: `“Three ideas: a small one…, a medium one…, and a bold one…. I'd pick the medium one because… The MVP would be…”` },
      { start: 26, end: 32, name: `Metrics and risks`, what: `One main success metric, 2 supporting metrics, one guardrail metric. Risks and how to reduce them.`,
        tips: [`North-star metric should reflect value delivered to the user, not vanity (avoid “downloads”).`, `Guardrail = something that must not get worse (privacy complaints, latency, battery, safety).`, `Name 2–3 risks with a mitigation for each.`],
        say: `“Success means… My main metric is…, supported by… and…. My guardrail is…. The biggest risks are…, which I'd reduce by…”` },
      { start: 32, end: 35, name: `Summary`, what: `Choice and reasoning in 30 seconds.`,
        tips: [`User → pain → solution → why Google → how we'll know. One breath each.`, `Mention one thing you'd do next (v2 or expansion).`, `Stop talking and let the interviewer respond.`],
        say: `“To summarise: for families travelling domestically, the biggest pain is disruption. I'd build… because Google uniquely has…. We'd measure… and watch…. Next, I'd expand to….”` }
    ],
    strategicNote: `Strategic Insight follow-ups can come at any point, not just at the end: “Who are the competitors?”, “How does Google make money from this?”, “How would you launch it?”, “What if a competitor launches first?”. Answer briefly, then steer back to where you were in the structure.`,
    example: {
      prompt: `Design a product for travellers that Google would launch.`,
      sections: [
        { step: `Clarify (0–3 min)`, html: `I'd open with two quick questions: <em>“Is there a specific goal, like growth for an existing product or a new revenue line?”</em> and <em>“Should I focus on a particular market?”</em> Suppose the interviewer says it's my call. I'd state my assumptions: <strong>I'll focus on domestic family travel within India, and the goal is to increase everyday, habitual use of Google Maps</strong>, so that Maps becomes the trip companion rather than something opened only for directions. Then: <em>“Give me 30 seconds to structure this.”</em>` },
        { step: `Why it matters (3–6 min)`, html: `Travel is one of the most information-heavy things people do: tickets, timings, routes, places, languages. Organising that information and making it useful is literally Google's mission. Domestic travel in India is huge and growing, with rail, flights, buses and road trips all expanding. Google is unusually well placed: <strong>Gmail</strong> already holds booking confirmations, <strong>Maps</strong> has live traffic, places and transit data, <strong>Gemini</strong> can reason and re-plan, and <strong>Translate/Lens</strong> handle language. No competitor has all four.` },
        { step: `Users (6–12 min)`, html: `I see four user groups:<br>1. <strong>Business travellers</strong>: frequent, time-sensitive, often company-booked.<br>2. <strong>Budget student travellers</strong>: price-sensitive, flexible, comfortable with apps.<br>3. <strong>Families on holiday</strong>: plan weeks ahead, travel in groups with kids and elders, many moving parts.<br>4. <strong>Older pilgrims</strong>: travel to religious sites, often less tech-confident, rely on others.<br><br>My criteria are size, pain intensity, and Google fit. I'll pick <strong>families on holiday</strong>: it's a large group; the planning pain is high because one person (often a parent) coordinates bookings, kids, elders and luggage; and the fit is strong because their bookings already land in Gmail and they use Maps on the trip. Business travellers are well served by corporate tools; students' pain is mainly price, which Google is less suited to fix.` },
        { step: `Problem space (12–18 min)`, html: `Let me walk through a family trip from Bhubaneswar to Jaipur. <strong>Before:</strong> the parent books trains on one app, a hotel on another, a cab on a third; confirmations scatter across Gmail and SMS. <strong>Travel day:</strong> the train is delayed by three hours; the parent has to manually check status, call the hotel, re-book the airport cab. <strong>At destination:</strong> signs and conversations are in a language they may not read fluently; the family wants to split up (kids rest, adults sightsee) but coordinating is chaotic.<br><br>Pain points:<br>• Bookings scattered across apps and inboxes<br>• Real-time disruptions (delays, crowds, closures) that break the plan<br>• Language barriers in other states<br>• Group coordination across family members<br><br>Ranking by frequency × severity × how badly today's tools handle it, the top two are <strong>scattered planning</strong> (every trip, every family) and <strong>disruptions</strong> (frequent, highly stressful, and the cascade of fixing things is entirely manual today). Constraints: patchy connectivity on trains, privacy around reading email, dependence on railway/airline data. Stakeholders: the family, hotels, cab partners, data partners such as railways and airlines, and Google's privacy and trust teams. Trade-off: the more automatic we make it, the more data access we need, so trust must be designed in.` },
        { step: `Solutions (18–26 min)`, html: `Three ideas, from small to bold:<br>1. <strong>Small: Shared trip board in Maps.</strong> Pulls bookings from Gmail into one timeline that the whole family can see.<br>2. <strong>Medium: Gemini trip assistant that re-plans on disruption.</strong> When the train is late, it notices, recalculates the day, and offers one-tap fixes: shift the cab pickup, notify the hotel of late check-in, move the dinner booking.<br>3. <strong>Bold: Camera-based travel companion.</strong> Point your phone at signs, menus or a station board and it translates and guides you in your own language, like a local friend in your pocket.<br><br>Comparing on impact, effort and Google advantage: (1) is low effort but modest impact and easy to copy; (3) is exciting but heavy, and solves the lower-ranked pain. <strong>I'd pick (2)</strong> because it attacks the most stressful pain and combines three assets no one else has together: Gmail (knows the trip), live Maps data (knows the delay and traffic), and Gemini (can re-plan). <br><br><strong>MVP:</strong> (a) with permission, detect an upcoming trip from Gmail booking confirmations and create a trip card in Maps; (b) monitor train/flight status; (c) on a delay, push a notification with a single re-planned itinerary and a one-tap “Apply” that updates the timeline and shares it with family members. No bookings changed automatically in v1, only suggestions and shareable updates. That keeps scope small and trust high.` },
        { step: `Metrics and risks (26–32 min)`, html: `<strong>Main success metric:</strong> number of trips completed with the feature active (it reflects real value across a whole journey, not just a download).<br><strong>Supporting:</strong> re-plan acceptance rate (are suggestions actually useful?) and 30-day retention of Maps usage among trip users (does it build the habit we wanted?).<br><strong>Guardrails:</strong> privacy complaints / opt-out rate, and rate of wrong suggestions reported.<br><br><strong>Risks and mitigations:</strong><br>• <em>Privacy</em>: reading Gmail feels invasive → make it strictly opt-in, show exactly what was detected, easy delete.<br>• <em>Trust if data is wrong</em>: one bad re-plan ruins credibility → show the source and confidence, never auto-act in v1.<br>• <em>Dependence on railway and airline data partners</em>: coverage gaps → start with routes/partners with reliable feeds, fall back to user-confirmed status.` },
        { step: `Summary (32–35 min)`, html: `“To summarise: I focused on families travelling within India, because they're a large group with high planning pain and strong Google fit. Their biggest problems are scattered bookings and disruptions. I'd build a Gemini trip assistant in Maps that detects trips from Gmail and re-plans in one tap when something goes wrong, which only Google can do because it combines Gmail, live Maps data and Gemini. I'd measure trips completed with the feature, backed by re-plan acceptance and retention, while guarding privacy. Next, I'd add the shared trip board and later the camera companion for language.”` }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  googleAdvantages: [
    { name: `Search`, body: `Understands intent at massive scale; knows what people are looking for, in real time, in many languages.` },
    { name: `Android`, body: `Runs on the large majority of smartphones in India, including low-cost devices. OS-level reach, notifications, offline capabilities.` },
    { name: `Maps`, body: `Places, live traffic, transit, local businesses, Street View. The physical-world layer.` },
    { name: `YouTube`, body: `Video in every language; huge reach among first-time internet users; creators; learning content.` },
    { name: `Gmail`, body: `Receipts, bookings, bills: a structured record of a user's commitments (with permission).` },
    { name: `Gemini / AI`, body: `Reasoning, summarisation, multimodal understanding (text, voice, images), agents that can act.` },
    { name: `Scale`, body: `Billions of users means you can launch to massive audiences and learn fast; marginal cost per user is tiny.` },
    { name: `Distribution`, body: `Pre-installed apps, Play Store, Chrome, Search entry points. A new feature can reach millions on day one.` },
    { name: `Data`, body: `Aggregated, anonymised signals (traffic, trends, queries) that improve products. Must be used responsibly and with consent.` },
    { name: `Payments & identity`, body: `Google Pay on UPI, Google account sign-in across apps. Trust and a transaction layer.` }
  ],

  /* ------------------------------------------------------------------ */
  skills: [
    {
      id: `vision`,
      title: `Product Vision`,
      what: `Product Vision is your ability to look at a space and imagine where it should go: a product that makes a real difference to users and that only Google (or Google best) could build. It's not about inventing gadgets. It's about moving from a deep understanding of a user need to a compelling idea, then making that idea concrete enough to start building tomorrow. Interviewers often use “design X for Y” prompts (a watch for kids, an alarm clock for the 2100s) precisely because there's no right answer; they want to see how you reason toward one.`,
      strong: [
        `Starts from a specific user and their need, not from technology.`,
        `Offers a range of ideas, including at least one genuinely bold one, and explains the trade-offs.`,
        `Connects the vision to Google's mission and assets naturally.`,
        `Makes the idea concrete: what does a user actually see and do in v1?`,
        `Paints a short “future state” picture: how life is better in 3–5 years if this works.`,
        `Comfortable with ambiguity; makes assumptions explicit and moves on.`
      ],
      weak: [
        `Jumps straight to a feature list (“it'll have GPS, a camera, AI…”).`,
        `Only incremental ideas; nothing that would excite anyone.`,
        `Only sci-fi ideas; no believable first step.`,
        `Designs for “everyone”.`,
        `Ignores why Google should build it.`,
        `Gets stuck on the futuristic framing (“2100s”) and forgets humans still have the same core needs.`
      ],
      approach: [
        `<strong>Reframe the prompt as a need.</strong> “An alarm clock for kids” is really “helping kids wake up and start the day well.” Needs are timeless; products change.`,
        `<strong>Pick one user group</strong> using size, pain and Google fit. Consider secondary users (parents for a kids product) explicitly.`,
        `<strong>Walk through their day or journey</strong> and find the moments of friction or delight.`,
        `<strong>Generate three ideas on a ladder:</strong> small (improves today), medium (new behaviour), bold (10x, maybe 3–5 years out).`,
        `<strong>Choose with criteria:</strong> impact on the top pain, effort/feasibility, Google's unfair advantage.`,
        `<strong>Describe the MVP</strong> in user terms, then the vision: “v1 does X; in three years this becomes Y.”`,
        `<strong>Close with metrics</strong> that show the vision is working.`
      ],
      frameworks: [
        { name: `User segmentation`, html: `Segment by <strong>need or behaviour</strong>, then sanity-check with demographics. For a kids' watch: <em>safety-focused parents of 5–8-year-olds</em>, <em>independent 9–12-year-olds who commute alone</em>, <em>kids with health needs</em>, <em>sporty kids</em>. Pick using a quick 3-column check: <strong>Size</strong> (how many?), <strong>Pain</strong> (how acute and frequent?), <strong>Google fit</strong> (do our assets help?).` },
        { name: `Idea ladder (small / medium / bold)`, html: `<strong>Small</strong>: improves an existing flow; ships in weeks. <strong>Medium</strong>: a new feature or product that changes behaviour; ships in a quarter or two. <strong>Bold</strong>: rethinks the category; uses emerging tech (AI agents, AR, on-device models). Always say which is which. It shows range.` },
        { name: `Impact vs effort`, html: `Plot ideas mentally on a 2×2. <strong>High impact / low effort</strong> = MVP candidate. <strong>High impact / high effort</strong> = the vision you build toward. Add a third axis out loud: <strong>Google advantage</strong>, i.e. would we win this, or would a startup do it better?` },
        { name: `Google's advantages`, html: `Search, Android, Maps, YouTube, Gmail, Gemini/AI, scale, distribution, data. When picking an idea, name at least two assets it uses. “It combines Gmail and live Maps data” is far more convincing than “Google has lots of data.”` },
        { name: `Vision statement template`, html: `“For <em>[user]</em> who <em>[need]</em>, <em>[product]</em> is a <em>[category]</em> that <em>[key benefit]</em>. Unlike <em>[today's alternative]</em>, it <em>[differentiator, usually a Google asset]</em>.”` }
      ],
      mistakes: [
        `Spending 10 minutes on clarifying questions. Three questions, then assumptions.`,
        `Picking a user group without saying why.`,
        `Listing features instead of solving a ranked pain point.`,
        `Treating the futuristic prompt literally (“in 2100 kids will have chips in their brains”) without grounding it in a need.`,
        `Forgetting the secondary user (parents, teachers, shopkeepers).`,
        `No MVP: the interviewer can't tell what you'd actually build first.`,
        `Running out of time before metrics and summary.`
      ],
      practice: [`q1`, `q3`, `q4`, `q5`, `q6`, `q8`, `q10`]
    },
    {
      id: `problem`,
      title: `Problem Space Understanding`,
      what: `Problem Space Understanding is your ability to deeply understand a problem before trying to solve it: who experiences it, what exactly happens, why it hurts, why existing solutions fall short, and what constraints shape any solution. Google PMs say the best product decisions come from understanding the problem better than anyone else. In the interview, this is the part most candidates rush. If you spend six focused minutes mapping the journey and ranking pain points, your solutions will automatically look sharper.`,
      strong: [
        `Maps a concrete journey step by step, with a named persona and a real scenario.`,
        `Lists several pain points, then ranks them with explicit criteria.`,
        `Explains <em>why</em> the problem persists (incentives, constraints, technology, behaviour).`,
        `Names stakeholders beyond the user (partners, regulators, family, sellers).`,
        `Identifies trade-offs (privacy vs. convenience, simplicity vs. power).`,
        `Uses India-specific context naturally (languages, connectivity, low-cost phones, UPI, shared devices).`
      ],
      weak: [
        `Lists generic pain points (“it's slow”, “it's hard to use”) with no scenario.`,
        `Doesn't rank pain points; tries to solve all of them.`,
        `Assumes the user is like themselves (urban, English-speaking, high-end phone).`,
        `Never asks why the problem hasn't already been solved.`,
        `Skips constraints and stakeholders entirely.`,
        `Jumps to solutions in the first three minutes.`
      ],
      approach: [
        `<strong>Define the problem in one sentence</strong> and the user who has it. “Families travelling domestically struggle to keep a trip on track when things change.”`,
        `<strong>Map the journey</strong>: before / during / after, or trigger → search → decide → use → repeat. Narrate it like a story.`,
        `<strong>Extract pain points</strong> at each step: aim for 4–6, as specific as possible.`,
        `<strong>Rank them</strong> using frequency × severity × how badly current solutions handle it. Say the top 1–2 out loud.`,
        `<strong>Ask “why does this persist?”</strong> Root causes: missing data, misaligned incentives, cost, trust, behaviour, regulation.`,
        `<strong>List constraints and stakeholders</strong>: technical (offline, low RAM), social (language, literacy, shared phones), business (partners, unit economics), legal (privacy, data localisation).`,
        `<strong>Name the key trade-off</strong> a solution will have to make. Then, and only then, move to solutions.`
      ],
      frameworks: [
        { name: `User journey map`, html: `Columns: <strong>Trigger → Discover → Decide → Do → Follow-up</strong>. For each: what the user does, what they feel, what goes wrong. Speak it as a story with a named persona (“Priya, 34, planning her family's trip to Jaipur…”).` },
        { name: `Pain-point ranking`, html: `Score each pain 1–3 on <strong>Frequency</strong> (how often?), <strong>Severity</strong> (how much does it hurt: time, money, safety, emotion?), and <strong>Gap</strong> (how badly do current solutions handle it?). Multiply or add. You don't need precise numbers; you need visible reasoning.` },
        { name: `5 Whys (root cause)`, html: `“Users abandon apps after a week.” Why? They don't see value. Why? Onboarding is in English. Why? Apps assume literate, English-speaking users… Keep going until you hit something a product can change.` },
        { name: `Constraints checklist`, html: `<strong>Device</strong> (low RAM, storage, battery) · <strong>Network</strong> (2G/3G, offline, data cost) · <strong>Language & literacy</strong> · <strong>Trust & safety</strong> · <strong>Privacy & regulation</strong> · <strong>Partners & incentives</strong> · <strong>Cost / unit economics</strong>.` },
        { name: `Stakeholder map`, html: `Primary user, secondary users (parents, family), the buyer (if different), partners (merchants, drivers, railways), regulators, and internal teams (privacy, trust & safety). Ask: who wins, who loses, who can block this?` }
      ],
      mistakes: [
        `Pain points that are really missing features (“there's no AI”). A pain point is a user problem, not a solution in disguise.`,
        `Ranking without criteria (“I think this one is most important”).`,
        `Only one user's view; ignoring the other side of a marketplace.`,
        `Forgetting India context when the question is India-focused: language, connectivity, cost.`,
        `Spending so long on the problem that solutions get two minutes. Keep it to roughly 6 minutes.`
      ],
      practice: [`q19`, `q20`, `q21`, `q22`, `q23`, `q24`, `q25`]
    },
    {
      id: `strategy`,
      title: `Strategic Insight`,
      what: `Strategic Insight is your ability to see a product the way Google's leadership would: as a business in a market with competitors, partners and regulators. Why should Google do this rather than someone else? How does it make money or strengthen something that does? How do you launch it so it wins? What could go wrong? These questions can come as a standalone prompt (“Should Google enter X?”) or as follow-ups at any point in a design case. You don't need an MBA. You need clear, structured, honest reasoning about markets and advantages.`,
      strong: [
        `Clarifies Google's goal before judging (revenue, user growth, defending a core product, mission).`,
        `Sizes the opportunity roughly and states assumptions.`,
        `Names real competitors and how they'd react.`,
        `Explains how Google makes money directly or indirectly (ads, subscriptions, transaction fees, cloud, ecosystem lock-in).`,
        `Proposes a sensible go-to-market: which users first, which channel, which partners.`,
        `Gives a clear recommendation (yes / no / yes-if) and the conditions that would change it.`
      ],
      weak: [
        `“Google should do it because Google is big.”`,
        `No recommendation, just a list of considerations.`,
        `Ignores competitors or assumes they won't respond.`,
        `Business model hand-waved (“we'll monetise later with ads”).`,
        `Forgets regulatory and trust risks, which matter a lot for a company of Google's size.`,
        `Doesn't connect strategy back to the user.`
      ],
      approach: [
        `<strong>Clarify the goal</strong>: what does Google want from this? Revenue, users, defending Search/Android, mission?`,
        `<strong>Market</strong>: who are the customers, how big is it, how fast is it growing, and what's changing (why now)?`,
        `<strong>Competitors</strong>: who's there, what do they do well, where are they weak, how would they respond?`,
        `<strong>Google's right to win</strong>: which assets give an advantage? Is it a real moat or just a head start?`,
        `<strong>Business model</strong>: how does it make money or strengthen a core business? What are the unit economics roughly?`,
        `<strong>Go-to-market</strong>: first users, first cities/segments, channels (Android, Search, YouTube), partners.`,
        `<strong>Risks</strong>: competitive, regulatory, trust, execution, cannibalisation. Mitigation for each.`,
        `<strong>Recommend</strong>: a clear call with conditions and the first step you'd take.`
      ],
      frameworks: [
        { name: `Market`, html: `<strong>Who</strong> buys/uses? <strong>How big</strong> (rough top-down or bottom-up estimate)? <strong>Growth</strong> and <strong>why now</strong> (new tech, regulation, behaviour shift such as UPI adoption or cheap data)?` },
        { name: `Competitors`, html: `List direct competitors, indirect substitutes (including “do nothing” or offline alternatives), and potential entrants. For each: strength, weakness, likely response if Google enters.` },
        { name: `Business model`, html: `Options: <strong>ads</strong> (Search, YouTube, Maps), <strong>subscriptions</strong> (YouTube Premium, Google One, Gemini plans), <strong>transaction / take rate</strong>, <strong>hardware margin</strong> (Pixel, Nest), <strong>cloud/enterprise</strong> (Workspace, Cloud), <strong>ecosystem value</strong> (keeps users in Android/Search; indirect but real).` },
        { name: `Go-to-market`, html: `<strong>Beachhead</strong> segment → <strong>channel</strong> (pre-install, Search entry point, YouTube, partners) → <strong>partners</strong> (OEMs, banks, telcos, government DPI) → <strong>expansion</strong> path. Mention pricing if relevant.` },
        { name: `Risks`, html: `<strong>Competitive</strong> (incumbent response, price war) · <strong>Regulatory</strong> (antitrust, data localisation, sector rules like RBI for payments) · <strong>Trust/brand</strong> · <strong>Execution</strong> (ops-heavy businesses aren't Google's strength) · <strong>Cannibalisation</strong> of existing products.` },
        { name: `Google's advantages`, html: `Search, Android, Maps, YouTube, Gmail, Gemini/AI, scale, distribution, data. Ask: does this advantage actually matter for <em>this</em> market? Search distribution helps a lot in information products; it helps little in operations-heavy businesses like delivery.` }
      ],
      mistakes: [
        `Saying yes to everything. Sometimes the right answer is “no” or “partner instead of build”.`,
        `Treating Google like a startup; its scale brings regulatory scrutiny and brand risk.`,
        `Confusing revenue with value; many Google products monetise indirectly.`,
        `Ignoring ops intensity: Google is great at software at scale, less proven in logistics-heavy businesses.`,
        `Not stating assumptions behind market size.`,
        `Ending without a recommendation.`
      ],
      practice: [`q26`, `q27`, `q28`, `q29`, `q30`, `q31`, `q32`]
    }
  ],

  /* ------------------------------------------------------------------ */
  plan: [
    { date: `2026-11-21`, tasks: [`Watch the official resources: PM Careers on Air mock and the APM prep session`, `Write my one-page answer structure`, `Do 1 timed case`] },
    { date: `2026-11-22`, tasks: [`Timed Product Vision case #1 (recorded)`, `Timed Product Vision case #2 (recorded)`, `Draft my 2-line intro`] },
    { date: `2026-11-23`, tasks: [`1 Problem Space case`, `1 product teardown`, `Draft “Why PM” and “Why Google”`] },
    { date: `2026-11-24`, tasks: [`1 light case`, `1 product teardown`, `Prep for the Nov 25 campus interview`] },
    { date: `2026-11-25`, busy: `Campus interview: rest day`, tasks: [`(Optional) 1 product teardown`] },
    { date: `2026-11-26`, tasks: [`Strategic Insight case #1`, `Strategic Insight case #2`, `Estimation basics: practise 2 estimation questions`] },
    { date: `2026-11-27`, tasks: [`1 timed case`, `First mock interview`, `Confirm the interview booking is submitted`] },
    { date: `2026-11-28`, tasks: [`Mock interview #1`, `Mock interview #2`, `Review scorecards and note the weakest step`] },
    { date: `2026-11-29`, busy: `MTP prep day`, tasks: [`1 light case`] },
    { date: `2026-11-30`, busy: `MTP: day off`, tasks: [] },
    { date: `2026-12-01`, tasks: [`1 case (30 min) to stay in practice`] },
    { date: `2026-12-02`, tasks: [`1 case (30 min) to stay in practice`] },
    { date: `2026-12-03`, busy: `Busy: day off`, tasks: [] },
    { date: `2026-12-04`, tasks: [`Mock interview #1`, `Mock interview #2`, `Fix the weakest step (drill it with 2 short reps)`] },
    { date: `2026-12-05`, tasks: [`Mock interview #1`, `Mock interview #2 with a new partner`] },
    { date: `2026-12-06`, tasks: [`1–2 mock interviews`, `Finalise intro and stories`] },
    { date: `2026-12-07`, tasks: [`1 light case`, `Review the cheat sheet`, `Read recent Google product news`, `Test camera, mic and internet setup`, `Sleep early`] },
    { date: `2026-12-08`, busy: `Interview day`, tasks: [`Go through the day-of checklist`, `Do the interview. You're ready.`] }
  ],

  /* ------------------------------------------------------------------ */
  categories: [
    { id: `vision`, name: `Product Vision` },
    { id: `improve`, name: `Improve a Google product` },
    { id: `problem`, name: `Problem Space` },
    { id: `strategy`, name: `Strategic Insight` },
    { id: `estimation`, name: `Estimation` },
    { id: `behavioral`, name: `Intro / Why Google / Behavioral` }
  ],
  difficulties: [`Easy`, `Medium`, `Hard`],

  questions: [
    /* ---------- Product Vision ---------- */
    { id: `q1`, cat: `vision`, diff: `Medium`, q: `Design an alarm clock for kids in the 2100s.`,
      hints: [`Reframe: the need is “help kids wake up and start the day well”. That need won't change by 2100.`, `There are two users: the kid and the parent. Decide whose problem you're solving first.`, `Futuristic is fine, but give a believable MVP that could start today.`],
      outline: [
        [`Clarify`, `Kids of what age? Assume 6–10. Goal for Google? Assume a new family device/experience that builds on Google's assistant and home ecosystem. Global, with India as a test market.`],
        [`Why it matters`, `Morning routines shape kids' sleep, mood and school readiness; mornings are a daily stress point for families. Google has Assistant/Gemini, Nest devices, Android and Family Link, so it can connect sleep, schedule and home.`],
        [`Users`, `Kids who struggle to wake up; kids who wake too early; parents managing school-day chaos; kids with sleep disorders. Pick parents + kids (6–10) on school days: largest group, daily pain, strong fit with Family Link and Assistant.`],
        [`Problem space`, `Journey: bedtime → sleep → wake → get ready → leave. Pains: kids don't wake to harsh alarms; parents nag; kids don't know what's next; sleep is short because bedtime slips. Top two: waking up is unpleasant/fights, and the routine after waking is chaotic. Constraints: child safety and privacy, no screens in bedroom preferred, cost.`],
        [`Solutions`, `Small: a smart light-and-sound alarm that wakes gradually like a sunrise. Medium: a “morning buddy” character (Gemini-powered voice) that wakes the kid with a story continuing from last night and guides the routine step by step. Bold (2100s): an ambient sleep companion that reads sleep cycles via non-wearable sensing and wakes the child at the ideal moment, adjusting the whole home (light, temperature, breakfast prep). Pick medium: it addresses both top pains, it's feasible today, and it uses Gemini + Nest. MVP: a screenless speaker-light device with a character voice, parent-set routine in Family Link, and a story that continues each morning.`],
        [`Metrics and risks`, `Main: % school days the child is ready on time without parent intervention (self-reported via app). Supporting: weekly active households, routine completion rate. Guardrail: child sleep duration must not drop; privacy complaints. Risks: child data privacy (on-device processing, no recording), kids getting bored of the character (fresh stories), price (start with a phone-based version).`],
        [`Summary`, `For families with young kids, mornings are a daily battle. A Gemini-powered morning buddy makes waking up fun and guides the routine, building towards an ambient sleep companion. Success = more on-time mornings without nagging, with sleep and privacy protected.`]
      ] },
    { id: `q2`, cat: `vision`, diff: `Medium`, q: `Design a new product for travellers that Google would launch.`,
      hints: [`Narrow down: domestic or international? Which kind of traveller? State your choice.`, `Think about which Google assets combine well: Gmail bookings, live Maps data, Gemini, Translate/Lens.`, `See the full worked example on the Answer Framework page.`],
      outline: [
        [`Clarify`, `Assume domestic family travel in India; goal is more everyday use of Maps.`],
        [`Why it matters`, `Travel is information-heavy: Google's mission. Gmail holds bookings, Maps has live data, Gemini can re-plan.`],
        [`Users`, `Business travellers, budget students, families on holiday, older pilgrims → pick families (large, high planning pain, strong fit).`],
        [`Problem space`, `Bookings scattered across apps; real-time disruptions; language barriers; group coordination. Top two: scattered planning and disruptions.`],
        [`Solutions`, `(1) Shared trip board in Maps from Gmail; (2) Gemini trip assistant that re-plans on delay; (3) bold camera-based travel companion. Pick (2). MVP: detect trip from Gmail, one-tap re-plan on delay.`],
        [`Metrics and risks`, `Trips completed with feature; re-plan acceptance; 30-day retention. Guardrails: privacy complaints, wrong suggestions. Risks: privacy (opt-in), trust, data partners.`],
        [`Summary`, `Gemini trip assistant for families, uniquely possible with Gmail + Maps + Gemini.`]
      ] },
    { id: `q3`, cat: `vision`, diff: `Easy`, q: `Design a watch for kids.`,
      hints: [`Is the customer the kid or the parent? They want different things (fun vs safety).`, `Think about ages: a 5-year-old and a 12-year-old need very different products.`, `India angle: price sensitivity, shared family phones, kids commuting by school bus or auto.`],
      outline: [
        [`Clarify`, `Ages? Assume 7–12. Market? India first. Goal? Grow Google's wearables and family ecosystem (Wear OS, Family Link).`],
        [`Why it matters`, `Parents want kids to be safe and independent before they're old enough for a phone. Google has Android/Wear OS, Maps location, Family Link and Gemini.`],
        [`Users`, `Safety-focused parents of young kids; independent 10–12-year-olds commuting alone; kids with medical needs; sporty kids. Pick independent 10–12s and their parents: big group, acute daily worry, strong fit with Maps + Family Link.`],
        [`Problem space`, `Journey: leave home → school bus/auto → school → tuition → home. Pains: parents can't tell if kid arrived; kids can't call in emergencies without a phone; phones are distracting and expensive; kids feel “tracked” and resent it. Top two: parents' anxiety during commutes, and kids' need for independence without a full phone. Constraints: price (< ₹5,000 target), battery, school phone bans, child privacy.`],
        [`Solutions`, `Small: a basic GPS watch with SOS button. Medium: “Safe routes” watch: parents set usual routes; the watch only alerts when something unusual happens (off route, late), with 3-contact calling. Bold: an AI companion on the wrist that talks the kid through situations (lost, bullied, unwell) and escalates to parents only when needed. Pick medium: it reduces anxiety without constant tracking, fits Maps + Family Link, and is buildable now. MVP: low-cost LTE watch, route learning, exception-based alerts, SOS, calls to 3 contacts, no apps or browser.`],
        [`Metrics and risks`, `Main: weekly active families with at least one route-protected commute. Supporting: false-alert rate, parent check-in calls reduced (survey). Guardrail: battery lasting a full school day; child privacy complaints. Risks: price (partner with telcos for bundled plans), schools banning devices (school mode), over-surveillance (kid-visible sharing indicator).`],
        [`Summary`, `For 10–12-year-olds starting to travel alone, a low-cost watch that alerts parents only when something's off gives kids independence and parents peace of mind, using Google's Maps and Family Link.`]
      ] },
    { id: `q4`, cat: `vision`, diff: `Hard`, q: `Design a product to help first-time smartphone users in rural India get comfortable with the internet.`,
      hints: [`Think voice-first and vernacular; many first-time users are not comfortable typing, especially in English.`, `Low-cost phones, limited storage, and patchy data are real constraints, not footnotes.`, `What would make someone come back on day 7? Find one high-value use case.`],
      outline: [
        [`Clarify`, `Goal: help new users get value fast and keep using the internet (retention). Users: rural, first smartphone, low-cost Android. Any specific Google product? Assume a new experience that can live inside Android.`],
        [`Why it matters`, `“Universally accessible” is literally in Google's mission. Next billion users are mostly vernacular and voice-first. Android's reach and Google's voice/translation tech give a unique edge.`],
        [`Users`, `Older adults gifted a phone by children; young women with shared family phones; farmers; teenagers. Pick adults 30–55 with their first personal phone: large group, high anxiety and drop-off, Android pre-install is a natural channel.`],
        [`Problem space`, `Journey: get phone → setup → first app → first task → day 7. Pains: setup in English; fear of “breaking” something or being scammed; can't type; don't know what's possible; data runs out. Top two: no clear first valuable task, and fear/low confidence (including fraud fear). Constraints: 2–3 GB RAM phones, limited storage, intermittent data, low literacy.`],
        [`Solutions`, `Small: a voice-guided setup in 10+ Indian languages. Medium: “Sathi”, a voice companion on the home screen that suggests one useful thing per day (check mandi prices, video-call family, pay a bill via UPI) and walks through it step by step. Bold: a Gemini agent that does tasks on the user's behalf by voice (“pay electricity bill”, “book bus to Patna”) and explains what it did. Pick medium as the MVP with a path to bold. MVP: lightweight Android Go-friendly app, voice in local languages, 10 curated starter tasks, scam warnings, works offline for guidance.`],
        [`Metrics and risks`, `Main: day-30 retention of new users who complete ≥3 guided tasks. Supporting: tasks completed per user per week, first UPI/video-call success rate. Guardrail: fraud/scam reports, app size and data usage. Risks: patronising tone (co-design with users), language quality (start with top 5 languages), storage limits (keep under ~20 MB).`],
        [`Summary`, `A voice-first companion that gives first-time users one valuable, safe win a day, in their language, on cheap phones, building toward an agent that does tasks for them. Measured by 30-day retention while guarding against fraud.`]
      ] },
    { id: `q5`, cat: `vision`, diff: `Medium`, q: `Design a product for elderly people living alone in Indian cities.`,
      hints: [`Children often live in other cities or abroad. They're a key secondary user and possibly the buyer.`, `Pain points span health, loneliness, daily errands and safety.`, `Think about devices they'll actually use: TV, a basic phone, a smart speaker?`],
      outline: [
        [`Clarify`, `Age 65+, living alone or as a couple, urban India. Goal: new Google experience; assume it can use Nest/Android/Assistant.`],
        [`Why it matters`, `India's elderly population is growing, and many live away from children. Google has voice AI in Indian languages, Android, Nest, Maps and Google Pay to connect help.`],
        [`Users`, `Tech-comfortable retirees; less tech-comfortable elders; elders with chronic illness; their remote children. Pick less tech-comfortable elders with chronic illness, with children as buyers: highest pain, strong voice-AI fit.`],
        [`Problem space`, `Day: wake → medicines → errands/doctor → bills → evening alone. Pains: forgetting/mixing medicines; difficulty booking doctors and errands; loneliness; emergencies with no one around; children worrying constantly. Top two: medication/health management and emergencies. Constraints: low tech comfort, hearing/vision issues, privacy and dignity.`],
        [`Solutions`, `Small: voice medicine reminders on any Android phone. Medium: a Nest-based “home companion” that handles reminders, daily check-ins, voice-calls family and books doctor visits, and sends kids a daily “all good” digest. Bold: ambient fall and health detection with no wearable, plus an AI that coordinates care (pharmacy, doctor, family). Pick medium. MVP: smart display with large UI, voice in Hindi + one regional language, medicine schedule set by child remotely, daily check-in, one-word emergency call.`],
        [`Metrics and risks`, `Main: % of scheduled medicine doses confirmed. Supporting: daily check-in completion, weekly family video calls. Guardrail: false emergency alerts; privacy complaints. Risks: dignity/surveillance concerns (elder controls sharing), voice recognition for older voices/accents, cost (subscription paid by children).`],
        [`Summary`, `A voice-first home companion that helps elders manage health and stay connected, giving remote children peace of mind, using Google's voice AI and Nest.`]
      ] },
    { id: `q6`, cat: `vision`, diff: `Medium`, q: `Design a Google product for small kirana (neighbourhood grocery) store owners.`,
      hints: [`Kirana owners already use UPI QR codes, WhatsApp and paper ledgers (“khata”).`, `What do they lose money or time on? Credit tracking, inventory, competition from quick-commerce?`, `Google assets: Google Pay, Maps (Business Profile), Gemini, Lens.`],
      outline: [
        [`Clarify`, `Goal: help small merchants grow and deepen Google Pay/merchant engagement. Region: India, tier-1 and tier-2 towns.`],
        [`Why it matters`, `Millions of kiranas are the backbone of Indian retail; quick-commerce threatens them. Google has Google Pay merchant relationships, Maps Business Profiles and AI.`],
        [`Users`, `Single-owner small shops; family-run mid-size kiranas; shops in tier-3/rural areas; new shop owners. Pick family-run mid-size kiranas in tier-1/2 towns: many of them, real competitive pain, already on UPI.`],
        [`Problem space`, `Day: open → restock from distributor → serve customers → give credit (khata) → close and tally. Pains: tracking customer credit; running out of fast-moving stock; losing customers to 10-minute apps; no time for marketing. Top two: credit tracking and losing repeat customers to apps. Constraints: owners are busy and standing at a counter, low patience for complex apps, cash still common.`],
        [`Solutions`, `Small: digital khata inside Google Pay for Business with auto UPI reminders. Medium: “Local order”: customers order on WhatsApp/Maps from their regular kirana; Gemini turns voice notes into an order list for the owner; the shop delivers itself. Bold: AI shop manager that predicts demand from sales and local events, and auto-reorders from distributors. Pick medium: it attacks customer loss with Maps + Pay + Gemini. MVP: order button on the shop's Maps profile, voice/text order parsing, one-tap UPI payment link.`],
        [`Metrics and risks`, `Main: weekly orders per active merchant. Supporting: repeat-customer rate, merchant 60-day retention. Guardrail: order errors; merchant time per order. Risks: merchant adoption (field sales, simple UX), delivery capacity (shop's own staff, small radius), competition from established players.`],
        [`Summary`, `Help kiranas keep their regulars with a simple ordering layer built on Maps, Google Pay and Gemini.`]
      ] },
    { id: `q7`, cat: `vision`, diff: `Medium`, q: `Design a learning product for students preparing for competitive exams (JEE, NEET, UPSC) in their regional language.`,
      hints: [`Most top-quality prep content is in English or Hindi. What does a Tamil- or Odia-medium student do?`, `YouTube is already a huge source of free prep content; how could Google build on that?`, `Doubt-solving is a major pain: think Lens + Gemini.`] },
    { id: `q8`, cat: `vision`, diff: `Hard`, q: `Design a product for small farmers using Google's AI.`,
      hints: [`Farmers' big questions: what to plant, when to irrigate, how to treat pests, where to sell.`, `Feature phones and shared smartphones are common; voice and images may beat text.`, `Stakeholders: agri-extension workers, mandis, input sellers, government schemes.`] },
    { id: `q9`, cat: `vision`, diff: `Medium`, q: `Design a product that helps people find reliable plumbers, electricians and other home-service workers.`,
      hints: [`It's a two-sided marketplace: customers want trust and price clarity; workers want steady jobs and fair pay.`, `Most of this happens via word of mouth today. Why?`, `Google has Maps business listings and reviews. Is that enough?`] },
    { id: `q10`, cat: `vision`, diff: `Hard`, q: `Design Google's product for the home of 2040.`,
      hints: [`Don't list gadgets; pick a human need (care, energy, safety, family time) and design around it.`, `Who's in the home: kids, elders, working parents, domestic help?`, `Give a 2040 vision, but also the first product you'd ship in 2027.`] },

    /* ---------- Improve a Google product ---------- */
    { id: `q11`, cat: `improve`, diff: `Easy`, q: `What's your favourite product, and how would you improve it?`,
      hints: [`Pick a product you genuinely use and can talk about in detail. Prepare this one in advance.`, `First explain why you love it (who it's for, what it does brilliantly), then improve it with the same structure as a design case.`, `Improvements should target a specific user's pain, not your personal feature wish-list.`],
      outline: [
        [`Clarify`, `“I'll pick Google Lens because I use it daily. Should I improve it for a specific goal, like engagement or new users?” Assume: grow usage in India.`],
        [`Why it matters`, `Why I love it: it turns the camera into a search box, which is ideal for people who find typing hard or don't know what something is called. It fits Google's mission because it makes the physical world searchable.`],
        [`Users`, `Students solving homework; shoppers identifying products; travellers reading signs; first-time internet users who can't type well. Pick first-time/vernacular users: large and growing group, Lens's camera-first nature fits them, and their usage is low today.`],
        [`Problem space`, `Pains: don't know Lens exists or how to open it; results are text-heavy and often in English; unclear what to do after a result. Top two: discoverability and results not being in their language/format.`],
        [`Solutions`, `Small: a Lens shortcut on the camera app with a one-line voice tutorial. Medium: “Speak the answer”: every Lens result can be read aloud in the user's language with a simple next step. Bold: continuous Lens mode that narrates the world (labels, prices, signs) for low-literacy users. Pick medium. MVP: voice playback of results in top 6 Indian languages.`],
        [`Metrics and risks`, `Main: weekly Lens users among vernacular-language Android users. Supporting: % results played aloud, repeat use within 7 days. Guardrail: result accuracy complaints, data usage. Risks: translation quality, voice latency on low-end phones.`],
        [`Summary`, `Lens is brilliant but under-used by the people who'd benefit most. Spoken, vernacular results would make it a daily tool for the next billion users.`]
      ] },
    { id: `q12`, cat: `improve`, diff: `Medium`, q: `How would you improve Google Maps?`,
      hints: [`Maps is huge. Narrow by user group and use case before suggesting anything.`, `India specifics: two-wheelers, narrow lanes, landmarks instead of addresses, public transit gaps.`, `Tie improvements to a goal (engagement, monetisation via local businesses, new users).`],
      outline: [
        [`Clarify`, `Goal? Assume more daily engagement in India. Any platform? Mobile.`],
        [`Why it matters`, `Maps is the physical-world layer of Google, central to local ads and commerce. Improving daily use strengthens Google's local business ecosystem.`],
        [`Users`, `Car drivers; two-wheeler riders; public-transit commuters; delivery partners; tourists. Pick daily public-transit commuters in big cities (buses, metro, autos): large group, high daily pain, Maps' transit data under-used.`],
        [`Problem space`, `Journey: plan → walk to stop → wait → ride → transfer → last mile. Pains: bus arrival times unreliable; don't know which bus/where to stand; last mile (auto/walking) unclear; crowded buses. Top two: unreliable waiting times and last-mile uncertainty.`],
        [`Solutions`, `Small: crowd-reported “bus just left” signals. Medium: multi-modal trips that combine metro + bus + auto with live ETAs and one-tap auto booking for the last mile. Bold: a Gemini commute agent that learns your daily route and proactively re-routes you before you leave. Pick medium. MVP: in 2 cities, live bus ETAs (from transit agency feeds + crowd signals) and a last-mile auto option with fare estimate.`],
        [`Metrics and risks`, `Main: weekly active transit-navigation users. Supporting: ETA accuracy, trips with last-mile booking. Guardrail: app battery drain, wrong ETA complaints. Risks: data from transit agencies (partner + crowd fallback), partner dependency for autos.`],
        [`Summary`, `Make Maps the daily commute companion for transit users with reliable live ETAs and a solved last mile.`]
      ] },
    { id: `q13`, cat: `improve`, diff: `Medium`, q: `How would you improve YouTube for users on patchy 2G/3G connections?`,
      hints: [`Think about the whole experience, not just video quality: discovery, loading, data cost, storage.`, `Who are these users and what do they watch? Learning, entertainment, devotional, news?`, `Offline and smart pre-downloading are powerful levers.`],
      outline: [
        [`Clarify`, `Goal: watch time and satisfaction for users with poor connectivity. Region: India (rural and in-transit users).`],
        [`Why it matters`, `Many first-time internet users come online via YouTube; poor connectivity drives them away. Making video accessible everywhere is mission-aligned.`],
        [`Users`, `Rural users with weak signal; commuters on trains losing signal; low-income users rationing data; students watching lectures. Pick students watching educational content in rural/semi-urban areas: high value per minute, high frustration, aligned with YouTube's learning push.`],
        [`Problem space`, `Pains: constant buffering; video drops to unwatchable quality (can't read the board); data packs run out; storage too small for downloads. Top two: buffering mid-lesson and data cost.`],
        [`Solutions`, `Small: “Lecture mode”: low-bitrate video that prioritises readable slides/whiteboard and clear audio. Medium: smart overnight downloads of the next videos in a playlist on Wi-Fi/cheap night data, auto-deleted after watching. Bold: AI-generated “lite lessons”: compressed slide + audio versions of long lectures. Pick medium. MVP: auto-download next 2 playlist videos, storage cap, auto-delete.`],
        [`Metrics and risks`, `Main: weekly learning watch time among low-bandwidth users. Supporting: rebuffer rate, completion rate. Guardrail: storage complaints, data overage. Risks: creator concerns about offline views (count them), storage on low-end phones (strict cap).`],
        [`Summary`, `Help learners on weak networks keep learning by pre-loading what they'll watch next, cheaply and automatically.`]
      ] },
    { id: `q14`, cat: `improve`, diff: `Medium`, q: `How would you improve Google Pay for first-time UPI users?`,
      hints: [`Fear of losing money and scams is a bigger barrier than UI complexity.`, `Think about the first transaction: who helps them, what can go wrong?`, `Languages, literacy, and shared phones matter.`],
      outline: [
        [`Clarify`, `Goal: get new users to their first successful payment and keep them transacting. Region: India, semi-urban/rural.`],
        [`Why it matters`, `UPI is India's digital public infrastructure; every new user is a step toward financial inclusion. Google Pay's scale and Android distribution help.`],
        [`Users`, `Older adults; women new to managing money digitally; small vendors accepting UPI for the first time; teenagers. Pick older adults (45+): large group, highest fear, often scammed.`],
        [`Problem space`, `Journey: install → bank linking → set UPI PIN → first payment → repeat. Pains: bank linking fails; fear of entering PIN wrongly; scam requests (“collect” requests that look like receiving money); confusion between pay and receive. Top two: scam fear/vulnerability and first-transaction anxiety.`],
        [`Solutions`, `Small: plain-language, voice-explained screens (“You are SENDING ₹200 to Ramesh”). Medium: “Practice mode” with a ₹1 guided first payment to a trusted contact, plus a “trusted helper” who can be pinged for confirmation on unusual payments. Bold: real-time AI scam detection that pauses suspicious transactions and explains why by voice. Pick bold as headline but MVP with medium + voice clarity. MVP: voice confirmation in local languages, practice payment, helper check.`],
        [`Metrics and risks`, `Main: % new users completing 3 payments in first 14 days. Supporting: bank-linking success, helper-check usage. Guardrail: fraud loss rate; transaction completion time. Risks: friction slowing payments (only on first/unusual payments), helper misuse.`],
        [`Summary`, `Make a first-time user's first payments feel safe and understood, building trust that keeps them on UPI.`]
      ] },
    { id: `q15`, cat: `improve`, diff: `Medium`, q: `How would you improve Google Translate for real-time conversations in Indian languages?`,
      hints: [`Think of specific situations: patient and doctor, tourist and shopkeeper, migrant worker and employer.`, `Code-mixing (Hinglish, Tanglish) is how people actually speak.`, `Noisy environments and offline use matter.`] },
    { id: `q16`, cat: `improve`, diff: `Easy`, q: `How would you improve Gmail for small business owners in India?`,
      hints: [`What do they use email for: invoices, GST notices, supplier orders?`, `Many run business on WhatsApp; what role does Gmail play?`, `Gemini could summarise, draft or extract action items.`] },
    { id: `q17`, cat: `improve`, diff: `Medium`, q: `How would you improve Google Photos for families who share one phone?`,
      hints: [`Shared devices are common in India; privacy within the family is a real issue.`, `Storage on low-cost phones fills up fast with WhatsApp forwards.`, `Who's the primary user and who are secondary users?`] },
    { id: `q18`, cat: `improve`, diff: `Hard`, q: `How would you improve Google Search for users who prefer speaking in their own language?`,
      hints: [`Voice queries are longer, more conversational, and often code-mixed.`, `The answer format matters: a list of blue links is useless if you can't read well.`, `Consider local-language content scarcity on the web.`] },

    /* ---------- Problem Space ---------- */
    { id: `q19`, cat: `problem`, diff: `Medium`, q: `Commuters in Bengaluru lose hours to traffic every week. Explore the problem space.`,
      hints: [`Segment commuters: car, two-wheeler, bus, metro, cab, office shuttle.`, `Separate root causes (infrastructure, office timings, last-mile) from symptoms.`, `Stakeholders: employers, city authorities, transit agencies, ride-hailing companies.`],
      outline: [
        [`Clarify`, `Is this a pure problem-exploration question, or should I land on a solution? Assume explore deeply, then suggest a direction. Focus: daily office commuters.`],
        [`Why it matters`, `Lost hours hurt productivity, health and quality of life; Maps already sees traffic patterns so Google has unique insight.`],
        [`Users`, `Car drivers; two-wheeler riders; bus commuters; metro + last-mile commuters; employers running shuttles. Pick metro + last-mile commuters: growing group as metro expands, and pain concentrates in the last mile.`],
        [`Problem space`, `Journey: leave home → reach station (auto/walk) → metro → exit → last mile to office. Pains: autos refuse or overcharge for short trips; unsafe/no footpaths; metro crowding at peak; unpredictable total time. Rank: last-mile unpredictability is most frequent and severe. Why it persists: short trips aren't profitable for drivers; data on last-mile options is fragmented; office timings concentrate demand. Stakeholders: commuters, auto drivers, metro authority, employers, city. Trade-offs: cheaper shared options vs. convenience; flexible hours vs. team collaboration.`],
        [`Solutions`, `Direction: a shared last-mile shuttle/auto-pooling layer integrated in Maps from metro stations; or employer-backed staggered timing nudges using Maps congestion forecasts.`],
        [`Metrics and risks`, `Metric: door-to-door commute time variance. Risks: driver economics, partnering with transit authorities.`],
        [`Summary`, `The real pain isn't the metro ride, it's the unpredictable last mile, driven by bad economics for short trips. Fixing it needs pooled supply and better information.`]
      ] },
    { id: `q20`, cat: `problem`, diff: `Hard`, q: `Why do many first-time internet users in India stop using apps after the first week? Explore the problem.`,
      hints: [`Use a funnel: discover → install → onboard → first value → habit.`, `Consider language, literacy, trust, data cost, storage and social factors (shared phones, family permission).`, `Ask “why” repeatedly to find root causes.`],
      outline: [
        [`Clarify`, `Which apps? Assume general utility apps (payments, maps, learning). Users: first-time smartphone owners in tier-2/3 and rural India.`],
        [`Why it matters`, `Retention of new users decides whether the “next billion” become active internet users; core to Google's mission and Android's growth.`],
        [`Users`, `Older adults; women on shared phones; rural youth; daily-wage workers. Focus on adults 30–55 with their first personal phone.`],
        [`Problem space`, `Funnel: install (often by a child or shopkeeper) → onboarding (English, sign-ups, OTPs) → first task (fails or confusing) → no reason to return. Pain points: language/literacy; fear of scams or “doing something wrong”; storage full so apps get deleted; data runs out; no one to ask for help; value not obvious. Ranking: (1) no clear first value, (2) fear and low confidence, (3) storage/data limits. 5 Whys: they stop → no value seen → never completed a task → onboarding assumed literacy/English → apps designed for urban users. Stakeholders: family members who set up phones, phone retailers, telcos, app makers.`],
        [`Solutions`, `Directions: voice-first vernacular onboarding with a guaranteed “first win”; lighter apps; a trusted-helper mode.`],
        [`Metrics and risks`, `D7/D30 retention, first-task completion. Risk: designing for “users” without co-design in the field.`],
        [`Summary`, `Drop-off isn't laziness: apps fail to deliver a first win in the user's language before fear and storage limits kick in.`]
      ] },
    { id: `q21`, cat: `problem`, diff: `Medium`, q: `Students in tier-2 and tier-3 colleges struggle to find good internships. Explore the problem space.`,
      hints: [`Compare their journey with an IIT student's: what's missing (alumni network, campus visits, information)?`, `Both sides: students and small companies who'd hire them.`, `Why hasn't LinkedIn or Internshala solved this?`] },
    { id: `q22`, cat: `problem`, diff: `Hard`, q: `Patients in small towns struggle to access specialist doctors. Explore the problem.`,
      hints: [`Separate access (distance, cost), information (which doctor?), and trust (is this teleconsult real?).`, `Stakeholders: patients, local GPs, specialists in cities, pharmacies, insurers.`, `Constraints: regulation, connectivity, language, follow-up care.`],
      outline: [
        [`Clarify`, `Which specialities? Assume chronic conditions (diabetes, cardiac, orthopaedic). Explore, then suggest a direction.`],
        [`Why it matters`, `Specialists are concentrated in big cities; travel costs days of wages. Google has Search (people search symptoms), Maps, YouTube health content and AI.`],
        [`Users`, `Patients with chronic conditions; elderly patients; families accompanying them; local GPs. Focus on chronic-condition patients in towns 100+ km from a city hospital.`],
        [`Problem space`, `Journey: symptom → local GP → referral → find specialist → travel → consult → tests → follow-up. Pains: don't know which specialist to trust; long travel and waiting; repeat trips for tests and follow-up; language gaps with city doctors; records lost between visits. Ranking: repeated follow-up travel (frequent, costly) and choosing a trusted specialist (high stakes). Why persists: regulation and trust around teleconsults; GPs lack a channel to specialists; records are paper. Stakeholders: patients, GPs, specialists, labs, regulators. Trade-off: remote convenience vs. quality of examination.`],
        [`Solutions`, `Direction: GP-assisted teleconsults (local GP examines, specialist joins remotely) with shared digital records; trusted specialist discovery in Search/Maps.`],
        [`Metrics and risks`, `Trips avoided per patient; follow-up adherence. Risks: medical liability, misinformation, privacy of health data.`],
        [`Summary`, `The biggest pain is repeat travel for follow-ups; a GP-plus-specialist model with digital records addresses it within today's trust constraints.`]
      ] },
    { id: `q23`, cat: `problem`, diff: `Easy`, q: `Users with low-cost Android phones constantly run out of storage. What's the problem space?`,
      hints: [`What fills the storage: WhatsApp media, app caches, videos, duplicate photos?`, `Why don't users clean up? They don't know how, they fear deleting the wrong thing, or it's tedious.`, `Who are the stakeholders: OEMs, app developers, Google (Android, Photos, Files)?`] },
    { id: `q24`, cat: `problem`, diff: `Hard`, q: `Women feel unsafe travelling alone at night in Indian cities. Explore how technology could help.`,
      hints: [`Map the whole journey, from planning to arriving home, not just the cab ride.`, `Be careful: technology can create a false sense of safety. Name trade-offs.`, `Stakeholders: police, ride-hailing companies, families, city planners.`] },
    { id: `q25`, cat: `problem`, diff: `Medium`, q: `Small restaurant owners say they lose money on food delivery platforms. Explore the problem.`,
      hints: [`Break down where money goes: commissions, discounts, ads, packaging, refunds.`, `Why do they stay on the platforms anyway?`, `Two-sided view: what do customers get from the platform that the restaurant can't offer directly?`] },

    /* ---------- Strategic Insight ---------- */
    { id: `q26`, cat: `strategy`, diff: `Hard`, q: `Should Google enter the quick-commerce (10-minute delivery) market in India?`,
      hints: [`What's Google's goal: revenue, defending Search/Maps for local intent, data?`, `Quick-commerce is operations-heavy (dark stores, riders). Is that Google's strength?`, `Consider “partner, don't build” options.`],
      outline: [
        [`Clarify`, `Goal for Google? Assume: capture shopping/local intent that's moving away from Search, and grow revenue. Time horizon: 3–5 years.`],
        [`Why it matters`, `Shopping intent is moving to apps (quick-commerce, marketplaces) and away from Search; if users go straight to apps, Google loses a key ad surface.`],
        [`Users`, `Customers: urban, convenience-seeking households. Supply side: dark-store operators, brands, kiranas. Market: fast-growing in top cities, with heavy discounts and thin margins.`],
        [`Problem space`, `Competitors: several well-funded quick-commerce apps plus big e-commerce players adding fast delivery. Their strengths: dense dark-store networks, ops expertise. Google's assets: Search and Maps local intent, Google Pay, Android distribution, ads. But Google has no ops/logistics advantage, and the business is cash-burning and regulation-sensitive (e.g. scrutiny on predatory pricing, impact on kiranas).`],
        [`Solutions`, `Options: (1) Build own dark stores: no; high burn, no advantage. (2) Partner/aggregate: surface live availability and delivery times from multiple apps and kiranas directly in Search/Maps, earning ads/affiliate revenue. (3) Empower kiranas: let local stores offer fast delivery via Maps + Google Pay (aligned with ONDC-style open networks). Recommend (2) + (3): capture intent without ops risk, and side with small merchants.`],
        [`Metrics and risks`, `Metrics: local shopping queries with transactional actions, ad revenue per local query, merchant adoption. Risks: partners refusing to share inventory (offer traffic), regulatory scrutiny of Google's dominance, inconsistent kirana delivery quality.`],
        [`Summary`, `Don't build dark stores. Google should own the discovery layer for instant shopping, aggregating apps and empowering kiranas, playing to its strengths in intent and distribution.`]
      ] },
    { id: `q27`, cat: `strategy`, diff: `Hard`, q: `Should Google Pay launch its own small-ticket credit product on UPI?`,
      hints: [`Regulation: lending in India is regulated by the RBI; Google would likely partner with banks/NBFCs.`, `What's the user need: short-term credit for small purchases, emergencies?`, `Risks: defaults, brand damage if collections are aggressive.`] },
    { id: `q28`, cat: `strategy`, diff: `Medium`, q: `Should YouTube launch a paid tier for regional-language educational content?`,
      hints: [`Who would pay, and how much? Willingness to pay in India is low but exam-prep spending is high.`, `What happens to creators? Would free content suffer?`, `Competitors: ed-tech apps, free YouTube itself.`],
      outline: [
        [`Clarify`, `Goal: new revenue, or better creator monetisation and learning outcomes? Assume both, India first.`],
        [`Why it matters`, `Millions of students learn on YouTube for free; regional-language creators struggle to monetise via ads alone. Education is mission-aligned.`],
        [`Users`, `Students (exam prep, school), parents (payers), regional-language educator-creators. Market: large ed-tech spend in India, but the post-pandemic market is cautious and price-sensitive.`],
        [`Problem space`, `Competitors: ed-tech apps with structured courses, coaching institutes, free YouTube content. YouTube's advantages: massive reach, discovery, existing creators, low data cost per learner via optimisation. Risks: alienating viewers by paywalling free content; low willingness to pay.`],
        [`Solutions`, `Options: (1) blanket paid tier: risky; (2) creator-run paid courses (structured playlists, tests, certificates) with YouTube taking a share; (3) keep free, improve ad monetisation. Recommend (2): opt-in for creators, small price points (₹99–₹299), free content remains free.`],
        [`Metrics and risks`, `Metrics: paying learners, creator earnings, course completion. Guardrail: free educational watch time must not drop. Risks: quality control, refunds, competition response.`],
        [`Summary`, `Yes, but as creator-led paid courses, not a paywall over free content. It grows creator income and revenue while keeping YouTube the free learning platform.`]
      ] },
    { id: `q29`, cat: `strategy`, diff: `Medium`, q: `A competitor launches an AI assistant that books train tickets and buses through chat. How should Google respond?`,
      hints: [`First assess the threat: which Google products does this hurt (Search for travel queries, Maps)?`, `Options: ignore, match, leapfrog, partner.`, `What does Google have that the competitor doesn't (Gmail, Maps, Android-level integration)?`] },
    { id: `q30`, cat: `strategy`, diff: `Hard`, q: `How should Google monetise Gemini in India?`,
      hints: [`Segments: consumers, students, small businesses, developers, enterprises.`, `Indian consumers are price-sensitive; telco bundles and small-ticket pricing are common.`, `Indirect monetisation (strengthening Search/Android/Workspace) counts too.`],
      outline: [
        [`Clarify`, `Goal: revenue in 3 years, while growing users. Is free usage acceptable? Assume yes; free tier stays.`],
        [`Why it matters`, `India is one of the largest internet markets; AI assistants could become the new entry point to information, so Gemini must win here to protect Search's role.`],
        [`Users`, `Students; working professionals; small businesses; developers; enterprises. Prioritise students + professionals (consumer volume) and SMBs (willingness to pay for productivity).`],
        [`Problem space`, `Competitors: other AI assistants, some offered free via telco bundles. Constraints: low willingness to pay, UPI micro-payments, vernacular demand. Google's advantages: Android integration, Workspace, Search, Indian-language capabilities, Google Pay.`],
        [`Solutions`, `(1) Consumer: small-ticket plans (daily/weekly sachet pricing via UPI), student discounts, telco bundles. (2) SMB: Gemini inside Google Business Profile and Workspace (auto-reply to customers, catalogue creation in local languages). (3) Indirect: keep consumers in Google's ecosystem; ads in AI search experiences. Recommend: free consumer tier + sachet plans, and focus paid push on SMBs.`],
        [`Metrics and risks`, `Metrics: paying users, ARPU, SMB adoption, Gemini DAU. Guardrail: Search satisfaction, free-tier retention. Risks: price war, compute cost per user, quality in Indian languages.`],
        [`Summary`, `Free for reach, sachet-priced for consumers, and real paid value for SMBs, with Gemini protecting Google's role as India's information gateway.`]
      ] },
    { id: `q31`, cat: `strategy`, diff: `Medium`, q: `Should Google Maps launch its own ride-hailing service in India?`,
      hints: [`Maps already shows ride options. What extra value would owning it bring?`, `Driver supply, pricing and safety are ops-heavy.`, `Consider partnering with or integrating driver-owned and open-network apps.`] },
    { id: `q32`, cat: `strategy`, diff: `Medium`, q: `Google Pay's UPI market share is falling. What would you do?`,
      hints: [`Diagnose first: which segments are you losing, and to whom? New users, merchants, a specific city?`, `UPI transactions themselves earn little directly. What's the real business value?`, `Possible levers: merchants, credit, bill pay, rewards, trust features.`] },

    /* ---------- Estimation ---------- */
    { id: `q33`, cat: `estimation`, diff: `Medium`, q: `Estimate the number of Google Maps navigation sessions started in India per day.`,
      hints: [`Start from smartphone users, then the share who use Maps, then frequency.`, `Segment: drivers, two-wheelers, delivery partners, occasional users.`, `State every assumption and sanity-check the result.`],
      outline: [
        [`Clarify`, `“Navigation session” = turn-by-turn directions started. All of India, a typical weekday.`],
        [`Why it matters`, `Structure: smartphone users × % using Maps navigation × sessions per day, segmented by user type.`],
        [`Users`, `Assume ~1.4B people, ~700M smartphone users (assumption). Segments: (a) delivery/ride drivers ~10M, (b) daily commuters/drivers who navigate ~50M, (c) occasional users ~200M, (d) rest rarely navigate.`],
        [`Problem space`, `Frequency: (a) 15 sessions/day → 150M; (b) 1.5/day → 75M; (c) once a week → ~30M/day.`],
        [`Solutions`, `Total ≈ 150M + 75M + 30M ≈ 255M, so roughly 250M sessions/day.`],
        [`Metrics and risks`, `Sanity check: ~1 session per 3 smartphone users per day: plausible given heavy use by delivery fleets. Biggest uncertainty: driver segment size and sessions per driver.`],
        [`Summary`, `About 250 million navigation sessions a day, dominated by professional drivers. I'd validate driver counts first.`]
      ] },
    { id: `q34`, cat: `estimation`, diff: `Easy`, q: `How many smartphones are sold in India each year?`,
      hints: [`Approach via the installed base and replacement cycle.`, `Assume a smartphone user base and an average replacement period of ~2.5–3 years.`, `Add first-time buyers.`] },
    { id: `q35`, cat: `estimation`, diff: `Hard`, q: `Estimate the storage needed for one year of YouTube Shorts uploads from India.`,
      hints: [`Number of creators × uploads per creator per day × average size.`, `Remember multiple resolutions are stored for each video.`, `Sanity-check the final number in petabytes.`] },
    { id: `q36`, cat: `estimation`, diff: `Easy`, q: `How many UPI transactions happen in one day on a typical IIT campus?`,
      hints: [`Segment: students, faculty, staff, campus shops and canteens.`, `Think of a student's day: canteen, tea, stationery, mess extras, online orders.`, `Bottom-up beats top-down here.`] },
    { id: `q37`, cat: `estimation`, diff: `Medium`, q: `Estimate the market size for a kids' smartwatch in India.`,
      hints: [`Kids aged 6–12 in urban, middle-income-plus households.`, `Penetration assumption and price point (₹3,000–₹6,000).`, `Give a range and the biggest uncertainty.`] },

    /* ---------- Behavioral ---------- */
    { id: `q38`, cat: `behavioral`, diff: `Easy`, q: `Introduce yourself in two lines.`,
      hints: [`Line 1: who you are (final-year at IIT Bhubaneswar + your one strongest signal).`, `Line 2: why product (one concrete thing you built or did).`, `Practise until it sounds natural, not memorised.`],
      outline: [
        [`Clarify`, `Not needed. Just a warm “Thanks, happy to.”`],
        [`Why it matters`, `First impression in under 20 seconds; sets a confident tone.`],
        [`Users`, `Line 1: “I'm Utsaw, a final-year student at IIT Bhubaneswar, where I've [strongest signal: a project, internship, leadership role].”`],
        [`Problem space`, `Line 2: “What I enjoy most is [figuring out what users need and building it], which is why I'm excited about product management at Google.”`],
        [`Solutions`, `Keep it under 25 seconds. No GPA, no list of clubs.`],
        [`Metrics and risks`, `Test: record it 5 times. Does it sound like you talking to a friend?`],
        [`Summary`, `Stop and let the interviewer lead into the case.`]
      ] },
    { id: `q39`, cat: `behavioral`, diff: `Easy`, q: `Why product management?`,
      hints: [`Anchor on a specific moment where you did PM-like work (talked to users, prioritised, shipped).`, `Connect your engineering background as a strength, not the reason to leave engineering.`, `Avoid “I want to be the CEO of the product.”`],
      outline: [
        [`Clarify`, `Not needed.`],
        [`Why it matters`, `Shows self-awareness and genuine motivation.`],
        [`Users`, `Story: “During [project/internship], I noticed users [problem]. I talked to [N] of them, realised [insight], and we changed [what].”`],
        [`Problem space`, `What you learned: “I enjoyed deciding what to build and why even more than building it.”`],
        [`Solutions`, `Bridge: “PM combines my engineering foundation with what energises me: users, trade-offs and impact.”`],
        [`Metrics and risks`, `Keep to 60–90 seconds. One story, not three.`],
        [`Summary`, `End forward-looking: “The APM program is the best place to learn this craft at scale.”`]
      ] },
    { id: `q40`, cat: `behavioral`, diff: `Easy`, q: `Why Google?`,
      hints: [`Scale of impact (products used by billions, especially in India).`, `A specific Google product decision you admire and why.`, `The APM program's structure: rotations, mentorship, learning.`] },
    { id: `q41`, cat: `behavioral`, diff: `Medium`, q: `Tell me about a time you made a decision with incomplete information.`,
      hints: [`Use STAR: Situation, Task, Action, Result. Spend most time on Action.`, `Show how you reduced uncertainty quickly (data, users, small test).`, `Reflect: what would you do differently?`] },
    { id: `q42`, cat: `behavioral`, diff: `Medium`, q: `Tell me about a time you disagreed with a teammate. How did you handle it?`,
      hints: [`Pick a real disagreement about a decision, not a personality clash.`, `Show you understood their view and used data or users to resolve it.`, `Result + relationship afterwards.`] },
    { id: `q43`, cat: `behavioral`, diff: `Medium`, q: `Tell me about something you built. What would you do differently?`,
      hints: [`Pick a project with real users if possible.`, `Explain the user problem first, then what you built.`, `Honest reflection is a strong signal.`] },
    { id: `q44`, cat: `behavioral`, diff: `Medium`, q: `Name a Google product you think is underperforming. Why, and what would you change?`,
      hints: [`Be respectful and specific: critique the product, not the team.`, `Hypothesise why it's underperforming (user need, distribution, competition).`, `Suggest a concrete change and how you'd measure it.`] }
  ],

  /* ------------------------------------------------------------------ */
  mock: {
    partnerGuide: [
      `<strong>Before:</strong> pick one question from the Question Bank (don't tell the candidate in advance). Read its hints and sample outline, if any, so you know what good looks like.`,
      `<strong>Minute 0:</strong> ask for a 2-line intro, then read the question once, clearly. Answer clarifying questions briefly; if unsure, say “your call”.`,
      `<strong>During:</strong> stay mostly quiet for the first 10 minutes. After that, interrupt 3–4 times with follow-up questions (below) as a real interviewer would.`,
      `<strong>Keep time:</strong> give a soft signal at 25 minutes (“about 10 minutes left”). Stop at 35 minutes even if they aren't done.`,
      `<strong>Minutes 35–40:</strong> let the candidate ask you 1–2 questions as practice.`,
      `<strong>After:</strong> fill the scorecard honestly (3 = solid, 5 = exceptional). Give the single most important thing to fix first, then one thing that went well.`
    ],
    followUps: [
      `Why that user group, and not the others?`,
      `What would you cut from the MVP if you had half the time?`,
      `How does Google make money from this?`,
      `What if a competitor launches first?`,
      `Why is Google the right company to build this?`,
      `How would you launch it? Which users first?`,
      `Which pain point matters most, and how do you know?`,
      `What's the biggest risk, and how would you de-risk it in the first month?`,
      `Your main metric goes up but users complain. What do you do?`,
      `What would this look like in five years?`
    ],
    scorecard: [
      { id: `vision`, name: `Product Vision` },
      { id: `problem`, name: `Problem Space Understanding` },
      { id: `strategy`, name: `Strategic Insight` },
      { id: `structure`, name: `Structure / communication` },
      { id: `time`, name: `Time management` }
    ],
    checklist: [
      { id: `clarified`, text: `Clarified before solving` },
      { id: `oneuser`, text: `Picked one user group and justified it` },
      { id: `ranked`, text: `Ranked pain points before solutions` },
      { id: `bold`, text: `Included one bold idea` },
      { id: `metrics`, text: `Gave metrics and risks` },
      { id: `ontime`, text: `Finished on time with a summary` }
    ]
  },

  /* ------------------------------------------------------------------ */
  teardownFields: [
    { id: `app`, label: `App name`, type: `input`, placeholder: `e.g. Google Maps` },
    { id: `who`, label: `Who it's for`, type: `textarea`, placeholder: `Main user groups and the core job they hire it for` },
    { id: `broken`, label: `What's broken`, type: `textarea`, placeholder: `Specific friction you saw. Be concrete: which screen, which step?` },
    { id: `next`, label: `What I'd build next`, type: `textarea`, placeholder: `One feature, for one user group, solving one pain point` },
    { id: `measure`, label: `How I'd measure it`, type: `textarea`, placeholder: `Main metric + one guardrail` }
  ],

  /* ------------------------------------------------------------------ */
  products: [
    { name: `Google Search`, users: `Almost everyone online; students, professionals, shoppers, first-time users increasingly via voice and Lens.`, money: `Search ads (advertisers bid on queries). The core of Google's revenue.`, improve: `How would you improve Search for a user who can't read English well?` },
    { name: `Google Maps`, users: `Drivers, two-wheeler riders, transit commuters, delivery partners, travellers, local businesses.`, money: `Local ads and promoted pins, Business Profile ecosystem, Maps APIs sold to developers and companies.`, improve: `How would you make Maps more useful for two-wheeler riders in Indian cities?` },
    { name: `YouTube`, users: `Viewers of every age and language; creators; learners; music listeners.`, money: `Video ads (shared with creators), YouTube Premium and Music subscriptions, channel memberships.`, improve: `How would you improve YouTube for students preparing for exams?` },
    { name: `Android`, users: `Smartphone users worldwide (dominant in India); OEMs like Samsung, Xiaomi; app developers.`, money: `Mostly indirect: Play Store revenue share, and Google services (Search, Play) bundled with devices.`, improve: `How would you improve Android for first-time smartphone users on a ₹6,000 phone?` },
    { name: `Gmail`, users: `Individuals, students, professionals, businesses via Workspace.`, money: `Ads in the free version, Workspace subscriptions for businesses, Google One storage.`, improve: `How would you improve Gmail for people who receive many booking and bill emails?` },
    { name: `Google Photos`, users: `Anyone with a phone camera; families; people managing limited phone storage.`, money: `Google One storage subscriptions; printing services in some markets.`, improve: `How would you help users on low-storage phones manage their photos and WhatsApp media?` },
    { name: `Google Pay (India)`, users: `UPI users paying people and merchants; small merchants accepting payments.`, money: `UPI transfers earn little directly; value comes from merchant services, partnerships (e.g. distributing financial products), ads/offers and ecosystem engagement.`, improve: `How would you make Google Pay safer for first-time UPI users?` },
    { name: `Gemini`, users: `Consumers, students, developers, businesses; integrated into Android, Workspace and Search.`, money: `Paid subscription plans, Workspace add-ons, API usage via Google Cloud; indirectly protects Search.`, improve: `How would you make Gemini indispensable for a college student in India?` },
    { name: `Google Translate`, users: `Travellers, migrant workers, students, businesses, people consuming content in other languages.`, money: `Free for consumers (indirect value: ecosystem, mission); paid Cloud Translation API for businesses.`, improve: `How would you improve Translate for live conversations between people speaking different Indian languages?` },
    { name: `Google Lens`, users: `Students (homework help), shoppers, travellers, people who can't type or don't know a name for something.`, money: `Indirect: feeds visual search and shopping queries that can show ads.`, improve: `How would you make Lens a daily habit for users in rural India?` },
    { name: `Chrome`, users: `Desktop and Android web users; developers.`, money: `Indirect: default Search drives ad revenue; strengthens Google's web ecosystem.`, improve: `How would you improve Chrome for users with very limited data plans?` },
    { name: `Google Play`, users: `Android users finding apps and games; developers distributing them.`, money: `Revenue share on app purchases, in-app purchases and subscriptions; Play ads.`, improve: `How would you help users find trustworthy apps and avoid scam loan apps on Play?` },
    { name: `Google Workspace`, users: `Businesses, schools, colleges, startups.`, money: `Per-user subscriptions; Gemini add-ons.`, improve: `How would you get Indian small businesses to adopt Workspace?` },
    { name: `Google Cloud`, users: `Startups, enterprises, governments, AI developers.`, money: `Pay-as-you-go compute, storage, AI/ML services, enterprise contracts.`, improve: `How would you win Indian startups as Cloud customers?` },
    { name: `Pixel & Nest (devices)`, users: `Premium smartphone buyers; smart-home households.`, money: `Hardware margins; showcases Android and AI features; some subscriptions (e.g. Nest Aware).`, improve: `What would a Google smart-home device for Indian homes look like?` },
    { name: `Google Assistant / voice`, users: `Hands-free users, drivers, people who prefer speaking to typing, smart-speaker owners.`, money: `Indirect: drives Search and ecosystem engagement; increasingly merging with Gemini.`, improve: `How would you design voice experiences for code-mixed (e.g. Hinglish) speakers?` }
  ],

  india: [
    { title: `Next billion users`, html: `Most new internet users in India are coming online through a smartphone, often a low-cost Android, and often through video and voice rather than text. Many live in tier-2/3 towns and villages, speak an Indian language first, and may be the first in their family with a personal phone. Designing for them means: <strong>voice-first, vernacular, visual, lightweight, and trustworthy</strong>. When an interviewer says “India”, don't assume a Bengaluru engineer.` },
    { title: `Languages`, html: `India has 22 officially scheduled languages and hundreds more spoken. People frequently <strong>code-mix</strong> (Hinglish, Tanglish, Benglish), and many are more comfortable speaking than typing in their language. Implications: speech recognition that handles mixing, results read aloud, UI in local scripts, and recognising that much of the web lacks quality local-language content.` },
    { title: `Low-cost devices`, html: `Entry-level phones have limited RAM and storage, and smaller batteries. Storage fills with WhatsApp media; users uninstall apps to make room. Implications: small app size, “lite” versions (Android Go was built for this), offline-first features, and aggressive but transparent storage management. Shared devices are common: one phone per family, so think about privacy between family members.` },
    { title: `Connectivity`, html: `Mobile data is relatively cheap, but coverage and speed are patchy: in rural areas, on trains, in buildings. Users often ration data and use Wi-Fi when available. Implications: offline modes, smart pre-download on Wi-Fi, graceful degradation, low-bandwidth media, sync when connected.` },
    { title: `Payments (UPI)`, html: `UPI made digital payments mainstream: QR codes at tea stalls, instant P2P transfers, bill payments. It's part of India's <strong>digital public infrastructure</strong> (alongside Aadhaar, DigiLocker and open networks like ONDC). Implications: payments can be embedded anywhere, small-ticket transactions are normal, and fraud/scams (fake collect requests, impersonation) are a real trust problem, especially for new users. Cash still matters in many contexts.` },
    { title: `Trust and safety`, html: `First-time users fear being scammed or “breaking” something. Misinformation spreads quickly through forwards. Women may face harassment and safety concerns online and offline. Implications: clear confirmations, scam warnings, trusted-helper modes, safety-by-default for vulnerable groups.` },
    { title: `How to use this in an answer`, html: `Pick 1–2 India factors that genuinely change the design and say so: “Because many of these users are on 2–3 GB RAM phones with patchy data, the MVP must work offline and stay under 20 MB.” That single sentence shows Problem Space Understanding far better than a generic list.` }
  ],

  /* ------------------------------------------------------------------ */
  story: [
    { id: `intro`, title: `2-line intro`, template: `Line 1: Who I am + my strongest signal (e.g. “I'm Utsaw, a final-year student at IIT Bhubaneswar, where I [built X / led Y].”)\nLine 2: Why product (e.g. “I love figuring out what users really need and turning it into something people use, which is why I'm excited about PM at Google.”)\nTarget: under 25 seconds out loud.`, prefill: `` },
    { id: `whypm`, title: `Why PM`, template: `1. A specific moment you did PM-like work (talked to users, prioritised, shipped).\n2. What you learned about yourself from it.\n3. How your engineering background helps.\n4. Why the APM program is the right next step.\nTarget: 60–90 seconds.`, prefill: `` },
    { id: `whygoogle`, title: `Why Google`, template: `1. Scale and impact: products used by billions, especially the next billion users in India.\n2. One specific Google product decision you admire, and why.\n3. What draws you to the APM program (rotations, mentorship, learning from strong PMs).\nAvoid generic praise; be specific.`, prefill: `` },
    { id: `story1`, title: `Story 1`, template: `Use STAR.\nSituation: context in 1–2 sentences.\nTask: what you were responsible for.\nAction: what YOU did (most of the time here). Decisions, trade-offs, how you used data/users.\nResult: outcome with a number if possible + what you learned.\nGood themes: a decision with incomplete data, leading without authority, a failure and recovery.`, prefill: `` },
    { id: `story2`, title: `Story 2`, template: `STAR again. Pick a different theme from Story 1, e.g. a disagreement you resolved, or a time you changed direction based on user feedback.`, prefill: `` },
    { id: `story3`, title: `Story 3 (optional)`, template: `STAR. A project you built: the user problem, what you built, results, and what you'd do differently.`, prefill: `` },
    { id: `questions`, title: `Questions to ask the interviewer`, template: `Ask 2–3 genuine questions about their work, the PM role or the APM program. Avoid anything you could look up.`, prefill: `1. What separates APMs who do really well in their first year?\n2. What's a product decision on your team that was harder than it looked?\n3. ` }
  ],

  /* ------------------------------------------------------------------ */
  dayOf: [
    `Test camera and mic on Google Meet (use the same device and browser you'll use for the interview)`,
    `Quiet room, door closed, people at home informed`,
    `Reliable internet, with a phone hotspot ready as backup`,
    `Laptop charged and plugged in; notifications silenced`,
    `Pen and paper for structuring your answer`,
    `Water within reach`,
    `Cheat sheet reviewed once in the morning (not during the interview)`,
    `Join 5 minutes early`,
    `Remember: a 30-second pause to think is completely fine`
  ],

  /* ------------------------------------------------------------------ */
  resources: {
    official: [
      { name: `APM program site`, url: `https://g.co/APM`, note: `From your recruiter email.` },
      { name: `Google Careers dashboard`, url: `https://www.google.com/about/careers/applications/dashboard`, note: `Check interview booking status here.` }
    ],
    editableLinks: [
      { id: `prepSite`, name: `Google PM Interview Prep site`, note: `Paste the URL from your recruiter email.` },
      { id: `careersOnAir`, name: `PM Careers on Air`, note: `Paste the URL from your recruiter email.` }
    ],
    youtube: [
      `Meet a Google Associate Product Manager Program Alumna, feat. Laura`,
      `Google Associate Product Manager (APM) Program Overview`,
      `Google APM Interview Preparation Session`,
      `Meet Product Managers at Google`,
      `Google resume tips and advice`
    ],
    guides: [
      { name: `Exponent: Google APM interview guide`, url: `https://www.tryexponent.com/guides/google/apm-interview` },
      { name: `IGotAnOffer: Google problem space understanding interview`, url: `https://igotanoffer.com/en/advice/google-problem-space-understanding-interview` },
      { name: `Prepfully: Google PM problem solving, understanding and product vision`, url: `https://prepfully.com/interview-guides/google-pm-problem-solving-understanding-product-vision` },
      { name: `IGotAnOffer: Google product manager interview`, url: `https://igotanoffer.com/blogs/product-manager/google-product-manager-interview` }
    ],
    books: [
      { name: `Decode and Conquer`, author: `Lewis C. Lin` },
      { name: `Cracking the PM Interview`, author: `Gayle Laakmann McDowell & Jackie Bavaro` }
    ],
    peers: [
      { name: `Exponent`, url: `https://www.tryexponent.com` },
      { name: `Prepfully`, url: `https://prepfully.com` }
    ]
  }
};
