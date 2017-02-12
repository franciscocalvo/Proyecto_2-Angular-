import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DatosPeticionService } from './datos-peticion.service';
import { ContentChampsComponent } from './content-champs/content-champs.component';
import { ChampskillComponent } from './champskill/champskill.component';

// Se definen las rutas de la app. Cada una se corresponde con un componente
const routes: Routes = [
    // La ruta '' indica la ruta por defecto (antiguo index.html)
    { path: '', component: ContentChampsComponent },
    { path: 'Campeon', component: ContentChampsComponent },
    { path: 'Habilidades', component:ChampskillComponent },
    // Cualquier otra ruta no considerada en las entradas anteriores -> ERROR
];

const enrutamiento = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentChampsComponent,
    ChampskillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    enrutamiento


  ],
  providers: [ DatosPeticionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
