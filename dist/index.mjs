// src/config/days.ts
var days = ["\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10D8", "\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10D9\u10D5\u10D8\u10E0\u10D0"];
var days_default = days;

// src/date/today.ts
function today({ shorten, date = /* @__PURE__ */ new Date() } = {}) {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Invalid date property");
  }
  const currentDayIndex = date.getDay();
  const adjustedIndex = (currentDayIndex + 6) % 7;
  let result = days_default[adjustedIndex];
  if (typeof shorten !== "undefined" && (!Number.isInteger(shorten) || shorten <= 0)) {
    throw new Error("The 'shorten' property must be a positive integer");
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
function currentMonth({ shorten, date = /* @__PURE__ */ new Date() } = {}) {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Invalid date property");
  }
  const currentMonthIndex = date.getMonth();
  let result = months_default[currentMonthIndex];
  if (typeof shorten !== "undefined" && (!Number.isInteger(shorten) || shorten <= 0)) {
    throw new Error("The 'shorten' property must be a positive integer");
  }
  if (shorten) {
    result = result.slice(0, shorten);
  }
  return result;
}

// src/date/formatDate.ts
function formatDate({ date = /* @__PURE__ */ new Date(), format }) {
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date property");
  }
  const dayName = days_default[(date.getDay() + 6) % 7];
  const dayNumber = date.getDate();
  const monthName = months_default[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const replacements = {
    \u10EC\u10DB: seconds,
    \u10EC\u10D7: minutes,
    \u10E1\u10D7: hours,
    \u10D3\u10E6\u10D4: dayName,
    \u10E0\u10D8\u10EA\u10EE\u10D5\u10D8: dayNumber,
    \u10D7\u10D5\u10D4: monthName,
    \u10EC\u10D4\u10DA\u10D8: year
  };
  return format.replace(/__([a-zA-Zა-ჰ]+)(\d+)?(_)?/g, (match, p1, p2, p3) => {
    const value = String(replacements[p1]);
    if (!p2) return value;
    const n = parseInt(p2, 10);
    if (isNaN(n)) return value;
    if (p3) {
      return value.slice(-n);
    } else {
      return value.slice(0, n);
    }
  });
}
export {
  currentMonth,
  formatDate,
  today
};
//# sourceMappingURL=index.mjs.map