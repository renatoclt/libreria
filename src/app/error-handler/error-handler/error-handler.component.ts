import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'ngx-utilitario-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss']
})
export class ErrorHandlerComponent implements OnInit {

  private isVisible = new Subject();
  dismiss$: Observable<{}> = this.isVisible.asObservable();

  constructor() { }

  ngOnInit() {
  }

}
