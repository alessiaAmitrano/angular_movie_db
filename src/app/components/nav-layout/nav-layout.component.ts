import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-layout',
  templateUrl: './nav-layout.component.html',
  styleUrls: ['./nav-layout.component.scss']
})
export class NavLayoutComponent {

  constructor(private router: Router) { }

  goToRoute(path: any[]) {
    this.router.navigate(path);
  }
}
