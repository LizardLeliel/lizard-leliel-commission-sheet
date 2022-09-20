import { Component, OnInit, Input } from '@angular/core';

// how do I make this less relative?
import { StyleCommissionInfo } from '../../../data/commission-info';

@Component({
  selector: 'app-style-commission-info [style-info] .card',
  templateUrl: './style-commission-info.component.html',
  styleUrls: ['./style-commission-info.component.scss']
})
export class StyleCommissionInfoComponent implements OnInit {
  @Input('style-info') styleInfo: StyleCommissionInfo = <StyleCommissionInfo> {}; 

  constructor() { }

  ngOnInit(): void {
  }
}