import { Project, Skill, Experience } from './types';

export const ABOUT_TEXT = `
Jag är en passionerad Full Stack-utvecklare som tar examen 2025. Jag specialiserar mig på att bygga exceptionella digitala upplevelser som är snabba, tillgängliga och visuellt tilltalande. Med en stark grund i React, TypeScript och modern backend-teknik älskar jag att lösa komplexa problem och förverkliga idéer.
`;

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Min Portfolio",
    description: "Denna webbplats! En modern, responsiv portfolio byggd med React, TypeScript och Tailwind CSS. Inkluderar en AI-assistent integrerad med Google Gemini API som svarar på frågor om min erfarenhet.",
    tags: ["React", "TypeScript", "Gemini API", "Tailwind CSS"],
    image: "https://picsum.photos/800/600?random=10",
    demoLink: "#",
    repoLink: "https://github.com/andys19a/portfolio"
  },
  {
    id: 2,
    title: "EcoTrack Mobilapp",
    description: "En PWA som hjälper användare att spåra sitt koldioxidavtryck. Funktioner inkluderar spelifiering, social delning och resursspårning.",
    tags: ["React Native", "Firebase", "Redux", "Node.js"],
    image: "https://picsum.photos/800/600?random=2",
    demoLink: "#",
    repoLink: "https://github.com/andys19a/ecotrack"
  },
  {
    id: 3,
    title: "AI Analyspanel",
    description: "En instrumentpanel för datavisualisering i realtid som drivs av AI-insikter. Användare kan ladda upp dataset och få automatiserade sammanfattningar.",
    tags: ["React", "Recharts", "Node.js", "PostgreSQL"],
    image: "https://picsum.photos/800/600?random=1",
    demoLink: "#",
    repoLink: "https://github.com/andys19a/ai-dashboard"
  }
];

// Keeping skills data for AI Context even if UI component is removed
export const SKILLS: Skill[] = [
  { name: "React & React Native", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "PostgreSQL", level: 80, category: "Backend" },
  { name: "Google Gemini API", level: 88, category: "Tools" },
  { name: "Git & CI/CD", level: 85, category: "Tools" },
  { name: "Figma", level: 75, category: "Design" },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Full Stack Utvecklare (Praktik)",
    company: "InnovateTech AB",
    period: "Jan 2024 - Nuvarande",
    description: "Utvecklar och underhåller webbapplikationer med React och Node.js. Samarbetar med teamet för att designa och leverera nya funktioner."
  },
  {
    id: 2,
    role: "Frontend Utvecklare (Frilans)",
    company: "Eget Företag",
    period: "2023 - 2024",
    description: "Byggde responsiva webbplatser för lokala företag med React och Tailwind CSS. Hanterade kundkrav och projektleveranser."
  }
];

export const RESUME_CONTEXT = `
Namn: André Alm
Roll: Full Stack Utvecklare (Examen 2025)
Sammanfattning: ${ABOUT_TEXT}
Färdigheter: ${SKILLS.map(s => s.name).join(', ')}
Erfarenhet: ${EXPERIENCE.map(e => `${e.role} på ${e.company} (${e.period})`).join('; ')}
Projekt: ${PROJECTS.map(p => `${p.title} (${p.tags.join(', ')}) - ${p.description}`).join('; ')}
Kontakt: andre.alm@example.com
Github: https://github.com/andys19a
LinkedIn: linkedin.com/in/andrealm
Plats: Stockholm, Sverige
`;