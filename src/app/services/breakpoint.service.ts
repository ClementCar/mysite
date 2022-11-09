import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  constructor() { }

  detailBreakpoint() {
    return (window.innerWidth <= 993) ? 1 : 3;
  }

}
