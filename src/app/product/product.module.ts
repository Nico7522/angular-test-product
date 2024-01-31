import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductComponent as ProductComponentStandalone } from '../shared/product/product.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ProductComponent, InsertProductComponent],
  imports: [CommonModule, ProductRoutingModule, ProductComponentStandalone],
})
export class ProductModule {}
