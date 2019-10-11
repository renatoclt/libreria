import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { NgxUtilitarioFormstModule } from './forms/ngx-utilitario-rclt-forms.module';
import { NgxUtilitarioChatModule } from './chat/ngx-utilitario-rclt-chat.module';
import { NgxUtilitarioMenuModule } from './menu/ngx-utilitario-rclt-menu.module';
import { NgxUtilitarioCardsModule } from './cards/ngx-utilitario-rclt-cards.module';
import { NgxUtilitarioDynamicModule } from './dynamic-component/ngx-utilitario-rclt-dynamic.module';
import { NgxUtilitarioIconsModule } from './icons/ngx-utilitario-rclt-icons.module';
import { NgxUtilitarioModalModule } from './modal/ngx-utilitario-rclt-modal.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxUtilitarioPerfectScrollModule } from './perfect-scroll/ngx-utilitario-rclt-perfect-scroll.module';
import { NgxUtilitarioPipesModule } from './pipe/ngx-utilitario-rclt-pipes.module';
import { NgxUtilitarioMapboxModule } from './mapbox/ngx-utilitario-rclt-mapbox.module';
import { NgxUtilitarioGraphicsModule } from './graphics/ngx-utilitario-rclt-graphics.module';
import { ChartsModule } from 'ng2-charts';
import { NgxUtilitarioLoadingModule } from './loading/ngx-utilitario-rclt-loading.module';
import { LOADING_INDICATOR_CONFIG, DEFAULT_CONFIG } from './loading/loading.config';
import { SpinnerComponent } from './loading/spinner/spinner.component';
import { EllipsisComponent } from './loading/ellipsis/ellipsis.component';

@NgModule({
  declarations: [
    /**
     * component
     */
    AppComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    ChartsModule,
    AngularFontAwesomeModule,
    NgxUtilitarioFormstModule,
    NgxUtilitarioChatModule,
    NgxUtilitarioMenuModule,
    NgxUtilitarioCardsModule,
    NgxUtilitarioDynamicModule,
    NgxUtilitarioGraphicsModule,
    NgxUtilitarioIconsModule,
    NgxUtilitarioModalModule,
    NgxUtilitarioPerfectScrollModule,
    NgxUtilitarioPipesModule,
    NgxUtilitarioMapboxModule,
    NgxUtilitarioLoadingModule
  ],
  providers: [
    {provide: LOADING_INDICATOR_CONFIG, useValue: DEFAULT_CONFIG}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
