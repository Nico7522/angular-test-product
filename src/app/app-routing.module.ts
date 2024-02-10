import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComeComponent } from './components/come/come.component';
import { QuitComponent } from './components/quit/quit.component';
import { alertGuard } from './components/alert.guard';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'secret',
    loadChildren: () =>
      import('./secret/secret.module').then((m) => m.SecretModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  { path: 'quit', canDeactivate: [alertGuard], component: QuitComponent },
  { path: 'come', component: ComeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
