/*
 * Angular
 */
import {provide, Component} from 'angular2/core';
import {
  ROUTER_DIRECTIVES,
  Router,
  RouteConfig,
} from 'angular2/router';

/*
 * Components
 */
import {HomeComponent} from './components/home.component';
import {AboutComponent} from './components/about.component';
import {ContactComponent} from './components/contact.component';

@Component({
  selector: 'timesheet-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <div class="container">
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" [routerLink]="['/Home']">Brand</a>
                </div>

                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['/Home']">Home</a></li>
                        <li><a [routerLink]="['/About']">About</a></li>
                        <li><a [routerLink]="['/Contact']">Contact us</a>/<li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-outlet></router-outlet>
    </div>
  `
})
@RouteConfig([
  { path: '/',          name: 'root',      redirectTo: ['Home'] },
  { path: '/home',      name: 'Home',      component: HomeComponent },
  { path: '/about',     name: 'About',     component: AboutComponent },
  { path: '/contact',   name: 'Contact',   component: ContactComponent }
])
export class TimesheetApp {
  constructor(public router: Router) { }
}
