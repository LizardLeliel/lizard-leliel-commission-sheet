import { Component, OnInit, Input, LOCALE_ID } from '@angular/core';
import { getLocaleId, getLocaleCurrencyCode } from '@angular/common';

// how do I make this less relative?
import { StyleCommissionInfo } from '../../models/commission-info';
// import { DevCurrencyConversionService } from '../../services/dev-currency-conversion/dev-currency-conversion.service';
import { CurrencyConversionService } from '../../services/currency-conversion/currency-conversion.service';

const COMMON_LOCALE_CURRENCIES: { [key: string]: string } = {
  'en-CA': 'CAD',
  'fr-CA': 'CAD',

  'en-AU': 'AUD',

  'en-GB': 'GBP',

  'en-US': 'USD',
  'es-PR': 'USD',

  'da': 'EUR',
  'it-IT': 'EUR',
  'de-DE': 'EUR',
  'fr-FR': 'EUR',

  'ja': 'JPY',
};


@Component({
  selector: 'app-style-commission-info [style-info] .card',
  templateUrl: './style-commission-info.component.html',
  styleUrls: ['./style-commission-info.component.scss']
})
export class StyleCommissionInfoComponent implements OnInit {
  public convertedRate: Promise<number>;
  public convertedCalculated: boolean = false;

  public localeCurrencyCode: string = '';

  @Input('style-info') styleInfo: StyleCommissionInfo = {
    name: "",
    description: "",
    USDPrice: 0,
    imgURL: "",
  }; 

  // You just need to convert the logic here...

  constructor(
    // private devCurrencyConversionService: DevCurrencyConversionService) {
    private currencyConversionService: CurrencyConversionService) {
    this.convertedRate = new Promise(() => {}); // Empty promise to satisfy Angular type safety.
    // this.convertedRate 


  }

  ngOnInit(): void {
    const locale: string = navigator.language;
    this.localeCurrencyCode = COMMON_LOCALE_CURRENCIES[locale] || '';


    // Hack to show some currency conversions until I can do something more proper.
    if (this.localeCurrencyCode && this.localeCurrencyCode != 'USD') {

      this.convertedRate = this.currencyConversionService.getConversion(this.localeCurrencyCode, this.styleInfo.USDPrice);

      // .then((conversionRate) => {
      //   this.convertedRate.resolve(conversionRate * this.styleInfo.USDPrice);
      // });

      // this.convertedRate = this.currencyConversionService.getConversion(this.localeCurrencyCode, this.styleInfo.USDPrice);
      this.convertedRate.then(() => this.convertedCalculated = true);
    }
    else {
      this.convertedRate = new Promise(() => {});
    }
  }

}