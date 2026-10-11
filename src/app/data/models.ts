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

  constructor() {
    this.summary = "";
    this.experience = [];
    this.certificates = [];
    this.courses = [];
    this.languages = [];
    this.passions = [];
  }
}

export interface Language {
  name: string,
  level: string,
  icon: string
}
