import { Component, input, computed } from '@angular/core';
import { Stepper, StepPanel, Step, StepItem } from 'primeng/stepper';
import { ButtonDirective } from 'primeng/button';
import { Cv, Experience } from '../../data/models';
import { PsMainStepperList } from '../ps-main-stepper-list/ps-main-stepper-list';

@Component({
  imports: [Stepper, StepPanel, Step, StepItem, ButtonDirective, PsMainStepperList],
  selector: 'ps-main-stepper',
  styleUrl: './ps-main-stepper.scss',
  templateUrl: './ps-main-stepper.html',
})
export class PsMainStepper {
  public readonly model = input.required<Cv>();
  protected readonly experience = computed<Experience[]>(() => this.model().experience);
  protected activeStep: number = 1;
}
