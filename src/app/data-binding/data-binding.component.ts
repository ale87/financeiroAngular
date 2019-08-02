import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  username: String = ''

  constructor() { }

  ngOnInit() {
  }

  isEmpty() {
    return this.username.length < 1
  }

  resetInput() {
    this.username = ''
  }

  // get username(): String {
  //    return this._username
  // }

  // set username(nome: String) {
  //   this.username = nome
  // }
}
