function normalizeColorName(colorName) {
  if (typeof colorName !== "string") {
    return "";
  }

  return colorName.trim().toLowerCase();
}

function isValidHexColor(hex) {
  if (typeof hex !== "string") {
    return false;
  }

  return /^#[0-9A-Fa-f]{6}$/.test(hex.trim());
}

describe("color validation unit tests", () => {
  test("normalizes a color name", () => {
    expect(normalizeColorName("  BLUE  ")).toBe("blue");
  });

  test("returns empty string for invalid color name input", () => {
    expect(normalizeColorName(null)).toBe("");
  });

  test("validates a correct hex color", () => {
    expect(isValidHexColor("#336699")).toBe(true);
  });

  test("rejects an invalid hex color", () => {
    expect(isValidHexColor("336699")).toBe(false);
  });
});

