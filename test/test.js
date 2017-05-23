'use strict'

import assert from 'assert'           // js liest aus node_modules
import fibonacci from '../fibonacci'  // js liest aus unserem verzeichnis

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
    describe('check array at position negative test', function () {
        it('should give 2 (position #4)', function () {
            let fibonacciArray = fibonacci(2)
            assert.equal(fibonacciArray[13],undefined)
        })

    })
 })