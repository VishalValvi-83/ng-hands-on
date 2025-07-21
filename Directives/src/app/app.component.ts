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
}
