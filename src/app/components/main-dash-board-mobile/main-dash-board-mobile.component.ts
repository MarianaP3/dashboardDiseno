import { Component } from '@angular/core';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-dash-board-mobile',
  standalone: true,
  imports: [
    MainHeaderComponent,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './main-dash-board-mobile.component.html',
  styleUrl: './main-dash-board-mobile.component.css'
})
export class MainDashBoardMobileComponent {
  constructor(private router: Router) {}

  navigateToProgress(): void {
    this.router.navigate(['/progressOfActivities']);
  }
}
