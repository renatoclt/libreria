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
    - Components (Adding manual):
    -- Loading 
    --- Spinner, ellipsis.
    -- cards
    -- chat
    -- Dynamic-Component
    -- form dynamic
    -- graphics
    -- icons
    -- mapbox
    -- menu
    -- modal
    -- perfect-scroll
    - Class (Adding manual):
    -- Fecha

## Usage

### Highlight

Add package to NgModule imports:

```sh
 imports: [
    NgxUtilitarioPipesModule
  ],
```

  ExamExample

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


### loading



Add package to NgModule imports:

```sh
    import {NgxUtilitarioLoadingModule,
        LOADING_INDICATOR_CONFIG,
        EllipsisComponent} from 'ngx-utilitario-rclt';
  @NgModule({
    imports: [
      NgxUtilitarioLoadingModule
    ],
    providers: [
      {provide: LOADING_INDICATOR_CONFIG, useValue: {
        size: '5.5',
        color: '#fff',
        overlayColor: 'rgba(100,100,100,0.3)',
        indicatorComponent: EllipsisComponent
        }}
      ],
    })
  ],
```

or you can use configuration for default

```sh
  providers: [
    {provide: LOADING_INDICATOR_CONFIG, useValue: DEFAULT_CONFIG}
  ],
```
You can use "Ellipsis Component" or "Spinner Component". I use spinner for default. i try add more loading

  Example
I recommend use inside app.component.html
.html
```sh
  <ngx-utilitario-loading></ngx-utilitario-loading>
```
.ts
```sh
export class AppComponent implements OnInit {
  ngOnInit() {
    this.triggerLoadingIndicator();
  }

  @startLoading
  triggerLoadingIndicator() {
    setTimeout(this.triggerLoadingIndicatorStop.bind(this), 2000);
  }

  @stopLoading
  triggerLoadingIndicatorStop() {
    console.log('stopped');
  }
}

```

If you add styles in angular.json you dont need any more. else add this styles in app.component.css
pd: i trying delete this step.

```sh

```

