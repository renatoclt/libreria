import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxRcltUtilitariosModule  } from 'ngx-rclt-utilitarios';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxRcltUtilitariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
