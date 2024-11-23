import { Routes } from '@angular/router';
import { ResPaswComponent } from './components/res-pasw/res-pasw.component';
import { LoginComponent } from './components/login/login.component';
import { MainDashBoardComponent } from './components/main-dash-board/main-dash-board.component';
import { AvisosComponent } from './components/avisos/avisos.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { GradesComponent } from './components/grades/grades.component';

export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "respasw", component: ResPaswComponent},
    {path: "login", component: LoginComponent},
    {path: "mainDash", component: MainDashBoardComponent},
    {path: "avisos", component: AvisosComponent},
    {path: "listaalumnos", component: ListaAlumnosComponent},
    {path: "grades", component: GradesComponent}
];
