// preferencias.component.ts
import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-preferencias',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatSlideToggleModule, MatCardModule],
  templateUrl: './preferencias.component.html',
  styleUrls: ['./preferencias.component.css']
})
export class PreferenciasComponent {
  modoOscuro = false;

  constructor(private renderer: Renderer2) {}

  cambiarTema() {
    this.modoOscuro = !this.modoOscuro;
    if (this.modoOscuro) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }
}
