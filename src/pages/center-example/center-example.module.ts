import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CenterExamplePage } from './center-example';
import { DirectivesModule } from "../../directives/directives.module";

@NgModule({
  declarations: [
    CenterExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(CenterExamplePage),
    DirectivesModule
  ],
})
export class CenterExamplePageModule {}
