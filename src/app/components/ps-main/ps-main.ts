import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { Cv } from '../../data/models';
import { Card } from 'primeng/card';
import { PsMainImage } from '../ps-main-image/ps-main-image';
import cvData from '../../data/data.json';

@Component({
  selector: 'ps-main',
  imports: [Card, PsMainImage],
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
  protected readonly languages = computed<string[]>(() => this.model().languages);
  protected readonly passions = computed<string[]>(() => this.model().passions);
}
