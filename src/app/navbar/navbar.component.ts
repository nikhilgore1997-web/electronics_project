import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() menuToggle = new EventEmitter<void>();

  cartCount: number = 0;
  searchTerm: string = ''; // Search input binding

  constructor(private router: Router) {}

  onMenuToggle() {
    this.menuToggle.emit();
  }

  onLogout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  onSearch() {
    if (this.searchTerm.trim()) {
      // Navigate to search page with query param
      this.router.navigate(['/search'], { queryParams: { q: this.searchTerm } });
    }
  }
}
