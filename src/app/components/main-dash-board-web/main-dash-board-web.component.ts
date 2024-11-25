import { Component } from '@angular/core';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-dash-board-web',
  standalone: true,
  imports: [
    MainHeaderComponent,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './main-dash-board-web.component.html',
  styleUrl: './main-dash-board-web.component.css'
})
export class MainDashBoardWebComponent {
  constructor(private router: Router) {}

  navigateToProgress(): void {
    this.router.navigate(['/progressOfActivities']);
  }
}
