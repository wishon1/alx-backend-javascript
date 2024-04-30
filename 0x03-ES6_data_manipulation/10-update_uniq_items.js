/**
 * Updates the quantities of items with an initial quantity of 1 to 100 in the given map.
 *
 * @param {Map} map - The map containing items and their quantities.
 * @throws {Error} Throws an error if the argument is not a Map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of map.entries()) {
    if (quantity === 1) {
      map.set(item, 100);
    }
  }
}
