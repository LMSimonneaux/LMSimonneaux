/* =========================================================
   Contenu bilingue (FR / EN) — source unique de vérité.
   ========================================================= */

export type Loc<T = string> = { fr: T; en: T }

export interface Project {
  id: string
  name: string
  role: Loc
  year: string
  summary: Loc
  detail: Loc
  tags: Loc<string[]>
  links: { label: Loc; href: string }[]
  video?: { src: string; caption: Loc }
}

export interface TimelineItem {
  org: string
  href?: string
  role: Loc
  period: Loc
  place: Loc
  desc: Loc
  kind: 'work' | 'edu'
}

/* ---------------- Hero ---------------- */
export const hero = {
  name: 'Louis-Marie Simonneaux',
  statement: {
    fr: 'Flexible, curieux et travailleur, je m’adapte pour concilier travail et plaisir.',
    en: 'Flexible, curious and hard-working, I adapt to blend work with pleasure.',
  } as Loc,
  statementAccent: {
    fr: 'concilier travail et plaisir.',
    en: 'blend work with pleasure.',
  } as Loc,
  ctaWork: { fr: 'Voir le travail', en: 'See the work' } as Loc,
}

/* ---------------- Projects ---------------- */
export const projects: Project[] = [
  {
    id: 'agence',
    name: 'Agence Simonneaux',
    role: { fr: 'Fondateur', en: 'Founder' },
    year: '2026',
    summary: {
      fr: 'Des sites vitrines sur-mesure, livrés avec le back-office pour les faire vivre.',
      en: 'Bespoke showcase websites, delivered with the back-office to keep them alive.',
    },
    detail: {
      fr: 'L’agence conçoit et livre en un mois la vitrine d’une entreprise, puis lui en rend les clés : un back-office sur-mesure d’où le client publie ses réalisations, retouche ses textes et soigne son référencement — sans écrire une ligne de code. Chaque site part d’un template maison que je fais évoluer d’un projet à l’autre, et passe par une recette sur une vingtaine d’appareils avant la mise en ligne.',
      en: 'The agency designs and ships a company’s website in a month, then hands over the keys: a bespoke back-office where the client publishes their work, edits their copy and tends to their SEO — without writing a line of code. Every site starts from an in-house template I grow from one project to the next, and goes through QA on some twenty devices before launch.',
    },
    tags: {
      fr: ['Agence', 'Next.js · Payload CMS', 'Cloudflare Workers', 'Design system'],
      en: ['Agency', 'Next.js · Payload CMS', 'Cloudflare Workers', 'Design system'],
    },
    links: [{ label: { fr: 'Site', en: 'Website' }, href: 'https://agence-simonneaux.fr' }],
  },
  {
    id: 'edt',
    name: 'EdT',
    role: { fr: 'Co-fondateur', en: 'Co-founder' },
    year: '2026',
    summary: {
      fr: 'Un SaaS de gestion d’emplois du temps intelligents pour les TPE/PME.',
      en: 'A SaaS for smart scheduling, built for small businesses.',
    },
    detail: {
      fr: 'EdT simplifie la gestion des plannings pour les structures qui jonglent avec de nombreuses contraintes — pharmacies, cinémas. Un emploi du temps qui se réajuste au fil de la semaine et prend en compte une multitude de paramètres. Projet en cours.',
      en: 'EdT simplifies scheduling for businesses juggling many constraints — pharmacies, cinemas. A timetable that re-adjusts through the week and accounts for a multitude of parameters. Work in progress.',
    },
    tags: {
      fr: ['SaaS', 'Optimisation', 'En cours'],
      en: ['SaaS', 'Optimisation', 'In progress'],
    },
    links: [
      { label: { fr: 'Site', en: 'Website' }, href: 'https://www.emploidutemps.me' },
      { label: { fr: 'LinkedIn', en: 'LinkedIn' }, href: 'https://www.linkedin.com/company/e-d-t-fr/' },
    ],
  },
  {
    id: 'le-carre',
    name: 'Le Carré',
    role: { fr: 'Fondateur', en: 'Founder' },
    year: '2026',
    summary: {
      fr: 'Le réseau des étudiants-entrepreneurs de Toulouse.',
      en: 'Toulouse’s student-entrepreneur network.',
    },
    detail: {
      fr: 'Le Carré réunit chaque mois des étudiants-entrepreneurs issus de neuf écoles toulousaines autour d’entrepreneurs expérimentés. On y présente les projets des membres, on échange avec des fondateurs, et on ouvre des portes — comme l’accès d’une délégation toulousaine à VivaTech 2026, monté avec START Paris.',
      en: 'Le Carré gathers student entrepreneurs from nine Toulouse schools every month around experienced founders. Members showcase their ventures, exchange with founders, and unlock opportunities — like bringing a Toulouse delegation to VivaTech 2026, set up with START Paris.',
    },
    tags: {
      fr: ['Communauté', 'Événementiel', '9 écoles'],
      en: ['Community', 'Events', '9 schools'],
    },
    links: [
      { label: { fr: 'Site', en: 'Website' }, href: 'https://www.lecarre.tech' },
      { label: { fr: 'Événements (Luma)', en: 'Events (Luma)' }, href: 'https://luma.com/lecarre' },
      { label: { fr: 'LinkedIn', en: 'LinkedIn' }, href: 'https://www.linkedin.com/company/le-carr%C3%A9-toulouse/' },
    ],
  },
  {
    id: 'gifted',
    name: 'Gifted',
    role: { fr: 'Co-fondateur', en: 'Co-founder' },
    year: '2025',
    summary: {
      fr: 'Un cadeau réinventé par l’IA : vos photos deviennent un récit interactif.',
      en: 'A gift reinvented through AI: your photos become an interactive story.',
    },
    detail: {
      fr: 'Gifted transforme de vieilles photos en une aventure narrative personnalisée, générée par IA et guidée par vos souvenirs. Le tout dans un coffret physique : boîte gravée au laser, photos imprimées et badge NFC qui relie l’objet à l’application. Conçu et vendu de A à Z, présenté en meetup à l’Artilect FabLab.',
      en: 'Gifted turns old photos into a personalised narrative adventure, AI-generated and guided by your memories — wrapped in a physical box: laser-engraved case, printed photos and an NFC badge linking object to app. Built and sold end to end, presented at an Artilect FabLab meetup.',
    },
    tags: {
      fr: ['Produit', 'IA générative', 'Next.js · Claude · Gemini', 'NFC'],
      en: ['Product', 'Generative AI', 'Next.js · Claude · Gemini', 'NFC'],
    },
    links: [
      { label: { fr: 'Site', en: 'Website' }, href: 'https://applicationgifted.vercel.app/' },
      { label: { fr: 'LinkedIn', en: 'LinkedIn' }, href: 'https://www.linkedin.com/company/mygifted' },
      { label: { fr: 'Instagram', en: 'Instagram' }, href: 'https://www.instagram.com/mygifted.app/' },
    ],
  },
  {
    id: 'flowlab',
    name: 'Flowlab',
    role: { fr: 'CEO right hand & Product Builder', en: 'CEO right hand & Product Builder' },
    year: '2026',
    summary: {
      fr: 'Bras droit du CEO et product builder, au cœur d’un studio produit parisien.',
      en: 'CEO’s right hand and product builder inside a Paris product studio.',
    },
    detail: {
      fr: 'Chez Flowlab, j’aide à concevoir et livrer des produits sur-mesure qui fluidifient et automatisent l’organisation des PME — du dialogue avec le dirigeant jusqu’à la mise en production.',
      en: 'At Flowlab I help design and ship bespoke products that streamline and automate how SMEs operate — from the conversation with the owner to shipping to production.',
    },
    tags: {
      fr: ['Product', 'Automatisation', 'Stage · Paris'],
      en: ['Product', 'Automation', 'Internship · Paris'],
    },
    links: [
      { label: { fr: 'Site', en: 'Website' }, href: 'https://flowlab.studio' },
      { label: { fr: 'LinkedIn', en: 'LinkedIn' }, href: 'https://www.linkedin.com/company/flowlab-studio/' },
    ],
  },
  {
    id: 'hammerspoon',
    name: 'ClipStack',
    role: { fr: 'Créateur', en: 'Maker' },
    year: '2026',
    summary: {
      fr: 'Un historique de presse-papier pour Mac, open source et gratuit.',
      en: 'A clipboard history for Mac, open source and free.',
    },
    detail: {
      fr: 'Tout ce que vous copiez (texte, images) est gardé en mémoire ; un raccourci clavier (⌥⌘V) ouvre un panneau pour retrouver et recoller n’importe quel élément. Les mots de passe ne sont jamais capturés. Construit avec Hammerspoon, installable en 5 minutes sans être développeur grâce au guide pas à pas.',
      en: 'Everything you copy (text, images) is kept in a history; a keyboard shortcut (⌥⌘V) opens a panel to find and re-paste any item. Passwords are never captured. Built with Hammerspoon, installable in 5 minutes without being a developer thanks to the step-by-step guide.',
    },
    tags: {
      fr: ['Open source', 'macOS', 'Lua', 'Outil du quotidien'],
      en: ['Open source', 'macOS', 'Lua', 'Everyday tool'],
    },
    links: [
      { label: { fr: 'Code (GitHub)', en: 'Code (GitHub)' }, href: 'https://github.com/LMSimonneaux/.hammerspoon' },
      { label: { fr: 'Guide d’installation', en: 'Install guide' }, href: 'https://github.com/LMSimonneaux/.hammerspoon#guide-dinstallation' },
    ],
    video: {
      src: '/LMSimonneaux/videos/clipstack.mp4',
      caption: { fr: 'ClipStack en action — démo de 30 secondes.', en: 'ClipStack in action — 30-second demo.' },
    },
  },
]

