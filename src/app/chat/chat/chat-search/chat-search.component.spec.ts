import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChatSearchComponent } from './chat-search.component';
import { NgxUtilitarioFormstModule } from '../../../forms/ngx-utilitario-rclt-forms.module';

describe('ChatSearchComponent', () => {
  let component: ChatSearchComponent;
  let fixture: ComponentFixture<ChatSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSearchComponent ],
      imports: [
        BrowserAnimationsModule,
         NgxUtilitarioFormstModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
