/**
 * Updates the quantities of items with an initial quantity of 1 to 100 in the given map.
 * Create a function named updateUniqueItems that returns an updated map for all items
 * with initial quantity at 1. 
 * It should accept a map as an argument. The map it accepts for argument is similar to
 * the map you create in the previous task.
 * For each entry of the map where the quantity is 1, update the quantity to 100. If updating
 * the quantity is not possible (argument is not a map) the error Cannot process should be thrown.
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
