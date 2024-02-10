import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimengTestComponent } from './primeng-test.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

const routes: Routes = [
  {
    path: '',
    component: PrimengTestComponent,
    children: [{ path: 'autocomplete', component: AutocompleteComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimengTestRoutingModule {}
