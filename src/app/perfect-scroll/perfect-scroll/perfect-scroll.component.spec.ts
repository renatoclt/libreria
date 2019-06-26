import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectScrollComponent } from './perfect-scroll.component';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

describe('PerfectScrollComponent', () => {
  let component: PerfectScrollComponent;
  let fixture: ComponentFixture<PerfectScrollComponent>;
  const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    wheelPropagation: true
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfectScrollComponent ],
      imports: [PerfectScrollbarModule],
      providers: [
        {
          provide: PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
      ]
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
