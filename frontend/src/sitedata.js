/*
  ================================================================
   YOUR SITE CONTENT: this is the only file you need to edit.
   Change the text, links, photo and projects below, save, done.
   (App.jsx and the other files just display whatever is here.)

   Any section whose list is empty ( [] ) is hidden automatically,
   and the section numbers update by themselves.
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

  /* ---- Animations ----
     true  = smooth entrances, count-up numbers, progress bar
     false = a calm, static page
     (People who switch off animations in their system settings always get the static page.) */
  animations: true,

  /* ---- Your photo ----
     "./photo/Piyush_Barde-removebg.png"   (a file inside src/)
     "/profile.jpg"                       (a file inside public/)
     "https://example.com/me.jpg"         (an image on the web)
     If the image can't be found, a "PB." badge is shown instead. */
  photo: "./photo/Piyush_Barde-removebg.png",

  /* ---- Links ---- leave a link as "" to hide it. */
  email: "your.email@example.com", // TODO: put your real email
  github: "https://github.com/Piyush-Barde",
  linkedin: "#", // TODO: put your LinkedIn URL
  resume: "/resume.pdf", // put resume.pdf in the public/ folder

  /* ---- Strip under the hero ---- */
  ticker: [
    "BASED IN INDIA",
    "PYTHON · REACT · MACHINE LEARNING",
    "AVAILABLE FOR OPPORTUNITIES",
  ],

  /* ---- Numbers under the hero. A number counts up; text (like "2027") is shown as is.
     TODO: placeholders, replace with your real numbers. ---- */
  stats: [
    { value: 3, suffix: "+", label: "Projects built" },
    { value: 5, suffix: "+", label: "Technologies used" },
    { value: "2027", suffix: "", label: "Graduating" },
  ],

  /* ---- Featured project (currently hidden) ---- */
  featured: null,

  /* ---- About ---- */
  about: {
    note: "Curious by nature. Focused on impact.",
    text: "I’m an AI and Data Science student interested in machine learning and backend development. I enjoy turning real-world problems into practical software. Update this paragraph with your own story.",
    focus: [
      "Building machine learning projects from data to deployment",
      "Learning backend development and clean API design",
      "Turning real-world problems into practical software",
    ],
  },

  /* ---- Education (copy a block to add another) ---- */
  education: [
    {
      school: "Your college name", // TODO
      place: "City, State",
      degree: "Your degree and branch",
      dates: "20XX – 20XX",
      grade: "CGPA X.X", // leave "" to hide
      courses: ["Add key courses here", "Machine Learning", "Data Structures"],
    },
  ],

  /* ---- Experience (newest first). Set `current: true` on the one you're doing now. ---- */
  experience: [
    {
      role: "Role title", // TODO
      company: "Company or organisation",
      dates: "Month 20XX – Present",
      current: true,
      tags: ["Python", "React"],
      bullets: ["What you built or owned, in one line."],
      impact: "One sentence on the result, ideally with a number.",
    },
  ],

  /* ---- Skills: each group becomes one tab. ---- */
  skills: [
    { name: "Languages", items: ["Python", "JavaScript"] },
    { name: "AI & Data", items: ["Machine Learning", "Data Science"] },
    { name: "Web & Backend", items: ["React", "Backend Development"] },
  ],

  /* ---- Main projects ----
     summary : the problem it solves, in one line
     results : 1–3 short bullets, numbers work best
     diagram : a small animated flow. Or use `image` for a screenshot.
     code / demo / image / status are optional: leave "" to hide. */
  projects: [
    {
      title: "Project One",
      type: "AI / MACHINE LEARNING",
      status: "", // e.g. "In progress"
      summary: "Add a short description of the problem this project solves.",
      results: ["Add a result with a number, for example “cut manual work by 40%”."],
      tags: ["Python", "Machine learning"],
      meta: "Personal project · 2026",
      code: "https://github.com/Piyush-Barde",
      demo: "",
      image: "",
      diagram: { label: "ML PIPELINE", steps: ["Data", "Features", "Model", "Results"], footer: "PYTHON" },
    },
    {
      title: "Project Two",
      type: "WEB DEVELOPMENT",
      status: "",
      summary: "Describe what you built and who it helps.",
      results: ["Add what it does or how well it works."],
      tags: ["React", "JavaScript"],
      meta: "Personal project · 2026",
      code: "https://github.com/Piyush-Barde",
      demo: "",
      image: "",
      diagram: { label: "WEB APP", steps: ["Browser", "React app", "API", "Database"], footer: "REACT" },
    },
    {
      title: "Project Three",
      type: "DATA / ANALYTICS",
      status: "",
      summary: "Add another project or remove this block.",
      results: ["Add a finding or outcome."],
      tags: ["Python", "Data science"],
      meta: "Personal project · 2026",
      code: "https://github.com/Piyush-Barde",
      demo: "",
      image: "",
      diagram: { label: "DATA FLOW", steps: ["Source", "Clean", "Analyse", "Dashboard"], footer: "PYTHON" },
    },
  ],

  /* ---- Smaller projects: one compact line each. Leave [] to hide. ---- */
  moreProjects: [
    { title: "Small project", summary: "One sentence about it.", tech: "Python · Pandas", link: "https://github.com/Piyush-Barde" },
    { title: "Another small project", summary: "One sentence about it.", tech: "React · CSS", link: "" },
  ],

  /* ---- Achievements: hidden while empty.
     Example: { title: "1st Prize, Hackathon", text: "One line.", badge: "Winner", image: "./photo/award.jpg", link: "" } */
  achievements: [],

  /* ---- Contact section ---- */
  contact: {
    title: ["Let’s make", "something useful."], // each item is one line
    note: "Have an opportunity or just want to say hello?",
  },
};