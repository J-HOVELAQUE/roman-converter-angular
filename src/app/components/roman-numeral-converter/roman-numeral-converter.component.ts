import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-roman-numeral-converter',
  templateUrl: './roman-numeral-converter.component.html',
  styleUrls: ['./roman-numeral-converter.component.css'],
})
export class RomanNumeralConverterComponent implements OnInit {
  private resrg = new RegExp(
    '^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$',
    'i'
  );

  romanNumeralForm = this._formBuider.group({
    romanNumeral: ['', [Validators.required, Validators.pattern(this.resrg)]],
  });

  constructor(private _formBuider: FormBuilder) {}

  public sendRomanNumeral() {
    console.log(this.romanNumeralForm.value);
  }

  ngOnInit(): void {}
}
