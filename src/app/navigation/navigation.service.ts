import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navigationOpen = new BehaviorSubject<boolean>(false);
  navigationOpen$ = this.navigationOpen.asObservable();

  toggleNavigation() {
    this.navigationOpen.next(!this.navigationOpen.value);
  }
}
