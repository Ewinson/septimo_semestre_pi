import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
})
export class InformacionComponent {
  displayedColumns: string[] = ['id', 'zona', 'ciudad', 'inconveniente', 'descripcion'];

  dataSource = [
    { id: 1, zona: 'Norte', ciudad: 'La Guajira', inconveniente: 'Escasez de agua', descripcion: 'En esta zona no llega la suficiente agua potable.' },
    { id: 2, zona: 'Sur', ciudad: 'La Guajira', inconveniente: 'Escasez de agua', descripcion: 'El gobernante de esta zona no implementa acciones para ayudar con la escasez de agua.' },
    { id: 3, zona: 'Centro', ciudad: 'La Guajira', inconveniente: 'Escasez de agua', descripcion: 'No hay apoyo por parte del gobieno del país.' },
    { id: 4, zona: 'Occidente', ciudad: 'La Guajira', inconveniente: 'Escasez de agua', descripcion: 'No hay suficientes fuentes de agua potable en la zona.' },
    { id: 5, zona: 'Oriente', ciudad: 'La Guajira', inconveniente: 'Fallo limpieza de agua', descripcion: 'La entidad encargada de la limpieza y purificación del agua no esta haciendo su trabajo.' },
    { id: 6, zona: 'Norte', ciudad: 'La Guajira', inconveniente: 'Falta de electricidad', descripcion: 'Se registran cortes de energía frecuentes en la zona norte.' },
  { id: 7, zona: 'Sur', ciudad: 'La Guajira', inconveniente: 'Falta de electricidad', descripcion: 'No se han realizado mejoras en la infraestructura eléctrica local.' },
  { id: 8, zona: 'Centro', ciudad: 'La Guajira', inconveniente: 'Fallas de transporte', descripcion: 'El transporte público es limitado y poco confiable.' },
  { id: 9, zona: 'Occidente', ciudad: 'La Guajira', inconveniente: 'Fallas de transporte', descripcion: 'No existen rutas suficientes para conectar todas las localidades.' },
  { id: 10, zona: 'Oriente', ciudad: 'La Guajira', inconveniente: 'Problemas de salud', descripcion: 'Falta de hospitales y clínicas con atención suficiente.' },
  
  { id: 11, zona: 'Norte', ciudad: 'La Guajira', inconveniente: 'Problemas de salud', descripcion: 'Escasez de médicos y especialistas en la región.' },
  { id: 12, zona: 'Sur', ciudad: 'La Guajira', inconveniente: 'Inseguridad', descripcion: 'Aumento de robos y violencia en la zona sur.' },
  { id: 13, zona: 'Centro', ciudad: 'La Guajira', inconveniente: 'Inseguridad', descripcion: 'Falta de presencia policial y vigilancia en la zona.' },
  { id: 14, zona: 'Occidente', ciudad: 'La Guajira', inconveniente: 'Deforestación', descripcion: 'Se talan árboles sin control, afectando el ecosistema.' },
  { id: 15, zona: 'Oriente', ciudad: 'La Guajira', inconveniente: 'Deforestación', descripcion: 'La flora y fauna local están en riesgo por la tala indiscriminada.' },
  
  { id: 16, zona: 'Norte', ciudad: 'La Guajira', inconveniente: 'Falta de educación', descripcion: 'Escuelas sin recursos y docentes insuficientes.' },
  { id: 17, zona: 'Sur', ciudad: 'La Guajira', inconveniente: 'Falta de educación', descripcion: 'Alumnos con bajos niveles de aprendizaje por falta de apoyo.' },
  { id: 18, zona: 'Centro', ciudad: 'La Guajira', inconveniente: 'Contaminación', descripcion: 'Ríos y terrenos contaminados por desechos industriales.' },
  { id: 19, zona: 'Occidente', ciudad: 'La Guajira', inconveniente: 'Contaminación', descripcion: 'La basura no se recolecta con regularidad.' },
  { id: 20, zona: 'Oriente', ciudad: 'La Guajira', inconveniente: 'Escasez de alimentos', descripcion: 'Los precios de los alimentos básicos son muy altos.' },
  
  { id: 21, zona: 'Norte', ciudad: 'La Guajira', inconveniente: 'Escasez de alimentos', descripcion: 'No hay suficientes mercados ni distribución de alimentos.' },
  { id: 22, zona: 'Sur', ciudad: 'La Guajira', inconveniente: 'Falta de vivienda', descripcion: 'Existen familias sin techo adecuado en la zona.' },
  { id: 23, zona: 'Centro', ciudad: 'La Guajira', inconveniente: 'Falta de vivienda', descripcion: 'Construcciones improvisadas y asentamientos informales.' },
  { id: 24, zona: 'Occidente', ciudad: 'La Guajira', inconveniente: 'Problemas de saneamiento', descripcion: 'Sistemas de alcantarillado deficientes o inexistentes.' },
  { id: 25, zona: 'Oriente', ciudad: 'La Guajira', inconveniente: 'Problemas de saneamiento', descripcion: 'Aguas residuales contaminan el entorno de la comunidad.' }
  ];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral(
      'excel',
      sanitizer.bypassSecurityTrustHtml(`
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="#21a366">
          <path d="M4 4h16v16H4z" fill="none"/>
          <path d="M6 6h7v12H6z" fill="#107c41"/>
          <path d="M13 6h5v12h-5z" fill="#21a366"/>
          <path d="M9 8l1.5 3L9 14h1l1-2.5L12 14h1L10.5 8z" fill="white"/>
        </svg>
      `)
    );
  }

  exportarExcel() {
    const ws = XLSX.utils.json_to_sheet(this.dataSource);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Información');
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    saveAs(blob, 'informacion.xlsx');
  }
}
