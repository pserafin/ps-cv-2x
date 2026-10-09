import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsMainCourses } from './ps-main-courses';

describe('PsMainCourses', () => {
  let component: PsMainCourses;
  let fixture: ComponentFixture<PsMainCourses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsMainCourses],
    }).compileComponents();

    fixture = TestBed.createComponent(PsMainCourses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
