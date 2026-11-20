import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Reference } from '../../data/models';

@Component({
  selector: 'ps-main-references',
  styleUrl: './ps-main-references.scss',
  templateUrl: './ps-main-references.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsMainReferences {
  public readonly data = input.required<Reference[]>();

  /** Indexes of expanded references */
  protected readonly expanded = signal<ReadonlySet<number>>(new Set());

  protected isExpanded(i: number): boolean {
    return this.expanded().has(i);
  }

  protected toggle(i: number): void {
    this.expanded.update((s) => {
      const next = new Set(s);
      if (!next.delete(i)) next.add(i);
      return next;
    });
  }
}
