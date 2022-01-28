import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFattureComponent } from './form-fatture.component';

describe('FormFattureComponent', () => {
  let component: FormFattureComponent;
  let fixture: ComponentFixture<FormFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
