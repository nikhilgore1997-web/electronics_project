import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
  selector: 'app-computer-office',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './computer-office.component.html',
  styleUrls: ['./computer-office.component.scss']
})
export class ComputerOfficeComponent {
  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<Product[]>('http://localhost:5000/api/products').subscribe({
      next: (data) =>
        this.products = (data ?? []).filter(p => p.category === 'Computer & Office'),
      error: (err) => console.error('Error fetching products', err),
    });
  }
}
