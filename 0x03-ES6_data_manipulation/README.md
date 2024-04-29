# 0x03. ES6 Data Manipulation

## JavaScript - ES6


**Weight:** 1

![Arrays](images/6ab7bec4727cb5c91257.jpg)

### Dependencies

| Dependency   | Version |
| ------------ | ------- |
| Node.js      | 12.11.x |
| Jest         | 27.0.0  |
| Babel        | 7.15.0  |
| ESLint       | 7.32.0  |



## Resources

Read or watch:
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Array](https://intranet.alxswe.com/rltoken/kpoPupbBdDmukQkcKlvwnw)
- [Set Data Structure](https://intranet.alxswe.com/rltoken/C8x3dhHo0p3uE7S9-EyP9Q)
- [Map Data Structure](https://intranet.alxswe.com/rltoken/XR-ql9v9-PWcXnvTc749gw)
- [WeakMap](https://intranet.alxswe.com/rltoken/NEy8fk2QRytajR8hgXkCog)

## Learning Objectives

By the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- How to use map, filter, and reduce on arrays
- Typed arrays
- The Set, Map, and Weak link data structures

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
- All of your functions must be exported

## Setup

1. Install NodeJS 12.11.x (in your home directory):
    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    nodejs -v
    npm -v
    ```

2. Install Jest, Babel, and ESLint:
    In your project directory, install Jest, Babel, and ESLint by using the supplied `package.json` and run `npm install`.

3. Configuration files:
   - [package.json](#)
   - [babel.config.js](#)
   - [.eslintrc.js](#)
   
   **Don't forget to run `$ npm install` when you have the package.json**

### Task Overview

| Task                | Description         | Status           | Marks      |
| -----------         | -----------         | --------         | -----      |
| 0    | [ES6 data manipulation](./0-get_list_students.js) | Completed | 100   |
| 1    | [More mapping](./1-get_list_student_ids.js) | Completed | 100   |
| 2    | [Filter](./2-get_students_by_loc.js) | Completed | 100   |
| 3    | [Reduce](./3-get_ids_sum.js) | Completed | 100   |
| 4    | [Combine](./4-update_grade_by_city.js) | Completed | 100   |
| 5    | [Typed Arrays](./5-typed_arrays.js) | Completed | 100   |
| 6    | [Set data structure](./6-set.js) | Completed | 100   |
| 7    | [More set data structure](./7-has_array_values.js) | Completed | 100   |
| 8    | [Clean set](./8-clean_set.js) | Completed | 100   |
| 9    | [Map data structure](./9-groceries_list.js) | Completed | 100   |
| 10   | [More map data structure](./10-update_uniq_items.js) | Completed | 100   |
| 11   | [Weak link data structure](./100-weak.js) | Completed | 100   |


## Tasks

#### 0. Basic list of objects (mandatory)

Create a function named `getListStudents` that returns an array of objects. Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).

<p>The array contains the following students in order: </p>

<ul>
<li><code>Guillaume</code>, id: <code>1</code>, in <code>San Francisco</code></li>
<li><code>James</code>, id: <code>2</code>, in <code>Columbia</code></li>
<li><code>Serena</code>, id: <code>5</code>, in <code>San Francisco</code></li>
</ul>

Example:

```js
import getListStudents from "./0-get_list_students.js";
console.log(getListStudents());
// Output:
// [
//   { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
//   { id: 2, firstName: 'James', location: 'Columbia' },
//   { id: 5, firstName: 'Serena', location: 'San Francisco' }
// ]
```

**Repo:**
- GitHub repository: `alx-backend-javascript`  
- Directory: `0x03-ES6_data_manipulation`  
- File: `0-get_list_students.js`

---

#### 1. More mapping (mandatory)

<p>Create a function <code>getListStudentIds</code> that returns an array of ids from a list of object.</p>

<p>This function is taking one argument which is an array of objects - and this array is the same format as <code>getListStudents</code> from the previous task.</p>

<p>If the argument is not an array, the function is returning an empty array.</p>

<p>You must use the <code>map</code> function on the array.</p>
Example:

```js
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
// Output: []

console.log(getListStudentIds(getListStudents()));
// Output: [1, 2, 5]
```

**Repo:**
- GitHub repository: `alx-backend-javascript`  
- Directory: `0x03-ES6_data_manipulation`  
- File: `1-get_list_student_ids.js`

---

#### 2. Filter (mandatory)

<p>Create a function <code>getStudentsByLocation</code> that returns an array of objects who are located in a specific city.</p>

<p>It should accept a list of students (from <code>getListStudents</code>) and a <code>city</code> (string) as parameters.</p>

<p>You must use the <code>filter</code> function on the array.</p>

Example:

```js
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));
// Output:
// [
//   { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
//   { id: 5, firstName: 'Serena', location: 'San Francisco' }
// ]
```

**Repo:**
- GitHub repository: `alx-backend-javascript`  
- Directory: `0x03-ES6_data_manipulation`  
- File: `2-get_students_by_loc.js`

---

#### 3. Reduce (mandatory)

<p>Create a function <code>getStudentIdsSum</code> that returns the sum of all the student ids.</p>

<p>It should accept a list of students (from <code>getListStudents</code>) as a parameter. </p>

<p>You must use the <code>reduce</code> function on the array. </p>
Example:

```js
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);
// Output: 8
```

**Repo:**
- GitHub repository: `alx-backend-javascript`  
- Directory: `0x03-ES6_data_manipulation`  
- File: `3-get_ids_sum.js`

---

#### 4. Combine (mandatory)

 <p>Create a function <code>updateStudentGradeByCity</code> that returns an array of students for a specific city with their new grade</p>

<p>It should accept a list of students (from <code>getListStudents</code>), a <code>city</code> (String), and <code>newGrades</code> (Array of &ldquo;grade&rdquo; objects) as parameters. </p>

<p><code>newGrades</code> is an array of objects with this format:</p>

<pre><code>  {
    studentId: 31,
    grade: 78,
  }
</code></pre>

<p>If a student doesn&rsquo;t have grade in <code>newGrades</code>, the final grade should be <code>N/A</code>.</p>

<p>You must use <code>filter</code> and <code>map</code> combined.</p>

```js
import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));
// Output:
// [
//   { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 86 },
//   { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
// ]

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
// Output:
// [
//   { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 'N/A' },
//   { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
// ]
```

  </div>


**Repo:**
- GitHub repository: `alx-backend-javascript`  
- Directory: `0x03-ES6_data_manipulation`  
- File: `4-update_grade_by_city.js`

---

#### 5. Typed Arrays (mandatory)

  <p>Create a function named <code>createInt8TypedArray</code> that returns a new <code>ArrayBuffer</code> with an <code>Int8</code> value at a specific position.</p>

<p>It should accept three arguments: <code>length</code> (Number), <code>position</code> (Number), and <code>value</code> (Number).</p>

<p>If adding the value is not possible the error <code>Position outside range</code> should be thrown.</p>

Example:

```js
import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));
// Output:
// DataView {
//   byteLength: 10,
//   byteOffset: 0,
//   buffer: ArrayBuffer {
//     [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
//     byteLength: 10
//   }
// }
```

**Repo:**
- GitHub repository: `alx-backend-javascript`  
- Directory: `0x03-ES6_data_manipulation`  
- File: `5-typed_arrays.js`

---

#### 6. Set data structure (mandatory)

<p>Create a function named <code>setFromArray</code> that returns a <code>Set</code> from an array.</p>

<p>It accepts an argument (Array, of any kind of element). </p>

Example:

```js
import setFromArray from "./6-set.js";

