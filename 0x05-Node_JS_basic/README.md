# 0x05. NodeJS Basics

`Back-end` `JavaScript` `ES6` `NodeJS` `ExpressJS`

## Resources
+ Read or watch:

    - [Node JS getting started](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
    - [Process API doc](https://node.readthedocs.io/en/latest/api/process/)
    - [Child process](https://nodejs.org/api/child_process.html)
    - [Express getting started](https://expressjs.com/en/starter/installing.html)
    - [Mocha documentation](https://mochajs.org/)
    - [Nodemon documentation](https://github.com/remy/nodemon#nodemon)

## Learning Objectives
By the end of this project, you should be able to independently explain and perform JavaScript tasks    using NodeJS, including running scripts, using modules, reading files, accessing command line arguments, creating HTTP servers with NodeJS and ExpressJS, creating advanced routes, using ES6 with Babel-node, and speeding up development with Nodemon.

## Requiremnets
Requirements include using editors like vi, vim, emacs, or Visual Studio Code, ensuring files end with a new line, and including a README.md. Code must use the .js extension, be interpreted on Ubuntu 18.04 LTS with Node 12.x.x, and pass Jest tests and ESLint verification. Use `module.exports` for exporting functions/classes, and verify the project with `npm run full-test`.

## Provided files
- [`database.csv`]()
- [`package.json`]()
- [`babel.config.js`]()
- [`.eslintrc.js`]()

and…
Don’t forget to run `$ npm install` when you have the `package.json`

## Tasks
0. Executing basic javascript with Node JS
   In the file `0-console.js`, create a function named `displayMessage` that prints in `STDOUT` the string argument.
   File: `0-console.js`

1. Using Process stdin
   + Create a program named 1-stdin.js that will be executed through command line:
        * It should display the message `Welcome to Holberton School, what is your name?` (followed by a new line)
        * The user should be able to input their name on a new line
        * The program should display `Your name is: INPUT`
        * When the user ends the program, it should display `This important software is now closing` (followed by a new line)
   + Requirements:
        * Your code will be tested through a child process, make sure you have everything you need for that
   + File: `1-stdin.js`

2. Reading a file synchronously with Node JS
   + Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `2-read_file.js`
        * Create a function named  `countStudents`. It should accept a path in argument
        * The script should attempt to read the database file synchronously
        * If the database is not available, it should throw an error with the text `Cannot load the database`
        * If the database is available, it should log the following message to the console Number of students: `NUMBER_OF_STUDENTS`
        * It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
        * CSV file can contain empty lines (at the end) - and they are not a valid student!
    + File: `2-read_file.js`

3. Reading a file asynchronously with Node JS
    + Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `3-read_file_async.js`
        * Create a function named `countStudents`. It should accept a path in argument (same as in `2-read_file.js`)
        * The script should attempt to read the database file asynchronously
        * The function should return a Promise
        * If the database is not available, it should throw an error with the text `Cannot load the database`
        * If the database is available, it should log the following message to the `console Number of students: NUMBER_OF_STUDENTS`
        * It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
        * CSV file can contain empty lines (at the end) - and they are not a valid student!
    + File: `3-read_file_async.js`

4. Create a small HTTP server using Node's HTTP module
    + In a file named `4-http.js`, create a small HTTP server using the http module:
        * It should be assigned to the variable app and this one must be exported
        * HTTP server should listen on port 1245
        * Displays Hello Holberton School! in the page body for any endpoint as plain text
    + In terminal 1:
        ```
        bob@dylan:~$ node 4-http.js
        ...
        ```
    + In terminal 2:

        ```
        bob@dylan:~$ curl localhost:1245 && echo ""
        Hello Holberton School!
        bob@dylan:~$ 
        bob@dylan:~$ curl localhost:1245/any_endpoint && echo ""
        Hello Holberton School!
        bob@dylan:~$ 
        ```
    + File: 4-http.js

5. Create a more complex HTTP server using Node's HTTP module
    + In a file named `5-http.js`, create a small HTTP server using the `http` module:
        * It should be assigned to the variable app and this one must be exported
        * HTTP server should listen on port 1245
        * It should return plain text
        * When the URL path is `/`, it should display `Hello Holberton School!` in the page body
        * When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as the file `3-read_file_async.js` (with and without the database) - the name of the database must be passed as argument of the file
        * CSV file can contain empty lines (at the end) - and they are not a valid student!
    + Terminal 1:
        ```
        bob@dylan:~$ node 5-http.js database.csv
        ...
        ```

    + In terminal 2:
        ```
        bob@dylan:~$ curl localhost:1245 && echo ""
        Hello Holberton School!
        bob@dylan:~$ 
        bob@dylan:~$ curl localhost:1245/students && echo ""
        This is the list of our students
        Number of students: 10
        Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
        Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
        bob@dylan:~$
        ```
    + filename: `5-http.js`

6. Create a small HTTP server using Express
    + Install Express and in a file named 6-http_express.js, create a small HTTP server using Express module:
    + It should be assigned to the variable app and this one must be exported
    + HTTP server should listen on port 1245
    + Displays Hello Holberton School! in the page body for the endpoint /

    + In terminal 1:
        ```
        bob@dylan:~$ node 6-http_express.js
        ```

    + In terminal 2:
        ```
        bob@dylan:~$ curl localhost:1245 && echo ""
        Hello Holberton School!
        bob@dylan:~$ 
        bob@dylan:~$ curl localhost:1245/any_endpoint && echo ""
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="utf-8">
        <title>Error</title>
        </head>
        <body>
        <pre>Cannot GET /lskdlskd</pre>
        </body>
        </html> 
        bob@dylan:~$ 
        ```
    
    + File: `6-http_express.js`


