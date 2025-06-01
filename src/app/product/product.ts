import { Component } from '@angular/core';

@Component({
  selector: 'product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  name:string="Samsung Mobile";
  price:number=1000;
}
