// documentacion.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-documentacion',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule],
  templateUrl: './documentacion.component.html',
  styleUrls: ['./documentacion.component.css']
})
export class DocumentacionComponent {
  docs = [
    { titulo: 'Manual de usuario', descripcion: 'Guía para el uso del sistema' },
    { titulo: 'Catalogo de servicios', descripcion: 'Pasos para instalar el entorno' },
    { titulo: 'Auditorias realizadas', descripcion: 'Respuestas a dudas comunes' }
  ];
}
