import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { NgxUtilitarioRcltModule } from 'ngx-utilitario-rclt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { RepeatIconComponent } from './repeat-icon/repeat-icon.component';
import { NumberToArrayPipe } from './pipe/number-to-array.pipe';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from './forms/forms.module';
import { NgxUtilitarioChatModule } from './chat/ngx-utilitario-rclt-chat.module';
import { NgxUtilitarioMenuModule } from './menu/ngx-utilitario-menu.module';
import { NgxUtilitarioCardsModule } from './cards/cards.module';




@NgModule({
  declarations: [
    /**
     * component
     */
    AppComponent,
    RepeatIconComponent,
    ModalComponent,
    /**
     * pipes
     */
    NumberToArrayPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    NgxUtilitarioChatModule,
    NgxUtilitarioMenuModule,
    NgxUtilitarioCardsModule
    // NgxUtilitarioRcltModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
