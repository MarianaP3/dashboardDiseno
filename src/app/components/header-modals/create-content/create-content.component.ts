import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [NgIf],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.css',
})
export class CreateContentComponent {
  @Input() isOpen = false; // Recibe el estado del modal desde el padre
  @Output() close = new EventEmitter<void>(); // Emite evento para cerrar el modal
  @Input() courseTitle: string = 'DISEÑO DE INTERFACES';

  onClose(): void {
    this.close.emit(); // Emite un evento al padre para cerrar el modal
  }
}
