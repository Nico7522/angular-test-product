import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../fake-data/fake-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css',
})
export class AutocompleteComponent implements OnInit {
  productList!: Product[];
  filteredProduct!: any[];

  formGroup!: FormGroup;
  constructor(
    private _productService: ProductService,
    private _formBuilder: FormBuilder
  ) {
    this.formGroup = this._formBuilder.group({
      product: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this._productService
      .getProduct()
      .subscribe((products) => (this.productList = products));
  }

  filterProduct(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.productList as any[]).length; i++) {
      let product = (this.productList as Product[])[i];
      if (product.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(product);
      }
    }

    this.filteredProduct = filtered;
  }
}
