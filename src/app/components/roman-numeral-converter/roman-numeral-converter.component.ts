import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-roman-numeral-converter',
  templateUrl: './roman-numeral-converter.component.html',
  styleUrls: ['./roman-numeral-converter.component.css'],
})
export class RomanNumeralConverterComponent implements OnInit {
  romanNumeralForm = this._formBuider.group({
    romanNumeral: [''],
  });

  constructor(private _formBuider: FormBuilder) {}

  public sendRomanNumeral() {
    console.log(this.romanNumeralForm.value);
  }

  ngOnInit(): void {}
}
