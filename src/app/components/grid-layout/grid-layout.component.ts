import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.scss']
})
export class GridLayoutComponent implements OnInit {
@Input() itemsList;
@Output() selectedItemEmitter = new EventEmitter<any>();
searchText: string;

  constructor() { }

  ngOnInit() {
  }

  selectCard(item: any) {
    this.selectedItemEmitter.emit(item);
  }
}
