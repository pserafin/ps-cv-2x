import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsMainBackground } from './ps-main-background';

describe('PsMainBackground', () => {
  let component: PsMainBackground;
  let fixture: ComponentFixture<PsMainBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsMainBackground],
    }).compileComponents();

    fixture = TestBed.createComponent(PsMainBackground);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
