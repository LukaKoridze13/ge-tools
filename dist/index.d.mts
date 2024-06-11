interface TodayProps {
    shorten?: number;
    date?: Date;
}
declare function today({ shorten, date }?: TodayProps): string;

interface CurrentMonthProps {
    shorten?: number;
    date?: Date;
}
declare function currentMonth({ shorten, date }?: CurrentMonthProps): string;

interface FormatDateProps {
    date?: Date;
    format: string;
}
declare function formatDate({ date, format }: FormatDateProps): string;

export { currentMonth, formatDate, today };
