import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  @Input() isOpen = false; // Recibe el estado del modal desde el padre
  @Output() close = new EventEmitter<void>(); // Emite evento para cerrar el modal

  onClose(): void {
    this.close.emit(); // Emite un evento al padre para cerrar el modal
  }
}
