import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AnimService {

  constructor() { }

  delay(): Observable<any> {
    return of(true).pipe(delay(600))
  }

}
