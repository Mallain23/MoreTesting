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
    it('should return "fizz-buzz" if number is divisible by 15', (() => {
        const normalCases = [315, 15, 45];
        normalCases.forEach(input => {
            fizzBuzzer(input).should.equal('fizz-buzz')
        })
    }))
    it('should return fizz if divisible by 3', (() => {
        const normalCases = [9, 27, 39];
        normalCases.forEach(input => {
            fizzBuzzer(input).should.equal("fizz")
        })
    }))
    it('should return buzz if divisible by 5', (() => {
        const normalCases = [40, 95, 755];
        normalCases.forEach(input => {
          fizzBuzzer(input).should.equal("buzz");
        })
    }))
    it('should return the input if not divisible by 3 or 5', (() => {
        const normalCases = [401, 764, 1]
        normalCases.forEach(input => {
          fizzBuzzer(input).should.equal(input)
        })
    }))
 }))
