import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsApiService } from '../../shared/blogs-api.service';

import * as  moment from 'moment';

@Component({
  selector: 'app-display-blogs',
  templateUrl: './display-blogs.component.html',
  styleUrls: ['./display-blogs.component.css']
})
export class DisplayBlogsComponent implements OnInit {

  Blog: any = [];
  
  constructor(
    private router: Router,
    private blogsApi: BlogsApiService
  ) { }

  ngOnInit() {
    this.loadBlogs();
  }

  // Loads all blogs on the screen
  loadBlogs(){
    return this.blogsApi.getBlogs().subscribe((data: {}) => {
      this.Blog = data;
    });
  }

  // Delete blog
  deleteBlog(id) {
    console.log(id);
    if (window.confirm('Are you sure?')) {
      this.blogsApi.deleteBlog(id).subscribe((data: {}) => {
        console.log('Delete: ' + id);
        this.router.navigate(['/display-blogs']);
        this.loadBlogs();
      });
    }
  }

  convertDate(timestamp: any){
    return moment(timestamp).format('MM/DD/YYYY');
  }
}
