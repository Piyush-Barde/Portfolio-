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
  linkedin: "www.linkedin.com/in/piyush-barde-b054a8165",
  resume: "/Piyush Barde Resume.pdf", // put resume.pdf in the public/ folder

  ticker: [
    "MUMBAI, MAHARASHTRA",
    "PYTHON · AI · MACHINE LEARNING · DATA SCIENCE",
    "AVAILABLE FOR OPPORTUNITIES",
  ],

  /* ---- Numbers under the hero (numbers count up, text is shown as is) ---- */
  stats: [
    { value: 6, suffix: "", label: "Projects built" },
    { value: 2, suffix: "", label: "Internships" },
    { value: "2027", suffix: "", label: "Graduating" },
  ],

  featured: null,

  /* ---- About ---- */
  about: {
    note: "Curious by nature. Focused on impact.",
    text: "I’m an AI & Data Science engineering student interested in building technology that solves real problems. I enjoy exploring how machine learning and data can become useful products, and I bring an entrepreneurial mindset to turning ideas into practical solutions. I’m continuing to grow my skills through coursework and hands-on projects across AI and software development. Outside tech, I’m passionate about aviation, bike and also enjoy cooking.",
    //and working toward becoming a pilot. I also enjoy cooking and bikes.",
    focus: [
      "Building machine-learning projects from data to deployment",
      "Exploring how AI and data can solve practical problems",
      "Bringing an entrepreneurial mindset to technology and product ideas",
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
    { compact: true, school: "Shri Shivaji Kanishth Vidyalaya", place: "Jalna", degree: "Class XII · MSBSHSE", dates: "2023", grade: "79%" },
    { compact: true, school: "Podar International School", place: "Chhatrapati Sambhajinagar", degree: "Class X · ICSE", dates: "2021", grade: "83%" },
  ],  

  /* ---- Experience (newest first) ---- */
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Sponzo Pvt. Ltd.",
      dates: "Dec 2025 – Jan 2026 · Remote",
      current: false,
      tags: ["React", "REST APIs", "Render","Python"],
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
    { name: "Languages", items: ["Python", "SQL", "R", "C", "JavaScript"] },
    {
      name: "AI & ML",
      items: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "Scikit-learn",
        "Transformers (Hugging Face)",
        "XGBoost",
      ],
    },
    { name: "Data Science", items: ["Pandas", "NumPy","Seaborn","Matplotlib","Plotly","Streamlit","Power BI", "SPSS"] },
    {
      name: "Web & Tools",
      items: [
        "HTML",
        "CSS",
        "Bootstrap",
        "React",
        "MySQL",
        "Git",
        "GitHub",
        "Amazon Web Services",
        "Google Cloud Platform",
        "Figma",
        "Render"
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
      code: "https://github.com/Piyush-Barde/VoxSense-AI.git",
      demo: "",
      image: "",
      diagram: { label: "MULTIMODAL AI PIPELINE", steps: [ "Live Recording","Speech Transcription","NLP & Voice Analysis","Facial Analysis","Feedback"] }, 
    },
    {
      title: "CodeLens",
      type: "AI DEVELOPER TOOL",
      status: "Completed",
      summary: "An AI platform that explains source code, visualises execution flow and helps debug errors.",
      results: [
        "Explains code and visualises how it runs using the Gemini API.",
        "Persistent authentication and snippet management.",
      ],
      tags: ["React", "FastAPI", "Gemini API","Python"],
      meta: "Feb 2026 – Mar 2026",
      code: "https://github.com/Piyush-Barde/CodeLens.git",
      demo: "https://codelens-rze6.onrender.com",
      image: "",
      diagram: { label: "AI APP", steps: ["React UI", "FastAPI", "Gemini API", "Explanation"], footer: "FASTAPI" },
      
    },
    {
      title: "Campus Signal",
      type: "FULL STACK WEB APP",
      status: "Completed",
      summary: "A campus grievance platform for reporting and tracking issues.",
      results: [
        "Structured issue reporting with automated tracking workflows.",
        "Secure database management with PostgreSQL.",],
      tags: ["React", "Spring Boot", "Java", "PostgreSQL", "REST APIs"],
      meta: "Jan 2026 – May 2026",
      code: "https://github.com/omk5050/campus-transparency",
      demo: "https://campus-transparency.vercel.app/",
      image: "",
      diagram: { label: "WEB APP", steps: ["React UI", "REST API", "Spring Boot", "PostgreSQL"], footer: "JAVA" },
    },
    {
      title: "Obsidian Watch",
      type: "AI / FRAUD DETECTION",
      status: "Completed",
      summary: "A financial fraud detection system that flags suspicious transactions.",
      results: [
        "Feature engineering plus XGBoost to spot suspicious transaction patterns.",
        "Designed to reduce false positives.",
      ],
      tags: ["Python", "Scikit-learn", "XGBoost","React", "FastAPI"],
      meta: "Aug 2025 – Nov 2025",
      code: "https://github.com/Piyush-Barde/Obsidian-Watch---AI-Powered-Fraud-Detection.git",
      demo: "",
      image: "",
      diagram: { label: "ML PIPELINE", steps: ["Transactions", "Features", "XGBoost", "Fraud flags"], footer: "PYTHON" },
    },
    
    {
      title: "Heart Disease Prediction",
      type: "MACHINE LEARNING",
      status: "Completed",
      summary: "Supervised ML models that predict heart disease risk from clinical patient data.",
      results: [
        "Preprocessing, feature engineering and metric-based evaluation of several models.",
      ],
      tags: ["Python", "Scikit-learn","Supervised Learning", "React", "Flask"],
      meta: "Jan 2025 – May 2025",
      code: "https://github.com/Piyush-Barde/Heart-Disease-Prediction-.git",
      demo: "",
      image: "",
      diagram: { label: "ML PIPELINE", steps: ["Patient data", "Preprocess", "Model", "Risk score"], footer: "SCIKIT-LEARN" },
    },
    {
      title: "Hospisync - Hospital Management System",
      type: "WEB APPLICATION",
      status: "Completed",
      summary: "A hospital management web app built with PHP and MySQL for patient registration, appointments, staff and doctor workflows, room management, and pharmacy inventory.",
      results: [
        "Role-based workflows for administrators, doctors, and staff to manage hospital operations.",
        "Modules for patient appointments, hospital rooms, and pharmacy inventory management and seamless data exchange between modules.",
      ],
      tags: ["HTML" , "CSS", "JavaScript", "PHP", "MySQL"],
      meta: "July 2024 – Nov 2024",
      code: "https://github.com/Piyush-Barde/Hospital-Management-System-.git",
      demo: "",
      image: "",
      diagram: { label: "HOSPITAL WORKFLOW", steps: ["Patient", "Appointment", "Care team", "Hospital services"], footer: "PHP · MYSQL" },
    },
  ],

  moreProjects: [],

  /* ---- Achievements ---- */
  achievements: [
    {
    title: "Technical Head, E-Cell DMCE",
    text: "Led technical operations and development for the official E-Cell and ENSPIRE web apps as Technical Head (May 2025 – June 2026).",
    badge: "Leadership",
    image: "",
    certificate: "./photo/TECH HEAD.png",
    link: "",
      },

    {
      title: "Campus Ambassador,\nE\u2011Cell IIT Bombay",
      text: "Promoted entrepreneurship initiatives and drove outreach across campus. (May 2025 – Jan 2026)",
      badge: "Leadership",
      image: "./photo/CA.png",
      link: "",
    },
    {
      title: "NEC,\nE\u2011Cell IIT Bombay",
      text: "Completed entrepreneurship challenges by E-Cell, IIT Bombay, promoting entrepreneurial awareness on and beyond campus. Ranked 39th nationally.(May 2025 – Jan 2026)",
      badge: "Leadership",
      image: "./photo/NEC.png",
      link: "",
    },
    {
      title: "Learn Generative AI",
      text: "Completed a vocational Generative AI course offered by EduBridge with Capgemini.",
      badge: "Capgemini · 2025",
      image: "./photo/Capgemini.jpeg",
      link: "",
    },
    {
      title: "ML Research Paper Publication",
      text: "Published a paper on machine-learning-based heart disease prediction in IRJMETS, April 2025.",
      badge: "Publication",
      image: "./photo/Research Paper.jpg",
      link: "",
    },
    {
      title: "Hackathon Finalist, The Great Ninja Hack",
      text: "Reached the Top 50 out of 300+ competing teams.",
      badge: "Top 50 / 300+",
      image: "./photo/ESPADA.jpg",
      link: "",
    },
    {
      title: "NPTEL: Python for Data Science",
      text: "Certification from IIT Madras, score 70%.",
      badge: "Certification",
      image: "./photo/NPTEL_Python.png",
      link: "",
    },
    {
      title: "NPTEL: Cloud Computing",
      text: "Certification from IIT Kharagpur, score 65%.",
      badge: "Certification",
      image: "./photo/NPTEL_CLOUD.png",
      link: "",
    },
  ],

  contact: {
    title: ["Let’s make", "something useful."],
    note: "Have an opportunity or just want to say hello?",
     endpoint: "https://script.google.com/macros/s/AKfycbzPNhXdVVp7jJxwMbwlonNWbbtHUoGH_PWLBOM7DiuO2tbRV9l1Gz8-_uadV1iDipMB/exec",
  },
};