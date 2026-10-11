import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsMainHobbies } from './ps-main-hobbies';

describe('PsMainHobbies', () => {
  let component: PsMainHobbies;
  let fixture: ComponentFixture<PsMainHobbies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsMainHobbies],
    }).compileComponents();

    fixture = TestBed.createComponent(PsMainHobbies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
