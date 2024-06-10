import today from "../src/date/today";

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe("today function", () => {
  it('should return "შაბათი" for 2024-06-08', () => {
    jest.setSystemTime(new Date("2024-06-08"));
    expect(today()).toBe("შაბათი");
  });

  it('should return "პარასკევი" for 2024-05-31', () => {
    jest.setSystemTime(new Date("2024-05-31"));
    expect(today()).toBe("პარასკევი");
  });

  it('should return "ორშაბათი" for Monday', () => {
    jest.setSystemTime(new Date("2024-06-10")); // Monday
    expect(today()).toBe("ორშაბათი");
  });

  it('should return "სამშაბათი" for Tuesday', () => {
    jest.setSystemTime(new Date("2024-06-11")); // Tuesday
    expect(today()).toBe("სამშაბათი");
  });

  it('should return "ოთხშაბათი" for Wednesday', () => {
    jest.setSystemTime(new Date("2024-06-12")); // Wednesday
    expect(today()).toBe("ოთხშაბათი");
  });

  it('should return "ხუთშაბათი" for Thursday', () => {
    jest.setSystemTime(new Date("2024-06-13")); // Thursday
    expect(today()).toBe("ხუთშაბათი");
  });

  it('should return "პარასკევი" for Friday', () => {
    jest.setSystemTime(new Date("2024-06-14")); // Friday
    expect(today()).toBe("პარასკევი");
  });

  it('should return "შაბათი" for Saturday', () => {
    jest.setSystemTime(new Date("2024-06-15")); // Saturday
    expect(today()).toBe("შაბათი");
  });

  it('should return "კვირა" for Sunday', () => {
    jest.setSystemTime(new Date("2024-06-16")); // Sunday
    expect(today()).toBe("კვირა");
  });

  it('should return "ხუთშაბათი" for 2024-02-29', () => {
    jest.setSystemTime(new Date("2024-02-29"));
    expect(today()).toBe("ხუთშაბათი");
  });

  it('should return "ორშა" for Monday with shorten 4', () => {
    jest.setSystemTime(new Date("2024-06-10")); // Monday
    expect(today({ shorten: 4 })).toBe("ორშა");
  });

  it('should return "სამ" for Tuesday with shorten 3', () => {
    jest.setSystemTime(new Date("2024-06-11")); // Tuesday
    expect(today({ shorten: 3 })).toBe("სამ");
  });

  it('should return "ოთხ" for Wednesday with shorten 3', () => {
    jest.setSystemTime(new Date("2024-06-12")); // Wednesday
    expect(today({ shorten: 3 })).toBe("ოთხ");
  });

  // Test for negative shorten values
  it("should throw error for invalid shorten value", () => {
    expect(() => today({ shorten: -1 })).toThrow("Invalid shorten property");
  });

  // Test for valid shorten value of 0
  it("should throw error for shorten 0", () => {
    expect(() => today({ shorten: 0 })).toThrow("Invalid shorten property");
  });
});
