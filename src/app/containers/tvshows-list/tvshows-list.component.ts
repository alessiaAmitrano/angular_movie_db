import { Component, OnInit } from '@angular/core';
import { MovieDbService } from 'src/app/services/movie-db.service';
import { MatDialog } from '@angular/material';
import { DetailModalComponent } from 'src/app/components/detail-modal/detail-modal.component';

@Component({
  selector: 'app-tvshows-list',
  templateUrl: './tvshows-list.component.html',
  styleUrls: ['./tvshows-list.component.scss']
})
export class TvshowsListComponent implements OnInit {
  tvShowsList: any[] = [];
  tvShowsGenresList: any;
  selectedShow;
  constructor(private movieDb: MovieDbService,  public dialog: MatDialog) {}

  ngOnInit(): void {
    this.movieDb.getTvShows().subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.tvShowsList  = data['results'];
      console.log('movielist', this.tvShowsList);
    });
    this.movieDb.getShowsGenres().subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.tvShowsGenresList  = data['genres'];
      console.log('genres', this.tvShowsGenresList);
    });
  }

  selectShow(item: any) {
    this.selectedShow = item;
    console.log('selected', this.selectedShow);
    // open modal
    const selShowGenres =  this.getShowGenres();

    this.openModal(selShowGenres);
  }

  openModal(genres: any)  {
    const dialogRef = this.dialog.open(DetailModalComponent, {
      width: '900px',
      height: '61%',
      data: {item: this.selectedShow, movieGenres: genres }
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.selectedShow = null;
    });
  }

  getShowGenres(): string[] {
    const genresArray = [];
    // tslint:disable-next-line:no-string-literal
    this.selectedShow['genre_ids'].map( genre => {
       genresArray.push(this.tvShowsGenresList.find(obj => obj.id === genre).name);
    });
    console.log('genresArray', genresArray);
    return genresArray;
  }
}
