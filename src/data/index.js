const icon = (...codes) => String.fromCodePoint(...codes);

const driveFile = (id) => ({
  embedUrl: `https://drive.google.com/file/d/${id}/preview`,
  driveUrl: `https://drive.google.com/file/d/${id}/view?usp=drivesdk`,
});

const drivePhoto = (id, label) => ({
  src: `https://drive.google.com/thumbnail?id=${id}&sz=w1400`,
  driveUrl: `https://drive.google.com/file/d/${id}/view?usp=drivesdk`,
  label,
});

const instagramPhoto = (postId, label) => ({
  embedUrl: `https://www.instagram.com/p/${postId}/embed/captioned/`,
  instagramUrl: `https://www.instagram.com/p/${postId}/`,
  postId,
  label,
  isInstagram: true,
});

export const DRIVE_COLLECTION_URL =
  "https://drive.google.com/drive/folders/1XnvrNbs9PrLZb6OGgl2CuDhXUsPAB-co";

export const HOME_PHOTOS = [
  instagramPhoto("CyoJtK1P4oj", "Portfolio Frame 01"),
  instagramPhoto("C4oBVHWPXFj", "Portfolio Frame 02"),
  instagramPhoto("DT7CSa0kiEW", "Portfolio Frame 03"),
  instagramPhoto("C30Osl4vyox", "Portfolio Frame 04"),
];

export const ROLES = [
  "Content Creator ",
  "Photographer",
  "Videographer",
  "Social Media Manager",
  "Visual Storyteller",
];

export const HERO_STATS = [
  { num: 100, suffix: "+", label: "Project" },
  { num: 50, suffix: "+", label: "Events" },
  { num: 15, suffix: "+", label: "Awards" },
  { num: 5, suffix: "+", label: "Years" },
  { num: 25, suffix: "+", label: "Brands" },
];

export const STORY = [
  {
    year: "2020",
    title: "First Creative Experiments",
    desc: "Started learning framing, editing, and social storytelling through campus projects and personal shoots.",
    side: "left",
  },
  {
    year: "2022",
    title: "Campus Media Work",
    desc: "Moved from casual content into structured event coverage, portraits, reels, and campaign support.",
    side: "right",
  },
  {
    year: "2023",
    title: "MMDU Social Media",
    desc: "Managed content planning, daily coverage, and visual publishing for university events and student stories.",
    side: "left",
  },
  {
    year: "2024",
    title: "Concert & Brand Shoots",
    desc: "Covered large-scale events, including live performances, brand collaborations, and behind-the-scenes films.",
    side: "right",
  },
  {
    year: "2026",
    title: "Creative Studio Vision",
    desc: "Building a broader creative practice across photography, videography, content strategy, and digital growth.",
    side: "left",
  },
];

export const SKILLS = [
  { name: "Photography", pct: 94 },
  { name: "Videography", pct: 90 },
  { name: "Video Editing", pct: 88 },
  { name: "Social Media Strategy", pct: 92 },
  { name: "Brand Promotions", pct: 84 },
  { name: "Event Coverage", pct: 96 },
];

export const SKILL_PILLS = [
  "Adobe Lightroom",
  "Premiere Pro",
  "After Effects",
  "Canva",
  "Instagram Reels",
  "YouTube Shorts",
  "Content Calendars",
  "Campaign Planning",
  "Copywriting",
  "Analytics",
];

export const SERVICES = [
  {
    icon: icon(0x1f4f8),
    title: "Photography",
    desc: "Portraits, campus stories, weddings, lifestyle shoots, and high-energy event coverage.",
  },
  {
    icon: icon(0x1f3ac),
    title: "Videography",
    desc: "Cinematic films, reels, highlights, interviews, and polished brand videos.",
  },
  {
    icon: icon(0x1f4f1),
    title: "Social Media Management",
    desc: "Planning, publishing, audience growth, visual direction, and campaign reporting.",
  },
  {
    icon: icon(0x1f680),
    title: "Brand Promotions",
    desc: "Content-led promotions that feel authentic, memorable, and platform-ready.",
  },
  {
    icon: icon(0x1f58c),
    title: "Creative Direction",
    desc: "Concepts, moodboards, shoot planning, and visual systems for campaigns.",
  },
  {
    icon: icon(0x2702),
    title: "Video Editing",
    desc: "Short-form edits, reels, recaps, color work, transitions, captions, and sound polish.",
  },
  {
    icon: icon(0x1f389),
    title: "Event Coverage",
    desc: "Fast-moving photo and video coverage for concerts, college fests, and ceremonies.",
  },
  {
    icon: icon(0x1f4dd),
    title: "Content Strategy",
    desc: "Content calendars, format planning, hooks, posting rhythms, and growth insights.",
  },
];

