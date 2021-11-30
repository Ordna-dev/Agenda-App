import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  contactos = new Subject<any[]>();

  constructor(private http: HttpClient) {
    this.getContactos();
  }

  getContactos() {
    this.http.get<any[]>("/api/v1/contactos")
    .subscribe(data => {
      this.contactos.next(data);
    });
  }

  crearContacto(crearRecurso){
    //return this.http.post("http://127.0.0.1:5000/api/v1/contactos", crearRecurso);
  }

}
