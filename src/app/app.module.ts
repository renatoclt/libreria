import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxUtilitarioRcltModule } from 'ngx-utilitario-rclt';
import { CardsComponent } from './cards/cards.component'


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgxUtilitarioRcltModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
