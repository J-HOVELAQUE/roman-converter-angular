import {
  ComponentFixture,
  TestBed,
  ComponentFixtureAutoDetect,
} from '@angular/core/testing';

import { RomanNumeralConverterComponent } from './roman-numeral-converter.component';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NumeralRepoService } from '../../services/numeral-repo.service';
import { Observable, of } from 'rxjs';
import { DebugElement } from '@angular/core';

describe('RomanNumeralConverterComponent', () => {
  let component: RomanNumeralConverterComponent;
  let fixture: ComponentFixture<RomanNumeralConverterComponent>;
  let numeralRepo: NumeralRepoService;
  let templateInput: HTMLInputElement;
  let hostElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RomanNumeralConverterComponent],
      providers: [
        FormBuilder,
        HttpClient,
        HttpHandler,
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanNumeralConverterComponent);
    component = fixture.componentInstance;
    hostElement = fixture.debugElement;
    templateInput = hostElement.nativeElement.querySelector('input');
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

  ///////////// template
  it('testing input valid content', async () => {
    templateInput.value = 'vii';
    component.romanNumeralForm.setValue({ romanNumeral: 'xvii' });

    templateInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(templateInput.value).toBe('vii');
    expect(templateInput.getAttribute('class')).toBe(
      'input converter-input is-success'
    );
  });

  it('testing input invalid content', async () => {
    templateInput.value = 'viiii';
    component.romanNumeralForm.setValue({ romanNumeral: 'xviiii' });

    templateInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(templateInput.value).toBe('viiii');
    expect(templateInput.getAttribute('class')).toBe(
      'input converter-input is-danger'
    );
  });
});
