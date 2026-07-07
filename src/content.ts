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
}

export interface TimelineItem {
  org: string
  role: Loc
  period: Loc
  place: Loc
  desc: Loc
  kind: 'work' | 'edu'
}

export interface Highlight {
  title: Loc
  meta: Loc
}

export interface SkillGroup {
  label: Loc
  items: string[]
}

/* ---------------- Hero ---------------- */
export const hero = {
  eyebrow: {
    fr: 'Étudiant-ingénieur ENSEEIHT · Builder · Toulouse',
    en: 'Engineering student at ENSEEIHT · Builder · Toulouse',
  } as Loc,
  name: 'Louis-Marie Simonneaux',
  statement: {
    fr: 'Je conçois et je lance des produits — de l’idée à la mise en marché.',
    en: 'I design and ship products — from idea to market.',
  } as Loc,
  statementAccent: { fr: 'de l’idée à la mise en marché.', en: 'from idea to market.' } as Loc,
  domains: {
    fr: ['Intelligence artificielle', 'Entrepreneuriat', 'Ingénierie'],
    en: ['Artificial intelligence', 'Entrepreneurship', 'Engineering'],
  } as Loc<string[]>,
  ctaWork: { fr: 'Voir le travail', en: 'See the work' } as Loc,
  ctaCv: { fr: 'Télécharger le CV', en: 'Download CV' } as Loc,
}

/* ---------------- About ---------------- */
export const about = {
  lead: {
    fr: 'Curieux, déterminé et entreprenant. Depuis mon entrée à l’ENSEEIHT, je n’ai pas arrêté de lancer des choses — et d’apprendre en construisant.',
    en: 'Curious, driven and entrepreneurial. Since starting at ENSEEIHT I haven’t stopped launching things — and learning by building.',
  } as Loc,
  paragraphs: {
    fr: [
      'Élève-ingénieur en Sciences du Numérique à l’ENSEEIHT, je me suis lancé dans l’entrepreneuriat dès mon arrivée à l’école. Premier projet : Gifted, un cadeau réinventé par l’IA, conçu et vendu *from scratch* en trois mois — hardware, software, code, déploiement web, découpe laser, mais aussi vente, pricing, publicité et terrain.',
      'De cette première aventure est née une conviction : créer des produits concrets qui répondent à un vrai besoin. J’ai enchaîné avec EdT, un SaaS de gestion d’emplois du temps, fondé Le Carré pour fédérer les étudiants-entrepreneurs toulousains, et je construis aujourd’hui des produits chez Flowlab comme bras droit du CEO.',
      'En parallèle, je me forme en profondeur à l’IA et au machine learning (cours de Stanford, applications LLM) et j’anime la vie entrepreneuriale de mon école comme vice-président de Genius N7.',
    ],
    en: [
      'Engineering student in Digital Sciences at ENSEEIHT, I jumped into entrepreneurship the moment I arrived. First project: Gifted, a gift reinvented through AI — designed and sold from scratch in three months: hardware, software, code, web deployment, laser cutting, but also sales, pricing, advertising and fieldwork.',
      'That first venture left me with one conviction: build concrete products that meet a real need. I followed with EdT, a scheduling SaaS, founded Le Carré to unite Toulouse’s student entrepreneurs, and today I build products at Flowlab as the CEO’s right hand.',
      'In parallel I go deep on AI and machine learning (Stanford courses, LLM applications) and lead my school’s entrepreneurial life as vice-president of Genius N7.',
    ],
  } as Loc<string[]>,
  likeTitle: { fr: 'Ce qui me fait avancer', en: 'What drives me' } as Loc,
  like: {
    fr: 'Créer des projets concrets qui répondent à un besoin réel — et tout apprendre sur le tas pour y arriver.',
    en: 'Building concrete projects that answer a real need — and learning whatever it takes to get there.',
  } as Loc,
  traits: {
    fr: ['Organisé', 'Déterminé', 'Très curieux', 'Adaptable'],
    en: ['Organised', 'Determined', 'Endlessly curious', 'Adaptable'],
  } as Loc<string[]>,
}

/* ---------------- Projects ---------------- */
export const projects: Project[] = [
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
      { label: { fr: 'Site', en: 'Website' }, href: 'https://lecarre.vercel.app/' },
      { label: { fr: 'LinkedIn', en: 'LinkedIn' }, href: 'https://www.linkedin.com/company/le-carr%C3%A9-toulouse/' },
    ],
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
    links: [],
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
    links: [{ label: { fr: 'Flowlab', en: 'Flowlab' }, href: 'https://flowlab.studio' }],
  },
]

