import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentModule } from './content/content.module';

const routes: Routes = [
    { path: '', loadChildren: () => ContentModule }  // Loads all children of the ContentModule defined in content-routing.module.ts
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
