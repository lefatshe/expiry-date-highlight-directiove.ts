import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { expiryDateHighlightDirective } from './expiry-date-hghlight-directive';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, expiryDateHighlightDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
