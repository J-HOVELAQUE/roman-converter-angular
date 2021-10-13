import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

interface ApiAnswer {
  nombreEnChiffreArabe: string;
  nombreEnChiffreRomain: string;
}

@Injectable({
  providedIn: 'root',
})
export class NumeralRepoService {
  private _apiUrl = 'http/localhost:3000';

  constructor(private _http: HttpClient) {}

  public convertRomanToArab(romanValue: string) {
    console.log('APIIII', this._apiUrl);

    const params = new HttpParams().set('romanValue', romanValue);
    return this._http.get<ApiAnswer>('http://localhost:3000/roman', { params });
  }
}
