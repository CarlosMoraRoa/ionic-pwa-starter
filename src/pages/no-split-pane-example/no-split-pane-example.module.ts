import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoSplitPaneExamplePage } from './no-split-pane-example';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    NoSplitPaneExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(NoSplitPaneExamplePage),
    ComponentsModule
  ],
})
export class NoSplitPaneExamplePageModule { }
