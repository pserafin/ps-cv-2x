import { Component, input, model } from '@angular/core';
import { Project } from '../../data/models';
import { PsMainStepperItem } from '../ps-main-stepper-item/ps-main-stepper-item';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'primeng/tabs';

@Component({
  imports: [Tabs, TabList, Tab, TabPanels, TabPanel, PsMainStepperItem],
  selector: 'ps-main-stepper-list',
  styleUrl: './ps-main-stepper-list.scss',
  templateUrl: './ps-main-stepper-list.html',
})
export class PsMainStepperList {
  public data = input.required<Project[]>();
  public position = input.required<string>();
  public icon = input.required<number>();
  public activeStep = model<number>(1);
}
