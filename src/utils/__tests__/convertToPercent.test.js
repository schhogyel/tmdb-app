import { convertToPercent } from "../";

describe("convertToPercent", () => {
  it("converts to percentage", () => {
    expect(convertToPercent(2.5)).toBe("25%");
  });
});
