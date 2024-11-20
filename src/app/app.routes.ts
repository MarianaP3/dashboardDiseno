import { Routes } from '@angular/router';
import { ResPaswComponent } from './components/res-pasw/res-pasw.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "respasw", component: ResPaswComponent},
    {path: "login", component: LoginComponent}
];
