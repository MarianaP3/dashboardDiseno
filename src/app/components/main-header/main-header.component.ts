import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {
  @Input() courseTitle: string = 'DISEÑO DE INTERFACES'; 
  isModalOpen = false; // Controla si el modal está abierto

  openModal(): void {
    this.isModalOpen = true; // Abre el modal
  }

  closeModal(): void {
    this.isModalOpen = false; // Cierra el modal
  }
}
