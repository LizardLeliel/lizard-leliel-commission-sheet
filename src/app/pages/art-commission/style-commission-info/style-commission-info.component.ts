import { Component, OnInit, Input, LOCALE_ID } from '@angular/core';
import { getLocaleId, getLocaleCurrencyCode } from '@angular/common';

// how do I make this less relative?
import { StyleCommissionInfo } from '../../../data/commission-info';
import { DevCurrencyConversionService } from '../dev-currency-conversion.service';

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

  constructor(
    private devCurrencyConversionService: DevCurrencyConversionService) {
    this.convertedRate = new Promise(() => {}); // Empty promise to satisfy Angular type safety.
  }

  ngOnInit(): void {
    // Hack to show some currency conversions until I can do something more proper.
    const locale: string = navigator.language;
    this.localeCurrencyCode = COMMON_LOCALE_CURRENCIES[locale] || '';

    if (this.localeCurrencyCode && this.localeCurrencyCode != 'USD') {
      this.convertedRate = this.devCurrencyConversionService.getConversion(this.localeCurrencyCode, this.styleInfo.USDPrice);
      this.convertedRate.then(() => this.convertedCalculated = true);
    }
  }

}