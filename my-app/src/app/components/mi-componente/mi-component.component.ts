import {Component} from '@angular/core';
@Component({
  //debe llevar dos componentes obligatorios
  selector:'mi-component',
  templateUrl:'./mi-component.component.html'
})//No llevar ';' aqui
export class MiComponente{
  public titulo: string;
  public comentario:string;
  public year:number;
  constructor(){
    this.titulo = "Hola mundo, soy MU COMPONENTe";
    this.comentario="Este es mi primer componente";
    this.year=2020;
    console.log("Componente mi-componente cargado !!");
    console.log(this.titulo,this.comentario,this.year);
  }
}
