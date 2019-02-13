import { Component, OnInit } from '@angular/core';
import { ConversionService } from '../../services/conversion-service.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  selectedBase: string = 'CAD'
  selectedConvert: string = 'USD'
  inputBase: number | string
  inputConvert: number | string
  currencyRate: number
  allowedRates: string[] = ['CAD','USD','EUR'];

  arrBase: Rate[];
  arrConvert: Rate[];

  baseObject: object;
  convertObject: object;

  getRates(): void {
    this.currencyService.getRates(this.selectedBase)
      .subscribe(data => {
        let arr = [];
        Object.entries(data).forEach((key,i) => {
          arr.push({'id': i+1, 'code': key[0], 'rate': Number(key[1])});
        });
        this.arrBase = arr.filter(rate => rate.code !== this.selectedConvert);
        this.arrConvert = arr.filter(rate => rate.code !== this.selectedBase);
        this.currencyRate = this.arrConvert.filter(rates => rates.code === this.selectedConvert)[0].rate;
        console.log(`${this.selectedBase} to ${this.selectedConvert} = ${this.currencyRate}`);
      });
  }
  constructor(private service: ConversionService) { }

  ngOnInit() {
    this.getRates();

    this.baseObject = {
      name: 'base',
      selectedRate: this.selectedBase,
      inputValue: this.inputBase,
      allowedRates: this.allowedRates,
      onKeyup: this.onKeyupBase,
      onSelect: this.onSelectBase,
    }

    this.convertObject = {
      name: 'convert',
      selectedRate: this.selectedConvert,
      inputValue: this.inputConvert,
      allowedRates: this.allowedRates,
      onKeyup: this.onKeyupConvert,
      onSelect: this.onSelectBase,
    }
  }

  ngDoCheck() {
    this.baseObject = {
      selectedRate: this.selectedBase,
      inputValue: this.inputBase,
      allowedRates: this.allowedRates,
    }

    this.convertObject = {
      name: 'convert',
      selectedRate: this.selectedConvert,
      inputValue: this.inputConvert,
      allowedRates: this.allowedRates,
    }
  }
}

interface Rate {
  id: number
  code: string
  rate: number
}