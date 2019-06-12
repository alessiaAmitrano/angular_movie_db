import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent implements OnInit {
  @Input() mediaItem: any;
  imgSrc;

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    if (this.mediaItem['profile_path']) {
       // tslint:disable-next-line:no-string-literal
      this.imgSrc = `https://image.tmdb.org/t/p/w500${this.mediaItem['profile_path']}`;

    } else {
      // tslint:disable-next-line:no-string-literal
      this.imgSrc = `https://image.tmdb.org/t/p/w500${this.mediaItem['poster_path']}`;
    }
  }
}

