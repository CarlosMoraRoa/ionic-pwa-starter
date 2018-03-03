import { Directive, Input, ElementRef } from '@angular/core';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the PwaHideWhenDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[pwa-show-larger]', // Attribute selector
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class PwaShowLargerDirective {

  constructor(private el: ElementRef, public platform: Platform) {
  }

  ngOnInit() {
    this.showWhenCheck();
  }

  onWindowResize() {
    this.showWhenCheck();
  }

  showWhenCheck() {
    this.el.nativeElement.hidden = window.innerWidth > 768 && !this.platform.is('ipad') ? false : true;
  }


}
