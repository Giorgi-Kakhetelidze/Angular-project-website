import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule, routes } from './app.routes';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { EachUserPostsComponent } from './each-user-posts/each-user-posts.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { DetailedPostsComponent } from './detailed-posts/detailed-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    PostsComponent,
    NavigationComponent,
    EachUserPostsComponent,
    FooterComponent,
    DetailedPostsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
