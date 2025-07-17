import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
  description = 'This is a sample Angular application.';

  students = ['Dipak', 'Dev', 'Vishal', 'Sagar', 'Sanjay'];
  
  username: string = "user"
  password: number = 123;

  PaymentMethod(paymentMethod: string) {
    return `Payment processed via ${paymentMethod}`;

  }
  constructor() {
    //task 1
    console.log('AppComponent initialized');
    if (this.username == "user" && this.password == 123) {
      console.log("User is logged. Redirecting to Dashboard...");

    } else {
      console.log("Invalid credentials.");

    }
    // task 2
    let paymentMethod = this.PaymentMethod("Credit Card");
    console.log(paymentMethod);

    for (let i = 1; i <= 20; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
    //task 4
    while (this.students.length > 0) {
      console.log("student: " + this.students.pop());
    }
  }

}

