import { Component, OnInit } from '@angular/core';

import { StyleCommissionInfoComponent } from '../../components/style-commission-info/style-commission-info.component';
import { WideCardRowComponent } from '../../components/wide-card-row/wide-card-row.component'; 

import { StyleCommissionInfo } from '../../models/commission-info'; 
import { DIGITAL_STYLES, TRADITIONAL_STYLES} from '../../data/commission-info';


@Component({
  selector: 'page-art-commission',
  templateUrl: './art-commission.component.html',
  styleUrls: ['./art-commission.component.scss']
})
export class ArtCommissionComponent implements OnInit {
  readonly DIGITAL_STYLES: StyleCommissionInfo[] = DIGITAL_STYLES;  
  readonly TRADITIONAL_STYLES: StyleCommissionInfo[] = TRADITIONAL_STYLES;  

  constructor() { }

  ngOnInit(): void {
  }

}

