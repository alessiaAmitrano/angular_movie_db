import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLayoutComponent } from './nav-layout.component';

describe('NavLayoutComponent', () => {
  let component: NavLayoutComponent;
  let fixture: ComponentFixture<NavLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
