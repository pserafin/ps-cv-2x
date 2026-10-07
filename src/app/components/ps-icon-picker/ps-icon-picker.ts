import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'ps-icon-picker',
  styleUrl: './ps-icon-picker.scss',
  templateUrl: './ps-icon-picker.html',
})
export class PsIconPicker {
  public icon = input.required<number>();
}
