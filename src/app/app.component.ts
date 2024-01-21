import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
  ],
  template: `
    <main class="main">
      <header class="header">
        <a [routerLink]="['/']" class="header__logo">
          <img class="header__logo-icon" src="/assets/n-logo.webp" alt="logo" aria-hidden="true">
          <h1 class="header__logo-title">edbazen</h1>
        </a>
        <ul class="main__menu" [class.active]="isActive">
          <li class="main__menu-item">
            <a [routerLink]="['/']" class="main__menu-item-link active">
                <span>Home</span>
                <i class="fa-solid fa-chevron-right"></i>
            </a>
          </li>
          <li class="main__menu-item">
            <a href="#" class="main__menu-item-link">
              <span>Belangrijke informatie</span>
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </li>
          <li class="main__menu-item">
            <a href="#" class="main__menu-item-link">
              <span>Documentatie</span>
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </li>
          <li class="main__menu-item">
            <a href="#" class="main__menu-item-link">
              <span>HR - Afas</span>
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </li>
          <li class="main__menu-item">
            <a href="#" class="main__menu-item-link">
              <span>Contact</span>
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </li>
        </ul>
        <a class="menu__hamburger" href="#menu" [class.active]="isActive" (click)="toggleActive($event)">
          <i class="fa-solid fa-bars menu__hamburger-open"></i>
          <i class="fa-solid fa-xmark menu__hamburger-close"></i>
        </a>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';

  isActive: boolean = false;

  toggleActive(event: Event) {
    event.preventDefault();
    this.isActive = !this.isActive;
  }
}
