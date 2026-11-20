import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { Cv, Language } from '../../data/models';
import { Card } from 'primeng/card';
import { PsMainImage } from '../ps-main-image/ps-main-image';
import { PsMainSummary } from '../ps-main-summary/ps-main-summary';
import { PsMainTechnology } from '../ps-main-technology/ps-main-technology';
import { PsMainStepper } from '../ps-main-stepper/ps-main-stepper';
import { PsMainEducation } from '../ps-main-education/ps-main-education';
import { PsMainCourses } from '../ps-main-courses/ps-main-courses';
import { PsMainReferences } from '../ps-main-references/ps-main-references';
import { PsMainDownload } from '../ps-main-download/ps-main-download';
import { PsMainHobbies } from '../ps-main-hobbies/ps-main-hobbies';
import { PsMainLanguages } from '../ps-main-languages/ps-main-languages';
import { PsMainIcons } from '../ps-main-icons/ps-main-icons';
import { applySeo } from '../../seo';
import cvData from '../../data/data.json';

/** Whole years since the earliest start year found in the experience dates */
function yearsOfExperience(cv: Cv, now = new Date()): number {
  const starts = cv.experience
    .map((e) => parseInt((e.date.match(/\d{4}/) ?? [''])[0], 10))
    .filter((y) => !Number.isNaN(y));
  return starts.length ? now.getFullYear() - Math.min(...starts) : 0;
}

@Component({
  selector: 'ps-main',
  imports: [Card, PsMainImage, PsMainSummary, PsMainTechnology, PsMainEducation, PsMainStepper, PsMainCourses, PsMainReferences, PsMainDownload, PsMainHobbies, PsMainLanguages, PsMainIcons],
  templateUrl: './ps-main.html',
  styleUrl: './ps-main.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsMain {
  protected readonly model = signal<Cv>(cvData as Cv);
  protected readonly footerBadges = signal<number>(1);
  protected readonly title = signal<string>('Curriculum Vitae');
  protected readonly certificates = computed<string[]>(() => this.model().certificates);
  protected readonly courses = computed<string[]>(() => this.model().courses);
  protected readonly languages = computed<Language[]>(() => this.model().languages);
  protected readonly passions = computed<string[]>(() => this.model().passions);
  protected readonly role = computed<string>(() => this.model().experience[0]?.position ?? '');
  protected readonly years = computed<number>(() => yearsOfExperience(this.model()));
  /** Summary with the "{years}" token filled in */
  protected readonly summary = computed<string>(() =>
    this.model().summary.replace('{years}', String(this.years())),
  );

  constructor() {
    applySeo(this.model(), this.years());
  }
}
