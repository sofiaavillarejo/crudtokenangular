import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { AlumnosCursoComponent } from './components/alumnos-curso/alumnos-curso.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "alumnos", component: AlumnosComponent},
  {path: "detalles/:id", component: DetallesComponent},
  {path: "alumnoscurso/:id", component: AlumnosCursoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
