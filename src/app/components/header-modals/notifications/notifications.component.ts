import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NgIf],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent {
  @Input() isOpen = false; // Recibe el estado del modal desde el padre
  @Output() close = new EventEmitter<void>(); // Emite evento para cerrar el modal

  onClose(): void {
    this.close.emit(); // Emite un evento al padre para cerrar el modal
  }
}
