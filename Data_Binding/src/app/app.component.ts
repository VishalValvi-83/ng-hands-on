import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data_Binding';

  logoURL = 'https://angular.io/assets/images/logos/angular/angular.png';
  description = 'This is a simple Angular application demonstrating data binding.';
  onButtonClick() {
    alert('Button clicked!');
  }
  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log('Input changed:', inputElement.value);
  }
  inputValue = 'Some Value';

}
