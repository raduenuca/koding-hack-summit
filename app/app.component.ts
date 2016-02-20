import {Component} from 'angular2/core';

@Component({
    selector: 'timesheet-app',
    //directives: [ROUTER_DIRECTIVES],
    template: `
        <div class="container">
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Brand</a>
                    </div>

                    <div class="collapse navbar-collapse">
                        <ul class="nav navbar-nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    `
})
export class AppComponent {}