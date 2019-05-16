import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDetalleComponent } from './chat-detalle.component';

describe('ChatDetalleComponent', () => {
  let component: ChatDetalleComponent;
  let fixture: ComponentFixture<ChatDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
