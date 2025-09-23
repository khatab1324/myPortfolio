import { CommandType } from "./components/MyTerminal";

export default function processingInput(input: string): {
  content: string;
  type: CommandType;
} {
  input = input.trim().toLowerCase();
  switch (input) {
    case "help":
      return {
        content:
          "Available commands: help, about, skills, projects, contact, clear",
        type: CommandType.OUTPUT,
      };
    case "hello":
      return {
        content: "Hello! I am khattab ^_^",
        type: CommandType.OUTPUT,
      };
    case "about":
      return {
        content:
          "I am a passionate software developer with experience in building web applications using modern technologies.",
        type: CommandType.OUTPUT,
      };
    case "skills":
      return {
        content:
          "JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, SQL, HTML, CSS, Tailwind CSS, Git",
        type: CommandType.OUTPUT,
      };
    case "projects":
      return {
        content: `
<h2>Projects:</h2>
<ol>
  <li>
    <strong>LET’S VENT</strong> – Real-time chat app for seamless conversations<br>
    <strong>Tech Stack:</strong> Next.js, TypeScript, Socket.IO, Zod, Prisma, MySQL, Auth.js
  </li>
  <li>
    <strong>CINEMALIST</strong> – A project to explore and apply React, Docker, and Prisma concepts<br>
    <strong>Tech Stack:</strong> React, RTK Query, Redux, TypeScript, Docker, Prisma, Express.js, MySQL
  </li>
  <li>
    <strong>SMALLSHOPIFY</strong> – A platform where businesses can set up online stores<br>
    <strong>Tech Stack:</strong> Node.js, Express.js, EJS, MongoDB, Passport
  </li>
  <li>
    <strong>TRACKIT</strong> – A social platform for sharing moments, connecting with friends, and building memories<br>
    <strong>Tech Stack:</strong> React Native, TypeScript, Redux, Fastify, JWT, Drizzle, PostgreSQL, Socket.IO, Redis
  </li>
</ol>
`,
        type: CommandType.OUTPUT,
      };
    default:
      return {
        content: `Command not found: ${input}. Type 'help' to see available commands.`,
        type: CommandType.ERROR,
      };
  }
}
