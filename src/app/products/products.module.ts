import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { FormsModule } from '@angular/forms';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { SiteLayoutModule } from '../site-layout/site-layout.module';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    ViewAllProductComponent,
    ViewProductComponent,
    ViewProductByCategoryComponent,
    ViewProductByDateComponent,
    AddToCartComponent,
     
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    SiteLayoutModule
  ],
         
})
export class ProductsModule { }
