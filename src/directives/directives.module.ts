import { NgModule } from '@angular/core';
import { PwaHideWhenDirective } from './pwa-hide-when/pwa-hide-when';
import { PwaShowWhenDirective } from './pwa-show-when/pwa-show-when';
import { PwaSplitpaneMaxWidthDirective } from './pwa-split-pane-max-width/pwa-split-pane-max-width';
import { PwaCenterDirective } from './pwa-center/pwa-center';


@NgModule({
  declarations: [
    PwaHideWhenDirective,
    PwaShowWhenDirective,
    PwaSplitpaneMaxWidthDirective,
    PwaCenterDirective],
  imports: [],
  exports: [
    PwaHideWhenDirective,
    PwaShowWhenDirective,
    PwaSplitpaneMaxWidthDirective,
    PwaCenterDirective]
})
export class DirectivesModule { }
