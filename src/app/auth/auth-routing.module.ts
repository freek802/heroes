import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/auth/pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/auth/pages/register-page/register-page.component';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: 'register',
        component: RegisterPageComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MaterialModule],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
