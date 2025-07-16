import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    console.log("AppComponent initialized");
    this.greet();
  }

  title = 'first-ng-app';
  description = 'This is my first Angular application.';

  //object
  students = [
    { id: 1, name: 'JS', age: 20 },
    { id: 2, name: 'SB', age: 22 },
    { id: 3, name: 'AK', age: 23 },

  ]
  //function
  greet() {
    console.log("hello world");
  }

  //function with parameters
  greetUser(name: string) {
    console.log(`Hello, vishal!`);
  }
  //function with return type
  getFullName(): string {
    return "hello world";
  }
}

