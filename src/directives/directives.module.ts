import { NgModule } from '@angular/core';
import { PwaHideWhenDirective } from './pwa-hide-when/pwa-hide-when';
import { PwaShowWhenDirective } from './pwa-show-when/pwa-show-when';
import { PwaSplitpaneMaxWidthDirective } from './pwa-splitpane-max-width/pwa-splitpane-max-width';

@NgModule({
  declarations: [
    PwaHideWhenDirective,
    PwaShowWhenDirective,
    PwaSplitpaneMaxWidthDirective],
  imports: [],
  exports: [
    PwaHideWhenDirective,
    PwaShowWhenDirective,
    PwaSplitpaneMaxWidthDirective]
})
export class DirectivesModule { }
