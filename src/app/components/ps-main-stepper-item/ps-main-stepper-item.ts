import { Component, input } from '@angular/core';
import { Project } from '../../data/models';
import { PsIconPicker } from '../ps-icon-picker/ps-icon-picker';

@Component({
  imports: [ PsIconPicker ],
  selector: 'ps-main-stepper-item',
  styleUrl: './ps-main-stepper-item.scss',
  templateUrl: './ps-main-stepper-item.html',
})
export class PsMainStepperItem {
  public data = input.required<Project>();
  public position = input.required<string>();
  public icon = input.required<number>();
}
