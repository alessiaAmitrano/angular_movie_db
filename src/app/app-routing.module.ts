import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './containers/movie-list/movie-list.component';
import { TvshowsListComponent } from './containers/tvshows-list/tvshows-list.component';
import { PeopleListComponent } from './containers/people-list/people-list.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'tv-shows', component: TvshowsListComponent },
  { path: 'people', component: PeopleListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
