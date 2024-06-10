import currentMonth from "../src/date/currentMonth";

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe("currentMonth function", () => {
  it('should return "ივნისი" for the current month', () => {
    jest.setSystemTime(new Date("2024-06-10"));
    expect(currentMonth()).toBe("ივნისი");
  });

  it('should return "Jun" for the current month with shorten 3', () => {
    jest.setSystemTime(new Date("2024-06-10"));
    expect(currentMonth({ shorten: 3 })).toBe("ივნ");
  });

  it("should throw error for invalid shorten value", () => {
    expect(() => currentMonth({ shorten: -1 })).toThrow("Invalid shorten property");
  });

  it("should throw error for shorten 0", () => {
    expect(() => currentMonth({ shorten: 0 })).toThrow("Invalid shorten property");
  });
});
