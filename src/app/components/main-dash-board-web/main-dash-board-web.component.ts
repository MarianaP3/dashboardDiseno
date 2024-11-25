import { Component } from '@angular/core';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-dash-board-web',
  standalone: true,
  imports: [
    MainHeaderComponent,
    FooterComponent
  ],
  templateUrl: './main-dash-board-web.component.html',
  styleUrl: './main-dash-board-web.component.css'
})
export class MainDashBoardWebComponent {

}
