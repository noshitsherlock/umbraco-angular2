System.register(['angular2/platform/browser', 'angular2/http', './app.component', './app.config', 'rxjs/add/operator/map'], function(exports_1) {
    var browser_1, http_1, app_component_1, app_config_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (_1) {}],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, app_config_1.AppConfig]);
        }
    }
});
//# sourceMappingURL=boot.js.map