import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

@Injectable()
export class UmbracoService {
    http: Http;

    constructor(http: Http) {
        this.http = http
    }

    getNodeByUrl(url) {
        return this.http.get("http://preview.area.eelab.se/umbraco/api/nodeapi/getnodebyurl?url=" + url).map(res => res.json());
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