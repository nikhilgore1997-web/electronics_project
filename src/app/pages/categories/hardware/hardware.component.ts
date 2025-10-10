import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CartService } from '../../../services/cart.service'; // ✅ inject CartService
import { NavbarComponent } from '@app/navbar/navbar.component';
import { FooterComponent } from '@app/footer/footer.component';

interface Product {
  _id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  description?: string;
  imageUrl?: string;
  stock: number;
}

@Component({
  selector: 'app-hardware',
  standalone: true,
  imports: [CommonModule, HttpClientModule,NavbarComponent, FooterComponent],
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.scss']
})
export class HardwareComponent {
  products: Product[] = [];

  constructor(private http: HttpClient, private cartService: CartService) { // ✅ inject cartService
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<Product[]>('https://electronics-backend-project-1.onrender.com/api/products').subscribe({
      next: (data) => {
        this.products = (data ?? []).filter(p => p.category === 'Hardware & Components');
      },
      error: (err) => console.error('Error fetching products', err),
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}
