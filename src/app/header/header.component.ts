import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../navigation/navigation.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  currentDate = new Date();

  ngOnInit(): void {
    interval(1000).subscribe(() => this.currentDate = new Date());
  }
  constructor(private navigationService: NavigationService) { }

  toggleNavigation() {
    this.navigationService.toggleNavigation();
  }
}
