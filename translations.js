/* Translations */

const translations = {
  en: {
    navigation: {
      home: "HOME",
      education: "EDUCATION",
      techStack: "TECH STACK",
      projects: "PROJECTS",
      aboutMe: "ABOUT ME",
    },

    home: {
      greeting: "Hello, I'm ",
      name: "Diana Nikitina!",

      description: `
                I'm a Computer Science student, developer
                and curious problem solver.
                I'm interested in
                <span class="highlight">web development</span>,
                <span class="highlight">C#</span> and
                <span class="highlight">game development</span>,
                and I enjoy building projects where design,
                logic and code come together.
                I'm always learning, experimenting and
                looking for new challenges.
            `,

      email: "Email",
      github: "GitHub",
      cv: "CV",
      downloadCV: "Download CV",
    },
  },

  uk: {
    navigation: {
      home: "ГОЛОВНА",
      education: "ОСВІТА",
      techStack: "ТЕХНОЛОГІЇ",
      projects: "ПРОЄКТИ",
      aboutMe: "ПРО МЕНЕ",
    },

    home: {
      greeting: "Привіт, я ",
      name: "Діана Нікітіна!",

      description: `
                Я студентка спеціальності «Комп'ютерні науки»,
                розробниця та людина, яка любить знаходити
                рішення складних завдань.
                Мене цікавлять
                <span class="highlight">веброзробка</span>,
                <span class="highlight">C#</span> та
                <span class="highlight">розробка ігор</span>.
                Мені подобається створювати проєкти,
                у яких поєднуються дизайн, логіка та код.
                Я постійно навчаюся, експериментую
                та шукаю нові виклики.
            `,

      email: "Пошта",
      github: "GitHub",
      cv: "Резюме",
      downloadCV: "Завантажити CV",
    },
  },

  no: {
    navigation: {
      home: "HJEM",
      education: "UTDANNING",
      techStack: "TEKNOLOGIER",
      projects: "PROSJEKTER",
      aboutMe: "OM MEG",
    },

    home: {
      greeting: "Hei, jeg er ",
      name: "Diana Nikitina!",

      description: `
                Jeg studerer informatikk og er interessert
                i programmering og problemløsning.
                Jeg er spesielt interessert i
                <span class="highlight">webutvikling</span>,
                <span class="highlight">C#</span> og
                <span class="highlight">spillutvikling</span>.
                Jeg liker å utvikle prosjekter der design,
                logikk og kode møtes.
                Jeg lærer stadig nye ting, eksperimenterer
                og ser etter nye utfordringer.
            `,

      email: "E-post",
      github: "GitHub",
      cv: "CV",
      downloadCV: "Last ned CV",
    },
  },
};

/* Education Translations */

translations.en.education = {
  educationTitle: "Education",
  experienceTitle: "Experience",

  educationItems: [
    {
      title: "Volodymyr Dahl East Ukrainian National University",
      description: "Bachelor's Degree in Computer Science",
      date: "2023–Present",
    },
    {
      title: "School No. 8, Lysychansk, Ukraine",
      description: "Complete General Secondary Education",
      date: "2012–2023",
    },
  ],

  experienceItems: [
    {
      title: "Academic & Personal Projects",
      description:
        "Course projects, web development, C# applications and game development.",
      date: "2023–Present",
    },
    {
      title: "Personal Web Projects",
      description: "Development of My List and Daily Fortune.",
      date: "2026",
    },
    {
      title: "Hello World!",
      description: "My first steps into programming.",
      date: "2023",
    },
  ],
};

translations.uk.education = {
  educationTitle: "Освіта",
  experienceTitle: "Досвід",

  educationItems: [
    {
      title: "Східноукраїнський національний університет імені Володимира Даля",
      description: "Бакалаврат за спеціальністю «Комп'ютерні науки»",
      date: "2023–дотепер",
    },
    {
      title: "Школа № 8, Лисичанськ, Україна",
      description: "Повна загальна середня освіта",
      date: "2013–2023",
    },
  ],

  experienceItems: [
    {
      title: "Навчальні та особисті проєкти",
      description:
        "Курсові проєкти, веброзробка, застосунки на C# та розробка ігор.",
      date: "2023–дотепер",
    },
    {
      title: "Власні вебпроєкти",
      description: "Розробка My List та Daily Fortune.",
      date: "2026",
    },
    {
      title: "Hello World!",
      description: "Мої перші кроки в програмуванні.",
      date: "2023",
    },
  ],
};

