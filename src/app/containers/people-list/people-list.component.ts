import { Component, OnInit } from '@angular/core';
import { MovieDbService } from 'src/app/services/movie-db.service';
import { DetailModalComponent } from 'src/app/components/detail-modal/detail-modal.component';
import { MatDialog } from '@angular/material';
import { PersonModalComponent } from 'src/app/components/person-modal/person-modal.component';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  peopleList: any[] = [];
  selectedPerson;
  constructor(private movieDb: MovieDbService,  public dialog: MatDialog) { }

  ngOnInit(): void {
    this.movieDb.getPeople().subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.peopleList = data['results'];
      console.log('movielist', this.peopleList);
    });
  }

  selectPerson(item: any) {
    this.selectedPerson = item;
    console.log('selected', this.selectedPerson);
    // open modal
    this.openModal();
  }

  openModal()  {
    const dialogRef = this.dialog.open(PersonModalComponent, {
      width: '900px',
      height: '61%',
      data: {item: this.selectedPerson}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.selectedPerson = null;
    });
  }

}
