//https://ui.dev/creating-your-own-array/
//this example uses JavaScript prototype: https://ui.dev/beginners-guide-to-javascript-prototype/

function array () {
    //STEP ONE: INITIALIZE OBJECT
    //an array is basically a fancy object with numerical keys

    // array needs to return an object with a length property 
    // that delegates to array.prototype (since that’s where we’ll 
    // be putting all the methods). 
    // We can use Object.create for this
    let arr = Object.create(array.prototype)

    // the Object class has a static method on it called defineProperty 
    // which allows you to add a property on an object and 
    // specify if that property should be enumerable or not. 
    // Let’s modify our array function to use it so we can set length 
    // to not be enumerable
    Object.defineProperty(arr, 'length', {
        value: 0,
        enumerable: false,
        writable: true,
  })

    //STEP TWO: have our array function accept n amount of arguments 
    //and add those as numerical properties onto the object

    //accept n amount of arguments 
    //and add those as numerical properties onto the object. 
    //use a trusty for in loop to loop over arguments and 
    //add the keys/values to our array and increment length
    for (key in arguments) {
        arr[key] = arguments[key]
        arr.length += 1
    }

    //IMPLEMENTING METHODS

    // .push
    // needs to do 3 things. 
    // 1. First, it needs to add an element to our object at this.length, 
    // 2. then it needs to increment this.length by one, 
    // 3. and finally, it needs to return the new length of the “array”.
    array.prototype.push = function (element) {
        this[this.length] = element
        this.length++
        return this.length
    }

    // .pop 
    // needs to do three things as well. 
    // 1. First it needs to remove the “last” element, or the element at this.length - 1. 
    // 2. Then it needs to decrement this.length by one. 
    // 3. Lastly, it needs to return the element that was removed.

    array.prototype.pop = function () {
        this.length--
        const elementToRemove = this[this.length]
        delete this[this.length]
        return elementToRemove
    }

    // .filter 
    // creates a new array after filtering out elements that don’t pass a test specified by a given function. 
    // 1. We can iterate over every key/value pair in the “array” by using a for in loop. 
    // 2. Then for each key/value pair in the “array”, we’ll call the callback function that was passed in as the first argument. 
    // 3. If the result of that invocation is truthy, 
    // 4. we’ll push that into a new “array” which we’ll then return after we’ve iterated over the entire “array” instance.
    array.prototype.filter = function (cb) {
        let result = array()
      
        for (let index in this) {
          // Avoid prototype methods
          if (this.hasOwnProperty(index)) {
            const element = this[index]
      
            if (cb(element, index)) {
              result.push(element)
            }
          }
        }
      
        return result
    }
    
    return arr
  }

const friends = array('Jordyn', 'Mikenzi')

friends.push('Joshy') // 3
friends.push('Jake') // 4

friends.pop() // Jake

friends.filter((friend) =>
  friend.charAt(0) !== 'J'
) // ['Mikenzi']

console.log(friends) /*
  {
    0: 'Jordyn',
    1: 'Mikenzi',
    2: 'Joshy',
    length: 3,
    push: fn,
    pop: fn,
    filter: fn
  }
*/