<script setup lang="ts">
  const data = [
    {
      title: "Boukin",
      subtitle: "Application de gestion de prêts de livres entre amis",
      tags: [
        "Nuxt 3",
        "Typescript",
        "Vitest",
        "Python",
        "Django",
        "CSS",
        "GitlabCI",
        "Docker",
        "PostgreSQL",
        "Figma",
      ],
      description:
        "Pour mon projet de fin d'études, j'ai conçu et développé Boukin, une application web permettant aux utilisateurs de gérer facilement les prêts et emprunts de livres entre amis. Aux côtés de deux camarades, nous avons adopté une approche agile pour livrer une application fonctionnelle la plus aboutie possible. Mes contributions principales : Analyse & Conception : Définition des besoins, rédaction du cahier des charges et création de maquettes avec Figma. Développement : Implémentation complète du système de gestion des amitiés (ajout, modification, suppression, affichage), incluant le front-end (Nuxt.js, TypeScript) et l'intégration avec la base de données (Django, PostgreSQL). DevOps & Qualité : Mise en place d'outils d'intégration continue (GitLab CI), de conteneurisation (Docker) et d'une approche Test-Driven Development (TDD) pour garantir un code robuste et maintenable.",
      repository: {
        link: "https://gitlab.com/boukin",
        icon: "i-mdi:gitlab",
      },
      url: "https://boukin.adaschool.fr/register",
      image: "/boukin-mini.png",
    },
    {
      title: "Netatmo",
      subtitle: "Refonte du site-vitrine",
      tags: ["Nuxt 3", "Typescript", "Tailwind", "Directus", "GraphQL", "Storybook"],
      description:
        "Durant mes deux années chez Netatmo, l'un de mes projets majeurs a été la refonte et la maintenance du site vitrine de la marque, en collaboration avec l'équipe marketing et UX. Missions principales Développement Frontend : Création et intégration de composants UI réutilisables en Nuxt 3 et TypeScript, enrichissant la librairie Storybook. Mise en place d'animations interactives et fluides avec GSAP pour améliorer l'expérience utilisateur. Gestion des contenus : Connexion aux données via Directus et GraphQL, permettant à l'équipe marketing de gérer le contenu en toute autonomie. Collaboration & Agilité : Travail en équipe avec 3 développeurs, l'équipe marketing et l'UX designer, en méthodologie agile. Maintenance & Évolution : De septembre 2024 à mai 2025, j’ai été la principale mainteneuse du site, développant de nouvelles fonctionnalités et optimisant les performances. J’ai également accompagné l’équipe marketing dans l’utilisation de Directus pour la gestion des contenus.",
      url: "https://www.netatmo.com",
      image: "/netatmo-mini.png",
    },
    {
      title: "Mystery Quest",
      subtitle: "Application mobile de chasse au trésor géolocalisée",
      tags: ["React Native", "Expo", "Node.js", "Express", "MySQL"],
      description:
        "Mystery Quest est une application mobile permettant aux utilisateurs de participer à des chasses au trésor interactives basées sur la géolocalisation. En équipe de trois, j’ai contribué à la conception de l’application en réalisant des maquettes sur **Figma** et en développant plusieurs interfaces en **React Native**. J’ai également mis en place le backend avec **Node.js** et **Express**, en créant les routes et les contrôleurs permettant d’afficher les quêtes depuis une base de données **MySQL**. De plus, j’ai implémenté le suivi en temps réel des quêtes en fonction de la localisation des joueurs et géré l’affichage dynamique des scores pour enrichir l'expérience utilisateur.",
      repository: {
        link: "https://github.com/camhbrt/MysteryQuest",
        icon: "i-mdi:github",
      },
      image: "/mystery-mini.png",
    },
    {
      title: "Amelia's Castle",
      subtitle: "Jeu vidéo pour console virtuelle PICO-8",
      tags: ["Lua"],
      description:
        "Il s’agit de mon tout premier projet d'école, réalisé en équipe de 4 développeuses. Ce projet ludique m’a permis de mettre en pratique les bases de la programmation \(variables, conditions, boucles\) tout en découvrant le travail en équipe en mode agile. J’y ai contribué en concevant certains éléments graphiques, en animant les nuages et la fumée toxique, ainsi qu’en implémentant les mécaniques de victoire et de défaite… sans oublier la musique !",
      repository: {
        link: "https://github.com/camhbrt/amelias_castle",
        icon: "i-mdi:github",
      },
      url: "https://www.lexaloffle.com/bbs/?tid=52831",
      image: "/amelias-mini.png",
    },
  ];
</script>
<template>
  <ul class="row-start-2 col-start-2 -col-end-2 grid gap-6 md:grid-cols-2 mt-12">
    <li v-for="project in data" :key="project.title" class="">
      <ProjectCard v-bind="project" />
    </li>
  </ul>
</template>
