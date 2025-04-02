export default function cleanSet(set, startString) {
  if (typeof startString !== "string" || startString.length === 0 ||  typeof startString === 'undefined') {
    return "";
  }
  const result = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      result.push(item.slice(startString.length));
    }
  }

  return result.join("-");
}
