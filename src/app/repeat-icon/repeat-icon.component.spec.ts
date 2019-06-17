import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatIconComponent } from './repeat-icon.component';
import { NumberToArrayPipe } from '../pipe/number-to-array.pipe';

describe('RepeatIconComponent', () => {
  let component: RepeatIconComponent;
  let fixture: ComponentFixture<RepeatIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatIconComponent, NumberToArrayPipe ],
      imports: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
