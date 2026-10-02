import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsMainImage } from './ps-main-image';

describe('PsMainImage', () => {
  let component: PsMainImage;
  let fixture: ComponentFixture<PsMainImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsMainImage],
    }).compileComponents();

    fixture = TestBed.createComponent(PsMainImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
