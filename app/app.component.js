System.register(['angular2/core', './umbraco.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, umbraco_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (umbraco_service_1_1) {
                umbraco_service_1 = umbraco_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_umbracoService) {
                    this._umbracoService = _umbracoService;
                }
                AppComponent.prototype.getNodeByUrl = function () {
                    var _this = this;
                    this._umbracoService.getNodeByUrl("/stockholm").subscribe(function (data) { return _this.objectData = data; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getNodeByUrl();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>{{objectData?.Properties}}</h1>                        \n            <ul>\n            <li *ngFor=\"#prop of objectData?.Properties\">\n                <span>Value: {{prop.Value}}</span>\n            </li>\n        </ul>\n                ",
                        providers: [umbraco_service_1.UmbracoService]
                    }), 
                    __metadata('design:paramtypes', [umbraco_service_1.UmbracoService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map