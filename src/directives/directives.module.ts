import { NgModule } from '@angular/core';
import { IonShowIfDirective } from './ion-show-if/ion-show-if';
import { IonHideWhenDirective } from './ion-hide-when/ion-hide-when';
import { PwaHideWhenDirective } from './pwa-hide-when/pwa-hide-when';
import { PwaShowWhenDirective } from './pwa-show-when/pwa-show-when';
import { PwaSplitpaneMaxWidthDirective } from './pwa-splitpane-max-width/pwa-splitpane-max-width';
@NgModule({
	declarations: [IonShowIfDirective,
    IonHideWhenDirective,
    PwaHideWhenDirective,
    PwaShowWhenDirective,
    PwaSplitpaneMaxWidthDirective],
	imports: [],
	exports: [IonShowIfDirective,
    IonHideWhenDirective,
    PwaHideWhenDirective,
    PwaShowWhenDirective,
    PwaSplitpaneMaxWidthDirective]
})
export class DirectivesModule {}
