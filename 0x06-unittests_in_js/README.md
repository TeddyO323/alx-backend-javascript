# 0x06. Unittests in JS

## UnitTests | Back-end | JavaScript | ES6 | NodeJS | ExpressJS | Mocha

![unittest](images/90f79a666e174e6c4ffc.jpeg)

## Resources
Read or watch:
- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://github.com/request/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- How to use Mocha to write a test suite
- How to use different assertion libraries (Node or Chai)
- How to present long test suites
- When and how to use spies
- When and how to use stubs
- What are hooks and when to use them
- Unit testing with Async functions
- How to write integration tests with a small node server

## Requirements
- All of your code will be executed on Ubuntu 18.04 using Node 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- When running every test with `npm run test *.test.js`, everything should pass correctly without any warning or error

## Tasks

### 0. Basic test with Mocha and Node assertion library
**Mandatory**

Install Mocha using npm:

Set up a script in your `package.json` to quickly run Mocha using `npm test`.

You have to use `assert`.

Create a new file named `0-calcul.js`:
- Create a function named `calculateNumber`. It should accept two arguments (number) `a` and `b`.
- The function should round `a` and `b` and return the sum of it.

#### Test cases

Create a file `0-calcul.test.js` that contains test cases of this function:
- You can assume `a` and `b` are always numbers.
- Tests should be around the “rounded” part.

#### Tips:
- For the sake of the example, this test suite is slightly extreme and probably not needed.
- However, remember that your tests should not only verify what a function is supposed to do but also the edge cases.

#### Requirements:
- You have to use `assert`.
- You should be able to run the test suite using `npm test 0-calcul.test.js`.
- Every test should pass without any warning.

#### Expected output
```javascript
const calculateNumber = require("./0-calcul.js");
calculateNumber(1, 3); // 4
calculateNumber(1, 3.7); // 5
calculateNumber(1.2, 3.7); // 5
calculateNumber(1.5, 3.7); // 6
```

#### Run test
```bash
bob@dylan:~$ npm test 0-calcul.test.js 

> task_0@1.0.0 test /root
> ./node_modules/mocha/bin/mocha "0-calcul.test.js"

  calculateNumber
    ✓ ...
    ✓ ...
    ✓ ...
    ...

  130 passing (35ms)
bob@dylan:~$
```

#### Repo:
- GitHub repository: `alx-backend-javascript`
- Directory: `0x06-unittests_in_js`
- File: `package.json`, `0-calcul.js`, `0-calcul.test.js`

### 1. Combining descriptions
**Mandatory**

Create a new file named `1-calcul.js`:
- Upgrade the function you created in the previous task (`0-calcul.js`).
- Add a new argument named `type` as the first argument of the function. `type` can be `SUM`, `SUBTRACT`, or `DIVIDE` (string).
- When `type` is `SUM`, round the two numbers, and add `a` and `b`.
- When `type` is `SUBTRACT`, round the two numbers, and subtract `b` from `a`.
- When `type` is `DIVIDE`, round the two numbers, and divide `a` by `b` - if the rounded value of `b` is equal to 0, return the string `Error`.

#### Test cases
Create a file `1-calcul.test.js` that contains test cases of this function:
- You can assume `a` and `b` are always numbers.
- Usage of `describe` will help you to organize your test cases.

#### Tips:
- For the sake of the example, this test suite is slightly extreme and probably not needed.
- However, remember that your tests should not only verify what a function is supposed to do but also the edge cases.

#### Requirements:
- You have to use `assert`.
- You should be able to run the test suite using `npm test 1-calcul.test.js`.
- Every test should pass without any warning.

#### Expected output
```javascript
const calculateNumber = require("./1-calcul.js");
calculateNumber('SUM', 1.4, 4.5); // 6
calculateNumber('SUBTRACT', 1.4, 4.5); // -4
calculateNumber('DIVIDE', 1.4, 4.5); // 0.2
calculateNumber('DIVIDE', 1.4, 0); // 'Error'
```

#### Repo:
- GitHub repository: `alx-backend-javascript`
- Directory: `0x06-unittests_in_js`
- File: `1-calcul.js`, `1-calcul.test.js`

### 2. Basic test using Chai assertion library
**Mandatory**

While using the Node `assert` library is completely valid, a lot of developers prefer to have a behavior-driven development style. This type is easier to read and therefore to maintain.

Let’s install Chai with npm:

