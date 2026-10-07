import { Component, input, signal } from '@angular/core';
import { Project } from '../../data/models';
import { PsMainStepperItem } from '../ps-main-stepper-item/ps-main-stepper-item';
import { Stepper, StepPanel, Step, StepPanels, StepList } from 'primeng/stepper';
import { ButtonDirective } from 'primeng/button';

@Component({
  imports: [ Stepper, StepPanel, Step, StepPanels, StepList , ButtonDirective, PsMainStepperItem ],
  selector: 'ps-main-stepper-list',
  styleUrl: './ps-main-stepper-list.scss',
  templateUrl: './ps-main-stepper-list.html',
})
export class PsMainStepperList {
  public data = input.required<Project[]>();
  public position = input.required<string>();
  public icon = input.required<number>();
  protected activeStep = signal<number>(1);
}
