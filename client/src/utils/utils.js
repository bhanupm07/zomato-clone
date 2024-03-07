export function getTruncatedString(str, num) {
  if (str.length < num) {
    return str;
  } else {
    return str.slice(0, num) + "...";
  }
}

export function getTruncatedStringFromArray(arr, num) {
  const cuisineString = arr.reduce((acc, cur, i, arr) => {
    return acc + ", " + cur;
  });

  if (cuisineString.length < num) {
    return cuisineString;
  } else {
    return cuisineString.slice(0, num) + "...";
  }
}
