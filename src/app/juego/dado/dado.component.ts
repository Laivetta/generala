import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  arrayNumero: number[] = [];
  arrayImagen: string[] = [];
  numero: number = 0;

  imagenNumeroIndividual: string = "";
  //= "../../../assets/" + this.numero  +".JPG";
  imagenNumeroArray: string = "";
  posicionArray: number = 0;

  constructor() {

  }

  ngOnInit(): void {
  }

  generar() {
    this.numero = Math.floor(Math.random() * 6) + 1;
    this.imagenNumeroIndividual = "../../../assets/" + this.numero + ".JPG";

    if (this.posicionArray <= 5) {
      this.arrayNumero[this.posicionArray] = this.numero;
      this.arrayImagen[this.posicionArray] = "../../../assets/" + this.numero + ".JPG"
      this.posicionArray++;
    } else {
      if ((this.arrayNumero[0] === this.arrayNumero[1]) && (this.arrayNumero[2] == this.arrayNumero[3]) && (this.arrayNumero[4] && this.arrayNumero[5]) && (this.arrayNumero[6]) == this.arrayNumero[1]) {
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
