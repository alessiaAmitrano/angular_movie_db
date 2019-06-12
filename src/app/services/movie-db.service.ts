import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieDbService {
  apiKey = 'd0aea524bd07ed49cbc26dff63f357dd';
  moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc`;
  movies;
  constructor(private http: HttpClient) { }

  getMovies(): Observable<any[]> {
     return this.http.get<any>(this.moviesUrl).pipe(
      tap(data => {
        this.movies = data.results;
        console.log('dati', this.movies);
        //  data.results;
      })
    );
  }

}