import {Component, Input, OnInit} from '@angular/core';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() product: ProductModel;

  submitted = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.product); }
}
