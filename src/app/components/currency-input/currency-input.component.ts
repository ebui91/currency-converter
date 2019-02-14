import { Component, OnInit, Input } from '@angular/core';
import { ConversionService } from '../../services/conversion-service.service'
declare var require;

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.css']
})
export class CurrencyInputComponent implements OnInit {
  mockData = require('../../services/mock-data.json')
  @Input() model: any
  // @Input() conversionRates: Rate[]

  name: string
  inputVal: number
  inputId: string = this.name
  conversionRates: any[]
  selectedRate: string

  constructor(private conversionService: ConversionService) { }

  onSelect(e) {
    console.log(e)
  }

  parseData() {
    // If using mock data:
    let mockData = require('../../services/mock-data.json')
    this.conversionRates = Object.entries(mockData.rates)
        .map(([key, val]) => {
          return { name: key, rate: val }
        })

    // If using API:
    // this.conversionService.getRates()
    // .subscribe(data => {
    //   this.conversionRates = Object.entries(data.rates)
    //     .map(([key, val]) => {
    //       return { name: key, rate: val }
    //     })
    //   })
  }

  ngOnInit() {
    this.parseData()
    console.log(this.mockData)
  }

  ngOnChanges() {
    this.selectedRate = this.model.selectedRate;
    this.inputVal = this.model.inputVal;
  }
}

interface Rate {
  name: string
  rate: number
}