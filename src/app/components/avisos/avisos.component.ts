import { Component } from '@angular/core';
import { MainHeaderComponent } from "../main-header/main-header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-avisos',
  standalone: true,
  imports: [MainHeaderComponent, FooterComponent],
  templateUrl: './avisos.component.html',
  styleUrl: './avisos.component.css'
})
export class AvisosComponent {

}
