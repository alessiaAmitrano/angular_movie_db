import { Component, OnInit } from '@angular/core';
import { MovieDbService } from 'src/app/services/movie-db.service';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { DetailModalComponent } from 'src/app/components/detail-modal/detail-modal.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList: any[] = [];
  movieGenresList: any[] = [];
  selectedMovie: any;
  constructor(private movieDb: MovieDbService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.movieDb.getMovies().subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.movieList  = data['results'];
      console.log('movielist', this.movieList);
    });
    this.movieDb.getMovieGenres().subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.movieGenresList  = data['genres'];
      console.log('genres', this.movieGenresList);
    });
  }

  selectMovie(item: any) {
    this.selectedMovie = item;
    console.log('selected', this.selectedMovie);
    // get genres
    const selMovieGenres =  this.getMovieGenres();
    // open modal
    this.openModal(selMovieGenres);
  }

  openModal( genres: any)  {
    const dialogRef = this.dialog.open(DetailModalComponent, {
      width: '900px',
      height: '61%',
      data: {item: this.selectedMovie, movieGenres: genres}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.selectedMovie = null;
    });
  }

  getMovieGenres(): string[] {
    const genresArray = [];
    // tslint:disable-next-line:no-string-literal
    this.selectedMovie['genre_ids'].map( genre => {
       genresArray.push(this.movieGenresList.find(obj => obj.id === genre).name);
    });
    console.log('genresArray', genresArray);
    return genresArray;
  }
}
