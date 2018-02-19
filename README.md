# Ionic PWA Starter
A starter for ionic progressive web apps with some extras specific to desktop / tablet / mobile development.

### Directives
All directives are exported as a module. In order to use the directive in a new page first generate a new page, using ionic's cli

    $: ionic g page new-foobar

Once the new page is created, add the directives module to the pages module, in this case `new-foobar.module.ts`, imports

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
Ionic [Splitpane](https://ionicframework.com/docs/api/components/split-pane/SplitPane/) is added with a directive `pwa-split-pane-max-width`, which allows you to set the max width for your splitpane. The directive targets the child element on the `ion-split-pane` tag

    <ion-split-pane>
       <ion-menu [content]="content" [pwa-split-pane-max-width]="200">

This allows you to set the max width on the content of the split pane while leaving the default slide out menu on mobile devices. Remember to add 

    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>

in your pages, to `<ion-navbar>`, in order to get the [menu toggle functionality](https://ionicframework.com/docs/api/components/menu/MenuToggle/).

### Centering
It is common for desktop sites it have a center based layout, if one is not using the split pane ( say in a non admin view ) you can add the directive `pwa-center` this will target the `ion-header`, `ion-content` and `ion-footer` tags contained in your page and applies the styles in the `./theme/pwa-center.scss` stylesheet.

    <ion-content pwa-center>
      Header content, main content and footer content are centered
    </ion-content>

### Large Flat Style
By default ionic sets the main theme style to android for desktop applications. This is not a bad option as it closely resembles a material design ( which looks good on desktop ). However there are a few tweeks that can be applied to better align with a generic style. We have added a directive `pwa-lg-flat-style` which currently removes the drop shadow image on tabs, menus and toolbars ( see `./theme/pwa-lg-flat-style`) . The Style is removed for anything less then your defined `lg` size. To added the flat style add the directive to 
your `ion-nav` in your `./app/app.html` file.

    <ion-nav [root]="rootPage" #content main swipeBackEnabled="false" pwa-lg-flat-style></ion-nav>

#### Service Workers

By default the `service-worker.js` script code is commented out, this is because the service worker caches files and that is not ideal when developing an app. Uncomment the code when you want to push to production.
checkout [workbox](https://developers.google.com/web/tools/workbox/)

#### Roadmap
 - [Capacitor](https://capacitor.ionicframework.com/docs/basics/progressive-web-app)
