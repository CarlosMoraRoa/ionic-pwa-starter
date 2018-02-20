# Ionic PWA Starter
A starter for ionic progressive web apps with some extras specific to desktop / tablet / mobile development. This starter assumes that the application being developed will
NOT be developed as a mobile application and therefor the default `@ionic` native scripts have been removed.

The start template consists primarily of custom directives and componets that might be useful in developement for a desktop to mobile website. This includes

  - Centering Content Directive
  - Large Flat Style
  - Desktop Toolbar Menu
  - Split Pane Extras

For more information see the [projects wiki](https://github.com/IsaacSomething/ionic-pwa-starter/wiki)

#### Demo

To demo, clone this repo

     $: git clone https://github.com/IsaacSomething/ionic-pwa-starter.git

You will need [node](https://nodejs.org/en/), [git](https://git-scm.com/downloads), npm and the [ionic cli](https://ionicframework.com/docs/cli/#installation) installed.

then

    $: npm install

and lastly

    $: ionic serve


#### Service Workers

By default the `service-worker.js` script code is commented out, this is because the service worker caches files and that is not ideal when developing an app. Uncomment the code when you want to push to production.
checkout [workbox](https://developers.google.com/web/tools/workbox/)

#### Roadmap
 - [Capacitor](https://capacitor.ionicframework.com/docs/basics/progressive-web-app)
