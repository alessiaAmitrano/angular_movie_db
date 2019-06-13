import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DetailModalComponent, DialogData } from '../detail-modal/detail-modal.component';

@Component({
  selector: 'app-person-modal',
  templateUrl: './person-modal.component.html',
  styleUrls: ['./person-modal.component.scss']
})
export class PersonModalComponent implements OnInit {
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

  closeModal(): void {
    this.dialogRef.close();
  }
}
