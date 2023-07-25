import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './shared/layout/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/user/user.module').then(
            (module) => module.UserModule
          ),
      },
    ],
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/admin/admin.module').then(
            (module) => module.AdminModule
          ),
      },
    ],
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/user/user.module').then(
            (module) => module.UserModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
