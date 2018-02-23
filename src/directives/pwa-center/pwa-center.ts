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

  ionMenuEl: ElementRef;

  constructor(private el: ElementRef, private renderer2: Renderer2) {
  }

  ngOnInit() {
    this.renderer2.addClass(this.renderer2.parentNode(this.el.nativeElement), 'pwa-center');

    /**
     * By default applying the pwa-center directive, removes the split pane.
     */
   /*  this.ionMenuEl = this.renderer2.selectRootElement('ion-menu');
    console.log('test', this.ionMenuEl);
    console.log('test2', );

    if (this.ionMenuEl) {
      this.renderer2.addClass(this.ionMenuEl, 'pwa-hide');
    } */
  }

  ngOnDestroy() {
    /* if (this.ionMenuEl) {
      this.renderer2.removeClass(this.ionMenuEl, 'pwa-hide');
    } */
  }

}
