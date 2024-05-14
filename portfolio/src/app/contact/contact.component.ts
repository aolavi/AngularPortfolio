import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    constructor() { }

    showAlert() {
      alert('Här ska man navigeras till en sida med ett kontaktformulär. Denna håller på att implementeras.');
    }
}
