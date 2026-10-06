import { Component } from '@angular/core';
import { Stepper, StepPanel, StepPanels, StepList, Step } from 'primeng/stepper';
import { Button } from 'primeng/button';

@Component({
  imports: [Stepper, StepPanel, StepPanels, StepList, Step],
  selector: 'ps-main-stepper',
  styleUrl: './ps-main-stepper.scss',
  templateUrl: './ps-main-stepper.html',
})
export class PsMainStepper {}
