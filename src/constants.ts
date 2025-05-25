export interface Skill {
  name: string;
  description: string;
}

export const skills: Skill[] = [
  {
    name: "JavaScript",
    description: "Proficient in modern JavaScript (ES6+) for front-end and back-end development.",
  },
  {
    name: "React",
    description: "Experience building dynamic and responsive user interfaces with React and its ecosystem (Redux, Router).",
  },
  {
    name: "Node.js",
    description: "Skilled in server-side development using Node.js and Express.js for building RESTful APIs.",
  },
  {
    name: "TypeScript",
    description: "Using TypeScript to enhance code quality and maintainability in large-scale applications.",
  },
  {
    name: "Tailwind CSS",
    description: "Efficiently styling web applications with the utility-first CSS framework Tailwind CSS.",
  },
  {
    name: "HTML & CSS",
    description: "Strong foundation in semantic HTML and modern CSS for creating accessible and well-structured web pages.",
  },
];

// You can add other constants here if needed for other parts of the application.
// For example:
// export const projects = [ ... ];
// export const certifications = [ ... ];
