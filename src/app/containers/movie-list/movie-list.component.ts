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
  selectedMovie: any;
  constructor(private movieDb: MovieDbService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.movieDb.getMovies().subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.movieList  = data['results'];
      console.log('movielist', this.movieList);
    });
  }

  selectMovie(item: any) {
    this.selectedMovie = item;
    console.log('selected', this.selectedMovie);
    // open modal
    this.openModal();
  }

  openModal()  {
    const dialogRef = this.dialog.open(DetailModalComponent, {
      width: '1200px',
      height: '80%',
      data: {item: this.selectedMovie}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.selectedMovie = null;
    });
  }
}