export const PORTFOLIO = [
  {
    title: "Drive Photo 01",
    category: "Drive Photos",
    emoji: icon(0x1f3a4),
    summary: "Featured image from Basid's Google Drive portfolio collection.",
    tags: ["Photography", "Portfolio", "Drive"],
    ...driveFile("1pxEkxek7ATltl6BdWWJQdc6jyiCFwLhf"),
  },
  {
    title: "Drive Photo 02",
    category: "Drive Photos",
    emoji: icon(0x1f393),
    summary:
      "A selected frame presented directly from the shared Drive library.",
    tags: ["Photography", "Creative", "Drive"],
    ...driveFile("1euFGllZXFPmYCSAkxFy_l16aKh7VU-rS"),
  },
  {
    title: "Drive Photo 03",
    category: "Drive Photos",
    emoji: icon(0x1f490),
    summary:
      "Portfolio preview embedded with Google Drive's native file viewer.",
    tags: ["Photography", "Preview", "Drive"],
    ...driveFile("1j18FOznuGSqtFRXNgIjMfR6n0QBm0sq3"),
  },
  {
    title: "Drive Photo 04",
    category: "Drive Photos",
    emoji: icon(0x1f4a1),
    summary:
      "A Drive-hosted portfolio item with quick access to the original file.",
    tags: ["Photo", "Collection", "Drive"],
    ...driveFile("1S9PhStQSRjjGgnLcUX9atln7ZkuI-71c"),
  },
  {
    title: "Drive Photo 05",
    category: "Drive Photos",
    emoji: icon(0x2708, 0xfe0f),
    summary: "A highlighted Drive image displayed inside the portfolio grid.",
    tags: ["Photo", "Highlight", "Drive"],
    ...driveFile("1DUjCRb56nuAoVxSarsrElhVirkfBmWOp"),
  },
  {
    title: "Drive Photo 06",
    category: "Drive Photos",
    emoji: icon(0x1f3a5),
    summary: "Another selected preview from the Google Drive photo collection.",
    tags: ["Photo", "Gallery", "Drive"],
    ...driveFile("1La7yxqPmnVuSlpihZsZGWZSjUi-M70a_"),
  },
];

export const PHOTOS = [
  { emoji: icon(0x1f305), cat: "Travel", title: "Golden Hour Trails" },
  { emoji: icon(0x1f3a4), cat: "Concert", title: "Stage Energy" },
  { emoji: icon(0x1f490), cat: "Wedding", title: "Quiet Vows" },
  { emoji: icon(0x1f393), cat: "Campus", title: "MMDU Moments" },
  { emoji: icon(0x1f307), cat: "Urban", title: "City Light" },
  { emoji: icon(0x1f4f7), cat: "Portrait", title: "Studio Glow" },
];

export const VIDEOS = [
  {
    emoji: icon(0x1f3ac),
    title: "Campus Fest Aftermovie",
    tag: "Aftermovie",
    duration: "02:18",
    views: "18K",
    year: "2026",
  },
  {
    emoji: icon(0x1f3a4),
    title: "Hardy Sandhu Concert Recap",
    tag: "Concert",
    duration: "01:12",
    views: "42K",
    year: "2025",
  },
  {
    emoji: icon(0x1f490),
    title: "Wedding Highlight Film",
    tag: "Wedding",
    duration: "03:45",
    views: "12K",
    year: "2025",
  },
  {
    emoji: icon(0x1f4f1),
    title: "Brand Reel Campaign",
    tag: "Reels",
    duration: "00:32",
    views: "25K",
    year: "2026",
  },
  {
    emoji: icon(0x1f3a5),
    title: "Behind The Lens",
    tag: "BTS",
    duration: "01:44",
    views: "9K",
    year: "2024",
  },
  {
    emoji: icon(0x1f680),
    title: "Launch Story Teaser",
    tag: "Brand",
    duration: "00:45",
    views: "16K",
    year: "2026",
  },
  {
    emoji: icon(0x1f3ac),
    title: "New Video",
    tag: "Video",
    duration: "00:00",
    views: "0",
    year: "2026",
    embedUrl:
      "https://drive.google.com/file/d/1GLJ404H-NyAervZGO_X5xC3QemwWO5b0/preview",
    driveUrl:
      "https://drive.google.com/file/d/1GLJ404H-NyAervZGO_X5xC3QemwWO5b0/view?usp=drivesdk",
  },
];

