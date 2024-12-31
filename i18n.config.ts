export default defineI18nConfig(() => ({
  locale: "fr",
  messages: {
    en: {
      layout: {
        lang: "EN",
        langSelect: "Language selector",
        themeSelect: "Theme selector",
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
      },
      home: {
        name: "Hi, I'm Camille",
        job: "Full-stack web developer",
        description:
          "I am Camille Hébert, a Full-stack Developer specializing in front-end development. I am dedicated to accessibility and ensuring that web applications meet both user needs and client expectations. With two years of experience, I thrive on creating inclusive and impactful digital solutions. Welcome to my portfolio!",
        resume: "Check my resume",
        seeMore: "See more about me",
      },
    },
    fr: {
      layout: {
        lang: "FR",
        langSelect: "Sélecteur de langue",
        themeSelect: "Sélecteur de thème",
        home: "Accueil",
        about: "À propos",
        projects: "Projets",
        contact: "Contact",
      },
      home: {
        name: "Hello, je suis Camille",
        job: "Développeuse web full-stack",
        description:
          "Je suis Camille Hébert, développeuse Full-stack spécialisée en développement front-end. L'accessibilité est au cœur de mon travail, et je veille à ce que les applications web répondent aux besoins des utilisateurs et aux attentes des clients. Forte de deux ans d'expérience, je m'épanouis dans la création de solutions numériques inclusives et percutantes. Bienvenue sur mon portfolio !",
        resume: "Voir mon CV",
        seeMore: "En savoir plus",
      },
    },
  },
}));
