import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Movie } from '../models/media-models';


@Injectable({
  providedIn: 'root'
})
export class MovieDbService {
  apiKey = 'd0aea524bd07ed49cbc26dff63f357dd';
  moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc`;
  tvShowsUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}`;
  peopleUrl = `https://api.themoviedb.org/3/person/popular?api_key=${this.apiKey}`;
  movieGenresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`;
  tvShowsGenresUrl = `https://api.themoviedb.org/3/genre/tv/list?api_key=${this.apiKey}&language=en-US`;
  constructor(private http: HttpClient) { }

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.moviesUrl);
  }

  getTvShows(): Observable<any[]> {
    return this.http.get<any[]>(this.tvShowsUrl);
  }

  getPeople(): Observable<any[]> {
    return this.http.get<any[]>(this.peopleUrl);
  }

  getMovieGenres(): Observable<any[]> {
    return this.http.get<any[]>(this.movieGenresUrl);
  }

  getShowsGenres(): Observable<any[]> {
    return this.http.get<any[]>(this.tvShowsGenresUrl);
  }

}
