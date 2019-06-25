import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDetailMessageComponent } from './chat-detail-message.component';

describe('ChatDetailMessageComponent', () => {
  let component: ChatDetailMessageComponent;
  let fixture: ComponentFixture<ChatDetailMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDetailMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDetailMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
