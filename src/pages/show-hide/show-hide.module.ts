import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowHidePage } from './show-hide';
import { ComponentsModule } from "../../components/components.module";
import { DirectivesModule } from "../../directives/directives.module";
import { TabOnePageModule } from "./tab-one/tab-one.module";
import { TabTwoPageModule } from "./tab-two/tab-two.module";


@NgModule({
  declarations: [
    ShowHidePage,
  ],
  imports: [
    IonicPageModule.forChild(ShowHidePage),
    ComponentsModule,
    DirectivesModule,
    TabOnePageModule,
    TabTwoPageModule
  ],
})
export class ShowHidePageModule { }
