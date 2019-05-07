import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsImgTextTresDivComponent } from './cards-img-text-tres-div.component';

describe('CardsImgTextTresDivComponent', () => {
  let component: CardsImgTextTresDivComponent;
  let fixture: ComponentFixture<CardsImgTextTresDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsImgTextTresDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsImgTextTresDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
