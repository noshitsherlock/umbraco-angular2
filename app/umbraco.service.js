System.register(["angular2/core","angular2/http"],function(t){var e,r,n,o=this&&this.__decorate||function(t,e,r,n){var o,a=arguments.length,i=3>a?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(3>a?o(i):a>3?o(e,r,i):o(e,r))||i);return a>3&&i&&Object.defineProperty(e,r,i),i},a=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0};return{setters:[function(t){e=t},function(t){r=t}],execute:function(){n=function(){function t(t){this.http=t}return t.prototype.getNodeByUrl=function(t){return this.http.get("http://preview.area.eelab.se/umbraco/api/nodeapi/getnodebyurl?url="+t).map(function(t){return t.json()})},t.prototype.getProperty=function(t,e){for(var r=0;r<e.Properties.length;r++)if(e.Properties[r].Alias==t)return e.Properties[r];return{Value:"Property not found"}},t=o([e.Injectable(),a("design:paramtypes",[r.Http])],t)}(),t("UmbracoService",n)}}});