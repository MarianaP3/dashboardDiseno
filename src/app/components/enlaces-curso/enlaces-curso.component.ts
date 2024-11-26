import { Component } from '@angular/core';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-enlaces-curso',
  standalone: true,
  imports: [MainHeaderComponent, FooterComponent, CommonModule],
  templateUrl: './enlaces-curso.component.html',
  styleUrls: ['./enlaces-curso.component.css'], // Corrige "styleUrl" a "styleUrls"
})
export class EnlacesCursoComponent {
  // Lista de enlaces del curso
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

  // Manejo de acción para agregar/enviar un enlace
  onAgregarEnlace(id: number): void {
    console.log(`Acción realizada para el enlace con ID: ${id}`);
    alert(`Acción ejecutada en el enlace: ${id}`);
    // Aquí puedes integrar la lógica adicional que necesites (navegar, abrir modal, etc.)
  }
}
