import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(private elementRef: ElementRef) {}

    scrollToProjects() {
        const projectsElement = document.getElementById('projects');
        if (projectsElement) {
            projectsElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    scrollToContact() {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
            contactElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
}