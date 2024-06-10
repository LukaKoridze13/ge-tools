interface TodayProps {
    shorten?: number;
}
declare function today({ shorten }?: TodayProps): string;

interface CurrentMonthProps {
    shorten?: number;
}
declare function currentMonth({ shorten }?: CurrentMonthProps): string;

export { currentMonth, today };
