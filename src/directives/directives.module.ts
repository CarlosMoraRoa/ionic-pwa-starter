import { NgModule } from '@angular/core';
import { PwaHideWhenDirective } from './pwa-hide-when/pwa-hide-when';
import { PwaShowWhenDirective } from './pwa-show-when/pwa-show-when';
import { PwaSplitpaneMaxWidthDirective } from './pwa-split-pane-max-width/pwa-split-pane-max-width';
import { PwaCenterDirective } from './pwa-center/pwa-center';
import { PwaLgFlatStyleDirective } from './pwa-lg-flat-style/pwa-lg-flat-style';


@NgModule({
  declarations: [
    PwaHideWhenDirective,
    PwaShowWhenDirective,
    PwaSplitpaneMaxWidthDirective,
    PwaCenterDirective,
    PwaLgFlatStyleDirective],
  imports: [],
  exports: [
    PwaHideWhenDirective,
    PwaShowWhenDirective,
    PwaSplitpaneMaxWidthDirective,
    PwaCenterDirective,
    PwaLgFlatStyleDirective]
})
export class DirectivesModule { }
