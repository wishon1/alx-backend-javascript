export default function createEmployeesObject(departmentName, employees) {
  const employeesObjt = {
    [departmentName]: employees,
  };
  return employeesObjt;
}
