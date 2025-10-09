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
  selector: 'app-photo-video',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoVideoComponent {
  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<Product[]>('https://electronics-backend-project-1.onrender.com/api/products').subscribe({
      next: (data) => {
        this.products = (data ?? []).filter(
          (p) => p.category === 'Photo & Video'
        );
      },
      error: (err) => console.error('Error fetching products', err),
    });
  }
}
