import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Product { _id: string; name: string; category: string; brand: string; price: number; description?: string; imageUrl?: string; stock: number; }

@Component({
  selector: 'app-home-appliance',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home-appliance.component.html',
  styleUrls: ['./home-appliance.component.scss']
})
export class HomeApplianceComponent {
  products: Product[] = [];
  constructor(private http: HttpClient) { this.fetchProducts(); }

  fetchProducts(): void {
    this.http.get<Product[]>('http://localhost:5000/api/products').subscribe({
      next: (data) => this.products = (data ?? []).filter((p) => p.category === 'Home Appliance'),
      error: (err) => console.error('Error fetching products', err),
    });
  }
}

