import { Component, input, computed  } from '@angular/core';

@Component({
  imports: [],
  selector: 'ps-main-courses',
  styleUrl: './ps-main-courses.scss',
  templateUrl: './ps-main-courses.html',
})
export class PsMainCourses {
  public certs = input.required<string[]>();
  public courses = input.required<string[]>();
  protected items = computed(() => [...this.certs(), ...this.courses()])
}
