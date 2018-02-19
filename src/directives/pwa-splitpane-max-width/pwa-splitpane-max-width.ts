import { Directive, ElementRef, Input } from '@angular/core';

/**
 * Generated class for the PwaSplitpaneMaxWidthDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[pwa-splitpane-max-width]' // Attribute selector
})
export class PwaSplitpaneMaxWidthDirective {

  @Input('pwa-splitpane-max-width') maxWidth: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.style.maxWidth = `${this.maxWidth}px`;
  }

}
