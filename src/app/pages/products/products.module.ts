import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsRoutingModule} from './products-routing.module';
import {StatModule, TodoModule} from '../../shared-component/modules/index';
import {ProductsComponent} from './products/products.component';
import {ProductFormComponent} from './product-form/product-form.component';
import {ProductsService} from './services/products.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StatModule,
    TodoModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    ProductFormComponent
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
