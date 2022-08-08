import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private productService: ProductService) { }

  featuredProducts!: Product[];
  latestProducts!: Product[];

  ngOnInit(): void {
    this.featuredProducts = this.productService.getFeaturedProducts();
    this.latestProducts = this.productService.getLatestdProducts();
  }

}
