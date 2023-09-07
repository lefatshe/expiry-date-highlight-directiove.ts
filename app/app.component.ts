import { Component, OnInit } from '@angular/core';
import moment from 'moment-mini';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  today = moment().format('DD/MM/YYYY');

  expirationDate04 = moment('2023-09-10T21:59:00Z').format('DD/MM/YYYY');
  expirationDate03 = moment('2023-09-09T21:59:00Z').format('DD/MM/YYYY');
  expirationDate02 = moment('2023-09-08T21:59:00Z').format('DD/MM/YYYY');
  expirationDate01 = moment('2023-09-07T21:59:00Z').format('DD/MM/YYYY');
  expirationDate0 = moment('2023-09-06T21:59:00Z').format('DD/MM/YYYY');
  expirationDate1 = moment('2023-09-05T21:59:00Z').format('DD/MM/YYYY');
  expirationDate2 = moment('2023-09-04T21:59:00Z').format('DD/MM/YYYY');
  expirationDate3 = moment('2023-09-03T21:59:00Z').format('DD/MM/YYYY');
  expirationDate4 = moment('2023-09-02T21:59:00Z').format('DD/MM/YYYY');
  expirationDate5 = moment('2023-09-01T21:59:00Z').format('DD/MM/YYYY');
  expirationDate6 = moment('2023-08-31T21:59:00Z').format('DD/MM/YYYY');
}
