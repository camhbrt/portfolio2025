export default defineI18nConfig(() => ({
  locale: "fr",
  messages: {
    fr: {
      layout: {
        lang: "FR",
        langSelect: "Traduire en anglais",
        themeSelect: "Changer le thème",
        showMenu: "Afficher le menu",
        home: "Accueil",
        about: "À propos",
        projects: "Projets",
        contact: "Contact",
        footer: `Créé avec ❤️ par Camille Hébert`,
      },
      home: {
        name: "Hello, je suis Camille",
        job: "Développeuse web full-stack",
        description:
          "Je suis Camille Hébert, développeuse Full-stack spécialisée en développement front-end. L'accessibilité est au cœur de mon travail, et je veille à ce que les applications web répondent aux besoins des utilisateurs et aux attentes des clients. Forte de deux ans d'expérience, je m'épanouis dans la création de solutions numériques inclusives et percutantes. Bienvenue sur mon portfolio !",
        resume: "Voir mon CV",
        seeMore: "En savoir plus",
        highlights: "En résumé",
        twoYears: "2 ans",
        experience: "d'expérience en développement web",
        master: "Maîtrise de l'écosystème",
        vue: "vue.js",
        vueTools: "nuxt, pinia, vitest, vueUse,..",
        a11y: "a11y",
        accessibility: "pratique axée sur l'accessibilité",
      },
      about: {
        softSkills: {
          title: "Mes points forts",
          empathetic: "Empathique",
          empatheticFooter: "je veille au bien-être de chacun dans l'équipe",
          flexible: "Flexible",
          flexibleFooter: "j'analyse le contexte pour m'adapter intelligemment",
          collaborative: "Collaborative",
          collaborativeFooter: "ce que je préfère c'est construire ensemble",
          curious: "Curieuse",
          curiousFooter: "j'aime découvrir de nouveaux domaines",
          responsible: "Responsable",
          responsibleFooter:
            "lorsqu'on me donne une mission, je fais de mon possible pour la mener à bien",
          transparent: "Transparente",
          transparentFooter: "je communique avec honnêteté",
        },
        stepper: {
          teaching: {
            title: "Enseignement",
            descriptionHtml: `
              <div class="space-y-2">
                <p>
                  J’ai enseigné pendant 6 ans au collège, où j’ai appris à transmettre des notions complexes de manière claire et engageante.
                  Cette expérience m’a également permis de développer un sens aigu de la pédagogie et de l’écoute.
                </p>
                <p class="font-semibold">Compétences développées :</p>
                <ul>
                  <li>✔️ Pédagogie : vulgarisation de concepts complexes</li>
                  <li>✔️ Gestion de projets : création et suivi de projets pédagogiques</li>
                  <li>✔️ Empathie & adaptabilité : prise en compte des besoins variés des élèves</li>
                  <li>✔️ Prise de parole : animation de groupes et communication claire</li>
                </ul>
              </div>
            `,
          },
          reconversion: {
            title: "Reconversion",
            descriptionHtml: `
              <div class="space-y-2">
                <p>
                  En 2023, j’ai quitté l’Éducation nationale pour me reconvertir dans le développement web. J’ai choisi
                  Ada Tech School, une école inclusive et alternative, centrée sur la pratique, la collaboration et l’apprentissage autonome.
                </p>
                <p class="font-semibold">Compétences développées :</p>
                <ul>
                  <li>✔️ Collaboration : nombreux projets de groupe en pair programming</li>
                  <li>✔️ Autonomie & rigueur : apprentissage en auto-gestion</li>
                  <li>✔️ Curiosité : ouverture à de nombreuses technos front et back</li>
                  <li>✔️ Résilience : changement de carrière exigeant, mais motivant</li>
                </ul>
                <p>
                  Fin 2024, j’obtiens le titre RNCP de <strong>Conceptrice Développeuse d’Applications</strong>.
                </p>
              </div>
            `,
          },
          development: {
            title: "Développement",
            descriptionHtml: `
              <div class="space-y-2">
                <p>
                  Depuis octobre 2023, je travaille chez Netatmo comme développeuse web sur leur site vitrine et leur e-shop. J’ai d’abord intégré l’équipe en alternance, puis en poursuivant sur une mission avec la même équipe.
                </p>
                <p class="font-semibold">Compétences développées :</p>
                <ul>
                  <li>✔️ Vue.js 3, Nuxt.js & TypeScript : développement d’interfaces dynamiques</li>
                  <li>✔️ TailwindCSS & Storybook : UI modulaires & maintenables</li>
                  <li>✔️ CMS headless Directus : gestion de contenu sur mesure</li>
                  <li>✔️ Travail en équipe agile : rituels, tickets, revues de code</li>
                </ul>
                <p>
                  Cette première expérience concrète m’a permis de consolider mes acquis tout en découvrant les enjeux métier et les contraintes réelles du développement web.
                </p>
              </div>
            `,
          },
        },
      },
      contact: {
        title: "Envie de collaborer sur un projet\u00A0?",
        highlight: "Discutons-en",
        messageMe: "Ecrivez-moi",
        socials: "Vous pouvez également retrouver mes réseaux professionnels ci-dessous.",
      },
    },
    en: {
      layout: {
        lang: "EN",
        langSelect: "Translate to french",
        themeSelect: "Change color theme",
        showMenu: "Show menu",
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        footer: `Made with ❤️ by Camille Hébert`,
      },
      home: {
        name: "Hi, I'm Camille",
        job: "Full-stack web developer",
        description:
          "I am Camille Hébert, a Full-stack Developer specializing in front-end development. I am dedicated to accessibility and ensuring that web applications meet both user needs and client expectations. With two years of experience, I thrive on creating inclusive and impactful digital solutions. Welcome to my portfolio!",
        resume: "Check my resume",
        seeMore: "Learn more about me",
        highlights: "Highlights",
        twoYears: "2 years",
        experience: "of experience in web development",
        master: "Mastery of the ecosystem",
        vue: "vue.js",
        vueTools: "nuxt, pinia, vitest, vueUse, etc.",
        a11y: "a11y",
        accessibility: "accessibility-focused practice",
      },
      about: {
        softSkills: {
          title: "My strengths",
          empathetic: "Empathetic",
          empatheticFooter: "I care about everyone's well-being in the team",
          flexible: "Flexible",
          flexibleFooter: "I analyze the context to adapt smartly",
          collaborative: "Collaborative",
          collaborativeFooter: "What I love most is building together",
          curious: "Curious",
          curiousFooter: "I love exploring new fields",
          responsible: "Responsible",
          responsibleFooter: "When I'm given a mission, I do my best to carry it through",
          transparent: "Transparent",
          transparentFooter: "I communicate with honesty",
        },
        stepper: {
          teaching: {
            title: "Teaching",
            descriptionHtml: `
              <div class="space-y-2">
                <p>
                  I taught for 6 years in middle school, where I learned to convey complex concepts clearly and engagingly.
                  This experience also helped me develop strong teaching skills and active listening.
                </p>
                <p class="font-semibold">Skills developed:</p>
                <ul>
                  <li>✔️ Pedagogy: simplifying complex ideas</li>
                  <li>✔️ Project management: designing and monitoring educational projects</li>
                  <li>✔️ Empathy & adaptability: addressing students’ diverse needs</li>
                  <li>✔️ Public speaking: leading groups and communicating clearly</li>
                </ul>
              </div>
            `,
          },
          reconversion: {
            title: "Career Change",
            descriptionHtml: `
              <div class="space-y-2">
                <p>
                  In 2023, I left the public education system to retrain as a web developer. I chose
                  Ada Tech School, an inclusive and alternative school focused on hands-on learning, collaboration, and self-directed education.
                </p>
                <p class="font-semibold">Skills developed:</p>
                <ul>
                  <li>✔️ Collaboration: many group projects in pair programming</li>
                  <li>✔️ Autonomy & rigor: self-managed learning</li>
                  <li>✔️ Curiosity: exposure to a wide range of front-end and back-end technologies</li>
                  <li>✔️ Resilience: demanding but rewarding career transition</li>
                </ul>
                <p>
                  By the end of 2024, I will earn the RNCP title of <strong>Application Developer Designer</strong>.
                </p>
              </div>
            `,
          },
          development: {
            title: "Development",
            descriptionHtml: `
              <div class="space-y-2">
                <p>
                  Since October 2023, I’ve been working at Netatmo as a web developer on their showcase website and e-shop. I started as an apprentice and continued with the same team on a contract.
                </p>
                <p class="font-semibold">Skills developed:</p>
                <ul>
                  <li>✔️ Vue.js 3, Nuxt.js & TypeScript: building dynamic interfaces</li>
                  <li>✔️ TailwindCSS & Storybook: modular and maintainable UI</li>
                  <li>✔️ Headless CMS (Directus): custom content management</li>
                  <li>✔️ Agile teamwork: ceremonies, tickets, code reviews</li>
                </ul>
                <p>
                  This first real-world experience helped me solidify my skills while learning about business challenges and real constraints in web development.
                </p>
              </div>
            `,
          },
        },
      },
      contact: {
        title: "Interested in collaborating on a project\u00A0?",
        highlight: "Let's talk",
        messageMe: "Message me",
        socials: "You can also find my professional socials below.",
      },
    },
  },
}));
