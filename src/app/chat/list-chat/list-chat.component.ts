import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rclt-list-chat',
  templateUrl: './list-chat.component.html',
  styleUrls: ['./list-chat.component.css']
})
export class ListChatComponent implements OnInit {
  imagen:string = './assets/test.jpg';
  constructor() { }

  ngOnInit() {
  }

}
