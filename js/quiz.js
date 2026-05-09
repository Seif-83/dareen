/* ═══════════════════════════════════════════════
   DARINE – QUIZ LOGIC
   quiz.js
═══════════════════════════════════════════════ */
"use strict";

// ═══════════════════════════════════════════════
// PRODUCT DATA
// ═══════════════════════════════════════════════
const PRODUCTS = {
  edp: [
    {
      name: "Midnight Rose",
      gender: "for her",
      categories: ["Floral", "Woody"],
      description:
        "A hauntingly beautiful tribute to the queen of flowers, wrapped in dark woods.",
      notes: {
        top: "Blackcurrant, Pink Pepper",
        middle: "Damask Rose, Night-Blooming Jasmine",
        base: "Patchouli, Dark Agarwood",
      },
    },
    {
      name: "Santal Serenity",
      gender: "unisex",
      categories: ["Woody", "Clean"],
      description:
        "A minimalist masterpiece of creamy sandalwood — quiet, polished, architectural.",
      notes: {
        top: "Cardamom, Papyrus",
        middle: "Iris, Violet",
        base: "Sandalwood, Cedarwood",
      },
    },
    {
      name: "Vanilla Ephemeral",
      gender: "for her",
      categories: ["Vanilla", "Sweet"],
      description:
        "A sophisticated, smoky interpretation of Madagascar vanilla.",
      notes: {
        top: "Bergamot, Rum",
        middle: "Tonka Bean, Tobacco Leaf",
        base: "Vanilla Bean, Amber",
      },
    },
    {
      name: "Azure Fig",
      gender: "unisex",
      categories: ["Fruity", "Woody"],
      description:
        "Green freshness of crushed fig leaves, coconut milk, and warm cedar.",
      notes: {
        top: "Fig Leaf, Grapefruit",
        middle: "Ripe Fig, Pink Pepper",
        base: "Cedarwood, Coconut Milk",
      },
    },
    {
      name: "Linen Luxe",
      gender: "for her",
      categories: ["Clean", "Soft"],
      description:
        "The olfactory equivalent of sun-dried Egyptian cotton — soft, luminous, effortless.",
      notes: {
        top: "Aldehydes, Sea Salt",
        middle: "Cotton Flower, Iris",
        base: "White Musk, Ambrette",
      },
    },
    {
      name: "Oud Nocturne",
      gender: "unisex",
      categories: ["Woody", "Dark"],
      description:
        "Cambodian Oud softened by liquid golden honey and a trail of aged leather.",
      notes: {
        top: "Saffron, Cinnamon",
        middle: "Honey, Labdanum",
        base: "Precious Oud, Leather",
      },
    },
    {
      name: "Citrus Silk",
      gender: "for her",
      categories: ["Fruity", "Soft"],
      description:
        "Sicilian citrus zest draped in white silk — vibrant yet refined.",
      notes: {
        top: "Blood Orange, Lemon",
        middle: "Neroli, Petitgrain",
        base: "White Musk, Vetiver",
      },
    },
    {
      name: "Petal Whisper",
      gender: "for her",
      categories: ["Floral", "Soft"],
      description:
        "The purity of morning dew settling on a bed of fresh peonies.",
      notes: {
        top: "Pear, Lychee",
        middle: "Peony, Lily of the Valley",
        base: "White Amber, Cashmeran",
      },
    },
    {
      name: "Amber Velvet",
      gender: "unisex",
      categories: ["Sweet", "Warm"],
      description:
        "A rich, resinous journey wrapped in a golden amber embrace.",
      notes: {
        top: "Bergamot, Nutmeg",
        middle: "Benzoin, Myrrh",
        base: "Golden Amber, Vanilla",
      },
    },
    {
      name: "Rose Saffron",
      gender: "unisex",
      categories: ["Floral", "Dark"],
      description: "An opulent clash of vibrant saffron and deep crimson rose.",
      notes: {
        top: "Saffron, Raspberry",
        middle: "Bulgarian Rose, Incense",
        base: "Vanilla, Guaiac Wood",
      },
    },
    {
      name: "Carbon Steel",
      gender: "for him",
      categories: ["Woody", "Dark"],
      description:
        "Cold metallic aldehydes collide with the warmth of charred oak.",
      notes: {
        top: "Aldehydes, Juniper",
        middle: "Violet Leaf",
        base: "Oakmoss, Iron",
      },
    },
    {
      name: "Atlas Cedar",
      gender: "for him",
      categories: ["Woody", "Clean"],
      description:
        "A rugged, dry wood scent that recalls high mountain air after rainfall.",
      notes: {
        top: "Pine Needle",
        middle: "Cedarwood",
        base: "Vetiver, Resin",
      },
    },
    {
      name: "Tobacco Cask",
      gender: "for him",
      categories: ["Warm", "Dark"],
      description:
        "The aroma of a private library and aged bourbon barrels — rich and intimate.",
      notes: {
        top: "Rum",
        middle: "Tobacco Leaf, Cocoa",
        base: "Dried Fruits, Sandalwood",
      },
    },
    {
      name: "Imperial Vetiver",
      gender: "for him",
      categories: ["Clean", "Woody"],
      description:
        "Earthy, grassy vetiver root refined into an elegant modern signature.",
      notes: {
        top: "Grapefruit",
        middle: "Nutmeg, Geranium",
        base: "Haitian Vetiver, Cedar",
      },
    },
    {
      name: "Deep Sea Noir",
      gender: "for him",
      categories: ["Aquatic", "Dark"],
      description:
        "Dark aquatic depths with an intense mineral and ambergris finish.",
      notes: {
        top: "Sea Salt, Lime",
        middle: "Rosemary",
        base: "Ambergris, Patchouli",
      },
    },
    {
      name: "Paper Sage",
      gender: "unisex",
      categories: ["Clean", "Soft"],
      description:
        "The scent of a fresh notebook opened beside sun-warmed sage fields.",
      notes: {
        top: "White Sage",
        middle: "Iso E Super",
        base: "Ambrette Seed",
      },
    },
    {
      name: "Nomad Tea",
      gender: "unisex",
      categories: ["Fruity", "Clean"],
      description: "A cooling blend of smoked lapsang tea and golden apricot.",
      notes: {
        top: "Bergamot",
        middle: "Lapsang Souchong",
        base: "Apricot, Musk",
      },
    },
    {
      name: "Concrete Rain",
      gender: "unisex",
      categories: ["Aquatic", "Clean"],
      description:
        "The scent of first rain hitting warm city pavement — petrichor made wearable.",
      notes: { top: "Rain Notes", middle: "Petrichor", base: "White Musk" },
    },
    {
      name: "Electric Saffron",
      gender: "unisex",
      categories: ["Sweet", "Dark"],
      description:
        "Zesty, metallic saffron with an unexpected neon-sweet edge of candy floss.",
      notes: { top: "Ginger", middle: "Saffron", base: "Candy Floss, Cedar" },
    },
    {
      name: "Velvet Smoke",
      gender: "unisex",
      categories: ["Warm", "Dark"],
      description:
        "Soft grey incense swirled slowly with creamy, pillowy vanilla smoke.",
      notes: {
        top: "Incense",
        middle: "Labdanum",
        base: "Guaiac Wood, Vanilla",
      },
    },
  ],
  oils: [
    {
      name: "Essence of Oud",
      gender: "unisex",
      categories: ["Woody", "Dark"],
      description:
        "Concentrated botanical oil featuring deeply aged Laotian agarwood.",
      notes: { top: "Bergamot", middle: "Black Rose", base: "Laotian Oud" },
    },
    {
      name: "Vanilla Nectar",
      gender: "for her",
      categories: ["Vanilla", "Warm"],
      description:
        "A syrupy, golden elixir of Bourbon vanilla and rare orchid.",
      notes: { top: "Star Anise", middle: "Orchid", base: "Bourbon Vanilla" },
    },
    {
      name: "White Bloom Oil",
      gender: "for her",
      categories: ["Floral", "Soft"],
      description:
        "A silky oil infusion of tuberose, pear, and creamy sandalwood.",
      notes: { top: "Pear", middle: "Tuberose", base: "Sandalwood" },
    },
    {
      name: "Spiced Amber",
      gender: "unisex",
      categories: ["Warm", "Sweet"],
      description:
        "Warm, resinous clove and amber oakmoss — deeply grounding and comforting.",
      notes: { top: "Clove", middle: "Labdanum", base: "Amber, Oakmoss" },
    },
    {
      name: "Musk Elixir",
      gender: "unisex",
      categories: ["Clean", "Soft"],
      description:
        "The purest expression of second-skin musk — clean, intimate, invisible.",
      notes: { top: "White Pepper", middle: "Iris Powder", base: "White Musk" },
    },
    {
      name: "Leather Bound",
      gender: "for him",
      categories: ["Woody", "Dark"],
      description:
        "Raw, masculine birch tar and leather oil — unapologetically bold.",
      notes: { top: "Saffron", middle: "Birch Tar", base: "Leather" },
    },
    {
      name: "Sandalwood Pure",
      gender: "for him",
      categories: ["Woody", "Soft"],
      description:
        "A pure Mysore-style sandalwood concentration — creamy, milky, meditative.",
      notes: { top: "Cardamom", middle: "Milk", base: "Sandalwood" },
    },
    {
      name: "Green Stem",
      gender: "unisex",
      categories: ["Clean", "Fruity"],
      description:
        "The sharp, green freshness of freshly snapped hyacinth and galbanum stalks.",
      notes: { top: "Galbanum", middle: "Hyacinth", base: "White Musk" },
    },
    {
      name: "Golden Resin",
      gender: "unisex",
      categories: ["Warm", "Sweet"],
      description:
        "A thick, honey-like amber resin with orange peel and benzoin warmth.",
      notes: { top: "Orange Peel", middle: "Benzoin", base: "Amber" },
    },
    {
      name: "Black Tea Concentrate",
      gender: "unisex",
      categories: ["Woody", "Clean"],
      description:
        "Deeply brewed Assam tea leaves with a dry hay and maté finish.",
      notes: { top: "Mate", middle: "Black Tea", base: "Hay" },
    },
    {
      name: "Ozone Oil",
      gender: "unisex",
      categories: ["Aquatic", "Clean"],
      description:
        "Airy, electric mineral oil — the scent of pre-storm atmosphere.",
      notes: { top: "Sea Salt", middle: "Airy Notes", base: "Clean Musk" },
    },
  ],
  mists: [
    {
      name: "Floral Dew",
      gender: "for her",
      categories: ["Floral", "Soft"],
      description:
        "A hydrating mist of apple blossom and jasmine tea — breezy and radiant.",
      notes: {
        top: "Apple Blossom",
        middle: "Jasmine Tea",
        base: "Clear Musk",
      },
    },
    {
      name: "Summer Orchard",
      gender: "for her",
      categories: ["Fruity", "Sweet"],
      description:
        "A refreshing splash of sun-ripened peach, apricot, and golden honey.",
      notes: { top: "Peach, Apricot", middle: "Nectarine", base: "Honey" },
    },
    {
      name: "Vanilla Cloud",
      gender: "unisex",
      categories: ["Vanilla", "Soft"],
      description:
        "A weightless veil of airy vanilla and whipped cream over white woods.",
      notes: {
        top: "Whipped Cream",
        middle: "Vanilla Orchid",
        base: "White Woods",
      },
    },
    {
      name: "Green Tea & Woods",
      gender: "unisex",
      categories: ["Woody", "Clean"],
      description:
        "An invigorating water-based botanical mist of green tea, bamboo, and cedar.",
      notes: { top: "Green Tea, Lemon", middle: "Bamboo", base: "Cedar" },
    },
    {
      name: "Berry Glaze",
      gender: "for her",
      categories: ["Fruity", "Floral"],
      description:
        "Wild strawberry and soft rosewater with a sheer sugar cane dry-down.",
      notes: {
        top: "Wild Strawberry",
        middle: "Rosewater",
        base: "Sugar Cane",
      },
    },
    {
      name: "Arctic Blast",
      gender: "for him",
      categories: ["Aquatic", "Clean"],
      description:
        "An icy rush of peppermint and eucalyptus — instantly revitalising.",
      notes: { top: "Peppermint", middle: "Eucalyptus", base: "Iced Musk" },
    },
    {
      name: "Forest Floor",
      gender: "for him",
      categories: ["Woody", "Dark"],
      description: "Damp earth, pine resin, and a bed of deep oakmoss.",
      notes: { top: "Pine", middle: "Wet Soil", base: "Oakmoss" },
    },
    {
      name: "Smoked Citrus",
      gender: "for him",
      categories: ["Fruity", "Woody"],
      description:
        "Burnt orange zest and black pepper over charred vetiver wood.",
      notes: { top: "Burnt Orange", middle: "Black Pepper", base: "Vetiver" },
    },
    {
      name: "Saltwater Breeze",
      gender: "unisex",
      categories: ["Aquatic", "Clean"],
      description:
        "Sea salt, driftwood, and seaweed — the calm of open ocean on skin.",
      notes: { top: "Sea Salt", middle: "Driftwood", base: "Seaweed" },
    },
    {
      name: "Zen Matcha",
      gender: "unisex",
      categories: ["Clean", "Soft"],
      description:
        "Calming powdered matcha with white chocolate and a cedar base.",
      notes: { top: "Matcha", middle: "White Chocolate", base: "Cedar" },
    },
    {
      name: "Spiced Pear",
      gender: "unisex",
      categories: ["Fruity", "Warm"],
      description:
        "Autumnal ripe pear kissed with cinnamon spice and soft vanilla.",
      notes: { top: "Pear", middle: "Cinnamon", base: "Vanilla" },
    },
    {
      name: "Urban Mist",
      gender: "unisex",
      categories: ["Aquatic", "Clean"],
      description:
        "Clean, metallic, modern freshness — mint, cool metals, and white musk.",
      notes: { top: "Mint", middle: "Metals", base: "White Musk" },
    },
  ],
};

