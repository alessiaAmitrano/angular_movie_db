import { Component, OnInit } from '@angular/core';
import { MovieDbService } from 'src/app/services/movie-db.service';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies = [0, 1, 2, 3, 4, 5, 6, 7];
  movieList: any[] = [];
  constructor(private movieDb: MovieDbService) {}

  ngOnInit(): void {
    this.movieDb.getMovies().subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.movieList  = data['results'];
      console.log('movielist', this.movieList);
    });
  }
}
