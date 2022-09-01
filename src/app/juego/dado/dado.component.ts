import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {


  numero: number = 0;
  imagenNumeroIndividual: string = "";


  constructor() {

  }

  ngOnInit(): void {
  }

  @Output() emitirNuevoDado:  EventEmitter <number> = new EventEmitter();

  generar() {
    this.numero = Math.floor(Math.random() * 5) + 1;
    this.imagenNumeroIndividual = "../../../assets/" + this.numero + ".JPG";

    this.emitirNuevoDado.emit( this.numero);
    
    

  }

}
