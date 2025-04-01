/* eslint-disable */
export default function hasArrayValues(set, value) {
   return value.every((value) => set.has(value));
}
