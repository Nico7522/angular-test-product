import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { InsertProductComponent } from './insert-product/insert-product.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'create', component: InsertProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
