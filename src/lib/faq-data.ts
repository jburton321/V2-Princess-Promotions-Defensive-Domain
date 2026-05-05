/** Single source for FAQ accordion + FAQPage JSON-LD (CURSOR-REVISIONS). */

export const faqItems: { q: string; a: string }[] = [
  {
    q: 'Is Princess Promotions a Scam?',
    a: 'Based on our review, no. FCCs are real and work. There are documented issues with hotel credits, extra charges, and post-sale support. The program is legitimate, but the sales process has transparency gaps you should understand before buying.',
  },
  {
    q: 'Is Princess Promotions the Same as Princess Cruises?',
    a: 'Princess Promotions is the program that manages Princess Future Cruise Packages and provides the redemption and fulfillment site for all travel products included in the Princess Future Cruise Packages. Princess Future Cruise Packages are endorsed and supported by Princess Cruise Line.',
  },
  {
    q: 'What is the Princess Ultimate Future Cruise Package?',
    a: 'The Princess Ultimate Future Cruise Package is the newest, most flexible way to bundle your next Princess cruise with other travel products, even if you are not sure when or where you want to go. It includes Future Cruise Credits (FCCs) to use when you are ready to book your next Princess cruise, Pre/Post Cruise Hotel Stay Certificates, Premium Land Stay Certificates, Hotel Credits, Onboard Credits, and promotional onboard benefits when you sail.',
  },
  {
    q: 'How Do Hotel Credits Actually Work?',
    a: 'They may apply at about half of face value—$600 can mean $300 usable. Platform rates are often higher than Booking.com or Expedia. Compare prices and get written confirmation before you rely on hotel value.',
  },
  {
    q: "What if I Can't Reach My Planning Advisor?",
    a: 'Call 1-800-774-6237 and ask for a supervisor or a different advisor. Log every attempt with dates. If you are inside the cancellation window, send written cancellation by email immediately—do not rely on voicemail alone.',
  },
  {
    q: 'Can I Cancel My Package?',
    a: 'Most buyers have seven days to cancel from purchase. Florida residents have 30 days to cancel, and Washington residents have 15 days to cancel. After that window closes it gets much harder. Send written cancellation right away if you are unsure—phone-only requests are risky.',
  },
  {
    q: 'Why Was I Charged More Than Quoted?',
    a: 'BBB complaints often cite installments or fees that were not clear at sale. Ask for a full written breakdown of total price, payment schedule, and fees before you sign.',
  },
  {
    q: 'Are Cruise Credits Cheaper Than Booking Direct?',
    a: 'FCCs can offer real savings for frequent cruisers. Hotel portions often do not match the paper value. Judge cruise value and hotel value as separate line items.',
  },
  {
    q: "What Should I Do if I'm Being Charged After Trying to Cancel?",
    a: 'Email a written cancellation request immediately. Dispute incorrect charges with your card issuer. Use our feedback form if you want the issue escalated on your behalf.',
  },
  {
    q: "My Planning Advisor Won't Return My Calls. What Can I Do?",
    a: 'Call the main line, request a supervisor, and document each attempt. If no response after seven business days, share feedback through our site and we can help escalate.',
  },
  {
    q: "I'm Considering Buying at an Onboard Presentation. What Should I Know?",
    a: 'Separate FCC value from hotel credits. Get total cost in writing, including installments. Know the cancellation rules for your state before you pay. Some presentation offers are only available while you are on that sailing, so it is fair to ask what is time-limited—but you should still get terms in writing.',
  },
  {
    q: 'Why Is My FCC Balance Different From What I Expected?',
    a: 'Systems between Princess Promotions and Princess Cruises are not always aligned. Credits may have posted to a booking without clear notice. Request written FCC statements from both sides and reconcile them.',
  },
  {
    q: 'Do Hotel Certificates Expire?',
    a: 'Yes. Stay certificates can expire sooner than buyers expect. Confirm expiration at purchase, set reminders, and start redemption early because processing can be slow.',
  },
  {
    q: 'How Are Hotel Credits Different From Future Cruise Credits (FCC)?',
    a: 'Hotel credits and stay certificates are separate from Future Cruise Credits (FCC). FCCs apply to Princess cruise fare and are redeemed through Princess Cruises at 1-800-774-6237 (or via your planner or travel agent). Hotel certificates, hotel credits, and most land-package pieces are redeemed through Princess Promotions online at princesspromotions.com or by calling +1 888 403 0301.',
  },
  {
    q: 'Is There a Direct Phone Number for Princess Promotions?',
    a: 'Yes. For Princess Promotions program support you can call +1 888 403 0301. For cruise bookings and many FCC questions, guests often use 1-800-774-6237 as well.',
  },
  {
    q: 'Where Do the Dollar Figures on This Page Come From?',
    a: 'Ranges such as typical package bands reflect advertised tiers, common consumer reports, and public complaint summaries—not a live third-party statistics ribbon or single automated score. Our editors synthesize multiple sources and revisit numbers when credible new information appears.',
  },
  {
    q: 'Looking for More Official Princess Promotions FAQs?',
    a: 'This site mirrors common buyer questions in plain language (below). Program-specific policies and account-specific answers should always be confirmed on princesspromotions.com or with Princess Promotions support at +1 888 403 0301 and Princess Cruises at 1-800-774-6237.',
  },
  {
    q: 'What Happens If I Request Escalation on the Feedback Form?',
    a: 'Checking the escalation box does not auto-contact Princess Promotions. Our editorial team reviews submissions internally first. When appropriate we may summarize your situation and suggested next steps—or flag patterns we observe—but we do not replace calling Princess Cruises or Princess Promotions directly for booking issues.',
  },
  {
    q: 'Should I Share My Booking Reference on This Site?',
    a: 'It is optional. Many travelers omit booking IDs when contacting third-party publishers; leaving it blank is normal. If you include it, only share what you are comfortable having referenced if our team follows up internally—never submit sensitive payment details.',
  },
]

export const jsonLdFaq = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
})
