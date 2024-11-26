import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { RouterLink } from '@angular/router';
import { ProgresoAlumnoComponent } from '../progreso-alumno/progreso-alumno.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [
    FooterComponent,
    MainHeaderComponent,
    ModalDeleteComponent,
    RouterLink,
    ProgresoAlumnoComponent,
    CommonModule
  ],
  templateUrl: './lista-alumnos.component.html',
  styleUrl: './lista-alumnos.component.css',
})
export class ListaAlumnosComponent {
  /* Para modal de eliminar */
  isModalDeleteOpen = false;
  openModalDelete(): void {
    this.isModalDeleteOpen = true;
  }
  closeModalDelete(): void {
    this.isModalDeleteOpen = false;
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
