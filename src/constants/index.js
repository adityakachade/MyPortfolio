const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skill",
    title: "Skill",
  },
  {
    id: "work",
    title: "Project's",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: "https://mern-rajesh-portfolio.web.app/assets/web.png",
  },
  {
    title: "React Developer",
    icon: "https://mern-rajesh-portfolio.web.app/assets/frontend.png",
  },
  {
    title: "Backend Developer",
    icon: "https://mern-rajesh-portfolio.web.app/assets/backend.png",
  },
  {
    title: "Full Stack Developer",
    icon: "https://mern-rajesh-portfolio.web.app/assets/fullStack.png",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "https://mern-rajesh-portfolio.web.app/assets/tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "https://mern-rajesh-portfolio.web.app/assets/tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "https://mern-rajesh-portfolio.web.app/assets/tech/javascript.png",
  },
  {
    name: "Tailwind CSS",
    icon: "https://mern-rajesh-portfolio.web.app/assets/tech/tailwind.png",
  },
  {
    name: "React JS",
    icon: "https://mern-rajesh-portfolio.web.app/assets/tech/reactjs.png",
  },
  {
    name: "Redux",
    icon: "https://mern-rajesh-portfolio.web.app/assets/tech/redux.png",
  },
  {
    name: "Material UI",
    icon: "https://mern-rajesh-portfolio.web.app/assets/tech/material-ui.png",
  },

  // {
  //   name: "Scss",
  //   icon: "https://mern-rajesh-portfolio.web.app/assets/tech/scss.png",
  // },
  {
    name: "Node JS",
    icon: "https://mern-rajesh-portfolio.web.app/assets/tech/nodejs.png",
  },
  {
    name: "Express JS",
    icon: "https://mern-rajesh-portfolio.web.app/assets/tech/expressjs.png",
  },
  {
    name: "MongoDB",
    icon: "https://mern-rajesh-portfolio.web.app/assets/tech/mongodb.png",
  },
  {
    name: "Mongoose",
    icon: "https://mern-rajesh-portfolio.web.app/assets/tech/mongoose.png",
  },
  {
    name: "Git",
    icon: "https://mern-rajesh-portfolio.web.app/assets/tech/git.png",
  },
  {
    name: "GitHub",
    icon: "https://mern-rajesh-portfolio.web.app/assets/github.png",
  },

];



const projects = [
  {
    name: "AgriAi",
    description:
      "A modern web application for tracking and analyzing plant health history with beautiful visualizations. Monitor your plants' wellbeing through intuitive dashboards, AI-powered insights, and stunning data visualizations that make plant care smarter and more rewarding than ever.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:
      "AgriAi.png",
    alt: "Agriai",
    source_code_link: "https://github.com/adityakachade/AgriAi",
    live_link: "https://agriaiapp.netlify.app/",
  },
  {
    name: "FinanceTracker",
    description:
      "Money Manager is a personal finance app that helps users track income and expenses, visualize spending patterns, and manage their budgets effectively. Built with HTML, CSS, JavaScript, and Firebase, it features real-time data sync and responsive UI for all devices.",
    tags: [
      { name: "HTML5", color: "blue-text-gradient" },
      { name: "CSS3", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Firebase", color: "blue-text-gradient" },
      { name: "Firestore", color: "green-text-gradient" },
    ],
    image: "FinanceTracker.png",
    alt: "FinanceTracker",
    source_code_link: "https://github.com/adityakachade/FinanceTracker",
    live_link: "https://trackthefinance.netlify.app/",
  },
  {
    name: "KhanAcademy",
    description:
      "A Khan Academy-inspired learning platform featuring interactive video lessons, practice exercises, and personalized progress tracking. Built with React, Node.js, and MongoDB, it delivers engaging education with real-time feedback and achievement badges.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image:
      "khanacademy.png",
    alt: "Khanacademy.png",

    source_code_link: "https://github.com/Janhavi2212/B42_WEB_018_The-Debuggers",
    live_link: "https://khan-acadmey-clone.netlify.app/",
  },
  {
    name: "Nearbyeats",
    description:
      "NearestEat is a responsive web app that helps users find the five closest restaurants using real-time location data. Built with React and JavaScript, it integrates GPS and Google Maps API (or OpenStreetMap) to fetch nearby restaurants. Users can filter results, view key details, and get turn-by-turn directions",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "APIs",
        color: "pink-text-gradient",
      },
    ],
    image:
      "Nearbyeats.png",
    alt: "Nearbyeats",
    source_code_link: "https://github.com/adityakachade/NearbyEats/tree/main/restaurant",
    live_link: "https://nearbyeats.netlify.app/",
  },

];

export {
  navLinks,
  services,
  technologies,
  projects,

};
