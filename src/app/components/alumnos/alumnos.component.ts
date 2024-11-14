import { Component, OnInit } from '@angular/core';
import { AlumnoData } from '../../models/AlumnoData';
import { ServiceAlumnos } from '../../services/service.alumnos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent implements OnInit{
  public alumnos!: Array<AlumnoData>;

  constructor(private _service: ServiceAlumnos, private _router: Router){}

  ngOnInit(): void {
    this._service.getAlumnos().then(response => {
      this.alumnos = response;
    })
  }
}
