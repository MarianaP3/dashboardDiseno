import { Component } from '@angular/core';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VideoModalComponent } from '../video-modal/video-modal.component'; // Importar el modal
import { NewLinkComponent } from '../new-link/new-link.component';

@Component({
  selector: 'app-enlaces-curso',
  standalone: true,
  imports: [
    MainHeaderComponent,
    FooterComponent,
    CommonModule,
    RouterModule,
    NewLinkComponent, // Importar el componente NewLink como modal
    VideoModalComponent,
  ],
  templateUrl: './enlaces-curso.component.html',
  styleUrls: ['./enlaces-curso.component.css'],
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

  // Estados para los modales
  isVideoModalOpen = false;
  selectedId: number | null = null;

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  // Abrir el modal de video
  openVideoModal() {
    this.isVideoModalOpen = true;
  }

  // Cerrar el modal de video
  closeVideoModal() {
    this.isVideoModalOpen = false;
  }
}
