/**
  * Write a function named createReportObject whose parameter, employeesList,
  * is the return value of the previous function createEmployeesObject.
  *
  * export default function createReportObject(employeesList) {
  *
  * }
  * createReportObject should return an object containing the key allEmployees
  * and a method property called getNumberOfDepartments.
  * allEmployees is a key that maps to an object containing the department name
  * and a list of all the employees in that department. If you’re having trouble,
  * use the spread syntax.
  * The method property receives employeesList and returns the number of
  * departments. I would suggest suggest thinking back to the ES6 method property
  * syntax.
  * {
  * allEmployees: {
  *    engineering: [
  *         'John Doe',
  *         'Guillaume Salva',
  *     ],
  *   },
  * };
  *
  * @Return{dictionary}: number of departments
  */
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
