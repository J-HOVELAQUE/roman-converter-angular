import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface ApiAnswer {
  nombreEnChiffreArabe: string;
  nombreEnChiffreRomain: string;
}

@Injectable({
  providedIn: 'root',
})
export class NumeralRepoService {
  private _env = environment;
  private _apiUrl = this._env.apiUrl + '/roman';

  constructor(private _http: HttpClient) {}

  public convertRomanToArab(romanValue: string) {
    const params = new HttpParams().set('romanValue', romanValue);
    return this._http.get<ApiAnswer>(this._apiUrl, { params });
  }
}
