import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDetailAddComponent } from './chat-detail-add.component';
import { ReactiveFormsModule } from '@angular/forms';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
