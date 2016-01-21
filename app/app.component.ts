import {Component, OnInit} from 'angular2/core';
import {UmbracoService} from './umbraco.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{objectData?.Properties}}</h1>                        
            <ul>
            <li *ngFor="#prop of objectData?.Properties">
                <span>Value: {{prop.Value}}</span>
            </li>
        </ul>
                `,
    providers: [UmbracoService]
})

export class AppComponent implements OnInit {    
    public objectData : any;
    
    constructor(private _umbracoService: UmbracoService) {}
   
    
    getNodeByUrl() {                        
        this._umbracoService.getNodeByUrl("/stockholm").subscribe(data => this.objectData = data);               
    }
    
    ngOnInit() {        
        this.getNodeByUrl();
    }
 }