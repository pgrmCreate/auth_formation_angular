import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
    targetProduct: any = {};
    constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
        console.log(this.productService.getProducts())
        const searching = this.productService.getProducts()
                              .filter((i: any) => i.id.toString() === this.activatedRoute.snapshot.paramMap.get('id'));

        if(searching.length > 0) {
            this.targetProduct = searching[0];
            this.productService.pickedProduct = this.targetProduct;
        }
    }
}
