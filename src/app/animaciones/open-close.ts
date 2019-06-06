import { animation, trigger, animateChild, group, transition, animate, style, query, state } from '@angular/animations';

export const openClose = animation([
  trigger('openClose', [
    // ...
    state('open', style({
      height: '0px',
      width: '0px',
      backgroundColor: 'red'
    })),
    state('closed', style({
      height: '100px',
      backgroundColor: 'green'
    })),
    transition('open => closed', [
      animate('0.5s')
    ]),
    transition('closed => open', [
      animate('0.5s')
    ]),
  ]),
  trigger('grandePequeño', [
    // ...
    state('pequeño', style({
      top: '50%',
      right: '50%',
      bottom: '50%',
      left: '50%'
    })),
    state('grande', style({
      top: '0',
      right: '0',
      bottom: '0',
      left: '0'
    })),
    transition('grande => pequeño', [
      animate('0.5s')
    ]),
    transition('pequeño => grande', [
      animate('1s')
    ]),
  ])
]);