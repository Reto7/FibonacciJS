'use strict'

import assert from 'assert'

import fibonacci from '../fibonacci'

describe('fibonacci test', function () {
     describe('check array entry count', function () {
         it('should give 4', function () {
             let fibonacciArray = fibonacci(4)
             assert.equal(fibonacciArray.length,4)
         })
         it('should give 6', function () {
             let fibonacciArray = fibonacci(6)
             assert.equal(fibonacciArray.length,6)
         })
     })
    describe('check array at position', function () {
        it('should give 2 (position #4)', function () {
            let fibonacciArray = fibonacci(4)
            assert.equal(fibonacciArray[3],2)         //[ 0, 1, 1, 2, 3, 5 ]
        })
        it('should give 34 (position #9)', function () {
            let fibonacciArray = fibonacci(10)
            assert.equal(fibonacciArray[9],34)         //[ 0, 1, 1, 2, 3, 5 ]
        })
    })
 })