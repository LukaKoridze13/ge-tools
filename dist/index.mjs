// src/config/days.ts
var days = ["\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10D8", "\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10D9\u10D5\u10D8\u10E0\u10D0"];
var days_default = days;

// src/date/today.ts
function today({ shorten } = {}) {
  const currentDayIndex = (/* @__PURE__ */ new Date()).getDay();
  const adjustedIndex = (currentDayIndex + 6) % 7;
  let result = days_default[adjustedIndex];
  if (typeof shorten !== "undefined" && shorten <= 0) {
    throw new Error("Invalid shorten property");
  }
  if (shorten) {
    result = result.slice(0, shorten);
  }
  return result;
}

// src/config/months.ts
var months = ["\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10D8", "\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10D8", "\u10DB\u10D0\u10E0\u10E2\u10D8", "\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8", "\u10DB\u10D0\u10D8\u10E1\u10D8", "\u10D8\u10D5\u10DC\u10D8\u10E1\u10D8", "\u10D8\u10D5\u10DA\u10D8\u10E1\u10D8", "\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10DD", "\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8", "\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10D8", "\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8", "\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8"];
var months_default = months;

// src/date/currentMonth.ts
function currentMonth({ shorten } = {}) {
  const currentMonthIndex = (/* @__PURE__ */ new Date()).getMonth();
  let result = months_default[currentMonthIndex];
  if (typeof shorten !== "undefined" && shorten <= 0) {
    throw new Error("Invalid shorten property");
  }
  if (shorten) {
    result = result.slice(0, shorten);
  }
  return result;
}
export {
  currentMonth,
  today
};
//# sourceMappingURL=index.mjs.map