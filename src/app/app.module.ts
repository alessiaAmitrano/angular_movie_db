import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { MaterialUiModule } from './utility/material-ui.module';
import { MediaCardComponent } from './components/media-card/media-card.component';
import { NavLayoutComponent } from './components/nav-layout/nav-layout.component';
import { MovieListComponent } from './containers/movie-list/movie-list.component';
import { TvshowsListComponent } from './containers/tvshows-list/tvshows-list.component';
import { PeopleListComponent } from './containers/people-list/people-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GridLayoutComponent } from './components/grid-layout/grid-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavLayoutComponent,
    MovieListComponent,
    TvshowsListComponent,
    PeopleListComponent,
    MediaCardComponent,
    GridLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialUiModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
