import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFattureComponent } from './card-fatture.component';

describe('CardFattureComponent', () => {
  let component: CardFattureComponent;
  let fixture: ComponentFixture<CardFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
