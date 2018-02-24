import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagesExamplePage } from './images-example';
import { ComponentsModule } from "../../components/components.module";


@NgModule({
  declarations: [
    ImagesExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(ImagesExamplePage),
    ComponentsModule
  ],
})
export class ImagesExamplePageModule { }
