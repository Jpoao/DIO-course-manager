import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './stars/star-component';
import { ReplacePipe } from './pipes/replace.pipe';
import { NavBarComponent } from 'src/core/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404 } from 'src/core/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "", 
        redirectTo: "courses", 
        pathMatch: "full"
      },
      {
        path: "courses",
        component: CourseListComponent,
        pathMatch: "full"
      },
      {
        path: "**",
        component: Error404
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
