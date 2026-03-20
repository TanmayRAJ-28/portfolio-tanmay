export const personalInfo = {
  name: "Tanmay Raj",
  firstName: "Tanmay",
  title: "B.Tech IT Student & Developer",
  roles: ["Python Developer", "Machine Learning Enthusiast", "Data Science Explorer", "Web Developer", "Problem Solver"],
  bio: "I'm a 3rd-year B.Tech Information Technology student at KIIT University, Bhubaneswar, passionate about building intelligent systems and data-driven solutions. I love turning complex problems into clean, working code — from computer vision to machine learning pipelines.",
  bio2: "When I'm not coding, I'm exploring the latest in AI/ML, contributing to tech events, or diving deep into data to uncover patterns that tell a story. I'm currently open to internships, collaborations, and exciting opportunities.",
  email: "rajtanmay209@gmail.com",
  phone: "+91 7482870393",
  location: "Bhubaneswar, Odisha, India",
  linkedin: "https://www.linkedin.com/in/tanmay-raj-0b2459331",
  github: "https://github.com/TanmayRAJ-28",
  resumeLink: "https://drive.google.com/file/d/1XPsqmu5iSms_yLWRsZpLUiwFyuT2KqO2/view",
  photo: "/src/assets/profile.jpg",
  openToWork: true,
  statusBadge: "Open to Internships & Opportunities",
};

export const stats = [
  { label: "Projects Built", value: 3, suffix: "+" },
  { label: "Technologies", value: 12, suffix: "+" },
];

export const skills = {
  "Programming":       [{ name:"Python",     icon:"SiPython",            color:"#3776AB", level:"Expert"       },
                        { name:"Java",        icon:"SiJava",              color:"#007396", level:"Intermediate" },
                        { name:"JavaScript",  icon:"SiJavascript",        color:"#F7DF1E", level:"Intermediate" },
                        { name:"SQL",         icon:"SiMysql",             color:"#4479A1", level:"Intermediate" }],
  "Data Science & ML": [{ name:"Pandas",      icon:"SiPandas",            color:"#150458", level:"Intermediate" },
                        { name:"NumPy",       icon:"SiNumpy",             color:"#013243", level:"Intermediate" },
                        { name:"Scikit-Learn",icon:"SiScikitlearn",       color:"#F7931E", level:"Intermediate" },
                        { name:"OpenCV",      icon:"SiOpencv",            color:"#5C3EE8", level:"Intermediate" }],
  "Data Viz":          [{ name:"Power BI",    icon:"SiPowerbi",           color:"#00d4ff", level:"Intermediate" },
                        { name:"Excel",       icon:"SiMicrosoftexcel",    color:"#217346", level:"Expert"       }],
  "Web Dev":           [{ name:"HTML5",       icon:"SiHtml5",             color:"#E34F26", level:"Intermediate" },
                        { name:"CSS3",        icon:"SiCss3",              color:"#1572B6", level:"Intermediate" },
                        { name:"React",       icon:"SiReact",             color:"#61DAFB", level:"Intermediate" }],
  "Database":          [{ name:"MySQL",       icon:"SiMysql",             color:"#4479A1", level:"Intermediate" }],
  "Tools":             [{ name:"Git",         icon:"SiGit",               color:"#F05032", level:"Intermediate" },
                        { name:"GitHub",      icon:"SiGithub",            color:"#ffffff", level:"Intermediate" },
                        { name:"VS Code",     icon:"SiVisualstudiocode",  color:"#007ACC", level:"Expert"       }],
};

export const projects = [
  { id:1, title:"Self-Learning Hand Gesture Recognition", shortDesc:"Real-time gesture detection using computer vision & dynamic learning.", description:"Developed a real-time computer vision system using Python and OpenCV that detects and recognizes hand gestures from webcam input. Features a unique self-learning mechanism to dynamically register new gestures without retraining.", tech:["Python","OpenCV","Computer Vision","Machine Learning"], github:"https://github.com/TanmayRAJ-28/Hand-Gesture-Recognisation", live:null, featured:true, category:"AI / Computer Vision" },
  { id:2, title:"AI-Based Spam Detection System", shortDesc:"NLP-powered SMS classifier using Naive Bayes & TF-IDF.", description:"Built a machine learning pipeline to classify SMS messages as spam or legitimate. Applied full NLP preprocessing — tokenization, stopword removal, TF-IDF vectorization — feeding into a Naive Bayes classifier.", tech:["Python","Scikit-Learn","NLP","Pandas"], github:"https://github.com/TanmayRAJ-28/spam-detection", live:null, featured:false, category:"Machine Learning / NLP" },
  { id:3, title:"Amazon Sales Analytics Dashboard", shortDesc:"Interactive Power BI dashboard revealing revenue trends & product insights.", description:"Analyzed Amazon sales dataset to uncover revenue trends and product performance. Cleaned raw data in Excel, then built a fully interactive Power BI dashboard.", tech:["Power BI","Excel","Data Analysis"], github:"https://github.com/TanmayRAJ-28", live:null, featured:false, category:"Data Analytics" },
];

export const education = [
  {
    id: 1,
    level: "B.Tech (Current)",
    institution: "Kalinga Institute of Industrial Technology (KIIT)",
    degree: "B.Tech in Information Technology",
    board: "KIIT University",
    location: "Bhubaneswar, Odisha",
    year: "2023 – Expected 2027",
    cgpa: 8.2,
    percentage: null,
    description:
      "School of Computer Engineering | Focus on DSA, DBMS, OS, Networks, ML, AI, Big Data",
    color: "#00d4ff",
  },
  {
    id: 2,
    level: "Class XII",
    institution: "DAV Public School, Samastipur",
    degree: "Senior Secondary — Science",
    board: "CBSE",
    year: "2022",
    cgpa: null,
    percentage: 90,
    color: "#7b2fff",
  },
  {
    id: 3,
    level: "Class X",
    institution: "DAV Public School, Samastipur",
    degree: "Secondary School Certificate",
    board: "CBSE",
    year: "2020",
    cgpa: null,
    percentage: 96,
    color: "#7b2fff",
  },
];

export const interests = [
  { emoji:"🤖", label:"AI & ML" },
  { emoji:"📊", label:"Data Analytics" },
  { emoji:"💻", label:"Open Source" },
  { emoji:"☕", label:"Coffee & Coding" },
  { emoji:"🎮", label:"Gaming" },
  { emoji: "🌐", label: "Web Development" },
];

export const socialLinks = {
  github:   "https://github.com/TanmayRAJ-28",
  linkedin: "https://www.linkedin.com/in/tanmay-raj-0b2459331",
  email:    "rajtanmay209@gmail.com",
  phone:    "+91 7482870393",
};
