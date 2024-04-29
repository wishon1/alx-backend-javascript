# Project Title: ES6 Data Manipulation

## Aim and Summary
The aim of this project is to enhance my understanding and proficiency in ES6 data manipulation techniques in JavaScript. By completing the tasks outlined in this curriculum, i will learn how to use ES6 features such as map, filter, and reduce on arrays, work with typed arrays, and utilize various data structures including Set, Map, and WeakMap.

### Resources
Read or watch:
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

### Requirements
- All files should be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file, at the root of the project folder, is mandatory
- Code should use the `.js` extension
- Testing with Jest: `npm run test`
- Verification against lint using ESLint: `npm run full-test`
- All functions must be exported

### Setup
1. Install NodeJS 12.11.x:
   ```
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   nodejs -v
   npm -v
   ```
2. Install Jest, Babel, and ESLint:
   ```
   npm install
   ```

### Tasks
1. **Basic List of Objects**
   - Create a function named `getListStudents` that returns an array of objects.
   - Each object should have three attributes: id (Number), firstName (String), and location (String).

2. **More Mapping**
   - Create a function `getListStudentIds` that returns an array of ids from a list of objects.
   - If the argument is not an array, return an empty array.

3. **Filter**
   - Create a function `getStudentsByLocation` that returns an array of objects located in a specific city.
   - Accepts a list of students and a city as parameters.

4. **Reduce**
   - Create a function `getStudentIdsSum` that returns the sum of all the student ids.
   - Accepts a list of students as a parameter.

5. **Combine**
   - Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade.
   - Accepts a list of students, a city, and new grades as parameters.

6. **Typed Arrays**
   - Create a function `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position.

7. **Set Data Structure**
   - Create a function `setFromArray` that returns a Set from an array.

8. **More Set Data Structure**
   - Create a function `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set.

9. **Clean Set**
   - Create a function `cleanSet` that returns a string of all the set values that start with a specific string.

10. **Map Data Structure**
    - Create a function `groceriesList` that returns a map of groceries with the specified items and quantities.

11. **More Map Data Structure**
    - Create a function `updateUniqueItems` that updates the quantities of items in a map to 100 if their initial quantity is 1.
