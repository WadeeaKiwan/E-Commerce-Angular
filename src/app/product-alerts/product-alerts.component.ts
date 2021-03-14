import { Component, Input, OnInit } from "@angular/core";
import { Product } from "../types";

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

// To implement lifecycle on the components:
export class ProductAlertsComponent implements OnInit {


  // Pass data from the parent component
  // In cases where the compiler can’t eliminate `null` or `undefined`, we can use the type assertion operator to manually remove them. The syntax is postfix `!`
  @Input() product!: Product;
  
  constructor() {}

    ngOnInit() {
      
    }

}