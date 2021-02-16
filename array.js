const MEMORY = require("./memory");
let Memory = new MEMORY();

class Array {
    //STEP ONE: INITIALIZE OBJECT WITH CONSTRUCTOR 
    constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = Memory.allocate(this.length);
  }
    // .push
    // needs to do 3 things. 
    // 1. First, it needs to add an element to our object at this.length, 
    // 2. then it needs to increment this.length by one, 
    // 3. and finally, it needs to return the new length of the “array”.
    // for this specific array, 
    // increase the amount of memory which you have reserved so you have space for the new item, 
    // then you are going to need to set the value of the final block to contain the new value.
    // if the length is greater than the capacity then you resize according to the SIZE_RATIO
    // resize the array so there is space for the new item using the _resize method
    // set the memory at this.ptr + length to be equal to the value
    // best case: 0(1) average case: 0(n)
    push(val) {
        if (this.length >= this._capacity) {
        this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        Memory.set(this.ptr + this.length, val);
        this.length++;
    }
    // allocate a new, larger chunk of memory, 
    // copy any existing values from the old to the new chunk, 
    // and free the old chunk
    // O(n)
  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = Memory.allocate(size);
    if (this.ptr === null) {
      throw new Error("Out of memory");
    }
    Memory.copy(this.ptr, oldPtr, this.length);
    Memory.free(oldPtr);
    this._capacity = size;
  }
//   .get
//   add an index offset, 
//   and get the value stored at a memory address
//   0(1)
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    return Memory.get(this.ptr + index);
  }
//   .pop
//   leave an extra space which will be filled at the next push
//   O(1)
  pop() {
    if (this.length === 0) {
      throw new Error("Index error");
    }
    const value = Memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
//   .insert 
//   shift all of the values after the new value back 1 position. 
//   Then you put the new value in its correct place.
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    Memory.set(this.ptr + index, value);
    this.length++;
  }
//   .remove
//   Copy the values backward to fill the space where you removed the value 
//   to make space for a new value
//   best case = O(1) average case = O(n)
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    Memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}
function main() {
  Array.SIZE_RATIO = 3;
  // Create an instance of the Array class
  let arr = new Array();
  // Add an item to the array
  arr.push(3);
  console.log(arr);

  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
 console.log(arr);
  
  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);
  console.log(arr.get(0));

  arr.pop();
  arr.pop();
  arr.pop();
  arr.push("tauhida");
  console.log(arr);
  console.log(arr.get(0));
}
main();
// 1. Array { length: 1, _capacity: 3, ptr: 0 }
// 2. Array { length: 6, _capacity: 12, ptr: 3 } - Pushed Number is added at the beginning of the array
// 3. Array { length: 3, _capacity: 12, ptr: 3 } - New values added to the array as empty spaces, length decreased by 3 because of Pop
// 4. 3
// Nan - Allocates memory for new values into an array
// 5. _resize() function in array class is used to freeing the old space and assigning new space in memory, array will still perform same just memory address will be new.