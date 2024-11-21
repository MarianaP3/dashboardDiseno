import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  standalone: true,
  imports: [NgIf],
  templateUrl: './modal-delete.component.html',
  styleUrl: './modal-delete.component.css'
})
export class ModalDeleteComponent {

  @Input() isOpen = false; // Recibe el estado del modal desde el padre
  @Output() close = new EventEmitter<void>(); // Emite evento para cerrar el modal

  onClose(): void {
    this.close.emit(); // Emite un evento al padre para cerrar el modal
  }

  

}
