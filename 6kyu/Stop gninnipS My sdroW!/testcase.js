describe("Spinning words", () => {
  it("fixed tests", () => {
    Test.assertEquals(spinWords("Welcome"), "emocleW");
    Test.assertEquals(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
    Test.assertEquals(spinWords("This is a test"), "This is a test");
    Test.assertEquals(
      spinWords("This is another test"),
      "This is rehtona test"
    );
    Test.assertEquals(
      spinWords("You are almost to the last test"),
      "You are tsomla to the last test"
    );
    Test.assertEquals(
      spinWords("Just kidding there is still one more"),
      "Just gniddik ereht is llits one more"
    );
    Test.assertEquals(
      spinWords("Seriously this is the last one"),
      "ylsuoireS this is the last one"
    );
  });
  it("random tests", () => {
    const refSpinWords = s =>
      s
        .split(" ")
        .map(s =>
          s.length >= 5
            ? s
                .split("")
                .reverse()
                .join("")
            : s
        )
        .join(" ");
    const rnd = n => Math.floor(Math.random() * n);
    const abc = "abcdefghijklmnopqrstuvwxyz";
    const rndWord = () =>
      Array.from({ length: rnd(12) + 1 }, () => abc[rnd(abc.length)]).join("");
    const rndSentence = i => Array.from({ length: rnd(i) }, rndWord).join(" ");
    for (let i = 1; i <= 50; i++) {
      const s = rndSentence(i);
      Test.assertEquals(spinWords(s), refSpinWords(s));
    }
  });
});
