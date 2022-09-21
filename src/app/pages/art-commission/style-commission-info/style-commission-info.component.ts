import { Component, OnInit, Input, LOCALE_ID } from '@angular/core';
import { getLocaleId, getLocaleCurrencyCode } from '@angular/common';

// how do I make this less relative?
import { StyleCommissionInfo } from '../../../data/commission-info';
import { DevCurrencyConversionService } from '../dev-currency-conversion.service';

@Component({
  selector: 'app-style-commission-info [style-info] .card',
  templateUrl: './style-commission-info.component.html',
  styleUrls: ['./style-commission-info.component.scss']
})
export class StyleCommissionInfoComponent implements OnInit {
  public convertedRate: Promise<number>;
  public convertedCalculated: boolean = false;

  @Input('style-info') styleInfo: StyleCommissionInfo = {
    name: "",
    description: "",
    USDPrice: 0,
    imgURL: "",
  }; 

  constructor(
    private devCurrencyConversionService: DevCurrencyConversionService) {
    this.convertedRate = new Promise(() => {}); // Empty promise to satisfy Angular type safety.
  }

  ngOnInit(): void {
    const locale: string = 'en-CA';
    const currencyCode: string = 'CAD'; 

    if (locale && currencyCode != 'USD')
    {
      this.convertedRate = this.devCurrencyConversionService.getConversion(currencyCode, this.styleInfo.USDPrice);
      this.convertedRate.then(() => this.convertedCalculated = true);
    }
  }

}