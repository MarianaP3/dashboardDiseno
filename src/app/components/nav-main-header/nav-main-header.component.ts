import { NgIf } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-nav-main-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './nav-main-header.component.html',
  styleUrl: './nav-main-header.component.css'
})
export class NavMainHeaderComponent {
  isDropdownOpen = false;
  @Input() nombreNav:String = "";

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  closeDropdown(): void {
    this.isDropdownOpen = false;
  }
}
