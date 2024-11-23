import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-grades',
  standalone: true,
  imports: [FooterComponent, MainHeaderComponent, RouterLink],
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.css',
})
export class GradesComponent {}
