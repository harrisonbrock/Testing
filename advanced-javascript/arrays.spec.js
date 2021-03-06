const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {

    describe('each', () => {

        it('should be a function', () => {
            const each = arrayFunctions.each;
            expect(typeof each).toBe('function');
        });

    });

    describe('map', () => {

        it('should be a function', () => {
            const map = arrayFunctions.map;
            expect(typeof map).toBe('function');
        });

        it('should return a array that adds 1 to each item', () => {
            const map = arrayFunctions.map([1, 2], (item) => item + 1);
            expect(map[0]).toBe(2);
            expect(map[1]).toBe(3);
        });
    });

    describe('find', () => {

        it('should be a function', () => {
            const find = arrayFunctions.find;
            expect(typeof find).toBe('function');
        });

        it('should return item if found', () => {
            const arr = [9, 8, 5];
            const find = arrayFunctions.find;
            const result = find(arr, (item) => item === 8);
            expect(result).toBe(8);

        });

        it('should return undefined if item not found', () => {
            const arr = [9, 8, 5];
            const find = arrayFunctions.find;
            const result = find(arr, (item) => item === 1);
            expect(result).toBe(undefined);

        });
    });

    describe('filter ', () => {

        it('should be a function', () => {
            const filter = arrayFunctions.filter;
            expect(typeof filter).toBe('function');
        });

        it('should return a new array with number less than 5', () => {

            const arr = [5, 4, 3];
            const filter = arrayFunctions.filter;
            const filterArr = filter(arr, (item) => item < 5);
            expect(filterArr.length).toBe(2);
            expect(filterArr[0]).toBe(4);
            expect(filterArr[1]).toBe(3);

        });
    });

    describe('reduce ', () => {

        it('should be a function', () => {
            const reduce = arrayFunctions.reduce;
            expect(typeof reduce).toBe('function');
        });
    });

    describe('flatten ', () => {

        it('should be a function', () => {
            const flatten = arrayFunctions.flatten;
            expect(typeof flatten).toBe('function');
        });
    });
});
