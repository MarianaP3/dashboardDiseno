import { Component } from '@angular/core';
import { MainHeaderComponent } from "../main-header/main-header.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-dash-board',
  standalone: true,
  imports: [
    MainHeaderComponent,
    FooterComponent
  ],
  templateUrl: './main-dash-board.component.html',
  styleUrl: './main-dash-board.component.css'
})
export class MainDashBoardComponent {

}
