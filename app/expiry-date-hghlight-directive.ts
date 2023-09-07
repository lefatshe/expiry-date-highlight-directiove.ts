import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import moment from 'moment-mini';
@Directive({
  selector: '[appBasicHighlight]',
})
export class expiryDateHighlightDirective implements OnInit {
  @Input() expiryDate: string;

  // today = moment().format('DD/MM/YYYY');
  // yesterday = moment().subtract(1, 'day').format('DD/MM/YYYY');
  // fallsInNextTwoDays = moment().add(1, 'day').format('DD/MM/YYYY');
  // expirationDate01 = moment('2023-09-07T21:59:00Z').format('DD/MM/YYYY');

  getTommorowDate = moment().add(1, 'day').format('DD/MM/YYYY');
  getToDayDate = moment().format('DD/MM/YYYY');

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const isDateTomorrow = this.expiryDate === this.getTommorowDate;
    const isToday =
      this.expiryDate === this.getToDayDate;

    if (isDateTomorrow || isToday)
      this.elementRef.nativeElement.style.color = 'red';

    return;
  }
}
