import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsIconPicker } from './ps-icon-picker';

describe('PsIconPicker', () => {
  let component: PsIconPicker;
  let fixture: ComponentFixture<PsIconPicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsIconPicker],
    }).compileComponents();

    fixture = TestBed.createComponent(PsIconPicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