Copy the file `1-calcul.js` into a new file `2-calcul_chai.js` (same content, same behavior).
Copy the file `1-calcul.test.js` into a new file `2-calcul_chai.test.js`.
Rewrite the test suite, using `expect` from Chai.

#### Tips:
- Remember that test coverage is always difficult to maintain. Using an easier style for your tests will help you.
- The easier your tests are to read and understand, the more other engineers will be able to fix them when they are modifying your code.

#### Requirements:
- You should be able to run the test suite using `npm test 2-calcul_chai.test.js`.
- Every test should pass without any warning.

#### Repo:
- GitHub repository: `alx-backend-javascript`
- Directory: `0x06-unittests_in_js`
- File: `2-calcul_chai.js`, `2-calcul_chai.test.js`

### 3. Spies
**Mandatory**

Spies are a useful wrapper that will execute the wrapped function and log useful information (e.g. was it called, with what arguments). Sinon is a library allowing you to create spies.

Let’s install Sinon with npm:

Create a new file named `utils.js`.
- Create a new module named `Utils`.
- Create a property named `calculateNumber` and paste your previous code in the function.
- Export the `Utils` module.

Create a new file named `3-payment.js`:
- Create a new function named `sendPaymentRequestToApi`. The function takes two arguments `totalAmount`, and `totalShipping`.
- The function calls the `Utils.calculateNumber` function with type `SUM`, `totalAmount` as `a`, `totalShipping` as `b`, and displays in the console the message `The total is: <result of the sum>`.

Create a new file named `3-payment.test.js` and add a new suite named `sendPaymentRequestToApi`:
- By using `sinon.spy`, make sure the math used for `sendPaymentRequestToApi(100, 20)` is the same as `Utils.calculateNumber('SUM', 100, 20)` (validate the usage of the `Utils` function).

#### Requirements:
- You should be able to run the test suite using `npm test 3-payment.test.js`.
- Every test should pass without any warning.
- You should use a spy to complete this exercise.

#### Tips:
- Remember to always restore a spy after using it in a test; it will prevent you from having weird behaviors.
- Spies are really useful and allow you to focus only on what your code is doing and not the downstream APIs or functions.
- Remember that integration testing is different from unit testing. Your unit test should test your code, not the code of a different function.

#### Repo:
- GitHub repository: `alx-backend-javascript`
- Directory: `0x06-unittests_in_js`
- File: `utils.js`, `3-payment.js`, `3-payment.test.js`

### 4. Stubs
**Mandatory**

Stubs are similar to spies. Except that you can provide a different implementation of the function you are wrapping. Sinon can be used as well for stubs.

Create a new file `4-payment.js`, and copy the code from `3-payment.js` (same content, same behavior).

Create a new file `4-payment.test.js`, and copy the code from `3-payment.test.js`.

Imagine that

 we have a complex function in `Utils` named `calculateNumber` that interacts with a database or an external API. We don’t want our test to trigger these interactions, as they can be very expensive in terms of execution time.

By using `sinon.stub`, modify the function `Utils.calculateNumber` to always return `10` in the test case `sendPaymentRequestToApi(100, 20)`.

#### Tips:
- Stubs are a great way to replace a function that you want to control. It allows you to make sure that your test cases are not affected by an external service.
- Remember to always restore a stub after using it in a test; it will prevent you from having weird behaviors.

#### Requirements:
- You should be able to run the test suite using `npm test 4-payment.test.js`.
- Every test should pass without any warning.
- You should use a stub to complete this exercise.

#### Repo:
- GitHub repository: `alx-backend-javascript`
- Directory: `0x06-unittests_in_js`
- File: `4-payment.js`, `4-payment.test.js`

### 5. Hooks
**Mandatory**

Hooks are a great way to execute some code before or after a test case or a test suite. They are useful to prepare some code before your test cases or to clean up things afterward.

Create a new file `5-payment.js` and copy the code from `4-payment.js` (same content, same behavior).

Create a new file `5-payment.test.js` and copy the code from `4-payment.test.js`.

Write a test suite `sendPaymentRequestToApi`:
- Use a spy.
- Add a `before` hook to spy the `Utils.calculateNumber` method.
- Add an `after` hook to restore the spy.
- Validate that `Utils.calculateNumber` is always called with type `SUM` (same result as the previous project).

#### Tips:
- Hooks are a great way to make sure you always restore your spies or stubs. It prevents you from writing duplicate code everywhere.

#### Requirements:
- You should be able to run the test suite using `npm test 5-payment.test.js`.
- Every test should pass without any warning.
- You should use hooks to complete this exercise.

