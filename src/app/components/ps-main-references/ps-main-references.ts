import { Component } from '@angular/core';
import { Stepper, StepPanel, Step, StepItem } from 'primeng/stepper';
import { ButtonDirective } from 'primeng/button';

@Component({
  imports: [Stepper, StepPanel, Step, StepItem, ButtonDirective],
  selector: 'ps-main-references',
  styleUrl: './ps-main-references.scss',
  templateUrl: './ps-main-references.html',
})
export class PsMainReferences {}
