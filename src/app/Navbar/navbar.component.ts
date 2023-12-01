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
  }

  navigateTo(route: string) {
    if (route === 'beverages') {
      // Navigate to the 'beverages' component
      this.router.navigate(['/beverages']);
    } else {
      // For other routes, use the default navigation
      this.router.navigate([route]);
    }
  }
}
