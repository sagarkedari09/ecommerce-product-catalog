import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart-service.service';
import { ProductItemComponent } from "../product-item/product-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  constructor(private cartService: CartService) {}

  addToCart(product: Product, quantity: number): void {
    try {
      this.cartService.addToCart(product, quantity);
      alert(`${product.name} added to cart.`);
    } catch (error) {
      alert(error);
    }
  }
}
