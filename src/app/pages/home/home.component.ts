import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { CarouselBasicComponent } from '../../carousel-basic/carousel-basic.component';
import { FooterComponent } from '../../footer/footer.component';

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
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    NavbarComponent,
    SidebarComponent,
    CarouselBasicComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  sidebarExpanded = false;

  constructor(private http: HttpClient) {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<Product[]>('http://localhost:5000/api/products').subscribe({
      next: (data) => {
        this.products = data ?? [];
        this.filteredProducts = this.products; // initially show all
      },
      error: (err) => console.error('Error fetching products', err),
    });
  }

  // Filter products by category
  filterByCategory(category: string) {
    if (category === 'All') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(p => p.category === category);
    }
  }
}
