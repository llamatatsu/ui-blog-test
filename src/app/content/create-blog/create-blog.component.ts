import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsApiService } from '../../shared/blogs-api.service';
import { RefreshService } from '../../shared/refresh.service';

import * as moment from 'moment';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  @Input() blogDetails = { title: '', text: '', timestamp: '' };

  timestamp: string = moment().format('MM/DD/YYYY h:mm:ssa');
  message: boolean;

  constructor(    
    private router: Router,
    private blogsApi: BlogsApiService,
    private refresh: RefreshService
  ) { }

  ngOnInit() {
    this.blogDetails.timestamp = this.timestamp;
  }
  
  addSampleBlog(){
    this.blogsApi.createBlogSample().subscribe((data: {}) => {
      this.router.navigate(['/display-blogs']);
      this.refresh.sidebar(true);
    });  
  }

  addBlog(dataBlog) {
    this.blogsApi.createBlog(this.blogDetails).subscribe((data: {}) => {
      this.router.navigate(['/display-blogs']);
      this.refresh.sidebar(true);
    });  
  }

}
