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
    this.onSelectFn.emit(e);
  }

  ngOnInit() {
    this.conversionService.getRates().subscribe(data => {
      this.conversionRates = Object.keys(data.rates)
    });
    console.log(this.conversionRates)
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