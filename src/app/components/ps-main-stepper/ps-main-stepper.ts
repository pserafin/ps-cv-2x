import { Component, input, computed } from '@angular/core';
import { Stepper, StepPanel, StepPanels, StepList, Step, StepItem } from 'primeng/stepper';
import { ButtonDirective } from 'primeng/button';
import { Cv, Experience } from '../../data/models';

@Component({
  imports: [Stepper, StepPanel, StepPanels, StepList, Step, StepItem, ButtonDirective],
  selector: 'ps-main-stepper',
  styleUrl: './ps-main-stepper.scss',
  templateUrl: './ps-main-stepper.html',
})
export class PsMainStepper {
  public readonly model = input.required<Cv>();
  protected readonly experience = computed<Experience[]>(() => this.model().experience);
  protected activeStep: number = 1;
}
