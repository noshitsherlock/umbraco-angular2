import {Component} from 'angular2/core';

@Component({
    selector: 'error-info',
    template: '<div><p>Error loading response from service</p></div>'
})

export class AppError{
    constructor() {}
}