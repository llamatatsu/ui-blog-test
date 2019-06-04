import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContentRoutingModule } from './content-routing.module';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { DisplayBlogsComponent } from './display-blogs/display-blogs.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [CreateBlogComponent, UpdateBlogComponent, DisplayBlogsComponent, ErrorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
