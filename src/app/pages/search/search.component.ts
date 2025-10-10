import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service'; // ✅ import cart service

interface Product {
  _id: string;
  name: string;
  section: string;
  category: string;
  price: number;
  imageUrl: string;
  details: string;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  products: Product[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private cartService: CartService) { } // ✅ inject cart service

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'] || '';
      if (this.searchTerm) {
        this.searchProducts(this.searchTerm);
      }
    });
  }

  searchProducts(term: string) {
    this.loading = true;
    this.error = '';
    this.http.get<Product[]>(`http://localhost:5000/api/products/search?q=${term}`)
      .subscribe({
        next: (res) => {
          this.products = res;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Error fetching products';
          console.error(err);
          this.loading = false;
        }
      });
  }

  // ✅ Add to Cart
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}
