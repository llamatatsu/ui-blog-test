import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {
  
  private refreshSidebar = new BehaviorSubject(false);
  invoke = this.refreshSidebar.asObservable();

  constructor() { }

  // Refreshes sidebar on additions
  sidebar(message: boolean) {
    this.refreshSidebar.next(message);
  }
}
