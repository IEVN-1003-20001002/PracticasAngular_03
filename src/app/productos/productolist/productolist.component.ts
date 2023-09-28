import { Component } from '@angular/core';
import { Productolist } from '../productolist';

@Component({
  selector: 'app-productolist',
  templateUrl: './productolist.component.html',
  styleUrls: ['./productolist.component.css']
})
export class ProductolistComponent {

imageWidth:number=50;
imageMargin:number=2;
mustraImg:boolean=true;
listFilter:string='Datos a mostrar';

showImage():void{
  this.mustraImg=!this.mustraImg;
}

  productos:Productolist[]=[
    {
    "Modelo" : 'Sentra',
    "Descripcion" : "4 puertas Familiar",
    "Year" : "febrero 2 2022",
    "Precio" : 12000,
    "Marca" : "Nissan",
    "Color" : "Azul",
    "ImageUrl" : "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_0c7166c16ff74073b65851f7f0b360ed.jpg"
  }, 
  {
    "Modelo" : 'R8',
    "Descripcion" : "2 puertas ",
    "Year" : "enero 6 2022",
    "Precio" : 240000,
    "Marca" : "Audi",
    "Color" : "Blanco",
    "ImageUrl" : "https://img.remediosdigitales.com/6ef0a1/audi-r8_v10_decennium-2019-1600-01/1366_2000.jpg"
  },
  {
    "Modelo" : 'Camaro',
    "Descripcion" : "2 puertas Camaro",
    "Year" : "Abril 8 2021",
    "Precio" : 89000,
    "Marca" : "Chevrolet",
    "Color" : "Amarillo",
    "ImageUrl" : "https://www.chevrolet.com.mx/content/dam/chevrolet/na/mx/es/index/performance/2023-camaro-coupe/mov/01-images/colorizer/jellies/red-hot.jpg?imwidth=960"
  }
  ]


}
