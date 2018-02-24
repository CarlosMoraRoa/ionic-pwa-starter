import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabOnePage } from './tab-one';
import { DirectivesModule } from "../../../directives/directives.module";

@NgModule({
  declarations: [
    TabOnePage,
  ],
  imports: [
    IonicPageModule.forChild(TabOnePage),
    DirectivesModule
  ],
})
export class TabOnePageModule { }
