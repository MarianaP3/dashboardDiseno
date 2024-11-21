import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MainHeaderComponent } from '../main-header/main-header.component';

@Component({
  selector: 'app-grades',
  standalone: true,
  imports: [FooterComponent, MainHeaderComponent],
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.css'
})
export class GradesComponent {

}
