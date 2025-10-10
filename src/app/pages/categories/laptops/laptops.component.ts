import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CartService } from '../../../services/cart.service'; // ✅ Correct import
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
  selector: 'app-laptops',
  standalone: true,
  imports: [CommonModule, HttpClientModule,NavbarComponent, FooterComponent],
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss']
})
export class LaptopsComponent {
  products: Product[] = [];

  constructor(private http: HttpClient, private cartService: CartService) {} // ✅ Injected CartService

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<Product[]>('https://electronics-backend-project-1.onrender.com/api/products').subscribe({
      next: (data) => {
        this.products = (data ?? []).filter(p => p.category === 'Laptops, Tablets & PCs');
      },
      error: (err) => console.error('Error fetching products', err),
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product); // ✅ Call service
    alert(product.name + ' added to cart!');
  }
}
