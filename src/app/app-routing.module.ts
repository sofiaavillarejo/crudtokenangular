import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { AlumnosCursoComponent } from './components/alumnos-curso/alumnos-curso.component';
import { CreateAlumnoComponent } from './components/create-alumno/create-alumno.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "alumnos", component: AlumnosComponent},
  {path: "detalles/:id", component: DetallesComponent},
  {path: "alumnoscurso/:id", component: AlumnosCursoComponent},
  {path: "create", component: CreateAlumnoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
