import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: { product: Product; quantity: number }[] = [];

  addToCart(product: Product, quantity: number): void {
    if (quantity <= 0) {
      throw new Error('Quantity must be greater than zero.');
    }
    const existingProduct = this.cart.find(item => item.product.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      this.cart.push({ product, quantity });
    }
  }

  getCart(): { product: Product; quantity: number }[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
  }
}
