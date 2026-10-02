import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsMain } from './ps-main';

describe('PsMain', () => {
  let component: PsMain;
  let fixture: ComponentFixture<PsMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsMain],
    }).compileComponents();

    fixture = TestBed.createComponent(PsMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
