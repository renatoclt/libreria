import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListaComponent } from './chat-lista.component';

describe('ChatListaComponent', () => {
  let component: ChatListaComponent;
  let fixture: ComponentFixture<ChatListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
