import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncodeComponent } from './encode/encode.component';
import { DecodeComponent } from './decode/decode.component';

@NgModule({
  declarations: [
    AppComponent,
    EncodeComponent,
    DecodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
