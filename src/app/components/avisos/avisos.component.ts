import { Component } from '@angular/core';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-avisos',
  standalone: true,
  imports: [MainHeaderComponent, FooterComponent, RouterLink],
  templateUrl: './avisos.component.html',
  styleUrl: './avisos.component.css',
})
export class AvisosComponent {}
