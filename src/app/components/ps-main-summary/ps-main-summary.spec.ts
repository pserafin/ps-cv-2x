import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsMainSummary } from './ps-main-summary';

describe('PsMainSummary', () => {
  let component: PsMainSummary;
  let fixture: ComponentFixture<PsMainSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsMainSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(PsMainSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