export const SM_STATS = [
  { icon: icon(0x1f4f8), num: "5K+", label: "Instagram Family" },
  { icon: icon(0x25b6, 0xfe0f), num: "2.5K+", label: "YouTube Subscribers" },
  { icon: icon(0x1f440), num: "50K+", label: "Video Views" },
  { icon: icon(0x1f4c8), num: "92%", label: "Engagement Lift" },
  { icon: icon(0x1f91d), num: "25+", label: "Collaborations" },
];

export const BRANDS = [
  { icon: icon(0x1f393), name: "MMDU University", type: "Education" },
  { icon: icon(0x1f3a4), name: "Live Concerts", type: "Entertainment" },
  { icon: icon(0x1f490), name: "Wedding Clients", type: "Events" },
  { icon: icon(0x1f4a1), name: "Local Brands", type: "Promotions" },
  { icon: icon(0x1f4f1), name: "Creators", type: "Digital" },
  { icon: icon(0x1f3c6), name: "Campus Fests", type: "Community" },
  { icon: icon(0x1f4f7), name: "Photo Walks", type: "Creative" },
  { icon: icon(0x1f680), name: "Launch Teams", type: "Campaigns" },
];

export const AWARDS = [
  {
    medal: icon(0x1f3c6),
    title: "Best Event Coverage",
    org: "Campus Media Awards",
    year: "2025",
    desc: "Recognized for fast, polished, and emotionally sharp photo-video coverage.",
  },
  {
    medal: icon(0x1f947),
    title: "Creative Excellence",
    org: "MMDU Cultural Fest",
    year: "2024",
    desc: "Awarded for visual storytelling across campaigns, highlights, and reels.",
  },
  {
    medal: icon(0x1f31f),
    title: "Rising Creator",
    org: "Digital Creator Circle",
    year: "2024",
    desc: "Selected for consistent growth, distinctive edits, and audience connection.",
  },
];

export const CERTS = [
  {
    icon: icon(0x1f4dc),
    name: "Digital Marketing Foundations",
    issuer: "Online Credential",
  },
  {
    icon: icon(0x1f3a8),
    name: "Visual Design Basics",
    issuer: "Creative Learning Program",
  },
  {
    icon: icon(0x1f3ac),
    name: "Video Editing Workflow",
    issuer: "Creator Workshop",
  },
];

export const EXPERIENCES = [
  {
    icon: icon(0x1f4f1),
    title: "Social Media Manager",
    company: "MMDU University",
    period: "2023 - Present",
    desc: "Planning and publishing campus content, covering events, and shaping digital storytelling across platforms.",
    tags: ["Strategy", "Content", "Analytics"],
  },
  {
    icon: icon(0x1f4f8),
    title: "Freelance Photographer",
    company: "Events, Weddings & Brands",
    period: "2021 - Present",
    desc: "Delivering photo sets, reels, highlight films, and promotional visuals for clients and creators.",
    tags: ["Photography", "Editing", "Client Work"],
  },
  {
    icon: icon(0x1f393),
    title: "B.Tech Civil Engineering",
    company: "MMDU, Mullana",
    period: "2022 - 2026",
    desc: "Balancing technical discipline with creative production, leadership, and campus media responsibilities.",
    tags: ["Engineering", "Leadership", "Creativity"],
  },
];

export const STATS = [
  { target: 100, suffix: "+", label: "Projects Delivered" },
  { target: 50, suffix: "+", label: "Events Covered" },
  { target: 25, suffix: "+", label: "Brand Shoots" },
  { target: 15, suffix: "+", label: "Awards" },
  { target: 5, suffix: "+", label: "Years Experience" },
];

