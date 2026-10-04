import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsMainIcons } from './ps-main-icons';

describe('PsMainIcons', () => {
  let component: PsMainIcons;
  let fixture: ComponentFixture<PsMainIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsMainIcons],
    }).compileComponents();

    fixture = TestBed.createComponent(PsMainIcons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
