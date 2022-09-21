import { Component, OnInit } from '@angular/core';

import { StyleCommissionInfoComponent } from './style-commission-info/style-commission-info.component';

import { StyleCommissionInfo, DIGITAL_STYLES, TRADITIONAL_STYLES} from '../../data/commission-info';

import { CurrencyConversionService } from './currency-conversion.service';

@Component({
  selector: 'page-art-commission',
  templateUrl: './art-commission.component.html',
  styleUrls: ['./art-commission.component.scss']
})
export class ArtCommissionComponent implements OnInit {
  readonly DIGITAL_STYLES: StyleCommissionInfo[] = DIGITAL_STYLES;  
  readonly TRADITIONAL_STYLES: StyleCommissionInfo[] = TRADITIONAL_STYLES;  

  constructor(private CurrencyConversion: CurrencyConversionService) { }

  ngOnInit(): void {
  }

}

