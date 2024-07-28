import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent implements OnInit {

  public todos: any[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute){}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('id');
      if (userId) {
        this.fetchTodos(userId);
      }
    });
  }

  public fetchTodos(userId: string): void {
    this.http.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`).subscribe(
      (resp: any) => {
        this.todos = resp;
      },
      (error) => {
        console.error('Error fetching todos data', error)
      }
    );
  }

}
