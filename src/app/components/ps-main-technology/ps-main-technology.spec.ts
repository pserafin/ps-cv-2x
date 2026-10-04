import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsMainTechnology } from './ps-main-technology';

describe('PsMainTechnology', () => {
  let component: PsMainTechnology;
  let fixture: ComponentFixture<PsMainTechnology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsMainTechnology],
    }).compileComponents();

    fixture = TestBed.createComponent(PsMainTechnology);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
