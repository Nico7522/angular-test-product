import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrl: './insert-product.component.css',
})
export class InsertProductComponent {
  productForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
    this.productForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.max(999999999.99)]],
    });
  }
}
