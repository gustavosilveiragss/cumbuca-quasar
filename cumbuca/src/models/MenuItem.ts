export class MenuItem {
  menuItemId: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;

  constructor(
    menuItemId: number,
    name: string,
    price: number,
    description: string,
    imageUrl: string
  ) {
    this.menuItemId = menuItemId;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}
