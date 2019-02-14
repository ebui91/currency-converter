import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';


@Injectable()
export class ConversionService {
  constructor(private http: Http) {}

  getRates(): Observable<any> {
    let apiKey = "5563538c43401d3ad65c2e83880be6f8"
    // Latest rates with EUR as a base
    // let baseUrl = `https://data.fixer.io/api/latest?access_key=${apiKey}`;

    // Actual conversion endpoint:
    // https://data.fixer.io/api/convert
    // ? access_key = API_KEY
    // & from = GBP
    // & to = JPY
    // & amount = 25
    let baseUrl = "https://data.fixer.io/api/convert"


    return this.http.get("http://data.fixer.io/api/latest?access_key=5563538c43401d3ad65c2e83880be6f8&format=1")
      .map(res => res.json())
  }
}

interface Rate {
  name: string
  rate: number
}
