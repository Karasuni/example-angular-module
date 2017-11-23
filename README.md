# Example Angular Module

A minimal example of an npm publishable angular module.
Should be installable using `npm i -s example-angular-module` and by importing `ExampleAngularModule.forRoot()` in your angular app.

## Features

* NgModule `ExampleAngularModule`
  * Providers in `forRoot()` for lazy loading of services
* Service `ExampleService`
  * With sync and async tests

## TODO

* Optimize build configuration
* Set up Karma