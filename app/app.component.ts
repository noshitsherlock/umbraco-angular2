import {Component, OnInit} from 'angular2/core';
import {UmbracoService} from './services/umbraco.service';
import {AppError} from './components/app.error';

@Component({
    selector: 'my-app',
    directives : [AppError],
    templateUrl: './app/templates/properties.html',
    providers: [UmbracoService]
})

export class AppComponent implements OnInit {
    objectData: any;
    error: any;

    constructor(private _umbracoService: UmbracoService) { }

    getNodeByUrl() {
        this._umbracoService.getNodeByUrl("/stockholm")
            .subscribe(data => this.objectData = data, error => this.error = error);
    }

    ngOnInit() {
        this.getNodeByUrl();
    }
}