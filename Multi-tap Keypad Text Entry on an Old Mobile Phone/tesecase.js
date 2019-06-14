Test.assertEquals(presses("LOL"), 9, "should work for simple examples");
Test.assertEquals(
  presses("HOW R U"),
  13,
  "should work for phrases with spaces"
);
Test.assertEquals(
  presses("WHERE DO U WANT 2 MEET L8R"),
  47,
  "should work for phrases with numbers"
);
Test.assertEquals(presses("lol"), 9, "should allow input in lowercase");
Test.assertEquals(presses("0"), 2, "should handle the 0 digit");
Test.assertEquals(presses("ZER0"), 11, "should handle the 0 digit");
Test.assertEquals(presses("1"), 1, "should handle the 1 digit");
Test.assertEquals(presses("IS NE1 OUT THERE"), 31, "should handle the 1 digit");
