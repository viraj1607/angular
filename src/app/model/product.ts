export class ProductModel {
  constructor(
    public id: number = 0,
    public name: string = '',
    public price: number = 0,
    public description: string = '',
    public inStock: boolean = false
  ) {}
}
