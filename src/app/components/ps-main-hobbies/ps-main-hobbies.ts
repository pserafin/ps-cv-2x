import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'ps-main-hobbies',
  styleUrl: './ps-main-hobbies.scss',
  templateUrl: './ps-main-hobbies.html',
})
export class PsMainHobbies {
  public data = input.required<string[]>();
}
