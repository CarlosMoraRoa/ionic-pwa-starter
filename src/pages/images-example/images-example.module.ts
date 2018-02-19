import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagesExamplePage } from './images-example';

@NgModule({
  declarations: [
    ImagesExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(ImagesExamplePage),
  ],
})
export class ImagesExamplePageModule {}
