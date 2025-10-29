import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 agrega esto

@Component({
  selector: 'app-cuenta',
  standalone: true, // 👈 marca el componente como standalone
  imports: [FormsModule], // 👈 agrega FormsModule aquí
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent {
  usuario = {
    nombre: 'Edinson Vega',
    email: 'edinson@mail.com',
    dni: '123456789',
    pais: 'Colombia',
    ciudad: 'Bogotá'
  };
}
