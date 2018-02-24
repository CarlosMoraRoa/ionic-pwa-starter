import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PwaImgSwapperComponent } from './pwa-img-swapper/pwa-img-swapper';
import { PwaMenuComponent } from './pwa-menu/pwa-menu';
import { PwaImageComponent } from './pwa-image/pwa-image';


@NgModule({
  declarations: [PwaImgSwapperComponent,
    PwaMenuComponent,
    PwaImageComponent],
  imports: [IonicModule],
  exports: [PwaImgSwapperComponent,
    PwaMenuComponent,
    PwaImageComponent]
})
export class ComponentsModule { }
