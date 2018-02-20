import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CenterExamplePage } from './center-example';
import { DirectivesModule } from "../../directives/directives.module";
import { ComponentsModule } from "../../components/components.module";


@NgModule({
  declarations: [
    CenterExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(CenterExamplePage),
    DirectivesModule,
    ComponentsModule
  ],
})
export class CenterExamplePageModule {}
