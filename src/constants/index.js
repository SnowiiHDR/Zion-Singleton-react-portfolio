import cover1 from "../assets/cover.png";
import echo from "../assets/echoace.png";
import angel from "../assets/angel.png";
import control from "../assets/control.png";



export const HERO_CONTENT = `I am a junior at Cornell University studying Operations Research and Computer Science.`;

export const ABOUT_TEXT = `I am a problem solver with skills in functional, object-oriented, and low-level programming languages. I also have foundations in optimization, and discrete math. I also have a passion for game development as I strive to create fun, imaginative games. Since I was very young I have loved learning about electronics, and tinkering with various computer systems and devices!

I thrive in collaborative environments and enjoy problem-solving with diverse teams.

Some of my interests include playing video games and social deduction games. I also enjoy thrifting, hiking, and cardistry!`

export const EXPERIENCES = [
  
    {
    year: "June 2025 - Present",
    role: "Software Engineering Intern",
    company: "Paramount Global (Skydance)",
    description: `Over the summer, I was able to work as a software engineering intern with the Paramount CBS Streaming team. 
    Throughout the experience, I learned various cloud computing technologies within AWS as well as Kubernetes. I have been granted an extension at
    the company until October. I am currently working on an internal structure to be used by other members on my team.
`,
    technologies: ["AWS {S3, EC2, IAM, Medialive}", "Rust", "Kubernetes", "Docker", "Terraform"],
  },
  {
    year: "April 2024 - Present",
    role: "Programming Lead, designer, and Events Director",
    company: "Development in Games Association @ Cornell",
    description: `I am now the current programming lead for Development in Game Association Studios. This means I lead the development of architecture and programming desgin in our now work-in-progress game.
    In years past, I coordinated and managed all student events including trips and activities hosted by the DGA. I also enhanced my artistic and technical skills by working with the promotion and communications teams. I helped 
develop a game using Unity and C# as part of the project team. (one-year development timeline)
We had weekly meetings to discuss progress, project scope, and game direction.
`,
    technologies: ["C#", "Unity"],
  },
  {
    year: "January 2025 - May 2025",
    role: "Mathematical Foundations of Computing TA (CS 2800)",
    company: "Cornell Bowers CIS",
    description: `I deliver course content and practice to students by facilitating weekly recitation sessions, clarifying complex concepts such as logic, proofs, relations, graph theory and probability for 40+ students.
I also grade assignments and exams, providing timely, constructive feedback on problem-solving approaches, ensuring consistency and fairness in evaluation.
Holding office hours to offer small group assistance, helping students understand challenging material, improve mathematical skills, and develop effective study strategies.
I also assist students in course forums.
`,
    technologies: ["Math", "Teaching"],
  },
  {
    year: "Summer 2024",
    role: "Member/Intern",
    company: "CSMore @ Cornell",
    description: `I acquired proficiency in basic computer tools such as SSH and Git. I also began studies in Discrete Structures, Data Structures, and Computer System Organization (Hardware). 
I got familiar with OCaml and C. I learned functions in both languages.
`,
    technologies: ["Java", "C", "OCaml"],
  },
  {
    year: "August 2023 - May 2025",
    role: "Member",
    company: "Ascend | Bowers CIS",
    description: `I was a selected participant in a competitive two-year exploratory program aimed at facilitating the transition of incoming freshmen into academia and tech careers.
I am working with a project team consisting of students and industry associates to create a program capable of helping people find jobs.
`,
    technologies: ["Python", "React", "Node.js"],
  },
];

export const PROJECTS = [
  {
    title: "Deadalus",
    type: "embed",
    description: " Tower Defense Survival Horror game. Player’s popular choice of over 400 votes at GDIAC showcase 2025.",
    technologies: ["Game Design", "Java"],
  },
      {
    title: "Raven",
    image: angel,
    description: "AI and computer vision wardrobe mobile app to help enthusiasts manage their clothing.",
    technologies: ["Mobile App","AI", "Dart"],
  },
    {
    title: "GameCaml",
    image: control,
    description: "Mathematical Foundations of Computing TA (CS 2800)",
    technologies: ["Game Design","Game Library", "OCaml"],
  },
      {
    title: "EchoAce",
    image: echo,
    description: "An AI-focused web app specializing in providing users feedback to excel in various job interviews.",
    technologies: ["AI","Web Development", "Frontend", ],
  },

];

export const CONTACT = {
  email: "zscsingleton@gmail.com",
  resume: "Resume",
};
