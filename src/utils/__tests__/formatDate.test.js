import { formatDate, formatYear, convertMinToHourMin } from "../";

describe("convertToPercent", () => {
  it("formats date correctly", () => {
    expect(formatDate("2019-04-24")).toBe("April 2019");
  });

  it("formats year correctly", () => {
    expect(formatYear("2019-04-24")).toBe("2019");
  });

  it("convers minutes to hour and minutes  correctly", () => {
    expect(convertMinToHourMin("181")).toBe("3h 1 min");
  });
});
