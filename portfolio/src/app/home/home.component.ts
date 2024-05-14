import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    constructor() { }

    showAlert() {
      alert('Här ska man navigeras till en sida med mer information om Anton. Denna håller på att implementeras.');
    }
}
