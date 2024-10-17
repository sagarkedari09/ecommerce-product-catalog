import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product-service.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductService, HttpClient],
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.scss',
})
export class ProductCatalogComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.fetchProducts().subscribe({
      next: (data) => (this.products = data),
      error: (error) => console.error('Error fetching products:', error),
    });
  }
}
