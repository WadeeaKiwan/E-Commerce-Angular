import { Component } from "@angular/core";
import { products } from "../products";
import { Product } from "../types";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})

export class ProductListComponent {
  products: Product[] = products;

  share() {
    alert('The product has been shared!');
  };
}
