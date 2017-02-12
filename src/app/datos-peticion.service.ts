import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Observable, Subject } from 'rxjs/Rx';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import 'rxjs/add/operator/map';

@Injectable()
export class DatosPeticionService {
    private listaCampeones:Subject<any> = new Subject<any>();
    private listaSkills:Subject<any> = new Subject<any>();
    private conetedorImagen:Subject<any> = new Subject<any>();
    private nombreSearch;
    private nombreSearchSub:Subject<any> = new Subject<any>();
  constructor(private ajax:Http, private sanitizer:DomSanitizer) { }

    obtenerBusqueda( campeon ){
        this.nombreSearch = campeon;
        this.nombreSearchSub.next(this.nombreSearch);
    }
    
    mandarBusqueda(){
        return this.nombreSearchSub.asObservable();
    }


    obtenerCampeones(){
       this.ajax.get("https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?locale=es_ES&champData=all&api_key=RGAPI-7d04fad9-fa14-4e6e-bb96-5004d087a45c").map(response => response.json()).subscribe(
           data =>{this.listaCampeones.next(data.data);},
       );
        return this.listaCampeones.asObservable();
    }


    obtenerSkills(){
       this.ajax.get("https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?locale=es_ES&champData=spells&api_key=RGAPI-7d04fad9-fa14-4e6e-bb96-5004d087a45c").map(response => response.json()).subscribe(
           data =>{this.listaCampeones.next(data.data)},
       );
        return this.listaCampeones.asObservable();
    }
    



    /*obtenerImagen(campeon:string){
        let cadena = "http://ddragon.leagueoflegends.com/cdn/7.3.1/img/champion/"+campeon+".png";
        let cadenaS = this.sanitizer.bypassSecurityTrustUrl(cadena);
        let cadena_to_string = cadenaS.toString()
        console.log(cadenaS);
        console.log(cadena_to_string);
        this.ajax.get("http://ddragon.leagueoflegends.com/cdn/7.3.1/img/champion/"+campeon+".png").subscribe(
           data =>{this.conetedorImagen.next(data)},
       );
        return this.conetedorImagen.asObservable();
    }*/

}
