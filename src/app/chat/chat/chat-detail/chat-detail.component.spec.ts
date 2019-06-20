import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDetailComponent } from './chat-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatDetailAddComponent } from '../chat-detail-add/chat-detail-add.component';

describe('ChatDetailComponent', () => {
  let component: ChatDetailComponent;
  let fixture: ComponentFixture<ChatDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChatDetailComponent,
        ChatDetailAddComponent,
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('pruebas a la funcion dayLine', () => {
    it('Debe retornar true ya que son fechas diferente', () => {
      expect(component.dayLine(new Date(), 0)).toBeFalsy();
    });
    it('Debe retornar false ya que son fechas diferente', () => {
      expect(component.dayLine(new Date(), 1)).toBeTruthy();

    });
  });
});
