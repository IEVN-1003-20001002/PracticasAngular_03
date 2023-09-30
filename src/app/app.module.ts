import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { ProductolistComponent } from './productos/productolist/productolist.component';
import { ProductoFilterPipe } from './productos/producto-filter.pipe';
import { OperasBasComponent } from './calculos/operas-bas/operas-bas.component';
import { PotenciaComponent } from './potencia/potencia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Suma2Component } from './calculos/suma2/suma2.component';
import { CinepolisComponent } from './cine/cinepolis/cinepolis.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductolistComponent,
    ProductoFilterPipe,
    OperasBasComponent,
    PotenciaComponent,
    Suma2Component,
    CinepolisComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
