System.register(["@angular/core", "./list.datasource", "../user.service"], function (exports_1, context_1) {
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
    var core_1, list_datasource_1, user_service_1, ListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (list_datasource_1_1) {
                list_datasource_1 = list_datasource_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }
        ],
        execute: function () {
            ListComponent = (function () {
                function ListComponent(userService) {
                    this.userService = userService;
                    this.displayedColumns = ['fullName', 'postcode', 'streetnumber', 'emailAddress'];
                    this.dataSource = null;
                    this.getUsersList();
                }
                ListComponent.prototype.getUsersList = function () {
                    var _this = this;
                    this.userService.getAll().subscribe(function (users) {
                        _this.dataSource = new list_datasource_1.ListDataSource(users);
                    });
                };
                ListComponent.prototype.hasData = function () {
                    return this.dataSource !== null;
                };
                return ListComponent;
            }());
            ListComponent = __decorate([
                core_1.Component({
                    selector: 'user-list',
                    templateUrl: 'app/user/list/list.component.html',
                    styleUrls: ['app/user/list/list.component.css'],
                }),
                __metadata("design:paramtypes", [user_service_1.UserService])
            ], ListComponent);
            exports_1("ListComponent", ListComponent);
        }
    };
});
//# sourceMappingURL=list.component.js.map