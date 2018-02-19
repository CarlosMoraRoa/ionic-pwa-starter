# Ionic PWA Starter
A starter for ionic progressive web apps with some extras specific to desktop / tablet / mobile development.


### Splitpane
[Splitpane](https://ionicframework.com/docs/api/components/split-pane/SplitPane/) is added with a directive `pwa-splitpane-max-width`, which allows you to set the max width for your splitpane. The directive tragets the child element on the `ion-split-pane` tag

    <ion-split-pane>
       <ion-menu [content]="content" [pwa-split-pane-max-width]="200">

This allows you to set the max width on the content of the split pane while leaving the default slide out menu on mobile devices. Remember to add 

    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>

in your pages, to `<ion-navbar>`, in order to get the [menu toggle functionality](https://ionicframework.com/docs/api/components/menu/MenuToggle/).


     