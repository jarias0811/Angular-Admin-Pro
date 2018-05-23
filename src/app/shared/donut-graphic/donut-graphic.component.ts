import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-donut-graphic',
  templateUrl: './donut-graphic.component.html',
  styleUrls: ['./donut-graphic.component.css']
})
export class DonutGraphicComponent implements OnInit {
  @Input() data: Array<number>;
  @Input() labels: Array<string>;
  @Input() chartType: string;
  @Input() legend: string;

  constructor() {
  }

  ngOnInit() {
  }

}