translations.no.education = {
  educationTitle: "Utdanning",
  experienceTitle: "Erfaring",

  educationItems: [
    {
      title: "Volodymyr Dahl East Ukrainian National University",
      description: "Bachelorgrad i informatikk",
      date: "2023–nå",
    },
    {
      title: "Skole nr. 8, Lysytsjansk, Ukraina",
      description: "Fullført videregående opplæring",
      date: "2013–2023",
    },
  ],

  experienceItems: [
    {
      title: "Studieprosjekter og egne prosjekter",
      description:
        "Studieprosjekter, webutvikling, C#-applikasjoner og spillutvikling.",
      date: "2023–nå",
    },
    {
      title: "Egne webprosjekter",
      description: "Utvikling av My List og Daily Fortune.",
      date: "2026",
    },
    {
      title: "Hello World!",
      description: "Mine første steg innen programmering.",
      date: "2023",
    },
  ],
};

/* Tech Stack Translations */

translations.en.techStack = {
  title: "Tech Stack",

  categories: [
    "Languages",
    "Web Technologies",
    "Frameworks & Backend",
    "Databases",
    "Game Development",
    "Mobile Development",
    "Dev Tools",
    "Design & Creative Tools",
  ],
};

translations.uk.techStack = {
  title: "Технології",

  categories: [
    "Мови програмування",
    "Вебтехнології",
    "Фреймворки та бекенд",
    "Бази даних",
    "Розробка ігор",
    "Мобільна розробка",
    "Інструменти розробки",
    "Дизайн і творчі інструменти",
  ],
};

translations.no.techStack = {
  title: "Teknologier",

  categories: [
    "Programmeringsspråk",
    "Webteknologier",
    "Rammeverk og backend",
    "Databaser",
    "Spillutvikling",
    "Mobilutvikling",
    "Utviklingsverktøy",
    "Design og kreative verktøy",
  ],
};

/* Projects Translations */

translations.en.projects = {
  title: "Projects",
  viewDetails: "View Details",
  code: "Code",
  about: "About the Project",
  technologies: "Technologies Used",
  liveDemo: "Live Demo",
  sourceCode: "Source Code",
  close: "Close project details",
  teaserLabel: "NEXT LEVEL",
  comingSoon: "COMING SOON",
  dragMe: "Drag me!",
  myListPreview: "Open My List live demo",
  dailyFortunePreview: "Open Daily Fortune live demo",

  myList: {
    subtitle: "Full-Stack Web Application",
    paragraphs: [
      "My List is a personal media tracking application designed to help users organize their favorite anime, series, movies, books, and games.",
      "Users can create accounts, add entries, manage completion statuses, write reviews, give ratings, upload images, and explore their collections through search, filters, and statistics.",
    ],
  },

  dailyFortune: {
    subtitle: "Multilingual Progressive Web App",
    paragraphs: [
      "Daily Fortune is an interactive web application that reveals a new fortune every day through an animated envelope.",
      "The project features a playful pastel design, three languages, a daily countdown, locally saved fortunes, responsive layouts, and Progressive Web App support.",
    ],
  },
};

translations.uk.projects = {
  title: "Проєкти",
  viewDetails: "Детальніше",
  code: "Код",
  about: "Про проєкт",
  technologies: "Використані технології",
  liveDemo: "Відкрити сайт",
  sourceCode: "Вихідний код",
  close: "Закрити інформацію про проєкт",
  teaserLabel: "НАСТУПНИЙ РІВЕНЬ",
  comingSoon: "НЕЗАБАРОМ",
  dragMe: "Перетягни мене!",
  myListPreview: "Відкрити сайт My List",
  dailyFortunePreview: "Відкрити сайт Daily Fortune",

  myList: {
    subtitle: "Full-stack вебзастосунок",
    paragraphs: [
      "My List — це вебзастосунок для ведення особистих списків аніме, серіалів, фільмів, книг та ігор.",
      "Користувачі можуть створювати облікові записи, додавати записи, змінювати їхні статуси, писати відгуки, виставляти оцінки, завантажувати зображення, а також користуватися пошуком, фільтрами та статистикою.",
    ],
  },

  dailyFortune: {
    subtitle: "Багатомовний прогресивний вебзастосунок (PWA)",
    paragraphs: [
      "Daily Fortune — це інтерактивний вебзастосунок, який щодня відкриває нове передбачення через анімований конверт.",
      "Проєкт має ніжний пастельний дизайн, підтримує три мови, містить зворотний відлік до наступного передбачення, локальне збереження даних, адаптивну верстку та можливість встановлення як PWA.",
    ],
  },
};

