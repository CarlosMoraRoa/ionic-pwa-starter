import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PwaImgSwapperComponent } from './pwa-img-swapper/pwa-img-swapper';
import { PwaMenuComponent } from './pwa-menu/pwa-menu';


@NgModule({
  declarations: [PwaImgSwapperComponent,
    PwaMenuComponent],
  imports: [IonicModule],
  exports: [PwaImgSwapperComponent,
    PwaMenuComponent]
})
export class ComponentsModule { }
