import { Directive, Input, ElementRef } from '@angular/core';

/**
 * Generated class for the PwaHideWhenDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[pwa-hide-when]', // Attribute selector
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class PwaHideWhenDirective {

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.showWhenCheck();
  }

  onWindowResize() {
    this.showWhenCheck();
  }

  showWhenCheck() {
    this.el.nativeElement.hidden = window.innerWidth > 768 ? false : true;
  }

}
