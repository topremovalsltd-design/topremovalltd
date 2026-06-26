/**
 * Borough page data model.
 *
 * The BoroughPage template keeps the hero, price table, services list,
 * accreditation block, schema shape and FAQ shape identical for every borough.
 * Only the data below changes per borough. To clone for a new borough, copy one
 * of these objects, replace every local fact with that borough's real
 * researched data, and add an /areas/<slug> route that renders BoroughPage.
 *
 * Confirmed company data (rates, accreditations, NAP, services) is identical
 * everywhere and lives in the template, not here.
 */

export type BoroughFaq = { question: string; answer: string };
export type BoroughKnowBlock = { label: string; body: string };
export type BoroughLink = { label: string; href: string };

export type Borough = {
  slug: string;
  name: string;
  h1: string;
  subhead: string;
  metaTitle: string;
  metaDescription: string;
  /** Postcode districts, also used as schema containsPlace. */
  postcodes: string[];
  heroImage: string;
  heroImageAlt: string;
  introLine: string;
  valueLine: string;
  /** Paragraphs under "Your Local Removals and Man and Van Team". */
  localBody: string[];
  coverageIntro: string;
  neighbourhoods: string;
  coverageOutro: string;
  knowIntro: string;
  knowBlocks: BoroughKnowBlock[];
  nearby: BoroughLink[];
  faqs: BoroughFaq[];
};

export const islington: Borough = {
  slug: "islington",
  name: "Islington",
  h1: "Removals in Islington",
  subhead:
    "Accredited, insured man and van and removals in Islington, from £55 per hour plus VAT, 7 days a week, with real local knowledge of parking, access and property types across N1, N5, N7, N19 and EC1.",
  metaTitle: "Removals in Islington | Man and Van from £55/hr | Top Removals",
  metaDescription:
    "Accredited, insured removals and man and van in Islington from £55 per hour plus VAT, 7 days a week. Local knowledge of parking, access and property across N1, N5, N7, N19 and EC1.",
  postcodes: ["N1", "N5", "N7", "N19", "EC1"],
  heroImage:
    "https://www.top-removals.co.uk/wp-content/uploads/2025/05/man-and-van-service-London.jpg",
  heroImageAlt: "Top Removals man and van team loading a van in Islington, London",
  introLine:
    "A BAR and NGRS accredited removals company that genuinely serves and knows Islington.",
  valueLine:
    "Published hourly rates, insurance included, your own accountable crew, and the parking and access handled for you.",
  localBody: [
    "Top Removals moves homes, offices and single items across the whole of Islington, 7 days a week. We are a fully accredited and insured London removals company, not an unaccredited local operator and not a booking marketplace. The same team handles your man and van job, your full house or office move, your packing, your storage and your clearance, with one point of contact from quote to completion.",
    "What sets a Top Removals move in Islington apart is that we work in the borough constantly, so we plan around its realities: controlled parking, busy main roads, period staircases and tight access. That local knowledge means fewer delays and a smoother move on the day.",
  ],
  coverageIntro:
    "We cover every part of the London Borough of Islington, including the N1, N5, N7 and N19 postcodes and the EC1 area to the south. Neighbourhoods we move people in and out of every week include:",
  neighbourhoods:
    "Angel, Barnsbury, Canonbury, Highbury, Holloway, Upper Holloway and Lower Holloway, Tufnell Park, Archway, Kings Cross, Pentonville, Mildmay, Newington Green, and the Clerkenwell, Finsbury and St Luke's areas around EC1.",
  coverageOutro:
    "If your street sits on the Islington border with Camden, Hackney, Haringey or the City of London, we cover that too. Tell us your postcode and we will confirm coverage and a price.",
  knowIntro:
    "Islington is one of London's more demanding boroughs to move in, and the detail is where moves go wrong. Here is what our crews plan for.",
  knowBlocks: [
    {
      label: "Parking and permits",
      body: "Islington operates extensive controlled parking across the borough, so a removals vehicle usually cannot simply park outside on the day. Where access requires it, we arrange a suspended parking bay with the council in advance so the van can load and unload legally and close to the door. We factor this into the plan rather than leaving you to sort it on moving day.",
    },
    {
      label: "Main roads and access",
      body: "Busy routes such as Holloway Road, Caledonian Road, Upper Street, City Road and Essex Road carry traffic and loading restrictions, including red-route sections where stopping is limited. We plan timing and the loading point around these so the move stays efficient.",
    },
    {
      label: "Property types",
      body: "Much of Islington is Georgian and Victorian, so we move a lot of period townhouses around Canonbury and Barnsbury, terraced conversions and upper-floor flats with narrow original staircases, and mansion blocks with shared lifts and entrances. We bring the right protection and the right crew size for stairs and tight turns. Around Angel and the City Road basin there are modern apartment blocks with concierge desks, loading bays and booking rules, which we coordinate in advance. Along Upper Street and the Old Street fringe we handle office and retail moves.",
    },
    {
      label: "Emissions",
      body: "All of Islington sits within the Greater London Ultra Low Emission Zone. We run a modern, compliant fleet, so there is no emissions surcharge to worry about.",
    },
  ],
  nearby: [
    { label: "Camden", href: "/areas/camden" },
    { label: "Hackney", href: "/areas/hackney" },
    { label: "Haringey", href: "/areas/haringey" },
    { label: "City of London", href: "/areas/city-of-london" },
  ],
  faqs: [
    {
      question: "Do you cover my Islington postcode?",
      answer:
        "Yes. We cover the whole London Borough of Islington, including N1, N5, N7, N19 and the EC1 area, plus every named neighbourhood from Angel to Archway. Send us your postcode and we will confirm coverage and a price straight away.",
    },
    {
      question: "How much is a man and van in Islington?",
      answer:
        "Our man and van starts at £55 per hour plus VAT for one mover and a van, from £70 for two movers and from £90 for three, with a two-hour minimum. Half-day and full-day rates are also published. The price includes loading, transport, unloading, parking, tolls and insurance.",
    },
    {
      question: "Can you handle the parking and permits in Islington?",
      answer:
        "Yes. Islington has extensive controlled parking, so where a move needs it we arrange a suspended parking bay with the council in advance, so the van can load legally and close to your door. We plan this into the move rather than leaving it to you.",
    },
    {
      question: "Are you insured and accredited?",
      answer:
        "Yes. Every move includes goods-in-transit insurance in the price, and we are accredited by BAR, NGRS, IAM, The Furniture Ombudsman, QSS-DW and Checkatrade. Our crews are vetted and background-checked.",
    },
    {
      question: "Can you do a same-day move in Islington?",
      answer:
        "Often yes, subject to availability. We operate 7 days a week and usually arrange a crew and van at short notice for smaller moves. Call us and we will tell you what we can do today.",
    },
    {
      question: "Do you do full house and office moves, not just man and van?",
      answer:
        "Yes. We handle everything from a single item to a full house or office relocation in Islington, plus packing, storage, clearance and international moves, all from one accredited team.",
    },
    {
      question: "Do you cover areas near Islington?",
      answer:
        "Yes. We also serve neighbouring Camden, Hackney, Haringey and the City of London, and all 32 London boroughs, Greater London and Surrey, with nationwide moves on request.",
    },
  ],
};

/** Registry of fully-built borough pages. Add each cloned borough here. */
export const boroughs: Record<string, Borough> = {
  islington,
};
