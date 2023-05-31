import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/auth/pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/auth/pages/register-page/register-page.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, MaterialModule],
})
export class AuthModule {}
