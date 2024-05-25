import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'after-login',
    children: [
      {
        path: '',
        loadChildren: () => import('./features/after-login/after-login.module').then((m) => m.AfterLoginModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'after-login', // or 404 module
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
