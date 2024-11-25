import { Component } from '@angular/core';
import { MainHeaderComponent } from "../main-header/main-header.component";
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-dash-board',
  standalone: true,
  imports: [
    MainHeaderComponent,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './main-dash-board.component.html',
  styleUrl: './main-dash-board.component.css'
})
export class MainDashBoardComponent {
  constructor(private router: Router) {}

  navigateToProgress(): void {
    this.router.navigate(['/progressOfActivities']);
  }
}
