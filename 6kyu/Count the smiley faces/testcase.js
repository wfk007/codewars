Test.describe("Testing", function() {
  it("Basic tests", _ => {
    Test.assertEquals(countSmileys([]), 0);
    Test.assertEquals(countSmileys([":)", ";(", ";}", ":-D"]), 2);
    Test.assertEquals(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
    Test.assertEquals(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
    Test.assertEquals(countSmileys([":-)", ";~D", ":-D", ":_D"]), 3);
    Test.assertEquals(countSmileys([":---)", "))", ";~~D", ";D"]), 1);
    Test.assertEquals(countSmileys([";~)", ":)", ":-)", ":--)"]), 3);
    Test.assertEquals(countSmileys([":o)", ":--D", ";-~)"]), 0);
  });
  it("Should work for random tests", _ => {
    function smileOrSad() {
      let t = Math.random() < 0.5;
      return (
        ":;"[Math.round(Math.random())] +
        (t ? "-~o"[Math.round(Math.random() * 2)] : "") +
        "D)>("[Math.round(Math.random() * 3)]
      );
    }
    function getArr() {
      return Array.from(Array(7)).map(a => smileOrSad());
    }
    function solution(s) {
      return s
        .map(a => (/^[:;][-~]?[)D]$/.test(a) ? 1 : 0))
        .reduce((a, b) => a + b, 0);
    }
    for (let i = 0; i < 100; i++) {
      let arr = getArr();
      console.log("Testing for: " + arr.join(" , "));
      Test.assertEquals(countSmileys([...arr]), solution(arr));
    }
  });
  console.log("<font size='5'>Great work!</font>");
});
