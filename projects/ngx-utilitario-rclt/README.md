# NgxUtilitarioRclt


This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

The library is in developmenting

documentation with compodoc

testing with jasmine and karma

quality with sonaqube

## documentation

Run `npm run compodoc` 

## testing

Run `npm run test` 

## quality

Run `npm run sonarqube` 

## Further help

send a email to renatoclt@hotmail.com. i try help you.

## Installation

Install ngx-utilitario-clt from npm:

```sh
$ npm install ngx-utilitario-rclt
```

### Features

    - Pipes:
    -- highlight
    -- numberToArray

## Usage

### Highlight

Add package to NgModule imports:

```sh
 imports: [
    NgxUtilitarioPipesModule
  ],
```

    Example

.html
```sh
<div  innerHTML="{{ message | highlight : search}}">
```
.ts
```sh
export class AppComponent {
  message = 'this is a message';
  search = 's';
}
```
.css
```sh
::ng-deep .search-highlight{
    background: red;
}
```

    Result

![alt text](https://firebasestorage.googleapis.com/v0/b/ngx-utilitario-rclt.appspot.com/o/highlight.PNG?alt=media&token=2f67da16-abdf-4a74-8933-d106b889634d)

### NumberToArray

Add package to NgModule imports:

```sh
 imports: [
    NgxUtilitarioPipesModule
  ],
```

    Example

.html
```sh
<div *ngFor="let i of number | numberToArray">
  {{i}}
</div>
```
.ts
```sh
export class AppComponent {
  number = 5;
}
```

    Result

![alt text](https://firebasestorage.googleapis.com/v0/b/ngx-utilitario-rclt.appspot.com/o/numberToArray.PNG?alt=media&token=cd0ae69f-d8b3-4c8b-82c1-8b66676d0a5a)
