import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives';

  isVisible: boolean = true;
  Toggler = "Hide";

  toggleVisibility() {
    this.isVisible = !this.isVisible;
    this.Toggler = this.isVisible ? "Hide" : "Show";
  }

  items = ['Item 1', 'Item 2', 'Item 3'];

  students: { name: string, age: number }[] = [
    { name: 'Vishal', age: 20 },
    { name: 'DK', age: 22 },
    { name: 'RK', age: 21 }
  ];

}
