import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent implements OnInit {

  mensaje = 'Redirigiéndote a nuestro formulario de soporte...';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Mostrar el mensaje 1.5 segundos antes de abrir el formulario
    setTimeout(() => {
      window.open(
        'https://sanmateoedu-support.freshdesk.com/support/tickets/new?ticket_form=aquarium',
        '_blank'
      );
      this.router.navigate(['/dashboard']); // redirige de vuelta al dashboard
    }, 1500);
  }
}
