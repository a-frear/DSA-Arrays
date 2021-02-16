//https://www.geeksforgeeks.org/implementation-of-array-class-in-javascript/

class Array{ 
    constructor(){ 
      this.length=0; 
      this.data={}; 
    }
    //It returns the element at given index. 
    getElementAtIndex(index){ 
      return this.data[index]; 
    }
    // .push
    // needs to do 3 things. 
    // 1. First, it needs to add an element to our object at this.length, 
    // 2. then it needs to increment this.length by one, 
    // 3. and finally, it needs to return the new length of the “array”. 
    push(element){ 
      this.data[this.length]=element; 
      this.length++; 
      return this.length; 
    }
    // .pop 
    // needs to do three things as well. 
    // 1. First it needs to remove the “last” element, or the element at this.length - 1. 
    // 2. Then it needs to decrement this.length by one. 
    // 3. Lastly, return the data
    pop(){ 
      const item= this.data[this.length-1]; 
      delete this.data[this.length-1]; 
      this.length--; 
      return this.data; 
    }
    //.deleteAt
    //  This function is used to remove an element at given index or property in a data object.
    // In above function, use loop to reach at index till the end, and copy the next element at index 
    // and at the end of loop two copies of last element exist, 
    // delete last element through delete operator.
    // I DON'T REALLY UNDERSTAND THIS ONE 
    deleteAt(index){ 
      for(let i=index; i<this.length-1;i++){ 
        this.data[i]=this.data[i+1]; 
      } 
      delete this.data[this.length-1]; 
      this.length--; 
      return this.data; 
    }
    // .insertAt()
    // This function is used to insert an element at given index.
    // This function accepts two parameters item and index. 
    // Index number denoting the place where data to be inserted and item is the value 
    // which is to be inserted at index. 
    insertAt(item, index){ 
      for(let i=this.length;i>=index;i--){ 
        this.data[i]=this.data[i-1]; 
      } 
      this.data[index]=item; 
      this.length++; 
      return this.data; 
    } 
  } 
  const array= new Array();

  array.push(12); 
  array.push(13); //pushing element  
  array.push(14); 
  array.push(10); 
  array.push(989); 

  console.log(array)