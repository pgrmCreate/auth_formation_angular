import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.css']
})
export class ProductRatingComponent {
    targetProduct: any = {};
    constructor(private productService: ProductService) {
        this.targetProduct = productService.pickedProduct;
    }
}
