export interface DrawerMenuType {
  label: string;
  icon: JSX.Element;
  subItems?: Array<DrawerMenuSubItemType>;
}

export interface DrawerMenuSubItemType {
  name: string;
  navigation: string;
}
