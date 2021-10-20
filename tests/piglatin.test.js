const { translate } = require("../src/piglatin");

describe("translate function", () => {
  test("word that starts with the vowel a", () => {
    const result = translate("apple");
    expect(result).toBe("appleway");
  });
  test("word that starts with the vowel e", () => {
    const result = translate("elephant");
    expect(result).toBe("elephantway");
  });
  test("word that starts with the vowel i", () => {
    const result = translate("inch");
    expect(result).toBe("inchway");
  });
  test("word that starts with the vowel o", () => {
    const result = translate("orange");
    expect(result).toBe("orangeway");
  });
  test("word that starts with the vowel u", () => {
    const result = translate("unicorn");
    expect(result).toBe("unicornway");
  });
  test("word that starts with capital A", () => {
    const result = translate("Apple");
    expect(result).toBe("appleway");
  });
  test("word that starts with capital E", () => {
    const result = translate("Elephant");
    expect(result).toBe("elephantway");
  });
  test("word that starts with capital I", () => {
    const result = translate("Inch");
    expect(result).toBe("inchway");
  });
  test("word that starts with capital O", () => {
    const result = translate("Orange");
    expect(result).toBe("orangeway");
  });
  test("word that starts with capital U", () => {
    const result = translate("Unicorn");
    expect(result).toBe("unicornway");
  });
  test("word that starts with consonant + the letter a", () => {
    const result = translate("band");
    expect(result).toBe("andbay");
  });
  test("word that starts with consonant + the letter e", () => {
    const result = translate("fender");
    expect(result).toBe("enderfay");
  });
  test("word that starts with consonant + the letter i", () => {
    const result = translate("giraffe");
    expect(result).toBe("iraffegay");
  });
  test("word that starts with two consonants + the letter a", () => {
    const result = translate("brake");
    expect(result).toBe("akebray");
  });
  test("word that starts with two consonants + the letter e", () => {
    const result = translate("break");
    expect(result).toBe("eakbray");
  });
  test("word that starts with three consonants + the letter e", () => {
    const result = translate("strong");
    expect(result).toBe("ongstray");
  });
  test("word that starts with three consonants + the letter i", () => {
    const result = translate("thrice");
    expect(result).toBe("icethray");
  });
  test("word that starts with four consonants", () => {
    const result = translate("system");
    expect(result).toBe("emsystay");
  });
});
