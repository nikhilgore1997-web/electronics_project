import { Component, HostListener } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NgForOf, MatIconModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  expanded = false;

  constructor(private router: Router) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.expanded = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.expanded = false;
  }

  // ✅ routes same as your navbar
  menuItems = [
    { icon: 'menu', label: 'All Categories', route: '/home' },
    { icon: 'laptop', label: 'Laptops, Tablets & PCs', route: '/categories/laptops' },
    { icon: 'desktop_windows', label: 'Computer & Office', route: '/categories/computer-office' },
    { icon: 'memory', label: 'Hardware & Components', route: '/categories/hardware' },
    { icon: 'smartphone', label: 'Smartphones', route: '/categories/smartphones' },
    { icon: 'sports_esports', label: 'Games & Entertainment', route: '/categories/games-entertainment' },
    { icon: 'tv', label: 'TV & Hi-Fi', route: '/categories/tv' },
    { icon: 'camera_alt', label: 'Photo & Video', route: '/categories/photo-video' },
    { icon: 'kitchen', label: 'Home Appliance', route: '/categories/home-appliance' }
  ];

  // ✅ navigate on button click
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
