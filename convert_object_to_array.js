function toArray(objectP) {
  let arr = Array();
  for (let [key, value] of Object.entries(objectP)) {
    let smallArr = Array();
    smallArr.push(key);
    smallArr.push(value);
    arr.push(smallArr);
  }

  return arr;
}

a = toArray({ key1: 'value1', key2: 'value2', key3: 'value3' });
console.log(a);
