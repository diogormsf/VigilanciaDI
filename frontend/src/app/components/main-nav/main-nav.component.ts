import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isLoggedIn: boolean;
  ehResponsavel: boolean;
  ehGestor: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('currentUser') != null;
    this.ehResponsavel = false;
    this.ehGestor = false;
    if(this.isLoggedIn) {
      const currUser = JSON.parse(localStorage.getItem('currentUser'));
      this.ehResponsavel = currUser.responsavel.length > 0;
      this.ehGestor = currUser.gestor;
    }
  }

  changeColor(event) {
    if(document.getElementsByClassName('sidebutton_active')[0]) {
      document.getElementsByClassName('sidebutton_active')[0].className = 'sidebutton_inactive';
    }
    if(document.getElementById(event.target.id)) {
      document.getElementById(event.target.id).className = 'sidebutton_active';
    }
  }

  clearColor() {
    if(document.getElementsByClassName('sidebutton_active')[0]) {
      document.getElementsByClassName('sidebutton_active')[0].className = 'sidebutton_inactive';
    }
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

}
