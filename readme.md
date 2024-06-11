[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# ge-tools

> ეს პროექტი განკუთვნილია ქართულ ენაზე სხვადასხვა საჭირო გამოთვლებისთვის.

## დაწყება

ინსტრუქციების საშუალებით მარტივად შეძლებ დააყენო და გამოიყენო ge-tools.

## ინსტალაცია

```sh
$ npm install ge-tools
```

ან Yarn-ით:

```sh
$ yarn add ge-tools
```

## გამოყენება

```sh
import { currentMonth, today } from "ge-tools";

const text = `დღეს არის ${today}. მიმდინარე თვეა ${currentMonth}`;
```

## ფუნქციები

### currentMonth

აბრუნებს მიმდინარე თვის სახელს ქართულად

გამოყენება:

```
import { currentMonth } from "ge-tools";

const monthName = currentMonth();
console.log(monthName); // Output: ივნისი (for June)

const monthNameShort = currentMonth({shorten:3});
console.log(monthNameShort); // Output: ივნ (for June)

const otherMonth = currentMonth({shorten:3, date: new Date('2024-04-13')});
console.log(otherMonth); // Output: აპრ
```
**პარამეტრების ობიექტი**

| პარამეტრი        |        აღწერა      |
| ---------------- |:------------------:|
| shorten: integer | ამოკლებს სახელს    |
| date: Date       | კონკრეტული თარიღის მიხედვით აბრუნებს პასუხს |

### today

აბრუნებს მიმდინარე დღის სახელს ქართულად

გამოყენება:

```
import { today } from "ge-tools";

const day = today();
console.log(day); // Output: სამშაბათი

const dayNameShort = today({shorten:3});
console.log(dayNameShort); // Output: სამ

const otherDay = today({date: new Date('2002-04-13')});
console.log(otherDay); // Output: შაბათი
```
**პარამეტრების ობიექტი**

| პარამეტრი        |        აღწერა      |
| ---------------- |:------------------:|
| shorten: integer | ამოკლებს სახელს    |
| date: Date       | კონკრეტული თარიღის მიხედვით აბრუნებს პასუხს |

### formatDate

აბრუნებს თარიღს სასურველი ფორმატის მიხედვით

* __label: label-ის მაგივრად სვავთ იმ ფორმატს რაც გინდათ, შეიძლება იყოს წმ,წთ,სთ,დღე,თვე,რიცხვი,წელი.
* __labelN: N მაგივრად შეგიძლიათ ჩასვათ რიცხვი და მოჭრის იმდენ ასოს.
* __labelN_: N მაგივრად შეიძლია ჩასვა რიცხვი და მოჭრის ბოლო ასოებს.

გამოყენება:

```
import { formatDate } from "ge-tools";

const formattedDate1 = formatDate({ format: "__დღე, __თვე" });
console.log(formattedDate1); // Output: შაბათი, ივნისი

const specificDate = new Date("2024-05-15");
const formattedDate2 = formatDate({ date: specificDate, format: "__რიცხვი __თვე" });
console.log(formattedDate2); // Output: 15 მაისი

const formattedDate3 = formatDate({ format: "__სთ:__წთ:__წმ" });
console.log(formattedDate3); // Output: 15:23:45

const formattedDate4 = formatDate({ format: "__დღე, __თვე3" });
console.log(formattedDate4); // Output: შაბათი, ივნ

const formattedDate5 = formatDate({ format: "__დღე, თვე3_" });
console.log(formattedDate5); // Output: შაბათი, ისი

```
**პარამეტრების ობიექტი**

| პარამეტრი        |        აღწერა      |
| ---------------- |:------------------:|
| format: string  | აფორმატებს თაღირს ფორმატის მიხედვით, წესები იხ. ზემოთ    |
| date: Date       | კონკრეტული თარიღის მიხედვით აბრუნებს პასუხს |