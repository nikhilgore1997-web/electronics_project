import { Component, HostListener } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NgForOf, MatIconModule],
  template: `
    <aside [class.expanded]="expanded" class="sidebar">
      <ul>
        <li *ngFor="let item of menuItems">
          <div class="icon-container">
            <mat-icon>{{ item.icon }}</mat-icon>
          </div>
          <span class="label" *ngIf="expanded">{{ item.label }}</span>
        </li>
      </ul>
    </aside>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  expanded = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.expanded = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.expanded = false;
  }

  menuItems = [
    { icon: 'menu', label: 'All Categories' },
    { icon: 'laptop', label: 'Laptops, Tablets & PCs' },
    { icon: 'desktop_windows', label: 'Computer & Office' },
    { icon: 'memory', label: 'Hardware & Components' },
    { icon: 'smartphone', label: 'Smartphones' },
    { icon: 'sports_esports', label: 'Games & Entertainment' },
    { icon: 'tv', label: 'TV & Hi-Fi' },
    { icon: 'camera_alt', label: 'Photo & Video' },
    { icon: 'kitchen', label: 'Home Appliance' }
  ];
}
