import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsApiService } from '../../shared/blogs-api.service';
import { RefreshService } from '../../shared/refresh.service';

import * as moment from 'moment';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  id: any ='';
  blogDetails:any = {};

  timestamp: string = moment().format('MM/DD/YYYY h:mm:ssa');

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private blogsApi: BlogsApiService,
    private refresh: RefreshService
  ) { }

  ngOnInit() {

    
    this.actRoute.paramMap.subscribe(params => {
      console.log(params.get('id'));
      
      // Get parameter from routerLink
      this.id = params.get('id');

      // This implementation so that every time a update link is pressed on the sidebar,
      //      the page renders the new blog
      // Otherwise, it thinks it is the same page and does not render
      this.blogsApi.getBlog(params.get('id')).subscribe( data => {
        console.log(data);
        this.blogDetails = data;
        this.blogDetails.timestamp = this.timestamp;
      },error => {
        console.error(error.status);
        console.error(1);
        this.router.navigate(['/error']);
      });
    });
  }

  /* The server should require authentication and limit deletion to just posts by the current
    user or in the case of an administrator, to posts by a user with a given user ID */

  updateBlog(){
    if (window.confirm('Are you sure?')) {
      this.blogsApi.updateBlog(this.id, this.blogDetails).subscribe((data: {}) => {
        this.router.navigate(['/display-blogs']);
        this.refresh.sidebar(true);
      });
    }
  }

  deleteBlog(id) {
    console.log(id);
    if (window.confirm('Are you sure?')) {
      this.blogsApi.deleteBlog(id).subscribe((data: {}) => {
        console.log('Delete: ' + id);
        this.router.navigate(['/display-blogs']);
        this.refresh.sidebar(true);
      });
    }
  }


}
