import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import {ProductModel} from '../models/product.model';
import {ProductsService} from '../services/products.service';
declare var $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ProductModel[];
  selectedProduct: ProductModel;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getProducts('', 'se', 1, true).subscribe((products: ProductModel[]) => this.products = products);
  }

  onSelect(product: ProductModel) {
    this.selectedProduct = product;
  }

}
