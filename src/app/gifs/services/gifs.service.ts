import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuscarGifs, Gif } from '../interfaces/gifs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey     :string  ="3c5PL5F64qCr63c9fHDGDVwHn9tmO7Hm&q"
  private servicioUrl:string ="https://api.giphy.com/v1/gifs"
  private _historial :string[]=[];
  public resultados  :Gif[] = []

  get historial(){
   
    return [...this._historial];
  }

  constructor(private http:HttpClient){
    this._historial=JSON.parse(localStorage.getItem('historial')!)||[]
    this.resultados=JSON.parse(localStorage.getItem('resultados')!)||[]
  //  if( localStorage.getItem('historial')){
  //    this._historial=JSON.parse(localStorage.getItem('historial')!);
  //  }
  }

  buscarGifs(query:string){
    query=query.trim().toLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10);

      localStorage.setItem('historial',JSON.stringify(this._historial))
      
      // console.log(this._historial)
    }
    const params =new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','10').set('q',query);
    console.log(params.toString())

    this.http.get<BuscarGifs>(`${this.servicioUrl}/search?api_key=${ this.apiKey }=${ query }&limit=10`)
    .subscribe((resp) =>{
      // console.log(resp.data);
      this.resultados=resp.data;
      localStorage.setItem('resultados',JSON.stringify(this.resultados))
    })
   
  }

  
}
