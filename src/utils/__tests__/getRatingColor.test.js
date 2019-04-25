import { getRatingColor } from "../";

describe("getRatingColor", () => {
  it("returns correct rating color", () => {
    expect(getRatingColor(2.5)).toBe("error");
    expect(getRatingColor(6.5)).toBe("secondary");
    expect(getRatingColor(8.5)).toBe("primary");
  });
});
