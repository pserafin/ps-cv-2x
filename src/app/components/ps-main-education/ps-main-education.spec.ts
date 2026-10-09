import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsMainEducation } from './ps-main-education';

describe('PsMainEducation', () => {
  let component: PsMainEducation;
  let fixture: ComponentFixture<PsMainEducation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsMainEducation],
    }).compileComponents();

    fixture = TestBed.createComponent(PsMainEducation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
