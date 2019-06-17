import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDotComponent } from './menu-dot.component';
import { MatMenuModule, MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';

describe('MenuDotComponent', () => {
  let component: MenuDotComponent;
  let fixture: ComponentFixture<MenuDotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDotComponent ],
      imports:[
        MatMenuModule,
        MatIconModule,
        CommonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
