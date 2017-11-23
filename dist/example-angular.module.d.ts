import { ModuleWithProviders } from '@angular/core';
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
export declare class ExampleAngularModule {
    static forRoot(): ModuleWithProviders;
}
