/**
 * Utilizes a weak map to track the number of calls made to various endpoints.
 * Export a const instance of WeakMap and name it weakMap.
 * Export a new function named queryAPI. It should accept an endpoint argument like so:

 * {
 *   protocol: 'http',
 *   name: 'getUsers',
 * }
 * Track within the weakMap the number of times queryAPI is called for each endpoint.
 *
 * When the number of queries is >= 5 throw an error with the message Endpoint load is high.
 * */
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
