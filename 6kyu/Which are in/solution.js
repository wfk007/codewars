function inArray(array1, array2) {
  return array1.filter(v1 => array2.some(v2 => v2.includes(v1))).sort();
}
console.log(
  inArray(
    ["live", "strong", "arp"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
);
