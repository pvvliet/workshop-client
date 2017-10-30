System.register(["@angular/core", "@angular/common", "@angular/platform-browser", "@angular/router", "@angular/platform-browser/animations", "@angular/common/http", "./user/user.module", "./user/register/register.component", "./user/login/login.component", "./app.component", "hammerjs"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, platform_browser_1, router_1, animations_1, http_1, user_module_1, register_component_1, login_component_1, app_component_1, routes, SharedModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (animations_1_1) {
                animations_1 = animations_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (user_module_1_1) {
                user_module_1 = user_module_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            exports_1("routes", routes = [
                { path: '', component: register_component_1.RegisterComponent },
                { path: 'register', component: register_component_1.RegisterComponent },
                { path: 'login', component: login_component_1.LoginComponent }
            ]);
            SharedModule = (function () {
                function SharedModule() {
                }
                return SharedModule;
            }());
            SharedModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        router_1.RouterModule.forRoot(routes),
                        animations_1.BrowserAnimationsModule,
                        http_1.HttpClientModule,
                        common_1.CommonModule,
                        user_module_1.UserModule
                    ],
                    exports: [common_1.CommonModule],
                    declarations: [app_component_1.AppComponent],
                    bootstrap: [app_component_1.AppComponent]
                })
            ], SharedModule);
            exports_1("SharedModule", SharedModule);
        }
    };
});
//# sourceMappingURL=shared.module.js.map