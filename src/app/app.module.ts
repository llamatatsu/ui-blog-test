import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentModule } from './content/content.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,  // Component to contain the website's header and navigation
    SidebarComponent  // SideBar will have the listing of all Blogs
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,      // Helps with binding ng directives to html controls like input, textarea, etc
    HttpClientModule, // To communicate with the Webservice
    ContentModule     // Content Modules contains all screens that the blogs are in
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
