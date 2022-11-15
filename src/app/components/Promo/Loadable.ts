/**
 *
 * Asynchronously loads the component for Promo
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Promo = lazyLoad(
  () => import('./index'),
  module => module.Promo,
);
