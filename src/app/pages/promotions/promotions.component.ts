import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { FooterComponent } from '@app/footer/footer.component';

@Component({
  selector: 'app-promotions',
  standalone: true,
  imports: [CommonModule,NavbarComponent, FooterComponent],
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent {}
