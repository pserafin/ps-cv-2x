import { ChangeDetectionStrategy, Component, DOCUMENT, afterNextRender, inject, signal } from '@angular/core';

const STORAGE_KEY = 'theme';

@Component({
  selector: 'ps-theme-toggle',
  templateUrl: './ps-theme-toggle.html',
  styleUrl: './ps-theme-toggle.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsThemeToggle {
  private readonly document = inject(DOCUMENT);
  protected readonly dark = signal(false);

  constructor() {
    // The initial class is set by the inline script in index.html (before first paint);
    // sync the button state with it once we're in the browser.
    afterNextRender(() => {
      this.dark.set(this.document.documentElement.classList.contains('dark'));
    });
  }

  protected toggle(): void {
    const next = !this.dark();
    this.dark.set(next);
    this.document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
    } catch {
      // storage unavailable (private mode etc.) - the choice just won't persist
    }
  }
}
