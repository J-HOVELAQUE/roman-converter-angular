import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { NumeralRepoService } from 'src/app/services/numeral-repo.service';

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

  convertingNumeral = '';

  romanNumeralForm = this._formBuider.group({
    romanNumeral: ['', [Validators.required, Validators.pattern(this.resrg)]],
  });

  constructor(
    private _formBuider: FormBuilder,
    private _numeralRepo: NumeralRepoService
  ) {}

  public sendRomanNumeral() {
    console.log(this.romanNumeralForm.value);
    const request = this._numeralRepo.convertRomanToArab(
      this.romanNumeralForm.value.romanNumeral
    );

    const answer = request.subscribe((answer) => {
      console.log(answer);
      this.convertingNumeral = answer.nombreEnChiffreArabe;
    });
  }

  ngOnInit(): void {}
}
