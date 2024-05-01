
# 0x01. ES6 Promises

## Technologies
- JavaScript
- ES6

![Promise](images/75862d67ca51a042003c.jpeg)


## Resources
Read or watch:
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

## Learning Objectives
At the end of this project, you should be able to explain:
- Promises (how, why, and what)
- How to use the `then`, `resolve`, `catch` methods
- How to use the `every` method of the Promise object
- Throw / Try
- The `await` operator
- How to use an async function

## Requirements
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A `README.md` file at the root of the project folder is mandatory
- Your code should use the `.js` extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- All functions must be exported

## Setup
1. Install NodeJS 12.11.x in your home directory:
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```
   Verify installation:
   ```bash
   nodejs -v
   npm -v
   ```
2. Install Jest, Babel, and ESLint:
   ```bash
   npm install
   ```

## Configuration Files
Add the following files to your project directory:
- `package.json`
- `babel.config.js`
- `utils.js` (Use for tasks requiring `uploadPhoto` and `createUser`)
- `.eslintrc.js`
Don't forget to run `npm install` after adding `package.json`.

## Response Data Format
`uploadPhoto` returns a response in the format:
```json
{
  "status": 200,
  "body": "photo-profile-1"
}
```
`createUser` returns a response in the format:
```json
{
  "firstName": "Guillaume",
  "lastName": "Salva"
}
```

## Tasks

1. **Keep every promise you make and only make promises you can keep**
   - This task introduces the concept of Promises in JavaScript. You'll create a Promise using the `getResponseFromAPI()` prototype function and check if it's indeed a Promise using `console.log(response instanceof Promise)`.

2. **Don't make a promise...if you know you can't keep it**
   - Here, you'll work with conditional promises. The `getFullResponseFromAPI(success)` prototype function expects a boolean argument (`true` or `false`). If `true`, it resolves the Promise with a success message. If `false`, it rejects the Promise with an error message.

3. **Catch me if you can!**
   - In this task, you'll handle Promise resolution and rejection using the `handleResponseFromAPI(promise)` function. When the Promise resolves, you'll return an object indicating success, and when it rejects, you'll return an empty Error object.

4. **Handle multiple successful promises**
   - You'll use the `handleProfileSignup()` function to handle multiple promises returned from `uploadPhoto` and `createUser` functions. If all promises resolve successfully, you'll log the user's profile information. Otherwise, you'll log "Signup system offline" if there's an error.

5. **Simple promise**
   - This task involves creating a simple resolved Promise using the `signUpUser(firstName, lastName)` function. The Promise returns an object with the user's first and last name.

6. **Reject the promises**
   - Here, you'll create a Promise rejection scenario using the `uploadPhoto(filename)` function. It returns a Promise that rejects with an error message indicating that the specified file cannot be processed.

7. **Handle multiple promises**
   - Similar to Task 4, you'll handle multiple promises returned from `signUpUser` and `uploadPhoto` functions using the `handleProfileSignup(firstName, lastName, fileName)` function. Upon all promises being settled, it returns an array with status and value/error information.

8. **Load balancer**
   - This task involves creating a function `loadBalancer(chinaDownload, USDownload)` that returns the value of the promise that resolves first among the provided promises (`chinaDownload` and `USDownload`). This simulates a load balancing scenario.

9. **Throw error / try catch**
   - You'll create a function `divideFunction(numerator, denominator)` that divides two numbers but throws an error if the denominator is zero. This demonstrates error handling using try-catch in JavaScript.

10. **Throw an error**
    - Here, you'll create a function `guardrail(mathFunction)` that executes a math function and adds its result or error message to an array named `queue`. It ensures that the function execution result or error message is properly processed and added to the queue.

11. **Await / Async**
    - Finally, this task involves using asynchronous functions `uploadPhoto` and `createUser` within an async function named `asyncUploadUser`. The function calls these async functions and returns an object with the results. If any of the async functions fail, it returns an empty object.

