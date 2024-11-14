import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Alumno } from "../models/Alumno";
import { environment } from "../../environments/environment.development";
import axios from "axios";
import { AlumnoData } from "../models/AlumnoData";

@Injectable()
export class ServiceAlumnos {

  getToken(user: Alumno): Promise<any>{
    const url = `${environment.urlApi}/api/auth/login`;
    return axios.post(url, user).then(response => response.data.response)
  }

  getAlumnos(): Promise<any>{
    const url = `${environment.urlApi}/api/alumnos/alumnostoken`;
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
    return axios.get(url, {headers}).then(response => response.data)
  }

  getCursos(): Promise<any>{
    const url = `${environment.urlApi}/api/alumnos/cursostoken`;
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
    return axios.get(url, {headers}).then(response => response.data)
  }

  getAlumnosCursos(idcurso: number): Promise<any>{
    const token = localStorage.getItem('token');
    const url = `${environment.urlApi}/api/alumnos/filtrarcurso/${idcurso}`;
    const headers = { 'Authorization': `Bearer ${token}` };
    return axios.get(url, {headers}).then(response => response.data)
  }

  createAlumno(alumno: AlumnoData): Promise<any>{
    const token = localStorage.getItem('token');
    const url = `${environment.urlApi}/api/alumnos/insertalumnotoken`;
    const headers = { 'Authorization': `Bearer ${token}` };
    return axios.post(url, alumno, {headers}).then(response => response.data)
  }
}