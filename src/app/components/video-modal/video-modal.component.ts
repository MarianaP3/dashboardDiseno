import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video-modal',
  standalone: true,
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.css'],
})
export class VideoModalComponent {
  @Input() isOpen: boolean = false; // Propiedad para controlar si el modal está abierto
  @Output() close = new EventEmitter<void>(); // Evento para cerrar el modal

  closeModal() {
    this.close.emit(); // Emitir el evento de cierre
  }
}