const BUNDLES = [
  {
    name: "The Gilded Oud",
    vibe: "Opulent & Mysterious",
    steps: {
      Base: "Essence of Oud (Perfume Oil)",
      Heart: "Oud Nocturne (EDP)",
      Finish: "Vanilla Cloud (Body Mist)",
    },
    desc: "Aged agarwood softened by liquid honey, sealed under a weightless veil of marshmallow.",
    tags: ["Woody", "Dark", "Warm"],
  },
  {
    name: "The Solar Cotton",
    vibe: "Crisp, Clean & Polished",
    steps: {
      Base: "Musk Elixir (Perfume Oil)",
      Heart: "Linen Luxe (EDP)",
      Finish: "Floral Dew (Body Mist)",
    },
    desc: "Second-skin musk builds into sun-dried Egyptian cotton, finishing with a trail of morning dew.",
    tags: ["Clean", "Soft"],
  },
  {
    name: "The Midnight Gourmand",
    vibe: "Seductive & Sophisticated",
    steps: {
      Base: "Vanilla Nectar (Perfume Oil)",
      Heart: "Midnight Rose (EDP)",
      Finish: "Berry Glaze (Body Mist)",
    },
    desc: "Syrupy bourbon vanilla anchors a haunting Damask rose, with a playful wild berry spark.",
    tags: ["Floral", "Dark", "Warm"],
  },
  {
    name: "The Mediterranean Orchard",
    vibe: "Vibrant & Sun-drenched",
    steps: {
      Base: "White Bloom Oil (Perfume Oil)",
      Heart: "Azure Fig (EDP)",
      Finish: "Summer Orchard (Body Mist)",
    },
    desc: "White florals meet crushed fig leaves, topped with sun-ripened stone fruit.",
    tags: ["Fruity", "Soft", "Floral"],
  },
  {
    name: "The Minimalist Woods",
    vibe: "Zen & Architectural",
    steps: {
      Base: "Spiced Amber (Perfume Oil)",
      Heart: "Santal Serenity (EDP)",
      Finish: "Green Tea & Woods (Body Mist)",
    },
    desc: "Warm resinous amber meets creamy sandalwood, finished with invigorating green tea.",
    tags: ["Woody", "Clean", "Warm"],
  },
  {
    name: "The Rugged Gentleman",
    vibe: "Sophisticated & Earthy",
    steps: {
      Base: "Leather Bound (Perfume Oil)",
      Heart: "Atlas Cedar (EDP)",
      Finish: "Forest Floor (Body Mist)",
    },
    desc: "Raw leather, rugged dry cedar, and the scent of a rain-soaked forest floor.",
    tags: ["Woody", "Dark"],
  },
  {
    name: "The Urban Nomad",
    vibe: "Modern & Intellectual",
    steps: {
      Base: "Black Tea Concentrate (Perfume Oil)",
      Heart: "Paper Sage (EDP)",
      Finish: "Zen Matcha (Body Mist)",
    },
    desc: "Concentrated tea leaves meet the aroma of a fresh notebook, calmed by matcha.",
    tags: ["Clean", "Woody"],
  },
  {
    name: "The Electric Night",
    vibe: "Bold & Energetic",
    steps: {
      Base: "Ozone Oil (Perfume Oil)",
      Heart: "Electric Saffron (EDP)",
      Finish: "Arctic Blast (Body Mist)",
    },
    desc: "Metallic minerals anchor neon saffron, with an icy menthol finish.",
    tags: ["Aquatic", "Dark", "Sweet"],
  },
];

