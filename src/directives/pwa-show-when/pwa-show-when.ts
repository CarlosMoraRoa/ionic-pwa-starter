import { Directive, Input, HostListener, ElementRef } from '@angular/core';

/**
 * Generated class for the PwaShowWhenDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[pwa-show-when]' // Attribute selector
})
export class PwaShowWhenDirective {

  @Input() showWhenWidth: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('window:resize', ['$event']) onResize(event: Event) {
    this.showWhenCheck();
  }

  showWhenCheck() {
    /* switch (true) {
      case window.innerWidth <= this.hideWhenWidth && !this.greaterThen: this.el.nativeElement.hidden = false;
        break;
      case window.innerWidth >= this.hideWhenWidth && this.greaterThen: this.el.nativeElement.hidden = false;
        break;
      default: this.el.nativeElement.hidden = true;
        break;
    } */
  }

}
