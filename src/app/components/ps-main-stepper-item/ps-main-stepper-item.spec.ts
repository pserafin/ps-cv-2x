import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsMainStepperItem } from './ps-main-stepper-item';

describe('PsMainStepperItem', () => {
  let component: PsMainStepperItem;
  let fixture: ComponentFixture<PsMainStepperItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsMainStepperItem],
    }).compileComponents();

    fixture = TestBed.createComponent(PsMainStepperItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
