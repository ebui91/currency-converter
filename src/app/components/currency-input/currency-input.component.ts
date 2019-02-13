import { Component, OnInit, Input } from '@angular/core';
import { ConversionService } from '../../services/conversion-service.service'
import * as mockData from '../../services/mock-data.json'

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.css']
})
export class CurrencyInputComponent implements OnInit {
  @Input() model: any
  // @Input() conversionRates: Rate[]

  name: string
  inputVal: number
  inputId: string = this.name
  conversionRates: number[]
  currencyTypes: string[]
  selectedRate: string

  constructor(private conversionService: ConversionService) { }

  onSelect(e) {
    this.onSelectFn.emit(e);
  }

  parseData() {
    this.conversionRates = Object.entries(mockData.rates)
      .map(([key, val]) => {
        return { name: key, rate: val }
      })
      
    console.log(this.conversionRates)    
  }

  ngOnInit() {
    // If using mock data:
    // this.currencyTypes = Object.keys(mockData.rates)
    // this.conversionRates = Object.values(mockData.rates)
    this.parseData()

    // For actual API call:
    // this.conversionService.getRates().subscribe(data => {
    //   this.conversionRates = Object.keys(data.rates)
    // });
    // console.log(this.conversionRates)
  }

  ngOnChanges() {
    this.selectedRate = this.model.selectedRate;
    this.inputValue = this.model.inputValue;
  }
}

interface Rate {
  name: string
  rate: number
}