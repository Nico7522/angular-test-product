import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../fake-data/fake-data';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  productsList$!: Observable<Product[]>;
  constructor(private _productService: ProductService) {}
  ngOnInit(): void {
    this.productsList$ = this._productService.getProduct();
  }
}
