function longestConsec(strarr, k) {
  // your code
  let n = strarr.length,
    result = "";
  if (n === 0 || k > n || k <= 0) {
    return result;
  }
  for (let i = 0; i < n - k + 1; i++) {
    let str = strarr.slice(i, i + k).join("");
    str.length > result.length ? (result = str) : void 0;
  }
  return result;
}
console.log(
  longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2)
);
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));

/**
 * expect:
 * wlwsasphmxxowiaxujylentrklctozmymu;
 * ixoyx3452zzzzzzzzzzzz
 */

/**
 * my answer
 * owiaxujylentrklctozmymuwlwsasphmxx;
 * zzzzzzzzzzzzwkppvixoyx;
 */
