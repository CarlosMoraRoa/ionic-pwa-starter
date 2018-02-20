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

  constructor(private el: ElementRef, private renderer2: Renderer2) {
  }

  ngOnInit() {
    let parentEl = this.renderer2.parentNode(this.el.nativeElement);
    console.log('asdas', this.renderer2.parentNode(parentEl));
    let tron: ElementRef = this.renderer2.parentNode(parentEl);
    tron.nativeElement.hidden = true;

    this.renderer2.addClass(parentEl, 'pwa-center');
  }

}
