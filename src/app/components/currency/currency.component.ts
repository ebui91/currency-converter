import { Component, OnInit } from '@angular/core';
import { ConversionService } from '../../services/conversion-service.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  currencyRate: number
  rates: Rate[]
  
  constructor(private conversionService: ConversionService) { }

  ngOnInit() {
    this.conversionService.getRates().subscribe(rates => {
      console.log(rates)
      this.rates = rates
    });
  }
}

interface Rate {
  name: string
  rate: number
}