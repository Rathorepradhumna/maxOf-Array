const max = require('./max');


test('max is 5' , ()=>{
    expect(max([1, 2, 3, 4, 5])).toBe(5);
});

test('heightest out of array is 57' , ()=>{
    expect(max([11, 12, 33, 54, 57])).toBe(57);
});

test('try to enter string' , ()=>{
    expect(max([11, 12, "pradhumna", 54, 57])).toBe("error");
});