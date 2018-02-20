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

  ionMenuEl: any;

  constructor(private el: ElementRef, private renderer2: Renderer2) {
  }

  ngOnInit() {
    this.renderer2.addClass(this.renderer2.parentNode(this.el.nativeElement), 'pwa-center');
    this.ionMenuEl = this.el.nativeElement.parentElement.parentElement.parentElement.children[0];
    console.log('sd', this.ionMenuEl);

    if (this.ionMenuEl) {
      this.renderer2.addClass(this.ionMenuEl, 'pwa-hide');
    }
  }

  ngOnDestroy() {
    if (this.ionMenuEl) {
      this.renderer2.removeClass(this.ionMenuEl, 'pwa-hide');
    }
  }

}
