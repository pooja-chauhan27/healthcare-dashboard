import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './shared/layout/default-layout/default-layout.component';
import { authGuard } from './shared/auth-guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // {
  //   path: '',
  //   pathMatch: 'full',
  //   canActivate: [authGuard],
  //   component: DefaultLayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('./pages/user/user.module').then(
  //           (module) => module.UserModule
  //         ),
  //     },
  //   ],
  // },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [authGuard],
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
    canActivate: [authGuard],
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
