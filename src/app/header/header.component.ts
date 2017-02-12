import { Component, OnInit } from '@angular/core';
import { DatosPeticionService } from '../datos-peticion.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    busqueda = "";
  constructor(private conecxion: DatosPeticionService) { }

  ngOnInit() {
    
  }
    
    enviarNombre(){
        this.conecxion.obtenerBusqueda(this.busqueda);
    }

}
