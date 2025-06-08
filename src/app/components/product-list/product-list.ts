import { Component } from '@angular/core';
import { ProductModel } from '../../model/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products!: ProductModel[];

  constructor() {
    this.products = [
      new ProductModel('Samsung Mobile', 1000, 'some description', false),
      new ProductModel(
        'Apple iPhone 14',
        1200,
        'Latest iPhone with A15 Bionic chip',
        true
      ),

      new ProductModel(
        'Dell Inspiron Laptop',
        850,
        '15.6-inch display, 8GB RAM, 512GB SSD',
        true
      ),

      new ProductModel(
        'Sony WH-1000XM5 Headphones',
        350,
        'Noise-cancelling wireless headphones',
        false
      ),

      new ProductModel(
        'Samsung Smart TV 55"',
        999,
        '4K UHD LED Smart TV with HDR',
        true
      ),
    ];
  }
}
