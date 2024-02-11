import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimengTestComponent } from './primeng-test.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { InputgroupComponent } from './inputgroup/inputgroup.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';

const routes: Routes = [
  {
    path: '',
    component: PrimengTestComponent,
    children: [
      { path: 'autocomplete', component: AutocompleteComponent },
      { path: 'inputgroup', component: InputgroupComponent },
      // { path: 'login', component: ModalLoginComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimengTestRoutingModule {}
