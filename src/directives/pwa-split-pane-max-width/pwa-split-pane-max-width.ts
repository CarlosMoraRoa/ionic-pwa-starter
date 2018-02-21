import { Directive, ElementRef, Input } from '@angular/core';

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

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.setMaxWidth();
  }

  onWindowResize() {
    this.setMaxWidth();
  }

  setMaxWidth() {
    window.innerWidth <= 767 && this.maxWidth ? this.el.nativeElement.children[0].style.maxWidth = '100%' : this.el.nativeElement.children[0].style.maxWidth = `${this.maxWidth}px`;
  }
}
