import { Component, input } from '@angular/core';
import { Language } from '../../data/models';

@Component({
  imports: [],
  selector: 'ps-main-languages',
  styleUrl: './ps-main-languages.scss',
  templateUrl: './ps-main-languages.html',
})
export class PsMainLanguages {
  public data = input.required<Language[]>();
}
