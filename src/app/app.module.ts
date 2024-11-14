import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { ServiceAlumnos } from './services/service.alumnos';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { MenuComponent } from './components/menu/menu.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { AlumnosCursoComponent } from './components/alumnos-curso/alumnos-curso.component';
import { CreateAlumnoComponent } from './components/create-alumno/create-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlumnosComponent,
    MenuComponent,
    DetallesComponent,
    AlumnosCursoComponent,
    CreateAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient(), ServiceAlumnos],
  bootstrap: [AppComponent]
})
export class AppModule { }
