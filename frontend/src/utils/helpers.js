export { formatWeight } from './helpers.js';

export const formatWeight = (weight) => {
  const { metric, imperial } = weight;
  return `${metric} kg / ${imperial} lbs`;
};