import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDetailPreviewComponent } from './chat-detail-preview.component';

describe('ChatDetailPreviewComponent', () => {
  let component: ChatDetailPreviewComponent;
  let fixture: ComponentFixture<ChatDetailPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDetailPreviewComponent ]
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
