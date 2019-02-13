import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/fromPromise';

@Injectable()
export class ConversionService {
  constructor(private http: Http) {}

  getRates(): Observable<Rate[]> {
    let apiKey = "5563538c43401d3ad65c2e83880be6f8"
    let baseUrl = `https://data.fixer.io/api/latest?access_key=${apiKey}`;
    let rates = [];

    return this.http.get("http://data.fixer.io/api/latest?access_key=5563538c43401d3ad65c2e83880be6f8&format=1")
      .map(res => {
        console.log(res)
        return res.json()
      })

    // return Observable.fromPromise(fetch("http://data.fixer.io/api/latest?access_key=5563538c43401d3ad65c2e83880be6f8&format=1")
    //   .then(res => res.json())
    //   .then(data => data.rates))
  }
}

interface Rate {
  id: number
  code: string
  rate: number
}
