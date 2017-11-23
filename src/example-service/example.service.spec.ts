import { async, TestBed } from '@angular/core/testing';

import { ExampleService } from './example.service';

describe('ExampleService', () => {

    beforeEach(() => {
       TestBed.configureTestingModule({
           providers: [
               ExampleService
           ]
       });
    });

    it('should return polo', () => {
        let service : ExampleService = TestBed.get(ExampleService);

        expect(service.marco()).toEqual('polo');
    });

    it('should return polo asynchronously',  async(() => {
        let service : ExampleService = TestBed.get(ExampleService);

        service.asyncMarco().subscribe((res) => {
            expect(res).toEqual('polo');
        });
    }));
});