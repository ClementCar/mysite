import { Injectable } from '@angular/core';
import { Project } from '../shared/project';
import { PROJECTS } from '../shared/porjects';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getAllProjects(): Promise<Project[]>{
    return new Promise( resolve => PROJECTS) ;
  }

  getProject(id: string): Promise<Project> {
    return new Promise( resolve => (PROJECTS.filter((project) => (project.id === id))[0]));
  }

  getProjectIds(): Promise<string[] | any > {
    return new Promise( resolve => PROJECTS.map(project => project.id));
  }
}
