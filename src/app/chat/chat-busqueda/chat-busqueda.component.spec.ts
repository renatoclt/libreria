import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBusquedaComponent } from './chat-busqueda.component';

describe('ChatBusquedaComponent', () => {
  let component: ChatBusquedaComponent;
  let fixture: ComponentFixture<ChatBusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
