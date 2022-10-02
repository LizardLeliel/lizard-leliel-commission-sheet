import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wide-card-row',
  templateUrl: './wide-card-row.component.html',
  styleUrls: ['./wide-card-row.component.scss']
})
export class WideCardRowComponent implements OnInit {

  @Input("img") image: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
