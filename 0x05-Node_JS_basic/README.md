
# 0x05. NodeJS Basics

## Back-end | JavaScript | ES6 | NodeJS | ExpressJS

![node](images/82692897e15d9f03256f%20(1).jpeg)

### Resources
Read or watch:
- [Node JS getting started](https://nodejs.dev/learn)
- [Process API doc](https://nodejs.org/api/process.html)
- [Child process](https://nodejs.org/api/child_process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://nodemon.io/)

### Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- Run JavaScript using NodeJS
- Use NodeJS modules
- Use specific Node JS module to read files
- Use process to access command line arguments and the environment
- Create a small HTTP server using Node JS
- Create a small HTTP server using Express JS
- Create advanced routes with Express JS
- Use ES6 with Node JS with Babel-node
- Use Nodemon to develop faster

### Requirements
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
- All of your functions/classes must be exported by using this format: `module.exports = myFunction;`

---

### Provided files
- `database.csv`
  ```
  firstname,lastname,age,field
  Johann,Kerbrou,30,CS
  Guillaume,Salou,30,SWE
  Arielle,Salou,20,CS
  Jonathan,Benou,30,CS
  Emmanuel,Turlou,40,CS
  Guillaume,Plessous,35,CS
  Joseph,Crisou,34,SWE
  Paul,Schneider,60,SWE
  Tommy,Schoul,32,SWE
  Katie,Shirou,21,CS
  ```

- `package.json`
  ```
  Click to show/hide file contents
  ```

- `babel.config.js`
  ```
  Click to show/hide file contents
  ```

- `.eslintrc.js`
  ```
  Click to show/hide file contents
  ```

And…

Don’t forget to run `$ npm install` when you have the `package.json`.

---

### Tasks

#### 0. Executing basic JavaScript with Node JS
*File: `0-console.js`*

Create a function named `displayMessage` that prints in STDOUT the string argument.

```javascript
bob@dylan:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x05-Node_JS_basic`
- File: `0-console.js`

#### 1. Using Process stdin
*File: `1-stdin.js`*

Create a program named `1-stdin.js` that will be executed through command line:

- It should display the message `Welcome to Holberton School, what is your name?` (followed by a new line)
- The user should be able to input their name on a new line
- The program should display `Your name is: INPUT`
- When the user ends the program, it should display `This important software is now closing` (followed by a new line)

Requirements:
- Your code will be tested through a child process, make sure you have everything you need for that

```bash
bob@dylan:~$ node 1-stdin.js 
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
bob@dylan:~$ 
bob@dylan:~$ echo "John" | node 1-stdin.js 
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
bob@dylan:~$
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x05-Node_JS_basic`
- File: `1-stdin.js`

#### 2. Reading a file synchronously with Node JS
*File: `2-read_file.js`*

Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `2-read_file.js`

- Create a function named `countStudents`. It should accept a path in argument
- The script should attempt to read the database file synchronously
- If the database is not available, it should throw an error with the text `Cannot load the database`
- If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
- It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`

CSV file can contain empty lines (at the end) - and they are not a valid student!

```bash
bob@dylan:~$ cat 2-main_0.js
const countStudents = require('./2-read_file');

countStudents("nope.csv");

bob@dylan:~$ node 2-main_0.js
2-read_file.js:9
    throw new Error('Cannot load the database');
    ^

Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 2-main_1.js
const countStudents = require('./2-read_file');

countStudents("database.csv");

bob@dylan:~$ node 2-main_1.js
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x05-Node_JS_basic`
- File: `2-read_file.js`

#### 3. Reading a file asynchronously with Node JS
*File: `3-read_file_async.js`*

Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `3-read_file_async.js`

- Create a function named `countStudents`. It should accept a path in argument (same as in `2-read_file.js`)
- The script should attempt to read the database file asynchronously
- The function should return a Promise
- If the database is not available, it should throw an error with the text `Cannot load the database`
- If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
- It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`

CSV file can contain empty lines (at the end) - and they are not a valid student!

```bash
bob@dylan:~$ cat 3-main_0.js
const countStudents = require('./3-read_file_async');

countStudents("nope.csv")
    .then(() => {
        console.log("Done!");
    })
    .catch((error) => {
        console.log(error);
    });

bob@dylan:~$ node 3-main_0.js
Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 3-main_1.js
const countStudents = require('./3-read_file_async');

countStudents("database.csv")
    .then(() => {
        console.log("Done!");
    })
    .catch((error) => {
        console.log(error);
    });
console.log("After!");

bob@dylan:~$ node 3-main_1.js
After!
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
Done!
bob@dylan:~$
```

**Tips:**

- Using asynchronous callbacks is the preferred way to write code in Node to avoid blocking threads

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x05-Node_JS_basic`
- File: `3-read_file_async.js`

#### 4. Create a small HTTP server using Node's HTTP module
*File: `4-http.js`*

Create a small HTTP server using the `http` module:

- It should be assigned to the variable `app` and this one must be exported
- HTTP server should listen on port 1245
- Displays `Hello Holberton School!` in the page body for any endpoint as plain text



```bash
bob@dylan:~$ cat 4-main.js
const app = require('./4-http.js');

app.listen(1245, () => {
    console.log('Server is running on port 1245');
});

bob@dylan:~$ curl 0:1245
Hello Holberton School!bob@dylan:~$
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x05-Node_JS_basic`
- File: `4-http.js`

#### 5. Create a more complex HTTP server using Node's HTTP module
*File: `5-http.js`*

Create a small HTTP server using the `http` module:

- It should be assigned to the variable `app` and this one must be exported
- HTTP server should listen on port 1245
- It should return plain text
- When the URL path is `/`, it should display `Hello Holberton School!` in the page body
- When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as the file `2-read_file.js` (with and without the database) - the name of the database must be passed as argument of the file
- CSV file can contain empty lines (at the end) - and they are not a valid student!

```bash
bob@dylan:~$ cat 5-main.js
const app = require('./5-http.js');

app.listen(1245, () => {
    console.log('Server is running on port 1245');
});

bob@dylan:~$ curl 0:1245
Hello Holberton School!bob@dylan:~$ 
bob@dylan:~$ curl 0:1245/students
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ 
bob@dylan:~$ curl 0:1245/students
This is the list of our students
Error: Cannot load the database
bob@dylan:~$
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x05-Node_JS_basic`
- File: `5-http.js`

#### 6. Create a small HTTP server using Express
*File: `6-http_express.js`*

Install Express and create a small HTTP server using Express module:

- It should be assigned to the variable `app` and this one must be exported
- HTTP server should listen on port 1245
- Displays `Hello Holberton School!` in the page body for any endpoint as plain text

```bash
bob@dylan:~$ cat 6-main.js
const app = require('./6-http_express.js');

app.listen(1245, () => {
    console.log('Server is running on port 1245');
});

bob@dylan:~$ curl 0:1245
Hello Holberton School!bob@dylan:~$
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x05-Node_JS_basic`
- File: `6-http_express.js`

#### 7. Create a more complex HTTP server using Express
*File: `7-http_express.js`*

Install Express and create a small HTTP server using Express module:

- It should be assigned to the variable `app` and this one must be exported
- HTTP server should listen on port 1245
- It should return plain text
- When the URL path is `/`, it should display `Hello Holberton School!` in the page body
- When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as the file `3-read_file_async.js` (with and without the database) - the name of the database must be passed as argument of the file
- CSV file can contain empty lines (at the end) - and they are not a valid student!

```bash
bob@dylan:~$ cat 7-main.js
const app = require('./7-http_express.js');

app.listen(1245, () => {
    console.log('Server is running on port 1245');
});

bob@dylan:~$ curl 0:1245
Hello Holberton School!bob@dylan:~$
bob@dylan:~$ curl 0:1245/students
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$
bob@dylan:~$ curl 0:1245/students
This is the list of our students
Error: Cannot load the database
bob@dylan:~$
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x05-Node_JS_basic`
- File: `7-http_express.js`


#### 8. Organize a complex HTTP server using Express
*File: `full_server/*`*

In the file `full_server`, organize a more complex HTTP server using Express. It should support multiple routes and a file-based database.

- Create a folder named `full_server`
- Create a file named `index.js` in the `full_server` folder. This file should start a HTTP server on port 1245
- Inside `full_server`:
  - Create a file named `routes/index.js`. This file should contain all the endpoints for the API
  - Create a file named `controllers/StudentsController.js`. This file should contain the logic for the `/students` and `/students/:major` routes
  - Create a file named `utils.js`. This file should contain functions to read the CSV file and count students

The server should:
- Return plain text
- When the URL path is `/`, it should display `Hello Holberton School!` in the page body
- When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as the file `3-read_file_async.js` (with and without the database). The name of the database must be passed as argument of the file
- When the URL path is `/students/:major`, it should display `List: list of first names` (with and without the database). The name of the database must be passed as argument of the file
- CSV file can contain empty lines (at the end) - and they are not a valid student

```bash
bob@dylan:~$ cat full_server/routes/index.js
import express from 'express';
import { getAllStudents, getAllStudentsByMajor } from '../controllers/StudentsController';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

router.get('/students', (req, res) => {
  getAllStudents(req, res);
});

router.get('/students/:major', (req, res) => {
  getAllStudentsByMajor(req, res);
});

export default router;
bob@dylan:~$

bob@dylan:~$ cat full_server/controllers/StudentsController.js
import readDatabase from '../utils';

const getAllStudents = (req, res) => {
  const filePath = process.argv[2];

  readDatabase(filePath)
    .then((studentGroups) => {
      res.write('This is the list of our students\n');
      const total = Object.values(studentGroups).reduce((acc, group) => acc + group.length, 0);
      res.write(`Number of students: ${total}\n`);
      for (const [field, group] of Object.entries(studentGroups)) {
        res.write(`Number of students in ${field}: ${group.length}. List: ${group.join(', ')}\n`);
      }
      res.end();
    })
    .catch((err) => res.end(`Cannot load the database: ${err.message}`));
};

const getAllStudentsByMajor = (req, res) => {
  const filePath = process.argv[2];
  const { major } = req.params;

  readDatabase(filePath)
    .then((studentGroups) => {
      if (!studentGroups[major]) {
        res.status(400).send(`Major ${major} not found`);
      } else {
        res.send(`List: ${studentGroups[major].join(', ')}`);
      }
    })
    .catch((err) => res.status(500).send(`Cannot load the database: ${err.message}`));
};

export { getAllStudents, getAllStudentsByMajor };
bob@dylan:~$

bob@dylan:~$ cat full_server/utils.js
import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('No database file specified'));
    return;
  }

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const studentGroups = data.split('\n').slice(1).filter((line) => line).reduce((acc, line) => {
      const [firstname, , , field] = line.split(',');
      if (!acc[field]) acc[field] = [];
      acc[field].push(firstname);
      return acc;
    }, {});

    resolve(studentGroups);
  });
});

export default readDatabase;
bob@dylan:~$

bob@dylan:~$ cat full_server/index.js
import express from 'express';
import router from './routes/index';

const app = express();
const PORT = 1245;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
bob@dylan:~$
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x05-Node_JS_basic`
- File: `full_server/*`

---

### Author
- Teddy Omondi
