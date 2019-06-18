import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListComponent } from './chat-list.component';
import { ChatDetalleComponent } from '../chat-list-detail/chat-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ChatListaComponent', () => {
  let component: ChatListComponent;
  let fixture: ComponentFixture<ChatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChatListComponent,
        ChatDetalleComponent
      ],
      imports: [
        ReactiveFormsModule
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
