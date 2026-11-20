import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PsMain } from './components/ps-main/ps-main';
import { PsMainBackground } from './components/ps-main-background/ps-main-background';
import { PsThemeToggle } from './components/ps-theme-toggle/ps-theme-toggle';

@Component({
  selector: 'app-root',
  imports: [PsMain, PsMainBackground, PsThemeToggle],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('CV - Paweł Serafin');

}
