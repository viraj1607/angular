import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './components/product/product';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Product, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'first-angular';
}
