import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsMainIconsWrap } from './ps-main-icons-wrap';

describe('PsMainIconsWrap', () => {
  let component: PsMainIconsWrap;
  let fixture: ComponentFixture<PsMainIconsWrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsMainIconsWrap],
    }).compileComponents();

    fixture = TestBed.createComponent(PsMainIconsWrap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
