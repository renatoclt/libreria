import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ChatListComponent } from './chat-list.component';
import { ChatListDetailComponent } from '../chat-list-detail/chat-list-detail.component';
import { HighlightPipe } from '../../../pipe/highlight.pipe';
import { NgxUtilitarioPerfectScrollModule } from '../../../perfect-scroll/ngx-utilitario-perfect-scroll.module';
describe('ChatListComponent', () => {
  let component: ChatListComponent;
  let fixture: ComponentFixture<ChatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChatListComponent,
        ChatListDetailComponent,
        HighlightPipe
      ],
      imports: [
        ReactiveFormsModule,
        NgxUtilitarioPerfectScrollModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
