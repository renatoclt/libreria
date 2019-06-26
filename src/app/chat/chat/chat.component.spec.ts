import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
// tslint:disable-next-line: max-line-length
import { ReactiveFormsModule } from '@angular/forms';
import { ChatSearchComponent } from './chat-search/chat-search.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatListDetailComponent } from './chat-list-detail/chat-list-detail.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { ChatDetailAddComponent } from './chat-detail-add/chat-detail-add.component';
import { ChatDetailMessageComponent } from './chat-detail-message/chat-detail-message.component';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChatComponent,
        ChatSearchComponent,
        ChatListComponent,
        ChatListDetailComponent,
        ChatDetailComponent,
        ChatDetailAddComponent,
        ChatDetailMessageComponent,],
      imports: [
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
