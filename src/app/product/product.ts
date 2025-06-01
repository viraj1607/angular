import { Component } from '@angular/core';
import { ProductModel } from '../model/product';

@Component({
  selector: 'product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  product!: ProductModel

  constructor(){
    this.product=new ProductModel(1,"Samsung Mobile",1000)
  }
}
