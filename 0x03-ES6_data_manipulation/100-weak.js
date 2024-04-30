/**
 * Utilizes a weak map to track the number of calls made to various endpoints.
 */
export const weakMap = new WeakMap();

/**
 * Defines the maximum allowable calls for a single endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Tracks the number of calls made to an API's endpoint.
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - The endpoint to query.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
