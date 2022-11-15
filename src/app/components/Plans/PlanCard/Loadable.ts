/**
 *
 * Asynchronously loads the component for PlanCard
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PlanCard = lazyLoad(
  () => import('./index'),
  module => module.PlanCard,
);
