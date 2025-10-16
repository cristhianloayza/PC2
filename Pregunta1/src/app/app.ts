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
  usuarios:{nombre:string,nacionalidad:string, contrasena: string}[]=[];

  nuevousuario={

    nombre:'',
    nacionalidad:'',
    contrasena:''


  };
 editIndex:number |null=null;
  registrar(){
    if (this.nuevousuario.nombre.trim() && this.nuevousuario.nacionalidad.trim() && this.nuevousuario.contrasena.trim()) {
      this.usuarios.push({...this.nuevousuario});
      this.nuevousuario={nombre:'',nacionalidad:'', contrasena:''};
    }
  }
  eliminar(i:number){
    this.usuarios.splice(i,1);
  }
 
editar(index:number)
{
  this.nuevousuario={...this.usuarios[index]};
  this.editIndex=index;
}

}
