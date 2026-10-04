import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  imports: [Card],
  selector: 'ps-main-icons',
  styleUrl: './ps-main-icons.scss',
  templateUrl: './ps-main-icons.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsMainIcons {
  public mode = input.required<number>();
}
