System.register(["@angular/core", "@angular/common/http", "./authorization.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, authorization_service_1, ApiService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (authorization_service_1_1) {
                authorization_service_1 = authorization_service_1_1;
            }
        ],
        execute: function () {
            ApiService = (function () {
                function ApiService(http, authService) {
                    this.http = http;
                    this.authService = authService;
                }
                ApiService.prototype.createQueryString = function (queryParameters) {
                    var queryString = '';
                    if (typeof queryParameters === 'object') {
                        for (var key in queryParameters) {
                            var value = queryParameters[key];
                            var prefix = queryString.length === 0 ? '?' : '&';
                            queryString += "" + prefix + key + "=" + value;
                        }
                    }
                    return queryString;
                };
                ApiService.prototype.createURI = function (path, queryParameters) {
                    var queryString = this.createQueryString(queryParameters);
                    return "/api/" + path + queryString;
                };
                ApiService.prototype.createRequestHeaders = function () {
                    var headers = new http_1.HttpHeaders();
                    if (this.authService.hasAuthorization()) {
                        headers = headers.set('Authorization', this.authService.createAuthorizationString());
                    }
                    return headers;
                };
                ApiService.prototype.get = function (path, queryParameters) {
                    var uri = this.createURI(path, queryParameters);
                    var headers = this.createRequestHeaders();
                    return this.http.get(uri, { headers: headers });
                };
                ApiService.prototype.post = function (path, data, queryParameters) {
                    var uri = this.createURI(path, queryParameters);
                    var headers = this.createRequestHeaders();
                    return this.http.post(uri, data, { headers: headers });
                };
                ApiService.prototype.put = function (path, data, queryParameters) {
                    var uri = this.createURI(path, queryParameters);
                    var headers = this.createRequestHeaders();
                    return this.http.put(uri, data, { headers: headers });
                };
                ApiService.prototype.delete = function (path, queryParameters) {
                    var uri = this.createURI(path, queryParameters);
                    var headers = this.createRequestHeaders();
                    return this.http.delete(uri, { headers: headers });
                };
                return ApiService;
            }());
            ApiService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.HttpClient, authorization_service_1.AuthorizationService])
            ], ApiService);
            exports_1("ApiService", ApiService);
        }
    };
});
//# sourceMappingURL=api.service.js.map