import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDetailAddComponent } from './chat-detail-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ChatDetailAddComponent', () => {
  let component: ChatDetailAddComponent;
  let fixture: ComponentFixture<ChatDetailAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDetailAddComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDetailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });
  it('deberia tener la propiedad disabled al iniciar ', () => {
    const submitEL: DebugElement = fixture.debugElement.query(By.css('#txt_message'));
    expect(submitEL.nativeElement.disabled).toBe(true);
  });
  it('deberia disablear el input', () => {
    component.disabled = 0;
    const submitEL: DebugElement = fixture.debugElement.query(By.css('#txt_message'));
    expect(submitEL.nativeElement.disabled).toBe(false);
  });
});
