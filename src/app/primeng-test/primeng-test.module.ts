import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengTestRoutingModule } from './primeng-test-routing.module';
import { PrimengTestComponent } from './primeng-test.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputgroupComponent } from './inputgroup/inputgroup.component';
@NgModule({
  declarations: [
    PrimengTestComponent,
    AutocompleteComponent,
    InputgroupComponent,

    ModalLoginComponent,
  ],
  imports: [
    CommonModule,
    PrimengTestRoutingModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    DialogModule,
  ],
})
export class PrimengTestModule {}
