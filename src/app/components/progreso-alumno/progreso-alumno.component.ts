import { NgIf } from '@angular/common';
import {
  Component,
  AfterViewInit,
  EventEmitter,
  Input,
  Output,
  ElementRef,
  ViewChild,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'progreso-alumno',
  templateUrl: './progreso-alumno.component.html',
  imports: [NgIf],
  standalone: true,
  styleUrls: ['./progreso-alumno.component.css'],
})
export class ProgresoAlumnoComponent {
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  @Input() isOpen = false; // Recibe el estado del modal desde el padre
  @Output() close = new EventEmitter<void>(); // Emite evento para cerrar el modal

  datos = [100, 80, 50, 90]; // Valores de los parciales
  etiquetas = ['Parcial 1', 'Parcial 2', 'Parcial 3', 'Parcial 4'];

  ngAfterViewInit() {
    this.dibujarGrafica();
  }

  ngOnChanges() {
    if (this.isOpen) {
      setTimeout(() => this.dibujarGrafica(), 0); // Llamamos al método después de renderizar
    }
  }  

  dibujarGrafica() {
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const ancho = canvas.width;
    const alto = canvas.height;

    // Configuración básica
    const margenIzquierdo = 50;
    const margenInferior = 30;
    const espacioBarras = 20;
    const anchoBarra =
      (ancho - margenIzquierdo - espacioBarras * (this.datos.length - 1)) /
      this.datos.length;
    const colorFondo = '#0B3B64';
    const colorBarras = '#0088cc';

    // Fondo
    ctx.fillStyle = colorFondo;
    ctx.fillRect(0, 0, ancho, alto);

    // Escala y etiquetas
    const maxValor = 100;
    const escalaY = (alto - margenInferior - 10) / maxValor;

    // Líneas horizontales
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    ctx.font = '12px Arial';
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i <= 100; i += 20) {
      const y = alto - margenInferior - i * escalaY;
      ctx.beginPath();
      ctx.moveTo(margenIzquierdo, y);
      ctx.lineTo(ancho, y);
      ctx.stroke();
      ctx.fillText(i.toString(), 10, y + 4);
    }

    // Dibujar barras
    this.datos.forEach((valor, index) => {
      const x = margenIzquierdo + index * (anchoBarra + espacioBarras);
      const y = alto - margenInferior - valor * escalaY;

      ctx.fillStyle = colorBarras;
      ctx.fillRect(x, y, anchoBarra, valor * escalaY);

      // Etiquetas de los parciales
      ctx.fillStyle = '#ffffff';
      ctx.fillText(this.etiquetas[index], x, alto - 10);
    });

    // Título
    ctx.font = '18px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText('GRÁFICA DEL PROGRESO DEL ALUMNO', ancho / 2, 20);
  }
  onClose(): void {
    this.close.emit(); // Emite un evento al padre para cerrar el modal
  }
}
