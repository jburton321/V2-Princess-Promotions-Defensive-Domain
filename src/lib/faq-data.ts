/** Single source for FAQ accordion + FAQPage JSON-LD (CURSOR-REVISIONS). */

export const faqItems: { q: string; a: string }[] = [
  {
    q: 'Is Princess Promotions the Same as Princess Cruise Lines?',
    a: 'Princess Promotions is a partner contracted by Princess Cruise Lines to offer and fulfill vacation products that add value to the cruise experience, both onboard during your sailing and via phone following your cruise. Princess Cruise Lines manages your sailings, including the application of Future Cruise Credits and Onboard Credits. Princess Promotions manages the fulfillment of Future Cruise Packages, including your hotel and resort benefits and how you can earn additional Future Cruise Credits while shopping on princesspromotions.com. Princess Future Cruise Packages are endorsed and supported by Princess Cruise Lines.',
  },
  {
    q: 'What Is the Best Way to Reach My Princess Promotions Representative?',
    a: 'You can call +1 888 403 0301, Monday - Friday 6am-8pm, Saturday - Sunday 7am-6pm PT and ask for your representative. If they are not available, a supervisor or a different representative will be there to help.',
  },
  {
    q: 'Can I Cancel My Future Cruise Package?',
    a: 'Yes, you can cancel your Future Cruise Package within seven days of purchase. Florida residents have up to 30 days and Washington residents have up to 15 days to cancel.',
  },
  {
    q: 'What Should I Do If I Have a Question About a Payment Charge?',
    a: 'For payment questions, you can contact Princess Promotions at +1 888 403 0301, Monday - Friday 6am-8pm or Saturday - Sunday 7am-6pm PT.',
  },
  {
    q: "I'm Considering Buying a Future Cruise Package Onboard. What Should I Know?",
    a: "Speak with a Future Cruise Consultant to see whether a Future Cruise Package fits your travel goals and which option gives you the best value. Some offers and promotions are only available on board, so it's best to speak to your Future Cruise Consultant early in your sailing.",
  },
  {
    q: 'Where Can I Find My Current Future Cruise Credit (FCC) Balance?',
    a: 'To check your FCC balance or if you have questions about your FCCs, you can call Princess at 1-800-PRINCESS.',
  },
  {
    q: 'Do Future Cruise Credits and Hotel and Resort Stay Certificates Expire?',
    a: "Yes, Future Cruise Credits and stay certificates need to be booked within 18 months of purchasing your Future Cruise Package, and travel must be completed within 24 months. It's a good idea to start planning your travel early for the best availability.",
  },
  {
    q: 'How Are Hotel Credits Different From Future Cruise Credits (FCCs)?',
    a: "Hotel Credits and FCCs are two separate benefits that are used in different ways. FCCs can be applied to your Princess cruise fare, a travel companion's fare, Princess Plus or Premier packages, room upgrades, and more. FCCs can be redeemed by calling +1 888 403 0301, booking online at princess.com, or working with a Travel Advisor or Cruise Vacation Planner. Hotel Credits can be applied to save on thousands of hotels and resorts around the world. Hotel Credits can be redeemed online at princesspromotions.com or by calling +1 888 403 0301.",
  },
  {
    q: 'What Can Hotel Credits Be Applied Towards?',
    a: 'Each Hotel Credit is worth $1 and can be used for savings on thousands of hotels and resorts around the world when booking on princesspromotions.com.',
  },
  {
    q: 'Why Do I See Lower Prices on Other Booking Sites?',
    a: "When comparing prices, make sure you're looking at the same room type, dates, cancellation terms, fees, taxes, and other booking details. These differences can affect the final price shown on princesspromotions.com versus other booking sites.",
  },
  {
    q: 'Is Princess Promotions a Scam?',
    a: 'No, Princess Promotions is a legitimate program officially endorsed and supported by Princess Cruise Lines. Princess Future Cruise Packages are offered and managed by Princess Promotions–a verified partner of Princess Cruise Lines.',
  },
  {
    q: 'Where Do the Dollar Figures on This Page Come From?',
    a: 'The Future Cruise Package price ranges reflect advertised pricing tiers, customer reports, and publicly available summaries. Our team reviews multiple sources and updates the numbers when credible new information becomes available.',
  },
  {
    q: 'Where Can I Find Official Princess Future Cruise Packages FAQs?',
    a: 'You can find FAQs for Princess Future Cruise Packages and Princess Promotions on the Princess website at www.princess.com/faq/pre-cruise.',
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
