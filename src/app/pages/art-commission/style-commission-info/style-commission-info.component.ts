import { Component, OnInit, Input } from '@angular/core';

// how do I make this less relative?
import { StyleCommissionInfo } from '../../../data/commission-info';
import { DevCurrencyConversionService } from '../dev-currency-conversion.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-style-commission-info [style-info] .card',
  templateUrl: './style-commission-info.component.html',
  styleUrls: ['./style-commission-info.component.scss']
})
export class StyleCommissionInfoComponent implements OnInit {
  public convertedRate?: Promise<number>;


  constructor(private devCurrencyConversionService: DevCurrencyConversionService) { }

  ngOnInit(): void {
    this.convertedRate = this.devCurrencyConversionService.getConversion('CAD', this.styleInfo.USDPrice);
  }

  @Input('style-info') styleInfo: StyleCommissionInfo = < StyleCommissionInfo > {}; 
}