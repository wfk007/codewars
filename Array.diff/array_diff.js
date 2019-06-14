function array_diff(a, b) {
  return a.filter(v => b.indexOf(v) === -1);
}
