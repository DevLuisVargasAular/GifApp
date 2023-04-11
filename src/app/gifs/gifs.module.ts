import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent
    
  ],
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],
  exports:[
    GifsPageComponent
  ]
})
export class GifsModule { }
