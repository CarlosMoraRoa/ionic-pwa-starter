import { Directive, ElementRef, Renderer2 } from '@angular/core';

/**
 * Generated class for the PwaCenterDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[pwa-center]' // Attribute selector
})
export class PwaCenterDirective {

  ionContentEl: ElementRef;

  constructor(private el: ElementRef, private renderer2: Renderer2) {
  }

  ngOnInit() {
    this.ionContentEl = this.renderer2.parentNode(this.el.nativeElement)
    this.renderer2.addClass(this.ionContentEl, 'pwa-center');
  }

  ngOnDestroy() {
    if (this.ionContentEl) {
      this.renderer2.removeClass(this.ionContentEl, 'pwa-center');
    }
  }

}
