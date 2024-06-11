import formatDate from "../src/date/formatDate";

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe("formatDate function", () => {
  it('should return "სამშაბათი, ივნ" for "__დღე, __თვე3"', () => {
    jest.setSystemTime(new Date("2024-06-11"));

    const result = formatDate({ format: "__დღე, __თვე3" });
    expect(result).toBe("სამშაბათი, ივნ");
  });

  it('should return "ს, ისი" for "__დღე1, __თვე3_"', () => {
    jest.setSystemTime(new Date("2024-06-11"));

    const result = formatDate({ format: "__დღე1, __თვე3_" });
    expect(result).toBe("ს, ისი");
  });

  it('should return "სამშაბათი, 11" for "__დღე, __რიცხვი"', () => {
    jest.setSystemTime(new Date("2024-06-11"));

    const result = formatDate({ format: "__დღე, __რიცხვი" });
    expect(result).toBe("სამშაბათი, 11");
  });

  it('should return "სამშაბათი, ივნისი" for "__დღე, __თვე"', () => {
    jest.setSystemTime(new Date("2024-06-11"));

    const result = formatDate({ format: "__დღე, __თვე" });
    expect(result).toBe("სამშაბათი, ივნისი");
  });

  it('should return "სამშაბათი, სი" for "__დღე, __თვე_3"', () => {
    jest.setSystemTime(new Date("2024-06-11"));

    const result = formatDate({ format: "__დღე, __თვე2_" });
    expect(result).toBe("სამშაბათი, სი");
  });

  it('should return "სამშაბათი, 211" for "__დღე, 2__რიცხვი"', () => {
    jest.setSystemTime(new Date("2024-06-11"));

    const result = formatDate({ format: "__დღე, 2__რიცხვი" });
    expect(result).toBe("სამშაბათი, 211");
  });

  it("should throw error for invalid date property", () => {
    jest.setSystemTime(new Date("2024-06-11"));
    expect(() => formatDate({ date: new Date("invalid-date"), format: "__დღე, __თვე" })).toThrow("Invalid date property");
  });
});
