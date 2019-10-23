import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';
import { OverlayComponent } from '../overlay/overlay.component';
import { LOADING_INDICATOR_CONFIG, DEFAULT_CONFIG } from '../loading.config';
import { SpinnerComponent } from '../spinner/spinner.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('LoadingComponent', () => {
  // let component: LoadingComponent;
  // let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent , OverlayComponent, SpinnerComponent ],
      providers: [{provide: LOADING_INDICATOR_CONFIG, useValue: DEFAULT_CONFIG}]
    });
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [SpinnerComponent]
      }
    })
    .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LoadingComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
