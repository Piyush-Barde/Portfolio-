/*
  ================================================================
   YOUR SITE CONTENT: this is the only file you need to edit.
   Change the text, links, photo and projects below, save, done.
   (App.jsx and the other files just display whatever is here.)
  ================================================================
*/

export const site = {
  /* ---- You ---- */
  firstName: "Piyush",
  lastName: "Barde",
  initials: "PB",
  role: "AI & DATA SCIENCE STUDENT",
  intro:
    "I build useful software and intelligent products, bringing ideas from data and code into the real world.",
  availability: "Open to opportunities",
  caption: "BUILD · LEARN · IMPROVE", // small line under the hero photo

  /* ---- Your photo ----
     Put the image anywhere inside src/ and point to it from here:
       "./photo/Piyush_Barde-removebg.png"   (a file inside src/)
       "/profile.jpg"                       (a file inside public/)
       "https://example.com/me.jpg"         (an image on the web)
     If the image can't be found, a "PB." badge is shown instead. */
  photo: "./photo/Piyush_Barde-removebg.png",

  /* ---- Links ----
     Leave a link as "" to hide it. */
  email: "your.email@example.com", // TODO: put your real email
  github: "https://github.com/Piyush-Barde",
  linkedin: "#", // TODO: put your LinkedIn URL
  resume: "/resume.pdf", // put resume.pdf in the public/ folder

  /* ---- Strip under the hero (add or remove items freely) ---- */
  ticker: [
    "BASED IN INDIA",
    "PYTHON · REACT · MACHINE LEARNING",
    "AVAILABLE FOR OPPORTUNITIES",
  ],

  /* ---- Featured project (currently hidden) ----
     To show it again, replace `null` with the block below.
     featured: {
       title: "Your project name",
       description: "One or two lines about what it does.",
       flow: ["Users", "Web app", "API", "Processing", "Results"],
     },
  */
  featured: null,

  /* ---- About ---- */
  about: {
    note: "Curious by nature. Focused on impact.",
    text: "I’m an AI and Data Science student interested in machine learning and backend development. I enjoy turning real-world problems into practical software. Update this paragraph with your own story.",
    skills: [
      "Python",
      "JavaScript",
      "React",
      "Machine Learning",
      "Backend Development",
      "Data Science",
    ],
  },

  /* ---- Projects: copy a block to add one, delete a block to remove one.
     `image` is optional (same kind of path as `photo` above). ---- */
  projects: [
    {
      title: "Project One",
      type: "AI / MACHINE LEARNING",
      description: "Add a short description of your project.",
      image: "",
    },
    {
      title: "Project Two",
      type: "WEB DEVELOPMENT",
      description: "Describe what you built and what it does.",
      image: "",
    },
    {
      title: "Project Three",
      type: "DATA / ANALYTICS",
      description: "Add another project or remove this card.",
      image: "",
    },
  ],

  /* ---- Contact section ---- */
  contact: {
    title: ["Let’s make", "something useful."], // each item is one line
    note: "Have an opportunity or just want to say hello?",
  },
};