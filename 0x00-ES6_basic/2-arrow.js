/**
  * Rewrite the following standard function to use ES6’s arrow syntax
  * of the function add (it will be an anonymous function after)
  *
  * export default function getNeighborhoodsList() {
  *   this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  *   const self = this;
  *   this.addNeighborhood = function add(newNeighborhood) {
  *      self.sanFranciscoNeighborhoods.push(newNeighborhood);
  *   return self.sanFranciscoNeighborhoods;
  * };
  * }
  * @ Returns: a modify list of neigbhood
  */
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
