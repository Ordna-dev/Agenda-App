import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../api/contactos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  contactos = [];

  constructor(private contactosService: ContactosService, private http:HttpClient) {}

  ngOnInit() {
    this.contactosService.contactos.subscribe(contactos => {
      this.contactos = contactos;
    })
    //this.contactosService.getContactos();
  }

  post(nombre, telefono, correo, facebook, linkedin, twitter, foto) {
      /*const datos = {nombre: nombre.value, 
        telefono: telefono.value, 
        correo: correo.value, 
        facebook: facebook.value, 
        linkedin: linkedin.value, 
        twitter: twitter.value, 
        foto: foto.value}

      this.contactosService.crearContacto(datos).subscribe(data =>{
        console.log(data);
      });*/
  }
}

    /*console.log(JSON.stringify({nombre: nombre.value, 
      telefono: telefono.value, 
      correo: correo.value, 
      facebook: facebook.value, 
      linkedin: linkedin.value, 
      twitter: twitter.value, 
      foto: foto.value}))*/