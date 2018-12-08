import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import {User} from '../../../models/usuario.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crearusuarioscoordinadores',
  templateUrl: './crearusuarioscoordinadores.component.html',
  styleUrls: ['./crearusuarioscoordinadores.component.css']
})
export class CrearusuarioscoordinadoresComponent implements OnInit {
  user: User;
  error;
  constructor(private usuariosService : UsuariosService, private router : Router) {
    this.user=new User();
   }

  ngOnInit() {
  }

  submit(){
    let carrera = this.user.id_carrera.split('_');
    this.user.id_carrera=carrera[0];
    this.user.desc_carrera=carrera[1];
    this.user.nombre={
      nombres:this.user.nombres,
      apellidos:this.user.apellidos
    }
    console.log(this.user);
    this.usuariosService.agregarUsuario(this.user).subscribe((auth)=>{
      if(typeof auth['error']!=='undefined'){
        this.error=auth['error'];
        return;
      };
      this.router.navigate(['/usuarios']);  
    })
  }

}
