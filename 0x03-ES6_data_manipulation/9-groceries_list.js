/**
 * Create a function named groceriesList that returns a map of
 * groceries with the following items (name, quantity):
 * Apples, 10
 * Tomatoes, 10
 * Pasta, 1
 * Rice, 1
 * Banana, 5
 * 
 * 
 * Creates a map of groceries with items and their quantities.
 * @returns {Map} - A map containing groceries with items as keys and their quantities as values.
 */
export default function groceriesList() {
  const groceries = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  return new Map(groceries);
}
