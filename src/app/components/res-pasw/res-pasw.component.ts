import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-res-pasw',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './res-pasw.component.html',
  styleUrl: './res-pasw.component.css'
})
export class ResPaswComponent {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

}
