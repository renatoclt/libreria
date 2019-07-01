import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxUtilitarioFormstModule } from './forms/ngx-utilitario-rclt-forms.module';
import { NgxUtilitarioMenuModule } from './menu/ngx-utilitario-menu.module';
import { NgxUtilitarioCardsModule } from './cards/cards.module';
import { NgxUtilitarioDynamicModule } from './dynamic-component/ngx-utilitario-rclt-dynamic.module';
import { NgxUtilitarioIconsModule } from './icons/ngx-utilitario-rclt-icons.module';
import { NgxUtilitarioModalModule } from './modal/ngx-utilitario-rclt-modal.module';
import { NgxUtilitarioPerfectScrollModule } from './perfect-scroll/ngx-utilitario-perfect-scroll.module';
import { NgxUtilitarioPipesModule } from './pipe/ngx-utilitario-rclt-pipes.module';
import { NgxUtilitarioChatModule } from './chat/ngx-utilitario-rclt-chat.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AngularFontAwesomeModule,
    NgxUtilitarioFormstModule,
    NgxUtilitarioChatModule,
    NgxUtilitarioMenuModule,
    NgxUtilitarioCardsModule,
    NgxUtilitarioDynamicModule,
    NgxUtilitarioIconsModule,
    NgxUtilitarioModalModule,
    NgxUtilitarioPerfectScrollModule,
    NgxUtilitarioPipesModule
  ],
  exports: []
})
export class NgxUtilitarioRcltModule { }
