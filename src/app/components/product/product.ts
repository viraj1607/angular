import { Component, Input } from '@angular/core';
import { ProductModel } from '../../model/product';

@Component({
  selector: 'product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  product!: ProductModel;
  @Input() name!: string;
  @Input() price!: number;
  @Input() description!: string;
  @Input() inStock!: boolean;

  constructor() {
    // this.product = new ProductModel(
    //   1,
    //   'Samsung Mobile',
    //   1000,
    //   'njsad jadunajkwdjnkj jknasjda jnkjnjkandkjsd hkdingfguihfr hdsfhohsifwe fuihjn esfhoweirf ',
    //   true
    // );
  }

  ngOnInit(){
    this.product = new ProductModel(
      this.name,
      this.price,
      this.description,
      this.inStock
    );
  }

  f1=():void=>{
    console.log("the function got invoked on "+this.product.name)
  }
}
