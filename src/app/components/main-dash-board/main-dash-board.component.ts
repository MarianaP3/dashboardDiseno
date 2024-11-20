import { Component } from '@angular/core';
import { MainHeaderComponent } from "../main-header/main-header.component";

@Component({
  selector: 'app-main-dash-board',
  standalone: true,
  imports: [MainHeaderComponent],
  templateUrl: './main-dash-board.component.html',
  styleUrl: './main-dash-board.component.css'
})
export class MainDashBoardComponent {

}
