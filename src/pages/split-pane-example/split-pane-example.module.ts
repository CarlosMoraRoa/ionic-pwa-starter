import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplitPaneExamplePage } from './split-pane-example';
import { ComponentsModule } from "../../components/components.module";


@NgModule({
  declarations: [
    SplitPaneExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(SplitPaneExamplePage),
    ComponentsModule
  ],
})
export class SplitPaneExamplePageModule {}
