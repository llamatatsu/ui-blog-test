import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Blog } from '../shared/blog';    // Import Blog definition from shared/blog.ts
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';  // Help in catching andthrowing errors

@Injectable({
  providedIn: 'root'
})

export class BlogsApiService {

  apiURL = 'http://restedblog.herokuapp.com/vedangh/api'; // Salesforce provided API

  constructor(
    private http: HttpClient
  ) { }

  // Define api content-type 
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  };

  // Gets all Blogs from API
  getBlogs(): Observable<Blog> {
    return this.http.get<Blog>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Gets Blogs by id from API
  getBlog(id): Observable<Blog> {
    return this.http.get<Blog>(this.apiURL + '/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Creates new Blog based on user input and posts it into the API
  createBlog(blog): Observable<Blog> {
    return this.http.post<Blog>(this.apiURL + '/', JSON.stringify(blog), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Creates new Blog based on user input and posts it into the API
  createBlogSample(): Observable<Blog> {
    return this.http.post<Blog>(this.apiURL + '/generateSampleData', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  // Updates Blog by id
  updateBlog(id, blog): Observable<Blog> {
    return this.http.post<Blog>(this.apiURL + '/' + id, JSON.stringify(blog), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  
  // Deletes Blog by id
  deleteBlog(id) {
    return this.http.delete<Blog>(this.apiURL + '/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Error handling Module
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(error);
  }


}
