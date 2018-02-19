import { Directive, Input, HostListener, ElementRef } from '@angular/core';

/**
 * Generated class for the PwaHideWhenDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[pwa-hide-when]' // Attribute selector
})
export class PwaHideWhenDirective {

  constructor() {
    console.log('Hello PwaHideWhenDirective Directive');
  }

}
