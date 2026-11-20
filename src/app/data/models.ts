export class Project {
  name: string | null;
  displayName: string | null;
  description: string[];
  tasks: string[];
  technology: string | null;

  constructor() {
    this.name = null;
    this.displayName = null;
    this.description = [];
    this.tasks = [];
    this.technology = null;
 }
}

export class Experience {
  company: string;
  icon: number;
  seniority: string;
  date: string;
  position: string;
  projects: Project[];

  constructor() {
    this.company = "";
    this.icon = 0;
    this.seniority = "";
    this.date = "";
    this.position = "";
    this.projects = [];
  }
}

export class Cv {
  summary: string;
  experience: Experience[];
  certificates: string[];
  courses: string[];
  languages: Language[];
  passions: string[];
  technologies: Technology[];
  skillGroups: SkillGroup[];
  references: Reference[];
  location: string;
  workMode: string;
  /** Public site URL (e.g. https://example.com) - used for absolute social-preview links. */
  siteUrl: string;

  constructor() {
    this.summary = "";
    this.experience = [];
    this.certificates = [];
    this.courses = [];
    this.languages = [];
    this.passions = [];
    this.technologies = [];
    this.skillGroups = [];
    this.references = [];
    this.location = "";
    this.workMode = "";
    this.siteUrl = "";
  }
}

export interface Technology {
  name: string;
  category: string;
  /** File name in public/icons */
  icon?: string;
  /** PrimeIcons class used when there is no icon file, e.g. "pi-cloud" */
  pi?: string;
  /** Colour for the PrimeIcons fallback */
  color?: string;
  /** Shown in the large "core" row */
  core?: boolean;
}

export interface Language {
  name: string,
  level: string,
  icon: string
}

/** Text-only skill group, e.g. "Practices & Patterns" */
export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Reference {
  /** Short name shown in the list */
  name: string;
  /** Full name and role, e.g. "Jane Doe, Head of Engineering at X" */
  author: string;
  /** Paragraphs */
  text: string[];
}
