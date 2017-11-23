import { NgModule, ModuleWithProviders } from '@angular/core';

import { ExampleService } from './example-service/example.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
    imports: [],
    declarations: [],
    exports: []
})
export class ExampleAngularModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ExampleAngularModule,
            providers: [ExampleService]
        };
    }
}
