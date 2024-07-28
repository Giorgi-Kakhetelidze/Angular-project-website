import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchDetails();
  }

  public fetchDetails(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (resp: any) => {
        this.users = resp;
      },
      (error) => {
        console.error('Error fetching user data', error);
      }
    );
  }
}