export const CASE_STUDIES = [
  {
    num: "01",
    emoji: icon(0x1f3a4),
    title: "Concert Coverage Sprint",
    summary:
      "A high-speed live event workflow from capture to social-ready recap content.",
    metrics: [
      { val: "24h", label: "Turnaround" },
      { val: "42K", label: "Views" },
      { val: "18", label: "Assets" },
    ],
  },
  {
    num: "02",
    emoji: icon(0x1f393),
    title: "Campus Content System",
    summary:
      "A repeatable content rhythm for events, stories, announcements, and reels.",
    metrics: [
      { val: "3x", label: "Output" },
      { val: "92%", label: "Reach" },
      { val: "50+", label: "Posts" },
    ],
  },
  {
    num: "03",
    emoji: icon(0x1f4a1),
    title: "Brand Reel Launch",
    summary:
      "Short-form promotional content designed for clarity, retention, and saves.",
    metrics: [
      { val: "12", label: "Reels" },
      { val: "25K", label: "Views" },
      { val: "4.8x", label: "Lift" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Basid understands the moment before it happens. The final photos felt natural, premium, and full of life.",
    initials: "AS",
    name: "Aman Sharma",
    company: "Event Client",
  },
  {
    quote:
      "The reels were clean, fast, and exactly what we needed for launch week. Communication was excellent.",
    initials: "NK",
    name: "Nisha Kapoor",
    company: "Brand Partner",
  },
  {
    quote:
      "He brings calm direction on shoot day and turns messy event energy into a polished story.",
    initials: "RV",
    name: "Rahul Verma",
    company: "Campus Organizer",
  },
  {
    quote:
      "Our wedding highlights captured the emotion without feeling staged. We still watch it with family.",
    initials: "PM",
    name: "Priya Mehta",
    company: "Wedding Client",
  },
];

export const IG_EMOJIS = [
  icon(0x1f4f8),
  icon(0x1f3a4),
  icon(0x1f490),
  icon(0x1f393),
  icon(0x1f305),
  icon(0x1f307),
  icon(0x1f3ac),
  icon(0x1f4a1),
  icon(0x2708, 0xfe0f),
  icon(0x1f91d),
  icon(0x1f3c6),
  icon(0x1f4f1),
  icon(0x1f3a5),
  icon(0x1f680),
  icon(0x1f31f),
  icon(0x1f58c),
  icon(0x1f4dd),
  icon(0x1f389),
];

export const YT_VIDEOS = [
  {
    emoji: icon(0x1f3a4),
    title: "Hardy Sandhu Concert BTS",
    duration: "06:12",
    views: "31K",
    ago: "2 months ago",
  },
  {
    emoji: icon(0x1f393),
    title: "A Day Covering MMDU",
    duration: "08:04",
    views: "14K",
    ago: "4 months ago",
  },
  {
    emoji: icon(0x1f4f8),
    title: "How I Shoot Event Photos",
    duration: "05:38",
    views: "19K",
    ago: "6 months ago",
  },
  {
    emoji: icon(0x1f3ac),
    title: "Editing A Cinematic Reel",
    duration: "10:21",
    views: "22K",
    ago: "8 months ago",
  },
];

export const BLOGS = [
  {
    emoji: icon(0x1f4f8),
    cat: "Photography",
    date: "May 12, 2026",
    read: "5 min read",
    title: "How to Capture Events Without Missing the Real Moments",
    excerpt:
      "A practical field guide to anticipation, lens choice, and staying invisible while still getting the shot.",
  },
  {
    emoji: icon(0x1f4f1),
    cat: "Social",
    date: "Apr 28, 2026",
    read: "4 min read",
    title: "Why Reels Need a Hook Before They Need a Transition",
    excerpt:
      "Good short-form content starts with intent, rhythm, and a reason for people to keep watching.",
  },
  {
    emoji: icon(0x1f3ac),
    cat: "Editing",
    date: "Mar 18, 2026",
    read: "6 min read",
    title: "A Simple Workflow for Faster Highlight Films",
    excerpt:
      "From ingest to color to delivery, a lean editing system makes creative decisions easier.",
  },
];

export const FAQS = [
  {
    q: "Do you travel for shoots?",
    a: "Yes. I am based around Mullana, Haryana, and can travel for events, weddings, campaigns, and brand shoots.",
  },
  {
    q: "How fast can you deliver event content?",
    a: "For selected events, I can deliver priority reels and preview photos within 24 to 48 hours, with full galleries scheduled by scope.",
  },
  {
    q: "Can you handle both photo and video?",
    a: "Yes. I offer photography, videography, reels, highlight films, and social-ready edits as individual or bundled services.",
  },
  {
    q: "Do you manage social media accounts?",
    a: "Yes. I can help with content calendars, posting, creative direction, analytics, and campaign execution.",
  },
  {
    q: "How do we start a project?",
    a: "Send the project details, date, location, goals, and expected deliverables through the contact form or direct links.",
  },
];
