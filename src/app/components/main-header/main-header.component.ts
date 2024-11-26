import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProfileComponent } from '../header-modals/profile/profile.component';
import { NotificationsComponent } from '../header-modals/notifications/notifications.component';
import { CreateContentComponent } from '../header-modals/create-content/create-content.component';
import { NavMainHeaderComponent } from '../nav-main-header/nav-main-header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    ProfileComponent,
    NotificationsComponent,
    CreateContentComponent,
    NavMainHeaderComponent,
    RouterLink,
  ],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css',
})
export class MainHeaderComponent {
  @Input() courseTitle: string = 'DISEÑO DE INTERFACES';

  /* Para modal de crear material */
  isModalOpen = false; // Controla si el modal está abierto
  openModalCreate(): void {
    this.isModalOpen = true; // Abre el modal
  }
  closeModalCreate(): void {
    this.isModalOpen = false;
  }

  /* Para modal de perfil */
  isModalProfileOpen = false;
  openModalProfile(): void {
    this.isModalProfileOpen = true;
  }
  closeModalProfile(): void {
    this.isModalProfileOpen = false;
  }

  /* Para modal de notificaciones */
  isModalNotiOpen = false;
  openModalNoti(): void {
    this.isModalNotiOpen = true;
  }
  closeModalNoti(): void {
    this.isModalNotiOpen = false;
  }
}
