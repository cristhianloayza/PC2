import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  numeros:{num1:number , num2:number }[]=[];
  sumar(){

  };
  restar(){

  };
  multiplicar()
  {

  };

  dividir(){

  };
  raiz(){

  };
}
