import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConversionService } from './services/conversion-service.service'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CurrencyInputComponent } from './components/currency-input/currency-input.component';
import { CytoscapeGraphComponent } from './components/cytoscape-graph/cytoscape-graph.component';
import { CurrencyComponent } from './components/currency/currency.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyInputComponent,
    CytoscapeGraphComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
