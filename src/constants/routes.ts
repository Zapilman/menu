export enum Routes {
  MAIN = '/',
  FEEDBACK = '/feedback',
  RESTAURANT_PREVIEW = '/:id',
  RESTAURANT_MENU = '/:id/menu/*',
  RESTAURANT_MENU_SECTION = ':section',

  NOT_FOUND = '*',
}
