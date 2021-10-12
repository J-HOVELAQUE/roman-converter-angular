import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanNumeralConverterComponent } from './roman-numeral-converter.component';

describe('RomanNumeralConverterComponent', () => {
  let component: RomanNumeralConverterComponent;
  let fixture: ComponentFixture<RomanNumeralConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanNumeralConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanNumeralConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
