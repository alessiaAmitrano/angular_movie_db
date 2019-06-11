import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies = [0, 1, 2, 3, 4, 5, 6, 7];
  constructor() { }

  ngOnInit() {
  }

}
