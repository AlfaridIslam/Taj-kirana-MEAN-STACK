// navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleNavbar() {
    // Add any toggle logic if needed
    console.log('Navbar toggled'); // Placeholder, add your logic here
  }

  navigateTo(route: string) {
    switch (route) {
      case 'home':
        // Navigate to the 'home' component
        this.router.navigate(['/']);
        break;
      case 'products/fruits':
      case 'products/foodgrains':
      case 'products/snacks':
      case 'products/beverages':
      case 'products/eggs':
        // Navigate to the respective product category components
        this.router.navigate([route]);
        break;
      case 'contacts':
        // Navigate to the 'contacts' component
        this.router.navigate(['/contacts']);
        break;
      default:
        // For other routes, use the default navigation
        this.router.navigate([route]);
        break;
    }
  }
}
