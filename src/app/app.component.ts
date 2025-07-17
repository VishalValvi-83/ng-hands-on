import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
  description = 'This is a sample Angular application.';
  // task
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


  }

}