/* ---------------- Experience & education ---------------- */
export const timeline: TimelineItem[] = [
  {
    org: 'Agence Simonneaux',
    href: 'https://agence-simonneaux.fr',
    role: { fr: 'Fondateur', en: 'Founder' },
    period: { fr: '2026 — auj.', en: '2026 — now' },
    place: { fr: 'Toulouse', en: 'Toulouse' },
    desc: {
      fr: 'Conception et livraison de sites vitrines sur-mesure, back-office compris.',
      en: 'Designing and shipping bespoke showcase sites, back-office included.',
    },
    kind: 'work',
  },
  {
    org: 'Flowlab',
    href: 'https://flowlab.studio/',
    role: { fr: 'CEO right hand & Product Builder', en: 'CEO right hand & Product Builder' },
    period: { fr: '2026 — auj.', en: '2026 — now' },
    place: { fr: 'Stage · Paris', en: 'Internship · Paris' },
    desc: {
      fr: 'Conception et livraison de produits qui automatisent l’organisation des PME.',
      en: 'Designing and shipping products that automate how SMEs operate.',
    },
    kind: 'work',
  },
  {
    org: 'Genius N7',
    href: 'https://www.linkedin.com/company/geniusn7/',
    role: { fr: 'Vice-président', en: 'Vice-president' },
    period: { fr: '2026 — auj.', en: '2026 — now' },
    place: { fr: 'ENSEEIHT · Toulouse', en: 'ENSEEIHT · Toulouse' },
    desc: {
      fr: 'Direction de l’association entrepreneuriale de l’école ; représentation à STATION F avec START Paris.',
      en: 'Leading the school’s entrepreneurship society; representing it at STATION F with START Paris.',
    },
    kind: 'work',
  },
  {
    org: 'EdT',
    href: 'https://www.emploidutemps.me',
    role: { fr: 'Co-fondateur', en: 'Co-founder' },
    period: { fr: '2026 — auj.', en: '2026 — now' },
    place: { fr: 'Toulouse', en: 'Toulouse' },
    desc: {
      fr: 'SaaS de gestion d’emplois du temps intelligents pour TPE/PME.',
      en: 'Smart scheduling SaaS for small businesses.',
    },
    kind: 'work',
  },
  {
    org: 'Le Carré',
    href: 'https://www.lecarre.tech',
    role: { fr: 'Fondateur', en: 'Founder' },
    period: { fr: '2026 — auj.', en: '2026 — now' },
    place: { fr: 'Toulouse', en: 'Toulouse' },
    desc: {
      fr: 'Réseau d’étudiants-entrepreneurs reliant neuf écoles toulousaines.',
      en: 'Student-entrepreneur network linking nine Toulouse schools.',
    },
    kind: 'work',
  },
  {
    org: 'Pépite France',
    href: 'https://pepitefrance.pepitizy.fr/fr',
    role: { fr: 'Étudiant-Entrepreneur', en: 'Student-Entrepreneur' },
    period: { fr: '2026 — auj.', en: '2026 — now' },
    place: { fr: 'Réseau national', en: 'National network' },
    desc: {
      fr: 'Statut national d’étudiant-entrepreneur.',
      en: 'National student-entrepreneur status.',
    },
    kind: 'work',
  },
  {
    org: 'Gifted',
    href: 'https://applicationgifted.vercel.app/',
    role: { fr: 'Co-fondateur', en: 'Co-founder' },
    period: { fr: '2025 — 2026', en: '2025 — 2026' },
    place: { fr: 'Toulouse', en: 'Toulouse' },
    desc: {
      fr: 'Conçu, construit et vendu un cadeau assisté par IA, de A à Z.',
      en: 'Designed, built and sold an AI-assisted gift, end to end.',
    },
    kind: 'work',
  },
  {
    org: 'ENSEEIHT — Toulouse INP',
    href: 'https://www.enseeiht.fr/fr/index.html',
    role: { fr: 'Diplôme d’ingénieur · Sciences du Numérique', en: 'Engineering degree · Digital Sciences' },
    period: { fr: '2025 — 2028', en: '2025 — 2028' },
    place: { fr: 'Toulouse', en: 'Toulouse' },
    desc: {
      fr: 'Algorithmique, structures de données, probabilités & analyse numérique, architecture des systèmes.',
      en: 'Algorithms, data structures, probability & numerical analysis, systems architecture.',
    },
    kind: 'edu',
  },
  {
    org: 'Lycée Chateaubriand — Rennes',
    href: 'https://www.lycee-chateaubriand.fr/',
    role: { fr: 'CPGE · Physique & Sciences de l’Ingénieur', en: 'Preparatory class · Physics & Engineering Science' },
    period: { fr: '2023 — 2025', en: '2023 — 2025' },
    place: { fr: 'Rennes', en: 'Rennes' },
    desc: {
      fr: 'Classes préparatoires aux grandes écoles d’ingénieurs.',
      en: 'Intensive preparatory program for top engineering schools.',
    },
    kind: 'edu',
  },
  {
    org: 'Baccalauréat',
    role: { fr: 'Maths-Physique · Mention Très Bien', en: 'Maths-Physics · Highest honours' },
    period: { fr: '2023', en: '2023' },
    place: { fr: 'Rennes', en: 'Rennes' },
    desc: {
      fr: 'Baccalauréat général, mention très bien.',
      en: 'French Baccalauréat, highest honours.',
    },
    kind: 'edu',
  },
]

