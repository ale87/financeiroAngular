import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-color',
  templateUrl: './input-color.component.html',
  styleUrls: ['./input-color.component.css']
})

export class InputColorComponent implements OnInit {
  password: String = 'swordfish'
  showPassword: Boolean = false
  dates: String[] = []

  constructor() { }

  ngOnInit() {
  }
  
  toggle() {
    this.dates.push(new Date().toISOString())
    this.showPassword = !this.showPassword
  }

  getColor(date: String): Boolean {
    return this.findIndex(date)
  }

  getBackgroundColor(date: String): String {  
    return this.findIndex(date) ? 'blue' : 'transparent' 
  }
  
  findIndex(date: String): Boolean {
    return this.dates.findIndex(value => value === date) >= 4
  }
}
