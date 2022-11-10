import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  constructor() { }

  detailBreakpoint() {
    return (window.innerWidth <= 993) ? 1 : 3;
  }
  detailColspan() {
    return (window.innerWidth <= 993) ? 1 : 2;
  }
  eventDetail(event: any) {
    return (event.target.innerWidth <= 993) ? 1 : 2;
  }

}
