import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsMainStepperList } from './ps-main-stepper-list';

describe('PsMainStepperList', () => {
  let component: PsMainStepperList;
  let fixture: ComponentFixture<PsMainStepperList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsMainStepperList],
    }).compileComponents();

    fixture = TestBed.createComponent(PsMainStepperList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
