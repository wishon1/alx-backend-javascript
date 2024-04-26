```markdown
# ALX Backend JavaScript Curriculum
---

## 0x01. ES6 Promises

### Resources
Read or watch:
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

### Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- Promises (how, why, and what)
- How to use the `then`, `resolve`, `catch` methods
- How to use every method of the Promise object
- Throw / Try
- The `await` operator
- How to use an `async` function

### Requirements
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- All of your functions must be exported

### Setup
1. Install NodeJS 12.11.x:
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
npm -v
```
2. Install Jest, Babel, and ESLint:
In your project directory, run:
```bash
npm install
```

### Configuration Files
- `package.json`
- `babel.config.js`
- `utils.js`
- `.eslintrc.js`

### Response Data Format
- `uploadPhoto` returns a response with the format:
```json
{
  "status": 200,
  "body": "photo-profile-1"
}
```
- `createUser` returns a response with the format:
```json
{
  "firstName": "Guillaume",
  "lastName": "Salva"
}
```

### Tasks
1. **Keep every promise you make and only make promises you can keep**
    - Return a Promise using the prototype function `getResponseFromAPI()`
    - [Repo Link](https://github.com/wishon1/alx-backend-javascript/0x01-ES6_promise/blob/main/0-promise.js)

2. **Don't make a promise...if you know you can't keep it**
    - Using the prototype `getFullResponseFromAPI(success)`, return a promise based on the success parameter.
    - [Repo Link](https://github.com/wishon1/alx-backend-javascript/0x01-ES6_promise/blob/main/1-promise.js)

3. **Catch me if you can!**
    - Using the function prototype `handleResponseFromAPI(promise)`, append handlers to resolve and reject cases.
    - [Repo Link](https://github.com/wishon1/alx-backend-javascript/0x01-ES6_promise/blob/main/2-then.js)

4. **Handle multiple successful promises**
    - Import `uploadPhoto` and `createUser` from `utils.js`.
    - Use the prototype `handleProfileSignup()` to resolve all promises collectively.
    - [Repo Link](https://github.com/wishon1/alx-backend-javascript/0x01-ES6_promise/blob/main/3-all.js)

5. **Simple promise**
    - Implement `signUpUser(firstName, lastName)` that returns a resolved promise.
    - [Repo Link](https://github.com/wishon1/alx-backend-javascript/0x01-ES6_promise/blob/main/4-user-promise.js)

6. **Reject the promises**
    - Implement `uploadPhoto(fileName)` that returns a promise rejecting with an Error.
    - [Repo Link](https://github.com/wishon1/alx-backend-javascript/0x01-ES6_promise/blob/main/5-photo-reject.js)

7. **Handle multiple promises**
    - Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`.
    - Implement `handleProfileSignup(firstName, lastName, fileName)` to call both functions.
    - [Repo Link](https://github.com/wishon1/alx-backend-javascript/0x01-ES6_promise/blob/main/6-final-user.js)

8. **Load balancer**
    - Write `loadBalancer(chinaDownload, USDownload)` to return the value of the faster promise.
    - [Repo Link](https://github.com/wishon1/alx-backend-javascript/0x01-ES6_promise/blob/main/7-load_balancer.js)

9. **Throw error / try catch**
    - Implement `divideFunction(numerator, denominator)` to handle division errors.
    - [Repo Link](https://github.com/wishon1/alx-backend-javascript/0x01-ES6_promise/blob/main/8-try.js)

10. **Throw an error**
    - Implement `guardrail(mathFunction)` to handle errors from `mathFunction`.
    - [Repo Link](https://github.com/wishon1/alx-backend-javascript/0x01-ES6_promise/blob/main/9-try.js)

---

```

