import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-layout',
  templateUrl: './nav-layout.component.html',
  styleUrls: ['./nav-layout.component.scss']
})
export class NavLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToRoute(path: any[]) {
    this.router.navigate(path);
  }
}
