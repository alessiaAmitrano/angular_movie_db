import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { NavLayoutComponent } from './nav-layout/nav-layout.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TvshowsListComponent } from './tvshows-list/tvshows-list.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { MaterialUiModule } from './material-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    NavLayoutComponent,
    MovieListComponent,
    TvshowsListComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
