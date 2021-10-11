import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path : "", component: AppComponent, pathMatch: "full"},
  { path: "login", component: LoginComponent, pathMatch: "full"},
  { path: "principal", component: PrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
