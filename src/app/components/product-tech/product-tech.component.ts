import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-tech',
  templateUrl: './product-tech.component.html',
  styleUrls: ['./product-tech.component.css']
})
export class ProductTechComponent {
    targetProduct: any = {};
    constructor(private productService: ProductService) {
        this.targetProduct = productService.pickedProduct;
    }
}
