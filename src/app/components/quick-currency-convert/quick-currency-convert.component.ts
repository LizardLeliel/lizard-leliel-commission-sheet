import { Component, OnInit, Input } from '@angular/core';
import { getLocaleId, getLocaleCurrencyCode } from '@angular/common';


import { CurrencyConversionService } from '../../services/currency-conversion/currency-conversion.service';


@Component({
  selector: 'span [app-quick-currency-convert]',
  templateUrl: './quick-currency-convert.component.html',
  styleUrls: ['./quick-currency-convert.component.scss']
})
export class QuickCurrencyConvertComponent implements OnInit {

  public convertedRate: Promise<number>
  public convertedCalculated: boolean = false;

  public localeCurrencyCode: string = '';

  @Input('app-quick-currency-convert') USDPrice: number = 0;
  @Input('show-code') showCode: boolean = true;

  constructor(
    private currencyConversionService: CurrencyConversionService) {
    this.convertedRate = new Promise(() => {}); // Empty promise to satisfy Angular type safety requirements.
  }

  ngOnInit(): void {
    console.log(this.USDPrice);
    this.convertedRate = this.currencyConversionService.getConversion(this.USDPrice);
    this.convertedRate.then(() => this.convertedCalculated = true);

    this.localeCurrencyCode = this.currencyConversionService.getLocalCurrencyCode()
  }

}
