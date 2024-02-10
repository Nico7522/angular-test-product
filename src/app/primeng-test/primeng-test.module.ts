import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengTestRoutingModule } from './primeng-test-routing.module';
import { PrimengTestComponent } from './primeng-test.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  declarations: [PrimengTestComponent, AutocompleteComponent],
  imports: [
    CommonModule,
    PrimengTestRoutingModule,
    ReactiveFormsModule,
    AutoCompleteModule,
  ],
})
export class PrimengTestModule {}
