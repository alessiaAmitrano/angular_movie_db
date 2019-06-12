import { Component, OnInit } from '@angular/core';
import { MovieDbService } from 'src/app/services/movie-db.service';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies = [0, 1, 2, 3, 4, 5, 6, 7];
  mo: any[];
  constructor(private movieDb: MovieDbService) {
    this.movieDb.getMovies();
    this.mo = this.movieDb.movies;
    console.log('mo', this.mo);
  }

  ngOnInit() {
  }

}
