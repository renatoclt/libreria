import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDetailPreviewComponent } from './chat-detail-preview.component';
import { NgxUtilitarioPipesModule } from '../../../pipe/ngx-utilitario-rclt-pipes.module';
import { NgxUtilitarioPerfectScrollModule } from '../../../perfect-scroll/ngx-utilitario-rclt-perfect-scroll.module';
describe('ChatDetailPreviewComponent', () => {
  let component: ChatDetailPreviewComponent;
  let fixture: ComponentFixture<ChatDetailPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDetailPreviewComponent ],
      imports: [
        NgxUtilitarioPipesModule,
        NgxUtilitarioPerfectScrollModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDetailPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
