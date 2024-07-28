import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  isNavigationOpen = false;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.navigationOpen$.subscribe(isOpen => {
      this.isNavigationOpen = isOpen;
    });
  }
  
}
