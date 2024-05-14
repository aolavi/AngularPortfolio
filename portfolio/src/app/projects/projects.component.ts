import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

    constructor() { }

    showAlert() {
      alert('Här ska man navigeras till en sida mer mer information och bilder om projektet. Denna håller på att implementeras.');
    }
}
