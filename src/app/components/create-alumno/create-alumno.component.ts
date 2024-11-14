import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlumnoData } from '../../models/AlumnoData';
import { ServiceAlumnos } from '../../services/service.alumnos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-alumno',
  templateUrl: './create-alumno.component.html',
  styleUrl: './create-alumno.component.css'
})
export class CreateAlumnoComponent{
  @ViewChild("cajaid") cajaid!: ElementRef;
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  @ViewChild("cajaapellidos") cajaapellidos!: ElementRef;
  @ViewChild("cajaimagen") cajaimagen!: ElementRef;
  @ViewChild("cajaactivo") cajaactivo!: ElementRef;
  @ViewChild("cajaidCurso") cajaidCurso!: ElementRef;

  constructor(private _service: ServiceAlumnos, private _router: Router){
  }
  createAlumno(): void{
    let id = parseInt(this.cajaid.nativeElement.value);
    let nombre = this.cajanombre.nativeElement.value;
    let apell = this.cajaapellidos.nativeElement.value;
    let img = this.cajaimagen.nativeElement.value;
    let act = parseInt(this.cajaactivo.nativeElement.value);
    let idcurso = parseInt(this.cajaidCurso.nativeElement.value);

    let alumno = new AlumnoData(id, nombre, apell, img, act, idcurso);

    this._service.createAlumno(alumno).then(result => {
      console.log("Alumno insertado", result)
      this._router.navigate(["/"]);
      
    })
  }
}
