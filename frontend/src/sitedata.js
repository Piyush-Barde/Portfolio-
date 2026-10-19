/*
  ================================================================
   YOUR SITE CONTENT: this is the only file you need to edit.
   Change the text, links, photo and projects below, save, done.
   Any section whose list is empty ( [] ) is hidden automatically,
   and the section numbers update by themselves.
  ================================================================
*/

export const site = {
  /* ---- You ---- */
  firstName: "Piyush",
  lastName: "Barde",
  initials: "PB",
  intro:
    "Building useful technology with an entrepreneurial mindset.",
  availability: "Open to opportunities",
  caption: "BUILD · LEARN · IMPROVE",

  animations: true, // false = calm, static page

  photo: "./photo/Piyush_Barde-removebg.png",

  /* ---- Links (leave "" to hide) ---- */
  email: "work.piyushbarde01@gmail.com",
  github: "https://github.com/Piyush-Barde",
  linkedin: "https://www.linkedin.com/in/piyush-barde",
  resume: "/Piyush Barde Resume.pdf", // put resume.pdf in the public/ folder

  ticker: [
    "BASED IN INDIA",
    "PYTHON · REACT · MACHINE LEARNING",
    "AVAILABLE FOR OPPORTUNITIES",
  ],

  /* ---- Numbers under the hero (numbers count up, text is shown as is) ---- */
  stats: [
    { value: 4, suffix: "", label: "Projects built" },
    { value: 2, suffix: "", label: "Internships" },
    { value: "2027", suffix: "", label: "Graduating" },
  ],

  featured: null,

  /* ---- About ---- */
  about: {
    note: "Curious by nature. Focused on impact.",
    text: "I’m a final-year AI and Data Science engineering student who enjoys the full path from data to product: training and evaluating machine learning models, then wrapping them in real web apps with React and backend APIs. I’ve interned as an AI developer and a full stack developer, led the tech side of my college E-Cell, and I’m looking for opportunities where I can keep building things people actually use.",
    focus: [
      "Building machine learning projects from data to deployment",
      "Full stack development with React, FastAPI and Spring Boot",
      "Turning real-world problems into practical software",
    ],
  },

  /* ---- Education ---- */
      education: [
    {
      school: "Datta Meghe College of Engineering",
      place: "Navi Mumbai, Maharashtra",
      degree: "Bachelor of Engineering in Artificial Intelligence & Data Science",
      dates: "2023 – 2027",
      grade: "7.5 CGPA",
      // TODO: replace with the subjects you actually studied / are proud of
      courses: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Probability and Statistics",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Natural Language Processing",
        "Data Visualization",
        "Cloud Computing",
      ],
    },

    // compact: true = shown as one slim row in the "Schooling" card.
    // Marks are hidden while grade is "", so type one in only if you ever want it shown.
    { compact: true, school: "Shri Shivaji Kanishth Vidyalaya", place: "Jalna", degree: "Class XII · MSBSHSE", dates: "2023", grade: "" },
    { compact: true, school: "Podar International School", place: "Chhatrapati Sambhajinagar", degree: "Class X · ICSE", dates: "2021", grade: "" },
  ],  

  /* ---- Experience (newest first) ---- */
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Sponzo Pvt. Ltd.",
      dates: "Dec 2025 – Jan 2026 · Remote",
      current: false,
      tags: ["React", "REST APIs", "Render"],
      bullets: [
        "Developed and deployed the company’s production website with a responsive experience across desktop and mobile.",
        "Integrated backend APIs, improved UI responsiveness and managed deployment on Render.",
      ],
      impact: "", // add one line with a result/number if you have it
    },
    {
      role: "AI Developer Intern",
      company: "Krawlnet Technologies",
      dates: "June 2025 – July 2025 · On-site",
      current: false,
      tags: ["Python", "NLP", "BERT", "Hugging Face"],
      bullets: [
        "Built data preprocessing pipelines for large text datasets to support NLP model training and evaluation.",
        "Fine-tuned BERT-based transformer models with Hugging Face through hyperparameter optimisation and experiments.",
        "Evaluated text classifiers using accuracy, precision, recall and F1-score.",
      ],
      impact: "",
    },
  ],

  /* ---- Skills: each group becomes one tab ---- */
  skills: [
    { name: "Languages", items: ["Python", "SQL", "R", "Java", "C", "JavaScript"] },
    {
      name: "AI & ML",
      items: [
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "Scikit-learn",
        "Transformers (Hugging Face)",
        "XGBoost",
      ],
    },
    { name: "Data Science", items: ["Pandas", "NumPy", "Power BI", "SPSS"] },
    {
      name: "Web & Tools",
      items: [
        "React",
        "HTML",
        "CSS",
        "Bootstrap",
        "MySQL",
        "Git & GitHub",
        "Google Cloud Platform",
        "Figma",
      ],
    },
  ],

  /* ---- Main projects ----
     code / demo: add your repo and live links (leave "" to hide). */
  projects: [
    {
       title: "VoxSense AI",
        type: "NLP / SPEECH ANALYTICS",
       status: "Completed",
       summary: "A multimodal AI communication coach that evaluates spoken language, vocal delivery, and facial-expression cues during live presentations.",
       results: [
        "Integrated OpenAI Whisper for speech-to-text transcription and NLP-based speech analysis.",
        "Analyzed filler words, vocabulary diversity, speaking duration, pitch variation, pauses, and vocal energy.",
        "Used OpenCV and DeepFace to extract facial-expression cues and generate structured presentation feedback."
        ],
       tags: [
        "Python","NLP", "OpenAI Whisper", "OpenCV","DeepFace","Librosa","TensorFlow"
        ],
      meta: "Oct 2026",
      code: "",
      demo: "",
      image: "",
      diagram: { label: "MULTIMODAL AI PIPELINE", steps: [ "Live Recording","Speech Transcription","NLP & Voice Analysis","Facial Analysis","Feedback"] }, 
    },
    {
      title: "Campus Signal",
      type: "FULL STACK WEB APP",
      status: "",
      summary: "A campus grievance platform for reporting and tracking issues.",
      results: [
        "Structured issue reporting with automated tracking workflows.",
        "Secure database management with PostgreSQL.",
      ],
      tags: ["React", "Spring Boot", "Java", "PostgreSQL", "REST APIs"],
      meta: "Jan 2026 – May 2026",
      code: "",
      demo: "",
      image: "",
      diagram: { label: "WEB APP", steps: ["React UI", "REST API", "Spring Boot", "PostgreSQL"], footer: "JAVA" },
    },
    {
      title: "Obsidian Watch",
      type: "AI / FRAUD DETECTION",
      status: "",
      summary: "A financial fraud detection system that flags suspicious transactions.",
      results: [
        "Feature engineering plus XGBoost to spot suspicious transaction patterns.",
        "Designed to reduce false positives.",
      ],
      tags: ["Python", "Scikit-learn", "XGBoost"],
      meta: "Aug 2025 – Nov 2025",
      code: "",
      demo: "",
      image: "",
      diagram: { label: "ML PIPELINE", steps: ["Transactions", "Features", "XGBoost", "Fraud flags"], footer: "PYTHON" },
    },
    {
      title: "CodeLens",
      type: "AI DEVELOPER TOOL",
      status: "",
      summary: "An AI platform that explains source code, visualises execution flow and helps debug errors.",
      results: [
        "Explains code and visualises how it runs using the Gemini API.",
        "Persistent authentication and snippet management.",
      ],
      tags: ["React", "FastAPI", "Gemini API"],
      meta: "Feb 2025 – Mar 2025",
      code: "",
      demo: "",
      image: "",
      diagram: { label: "AI APP", steps: ["React UI", "FastAPI", "Gemini API", "Explanation"], footer: "FASTAPI" },
    },
    {
      title: "Heart Disease Prediction",
      type: "MACHINE LEARNING",
      status: "",
      summary: "Supervised ML models that predict heart disease risk from clinical patient data.",
      results: [
        "Preprocessing, feature engineering and metric-based evaluation of several models.",
      ],
      tags: ["Python", "Scikit-learn", "React"],
      meta: "Jan 2025 – May 2025",
      code: "",
      demo: "",
      image: "",
      diagram: { label: "ML PIPELINE", steps: ["Patient data", "Preprocess", "Model", "Risk score"], footer: "SCIKIT-LEARN" },
    },
  ],

  moreProjects: [],

  /* ---- Achievements ---- */
  achievements: [
    {
      title: "Hackathon Finalist, The Great Ninja Hack",
      text: "Reached the Top 50 out of 300+ competing teams.",
      badge: "Top 50 / 300+",
      image: "",
      link: "",
    },
    {
      title: "Technical Head, E-Cell DMCE",
      text: "Oversaw technical operations and led full-stack development of the official E-Cell and ENSPIRE web apps.",
      badge: "May 2025 – Jun 2026",
      image: "",
      link: "",
    },
    {
      title: "Campus Ambassador, IIT Bombay E-Cell",
      text: "Promoted entrepreneurship initiatives and drove outreach across campus.",
      badge: "May 2025 – Jan 2026",
      image: "",
      link: "",
    },
    {
      title: "NPTEL: Python for Data Science",
      text: "Certification from IIT Madras, score 65.",
      badge: "Certification",
      image: "",
      link: "",
    },
  ],

  contact: {
    title: ["Let’s make", "something useful."],
    note: "Have an opportunity or just want to say hello?",
  },
};