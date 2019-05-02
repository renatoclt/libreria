import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRcltUtilitariosComponent } from './ngx-rclt-utilitarios.component';

describe('NgxRcltUtilitariosComponent', () => {
  let component: NgxRcltUtilitariosComponent;
  let fixture: ComponentFixture<NgxRcltUtilitariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRcltUtilitariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRcltUtilitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
