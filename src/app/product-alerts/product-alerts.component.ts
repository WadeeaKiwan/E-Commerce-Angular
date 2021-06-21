import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
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

  // We define a property named `notify` with an @Output() decorator and an instance of EventEmitter() that allows the component to emit an event when the value of the `notify` property changes
  @Output() notify = new EventEmitter();
  
  constructor() {}

    ngOnInit() {
      
    }

}