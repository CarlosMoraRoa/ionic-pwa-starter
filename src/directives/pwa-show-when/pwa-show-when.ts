import { Directive, Input, ElementRef } from '@angular/core';

/**
 * Generated class for the PwaShowWhenDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[pwa-show-when]', // Attribute selector
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class PwaShowWhenDirective {

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.showWhenCheck();
  }

  onWindowResize() {
    this.showWhenCheck();
  }

  showWhenCheck() {
    this.el.nativeElement.hidden = window.innerWidth > 768 ? true : false;
  }

}
