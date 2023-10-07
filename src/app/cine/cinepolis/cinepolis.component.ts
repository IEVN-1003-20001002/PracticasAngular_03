import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css'],

})
export class CinepolisComponent {
  nombre: string = '';
  compradores: number = 0;
  opciones: number = 0;
  numBoletos: number = 0;

  totalPagar: number = 0;

  procesarCompra() {
    let limiteBoletos = this.compradores * 7;

    if (this.numBoletos <= limiteBoletos) {
      if (this.numBoletos > 5) {
        this.totalPagar = this.numBoletos * 12 * 0.85;
      } else if (this.numBoletos >= 3 && this.numBoletos <= 5) {
        this.totalPagar = this.numBoletos * 12 * 0.90;
      } else if (this.numBoletos < 3) {
        this.totalPagar = this.numBoletos * 12;
      }
      if (this.opciones == 1) {
        this.totalPagar = this.totalPagar * 0.90;
      }
    } else {
      alert(`El límite de boletos comprados por persona es de ${limiteBoletos}, No seas hambreado`);
    }
  }

  recargar() {
    location.reload();
  }
}