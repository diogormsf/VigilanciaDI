import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  private sidenav: MatSidenav;

  menuOpen: any;
  @Input() menuState: boolean;
  menuStateAux = true;
  valueMenu: String;

  constructor() { }

  ngOnInit() {
  }

  checkMenu(){
    console.log('Sidenav receive check', this.menuState);
    if(this.menuState == this.menuStateAux){
      
      return "opened";
    }
    else{
      this.menuStateAux=this.menuState;
      return "";
    }
  }

  writeValueMenu(){
    console.log('Sidenav receive', this.menuState);
  }

 


 
}
