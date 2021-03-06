# CodeCoverageConspiracy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running tests

Run `ng run test` to execute the tests via [Karma](https://karma-runner.github.io).

# Code Coverage (The Conspiracy!!)

Run `npm run test:coverage` to run code coverage.

See the terrible, scandelous lies that Jasmine, Cobertura and the Angular TestBed feed you! The only tests here are 6 `should create` tests generated by the Angular CLI. With that, you get amazing code coverage!

- 88.43% Statements (107/121)
- 70.00% Branches (7/10)
- 84.62% Functions (33/39)
- 88.18% Lines (97/110)

Two components have 100% coverage, as does the model and **the model has no spec.**

## What's happening? Why does this happen?

- The **Angular TestBed** spools up the component and calls the template bindings as it runs through a component lifecycle check. Any function tied into the template that's not a response to an action (like `(click)`) gets called.
- **Jasmine** has no way to check that the code being executed is actually examined, so it can only tell **Karma-Istanbul** what lines were ran, so those get counted.
- Thus, if you tie as many all of your functions into lifecycle hooks or template calls, **Angular** will execute all of the code for you, and trick **Jasmine** & **Karma-Istanbul** into counting it.