console.log(setFromArray([12, 32, 15, 78, 98, 15]));
// Output: Set { 12, 32, 15, 78, 98 }
```

**Repo:**
- GitHub repository: `alx-backend-javascript`  
- Directory: `0x03-ES6_data_manipulation`  
- File: `6-set.js`

---

#### 7. More set data structure (mandatory)

<p>Create a function named <code>hasValuesFromArray</code> that returns a boolean if all the elements in the array exist within the set.</p>

<p>It accepts two arguments: a <code>set</code> (Set) and an <code>array</code> (Array). </p>

Example:

```js
import hasValuesFromArray from "./7-has_array_values.js";

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
// Output: true

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
// Output: false

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));
// Output: false
```

**Repo:**
- GitHub repository: `alx-backend-javascript`  
- Directory: `0x03-ES6_data_manipulation`  
- File: `7-has_array_values.js`

---

#### 8. Clean set (mandatory)

<p>Create a function named <code>cleanSet</code> that returns a string of all the set values that start with a specific string (<code>startString</code>).</p>

<p>It accepts two arguments: a <code>set</code> (Set) and a <code>startString</code> (String). </p>

<p>When a value starts with <code>startString</code> you only append the rest of the string. The string contains all the values of the set separated by <code>-</code>. </p>

Example:

```js
import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
// Output: 'jovi-aparte-appetit'

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
// Output: 'bonjovi-bonaparte-bonappetit-banana'
```

**Repo:**
- GitHub repository: `alx-backend-javascript`  
- Directory: `0x03-ES6_data_manipulation`  
- File: `8-clean_set.js`

---

#### 9. Map data structure (mandatory)

Create a function `groceriesList` that returns a map of groceries with the following items (name, quantity):

- Apples, 10
- Tomatoes, 10
- Pasta, 1
- Rice, 1
- Banana, 5

Example:

```js
import groceriesList from "./9-groceries_list.js";

