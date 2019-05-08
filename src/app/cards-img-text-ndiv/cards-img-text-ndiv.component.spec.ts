import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsImgTextNdivComponent } from './cards-img-text-ndiv.component';

describe('CardsImgTextNdivComponent', () => {
  let component: CardsImgTextNdivComponent;
  let fixture: ComponentFixture<CardsImgTextNdivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsImgTextNdivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsImgTextNdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