/* ---------------- Tools ---------------- */
export interface Tool {
  name: string
  /**
   * Basename of the mark in `public/logos/` (without `.svg`). Omitted when no
   * redistributable mark exists — the tile then falls back to a monogram.
   * To add one later: drop `public/logos/<slug>.svg` here and set the slug.
   */
  slug?: string
  /** Wordmark rather than a symbol: needs a wider box or it reads as a smudge. */
  wide?: boolean
  /** Overrides the monogram derived from the name when that reads badly. */
  mono?: string
}

/* Marks come from Simple Icons (CC0), topped up from SVG Logos (CC0) and Devicon
   (MIT) for the brands Simple Icons had to withdraw. The entries still without a
   slug are either products no open icon set carries, or marks that collapse into
   a featureless blob once silhouetted (BrowserStack's circle, Illustrator's
   square) — those render as monograms instead. */
export const tools: Tool[] = [
  { name: 'LinkedIn Sales Navigator', slug: 'linkedin' },
  { name: 'PhantomBuster' },
  { name: '1Password', slug: '1password' },
  { name: 'Appwrite', slug: 'appwrite' },
  { name: 'Supabase', slug: 'supabase' },
  { name: 'Heroku', slug: 'heroku' },
  { name: 'DigitalOcean', slug: 'digitalocean' },
  { name: 'Railway', slug: 'railway' },
  { name: 'New Relic', slug: 'newrelic' },
  { name: 'LM Studio', slug: 'lmstudio' },
  { name: 'Vercel', slug: 'vercel' },
  { name: 'GitHub', slug: 'github' },
  { name: 'VS Code', slug: 'vscode' },
  { name: 'Cursor', slug: 'cursor' },
  { name: 'GitLab', slug: 'gitlab' },
  { name: 'Stripe', slug: 'stripe' },
  { name: 'Pennylane' },
  { name: 'Beekeeper Studio', slug: 'beekeeperstudio' },
  { name: 'Claude Code', slug: 'claude' },
  { name: 'Claude Console', slug: 'anthropic' },
  { name: 'ChatGPT Atlas', slug: 'openai' },
  { name: 'Codex', slug: 'openai' },
  { name: 'Resend', slug: 'resend' },
  { name: 'Cal.com', slug: 'caldotcom', wide: true },
  { name: 'Namecheap', slug: 'namecheap' },
  { name: '.tech domains' },
  { name: 'Cloudflare', slug: 'cloudflare' },
  { name: 'Microsoft Azure', slug: 'microsoftazure' },
  { name: 'Microsoft 365', slug: 'microsoft365' },
  { name: 'Notion', slug: 'notion' },
  { name: 'Slack', slug: 'slack' },
  { name: 'Sentry', slug: 'sentry' },
  { name: 'Polypane' },
  { name: 'BrowserStack' },
  { name: 'Pageclip' },
  { name: 'HazeOver' },
  { name: 'Hammerspoon' },
  { name: 'NotebookLM', slug: 'notebooklm' },
  { name: 'Base44' },
  { name: 'Lovable', slug: 'lovable' },
  { name: 'PromptCowboy' },
  { name: 'Fireflies' },
  { name: 'Luma' },
  { name: 'Meetup', slug: 'meetup' },
  { name: 'Payload', slug: 'payloadcms' },
  { name: 'Mermaid', slug: 'mermaid' },
  { name: 'MarkChart' },
  { name: 'draw.io', slug: 'diagramsdotnet' },
  { name: 'Linear', slug: 'linear' },
  { name: 'Jira', slug: 'jira' },
  { name: 'iTerm2', slug: 'iterm2' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Shottr' },
  { name: 'Inkscape', slug: 'inkscape' },
  { name: 'Adobe Illustrator' },
  { name: 'Hugging Face', slug: 'huggingface' },
  { name: 'Logic Pro' },
  { name: 'Google Analytics', slug: 'googleanalytics' },
  { name: 'Google Search Console', slug: 'googlesearchconsole' },
  { name: 'Google Cloud', slug: 'googlecloud' },
  { name: 'Neovim', slug: 'neovim' },
  { name: 'Herd' },
  { name: 'tmux', slug: 'tmux' },
  { name: 'Raycast', slug: 'raycast' },
  { name: 'OVHcloud', slug: 'ovh' },
  { name: 'Zimbra' },
  { name: 'improvMX', slug: 'improvmx' },
]

/* ---------------- Contact ---------------- */
export const contact = {
  lead: {
    fr: 'Un projet, une idée, une opportunité ? Parlons-en.',
    en: 'A project, an idea, an opportunity? Let’s talk.',
  } as Loc,
  /* Cal.com « Conversation rapide » : 15 min par défaut, en Google Meet. */
  booking: {
    label: { fr: 'Prendre rendez-vous', en: 'Book a call' } as Loc,
    note: {
      fr: '15 minutes en visio, au créneau qui vous arrange.',
      en: '15 minutes over video, at whatever slot suits you.',
    } as Loc,
    href: 'https://cal.com/louis-marie-simonneaux/conversation-rapide',
  },
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/louis-marie-simonneaux-426a43386' },
    { label: 'Email', href: 'mailto:lmsimonneaux@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/LMSimonneaux' },
    { label: 'WhatsApp', href: 'https://wa.me/qr/RDFB4BHMZGPBE1' },
  ],
  formAction: 'https://send.pageclip.co/tvkecqJDz27QfjsJMcXIMYS2nZHEvwT0',
  /* CV en FR, resume en EN : le lien suit la langue du site. */
  cv: {
    label: { fr: 'CV', en: 'Resume' } as Loc,
    href: {
      fr: '/LMSimonneaux/Louis-Marie-Simonneaux-CV-FR.pdf',
      en: '/LMSimonneaux/Louis-Marie-Simonneaux-Resume-EN.pdf',
    } as Loc,
  },
}

/* ---------------- Nav ---------------- */
export const nav = {
  parcours: { fr: 'Parcours', en: 'Path' } as Loc,
  projets: { fr: 'Projets', en: 'Work' } as Loc,
  outils: { fr: 'Outils', en: 'Tools' } as Loc,
  contact: { fr: 'Contact', en: 'Contact' } as Loc,
}

export const sectionTitles = {
  work: { fr: 'Travail sélectionné', en: 'Selected work' } as Loc,
  path: { fr: 'Parcours', en: 'Path' } as Loc,
  tools: { fr: 'Outils', en: 'Tools' } as Loc,
  contact: { fr: 'Contact', en: 'Contact' } as Loc,
}

export const toolsLead = {
  fr: 'Ce avec quoi je construis, livre et fais tourner, au quotidien.',
  en: 'What I build, ship and operate with, day to day.',
} as Loc
