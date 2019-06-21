import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * Componente que buscara palabras o chats
 */
@Component({
  selector: 'ngx-utilitario-chat-search',
  templateUrl: './chat-search.component.html',
  styleUrls: ['./chat-search.component.scss']
})
export class ChatSearchComponent implements OnInit {

  searchForm: FormGroup;

  /**
   * @ignore
   */
  constructor(private formBuilder: FormBuilder) { }

  /**
   * @ignore
   */
  ngOnInit() {
    this.createForm();
  }

  /**
   * Creamos el form
   */
  createForm() {
    this.searchForm = this.formBuilder.group({
      search: ''
    });
  }

}
