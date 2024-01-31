import { Injectable } from '@angular/core';
import { Product, Products } from '../fake-data/fake-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProduct(): Observable<Product[]> {
    return of(Products);
  }
}
