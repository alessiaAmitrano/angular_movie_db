import { Component, OnInit } from '@angular/core';
import { MovieDbService } from 'src/app/services/movie-db.service';

@Component({
  selector: 'app-tvshows-list',
  templateUrl: './tvshows-list.component.html',
  styleUrls: ['./tvshows-list.component.scss']
})
export class TvshowsListComponent implements OnInit {
  tvShowsList: any[] = [];
  constructor(private movieDb: MovieDbService) {}

  ngOnInit(): void {
    this.movieDb.getTvShows().subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.tvShowsList  = data['results'];
      console.log('movielist', this.tvShowsList);
    });
  }
}
