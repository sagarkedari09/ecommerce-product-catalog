import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCatalogComponent } from "./components/product-catalog/product-catalog.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductCatalogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce-product-catalog';
}
