import { Directive, ElementRef, Input } from '@angular/core';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the PwaSplitpaneMaxWidthDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[pwa-split-pane-max-width]', // Attribute selector
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class PwaSplitpaneMaxWidthDirective {

  @Input('pwa-split-pane-max-width') maxWidth: string;

  constructor(private el: ElementRef, public platform: Platform) {
  }

  ngOnInit() {
    this.setMaxWidth();
  }

  onWindowResize() {
    this.setMaxWidth();
  }

  setMaxWidth() {
    if (window.innerWidth <= 768 && this.maxWidth && (!this.platform.is('ipad'))) {
      this.el.nativeElement.children[0].style.maxWidth = '100%';
    } else {
      this.el.nativeElement.children[0].style.maxWidth = `${this.maxWidth}px`;
    }
  }
}
