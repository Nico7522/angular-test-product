import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-standalone',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() productName: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;
}
