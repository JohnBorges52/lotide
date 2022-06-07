# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jrborges52/lotide`

**Require it:**

`const _ = require('@usernjrborges52/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`
`const results = _./head([0,1,2]) // => [0]`
`const results = _./tail([1,2,3,4,5]) // =>[2,3,4,5]`
`const results = _./middle([1,2,3,4,5]) // => [3]`
`const results = _./assertArraysEqual([1,2,3],[1,2,3]) // => They are not equal`
`const results = _./assertEqual([1,2,3], [1,2,3]) // => They are equal`
`const results = _./countLetters("Hello World") // => 3 l `
`const results = _./countOnly(["Karl", "Salima","Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"]) // => Samila 2`
`const results = _./eqArrays ([1,2,3],[1,2,3] // => true`
`const results = _./eqObjects({a:1,b:2,c:3}, {b:2,c:3,a:1}) // => true`
`const results = _./findKey ({"Blue Hill": {stars: 1}, "Akaleri": {stars: 3}, "noma": {stars: 2}, "elBulli":{stars: 3}, "Ora":{stars:2 }, "Akelarre":{stars: 3}, stars === 2 ) // => noma`
`const results = _./findKeyByValue({sci_Fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"}), The wire // => drama`
`const results = _./flatten([[1,2,3],4,[5,6]]) // =>[1,2,3,4,5,6]`
`const results = _./letterPositions(letterPositions("hello").l // => [2,3]`
`const results = _./map("ground", "control", "to", "major", "tom") // => ['g','c','t','m','t']`
`const results = _./raisin[[1,2,3,4],2] // =>"Thats Good`
`const results = _./takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], ",") // => ["I've", "been", "to", "Hollywood"]`
`const results = _./without([1,2,3,4,5],3) // =>[1,2,4,5]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: It will compare two arrays and print if they are the same or not.
* `function2(assertEqual)`: It is going to print if two values are the same.
* `function3(countLetters)`: It will count how many of an specific letter it has.
* `function3(countOnly)`: It will count how many of a specific value there is in an array.
* `function3(eqArrays)`: Return a boolean comparing two arrays.
* `function3(eqObjects)`: It will compare two Objects and return a boolean
* `function3(findKeys)`: Return the key of a specific object providing the value.
* `function3(findKeysByValue)`: Return a key of an object providing the value.
* `function3(flatten)`: Reduce nested arrays into a single array.
* `function3(head)`: Return the firest item of an array.
* `function3(letterPositions)`: Return how many of an specific letter of a sentence.
* `function3(map)`: Return the first index of each item of the array.
* `function3(middle)`: Return the middle index of a array.
* `function3(raisin)`: Return if there is a specific item inside of an array.
* `function3(tail)`: RReturn an array without its head.
* `function3(takeUntil)`: Return the values of an array until finding the value of the argument.
* `function3(without)`: Return an array without a specific value.
