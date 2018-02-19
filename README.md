# Ionic PWA Starter
A starter for ionic progressive web apps with some extras specific to desktop / tablet / mobile development.

### Directives
All directives are exported as a module. In order to use the directive in a new page first generate the page using ionic's cli

    $: ionic g page new-foobar

Once the new page is created, add the Directives module to the pages module ( in this case new-foobar.module.ts) imports

    ....
    import { DirectivesModule } from "../../directives/directives.module";

    @NgModule({
      declarations: [
        NewFoobarPage,
      ],
      imports: [
        IonicPageModule.forChild(NewFoobarPage),
        DirectivesModule
      ],
    })

### Splitpane
[Splitpane](https://ionicframework.com/docs/api/components/split-pane/SplitPane/) is added with a directive `pwa-splitpane-max-width`, which allows you to set the max width for your splitpane. The directive tragets the child element on the `ion-split-pane` tag

    <ion-split-pane>
       <ion-menu [content]="content" [pwa-split-pane-max-width]="200">

This allows you to set the max width on the content of the split pane while leaving the default slide out menu on mobile devices. Remember to add 

    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>

in your pages, to `<ion-navbar>`, in order to get the [menu toggle functionality](https://ionicframework.com/docs/api/components/menu/MenuToggle/).

### Centering
It is common for desktop have sites it have a center based layout, if one is not using the split pane ( say in a non admin view) you can add the directive `pwa-center` this will target the `ion-header`, `ion-content` and `ion-footer` tags contained in your page and applies the styles in the `./theme/pwa-center.scss` stylesheet.

    <ion-content pwa-center>
      Header content, main content and footer content are centered
    </ion-content>
