import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TvshowsListComponent } from './tvshows-list/tvshows-list.component';
import { PeopleListComponent } from './people-list/people-list.component';

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
