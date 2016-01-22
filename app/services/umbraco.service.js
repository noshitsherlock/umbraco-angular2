System.register(['angular2/core', 'angular2/http', '../components/app.config'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, http_1, app_config_1;
    var UmbracoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            }],
        execute: function() {
            UmbracoService = (function () {
                function UmbracoService(http, config) {
                    this.config = config;
                    this.http = http;
                }
                UmbracoService.prototype.getNodeData = function (id) {
                    return this.http.get(this.config.get("apiUrl") + "/getnodedata/" + id).map(function (res) { return res.json(); });
                };
                UmbracoService.prototype.getNodeByUrl = function (url) {
                    return this.http.get(this.config.get("apiUrl") + "/getnodebyurl?url=" + url).map(function (res) { return res.json(); });
                };
                UmbracoService.prototype.getProperty = function (alias, data) {
                    for (var i = 0; i < data.Properties.length; i++) {
                        if (data.Properties[i].Alias == alias) {
                            return data.Properties[i];
                        }
                    }
                    return { Value: "Property not found" };
                };
                ;
                UmbracoService = __decorate([
                    core_1.Component({
                        providers: [app_config_1.AppConfig]
                    }),
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, app_config_1.AppConfig])
                ], UmbracoService);
                return UmbracoService;
            })();
            exports_1("UmbracoService", UmbracoService);
        }
    }
});
//# sourceMappingURL=umbraco.service.js.map