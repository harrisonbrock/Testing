const funcs = require('./project-1');

// write your tests here

// Test add function
// testing add two positive numbers
test('add 1 + 2 to equal 3', () => {
    expect(funcs.add(1,2)).toBe(3);
});

// testing add a positive number and zero
test('add 1 + 0 to equal 1', () => {
    expect(funcs.add(1,0)).toBe(1);
});

// testing add two negative numbers
test('add -1 + (-2_ to equal -3', () => {
    expect(funcs.add(-1,-2)).toBe(-3);
});

// testing add a negative number and a positive number
// a >= b
test('add 10 + (-5) to equal 5', () => {
    expect(funcs.add(10,-5)).toBe(5);
});

// testing add a negative number and a positive number
// a <= b
test('add 5 + (-10) to equal -5', () => {
    expect(funcs.add(-10,5)).toBe(-5);
});
////////////////////////////////////////////////////////

//Test subtract function
// subtract two positive numbers
test('subtract 2 - 1 to equal 1', () => {
    expect(funcs.subtract(2, 1)).toBe(1);
});


test('subtract 1 - 2 to equal -1', () => {
    expect(funcs.subtract(1, 2)).toBe((-1))
});


// subtract two negative numbers
test('subtract -10 - (-5) equal ', ()=> {
    expect(funcs.subtract(-10, -5)).toBe((-5));
});
////////////////////////////////////////////////////////

// Test Multiply
// multiply two positive numbers
test('multiply 5 *5 to equal 25', () => {
    expect(funcs.multiply(5,5)).toBe(25);
});

// test multiply one positive number and one negative number
test('multiply 5 * -5', () => {
    expect(funcs.multiply(5,-5)).toBe(-25);
});

// test multiply two negative numbers
test('multiply -5*-5', ()=> {
    expect(funcs.multiply(-5, -5)).toBe(25);
});

//test multiply a positive number by 0
test('multiply 5* 0', ()=> {
    expect(funcs.multiply(5, 0)).toBe(0);
});

//test multiply a negative number by 0
test('multiply -5* 0', ()=> {
    expect(funcs.multiply(5, 0)).toBe(0);
});

/////////////////////////////////////////////////////////