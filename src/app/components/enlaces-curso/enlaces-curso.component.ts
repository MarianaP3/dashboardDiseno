import { Component } from '@angular/core';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VideoModalComponent } from '../video-modal/video-modal.component'; // Importar el modal

@Component({
  selector: 'app-enlaces-curso',
  standalone: true,
  imports: [
    MainHeaderComponent,
    FooterComponent,
    CommonModule,
    RouterModule,
    VideoModalComponent, // Agregar el modal como dependencia
  ],
  templateUrl: './enlaces-curso.component.html',
  styleUrls: ['./enlaces-curso.component.css'], // Corrige "styleUrl" a "styleUrls"
})
export class EnlacesCursoComponent {
  enlaces = [
    {
      id: 1,
      titulo: 'Exploring Interface Design',
      descripcion: 'Información del PDF',
    },
    {
      id: 2,
      titulo: 'UI/UX Design Library',
      descripcion: 'Acceso a la biblioteca de UI/UX',
    },
    {
      id: 3,
      titulo: 'UI Design Fundamentals',
      descripcion: 'Información del vídeo',
    },
    {
      id: 4,
      titulo: 'Página principal de Figma',
      descripcion: 'Información de la página',
    },
  ];

  isModalOpen = false; // Control del estado del modal
  selectedId: number | null = null; // ID del enlace seleccionado

  // Manejo de acción para agregar/enviar un enlace
  onAgregarEnlace(id: number): void {
    console.log(`Acción realizada para el enlace con ID: ${id}`);
    this.selectedId = id; // Guardar el ID seleccionado
    this.isModalOpen = true; // Abrir el modal
  }

  // Cierra el modal
  closeModal(): void {
    this.isModalOpen = false;
    this.selectedId = null; // Limpiar el ID seleccionado
  }
}
