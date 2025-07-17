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
  student = [
    { id: 1, name: 'Dipak', age: 26 },
    { id: 2, name: 'Dev', age: 30 },
    { id: 3, name: 'Vishal', age: 21 },
    { id: 4, name: 'Sagar', age: 28 },
    { id: 5, name: 'Sanjay', age: 24 }
  ];
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
    //task 5
    console.log("Student who is older than 25:");
    for (let i = 0; i < this.student.length; i++) {
      if (this.student[i].age > 25) {
        console.log(this.student[i]);
      }
    }
    //task 6
    let tries: number = 3;
    do {
      console.log("Login successful " + tries + " tries left.");
      tries--;
      if (tries === 0) {
        console.log("No more tries left.");
      }

    } while (tries > 0)
  }

}

