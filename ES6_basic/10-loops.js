/* eslint-disable */
export default function appendToEachArrayValue(array, appendString) {
    const data = [];
    for (let idx of array) {
      idx = appendString + idx;
      data.push(idx);
    }
    return data;
  }
