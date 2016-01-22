import {Injectable} from 'angular2/core';

@Injectable()
export class AppConfig {
    config: any;

    constructor() {
        this.config = [{
            "key": { "name": "apiUrl", "value": "http://preview.area.eelab.se/umbraco/api/nodeapi" }
        }];
    }

    get(key) {
        for (var i = 0; i <= this.config.length; i++) {
            if (this.config[i].key.name == key)
                return this.config[i].key.value;
        }
    }
}