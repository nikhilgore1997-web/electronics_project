import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-dark text-white py-4 mt-5">
      <div class="container d-flex justify-content-between align-items-center flex-wrap">
        <p class="mb-0">&copy; 2025 My Electronics Shop</p>
        <div class="d-flex gap-3">
          <a href="#" class="text-white text-decoration-none">About Us</a>
          <a href="#" class="text-white text-decoration-none">Contact</a>
          <a href="#" class="text-white text-decoration-none">Privacy Policy</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer a:hover { text-decoration: underline; }
  `]
})
export class FooterComponent {}
