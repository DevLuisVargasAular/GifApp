import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BuscarGifs } from 'src/app/gifs/interfaces/gifs.interface';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

   constructor(private gifService:GifsService){}
  
  get historial(){
    return this.gifService.historial
  }
  buscar(query:string){
    return this.gifService.buscarGifs(query)
   
  
    
  }
}
