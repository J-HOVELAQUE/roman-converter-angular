import {
  ComponentFixture,
  TestBed,
  TestBedStatic,
} from '@angular/core/testing';

import { RomanNumeralConverterComponent } from './roman-numeral-converter.component';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NumeralRepoService } from '../../services/numeral-repo.service';
import { Observable, of } from 'rxjs';

describe('RomanNumeralConverterComponent', () => {
  let component: RomanNumeralConverterComponent;
  let fixture: ComponentFixture<RomanNumeralConverterComponent>;
  let numeralRepo: NumeralRepoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RomanNumeralConverterComponent],
      providers: [FormBuilder, HttpClient, HttpHandler],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanNumeralConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    numeralRepo = TestBed.inject(NumeralRepoService);
    spyOn(numeralRepo, 'convertRomanToArab').and.returnValue(
      new Observable((obs) => {
        obs.next({
          nombreEnChiffreArabe: '10',
          nombreEnChiffreRomain: 'X',
        });
        obs.complete();
      })
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing set answer at return service', () => {
    component.sendRomanNumeral();
    expect(component.convertingNumeral).toEqual('10');
  });

  it('testing form input invalid', () => {
    component.romanNumeralForm.setValue({ romanNumeral: 'dg' });
    expect(component.romanNumeralForm.valid).toBeFalsy();
  });

  it('testing form input valid', () => {
    component.romanNumeralForm.setValue({ romanNumeral: 'xvii' });
    expect(component.romanNumeralForm.valid).toBeTruthy();
  });
});
