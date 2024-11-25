import { Component } from '@angular/core';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-dash-board-mobile',
  standalone: true,
  imports: [
    MainHeaderComponent,
    FooterComponent
  ],
  templateUrl: './main-dash-board-mobile.component.html',
  styleUrl: './main-dash-board-mobile.component.css'
})
export class MainDashBoardMobileComponent {

}
