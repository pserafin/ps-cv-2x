import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsMainLanguages } from './ps-main-languages';

describe('PsMainLanguages', () => {
  let component: PsMainLanguages;
  let fixture: ComponentFixture<PsMainLanguages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsMainLanguages],
    }).compileComponents();

    fixture = TestBed.createComponent(PsMainLanguages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
