export class PWAConfig {

  public static readonly APP_CONFIG = {
    tabsPlacement: 'top'
  };

  public static readonly MenuItems = [
    { title: 'Home', component: 'HomePage' },
    { title: 'Center', component: 'CenterExamplePage' },
    { title: 'Images', component: 'ImagesExamplePage' },
    { title: 'Split Pane', component: 'SplitPaneExamplePage' },
    { title: 'Menu', component: 'CustomMenuExamplePage' },
    { title: 'Show/Hide', component: 'ShowHidePage' },
  ];

  public static readonly MenuItemsTopNav = [
    { title: 'Account', component: 'AccountPage' },
    { title: 'Logout', component: 'LogoutPage' },
  ];

}

export interface IMenuItems {
  title: string,
  component: string,
  icon?: string,
}