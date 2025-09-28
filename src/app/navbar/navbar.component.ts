// src/app/navbar/navbar.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true, // ✅ required
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() menuToggle = new EventEmitter<void>();

  onMenuToggle() {
    this.menuToggle.emit();
  }

  onLogout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
}
