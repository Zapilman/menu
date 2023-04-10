export enum Routes {
  MAIN = '/',
  RESTAURANT_PREVIEW = '/:id',
  RESTAURANT_MENU = '/:id/menu/*',
  RESTAURANT_MENU_SECTION = ':section',

  NOT_FOUND = '*',
}
