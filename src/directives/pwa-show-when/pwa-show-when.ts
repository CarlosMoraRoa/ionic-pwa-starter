import { Directive } from '@angular/core';

/**
 * Generated class for the PwaShowWhenDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[pwa-show-when]' // Attribute selector
})
export class PwaShowWhenDirective {

  constructor() {
    console.log('Hello PwaShowWhenDirective Directive');
  }

}
