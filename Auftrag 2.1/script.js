const replaceElementInArrayImmutable = (arr, index, newValue) => {
    if (index < 0 || index >= arr.length) {
      throw new Error("Index out of bounds");
    }
    return [
      ...arr.slice(0, index),
      newValue,
      ...arr.slice(index + 1),
    ];
  };
  
  const originalArray = [1, 2, 3, 4, 5];
  const newArray = replaceElementInArrayImmutable(originalArray, 2, 99);
  
  console.log(originalArray);
  console.log(newArray); 
  