import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectScrollComponent } from './perfect-scroll.component';

describe('PerfectScrollComponent', () => {
  let component: PerfectScrollComponent;
  let fixture: ComponentFixture<PerfectScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfectScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
