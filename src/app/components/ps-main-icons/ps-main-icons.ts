import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Contact links (mode 1). The technology stack is rendered by ps-main-technology. */
@Component({
  selector: 'ps-main-icons',
  styleUrl: './ps-main-icons.scss',
  templateUrl: './ps-main-icons.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsMainIcons {
  public mode = input.required<number>();
}
