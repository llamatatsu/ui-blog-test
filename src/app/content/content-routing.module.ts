import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBlogComponent } from './create-blog/create-blog.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { DisplayBlogsComponent } from './display-blogs/display-blogs.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'display-blogs' },
  { path: 'create-blog', component: CreateBlogComponent },
  { path: 'update-blog/:id', component: UpdateBlogComponent },
  { path: 'display-blogs', component: DisplayBlogsComponent },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
