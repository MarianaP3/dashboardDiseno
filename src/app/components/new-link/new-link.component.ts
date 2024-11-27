import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-link',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './new-link.component.html',
  styleUrls: ['./new-link.component.css'],
})
export class NewLinkComponent {
  @Input() isOpen: boolean = false; // Propiedad para controlar si el modal está abierto
  @Output() close = new EventEmitter<void>(); // Evento para cerrar el modal

  closeModal() {
    this.close.emit(); // Emitir el evento de cierre
  }
}
