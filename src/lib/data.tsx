import { Github, Twitter, Figma } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoCypress from '/public/images/logos/icon-cypress.svg';
import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
import LogoStorybook from '/public/images/logos/icon-storybook.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import ProjectMedium from '/public/images/project-medium.png';
import ProjectLexiGen from '/public/images/project-lexigen.jpg';
import ProjectBubbleGame from '/public/images/project-bubble.png';

import {
  ProjectDetails,
  TechDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/hkv24/',
  GITHUB_REPO: 'https://github.com/hkv24/portfolio-website',
  TWITTER: 'https://twitter.com/hkverma24'
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/hkv24',
  },
  {
    icon: Twitter,
    url: 'https://twitter.com/hkverma24',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'Nest.js',
    logo: LogoNest,
    url: 'https://nestjs.com/',
  },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  {
    label: 'Cypress',
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: 'https://www.cypress.io/',
  },
  {
    label: 'Storybook',
    logo: LogoStorybook,
    url: 'https://storybook.js.org/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'LexiGen-AI',
    description: 'The project leverages the Gemini Flash 1.5 API to offer a robust suite of prompts and templates for users. This platform empowers individuals and businesses to generate high-quality content effortlessly, utilizing a variety of templates and smart prompts tailored to their needs. Sample Credentials -> { gmail: "test@gmail.com", password: 12345678}.',
    url: 'https://lexigen-ai.vercel.app/',
    previewImage: ProjectLexiGen,
    technologies: [
      'Next.js',
      'Typescript',
      'Tailwind',
      'Drizzle ORM',
      'Express.js',
      'PostgreSQL',
      'Shadcn',
      'Recoil State Management',
    ],
  },
  {
    name: 'Medium Clone',
    description:
      'This project, Medium, is a full-stack clone of medium.com, the popular blogging platform. It leverages the power of Cloudflare Workers for serverless deployment, ensuring cost efficiency and scalability.',
    url: 'https://medium-zeta-ashen.vercel.app/signin',
    previewImage: ProjectMedium,
    technologies: [
      'React',
      'Typescript',
      'Tailwindcss',
      'Material UI',
      'Cloudflare Woker',
      'Recoil State Management',
      'Hono.js',
      'PostgreSQL',
      'Prisma ORM',
    ],
  },
  {
    name: 'Bubble Game',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://hkv24.github.io/bubble-game/',
    previewImage: ProjectBubbleGame,
    technologies: [
      'Javascript',
      'CSS',
      'HTML',
    ]
  },
];
