import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoSplitPaneExamplePage } from './no-split-pane-example';

@NgModule({
  declarations: [
    NoSplitPaneExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(NoSplitPaneExamplePage),
  ],
})
export class NoSplitPaneExamplePageModule {}
