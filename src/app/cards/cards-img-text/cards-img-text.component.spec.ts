import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsImgTextComponent } from './cards-img-text.component';

describe('CardsImgTextComponent', () => {
  let component: CardsImgTextComponent;
  let fixture: ComponentFixture<CardsImgTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsImgTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsImgTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