/* ---------------- Experience & education ---------------- */
export const timeline: TimelineItem[] = [
  {
    org: 'Flowlab',
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

/* ---------------- Highlights ---------------- */
export const highlights: Highlight[] = [
  {
    title: { fr: 'Prix du Jury', en: 'Jury Prize' },
    meta: { fr: 'Parcours Entrepreneurs · La Mêlée Numérique × N-START, 2026', en: 'Entrepreneurs program · La Mêlée Numérique × N-START, 2026' },
  },
  {
    title: { fr: 'VivaTech 2026', en: 'VivaTech 2026' },
    meta: { fr: 'Délégation étudiante toulousaine montée avec START Paris', en: 'Toulouse student delegation set up with START Paris' },
  },
  {
    title: { fr: 'STATION F', en: 'STATION F' },
    meta: { fr: 'Invité par START Paris parmi des fondateurs européens', en: 'Invited by START Paris among European founders' },
  },
  {
    title: { fr: 'Meetup Gifted', en: 'Gifted meetup' },
    meta: { fr: 'Présentation du projet à l’Artilect FabLab, Toulouse', en: 'Project talk at Artilect FabLab, Toulouse' },
  },
  {
    title: { fr: 'Hackathons', en: 'Hackathons' },
    meta: { fr: 'Ecosprint (SNCF Réseau × Getlink) · VOL-TE (FlyImpulse, ENAC)', en: 'Ecosprint (SNCF Réseau × Getlink) · VOL-TE (FlyImpulse, ENAC)' },
  },
]

/* ---------------- Skills ---------------- */
export const skillGroups: SkillGroup[] = [
  {
    label: { fr: 'Code', en: 'Code' },
    items: ['Python', 'C', 'C++', 'Ada', 'Matlab', 'React / Next.js'],
  },
  {
    label: { fr: 'IA & Machine Learning', en: 'AI & Machine Learning' },
    items: ['Applications LLM', 'Stanford CS229 / CS231N / CS224N', 'LangChain', 'Prototypage assisté par IA'],
  },
  {
    label: { fr: 'Produit & Entrepreneuriat', en: 'Product & Entrepreneurship' },
    items: ['MVP & déploiement web', 'Vente & pricing', 'Pitch & communauté', 'Prototypage (découpe laser, hardware)'],
  },
  {
    label: { fr: 'Outils', en: 'Tools' },
    items: ['VS Code', 'IntelliJ', 'LM Studio', 'Gamma', 'HubSpot', 'Adobe Illustrator', 'Logic Pro', 'Rekordbox'],
  },
]

export const languages: { name: Loc; level: Loc }[] = [
  { name: { fr: 'Français', en: 'French' }, level: { fr: 'Langue maternelle', en: 'Native' } },
  { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'C1', en: 'C1' } },
  { name: { fr: 'Espagnol', en: 'Spanish' }, level: { fr: 'A2', en: 'A2' } },
  { name: { fr: 'Chinois', en: 'Chinese' }, level: { fr: 'A1', en: 'A1' } },
]

export const interests = {
  fr: ['Musique — piano, batterie, accordéon, DJ (LMix)', 'Cinéma & théâtre d’improvisation', 'Football, vélo, course à pied', 'Scoutisme & bénévolat'],
  en: ['Music — piano, drums, accordion, DJ (LMix)', 'Cinema & improv theatre', 'Football, cycling, running', 'Scouting & volunteering'],
} as Loc<string[]>

/* ---------------- Contact ---------------- */
export const contact = {
  lead: {
    fr: 'Un projet, une idée, une opportunité ? Parlons-en.',
    en: 'A project, an idea, an opportunity? Let’s talk.',
  } as Loc,
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/louis-marie-simonneaux-426a43386' },
    { label: 'Email', href: 'mailto:lmsimonneaux@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/LMSimonneaux' },
    { label: 'WhatsApp', href: 'https://wa.me/qr/RDFB4BHMZGPBE1' },
  ],
  formAction: 'https://send.pageclip.co/tvkecqJDz27QfjsJMcXIMYS2nZHEvwT0',
}

/* ---------------- Nav ---------------- */
export const nav = {
  profil: { fr: 'Profil', en: 'About' } as Loc,
  parcours: { fr: 'Parcours', en: 'Path' } as Loc,
  projets: { fr: 'Projets', en: 'Work' } as Loc,
  contact: { fr: 'Contact', en: 'Contact' } as Loc,
}

export const sectionTitles = {
  about: { fr: 'Profil', en: 'About' } as Loc,
  work: { fr: 'Travail sélectionné', en: 'Selected work' } as Loc,
  path: { fr: 'Parcours', en: 'Path' } as Loc,
  highlights: { fr: 'Temps forts', en: 'Highlights' } as Loc,
  skills: { fr: 'Compétences', en: 'Skills' } as Loc,
  contact: { fr: 'Contact', en: 'Contact' } as Loc,
}