translations.no.projects = {
  title: "Prosjekter",
  viewDetails: "Se detaljer",
  code: "Kode",
  about: "Om prosjektet",
  technologies: "Teknologier brukt",
  liveDemo: "Åpne nettsiden",
  sourceCode: "Kildekode",
  close: "Lukk prosjektdetaljene",
  teaserLabel: "NESTE NIVÅ",
  comingSoon: "KOMMER SNART",
  dragMe: "Dra meg!",
  myListPreview: "Åpne My List",
  dailyFortunePreview: "Åpne Daily Fortune",

  myList: {
    subtitle: "Fullstack-webapplikasjon",
    paragraphs: [
      "My List er en webapplikasjon for å organisere personlige lister over anime, serier, filmer, bøker og spill.",
      "Brukere kan opprette kontoer, legge til oppføringer, endre status, skrive anmeldelser, gi vurderinger, laste opp bilder og bruke søk, filtre og statistikk for å få oversikt over samlingene sine.",
    ],
  },

  dailyFortune: {
    subtitle: "Flerspråklig progressiv webapp (PWA)",
    paragraphs: [
      "Daily Fortune er en interaktiv webapplikasjon som gir brukeren en ny spådom hver dag gjennom en animert konvolutt.",
      "Prosjektet har et lekent design i pastellfarger, støtte for tre språk, nedtelling til neste spådom, lokal lagring, responsivt design og mulighet for installasjon som PWA.",
    ],
  },
};

/* About Me Translations */

translations.en.aboutMe = {
  title: "Who Am I?",
  hobbiesTitle: "Hobbies",

  paragraphs: [
    "I'm a Computer Science student with a strong interest in software development, web technologies and game development. I enjoy turning ideas into working projects and learning new technologies through practice. I'm currently developing my skills in both frontend and backend development, and my long-term goal is to grow as a software developer and create my own games and digital products.",

    "I like building things from scratch — from websites and small applications to games and visual concepts. For me, programming is a mix of logic, creativity and constant experimentation.",
  ],

  hobbies: ["Gaming", "Coding", "Reading", "Pixel Art", "Sleeping"],
};

translations.uk.aboutMe = {
  title: "Хто я?",
  hobbiesTitle: "Захоплення",

  paragraphs: [
    "Я студентка спеціальності «Комп'ютерні науки», яка захоплюється розробкою програмного забезпечення, вебтехнологіями та створенням ігор. Мені подобається перетворювати ідеї на реальні проєкти й опановувати нові технології на практиці. Зараз я розвиваю свої навички у фронтенд- та бекенд-розробці, а моя довгострокова мета — стати досвідченою розробницею програмного забезпечення та створювати власні ігри й цифрові продукти.",

    "Я люблю створювати все з нуля — від вебсайтів і невеликих застосунків до ігор та візуальних концепцій. Для мене програмування — це поєднання логіки, творчості та постійних експериментів.",
  ],

  hobbies: ["Ігри", "Програмування", "Читання", "Піксель-арт", "Сон"],
};

translations.no.aboutMe = {
  title: "Hvem er jeg?",
  hobbiesTitle: "Interesser",

  paragraphs: [
    "Jeg studerer informatikk og er svært interessert i programvareutvikling, webteknologier og spillutvikling. Jeg liker å gjøre ideer om til fungerende prosjekter og lære nye teknologier gjennom praktisk arbeid. For tiden utvikler jeg ferdighetene mine innen både frontend- og backendutvikling. Mitt langsiktige mål er å bli en dyktig programvareutvikler og lage mine egne spill og digitale produkter.",

    "Jeg liker å bygge ting fra bunnen av — fra nettsider og små applikasjoner til spill og visuelle konsepter. For meg er programmering en kombinasjon av logikk, kreativitet og kontinuerlig eksperimentering.",
  ],

  hobbies: ["Dataspill", "Programmering", "Lesing", "Pikselkunst", "Soving"],
};
