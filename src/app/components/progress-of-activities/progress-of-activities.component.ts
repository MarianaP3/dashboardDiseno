import { Component } from '@angular/core';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MainDashBoardWebComponent } from '../main-dash-board-web/main-dash-board-web.component';
import { ProgresoAlumnoComponent } from '../progreso-alumno/progreso-alumno.component';

@Component({
  selector: 'app-progress-of-activities',
  standalone: true,
  imports: [
    MainHeaderComponent,
    FooterComponent,
    RouterModule,
    CommonModule,
    MainDashBoardWebComponent,
    ProgresoAlumnoComponent 
  ],
  templateUrl: './progress-of-activities.component.html',
  styleUrls: ['./progress-of-activities.component.css'], // Corrige aquí la propiedad para "styleUrls"
})
export class ProgressOfActivitiesComponent {
  constructor(private router: Router) {}

  navigateToDash(): void {
    this.router.navigate(['/mainDash']);
  }

  /* Para modal de progreso del alumno */
  isModalOpen = false; // Controla si el modal está abierto
  openModalCreate(): void {
    this.isModalOpen = true; // Abre el modal
  }
  closeModalCreate(): void {
    this.isModalOpen = false;
  }
}
