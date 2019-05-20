import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDetalleAgregarComponent } from './chat-detalle-agregar.component';

describe('ChatDetalleAgregarComponent', () => {
  let component: ChatDetalleAgregarComponent;
  let fixture: ComponentFixture<ChatDetalleAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDetalleAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDetalleAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
