import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from '@angular/core';
import { EachUserPostsComponent } from './each-user-posts/each-user-posts.component';
import { TodolistComponent } from './todolist/todolist.component';
import { DetailedPostsComponent } from './detailed-posts/detailed-posts.component';

export const routes: Routes = [
  { path: '', component: UsersComponent }, 
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'user/:id/posts', component: EachUserPostsComponent },
  { path: 'todoList/:id/todos', component: TodolistComponent },
  { path: 'detail/:userId/post/:postId', component: DetailedPostsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
