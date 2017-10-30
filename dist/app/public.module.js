System.register(["@angular/core", "@angular/common", "@angular/router", "@angular/platform-browser/animations", "@angular/common/http", "@angular/forms", "@angular/material", "hammerjs"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, router_1, animations_1, http_1, forms_1, material_1, publicModules, PublicModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
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
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (material_1_1) {
                material_1 = material_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            exports_1("publicModules", publicModules = [
                material_1.NoConflictStyleCompatibilityMode,
                animations_1.NoopAnimationsModule,
                http_1.HttpClientModule,
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                material_1.MatToolbarModule,
                material_1.MatCardModule,
                material_1.MatTableModule,
                material_1.MatButtonModule,
                material_1.MatInputModule
            ]);
            PublicModule = (function () {
                function PublicModule() {
                }
                return PublicModule;
            }());
            PublicModule = __decorate([
                core_1.NgModule({
                    imports: publicModules,
                    exports: publicModules
                })
            ], PublicModule);
            exports_1("PublicModule", PublicModule);
        }
    };
});
//# sourceMappingURL=public.module.js.map