import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  
  numero: number = 0;
  
  arrayNumero: number[] = [];
  arrayImagen: string[] = [];

  imagenNumeroIndividual: string = "";
 
  imagenNumeroArray: string = "";
  posicionArray: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  agregarAlArrayNumeros( parametro : number ){  //estoy agarrando  por parametro 

    this.numero = parametro;
    this.imagenNumeroIndividual = "../../../assets/" + this.numero + ".JPG";

    if (this.posicionArray <= 4) {
      this.arrayNumero[this.posicionArray] = this.numero;
      this.arrayImagen[this.posicionArray] = "../../../assets/" + this.numero + ".JPG"
      this.posicionArray++;
    } else {
      if ((this.arrayNumero[0] === this.arrayNumero[1]) && (this.arrayNumero[2] == this.arrayNumero[3]) && (this.arrayNumero[4] && this.arrayNumero[1]) ) {
        alert("GANO")
        this.arrayNumero = [];
        this.arrayImagen = [];
        this.posicionArray = 0; 
      }
      else {
        alert("juego terminado");
        this.arrayNumero = [];
        this.arrayImagen = [];
        this.posicionArray = 0;
        
      }
    }

  }

}

