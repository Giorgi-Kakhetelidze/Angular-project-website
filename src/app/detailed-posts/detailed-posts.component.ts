import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detailed-posts',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: './detailed-posts.component.html',
  styleUrls: ['./detailed-posts.component.scss']
})
export class DetailedPostsComponent implements OnInit {
  public post: any;
  public userInfo: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('userId');
      const postId = params.get('postId');
      if (userId && postId) {
        this.fetchPost(userId, postId);
        this.fetchUserInfo(userId);
      }
    });
  }

  private fetchPost(userId: string, postId: string): void {
    this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).subscribe(
      (resp: any) => {
        this.post = resp;
      },
      (error) => {
        console.error('Error fetching post', error);
      }
    );
  }

  private fetchUserInfo(userId: string): void {
    this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`).subscribe(
      (resp: any) => {
        this.userInfo = resp;
      },
      (error) => {
        console.error('Error fetching user information', error);
      }
    );
  }
}
