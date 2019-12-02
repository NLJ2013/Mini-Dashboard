# MiniDashboard

A simple Dashboard with a landing page and a dashboard with a navigation bar. there are two routes and they are
1. a data table displaying  the data of a local JSON file , used angular data tables from angular material
2. a div that changes the default text to a customized text on button click. to acheive this fuctionality, used angular directives

when navigate to dashboard by `http://localhost:4200/dashboard` it will redirect the clild route `http://localhost:4200/dashboard/books` which displays the data table and the relavant tab will be highlighted in the navbar.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
