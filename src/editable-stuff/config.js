// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ritik",
  middleName: "",
  lastName: "Gupta",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ritikgupta2109",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/profile.php?id=100014884395261",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/_ritik.gupta__/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ritik-gupta-a05459220/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/ritikgupta2109",
    },
  ],
};

// ABOUT SECTION

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/ritikgupta.jpg"),
  imageSize: 354,
  message:
    "My name is Ritik Gupta. I’m a graduate of 2023 from GLA University at Mathura, Uttar Pradesh with a degree of B.Tech in Computer Science Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: require("../editable-stuff/ritikgupta_resume.pdf"),
};


const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "ritikgupta2109", 
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 60 },
    { name: "SQL", value: 82 },
    { name: "Data Structures", value: 75 },
    { name: "C/C++", value: 50 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 75 },
    { name: "HTML/CSS", value: 85 },
    { name: "Java", value: 88 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Communication", value: 75 },
    { name: "Positivity", value: 85 },
    { name: "Adaptability", value: 78 },
    { name: "Problem Solving", value: 70 },
    { name: "Logical Reasoning", value: 80 },
    { name: "Competitive Programming", value: 85 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "ritikgupta2109@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
