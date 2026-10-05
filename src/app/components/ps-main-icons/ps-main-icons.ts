import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Card } from 'primeng/card';
import { PsMainIconsWrap } from '../ps-main-icons-wrap/ps-main-icons-wrap';

@Component({
  imports: [Card, PsMainIconsWrap],
  selector: 'ps-main-icons',
  styleUrl: './ps-main-icons.scss',
  templateUrl: './ps-main-icons.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsMainIcons {
  public mode = input.required<number>();
}
