import { Injectable } from '@angular/core';
import {Product} from "../models/Product";
import {featuredProducts, latestProducts} from "../store/product-store";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getFeaturedProducts(): Product[] {
    return featuredProducts;
  }

  public getLatestdProducts(): Product[] {
    return latestProducts;
  }
}
