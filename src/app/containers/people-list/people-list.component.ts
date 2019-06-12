import { Component, OnInit } from '@angular/core';
import { MovieDbService } from 'src/app/services/movie-db.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  peopleList: any[] = [];
  constructor(private movieDb: MovieDbService) {}

  ngOnInit(): void {
    this.movieDb.getPeople().subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.peopleList  = data['results'];
      console.log('movielist', this.peopleList);
    });
  }
}
