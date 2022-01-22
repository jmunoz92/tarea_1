import { Component, OnInit } from '@angular/core';
import { ServicioListaService } from '../../servicio/servicio-lista.service';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {

  constructor(private listado:ServicioListaService) { }
  

    retorno = this.listado.Lista();

 


  ngOnInit(): void {
  }

}
