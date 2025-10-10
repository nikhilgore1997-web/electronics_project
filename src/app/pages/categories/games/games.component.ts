import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CartService } from '../../../services/cart.service'; // ✅ Import CartService
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
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, HttpClientModule,NavbarComponent, FooterComponent],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  products: Product[] = [];

  // ✅ Inject CartService
  constructor(private http: HttpClient, private cartService: CartService) {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<Product[]>('https://electronics-backend-project-1.onrender.com/api/products').subscribe({
      next: (data) => {
        this.products = (data ?? []).filter(p => p.category === 'Games & Entertainment');
      },
      error: (err) => console.error('Error fetching products', err),
    });
  }

  // ✅ Add to cart function
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}
