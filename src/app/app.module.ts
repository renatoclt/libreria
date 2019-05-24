import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { NgxUtilitarioRcltModule } from 'ngx-utilitario-rclt';
import { CardsComponent } from './cards/cards.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { CardsImgTextComponent } from './cards-img-text/cards-img-text.component';
import { CardsImgTextNdivComponent } from './cards-img-text-ndiv/cards-img-text-ndiv.component';
import { RepeatIconComponent } from './repeat-icon/repeat-icon.component';
import { NumberToArrayPipe } from './pipe/number-to-array.pipe';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from './forms/forms.module';
import { NgxUtilitarioChatModule } from './chat/ngx-utilitario-rclt-chat.module';
import { NgxUtilitarioMenuModule } from './menu/ngx-utilitario-menu.module';




@NgModule({
  declarations: [
    /**
     * component
     */
    AppComponent,
    CardsComponent,
    CardsImgTextComponent,
    CardsImgTextNdivComponent,
    RepeatIconComponent,    
    ModalComponent,
    /**
     * pipes
     */
    NumberToArrayPipe,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    NgxUtilitarioChatModule,
    NgxUtilitarioMenuModule
    // NgxUtilitarioRcltModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
