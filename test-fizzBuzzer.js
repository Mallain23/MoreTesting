const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


describe('fizzBuzzer', (() => {
    it('should raise an error if args are not numbers', (() => {
        const badInputs = ["b", false, "why"];

        badInputs.forEach(input => {
            (() => {
                fizzBuzzer(input)
            }).should.throw(Error);
        });
    }))
    it('should return "fizz-buzz" if number is divisible by 15, fizz if divisible by 3, and buzz if divisible by 5', (() => {
        const normalCases = [
          {a: 315, expected: "fizz-buzz"},
          {a: 9, expected: "fizz"},
          {a: 25, expected: "buzz"}
        ];
        normalCases.forEach(input => {
            const answer = fizzBuzzer(input.a)
            answer.should.equal(input.expected)
        })
    }))
 }))
