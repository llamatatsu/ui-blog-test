import { Component, OnInit } from '@angular/core';
import { BlogsApiService } from '../shared/blogs-api.service';
import { RefreshService } from '../shared/refresh.service';

import * as  moment from 'moment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  Blog: any = [];

  constructor(
    private blogsApi: BlogsApiService,
    private refresh: RefreshService
  ) { }

  ngOnInit() {
    this.loadBlogs();

    // Invoked as soon as a new Entry is made to refresh sidebar
    this.refresh.invoke.subscribe((data: {}) => {
      this.loadBlogs();
    });
  }

  loadBlogs() {
    return this.blogsApi.getBlogs().subscribe((data: {}) => {
      this.Blog = data;
    });
  }

  // Restricts title to show just 20 characters
  restrictTitle(title: any) {
    return title.substring(0, 20) + '...';
  }

  // Comverts timestamp to understandable format
  convertDate(timestamp: any){
    return moment(timestamp).format('MM/DD/YYYY  h:mm:ssa');
  }
}
