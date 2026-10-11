import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsMainDownload } from './ps-main-download';

describe('PsMainDownload', () => {
  let component: PsMainDownload;
  let fixture: ComponentFixture<PsMainDownload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsMainDownload],
    }).compileComponents();

    fixture = TestBed.createComponent(PsMainDownload);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
