import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [
    FooterComponent,
    MainHeaderComponent,
    ModalDeleteComponent,
    RouterLink,
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
}
