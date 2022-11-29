import caesarCipher from "../apps/caesarCipher";

test("sentence cypher", () => {
  expect(caesarCipher("defend the east wall of the castle", 1)).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
});

test("upper case", () => {
    expect(caesarCipher("Defend the east wall of the castle", 1)).toBe(
      "Efgfoe uif fbtu xbmm pg uif dbtumf"
    );
  });

  test("punctuation", () => {
    expect(caesarCipher("Don’t forget to test punctuation!", 5)).toBe(
      "Its’y ktwljy yt yjxy uzshyzfynts!"
    );
  });

  test("wrapping", () => {
    expect(caesarCipher("zebra", 1)).toBe(
      "afcsb"
    );
  });