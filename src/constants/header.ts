// import { logout } from 'utils/auth';
import { ROUTES } from 'constants/routes';

export const MENU_ITEMS: MenuItemType[] = [
  {
    title: 'item1',
  },
  {
    title: 'item2',
  },
  {
    title: 'item3',
  },
  {
    title: 'item4',
  },
  {
    title: 'item5',
  },
];

export const USER_MENU: UserMenuType[] = [
  {
    title: 'Your profile',
    type: 'link',
    href: ROUTES.PROFILE,
  },
  {
    title: 'Log out',
    type: 'action',
    // action: logout,
  },
];
