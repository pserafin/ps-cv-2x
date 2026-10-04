import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PsMainIcons } from '../ps-main-icons/ps-main-icons';

@Component({
  imports: [PsMainIcons],
  selector: 'ps-main-technology',
  styleUrl: './ps-main-technology.scss',
  templateUrl: './ps-main-technology.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsMainTechnology {}
