// Edit everything here: phone, links, prices, copy.
export const site = {
  name: "LRJ Pro Lights & Sound Concepts",
  phone: "+63 900 000 0000", // TODO: real number
  phoneHref: "tel:+639000000000", // TODO: same number, no spaces
  messenger: "https://m.me/100071510806522",
  facebook: "https://web.facebook.com/profile.php?id=100071510806522",
  followers: 663,
};

export const services = [
  {
    t: "Sound system rental",
    d: "Speakers, subs, mixers and mics sized to your venue and guest count.",
  },
  {
    t: "Stage and party lights",
    d: "Moving heads, par lights and effects that change the mood of the room.",
  },
  {
    t: "On-site technician",
    d: "Someone who stays, balances the sound, and fixes problems before guests notice.",
  },
  {
    t: "Setup and teardown",
    d: "We arrive early, test everything, and pack out after your event.",
  },
];

// Prices are placeholders. Replace with your real rates or write "Ask for a quote".
export const packages = [
  {
    name: "Small gathering",
    fit: "Birthdays, house parties, small meetings",
    price: "₱0,000",
    items: [
      "2 speakers + 1 sub",
      "Wireless mic",
      "Basic party lights",
      "4 hours",
    ],
  },
  {
    name: "Full event",
    fit: "Weddings, debuts, corporate events",
    price: "₱0,000",
    featured: true,
    items: [
      "Full-range line array",
      "2 wireless mics + mixer",
      "Moving head lights",
      "Technician on site",
      "8 hours",
    ],
  },
  {
    name: "Big stage",
    fit: "Concerts, fiestas, school and town events",
    price: "Ask for a quote",
    items: [
      "Large PA + monitors",
      "Stage lighting rig",
      "Console + engineer",
      "Custom hours",
    ],
  },
];

export const steps = [
  {
    t: "Tell us your event",
    d: "Date, place and rough guest count. Takes one minute.",
  },
  {
    t: "Get a quote",
    d: "We reply with a package that fits and a clear price.",
  },
  { t: "We set up", d: "Our crew arrives early and tests everything." },
  {
    t: "You enjoy the night",
    d: "A technician stays on call until the last song.",
  },
];

// Owner-editable settings
// Dates already booked (YYYY-MM-DD). The quote form blocks these dates.
export const bookedDates = ["2026-12-24", "2026-12-31"];

// Sample rates for the instant estimator. Replace with real prices.
export const rates = {
  extraHour: 1000,
  tiers: [
    { max: 50, name: "Small gathering", base: 5000, hours: 4 },
    { max: 200, name: "Full event", base: 15000, hours: 8 },
    { max: Infinity, name: "Big stage", base: null, hours: 0 }, // null = ask for a quote
  ],
  addons: [
    { id: "lights", label: "Extra moving head lights", price: 3000 },
    { id: "dj", label: "DJ booth and mixer", price: 2500 },
    { id: "mic", label: "2 more wireless mics", price: 1000 },
  ],
};

// Add photos to public/gallery/ and set src: "/gallery/name.jpg". Empty src shows a placeholder tile.
export const gallery = [
  { src: null, caption: "Wedding reception" },
  { src: null, caption: "Debut night" },
  { src: null, caption: "Corporate event" },
  { src: null, caption: "Fiesta stage" },
  { src: null, caption: "Birthday party" },
  { src: null, caption: "Concert rig" },
];

// SAMPLE text. Replace with real customer feedback before launch.
export const testimonials = [
  {
    q: "The sound was clear in every corner of the hall.",
    n: "Sample customer, wedding",
  },
  {
    q: "They arrived early and the lights made the whole venue look different.",
    n: "Sample customer, debut",
  },
  {
    q: "Easy to book and the technician stayed until the end.",
    n: "Sample customer, company party",
  },
];

// Edit answers to match your real policies.
export const faqs = [
  {
    q: "Do you deliver and set up?",
    a: "Yes. We deliver, set up, test, and pack out after your event.",
  },
  {
    q: "How early should I book?",
    a: "As early as you can. Popular dates fill up, so check the date in the form first.",
  },
  {
    q: "Is a technician included?",
    a: "The Full event package includes one. For other packages, add one when you request a quote.",
  },
  {
    q: "What do you need at the venue?",
    a: "Access to power and a setup area. Tell us the venue and we’ll confirm the rest.",
  },
  {
    q: "How do deposits work?",
    a: "A deposit reserves your date. We confirm the amount in your quote.",
  },
];

export const eventTypes = [
  "Wedding",
  "Debut",
  "Birthday",
  "Corporate event",
  "Concert or fiesta",
  "Other",
];
