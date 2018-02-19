import { Directive, ElementRef, Input } from '@angular/core';

/**
 * Generated class for the PwaSplitpaneMaxWidthDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[pwa-splitpane-max-width]', // Attribute selector
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class PwaSplitpaneMaxWidthDirective {

  @Input('pwa-splitpane-max-width') maxWidth: string;
  initWidth: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.setMaxWidth();
  }

  onWindowResize() {
    this.setMaxWidth();
  }

  setMaxWidth() {
    window.innerWidth <= 767 && this.maxWidth ? this.el.nativeElement.style.maxWidth = '100%' : this.el.nativeElement.style.maxWidth = `${this.maxWidth}px`;
  }
}
