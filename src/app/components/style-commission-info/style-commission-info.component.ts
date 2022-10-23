import { Component, OnInit, Input, LOCALE_ID } from '@angular/core';
import { getLocaleId, getLocaleCurrencyCode } from '@angular/common';

// Todo: determine debug flags
import { StyleCommissionInfo } from '../../models/commission-info';
// import { DevCurrencyConversionService } from '../../services/dev-currency-conversion/dev-currency-conversion.service';
import { CurrencyConversionService } from '../../services/currency-conversion/currency-conversion.service';


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
    private currencyConversionService: CurrencyConversionService) {
    this.convertedRate = new Promise(() => {}); // Empty promise to satisfy Angular type safety requirements.
  }

  ngOnInit(): void {
    this.convertedRate = this.currencyConversionService.getConversion(this.styleInfo.USDPrice);
    this.convertedRate.then(() => this.convertedCalculated = true);

    this.localeCurrencyCode = this.currencyConversionService.getLocalCurrencyCode()
  }

}