// ═══════════════════════════════════════════════
// QUESTIONS — exactly 7, fully separate dimensions
// ═══════════════════════════════════════════════
// ── SVG icon library ──────────────────────────
// All icons are 22×22, stroke-based, consistent weight
const I = {
  // scent families
  flower: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="2.5"/><ellipse cx="11" cy="5.5" rx="2" ry="3"/><ellipse cx="11" cy="16.5" rx="2" ry="3"/><ellipse cx="5.5" cy="11" rx="3" ry="2"/><ellipse cx="16.5" cy="11" rx="3" ry="2"/><ellipse cx="7" cy="7" rx="1.8" ry="2.8" transform="rotate(-45 7 7)"/><ellipse cx="15" cy="15" rx="1.8" ry="2.8" transform="rotate(-45 15 15)"/><ellipse cx="15" cy="7" rx="1.8" ry="2.8" transform="rotate(45 15 7)"/><ellipse cx="7" cy="15" rx="1.8" ry="2.8" transform="rotate(45 7 15)"/></svg>`,
  tree: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2L4 12h4v8h6v-8h4L11 2z"/></svg>`,
  citrus: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M11 3v16M3 11h16"/><path d="M5.5 5.5l11 11M16.5 5.5l-11 11"/></svg>`,
  drop: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 3c0 0-7 7-7 11a7 7 0 0 0 14 0c0-4-7-11-7-11z"/></svg>`,
  wave: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M2 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M2 13c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/></svg>`,
  amber: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11,2 19,7 19,15 11,20 3,15 3,7"/><circle cx="11" cy="11" r="3"/></svg>`,
  // moods
  feather: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4C14 4 5 10 3 19"/><path d="M20 4c0 0-4 3-8 6"/><path d="M12 10l-3 5"/><path d="M9 15l-2 3"/></svg>`,
  moon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M19 10.5A9 9 0 0 1 9.5 3a9 9 0 1 0 9.5 7.5z"/></svg>`,
  sun: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="11" r="4"/><line x1="11" y1="2" x2="11" y2="4"/><line x1="11" y1="18" x2="11" y2="20"/><line x1="2" y1="11" x2="4" y2="11"/><line x1="18" y1="11" x2="20" y2="11"/><line x1="4.9" y1="4.9" x2="6.3" y2="6.3"/><line x1="15.7" y1="15.7" x2="17.1" y2="17.1"/><line x1="4.9" y1="17.1" x2="6.3" y2="15.7"/><line x1="15.7" y1="6.3" x2="17.1" y2="4.9"/></svg>`,
  heart: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7a5 5 0 0 0-9-3A5 5 0 0 0 2 7c0 7 9 13 9 13s9-6 9-13z"/></svg>`,
  zap: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13,2 4,13 11,13 9,20 18,9 11,9"/></svg>`,
  leaf: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 3c-8 0-15 7-15 15 4-1 8-3 11-6s5-7 6-11z"/><path d="M5 18l6-6"/></svg>`,
  // occasions
  sunrise: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 14h16"/><path d="M11 7v3"/><path d="M5.6 9.6l1.4 1.4"/><path d="M16.4 9.6l-1.4 1.4"/><path d="M2 14h1"/><path d="M19 14h1"/><path d="M7 14a4 4 0 0 1 8 0"/></svg>`,
  briefcase: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="8" width="18" height="12" rx="2"/><path d="M8 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><line x1="2" y1="14" x2="20" y2="14"/></svg>`,
  dinner: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M18 2v5a3 3 0 0 1-3 3v12"/><path d="M6 2v4"/><path d="M9 2v4"/><path d="M7.5 6a3.5 3.5 0 0 0 0 7v7"/></svg>`,
  night: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/><path d="M19 3l1 2"/><path d="M21 5l-2 1"/></svg>`,
  plane: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16v-2a2 2 0 0 0-2-2H5l-3 4h19z"/><path d="M5 12V5l4 2 4-4 4 2-3 7"/></svg>`,
  home: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l8-7 8 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 13,12 13,22"/></svg>`,
  // personality
  eye: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M2 11s3-7 9-7 9 7 9 7-3 7-9 7-9-7-9-7z"/><circle cx="11" cy="11" r="3"/></svg>`,
  rose: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20V9"/><path d="M7 13c0-2.2 1.8-4 4-4s4 1.8 4 4c0 3.5-4 7-4 7s-4-3.5-4-7z"/><path d="M8 9c0-1.7 1.3-3 3-3s3 1.3 3 3"/><path d="M9.5 6.5C9.5 5 10.2 4 11 4s1.5 1 1.5 2.5"/></svg>`,
  diamond: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h10l4 5-9 11L2 8l4-5z"/><path d="M2 8h18"/><path d="M6 3l5 5 5-5"/></svg>`,
  flame: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c0 0 5 5 5 10a6 6 0 0 1-12 0c0-3 2-6 2-6s1 3 3 4c0-3 2-5 2-8z"/></svg>`,
  // sillage
  dot: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="11" r="2" fill="currentColor"/></svg>`,
  ripple: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="11" r="2"/><circle cx="11" cy="11" r="5" opacity="0.5"/></svg>`,
  rings: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="11" r="2"/><circle cx="11" cy="11" r="5" opacity="0.6"/><circle cx="11" cy="11" r="8" opacity="0.3"/></svg>`,
  burst: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="11" r="2"/><circle cx="11" cy="11" r="5" opacity="0.6"/><circle cx="11" cy="11" r="8" opacity="0.35"/><line x1="11" y1="1" x2="11" y2="3" opacity="0.4"/><line x1="11" y1="19" x2="11" y2="21" opacity="0.4"/><line x1="1" y1="11" x2="3" y2="11" opacity="0.4"/><line x1="19" y1="11" x2="21" y2="11" opacity="0.4"/></svg>`,
  // texture
  snowflake: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="11" y1="2" x2="11" y2="20"/><line x1="2" y1="11" x2="20" y2="11"/><line x1="4.9" y1="4.9" x2="17.1" y2="17.1"/><line x1="17.1" y1="4.9" x2="4.9" y2="17.1"/><line x1="11" y1="5" x2="9" y2="7"/><line x1="11" y1="5" x2="13" y2="7"/><line x1="11" y1="17" x2="9" y2="15"/><line x1="11" y1="17" x2="13" y2="15"/></svg>`,
  silk: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M2 6c3 0 5 2 9 2s6-2 9-2"/><path d="M2 11c3 0 5 2 9 2s6-2 9-2"/><path d="M2 16c3 0 5 2 9 2s6-2 9-2"/></svg>`,
  wind: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M5 8h10a3 3 0 0 0 0-6 3 3 0 0 0-3 3"/><path d="M5 12h13a3 3 0 0 1 0 6 3 3 0 0 1-3-3"/><path d="M5 16H9"/></svg>`,
  wood: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="4" width="16" height="14" rx="2"/><line x1="3" y1="9" x2="19" y2="9"/><line x1="3" y1="14" x2="19" y2="14"/><line x1="9" y1="4" x2="9" y2="18"/></svg>`,
  petal: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="11" cy="7" rx="3" ry="5"/><ellipse cx="15.6" cy="13" rx="3" ry="5" transform="rotate(60 15.6 13)"/><ellipse cx="6.4" cy="13" rx="3" ry="5" transform="rotate(-60 6.4 13)"/><circle cx="11" cy="11" r="2"/></svg>`,
  smoke: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M8 20c0-3 3-3 3-6s-3-3-3-6"/><path d="M13 20c0-3 3-3 3-6s-3-3-3-6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="13" y1="2" x2="13" y2="6"/></svg>`,
  // gender
  venus: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="9" r="6"/><line x1="11" y1="15" x2="11" y2="21"/><line x1="8" y1="18" x2="14" y2="18"/></svg>`,
  mars: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="9" cy="13" r="6"/><line x1="14" y1="8" x2="20" y2="2"/><polyline points="16,2 20,2 20,6"/></svg>`,
  infinity: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M11 11c-2-3-4-4.5-6-4.5a4.5 4.5 0 0 0 0 9c2 0 4-1.5 6-4.5z"/><path d="M11 11c2 3 4 4.5 6 4.5a4.5 4.5 0 0 0 0-9c-2 0-4 1.5-6 4.5z"/></svg>`,
  grid: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="12" y="2" width="8" height="8" rx="1"/><rect x="2" y="12" width="8" height="8" rx="1"/><rect x="12" y="12" width="8" height="8" rx="1"/></svg>`,
};

const QUESTIONS = [
  // Q1 — Scent family
  {
    id: "family",
    title: "What kind of scent do you like?",
    hint: "Pick as many as you like",
    multi: true,
    layout: "2col",
    options: [
      { label: "Floral", desc: "Rose, jasmine, peony", scores: { Floral: 3 } },
      { label: "Woody", desc: "Cedar, oud, sandalwood", scores: { Woody: 3 } },
      { label: "Fruity", desc: "Citrus, fig, peach", scores: { Fruity: 3 } },
      {
        label: "Sweet",
        desc: "Vanilla, amber, honey",
        scores: { Warm: 3, Sweet: 2 },
      },
      {
        label: "Fresh",
        desc: "Clean, light, skin-like",
        scores: { Clean: 3, Soft: 2 },
      },
      {
        label: "Aquatic",
        desc: "Sea salt, rain, minerals",
        scores: { Aquatic: 3 },
      },
    ],
  },

  // Q2 — Mood
  {
    id: "mood",
    title: "How do you want to feel when wearing it?",
    hint: "Pick as many as you like",
    multi: true,
    layout: "2col",
    options: [
      {
        label: "Calm",
        desc: "Light and barely noticeable",
        scores: { Soft: 3, Clean: 1 },
      },
      { label: "Mysterious", desc: "Deep and intriguing", scores: { Dark: 3 } },
      {
        label: "Confident",
        desc: "Warm and uplifting",
        scores: { Warm: 2, Fruity: 1 },
      },
      {
        label: "Romantic",
        desc: "Soft, warm and inviting",
        scores: { Sweet: 2, Warm: 1 },
      },
      {
        label: "Bold",
        desc: "Strong and attention-grabbing",
        scores: { Aquatic: 2, Dark: 1 },
      },
      {
        label: "Grounded",
        desc: "Natural and earthy",
        scores: { Woody: 2, Clean: 1 },
      },
    ],
  },

  // Q3 — Occasion
  {
    id: "occasion",
    title: "When will you wear it?",
    hint: "Pick all that apply",
    multi: true,
    layout: "2col",
    options: [
      {
        label: "Daily",
        desc: "Every morning, all day",
        scores: { Clean: 2, Soft: 2 },
      },
      {
        label: "Work",
        desc: "Office or meetings",
        scores: { Woody: 2, Clean: 1 },
      },
      {
        label: "Dinner",
        desc: "Evenings and dining out",
        scores: { Dark: 2, Warm: 2 },
      },
      {
        label: "Night Out",
        desc: "Parties and late nights",
        scores: { Dark: 3, Sweet: 1 },
      },
      {
        label: "Travel",
        desc: "Holidays and getaways",
        scores: { Fruity: 2, Aquatic: 2 },
      },
      {
        label: "At Home",
        desc: "Relaxing indoors",
        scores: { Soft: 3, Warm: 1 },
      },
    ],
  },

  // Q4 — Personality (single-select)
  {
    id: "personality",
    title: "How would you describe yourself?",
    hint: "Choose the one that fits best",
    multi: false,
    layout: "1col",
    options: [
      {
        label: "Quiet and private",
        desc: "Reserved, thoughtful, layered",
        persona: "enigma",
        scores: { Dark: 3, Woody: 2 },
      },
      {
        label: "Warm and emotional",
        desc: "Caring, expressive, loves beauty",
        persona: "romantic",
        scores: { Floral: 3, Soft: 2 },
      },
      {
        label: "Fun and outgoing",
        desc: "Social, bright, full of energy",
        persona: "sunchaser",
        scores: { Fruity: 3, Aquatic: 2 },
      },
      {
        label: "Elegant and refined",
        desc: "Polished, tasteful, understated",
        persona: "tastemaker",
        scores: { Clean: 3, Woody: 2 },
      },
      {
        label: "Bold and daring",
        desc: "Confident, striking, unforgettable",
        persona: "provocateur",
        scores: { Dark: 3, Sweet: 2 },
      },
      {
        label: "Natural and calm",
        desc: "Grounded, peaceful, loves nature",
        persona: "naturalist",
        scores: { Woody: 3, Clean: 2 },
      },
    ],
  },

  // Q5 — Sillage (single-select)
  {
    id: "sillage",
    title: "How strong do you want it?",
    hint: "Choose one",
    multi: false,
    layout: "2col",
    options: [
      {
        icon: I.dot,
        label: "Very soft",
        desc: "Only you can smell it",
        scores: { Soft: 3 },
      },
      {
        icon: I.ripple,
        label: "Light",
        desc: "Noticeable when close",
        scores: { Clean: 2, Soft: 1 },
      },
      {
        icon: I.rings,
        label: "Moderate",
        desc: "Leaves a pleasant trail",
        scores: { Woody: 2, Warm: 1 },
      },
      {
        icon: I.burst,
        label: "Strong",
        desc: "Fills the room",
        scores: { Dark: 2, Sweet: 1 },
      },
    ],
  },

  // Q6 — Texture
  {
    id: "texture",
    title: "What feeling do you prefer on your skin?",
    hint: "Pick as many as you like",
    multi: true,
    layout: "2col",
    options: [
      {
        label: "Cool and fresh",
        desc: "Like cold water or sea breeze",
        scores: { Aquatic: 3 },
      },
      {
        label: "Smooth and rich",
        desc: "Like cream or velvet",
        scores: { Warm: 2, Sweet: 1 },
      },
      {
        label: "Light and airy",
        desc: "Barely there, like clean air",
        scores: { Clean: 3, Soft: 1 },
      },
      {
        label: "Dry and woody",
        desc: "Like bark, resin or dry earth",
        scores: { Woody: 3 },
      },
      {
        label: "Soft and powdery",
        desc: "Gentle, like talc or petals",
        scores: { Floral: 3, Soft: 1 },
      },
      {
        label: "Warm and deep",
        desc: "Like amber, smoke or resin",
        scores: { Dark: 2, Warm: 2 },
      },
    ],
  },

  // Q7 — Gender (single-select)
  {
    id: "gender",
    title: "Who are you shopping for?",
    hint: "This filters your results",
    multi: false,
    layout: "2col",
    isGender: true,
    options: [
      {
        label: "For Her",
        desc: "Women's and unisex picks",
        genderValue: "for her",
        scores: {},
      },
      {
        label: "For Him",
        desc: "Men's and unisex picks",
        genderValue: "for him",
        scores: {},
      },
      {
        label: "Unisex",
        desc: "Gender-free collection only",
        genderValue: "unisex",
        scores: {},
      },
      {
        label: "Everything",
        desc: "Show the full collection",
        genderValue: "all",
        scores: {},
      },
    ],
  },
];

// ═══════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════
let currentQ = 0;
let answers = {}; // { questionId: [optionIndex, ...] }
let finalPersona = null;
let chosenGender = "all";

// ═══════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════
function showPage(id) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("is-active"));
  document.getElementById(id).classList.add("is-active");
  window.scrollTo(0, 0);
}

function startQuiz() {
  currentQ = 0;
  answers = {};
  finalPersona = null;
  chosenGender = "all";
  showPage("page-quiz");
  renderQuestion();
}

function goBack() {
  if (currentQ > 0) {
    currentQ--;
    renderQuestion();
  }
}

function goNext() {
  const q = QUESTIONS[currentQ];
  const sel = answers[q.id] || [];
  if (sel.length === 0) return;

  if (currentQ < QUESTIONS.length - 1) {
    currentQ++;
    renderQuestion();
  } else {
    buildResults();
  }
}

// ═══════════════════════════════════════════════
// RENDER
// ═══════════════════════════════════════════════
function renderQuestion() {
  const q = QUESTIONS[currentQ];
  const total = QUESTIONS.length;
  const pct = Math.round((currentQ / total) * 100);
  const sel = answers[q.id] || [];

  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("progressLabel").textContent =
    `Question ${currentQ + 1} of ${total}`;

  document.getElementById("btnBack").style.visibility =
    currentQ === 0 ? "hidden" : "visible";

  const nextBtn = document.getElementById("btnNext");
  nextBtn.innerHTML = `<span>${currentQ === total - 1 ? "✦ Reveal My Scent" : "Continue →"}</span>`;
  nextBtn.classList.toggle("is-enabled", sel.length > 0);

  const layoutMap = {
    "2col": "quiz__options--2col",
    "3col": "quiz__options--3col",
    "1col": "quiz__options--1col",
  };
  const gridClass = layoutMap[q.layout] || "quiz__options--2col";

  // Gender question uses special card style
  const isGender = !!q.isGender;

  const optionsHtml = q.options
    .map(
      (opt, i) => `
    <button
      class="option${isGender ? " option--gender" : ""} ${sel.includes(i) ? "is-selected" : ""}"
      data-idx="${i}"
      onclick="selectOption('${q.id}', ${i}, ${q.multi})"
      type="button"
    >
      
      <div class="option__content">
        <div class="option__title">${opt.label}</div>
        <div class="option__desc">${opt.desc}</div>
      </div>
      <div class="option__check"></div>
    </button>
  `,
    )
    .join("");

  document.getElementById("questionContainer").innerHTML = `
    <div class="quiz__question">
      <p class="quiz__q-number">✦ ${currentQ + 1} / ${total}</p>
      <h2 class="quiz__q-title">${q.title}</h2>
      <p class="quiz__q-hint">${q.multi ? "Select all that apply" : "Choose one"}</p>
      <div class="quiz__options ${gridClass}" id="optGrid">${optionsHtml}</div>
    </div>
  `;
}

function selectOption(qId, idx, multi) {
  if (!answers[qId]) answers[qId] = [];

  if (multi) {
    const pos = answers[qId].indexOf(idx);
    if (pos >= 0) answers[qId].splice(pos, 1);
    else answers[qId].push(idx);
  } else {
    answers[qId] = [idx];
  }

  const grid = document.getElementById("optGrid");
  if (!grid) return;
  const sel = answers[qId];
  grid.querySelectorAll(".option").forEach((btn) => {
    btn.classList.toggle(
      "is-selected",
      sel.includes(parseInt(btn.dataset.idx, 10)),
    );
  });
  document
    .getElementById("btnNext")
    .classList.toggle("is-enabled", sel.length > 0);
}

// ═══════════════════════════════════════════════
// SCORING
// ═══════════════════════════════════════════════
function buildScores() {
  const scores = {};
  QUESTIONS.forEach((q) => {
    const selected = answers[q.id] || [];
    selected.forEach((idx) => {
      const opt = q.options[idx];
      if (!opt) return;
      if (opt.persona) finalPersona = opt.persona;
      if (opt.genderValue) chosenGender = opt.genderValue;
      Object.entries(opt.scores || {}).forEach(([cat, pts]) => {
        scores[cat] = (scores[cat] || 0) + pts;
      });
    });
  });
  return scores;
}

function scoreProduct(product, scores) {
  return (product.categories || []).reduce(
    (acc, cat) => acc + (scores[cat] || 0),
    0,
  );
}

function topMatches(list, scores, n, genderFilter) {
  return [...list]
    .filter((p) => {
      if (!genderFilter || genderFilter === "all") return true;
      return p.gender === genderFilter || p.gender === "unisex";
    })
    .map((p) => ({ ...p, _score: scoreProduct(p, scores) }))
    .sort((a, b) => b._score - a._score)
    .slice(0, n);
}

function topBundles(scores, gender, n) {
  // Gender-sensitive bundle scoring
  const genderMap = {
    "for her": [
      "The Midnight Gourmand",
      "The Solar Cotton",
      "The Mediterranean Orchard",
      "The Minimalist Woods",
      "The Gilded Oud",
    ],
    "for him": [
      "The Rugged Gentleman",
      "The Urban Nomad",
      "The Electric Night",
      "The Minimalist Woods",
      "The Gilded Oud",
    ],
    unisex: [
      "The Urban Nomad",
      "The Electric Night",
      "The Gilded Oud",
      "The Minimalist Woods",
      "The Solar Cotton",
    ],
    all: null,
  };
  const preferred = genderMap[gender];
  return [...BUNDLES]
    .map((b) => ({
      ...b,
      _score:
        b.tags.reduce((acc, t) => acc + (scores[t] || 0), 0) +
        (preferred && preferred.includes(b.name) ? 4 : 0),
    }))
    .sort((a, b) => b._score - a._score)
    .slice(0, n);
}

// ═══════════════════════════════════════════════
// RESULTS
// ═══════════════════════════════════════════════
const PERSONA_LABELS = {
  enigma: {
    label: "The Enigma",
    emoji: "🌙",
    text: "Your scent is a question no one can fully answer — dark, layered, magnetic.",
  },
  romantic: {
    label: "The Romantic",
    emoji: "🌸",
    text: "You dress your skin in stories — soft, beautiful, tender, and deeply felt.",
  },
  sunchaser: {
    label: "The Sun Chaser",
    emoji: "☀️",
    text: "Your fragrance radiates energy and light — joyful, free, and alive.",
  },
  tastemaker: {
    label: "The Tastemaker",
    emoji: "💎",
    text: "Your scent is refined precision — effortless, polished, quietly powerful.",
  },
  provocateur: {
    label: "The Provocateur",
    emoji: "🔥",
    text: "Your fragrance makes a statement before you speak — bold and unforgettable.",
  },
  naturalist: {
    label: "The Naturalist",
    emoji: "🌿",
    text: "Your scent is rooted in the earth — grounded, honest, and deeply calming.",
  },
};

function buildResults() {
  showPage("page-results");
  const scores = buildScores();
  const persona = PERSONA_LABELS[finalPersona] || PERSONA_LABELS["tastemaker"];
  const gender = chosenGender; // 'for her' | 'for him' | 'unisex' | 'all'

  // ── Helper: pick top N from a list, filtered by gender answer ──
  function pick(list, n) {
    return topMatches(list, scores, n, gender);
  }

  // ─────────────────────────────────────────────
  //  BUILD PRODUCT SECTIONS based on gender answer
  // ─────────────────────────────────────────────

  let edpSection = "";
  let oilSection = "";
  let mistSection = "";

  if (gender === "for her") {
    // Show: 2 for-her EDPs + 1 unisex EDP
    const herEdps = pick(
      PRODUCTS.edp.filter((p) => p.gender === "for her"),
      2,
    );
    const unisexEdp = pick(
      PRODUCTS.edp.filter((p) => p.gender === "unisex"),
      1,
    );
    edpSection = `
      <div class="results__section">Your Eau de Parfum — For Her</div>
      <div class="results__grid">
        ${herEdps.map((p, i) => card(p, "Eau de Parfum · For Her", 0.06 + i * 0.08)).join("")}
        ${unisexEdp.map((p, i) => card(p, "Eau de Parfum · Unisex", 0.22 + i * 0.08)).join("")}
      </div>`;

    const herOils = pick(
      PRODUCTS.oils.filter((p) => p.gender === "for her"),
      1,
    );
    const unisexOil = pick(
      PRODUCTS.oils.filter((p) => p.gender === "unisex"),
      1,
    );
    oilSection = `
      <div class="results__section">Your Perfume Oils</div>
      <div class="results__grid">
        ${herOils.map((p, i) => card(p, "Perfume Oil · For Her", 0.06 + i * 0.08)).join("")}
        ${unisexOil.map((p, i) => card(p, "Perfume Oil · Unisex", 0.14 + i * 0.08)).join("")}
      </div>`;

    const herMists = pick(
      PRODUCTS.mists.filter((p) => p.gender === "for her"),
      1,
    );
    const unisexMist = pick(
      PRODUCTS.mists.filter((p) => p.gender === "unisex"),
      1,
    );
    mistSection = `
      <div class="results__section">Your Body &amp; Hair Mists</div>
      <div class="results__grid">
        ${herMists.map((p, i) => card(p, "Body &amp; Hair Mist · For Her", 0.06 + i * 0.08)).join("")}
        ${unisexMist.map((p, i) => card(p, "Body &amp; Hair Mist · Unisex", 0.14 + i * 0.08)).join("")}
      </div>`;
  } else if (gender === "for him") {
    // Show: 2 for-him EDPs + 1 unisex EDP
    const himEdps = pick(
      PRODUCTS.edp.filter((p) => p.gender === "for him"),
      2,
    );
    const unisexEdp = pick(
      PRODUCTS.edp.filter((p) => p.gender === "unisex"),
      1,
    );
    edpSection = `
      <div class="results__section">Your Eau de Parfum — For Him</div>
      <div class="results__grid">
        ${himEdps.map((p, i) => card(p, "Eau de Parfum · For Him", 0.06 + i * 0.08)).join("")}
        ${unisexEdp.map((p, i) => card(p, "Eau de Parfum · Unisex", 0.22 + i * 0.08)).join("")}
      </div>`;

    const himOils = pick(
      PRODUCTS.oils.filter((p) => p.gender === "for him"),
      1,
    );
    const unisexOil = pick(
      PRODUCTS.oils.filter((p) => p.gender === "unisex"),
      1,
    );
    oilSection = `
      <div class="results__section">Your Perfume Oils</div>
      <div class="results__grid">
        ${himOils.map((p, i) => card(p, "Perfume Oil · For Him", 0.06 + i * 0.08)).join("")}
        ${unisexOil.map((p, i) => card(p, "Perfume Oil · Unisex", 0.14 + i * 0.08)).join("")}
      </div>`;

    const himMists = pick(
      PRODUCTS.mists.filter((p) => p.gender === "for him"),
      1,
    );
    const unisexMist = pick(
      PRODUCTS.mists.filter((p) => p.gender === "unisex"),
      1,
    );
    mistSection = `
      <div class="results__section">Your Body &amp; Hair Mists</div>
      <div class="results__grid">
        ${himMists.map((p, i) => card(p, "Body &amp; Hair Mist · For Him", 0.06 + i * 0.08)).join("")}
        ${unisexMist.map((p, i) => card(p, "Body &amp; Hair Mist · Unisex", 0.14 + i * 0.08)).join("")}
      </div>`;
  } else if (gender === "unisex") {
    // Show unisex-only picks
    const unisexEdps = pick(
      PRODUCTS.edp.filter((p) => p.gender === "unisex"),
      3,
    );
    edpSection = `
      <div class="results__section">Your Eau de Parfum — Unisex</div>
      <div class="results__grid">
        ${unisexEdps.map((p, i) => card(p, "Eau de Parfum · Unisex", 0.06 + i * 0.08)).join("")}
      </div>`;

    const unisexOils = pick(
      PRODUCTS.oils.filter((p) => p.gender === "unisex"),
      2,
    );
    oilSection = `
      <div class="results__section">Your Perfume Oils</div>
      <div class="results__grid">
        ${unisexOils.map((p, i) => card(p, "Perfume Oil · Unisex", 0.06 + i * 0.08)).join("")}
      </div>`;

    const unisexMists = pick(
      PRODUCTS.mists.filter((p) => p.gender === "unisex"),
      2,
    );
    mistSection = `
      <div class="results__section">Your Body &amp; Hair Mists</div>
      <div class="results__grid">
        ${unisexMists.map((p, i) => card(p, "Body &amp; Hair Mist · Unisex", 0.06 + i * 0.08)).join("")}
      </div>`;
  } else {
    // 'all' — show everything: 2 unisex EDPs + one her + one him
    const unisexEdp = pick(
      PRODUCTS.edp.filter((p) => p.gender === "unisex"),
      2,
    );
    const herEdp = pick(
      PRODUCTS.edp.filter((p) => p.gender === "for her"),
      1,
    );
    const himEdp = pick(
      PRODUCTS.edp.filter((p) => p.gender === "for him"),
      1,
    );
    edpSection = `
      <div class="results__section">Your Signature Eau de Parfum</div>
      <div class="results__grid">
        ${unisexEdp.map((p, i) => card(p, "Eau de Parfum · Unisex", 0.06 + i * 0.08)).join("")}
      </div>
      <div class="results__section" style="margin-top:1.5rem">Made for Her &amp; for Him</div>
      <div class="results__gender-row">
        <div>
          <div class="results__gender-col-label">For Her</div>
          ${herEdp.map((p, i) => card(p, "Eau de Parfum", 0.06)).join("")}
        </div>
        <div>
          <div class="results__gender-col-label">For Him</div>
          ${himEdp.map((p, i) => card(p, "Eau de Parfum", 0.13)).join("")}
        </div>
      </div>`;

    const unisexOil = pick(
      PRODUCTS.oils.filter((p) => p.gender === "unisex"),
      1,
    );
    const herOil = pick(
      PRODUCTS.oils.filter((p) => p.gender === "for her"),
      1,
    );
    const himOil = pick(
      PRODUCTS.oils.filter((p) => p.gender === "for him"),
      1,
    );
    oilSection = `
      <div class="results__section">Your Perfume Oils</div>
      <div class="results__grid">
        ${unisexOil.map((p, i) => card(p, "Perfume Oil · Unisex", 0.06)).join("")}
        ${herOil.map((p, i) => card(p, "Perfume Oil · For Her", 0.13)).join("")}
        ${himOil.map((p, i) => card(p, "Perfume Oil · For Him", 0.2)).join("")}
      </div>`;

    const unisexMist = pick(
      PRODUCTS.mists.filter((p) => p.gender === "unisex"),
      1,
    );
    const herMist = pick(
      PRODUCTS.mists.filter((p) => p.gender === "for her"),
      1,
    );
    const himMist = pick(
      PRODUCTS.mists.filter((p) => p.gender === "for him"),
      1,
    );
    mistSection = `
      <div class="results__section">Your Body &amp; Hair Mists</div>
      <div class="results__grid">
        ${unisexMist.map((p, i) => card(p, "Body &amp; Hair Mist · Unisex", 0.06)).join("")}
        ${herMist.map((p, i) => card(p, "Body &amp; Hair Mist · For Her", 0.13)).join("")}
        ${himMist.map((p, i) => card(p, "Body &amp; Hair Mist · For Him", 0.2)).join("")}
      </div>`;
  }

  const bundles = topBundles(scores, gender, 3);

  const topCats = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map((e) => e[0])
    .join(" · ");

  const genderLabel =
    {
      "for her": "Curated for Her",
      "for him": "Curated for Him",
      unisex: "Curated Unisex",
      all: "Full Collection",
    }[gender] || "Your Collection";

  function noteTags(notes) {
    return [notes.top, notes.middle, notes.base]
      .join(", ")
      .split(", ")
      .slice(0, 5)
      .map((n) => `<span class="pcard__note">${n.trim()}</span>`)
      .join("");
  }

  function card(p, type, delay = 0) {
    if (!p) return "";
    const id = p.name.replace(/\s+/g, "-").toLowerCase();
    return `
      <div class="pcard" style="animation-delay:${delay}s">
        <div class="pcard__corner"></div>
        <div class="pcard__type">${type}</div>
        <div class="pcard__name">${p.name}</div>
        <div class="pcard__gender">${p.gender}</div>
        <div class="pcard__desc">${p.description}</div>
        <div class="pcard__notes-label">Fragrance Notes</div>
        <div class="pcard__notes">${noteTags(p.notes)}</div>
        <button class="pcard__atc" id="atc-${id}"
          onclick='addQuizItemToCart(this, ${JSON.stringify(p.name)}, ${JSON.stringify(type.split("\xb7")[0].trim())})'>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span>Add to Cart</span>
        </button>
      </div>`;
  }

  function bundleCard(b, delay = 0) {
    const id = b.name.replace(/\s+/g, "-").toLowerCase();
    const stepsHtml = Object.entries(b.steps)
      .map(
        ([k, v]) =>
          `<div class="pcard__step"><span class="pcard__step-label">${k}</span>${v}</div>`,
      )
      .join("");
    return `
      <div class="pcard pcard--dark" style="animation-delay:${delay}s">
        <div class="pcard__corner"></div>
        <div class="pcard__type">✦ Layering Bundle</div>
        <div class="pcard__name">${b.name}</div>
        <div class="pcard__gender">${b.vibe}</div>
        <div class="pcard__steps">${stepsHtml}</div>
        <div class="pcard__desc">${b.desc}</div>
        <button class="pcard__atc pcard__atc--light" id="atc-${id}"
          onclick='addQuizItemToCart(this, ${JSON.stringify(b.name)}, "Layering Bundle")'>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span>Add to Cart</span>
        </button>
      </div>`;
  }

  // after HTML is injected, re-sync any already-added items
  // (called after innerHTML assignment below)

  document.getElementById("resultsWrap").innerHTML = `
    <div class="results__header">
      <p class="results__eyebrow"><span></span>Your Scent Profile<span></span></p>
      <h2 class="results__title">You are <em>${persona.label}</em></h2>
      <p class="results__sub">${persona.text}</p>
      <div class="results__badge">
        <span class="results__badge-icon">${persona.emoji}</span>
        <span>${genderLabel} &nbsp;·&nbsp; ${topCats}</span>
      </div>
    </div>

    ${edpSection}
    ${oilSection}
    ${mistSection}

    <div class="results__section">Your Layering Bundles</div>
    <div class="results__grid">
      ${bundles.map((b, i) => bundleCard(b, 0.06 + i * 0.1)).join("")}
    </div>

    <div class="results__footer">
      <p>Your scent story is always evolving. Retake the quiz whenever a new chapter begins.</p>
      <div class="results__footer-btns">
        <button class="btn--outline" onclick="startQuiz()">↺ Retake the Quiz</button>
      </div>
    </div>
  `;

  // Re-sync cart button states after render
  setTimeout(syncCartButtons, 20);
}

// ═══════════════════════════════════════════════
// CART ENGINE (Integrated with cart_global.js)
// ═══════════════════════════════════════════════

function addQuizItemToCart(btn, name, type) {
  // Find full product data in PRODUCTS or BUNDLES
  let productData = null;

  // Search in PRODUCTS
  for (const category in PRODUCTS) {
    const found = PRODUCTS[category].find((p) => p.name === name);
    if (found) {
      productData = {
        ...found,
        type:
          category === "edp"
            ? "Eau de Parfum"
            : category === "oils"
              ? "Perfume Oils"
              : "Body and Hair Mists",
      };
      break;
    }
  }

  // Search in BUNDLES if not found
  if (!productData) {
    const foundBundle = BUNDLES.find((b) => b.name === name);
    if (foundBundle) {
      productData = {
        name: foundBundle.name,
        type: "Layering Bundle",
        description: foundBundle.desc,
        gender: "unisex", // Bundles are generally unisex in vibe
        categories: foundBundle.tags,
        notes: {
          top: foundBundle.steps.Base,
          middle: foundBundle.steps.Heart,
          base: foundBundle.steps.Finish,
        },
      };
    }
  }

  const product = {
    name: name,
    type: type,
    gender: productData ? productData.gender : "unisex",
    categories: productData ? productData.categories : [],
    description: productData ? productData.description : "",
    notes: productData
      ? productData.notes
      : { top: "N/A", middle: "N/A", base: "N/A" },
    price: typeof getProductPrice === "function" ? getProductPrice(type) : 0,
  };

  if (typeof addToCart === "function") {
    addToCart(product);
  }

  // Button feedback (keep local to quiz)
  btn.classList.add("is-added");
  btn.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    <span>Added</span>`;
  setTimeout(() => {
    btn.classList.remove("is-added");
    btn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <span>Add to Cart</span>`;
  }, 1800);

  if (typeof renderCartDrawer === "function") renderCartDrawer();
}

function removeFromCart(name) {
  let cart = getCart();
  cart = cart.filter((i) => i.name !== name);
  saveCart(cart);
  if (typeof updateCartBadge === "function") updateCartBadge();
  renderCartDrawer();
  syncCartButtons();
}

// Using global updateCartBadge from cart_global.js

function syncCartButtons() {
  const cart = getCart();
  const addedNames = cart.map((i) => i.name);
  document.querySelectorAll(".pcard__atc").forEach((btn) => {
    const isLight = btn.classList.contains("pcard__atc--light");
    if (!btn.classList.contains("is-added")) {
      btn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <span>Add to Cart</span>`;
    }
  });
}

