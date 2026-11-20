import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { SkillGroup, Technology } from '../../data/models';

interface TechGroup {
  name: string;
  items: Technology[];
}

/** Display order of the non-core categories */
const CATEGORY_ORDER = ['Backend', 'Frontend', 'Cloud & DevOps', 'Data', 'Observability', 'AI & Testing', 'Workflow & APIs'];

@Component({
  selector: 'ps-main-technology',
  styleUrl: './ps-main-technology.scss',
  templateUrl: './ps-main-technology.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsMainTechnology {
  public readonly technologies = input.required<Technology[]>();
  public readonly skillGroups = input<SkillGroup[]>([]);

  protected readonly core = computed(() => this.technologies().filter((t) => t.core));

  protected readonly groups = computed<TechGroup[]>(() => {
    const rest = this.technologies().filter((t) => !t.core);
    const names = [...new Set([...CATEGORY_ORDER, ...rest.map((t) => t.category)])];
    return names
      .map((name) => ({ name, items: rest.filter((t) => t.category === name) }))
      .filter((g) => g.items.length > 0);
  });
}
