import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { NgxUtilitarioRcltModule } from 'ngx-utilitario-rclt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { NumberToArrayPipe } from './pipe/number-to-array.pipe';
import { FormsModule } from './forms/forms.module';
import { NgxUtilitarioChatModule } from './chat/ngx-utilitario-rclt-chat.module';
import { NgxUtilitarioMenuModule } from './menu/ngx-utilitario-menu.module';
import { NgxUtilitarioCardsModule } from './cards/cards.module';
import { NgxUtilitarioDynamicModule } from './dynamic-component/ngx-utilitario-rclt-dynamic.module';
import { NgxUtilitarioIconsModule } from './icons/ngx-utilitario-rclt-icons.module';
import { NgxUtilitarioModalModule } from './modal/ngx-utilitario-rclt-modal.module';
import { ChatDetailAddComponent } from './chat/chat/chat-detail-add/chat-detail-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatDetailComponent } from './chat/chat/chat-detail/chat-detail.component';




@NgModule({
  declarations: [
    /**
     * component
     */
    AppComponent,
    // ChatDetailComponent,
    /**
     * pipes
     */
    NumberToArrayPipe
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    NgxUtilitarioChatModule,
    NgxUtilitarioMenuModule,
    NgxUtilitarioCardsModule,
    NgxUtilitarioDynamicModule,
    NgxUtilitarioIconsModule,
    NgxUtilitarioModalModule
    // NgxUtilitarioRcltModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
