import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  public posts: any[] = [];
  public userId: string | null = null;


  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchPosts();
  }
  
  

  public fetchPosts(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (resp: any) => {
        this.posts = resp;
      },
      (error) => {
        console.error('Error fetching user data', error);
      }
    );
  }

  

}
