import { Component } from '@angular/core';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common'; // Para usar *ngIf o *ngFor si es necesario
import { MainDashBoardWebComponent } from '../main-dash-board-web/main-dash-board-web.component';


@Component({
  selector: 'app-progress-of-activities',
  standalone: true,
  imports: [MainHeaderComponent, FooterComponent, RouterModule, CommonModule, MainDashBoardWebComponent],
  templateUrl: './progress-of-activities.component.html',
  styleUrl: './progress-of-activities.component.css',
})
export class ProgressOfActivitiesComponent {}
