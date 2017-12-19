# Manojangular2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Observe the object what you get and then modify the Html code.(Remember this suggestion)
## HTML File
<table>
  <thead>
    <th class="col-sm-3">ID</th>
    <th class="col-sm-3">NAME</th>
    <th class="col-sm-3">Avatar</th>
  </thead>
  <tr *ngFor="let details of fieldsArray">
    <td class="col-sm-3">{{details.id}}</td>
    <td class="col-sm-3">{{details.first_name + " " + details.first_name}}</td>
    <td class="col-sm-3"><img src="{{details.avatar}}"></td>
  </tr>
</table>
## get-data.component.ts file
getdata(){
  let errMessage: any = [];
  this.getservice.gettingfunction()
  .subscribe(
    (locationFields) => {
      this.fieldsArray = locationFields.data;
      console.log(this.fieldsArray);
    },
    errorMsg => errMessage = <any>errorMsg
  );
}
