import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  termeBDR: string = '';

  constructor(private router : Router) {}

  rechercher(): void {
    if (this.termeBDR.trim()) {
      this.router.navigate(['/artisans'], {
        queryParams: { search: this.termeBDR }
      });
    }
  }

}
