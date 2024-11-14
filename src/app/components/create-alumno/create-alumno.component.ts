import { Component, OnInit } from '@angular/core';
import { AlumnoData } from '../../models/AlumnoData';

@Component({
  selector: 'app-create-alumno',
  templateUrl: './create-alumno.component.html',
  styleUrl: './create-alumno.component.css'
})
export class CreateAlumnoComponent{
  public Alumno!: AlumnoData;

  createAlumno(){
    
  }
}
