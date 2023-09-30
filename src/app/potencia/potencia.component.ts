import { Component } from '@angular/core';

@Component({
  selector: 'app-potencia',
  templateUrl: './potencia.component.html',
  styleUrls: ['./potencia.component.css']
})
export class PotenciaComponent {
  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  resultadoMensaje: string = '';
  proceso: string[] = [];

  calcularMulti(): void {
    const num1Numero = parseFloat(this.num1);
    const num2Numero = parseFloat(this.num2);

    if ((num1Numero) && (num2Numero)) {
      this.resultado = this.calcularMulti2(num1Numero, num2Numero);
      this.proceso = this.cadena(num1Numero, num2Numero);
      this.resultadoMensaje = `${this.proceso.join(' + ')} da en total ${this.resultado}`;
    } else {
      this.resultadoMensaje = '';
    }
  }

  calcularMulti2(num1: number, num2: number): number {
    let resultado = 0;

    switch (num2) {
      case 0:
        resultado = 0;
        break;
      case 1:
        resultado = num1;
        break;
      default:
        resultado = num1;
        for (let i = 2; i <= num2; i++) {
          resultado += num1;
        }
    }

    return resultado;
  }

  cadena(num1: number, num2: number): string[] {
    const proceso: string[] = [];

    for (let i = 1; i <= num2; i++) {
      proceso.push(num1.toString());
    }

    return proceso;
  }
}