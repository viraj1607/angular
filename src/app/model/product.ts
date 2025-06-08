export class ProductModel {

  static nextId = 1;
  id: number;
  constructor(
    public name: string = '',
    public price: number = 0,
    public description: string = '',
    public inStock: boolean = false
  ) {
    this.id = ProductModel.nextId++;
  }
}
