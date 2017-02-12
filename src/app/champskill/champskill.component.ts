import { Component, OnInit } from '@angular/core';
import { DatosPeticionService } from '../datos-peticion.service';

@Component({
  selector: 'app-champskill',
  templateUrl: './champskill.component.html',
  styleUrls: ['./champskill.component.css']
})
export class ChampskillComponent implements OnInit {
    nombre_champ:string;
    datosDeHabilidad:any;
    procesadoHabilidades:any = [];
    habilidades:any;
    nombre_Q:string;
    habilidad_Q:string;
    reutilizacion_Q:string;
    
    nombre_W:string;
    habilidad_W:string;
    reutilizacion_W:string;
    
    nombre_E:string;
    habilidad_E:string;
    reutilizacion_E:string;
    
    nombre_R:string;
    habilidad_R:string;
    reutilizacion_R:string;
    asignacion:boolean = false;
  constructor(private servicioSkill: DatosPeticionService) {
      this.servicioSkill.obtenerSkills().subscribe(
          data =>{this.procesaSkill(data);this.datosDeHabilidad = data}
      );
      this.servicioSkill.mandarBusqueda().subscribe(
          data => {this.nombre_champ = data}
      );
  }

  ngOnInit() {
  }
    
  procesaSkill( data ) {
      var item;
      var nombre =[];
      for ( item in data ) {
          this.procesadoHabilidades.push( data[item] );
      }
      console.log(this.procesadoHabilidades);
  }
    
  obtenerHabilidades(){
      for(let i in this.procesadoHabilidades){
          if(this.procesadoHabilidades[i].key == this.nombre_champ){
              this.habilidades = this.procesadoHabilidades[i].spells
          }
      }
      return this.habilidades;
  }
    
    asignacionHabilidades(){
        this.obtenerHabilidades();
        
        this.nombre_Q = this.habilidades[0].name;
        this.habilidad_Q = this.habilidades[0].description;
        this.reutilizacion_Q = this.habilidades[0].cooldownBurn;
        
        this.nombre_W = this.habilidades[1].name;
        this.habilidad_W = this.habilidades[1].description;
        this.reutilizacion_W = this.habilidades[1].cooldownBurn;
        
        this.nombre_E = this.habilidades[2].name;
        this.habilidad_E = this.habilidades[2].description;
        this.reutilizacion_E = this.habilidades[2].cooldownBurn;
        
        this.nombre_R = this.habilidades[3].name;
        this.habilidad_R = this.habilidades[3].description;
        this.reutilizacion_R = this.habilidades[3].cooldownBurn;
        
        this.asignacion = true;
    }
 }


