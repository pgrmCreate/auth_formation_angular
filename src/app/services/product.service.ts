import {Injectable} from '@angular/core';
import {PRODUCTS} from "../mocks/mock-products";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    productList: any = PRODUCTS;
    pickedProduct : any = null;
    constructor() {
    }

    getProducts() {
        return this.productList;
    }
}
