# MiniDashboard

A simple Dashboard with a landing page and a dashboard with a navigation bar. there are two routes and they are
1. a data table displaying  the data of a local JSON file , used angular data tables from angular material
2. a div that changes the default text to a customized text on button click. to acheive this fuctionality, used angular directives

when navigate to dashboard by `http://localhost:4200/dashboard` it will redirect the clild route `http://localhost:4200/dashboard/books` which displays the data table and the relavant tab will be highlighted in the navbar.

## Build

Install @angular-devkit/build-angular as dev dependency if it is not previously installed

then run `ng build` to build the project 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

## tools used

1. Angular CLI
2. Angular Material
3. SCSS
4. [Example json](example.json) as a payload,
5. Lorem Ipsum

