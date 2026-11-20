import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { Cv, Experience } from '../../data/models';
import { PsMainStepperList } from '../ps-main-stepper-list/ps-main-stepper-list';

/**
 * Experience timeline: one entry per company. All entries are rendered into the
 * HTML (so search engines, ATS parsers and print see everything); closed ones are hidden.
 */
@Component({
  imports: [PsMainStepperList],
  selector: 'ps-main-stepper',
  styleUrl: './ps-main-stepper.scss',
  templateUrl: './ps-main-stepper.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsMainStepper {
  public readonly model = input.required<Cv>();
  protected readonly experience = computed<Experience[]>(() => this.model().experience);

  /** Index of the open company, or -1 when all are closed */
  protected readonly open = signal<number>(0);

  protected toggle(i: number): void {
    this.open.update((current) => (current === i ? -1 : i));
  }
}
