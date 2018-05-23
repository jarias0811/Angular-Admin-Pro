import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: []
})
export class IncrementerComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() label: string = 'Label';
  @Input() progress: number = 50;

  @Output() valueChanged: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  changeValue(value: number): void {
    this.progress += value;
    this.progress = this.validateRange(this.progress);
    this.valueChanged.emit(this.progress);
  }

  onChangeProgress(value: number): void {
    this.progress = value;
    this.progress = this.validateRange(value);
    this.txtProgress.nativeElement.value = this.progress;
    this.txtProgress.nativeElement.focus();
    this.valueChanged.emit(this.progress);
  }

  validateRange(value: number): number {
    if (value >= 100) {
      value = 100;
    } else if (value <= 0) {
      value = 0;
    }
    return value;
  }
}
