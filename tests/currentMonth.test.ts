import currentMonth from "../src/date/currentMonth";

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe("currentMonth function", () => {
  const testDates = [
    { date: "2024-01-15", month: "იანვარი" },
    { date: "2024-02-15", month: "თებერვალი" },
    { date: "2024-03-15", month: "მარტი" },
    { date: "2024-04-15", month: "აპრილი" },
    { date: "2024-05-15", month: "მაისი" },
    { date: "2024-06-15", month: "ივნისი" },
    { date: "2024-07-15", month: "ივლისი" },
    { date: "2024-08-15", month: "აგვისტო" },
    { date: "2024-09-15", month: "სექტემბერი" },
    { date: "2024-10-15", month: "ოქტომბერი" },
    { date: "2024-11-15", month: "ნოემბერი" },
    { date: "2024-12-15", month: "დეკემბერი" },
  ];

  testDates.forEach(({ date, month }) => {
    it(`should return "${month}" for the date ${date}`, () => {
      jest.setSystemTime(new Date(date));
      expect(currentMonth()).toBe(month);
    });
  });

  testDates.forEach(({ date, month }) => {
    it(`should return shortened month "${month.slice(0, 3)}" for the date ${date} with shorten 3`, () => {
      jest.setSystemTime(new Date(date));
      expect(currentMonth({ shorten: 3 })).toBe(month.slice(0, 3));
    });
  });

  it("should throw error for invalid shorten value", () => {
    expect(() => currentMonth({ shorten: -1 })).toThrow("The 'shorten' property must be a positive integer");
  });

  it("should throw error for shorten 0", () => {
    expect(() => currentMonth({ shorten: 0 })).toThrow("The 'shorten' property must be a positive integer");
  });

  // Test passing a specific date directly
  testDates.forEach(({ date, month }) => {
    it(`should return "${month}" for the specific date ${date}`, () => {
      expect(currentMonth({ date: new Date(date) })).toBe(month);
    });
  });

  testDates.forEach(({ date, month }) => {
    it(`should return shortened month "${month.slice(0, 3)}" for the specific date ${date} with shorten 3`, () => {
      expect(currentMonth({ date: new Date(date), shorten: 3 })).toBe(month.slice(0, 3));
    });
  });

  // Test for invalid date
  it("should throw error for invalid date", () => {
    expect(() => currentMonth({ date: new Date("invalid-date") })).toThrow("Invalid date property");
  });
});