function toggleCart() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  const isOpen = drawer.classList.contains("is-open");
  if (isOpen) {
    drawer.classList.remove("is-open");
    overlay.classList.remove("is-open");
  } else {
    renderCartDrawer();
    drawer.classList.add("is-open");
    overlay.classList.add("is-open");
  }
}

function renderCartDrawer() {
  const body = document.getElementById("cartBody");
  const footer = document.getElementById("cartFooter");
  if (!body) return;

  const cart = getCart();
  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart__empty">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" style="opacity:.35;margin-bottom:.8rem"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <p>Your cart is empty</p>
        <span>Add fragrances from your results</span>
      </div>`;
    footer.innerHTML = "";
    return;
  }

  body.innerHTML = cart
    .map(
      (item) => `
    <div class="cart__item">
      <div class="cart__item-info">
        <div class="cart__item-name">${item.name}</div>
        <div class="cart__item-type">${item.type}</div>
      </div>
      <div class="cart__item-right">
        <div class="cart__item-qty">× ${item.quantity}</div>
        <button class="cart__item-remove" onclick='removeFromCart(${JSON.stringify(item.name)})' aria-label="Remove">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    </div>`,
    )
    .join("");

  const total = cart.reduce((s, i) => s + i.quantity, 0);
  footer.innerHTML = `
    <div class="cart__summary">${total} item${total > 1 ? "s" : ""} selected</div>
    <button class="cart__checkout" onclick="window.location.href='checkout.php'">
      Proceed to Checkout
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </button>`;
}
