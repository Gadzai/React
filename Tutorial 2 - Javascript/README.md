# React Tutorial 2 - Javascript

### Let and Const

- var creates a variable in javascript
- in ES6, 2 keywords introduced, let and const.
- Highly encouraged to use let and const
- Let is variable and const is constant which cannot be change after ammend

<br/><hr/>

Script tested with `var`:

```javascript
var testVariable = "test";
console.log(testVariable);
testVariable = "ammended test value";
console.log(testVariable);
```

output:

> test
> <br/>
> ammended test value

<hr/>

Script tested with `let`:

```javascript
let testVariable = "test";
console.log(testVariable);
testVariable = "ammended test value";
console.log(testVariable);
```

output:

> test
> <br/>
> ammended test value

<hr/>

Script tested with `const`:

```javascript
let testVariable = "test";
console.log(testVariable);
testVariable = "ammended test value";
console.log(testVariable);
```

output:

> test
> <br/>
> error
> <br/>
> TypeError: Assignment to constant variable.

<hr/><br/>