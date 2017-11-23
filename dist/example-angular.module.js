"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var example_service_1 = require("./example-service/example.service");
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var ExampleAngularModule = /** @class */ (function () {
    function ExampleAngularModule() {
    }
    ExampleAngularModule_1 = ExampleAngularModule;
    ExampleAngularModule.forRoot = function () {
        return {
            ngModule: ExampleAngularModule_1,
            providers: [example_service_1.ExampleService]
        };
    };
    ExampleAngularModule = ExampleAngularModule_1 = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [],
            exports: []
        })
    ], ExampleAngularModule);
    return ExampleAngularModule;
    var ExampleAngularModule_1;
}());
exports.ExampleAngularModule = ExampleAngularModule;
//# sourceMappingURL=example-angular.module.js.map