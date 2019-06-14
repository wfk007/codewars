function testing(actual, expected) {
  Test.assertEquals(actual, expected);
}

Test.describe("longestConsec", function() {
  Test.it("Basic tests", function() {
    testing(
      longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2),
      "abigailtheta"
    );
    testing(
      longestConsec(
        [
          "ejjjjmmtthh",
          "zxxuueeg",
          "aanlljrrrxx",
          "dqqqaaabbb",
          "oocccffuucccjjjkkkjyyyeehh"
        ],
        1
      ),
      "oocccffuucccjjjkkkjyyyeehh"
    );
    testing(longestConsec([], 3), "");
    testing(
      longestConsec(
        [
          "itvayloxrp",
          "wkppqsztdkmvcuwvereiupccauycnjutlv",
          "vweqilsfytihvrzlaodfixoyxvyuyvgpck"
        ],
        2
      ),
      "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
    );
    testing(
      longestConsec(
        ["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"],
        2
      ),
      "wlwsasphmxxowiaxujylentrklctozmymu"
    );
    testing(
      longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2),
      ""
    );
    testing(
      longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3),
      "ixoyx3452zzzzzzzzzzzz"
    );
    testing(
      longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15),
      ""
    );
    testing(
      longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0),
      ""
    );
  });
});

Test.describe("Random tests", function() {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }

  function longestConsecSOL71(strarr, k) {
    var n = strarr.length;
    if (n == 0 || k > n || k <= 0) return "";
    var arr = strarr.map(function(u) {
      return u.length;
    });
    var sm = 0;
    for (var i = 0; i < k; i++) sm += arr[i];
    var mx_sm = sm,
      mx_nd = k - 1;
    for (var u = k; u < n; u++) {
      sm = sm + arr[u] - arr[u - k];
      if (sm > mx_sm) {
        mx_sm = sm;
        mx_nd = u;
      }
    }
    var start = mx_nd - k + 1;
    return strarr.slice(start, mx_nd + 1).join("");
  }
  function doEx(k) {
    var a1 = [],
      i = 0;
    while (i < k) {
      let res = "";
      let j = 0;
      while (j < randint(6, 25)) {
        let n = randint(97, 122);
        res += String.fromCharCode(n);
        j += 1;
      }
      a1.push(res);
      i += 1;
    }
    return a1;
  }

  for (var i = 0; i < 200; i++) {
    s1 = doEx(randint(100, 200));
    k = randint(0, s1.length + 2);
    r = longestConsecSOL71(s1, k);
    testing(longestConsec(s1, k), r);
  }
});
