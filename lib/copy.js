// lib/copy.js — Tot conținutul vizibil al paginii de destinație.
// Toate modificările de text se fac aici. Componentele citesc doar din acest obiect.

export const copy = {
  metadata: {
    title: "EcoIerbuța — Creează săpunuri artizanale și cosmetice naturale acasă",
    description:
      "Cursul EcoIerbuța de săpunuri artizanale și cosmetice naturale: învață să creezi produse naturale pentru tine și familia ta cu peste 27 de ghiduri, 500 de rețete și 3 BONUSURI GRATUITE. Acces pe viață cu 80% reducere.",
    lang: "ro",
  },

  brand: {
    name: "EcoIerbuța",
    tagline: "Frumusețe eco din plante",
  },

  hero: {
    banner: "ACEASTĂ OFERTĂ + BONUSURILE GRATUITE EXPIRĂ ÎN:",
    timerLabels: { days: "Zile", hours: "Ore", minutes: "Min", seconds: "Sec" },
    kicker: "Peste 2.586 de femei își creează deja propriile produse acasă",
    headlinePre: "O EXPERTĂ ÎN COSMETICE NATURALE DEZVĂLUIE",
    headlineHighlight: "cum să creezi săpunuri parfumate,",
    headlinePost: "care îți vor îngriji pielea încă din prima zi",
    supporting:
      "Ideal pentru oricine vrea să înceapă IMEDIAT să-și creeze propriile săpunuri naturale — fără chimicale, fără cheltuieli inutile și cu o bucurie autentică.",
    cta: "Vreau acces acum 🧼",
    imageAlt: "Femeie cu un ten îngrijit și luminos datorită cosmeticelor naturale EcoIerbuța",
    trustChips: [
      { icon: "⭐", text: "Peste 2.586 de cursante" },
      { icon: "🎁", text: "3 bonusuri GRATUITE" },
      { icon: "🛡️", text: "14 zile garanție" },
    ],
  },

  instructorIntro: {
    quote:
      "Am creat acest curs special pentru tine – tu, cea care iubești să creezi cu propriile mâini și vrei să ai grijă de tine și de cei dragi într-un mod natural.",
  },

  soapCarousel: {
    items: [
      { image: "/carousel/soap-1.webp", alt: "Săpunuri artizanale proaspăt făcute" },
      { image: "/carousel/soap-2.webp", alt: "Săpunuri cu efect de marmură" },
      { image: "/carousel/soap-3.webp", alt: "Săpun cu un model decorativ verde" },
      { image: "/carousel/soap-4.webp", alt: "Săpun natural cu lavandă" },
      { image: "/carousel/soap-5.webp", alt: "Asortiment de săpunuri artizanale" },
      { image: "/carousel/soap-6.webp", alt: "Detalii ale săpunurilor decorative" },
    ],
  },

  benefits: {
    headline:
      "...poți începe cu un BUGET MIC și te poți bucura de aceste AVANTAJE!",
    items: [
      { icon: "Leaf", text: "Folosește ingrediente naturale și sigure." },
      { icon: "ShieldCheck", text: "Uită de pielea uscată, iritații și alergii." },
      { icon: "Sparkles", text: "Creează absolut orice săpun îți imaginezi." },
      { icon: "TrendingUp", text: "Transformă creația într-o adevărată bucurie acasă la tine." },
    ],
    checklist: [
      "Adio rețete ratate",
      "Nu trebuie să fii expertă",
      "Fără program fix și fără stres",
    ],
    imageAlt: "Mâini ținând săpunuri artizanale proaspăt făcute",
  },

  trending: {
    kicker: "TENDINȚA PENTRU 2026",
    headline:
      "în doar câteva zile vei învăța să creezi săpunuri moderne cu care îi vei impresiona pe toți",
    imageAlt: "Săpunuri artizanale cu efect modern de marmură",
  },

  courseContent: {
    headline: "aici te învățăm totul",
    subheadline: "descoperă conținutul complet",
    sectionLabel: "în peste 27 de cărți digitale vei găsi...",
    paragraphs: [
      {
        bold: "Acces la toate cunoștințele,",
        rest: " pentru a concepe, fabrica și păstra săpunurile naturale ca o adevărată profesionistă.",
      },
      {
        bold: "Gata cu metoda încercare și eroare:",
        rest:
          " urmează un ghid clar și testat, plin de sfaturi practice care te scutesc de timp pierdut și nervi întinși la maximum.",
      },
    ],
  },

  megapack: {
    kicker: "MEGA PACHET",
    headline: "mega pachetul include",
    items: [
      { bold: "Ghid complet pas cu pas —", rest: " de la începătoare la nivel avansat" },
      { bold: "500 de rețete", rest: " pentru absolut orice tip de piele" },
      { bold: "Creează-ți propriile", rest: " uleiuri esențiale" },
      { bold: "Învață să faci", rest: " săpunuri lichide naturale" },
    ],
    imageAlt: "Mockup cu mega pachetul EcoIerbuța de săpunuri artizanale",
  },

  bonuses: {
    kicker: "BONUSURI GRATUITE",
    headline: "Dacă profiți de ofertă astăzi, primești 3 bonusuri GRATUITE!",
    subheadline: "Ghiduri suplimentare în format digital PDF, gata de descărcat.",
    badge: "BONUS #",
    freeLabel: "GRATUIT",
    items: [
      { image: "/bonuses/bonus-1.webp", title: "Cosmetice pentru corp", desc: "Rețete naturale pentru unturi, loțiuni și exfoliante pentru o îngrijire completă a corpului." },
      { image: "/bonuses/bonus-6.webp", title: "Săruri de baie", desc: "Relaxează-te cu săruri aromatice și bombe efervescente făcute chiar de tine." },
      { image: "/bonuses/bonus-7.webp", title: "Șampon solid", desc: "Un păr sănătos, fără ambalaje din plastic și fără chimicale." },
    ],
    footer: "Toate bonusurile se livrează 100% digital, instantaneu.",
  },

  features: {
    headline: "Tot ce vei primi",
    subheadline: "Acces complet și materiale descărcabile (PDF).",
    items: [
      { icon: "Wifi", title: "100% online", desc: "Accesează lecțiile oricând vrei și de oriunde te-ai afla." },
      { icon: "FolderOpen", title: "Conținut în Google Drive", desc: "Organizat perfect ca să progresezi fără bătăi de cap." },
      { icon: "Infinity", title: "Acces pe viață la curs", desc: "Învață în propriul tău ritm, fără nicio grabă sau limite." },
      { icon: "BookOpen", title: "Cărțile digitale sunt ale tale", desc: "Descarcă-le sau citește-le online, oricând ai nevoie." },
      { icon: "Sparkles", title: "Cunoștințe practice", desc: "Tot ce-ți trebuie ca să-ți creezi imediat primele produse." },
      { icon: "ShieldCheck", title: "Garanție 14 zile", desc: "Dacă nu ești mulțumită, îți dăm 100% din bani înapoi." },
    ],
  },

  primaryPricing: {
    discountBadge: "REDUCERE DE 80%",
    valuedAtLabel: "Programul este evaluat la",
    regularPrice: "175 lei",
    offerPrice: "35 lei",
    cta: "VREAU REDUCEREA",
    payInfo: "Plată unică și acces pe viață",
    imageAlt: "Mockup cu programul EcoIerbuța la reducere exclusivă",
    socialImageAlt: "Capturi de ecran cu mesaje reale de la cursante mulțumite",
  },

  socialProof: {
    headline: "NU RATA OCAZIA!",
    subheadlinePre: "Peste",
    countHighlight: "2.586 de femei",
    subheadlinePost: "se bucură deja de propriile lor produse naturale acasă!",
  },

  reviewScreenshots: {
    headline: "Mesaje reale de la cursantele noastre",
    subheadline: "Asta primim în fiecare zi.",
    onlineLabel: "online",
    typingLabel: "scrie…",
    items: [
      {
        name: "Cătălina",
        timeLabel: "10:24",
        messages: [
          { text: "Am făcut primele mele săpunuri după ghidul tău! 🌸" },
          { text: "Au ieșit minunat, iar pielea mea e super fină ✨" },
          { text: "Când mai adaugi rețete noi?" },
        ],
      },
      {
        name: "Laura",
        timeLabel: "ieri",
        messages: [
          { text: "Aseară am făcut săpunuri cu lavandă pentru toată familia 💜" },
          { text: "Mama le adoră, zice că are pielea cu totul altfel 🙌" },
          { text: "Mulțumesc pentru curs, pe bune ❤️" },
        ],
      },
      {
        name: "Silvia",
        timeLabel: "12:05",
        messages: [
          { text: "Am început acum 2 săptămâni și am deja o colecție întreagă 💕" },
          { text: "Rețetele sunt super ușor de urmărit" },
          { text: "Iar bonusurile GRATUITE sunt aur curat 🎁" },
        ],
      },
      {
        name: "Valentina",
        timeLabel: "astăzi",
        messages: [
          { text: "Bună! Voiam doar să-ți mulțumesc 🌿" },
          { text: "Mi-am făcut șampon solid și pielea nu mai este uscată" },
          { text: "Mii de mulțumiri, mi-ai făcut ziua superbă 🌷" },
        ],
      },
    ],
  },

  curriculum: {
    headline: "Conținutul cursului",
    subheadline: "Meniuri derulante — vezi exact tot ce vei primi.",
    courses: [
      {
        title: "Curs | Săpunuri artizanale",
        lessons: [
          "Săpunuri EcoIerbuța Mod. 1",
          "Săpunuri EcoIerbuța Mod. 2",
          "Fabricarea săpunurilor Mod. 1",
          "Fabricarea săpunurilor Mod. 2",
          "Tehnici de bază",
          "Ingrediente și procese",
          "Ingrediente uimitoare și proprietățile lor",
        ],
      },
      {
        title: "Curs | 500 de rețete de săpunuri",
        lessons: [
          "Carte digitală (PDF) cu 500 de rețete unice.",
          "Ghid pentru adaptarea ingredientelor.",
        ],
      },
      {
        title: "Curs | Creează-ți propriile săpunuri lichide",
        lessons: [
          "Ghid complet, pas cu pas, pentru crearea propriilor săpunuri lichide cu glicerină.",
        ],
      },
      {
        title: "Curs | Creează-ți propriile uleiuri esențiale",
        lessons: [
          "Ghid complet, pas cu pas, pentru crearea propriilor uleiuri esențiale.",
        ],
      },
      {
        title: "BONUS GRATUIT | Cosmetice naturale",
        lessons: [
          "BONUS GRATUIT — Cosmetice pentru corp",
          "BONUS GRATUIT — Săruri de baie",
          "BONUS GRATUIT — Șampon solid",
        ],
      },
    ],
  },

  urgencyBanner: {
    discount: "REDUCERE DE 80%",
    plus: "+ 3 BONUSURI GRATUITE",
    middle: "la achiziția ta până pe",
    deadline: "14 DECEMBRIE",
    or: "sau până la epuizarea celor",
    slots: "26 DE LOCURI",
  },

  finalCta: {
    preHeadline: "MOMENTUL TĂU ESTE ACUM",
    urgencyTop: "REDUCERE DE 80%",
    headline: "Ia AZI mega pachetul EcoIerbuța la o reducere incredibilă",
    subUrgency:
      "Peste 2.586 de femei își creează deja propriile săpunuri și cosmetice acasă. Azi este rândul tău.",
    bundleList: [
      "Curs complet de săpunuri artizanale (4 module)",
      "500 de rețete unice pentru fiecare tip de piele",
      "Curs pas cu pas pentru săpunuri lichide",
      "Curs de uleiuri esențiale",
      "BONUS — Cosmetice pentru corp",
      "BONUS — Săruri de baie",
      "BONUS — Șampon solid",
      "Acces pe viață (PDF/online)",
    ],
    guaranteeText:
      "Garanție totală de 14 zile. Dacă nu îți place cursul, îți returnăm 100% din bani fără să punem întrebări.",
    guaranteeImageAlt: "Ștampilă pentru garanția de 14 zile",
    regularPriceLabel: "Înainte",
    regularPrice: "175 lei",
    offerPrice: "35 lei",
    discountBadge: "REDUCERE DE 80%",
    urgencyText: "Plată unică, acces pe viață",
    bottomUrgency: "Această ofertă expiră când cronometrul ajunge la zero.",
    button: "VREAU MEGA PACHETUL ACUM",
    trustRow: "Plată 100% sigură · Acces instantaneu · Garanție 14 zile",
  },

  instructorBio: {
    name: "Elena Vasile",
    title: "Expertă în cosmetice naturale",
    bio: "Bună, sunt Elena. Mă dedic cosmeticelor naturale și creării de săpunuri de peste 8 ani. Ceea ce a început ca o nevoie personală de a-mi îngriji pielea fără chimicale, s-a transformat în cea mai mare pasiune a mea... și, de asemenea, în stilul meu de viață. De-a lungul anilor, am dezvoltat zeci de formule proprii și am ajutat multe femei ca tine să facă primii pași în această lume fascinantă — să-și creeze primul săpun cu ingrediente din bucătărie și să descopere bucuria de a avea grijă de ele și de cei dragi într-un mod natural. Știu cum e să începi de la zero, fără experiență, cu frica de a nu greși sau fără să știi de unde să apuci lucrurile. De aceea, în acest curs împărtășesc cu tine tot ce am învățat – clar, practic și fără complicații inutile.",
    imageAlt: "Elena Vasile, expertă în cosmetice naturale și săpunuri artizanale",
    portfolioImages: [
      "/instructor-portfolio/work-1.webp",
      "/instructor-portfolio/work-2.webp",
      "/instructor-portfolio/work-3.webp",
    ],
    portfolioAlts: [
      "Săpunuri artizanale create de Elena",
      "Muncind în atelierul de cosmetice naturale",
      "Produse naturale finite",
    ],
    yearsLabel: "Peste 8 ani",
    yearsText: "creând cosmetice naturale",
    studentsLabel: "Peste 2.586",
    studentsText: "de cursante formate",
  },

  testimonials: {
    headline: "Vezi ce spun cele care au parcurs deja cursul",
    subheadline: "Recenzii reale de la cursantele noastre EcoIerbuța.",
    productLabel: "EcoIerbuța — Curs de săpunuri artizanale",
    reviewedLabel: "a scris o recenzie pentru",
    actions: { like: "Îmi place", comment: "Comentează", share: "Distribuie" },
    items: [
      {
        name: "Ioana Dumitrescu",
        handle: "@ioana_d",
        text: "Cursul mi-a plăcut la nebunie. Am pus în practică totul fix cum ne-a învățat profesoara, iar în mai puțin de o lună am avut o colecție întreagă de săpunuri proprii pentru toată familia. Pielea copiilor mei s-a îmbunătățit considerabil de când folosim doar produsele mele naturale făcute acasă. Mulțumesc pentru acest curs, chiar merită din plin.",
      },
      {
        name: "Maria Ionescu",
        handle: "",
        text: "Am terminat cursul acum o săptămână și sunt fascinată. Am făcut deja primele săpunuri, le-am testat în casă și toată lumea e încântată. Pielea mea este mult mai fină și mai hidratată, iar parfumurile sunt incredibile. Vă mulțumesc mult pentru această oportunitate. Merită fiecare bănuț.",
      },
      {
        name: "Simona Popescu",
        handle: "",
        text: "Las acest comentariu pentru că am făcut cursul cu ceva timp în urmă și de atunci nu am mai cumpărat niciun săpun din comerț. Toată familia folosește produsele mele naturale, iar diferența pentru piele este uriașă. Nu m-am gândit niciodată că pot face acasă lucruri de o asemenea calitate. MULȚUMESC. Acest curs este o investiție extraordinară.",
      },
      {
        name: "Dan Georgescu",
        handle: "@dan_g",
        text: "Conținut excelent, foarte clar și profesionist. Bonusurile cadou... dacă aveți ocazia să le luați, nu stați pe gânduri. Informații extrem de valoroase. Numai bine și mulțumesc mult că ne oferiți aceste cunoștințe.",
      },
    ],
    cta: "VREAU SĂ ÎNCEP AZI",
  },

  closingProof: {
    headlinePre: "Cursantele noastre își fac primele săpunuri",
    headlineHighlight: "chiar din prima săptămână",
    headlinePost: ". Tu ce mai aștepți?",
    ctaLabel: "ÎNCEPE ASTĂZI",
  },

  guarantee: {
    badgeLabel: "GARANȚIE 14 ZILE",
    headline: "STAI FĂRĂ GRIJI, NE ASUMĂM NOI TOT RISCUL PENTRU TINE.",
    text: "Vei avea la dispoziție două săptămâni întregi să testezi cursul, iar dacă nu îți place sau nu se ridică la așteptările tale, îți returnăm 100% din bani.",
    badgeAlt: "Ștampilă pentru garanția de 14 zile EcoIerbuța",
    certs: [
      { icon: "Award", label: "Calitate verificată" },
      { icon: "ShieldCheck", label: "Plată 100% sigură" },
      { icon: "Lock", label: "Date protejate" },
      { icon: "BadgeCheck", label: "Cursante mulțumite" },
    ],
  },

  faq: {
    headline: "Întrebări frecvente",
    subheadline: "Tot ce trebuie să știi înainte să începi.",
    items: [
      {
        q: "Este sigură plata?",
        a: "Da, plata se procesează prin Hotmart — una dintre cele mai sigure și recunoscute platforme digitale la nivel mondial, care operează în peste 160 de țări și este dotată cu certificate de securitate de ultimă generație. Datele tale de plată vor fi complet protejate și sunt 100% confidențiale, garantând o cumpărătură sigură.",
      },
      {
        q: "Pot să fac acest curs dacă nu știu absolut nimic?",
        a: "Bineînțeles! Toate cărțile digitale sunt explicate foarte detaliat și, pe bune, singurul lucru de care ai nevoie este voință. Întregul proces este foarte simplu și vei folosi instrumente super practice.",
      },
      {
        q: "Pot accesa cursul de pe orice dispozitiv?",
        a: "Da, poți intra în curs de pe orice dispozitiv! Fie că ești la calculator, tabletă sau pe telefonul mobil, te vei putea bucura de conținut indiferent de sistemul de operare pe care îl folosești – Windows, macOS, iOS sau Android. Mai mult, ai opțiunea să descarci aplicația Hotmart pentru a-ți ușura accesul direct de pe telefon.",
      },
      {
        q: "Am nevoie de o investiție mare ca să încep?",
        a: "Nu! Cosmetica naturală necesită o investiție inițială foarte mică, iar noi te învățăm cum să folosești materiale accesibile ca să începi fără cheltuieli inutile.",
      },
      {
        q: "Când începe cursul?",
        a: "În secunda în care cumperi cursul, primești un link de acces (împreună cu cărțile digitale în format PDF) care îți permite să intri imediat pe platformă și să-l parcurgi când ai tu chef. Rămâne al tău pe viață.",
      },
      {
        q: "Ce anume include cursul?",
        a: "Cursul include acces pe viață, ghiduri digitale pas cu pas, materiale descărcabile (PDF) și asistență tehnică.",
      },
      {
        q: "Ce se întâmplă dacă nu îmi place cursul?",
        a: "Ai o garanție completă de 14 zile. Dacă din orice motiv nu ești mulțumită, doar scrie-ne și îți returnăm 100% din bani, fără să punem întrebări.",
      },
    ],
  },

  footer: {
    brand: "CREARIS",
    copyright: "Copyright © crearis.online ® 2026",
    disclaimer:
      "Acest site web nu face parte din site-ul Facebook sau Facebook Inc. De asemenea, acest site NU este susținut sau sponsorizat de Facebook sub nicio formă.",
    trademark: "FACEBOOK este o marcă înregistrată a FACEBOOK, Inc.",
  },
};