System.register(["@angular/core", "@angular/router", "./home/home.component", "./user/register/register.component", "./user/login/login.component", "./user/list/list.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, home_component_1, register_component_1, login_component_1, list_component_1, routes, RoutesModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            }
        ],
        execute: function () {
            exports_1("routes", routes = [
                { path: '', component: home_component_1.HomeComponent },
                { path: 'register', component: register_component_1.RegisterComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'users', component: list_component_1.ListComponent }
            ]);
            RoutesModule = (function () {
                function RoutesModule() {
                }
                return RoutesModule;
            }());
            RoutesModule = __decorate([
                core_1.NgModule({
                    imports: [router_1.RouterModule.forRoot(routes)],
                    exports: [router_1.RouterModule]
                })
            ], RoutesModule);
            exports_1("RoutesModule", RoutesModule);
        }
    };
});
//# sourceMappingURL=routes.module.js.map