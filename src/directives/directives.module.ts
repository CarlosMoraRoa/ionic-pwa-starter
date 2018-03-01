import { NgModule } from '@angular/core';
import { PwaShowLargerDirective } from './pwa-show-larger/pwa-show-larger';
import { PwaShowSmallerDirective } from './pwa-show-smaller/pwa-show-smaller';
import { PwaSplitpaneMaxWidthDirective } from './pwa-split-pane-max-width/pwa-split-pane-max-width';
import { PwaCenterDirective } from './pwa-center/pwa-center';
import { PwaLgFlatStyleDirective } from './pwa-lg-flat-style/pwa-lg-flat-style';


@NgModule({
  declarations: [
    PwaShowSmallerDirective,
    PwaShowLargerDirective,
    PwaSplitpaneMaxWidthDirective,
    PwaCenterDirective,
    PwaLgFlatStyleDirective],
  imports: [],
  exports: [
    PwaShowSmallerDirective,
    PwaShowLargerDirective,
    PwaSplitpaneMaxWidthDirective,
    PwaCenterDirective,
    PwaLgFlatStyleDirective]
})
export class DirectivesModule { }
