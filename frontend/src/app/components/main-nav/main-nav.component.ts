import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isLoggedIn: boolean;
  currUserType: string;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('currentUser') != null;
    if(this.isLoggedIn) {
      const currUser = JSON.parse(localStorage.getItem('currentUser'));
      this.currUserType = currUser.type;
    } else {
      this.currUserType = '';
    }
  }

  changeColor(id) {
    if(document.getElementById('assFin').className === 'sidebutton_active'){
      document.getElementById('assFin').className = 'sidebutton_inactive';
    } else if(document.getElementById('criarCal').className === 'sidebutton_active'){
      document.getElementById('criarCal').className = 'sidebutton_inactive';
    } else if(document.getElementById('comInd').className === 'sidebutton_active') {
      document.getElementById('comInd').className = 'sidebutton_inactive';
    } else {
      document.getElementById('loginBtn').className = 'sidebutton_inactive';
    }
    document.getElementById(id).className = 'sidebutton_active';
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

}
