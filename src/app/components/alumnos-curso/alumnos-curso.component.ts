import { Component, OnInit } from '@angular/core';
import { AlumnoData } from '../../models/AlumnoData';
import { ServiceAlumnos } from '../../services/service.alumnos';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-alumnos-curso',
  templateUrl: './alumnos-curso.component.html',
  styleUrl: './alumnos-curso.component.css'
})
export class AlumnosCursoComponent implements OnInit{
  public alumnos!: Array<AlumnoData>;
  public id!: number;
  constructor(private _service: ServiceAlumnos, private _router: Router, private _activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.id = parseInt(params["id"]);
      this._service.getAlumnosCursos(this.id).then(result => {
        this.alumnos = result;
      })
    })

  }
}
