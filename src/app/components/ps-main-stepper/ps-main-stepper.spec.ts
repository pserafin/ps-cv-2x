import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsMainStepper } from './ps-main-stepper';

describe('PsMainStepper', () => {
  let component: PsMainStepper;
  let fixture: ComponentFixture<PsMainStepper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsMainStepper],
    }).compileComponents();

    fixture = TestBed.createComponent(PsMainStepper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
