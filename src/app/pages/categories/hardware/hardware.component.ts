import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Product { _id: string; name: string; category: string; brand: string; price: number; description?: string; imageUrl?: string; stock: number; }

@Component({
  selector: 'app-hardware',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.scss']
})
export class HardwareComponent {
  products: Product[] = [];
  constructor(private http: HttpClient) { this.fetchProducts(); }

  fetchProducts(): void {
    this.http.get<Product[]>('http://localhost:5000/api/products').subscribe({
      next: (data) => this.products = (data ?? []).filter((p) => p.category === 'Hardware & Components'),
      error: (err) => console.error('Error fetching products', err),
    });
  }
}