console.log(groceriesList());
// Output:
// Map {
//   'Apples' => 10,
//   'Tomatoes' => 10,
//   'Pasta' => 1,
//   'Rice' => 1,
//   'Banana' => 5
// }
```

**Repo:**
- GitHub repository: `alx-backend-javascript`  
- Directory: `0x03-ES6_data_manipulation`  
- File: `9-groceries_list.js`

---

#### 10. More map data structure (mandatory)

<p>Create a function named <code>updateUniqueItems</code> that returns an updated map for all items with initial quantity at 1.</p>

<p>It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.</p>

<p>For each entry of the map where the quantity is 1, update the quantity to 100. 
If updating the quantity is not possible (argument is not a map) the error <code>Cannot process</code> should be thrown.</p>

Example:

```js
import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);
// Output:
// Map {
//   'Apples' => 10,
//   'Tomatoes' => 10,
//   'Pasta' => 1,
//   'Rice' => 1,
//   'Banana' => 5
// }
// Map {
//   'Apples' => 10,
//   'Tomatoes' => 10,
//   'Pasta' => 100,
//   'Rice' => 100,
//   'Banana' => 5
// }
```

**Repo:**
- GitHub repository: `alx-backend-javascript`  
- Directory: `0x03-ES6_data_manipulation`  
- File: `10-update_uniq_items.js`

--- 

#### 11. Weak link data structure (#advanced)

Export a const instance of WeakMap and name it `weakMap`.

Export a new function named `queryAPI`. It should accept an `endpoint` argument like so:

```js
{
  protocol: 'http',
  name: 'getUsers',
}
```

Track within the `weakMap` the number of times `queryAPI` is called for each endpoint.

When the number of queries is >= 5, throw an error with the message `Endpoint load is high`.

Example:

```js
import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
// Output:
// 1
// 2
// .../100-weak.js:16
//     throw new Error('Endpoint load is high');
// ...
```

**Repo:**
- GitHub repository: ``alx-backend-javascript``  
- Directory: `0x03-ES6_data_manipulation`  
- File: `100-weak.js`
