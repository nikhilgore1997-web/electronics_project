import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { FooterComponent } from '@app/footer/footer.component';

@Component({
  selector: 'app-outlet',
  standalone: true,
  imports: [CommonModule,NavbarComponent, FooterComponent],
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.scss']
})
export class OutletComponent {
  outletProducts = [
    { name: 'Laptop - HP Pavilion', price: 45000, oldPrice: 55000, offer: '20% OFF', image: 'https://m.media-amazon.com/images/I/71z-sJ936PL._AC_UY327_FMwebp_QL65_.jpg' },
    { name: 'Smartphone - OnePlus 10', price: 32000, oldPrice: 38000, offer: '15% OFF', image: 'https://m.media-amazon.com/images/I/71BoiXkrEmL._AC_UY327_FMwebp_QL65_.jpg' },
    { name: 'Gaming Console', price: 25000, oldPrice: 30000, offer: '17% OFF', image: 'https://m.media-amazon.com/images/I/71Mj4xd0YML._AC_UY327_FMwebp_QL65_.jpg' },
    { name: 'Smart TV - 50inch', price: 38000, oldPrice: 42000, offer: '10% OFF', image: 'https://m.media-amazon.com/images/I/91o8Aapsq2L._SX569_.jpg' }
  ];
}
