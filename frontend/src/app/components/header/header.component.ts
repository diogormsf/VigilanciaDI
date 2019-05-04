import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  @Input() menuState: boolean;



  constructor() { }

  ngOnInit() {
    
  }

  
  onToolbarMenuToggle() {

    console.log('Sidenav', this.menuState);
    this.menuState=!this.menuState;
  }

  

  
}