#### Repo:
- GitHub repository: `alx-backend-javascript`
- Directory: `0x06-unittests_in_js`
- File: `5-payment.js`, `5-payment.test.js`

### 6. Async tests with done
**Mandatory**

We cannot always be sure that a test will be synchronous. Sometimes we need to wait for a function to complete before we can validate its behavior.

Create a new file `6-payment.js` and copy the code from `5-payment.js` (same content, same behavior).

Create a new file `6-payment.test.js` and copy the code from `5-payment.test.js`.

In the function `sendPaymentRequestToApi`, simulate the function `Utils.calculateNumber` being an asynchronous operation by using `setTimeout` with 0 (nothing is changing in practice).

Rewrite your test suite to make it work with this new behavior.

#### Tips:
- The `done` callback should be called after the test case is done. It will indicate that the test can end.
- Always test your code in a way to ensure your functions are tested as a black box.
- This project is not about mocking a real backend, it’s more about making sure your test cases validate the behavior of your code, no matter if it’s async or sync.

#### Requirements:
- You should be able to run the test suite using `npm test 6-payment.test.js`.
- Every test should pass without any warning.
- You should use `done` to complete this exercise.

#### Repo:
- GitHub repository: `alx-backend-javascript`
- Directory: `0x06-unittests_in_js`
- File: `6-payment.js`, `6-payment.test.js`

### 7. Skip
**Mandatory**

Sometimes, you are not able to finish the code for a test case or a test suite, and you have to skip it.

Create a new file `7-skip.js` and copy the code from `6-payment.js` (same content, same behavior).

Create a new file `7-skip.test.js` and copy the code from `6-payment.test.js`.

Add a test case that is skipped. Make sure the skip message is included in the output when the test suite runs.

#### Tips:
- Skipping a test case is useful when you are not able to finish your implementation on time but still want to ensure that your test suite runs correctly.

#### Requirements:
- You should be able to run the test suite using `npm test 7-skip.test.js`.
- Every test should pass without any warning.
- You should skip one test case to complete this exercise.

#### Repo:
- GitHub repository: `alx-backend-javascript`
- Directory: `0x06-unittests_in_js`
- File: `7-skip.js`, `7-skip.test.js`

### 8. Basic integration testing using Express
**Mandatory**

This is where things start to be fun!

Let’s imagine a web server that has several endpoints. For instance:
- GET `/` should return a message `Welcome to the payment system`
- GET `/cart/:id` should return `Payment methods for cart :id`
- POST `/process` should display `Processing order for :id`

Create a new file `8-api.js`:
- Create an express application instance.
- Create a route for each endpoint above.

Create a new file `8-api.test.js` and validate the behavior of the endpoints (test the behavior of all endpoints).

#### Tips:
- Remember that we are testing the behavior of our endpoints.
- The tests should be written in a way to ensure the behavior of your code is validated.

#### Requirements:
- You should be able to run the test suite using `npm test 8-api.test.js`.
- Every test should pass without any warning.

#### Repo:
- GitHub repository: `alx-backend-javascript`
- Directory: `0x06-unittests_in_js`
- File: `8-api.js`, `8-api.test.js`

### 9. Advanced integration testing using request module
**Mandatory**

We are going to create a server that does a simple calculation.

Create a new file `9-api.js` and copy the code from `8-api.js` (same content, same behavior).

Modify the `GET /` endpoint to return a message `Welcome to the payment system`.

Modify the `GET /cart/:id` endpoint to return `Payment methods for cart :id`.

Modify the `POST /process` endpoint to process the request:
- When the `id` is not provided in the body, return a status code 400 and an error message.
- When the `id` is provided, call the `Utils.calculateNumber` method with `id` as the only argument, and return the result of the call.

Create a new file `9-api.test.js` and validate the behavior of the endpoints (test the behavior of all endpoints).

#### Tips:
- Remember that we are testing the behavior of our endpoints.
- The tests should be written in a way to ensure the behavior of your code is validated.

#### Requirements:
- You should be able to run the test suite using `npm test 9-api.test.js`.
- Every test should pass without any warning.
- You should use the `request` module to complete this exercise.

#### Repo:
- GitHub repository: `alx-backend-javascript`
- Directory: `0x06-unittests_in_js`
- File: `9-api.js`, `9-api.test.js`

### 10. Advanced integration testing using chai-http
**Mandatory**

We are going to create a server that does a simple calculation.

Create a new file `10-api.js` and copy the code from `9-api.js` (same content, same behavior).

