import { Component, OnInit, Input } from '@angular/core';
import { ConversionService } from '../../services/conversion-service.service'

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
  conversionRates: any[]
  selectedRate: string

  constructor(private conversionService: ConversionService) { }

  onSelect(e) {

  }

  parseData() {
    this.conversionService.getRates()
    .subscribe(data => {
      this.conversionRates = Object.entries(data.rates)
        .map(([key, val]) => {
          return { name: key, rate: val }
        })
      })
  }

  ngOnInit() {
    this.parseData()
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