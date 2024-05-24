/**
  * Write a function named createEmployeesObject that will receive two
  * arguments:
  * departmentName (String)
  * employees (Array of Strings)
  * export default function createEmployeesObject(departmentName, employees) {
  * }
  * The function should return an object with the following format:
  *
  * {
  *   $departmentName: [
  *        $employees,
  *  ],
  * }
  *
  * @Returns(object)
  */
export default function createEmployeesObject(departmentName, employees) {
  const employeesObjt = {
    [departmentName]: employees,
  };
  return employeesObjt;
}
