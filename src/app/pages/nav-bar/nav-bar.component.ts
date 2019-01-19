import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public showMobileNavBar: Boolean = false;
  currentURL: string;
  constructor(public breakpointObserver: BreakpointObserver, private router: Router) {
    router.events.subscribe((_: NavigationEnd ) => this.currentURL = _.url);
   }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 770px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'Desktop and Tablet nav View'
          );
          this.showMobileNavBar = false;
        }  else {
          console.log(
            'Mobile View'
          );
          this.showMobileNavBar = true;
        }
      });
  }

}
