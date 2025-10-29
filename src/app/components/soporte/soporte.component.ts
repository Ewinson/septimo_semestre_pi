import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent {
  asunto = '';
  descripcion = '';
  prioridad = '';
  tipo = '';

  constructor(private dialog: MatDialog) {}

  enviarTicket() {
    if (this.asunto && this.descripcion && this.prioridad && this.tipo) {
      this.dialog.open(DialogoConfirmacion);
      this.asunto = '';
      this.descripcion = '';
      this.prioridad = '';
      this.tipo = '';
    }
  }
}

@Component({
  selector: 'dialogo-confirmacion',
  standalone: true,
  template: `
    <h2 mat-dialog-title>✅ Ticket Enviado</h2>
    <mat-dialog-content>
      Tu solicitud fue enviada correctamente. Nuestro equipo la atenderá pronto.
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close color="primary">Cerrar</button>
    </mat-dialog-actions>
  `,
  imports: [MatDialogModule, MatButtonModule]
})
export class DialogoConfirmacion {}
