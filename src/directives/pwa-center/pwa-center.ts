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

  ionPageEl: ElementRef;
  ionContentEl: ElementRef;

  constructor(private el: ElementRef, private renderer2: Renderer2) {
  }

  ngOnInit() {
    /**
     * Setting to add class name on split pane DOM element - allows to access as nativeElement by in ./app/app.component.ts
     * to hide main menu
     * Results in no split pane when content is center
     */
    this.ionContentEl = this.el.nativeElement;
    this.ionPageEl = this.renderer2.parentNode(this.el.nativeElement);
    this.renderer2.addClass(this.ionContentEl, 'pwa-center');
    this.renderer2.addClass(this.ionPageEl, 'pwa-center');


  }

  ngOnDestroy() {
    if (this.ionPageEl) {
      this.renderer2.removeClass(this.ionContentEl, 'pwa-center');
      this.renderer2.removeClass(this.ionPageEl, 'pwa-center');
    }
  }

}
