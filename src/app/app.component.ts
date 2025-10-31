import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  esLogin = false;
  nombreUsuario = 'Usuario';
  menuAbierto = false; // controla el dropdown

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.esLogin = event.urlAfterRedirects === '/login';
      }
    });

    document.addEventListener('click', (event) => this.onClickOutside(event));
  }

  toggleDropdown() {
    this.menuAbierto = !this.menuAbierto;
  }

  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-menu')) {
      this.menuAbierto = false;
    }
  }
}
