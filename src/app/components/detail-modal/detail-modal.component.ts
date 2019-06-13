import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export interface DialogData {
  item: any;
}

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss']
})
export class DetailModalComponent implements OnInit {
  imgSrc;

  constructor(
    public dialogRef: MatDialogRef<DetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    if (this.data.item['profile_path']) {
       // tslint:disable-next-line:no-string-literal
      this.imgSrc = `https://image.tmdb.org/t/p/w500${this.data.item['profile_path']}`;

    } else {
      // tslint:disable-next-line:no-string-literal
      this.imgSrc = `https://image.tmdb.org/t/p/w500${this.data.item['poster_path']}`;
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
