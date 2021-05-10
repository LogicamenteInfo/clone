# @logicamente.info/clone

> Quickly clones a object structure

## Installation

```bash
npm install --save @logicamente.info/clone
# or
yarn add @logicamente.info/clone
```

## Usage

```js
const clone = require('@logicamente.info/clone');
const a = { foo: { bar: 'foo' } };
const b = clone(a);
b.foo.bar = 'bar';
console.log(a);
console.log(b);
```

Will produce:

```
{ foo: { bar: 'foo' } }
{ foo: { bar: 'bar' } }
```

## Why that clone dep?

Our algorithm is mastered to clone common objects, not containing any classes instances. That's why we rely on the original mighty https://github.com/pvorb/clone module.

For plain objects, this module is the fastest in the wild as you can witness [in our tests results](https://github.com/logicamenteinfo/clone-test) ([Video proof](https://www.youtube.com/watch?v=i6jzrs7dI6o)). But considering class instances copying, we realized that [clone](https://github.com/pvorb/clone) is the fastest code alive.