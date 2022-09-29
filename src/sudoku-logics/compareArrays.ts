/**
 * Compares two arrays (of any dimensions) and returns true if they are equal arrays, otherwise returns false
 * Recursive function
 * @param arr1 The first array to be compared
 * @param arr2 The second array to be compared to
 */
const compareArrays = (arr1: any[], arr2: any[]): boolean => {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
    return arr1 === arr2;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!compareArrays(arr1[i], arr2[i])) {
      return false;
    }
  }
  return true;
};

export default compareArrays;
