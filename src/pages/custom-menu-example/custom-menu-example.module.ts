import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomMenuExamplePage } from './custom-menu-example';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    CustomMenuExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(CustomMenuExamplePage),
    ComponentsModule
  ],
})
export class CustomMenuExamplePageModule { }
