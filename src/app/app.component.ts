import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DashBoard';
  
  sidebarOpened:boolean=true

  toggle(){
    //show and hide btn
    this.sidebarOpened=!this.sidebarOpened
  }
  
}