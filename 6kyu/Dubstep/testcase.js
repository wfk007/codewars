Test.assertEquals(
  songDecoder("AWUBBWUBC"),
  "A B C",
  "WUB should be replaced by 1 space"
);
Test.assertEquals(
  songDecoder("AWUBWUBWUBBWUBWUBWUBC"),
  "A B C",
  "multiples WUB should be replaced by only 1 space"
);
Test.assertEquals(
  songDecoder("WUBAWUBBWUBCWUB"),
  "A B C",
  "heading or trailing spaces should be removed"
);

Test.assertEquals(songDecoder("RWUBWUBWUBLWUB"), "R L");
Test.assertEquals(
  songDecoder("WUBJKDWUBWUBWBIRAQKFWUBWUBYEWUBWUBWUBWVWUBWUB"),
  "JKD WBIRAQKF YE WV"
);
Test.assertEquals(
  songDecoder("WUBKSDHEMIXUJWUBWUBRWUBWUBWUBSWUBWUBWUBHWUBWUBWUB"),
  "KSDHEMIXUJ R S H"
);
Test.assertEquals(
  songDecoder("QWUBQQWUBWUBWUBIWUBWUBWWWUBWUBWUBJOPJPBRH"),
  "Q QQ I WW JOPJPBRH"
);
Test.assertEquals(
  songDecoder(
    "WUBWUBOWUBWUBWUBIPVCQAFWYWUBWUBWUBQWUBWUBWUBXHDKCPYKCTWWYWUBWUBWUBVWUBWUBWUBFZWUBWUB"
  ),
  "O IPVCQAFWY Q XHDKCPYKCTWWY V FZ"
);
Test.assertEquals(
  songDecoder(
    "WUBYYRTSMNWUWUBWUBWUBCWUBWUBWUBCWUBWUBWUBFSYUINDWOBVWUBWUBWUBFWUBWUBWUBAUWUBWUBWUBVWUBWUBWUBJB"
  ),
  "YYRTSMNWU C C FSYUINDWOBV F AU V JB"
);
Test.assertEquals(
  songDecoder("WUBKSDHEMIXUJWUBWUBRWUBWUBWUBSWUBWUBWUBHWUBWUBWUB"),
  "KSDHEMIXUJ R S H"
);
Test.assertEquals(songDecoder("AWUBWUBWUB"), "A");
Test.assertEquals(songDecoder("AWUBBWUBCWUBD"), "A B C D");
Test.assertEquals(songDecoder("WUBWWUBWUBWUBUWUBWUBBWUB"), "W U B");
Test.assertEquals(songDecoder("WUWUBBWWUBUB"), "WU BW UB");
Test.assertEquals(
  songDecoder(
    "WUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUABWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUB"
  ),
  "WUAB"
);
Test.assertEquals(songDecoder("U"), "U");
Test.assertEquals(songDecoder("WUWUB"), "WU");
Test.assertEquals(songDecoder("UBWUB"), "UB");
Test.assertEquals(songDecoder("WUWUBUBWUBUWUB"), "WU UB U");
Test.assertEquals(songDecoder("WUBWWUBAWUB"), "W A");
Test.assertEquals(songDecoder("WUUUUU"), "WUUUUU");
Test.assertEquals(songDecoder("WUBWUBA"), "A");
