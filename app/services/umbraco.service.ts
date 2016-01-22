import {Component} from 'angular2/core';
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {AppConfig} from '../app.config';

@Component({
    providers : [AppConfig]
})

@Injectable()
export class UmbracoService {
    http: Http;

    constructor(http: Http, private config : AppConfig) {
        this.http = http;
    }
    
    getNodeData(id) {
        return this.http.get(this.config.get("apiUrl") + "/getnodedata/" + id).map(res => res.json());
    }

    getNodeByUrl(url) {
        return this.http.get(this.config.get("apiUrl") + "/getnodebyurl?url=" + url).map(res => res.json());
    }

    getProperty(alias, data) {
        for (var i = 0; i < data.Properties.length; i++) {
            if (data.Properties[i].Alias == alias) {
                return data.Properties[i];
            }
        }
        return { Value: "Property not found" };
    };
}