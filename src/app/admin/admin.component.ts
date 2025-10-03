import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

interface Product {
  _id?: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  description?: string;
  imageUrl?: string;
  stock: number;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  products: Product[] = [];
  product: Product = { name: '', category: '', brand: '', price: 0, stock: 0 };
  editMode = false;
  message: string = '';
  error: string = '';
  username: string = '';
  role: string = '';

  constructor(private http: HttpClient, private router: Router) {
    this.fetchProducts();
    this.username = localStorage.getItem('username') || '';
    this.role = localStorage.getItem('role') || '';
  }

  fetchProducts() {
    this.http.get<Product[]>('https://electronics-backend-project-1.onrender.com/api/products')
      .subscribe({
        next: data => this.products = data,
        error: err => this.error = '❌ Error fetching products'
      });
  }

  addProduct() {
    if (!this.product.name || !this.product.category || !this.product.brand || this.product.price <= 0) {
      this.error = '⚠️ Please fill all required fields';
      return;
    }

    if (!this.editMode) {
      this.http.post<Product>('https://electronics-backend-project-1.onrender.com/api/products', this.product)
        .subscribe({
          next: () => {
            this.message = '✅ Product added successfully!';
            this.error = '';
            this.resetForm();
            this.fetchProducts();
          },
          error: () => this.error = '❌ Error adding product'
        });
    } else {
      this.updateProduct();
    }
  }

  editProduct(p: Product) {
    this.product = { ...p };
    this.editMode = true;
    this.message = '';
    this.error = '';
  }

  updateProduct() {
    if (!this.product._id) return;
    this.http.put<Product>(`https://electronics-backend-project-1.onrender.com/api/products/${this.product._id}`, this.product)
      .subscribe({
        next: () => {
          this.message = '✅ Product updated successfully!';
          this.error = '';
          this.resetForm();
          this.fetchProducts();
          this.editMode = false;
        },
        error: () => this.error = '❌ Error updating product'
      });
  }

  deleteProduct(id: string) {
    this.http.delete(`https://electronics-backend-project-1.onrender.com/api/products/${id}`)
      .subscribe({
        next: () => {
          this.message = '🗑️ Product deleted successfully!';
          this.error = '';
          this.fetchProducts();
        },
        error: () => this.error = '❌ Error deleting product'
      });
  }

resetForm() {
  this.product = { 
    name: '', 
    category: '',  // ✅ Reset category
    brand: '', 
    price: 0, 
    stock: 0,
    imageUrl: '',
    description: ''
  };
  this.editMode = false;
}

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
