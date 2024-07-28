import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-each-user-posts',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: './each-user-posts.component.html',
  styleUrl: './each-user-posts.component.scss'
})
export class EachUserPostsComponent implements OnInit {
  public posts: any[] = [];
  public userId: string | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      if (this.userId) {
        this.fetchPosts(this.userId);
      }
    });
  }

  private fetchPosts(userId: string): void {
    this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).subscribe(
      (resp: any) => {
        this.posts = resp;
      },
      (error) => {
        console.error('Error fetching user posts', error);
      }
    );
  }

  
}
