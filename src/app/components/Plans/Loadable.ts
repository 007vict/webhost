/**
 *
 * Asynchronously loads the component for Plans
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Plans = lazyLoad(
  () => import('./index'),
  module => module.Plans,
);
