import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsMainReferences } from './ps-main-references';

describe('PsMainReferences', () => {
  let component: PsMainReferences;
  let fixture: ComponentFixture<PsMainReferences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsMainReferences],
    }).compileComponents();

    fixture = TestBed.createComponent(PsMainReferences);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
