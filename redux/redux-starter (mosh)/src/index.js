// import pkg from 'lodash/fp.js';
// const {compose, pipe} = pkg;
// const log = console.log

// const input = "         Blockchain       "
// const output = `<div>${input}</div>`

// const trim = str => str.trim()
// const wrapInDiv = str => `<div>${str}</div>`
// const toLower = str => str.toLowerCase()
// const toUpper = str => str.toUpperCase()

// let result = wrapInDiv(trim(input))
// console.log(result)
// let result2 = toLower(wrapInDiv(trim(input)))
// console.log(result2)
// let result3 = toUpper(wrapInDiv(trim(input)))
// console.log(result3)

// // this is how you compose functions in functional programming language. Function Composition.


// // practice
// const a = 10
// const b = 20

// const add = (a,b) => a+b
// const addDecimal = num => `${num}.00`
// const result4 = addDecimal(add(a,b))
// console.log(result4)

// function divOnResult(num) {
//     return num/2
// }

// const result5 = divOnResult(add(a,b))
// console.log(result5)

// // practicing lodash compose and pipe. compose is used to remove all the paranthesis from our fp and pipe is used to change the order of
// // the function references from right to left to left to right.

// const additionThenDiv = pipe(add, divOnResult)
// const result6 = additionThenDiv(a,b)
// console.log(result6)

// const lowerWrap = pipe(trim, toLower, wrapInDiv)
// const result7 = lowerWrap(input)
// console.log(result7)

// // currying
// // currying is when we take a function which has two arguments and then boil it down to one argument.

// function addition(a) {
//     return function(b) {
//         return a+b;
//     }
// }

// const result8 = addition(341)(432)
// log(result8)

// // using currying in pipe

// const addthendivusingcurry = pipe(addition(a,b), divOnResult)
// const result9 = addthendivusingcurry(a,b)
// console.log(result9);

// // ABOVE DOESNT GIVE THE RIGHT OUTPUT SORT IT OUT LATER

// // USING CURRYING IN ARROW FUNCTION 

// const addCurry =  a => b => a+b
// const result10 = addCurry(23)(32)
// log(result10)

import store from "./store"
import * as actions from "./actionTypes"
import { bugAdded } from "./actions"
import { bugRemoved, bugResolved } from "./actions"

const log = console.log

store.subscribe(() => {
    log("Store changed", store.getState())
})

store.dispatch(bugAdded("Bug1"))

store.dispatch(bugAdded("Bug2"))

store.dispatch(bugRemoved(1))
store.dispatch(bugRemoved(2))

store.dispatch(bugAdded("Bug3"))
store.dispatch(bugAdded("Bug24"))
store.dispatch(bugAdded("Bug23"))
store.dispatch(bugAdded("Bug21"))

store.dispatch(bugResolved(4))
store.dispatch(bugResolved(6))


log(store.getState())
log(store)
