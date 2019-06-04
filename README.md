# UiBlog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9 by

### Vedang Haldankar - vedang@live.com


## Libraries

Bootstrap - for responsive html tags
Font-Awesome - imported it for using 
Moment - to handle the timestamp


## Source Code files

#### app/
* app.module.ts           - defines the root module and the dependencies  
* app.component.ts        - no code modifications
* app.component.html      - html template for app.component
* app-routing.module.ts   - defines the routing information (in this we refernce content-routing.module children)
* app.component.css       - for site-wide css styles

#### app/navbar
* navbar.component.ts     - no code modifications
* navbar.component.html   - basic navbar implementation with scope for future improvement like authentication, search blogs, etc
* navbar.component.css    - no code modifications

#### app/sidebar
* sidebar.component.ts     - communicates with the service to generate a blog list on the sidebar, talks to the refresh service to know when to refresh
* sidebar.component.html   - buttons for Display all blogs and Create new blog entry screens and renders blog list on the sidebar
* sidebar.component.css    - button activity css

#### app/content
* content.module.ts           - defines the content module and the dependencies  
* content-routing.module.ts   - defines the routing information for each content screen

#### app/content/create-blog
* create-blog.component.ts     - code for saving user input blog, and adding sample blog, calls creat-blogs method which is reponsible to POST data through the API
* create-blog.component.html   - rendering empty controls to generate a Blog entity for Post
* create-blog.component.css    - no code modifications

#### app/content/display-blog
* display-blog.component.ts    - communicates with the service to generate a blog list on the content page
* display-blog.component.html  - renders all blogs returned by the service on the display screen
* display-blog.component.css   - code for visual aethetics

#### app/content/update-blog
* update-blog.component.ts    - communicates with the service to get the blog by id, implemented it so that the page is re-rendered for every id
* update-blog.component.html  - renders blog details for an id in editable controls
* update-blog.component.css   - code for visual aethetics

#### app/content/error
* error.component.ts    - no code modifications (future implementations)
* error.component.html  - plain html error message to redirect to
* error.component.css   - no code modifications

#### app/shared
* blog.ts              - defines the blog entry properties expected form teh service
* blogs-api.service.ts - provides methods to communicate with API endpoints
* refresh.service.ts   - service to communicate between unrelated compoenents


## Browsers Tested

Chrome
Edge


## Test Objectives

I was not able to test the application in entirely as the service wouldn't let me Update, Post, or Delete
I spent some time trying to debug this scenario, and contact Hackerrank tech support and Salesforce tech support.


## Project Notes:

1. Code has been modularized between Navbar, SideBar, Content to aid in Future development

2. Created two Sevices: 
    a. shared/blogs-api.service:
        - Talks to the API and implemented service calls to API
        - Get is workin as expected
        - Post, Update, Delete are not working as expected because of permissions                        

    b. refresh.service:
        - this service for internal components to talk to each other
        - as it is implemented, it sends a refresh request to the sidebar

3. Additional libraries imported: Bootstrap, Font-Awesome, Moment (for timestamp handling)


## Process

I wanted to go for a traditional approach to Blogs as I was going for function over form
The idea was to finish implementing the functionality, and then work on the look and feel of the application
I decided to go with Angular 7 as I am most comfortable with it and can prototype it faster

Angular 7
Angular 7 introduces routing through routing.module and router-outlet controls.
There is also provision for nested routing modules that help in organizing the code in levels.
Angular automatically splits the application into components, being a MVC framework.


## Decisions

I decided to go with a standard navbar, sidebar, and content controls in my application.
I wanted the sidebar to be interactive so when a new blog entry is created, it also updates the sidebar list.
I've implemented this using a data service that communicates between the components and lets the sidebar know when to refresh.



## First install

Once you have downloaded the application, open a terminal window, point it to the application folder and run `npn install`.
This will download all utilities/packages that I've used in the application (described with version in package.json).
Run `npm audit fix` to fix any vulnerabilities.


## Future Improvements

Adding testing modules to every screen
Authentication for entire website
Role based authorization
Multi-device testing
Add visual improvements for 


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



