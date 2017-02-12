import { Component, OnInit } from '@angular/core';
import { DatosPeticionService } from '../datos-peticion.service';

@Component({
  selector: 'app-content-champs',
  templateUrl: './content-champs.component.html',
  styleUrls: ['./content-champs.component.css'],
    providers: [ DatosPeticionService ]
})
export class ContentChampsComponent implements OnInit {
    datosDelCampeon:any;
    nombre:string;
    imagenCampeon:any;
    procesadoCampeones:any = [];
    historiaCampeon:string;
    pistasAliados:any = [];
  constructor(private servicioChamps: DatosPeticionService) {
      this.historiaCampeon = "";
      this.pistasAliados = [];
     this.servicioChamps.obtenerCampeones().subscribe(
     data => {this.procesaChamps(data);this.datosDelCampeon = data;}
     );
      
      this.servicioChamps.mandarBusqueda().subscribe(
          data => {this.nombre = data}
      );
      /*Aquí obtengo la imagen
      this.servicioChamps.obtenerImagen('Aatrox').subscribe(
        data =>{this.imagenCampeon = data}  
      )*/
  };

    
  ngOnInit() {
  }
    
    /*Obtenemos en lore(la historia)*/
   obtenerInformacion(){
       for (let i in this.procesadoCampeones){
           if(this.procesadoCampeones[i].key==this.nombre){
               this.historiaCampeon = this.procesadoCampeones[i].lore;
               console.log(this.pistasAliados);
               break;
           }
       }
       return this.historiaCampeon;
   }
    
    /*Obtengo los consejos para los aliados*/
    obtenerAlytips(){
        
        for (let i in this.procesadoCampeones){
            if(this.procesadoCampeones[i].key==this.nombre){
                for(let j in this.procesadoCampeones[i].allytips){
                    this.pistasAliados.push(this.procesadoCampeones[i].allytips[j]);
                }
           }
       }
       return this.pistasAliados;
   }

    
    
    /*función de procesado de datos*/
   procesaChamps( data ) {
      var item;
      var nombre =[];
      for ( item in data ) {
          this.procesadoCampeones.push( data[item] );
      }   
  }
}
