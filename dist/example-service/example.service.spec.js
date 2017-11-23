"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var example_service_1 = require("./example.service");
describe('ExampleService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                example_service_1.ExampleService
            ]
        });
    });
    it('should return polo', function () {
        var service = testing_1.TestBed.get(example_service_1.ExampleService);
        expect(service.marco()).toEqual('polo');
    });
    it('should return polo asynchronously', testing_1.async(function () {
        var service = testing_1.TestBed.get(example_service_1.ExampleService);
        service.asyncMarco().subscribe(function (res) {
            expect(res).toEqual('polo');
        });
    }));
});
//# sourceMappingURL=example.service.spec.js.map