Modify the `GET /` endpoint to return a message `Welcome to the payment system`.

Modify the `GET /cart/:id` endpoint to return `Payment methods for cart :id`.

Modify the `POST /process` endpoint to process the request:
- When the `id` is not provided in the body, return a status code 400 and an error message.
- When the `id` is provided, call the `Utils.calculateNumber` method with `id` as the only argument, and return the result of the call.

Create a new file `10-api.test.js` and validate the behavior of the endpoints (test the behavior of all endpoints).

#### Tips:
- Remember that we are testing the behavior of our endpoints.
- The tests should be written in a way to ensure the behavior of your code is validated.

#### Requirements:
- You should be able to run the test suite using `npm test 10-api.test.js`.
- Every test should pass without any warning.
- You should use `chai-http` to complete this exercise.

#### Repo:
- GitHub repository: `alx-backend-javascript`
- Directory: `0x06-unittests_in_js`
- File: `10-api.js`, `10-api.test.js`

### Task 9: Regex Integration Testing

**Folder Structure:** `9-api`  
Reusing the previous project in `8-api` (package.json, api.js, and api.test.js)

1. **Modify the file `api.js`:**
    - Add a new endpoint: `GET /cart/:id`
    - `:id` must be only a number (validation must be in the route definition)
    - When accessed, the endpoint should return `Payment methods for cart :id`

2. **Modify the file `api.test.js`:**
    - Add a new test suite for the cart page:
        - Correct status code when `:id` is a number?
        - Correct status code when `:id` is NOT a number (=> 404)?

**Example Usage:**

**Server (Terminal 1):**
```bash
bob@dylan:~$ node api.js
API available on localhost port 7865
```

**Client (Terminal 2):**
```bash
bob@dylan:~$ curl http://localhost:7865/cart/12 ; echo ""
Payment methods for cart 12

bob@dylan:~$ curl http://localhost:7865/cart/hello -v
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 7865 (#0)
> GET /cart/hello HTTP/1.1
> Host: localhost:7865
> User-Agent: curl/7.58.0
> Accept: */*
> 
< HTTP/1.1 404 Not Found
< X-Powered-By: Express
< Content-Security-Policy: default-src 'none'
< X-Content-Type-Options: nosniff
< Content-Type: text/html; charset=utf-8
< Content-Length: 149
< Date: Wed, 15 Jul 2020 08:33:44 GMT
< Connection: keep-alive
< 
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /cart/hello</pre>
</body>
</html>
* Connection #0 to host localhost left intact
```

**Tips:**
- You will need to add a small regex in your path to support the use case

**Requirements:**
- You should be able to run the test suite using `npm test api.test.js`
- Every test should pass without any warning

**Repo:**
- GitHub repository: `alx-backend-javascript`
- Directory: `0x06-unittests_in_js`
- File: `9-api/api.js`, `9-api/api.test.js`, `9-api/package.json`

---

### Task 10: Deep Equality & Post Integration Testing

**Folder Structure:** `10-api`  
Reusing the previous project in `9-api` (package.json, api.js, and api.test.js)

1. **Modify the file `api.js`:**
    - Add an endpoint `GET /available_payments` that returns an object with the following structure:
        ```json
        {
          "payment_methods": {
            "credit_cards": true,
            "paypal": false
          }
        }
        ```
    - Add an endpoint `POST /login` that returns the message `Welcome :username` where `:username` is the value of the body variable `userName`.

2. **Modify the file `api.test.js`:**
    - Add a test suite for the `/login` endpoint
    - Add a test suite for the `/available_payments` endpoint

**Example Usage:**

**Server (Terminal 1):**
```bash
bob@dylan:~$ node api.js
API available on localhost port 7865
```

**Client (Terminal 2):**
```bash
bob@dylan:~$ curl http://localhost:7865/available_payments ; echo ""
{"payment_methods":{"credit_cards":true,"paypal":false}}

bob@dylan:~$ curl -XPOST http://localhost:7865/login -d '{ "userName": "Betty" }' -H 'Content-Type: application/json' ; echo ""
Welcome Betty
```

**Tips:**
- Look at deep equality to compare objects

**Requirements:**
- You should be able to run the test suite using `npm test api.test.js`
- Every test should pass without any warning
- Your server should not display any error

**Repo:**
- GitHub repository: `alx-backend-javascript`
- Directory: `0x06-unittests_in_js`
- File: `10-api/api.js`, `10-api/api.test.js`, `10-api/package.json`