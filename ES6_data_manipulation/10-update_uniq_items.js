export default function updateUniqItems(uniqItems) {
    if (!uniqItems instanceof Map){
        throw new Error("Cannot process");
    }
    uniqItems.forEach((value, key) => {
        if (value === 1) {
            uniqItems.set(key, 100);
        }
    });
    return uniqItems
}
