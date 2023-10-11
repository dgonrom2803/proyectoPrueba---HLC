import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numSecreto: number = 0;
  numUsuario: number = 0;
  txtMensaje: string = "";
  esCorrecto: boolean = false;

  constructor() {
    this.generarNumSecreto();
  }

  comprobarNumero(){
    console.log("click en el botón");
    console.log("NumUsuario=" + this.numUsuario);
    if(this.numUsuario == this.numSecreto){
      console.log("Ha acertado");
      this.txtMensaje = "¡Ha acertado!";
      this.esCorrecto = true;
    } else if (this.numUsuario > this.numSecreto){
      console.log("El número secreto es menor");
      this.txtMensaje = "El número secreto es MENOR";
    } else {
      console.log("El número secreto es mayor");
      this.txtMensaje = "El número secreto es MAYOR";
    }
  }

  generarNumSecreto(){
    this.numSecreto = Math.floor(Math.random()*100+1);
    console.log("numSecreto =" + this.numSecreto);
  }

  reiniciar(){
    this.generarNumSecreto();
    this.esCorrecto = false;
    this.numUsuario = 0;
    this.txtMensaje = "";
  }

}
