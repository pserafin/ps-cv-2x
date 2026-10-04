import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'ps-main-summary',
  styleUrl: './ps-main-summary.scss',
  templateUrl: './ps-main-summary.html',
})
export class PsMainSummary {
  public data = input.required<string>();
}
